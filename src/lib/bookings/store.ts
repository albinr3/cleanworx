import mysql, { type Pool, type ResultSetHeader, type RowDataPacket } from "mysql2/promise";
import { createHash } from "node:crypto";
import { getDatabaseConfig } from "@/lib/bookings/config";
import type { BookingConversion, BookingMetrics, Ga4DeliveryStatus, SquareBooking, SquareBookingEvent } from "@/lib/bookings/types";

let pool: Pool | undefined;

function getPool(): Pool {
  if (!pool) {
    pool = mysql.createPool({
      ...getDatabaseConfig(),
      waitForConnections: true,
      connectionLimit: 5,
      queueLimit: 0,
      timezone: "Z",
    });
  }
  return pool;
}

function asDate(value?: string): Date | null {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

function getBookingId(event: SquareBookingEvent): string | null {
  return event.data.object?.booking?.id ?? event.data.id?.split(":")[0] ?? null;
}

export async function recordSquareEvent(event: SquareBookingEvent, rawBody: string, source: "webhook" | "events_api"): Promise<boolean> {
  const bookingId = getBookingId(event);
  if (!event.event_id || !bookingId) throw new Error("Square webhook is missing an event or booking ID");
  const [result] = await getPool().execute<ResultSetHeader>(
    `INSERT IGNORE INTO square_booking_webhook_events
      (event_id, booking_id, event_type, event_created_at, payload_sha256, source)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [event.event_id, bookingId, event.type, asDate(event.created_at), createHash("sha256").update(rawBody).digest("hex"), source],
  );
  return result.affectedRows === 1;
}

export async function upsertBookingState(booking: SquareBooking): Promise<void> {
  const accepted = booking.status === "ACCEPTED";
  await getPool().execute(
    `INSERT INTO square_booking_conversions
      (booking_id, last_square_status, last_square_version, last_square_updated_at, accepted_at, ga4_status)
     VALUES (?, ?, ?, ?, ?, ?)
     ON DUPLICATE KEY UPDATE
       last_square_status = IF(last_square_updated_at IS NULL OR VALUES(last_square_updated_at) >= last_square_updated_at, VALUES(last_square_status), last_square_status),
       last_square_version = IF(last_square_updated_at IS NULL OR VALUES(last_square_updated_at) >= last_square_updated_at, VALUES(last_square_version), last_square_version),
       last_square_updated_at = IF(last_square_updated_at IS NULL OR VALUES(last_square_updated_at) >= last_square_updated_at, VALUES(last_square_updated_at), last_square_updated_at),
       accepted_at = COALESCE(accepted_at, VALUES(accepted_at)),
       ga4_status = IF(ga4_status = 'not_eligible' AND VALUES(ga4_status) = 'pending', 'pending', ga4_status)`,
    [
      booking.id,
      booking.status,
      booking.version ?? null,
      asDate(booking.updated_at),
      accepted ? asDate(booking.updated_at) ?? new Date() : null,
      accepted ? "pending" : "not_eligible",
    ],
  );
}

type ConversionRow = RowDataPacket & {
  booking_id: string;
  ga4_status: Ga4DeliveryStatus;
  ga4_attempt_count: number;
};

export async function claimBookingForGa4(bookingId: string): Promise<BookingConversion | null> {
  const [result] = await getPool().execute<ResultSetHeader>(
    `UPDATE square_booking_conversions
     SET ga4_status = 'sending', ga4_attempt_count = ga4_attempt_count + 1,
         ga4_locked_until = DATE_ADD(UTC_TIMESTAMP(3), INTERVAL 15 MINUTE), ga4_last_error = NULL
     WHERE booking_id = ? AND ga4_status = 'pending'`,
    [bookingId],
  );
  if (result.affectedRows !== 1) return null;

  const [rows] = await getPool().execute<ConversionRow[]>(
    "SELECT booking_id, ga4_status, ga4_attempt_count FROM square_booking_conversions WHERE booking_id = ?",
    [bookingId],
  );
  const row = rows[0];
  if (!row) throw new Error("Claimed booking could not be read");
  return { bookingId: row.booking_id, ga4Status: row.ga4_status, ga4AttemptCount: row.ga4_attempt_count };
}

export async function markGa4Sent(bookingId: string): Promise<void> {
  await getPool().execute(
    `UPDATE square_booking_conversions
     SET ga4_status = 'sent', ga4_sent_at = UTC_TIMESTAMP(3), ga4_locked_until = NULL, ga4_last_error = NULL
     WHERE booking_id = ? AND ga4_status = 'sending'`,
    [bookingId],
  );
}

export async function markGa4Uncertain(bookingId: string, error: Error): Promise<void> {
  await getPool().execute(
    `UPDATE square_booking_conversions
     SET ga4_status = 'uncertain', ga4_locked_until = NULL, ga4_last_error = ?
     WHERE booking_id = ? AND ga4_status = 'sending'`,
    [error.message.slice(0, 512), bookingId],
  );
}

export async function getPendingBookingIds(limit = 100): Promise<string[]> {
  const [rows] = await getPool().query<Array<RowDataPacket & { booking_id: string }>>(
    "SELECT booking_id FROM square_booking_conversions WHERE ga4_status = 'pending' ORDER BY accepted_at ASC LIMIT ?",
    [limit],
  );
  return rows.map((row) => row.booking_id);
}

export async function getBookingMetrics(): Promise<BookingMetrics> {
  const [rows] = await getPool().query<Array<RowDataPacket & { acceptedBookings: number; ga4SentBookings: number; pendingBookings: number; uncertainBookings: number }>>(
    `SELECT
      SUM(accepted_at IS NOT NULL) AS acceptedBookings,
      SUM(ga4_status = 'sent') AS ga4SentBookings,
      SUM(ga4_status IN ('pending', 'sending')) AS pendingBookings,
      SUM(ga4_status = 'uncertain') AS uncertainBookings
     FROM square_booking_conversions`,
  );
  const row = rows[0];
  return {
    acceptedBookings: Number(row?.acceptedBookings ?? 0),
    ga4SentBookings: Number(row?.ga4SentBookings ?? 0),
    pendingBookings: Number(row?.pendingBookings ?? 0),
    uncertainBookings: Number(row?.uncertainBookings ?? 0),
  };
}

export async function startReconciliationRun(): Promise<number> {
  const [result] = await getPool().execute<ResultSetHeader>(
    "INSERT INTO square_booking_reconciliation_runs (status) VALUES ('running')",
  );
  return result.insertId;
}

export async function completeReconciliationRun(
  id: number,
  details: BookingMetrics & { eventsExamined: number; eventsRecorded: number; status: "completed" | "needs_review" },
): Promise<void> {
  await getPool().execute(
    `UPDATE square_booking_reconciliation_runs
     SET completed_at = UTC_TIMESTAMP(3), events_examined = ?, events_recorded = ?, accepted_bookings = ?,
         ga4_sent_bookings = ?, pending_bookings = ?, uncertain_bookings = ?, status = ?
     WHERE id = ?`,
    [details.eventsExamined, details.eventsRecorded, details.acceptedBookings, details.ga4SentBookings, details.pendingBookings, details.uncertainBookings, details.status, id],
  );
}

export async function failReconciliationRun(id: number, error: Error): Promise<void> {
  await getPool().execute(
    "UPDATE square_booking_reconciliation_runs SET completed_at = UTC_TIMESTAMP(3), status = 'failed', error_message = ? WHERE id = ?",
    [error.message.slice(0, 512), id],
  );
}

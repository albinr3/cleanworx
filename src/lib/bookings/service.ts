import { sendBookingCompletedToGa4 } from "@/lib/bookings/ga4";
import { retrieveSquareBooking, searchRecentSquareBookingEvents } from "@/lib/bookings/square";
import {
  claimBookingForGa4,
  completeReconciliationRun,
  failReconciliationRun,
  getBookingMetrics,
  getPendingBookingIds,
  markGa4Sent,
  markGa4Uncertain,
  recordSquareEvent,
  startReconciliationRun,
  upsertBookingState,
} from "@/lib/bookings/store";
import type { ReconciliationReport, SquareBookingEvent } from "@/lib/bookings/types";

async function deliverBookingToGa4(bookingId: string): Promise<void> {
  const claimed = await claimBookingForGa4(bookingId);
  if (!claimed) return;

  try {
    await sendBookingCompletedToGa4();
    await markGa4Sent(bookingId);
  } catch (error) {
    const normalized = error instanceof Error ? error : new Error("Unknown GA4 delivery error");
    // A network failure can occur after Google receives the event. Do not retry this
    // automatically, because GA4 has no idempotency key and a retry could double count.
    await markGa4Uncertain(bookingId, normalized);
  }
}

export async function processSquareBookingEvent(
  event: SquareBookingEvent,
  rawBody: string,
  source: "webhook" | "events_api" = "webhook",
): Promise<{ duplicate: boolean }> {
  const wasRecorded = await recordSquareEvent(event, rawBody, source);
  if (!wasRecorded) return { duplicate: true };

  const bookingId = event.data.object?.booking?.id ?? event.data.id?.split(":")[0];
  if (!bookingId) throw new Error("Square event is missing a booking ID");
  const booking = event.data.object?.booking ?? await retrieveSquareBooking(bookingId);
  await upsertBookingState(booking);
  await deliverBookingToGa4(booking.id);
  return { duplicate: false };
}

export async function runBookingReconciliation(): Promise<ReconciliationReport> {
  const runId = await startReconciliationRun();
  try {
    const events = await searchRecentSquareBookingEvents();
    let eventsRecorded = 0;

    for (const event of events) {
      const result = await processSquareBookingEvent(event, JSON.stringify(event), "events_api");
      if (!result.duplicate) eventsRecorded += 1;
    }

    for (const bookingId of await getPendingBookingIds()) {
      await deliverBookingToGa4(bookingId);
    }

    const metrics = await getBookingMetrics();
    const status: ReconciliationReport["status"] = metrics.pendingBookings === 0 && metrics.uncertainBookings === 0
      ? "completed"
      : "needs_review";
    const report = { eventsExamined: events.length, eventsRecorded, ...metrics, status };
    await completeReconciliationRun(runId, report);
    return report;
  } catch (error) {
    const normalized = error instanceof Error ? error : new Error("Unknown reconciliation error");
    await failReconciliationRun(runId, normalized);
    throw normalized;
  }
}

export async function getBookingReconciliationMetrics() {
  return getBookingMetrics();
}

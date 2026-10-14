import { getSquareConfig } from "@/lib/bookings/config";
import type { SquareBooking, SquareBookingEvent } from "@/lib/bookings/types";

type SquareApiBookingResponse = { booking?: SquareBooking };
type SquareEventsResponse = { cursor?: string; events?: SquareBookingEvent[] };

function squareHeaders() {
  const config = getSquareConfig();
  return {
    Authorization: `Bearer ${config.accessToken}`,
    "Square-Version": config.apiVersion,
    "Content-Type": "application/json",
  };
}

async function squareFetch(path: string, init: RequestInit = {}): Promise<Response> {
  const { apiBaseUrl } = getSquareConfig();
  const response = await fetch(`${apiBaseUrl}${path}`, {
    ...init,
    headers: { ...squareHeaders(), ...init.headers },
    signal: AbortSignal.timeout(8_000),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Square API request failed with HTTP ${response.status}`);
  }

  return response;
}

export async function retrieveSquareBooking(bookingId: string): Promise<SquareBooking> {
  const response = await squareFetch(`/v2/bookings/${encodeURIComponent(bookingId)}`, { method: "GET" });
  const body = (await response.json()) as SquareApiBookingResponse;
  if (!body.booking?.id || !body.booking.status) throw new Error("Square returned an incomplete booking");
  return body.booking;
}

export async function searchRecentSquareBookingEvents(): Promise<SquareBookingEvent[]> {
  const events: SquareBookingEvent[] = [];
  const startAt = new Date(Date.now() - 28 * 24 * 60 * 60 * 1_000).toISOString();
  const query = {
    filter: {
      event_types: ["booking.created", "booking.updated"],
      created_at: { start_at: startAt },
    },
  };
  let cursor: string | undefined;

  do {
    const response = await squareFetch("/v2/events", {
      method: "POST",
      body: JSON.stringify({ limit: 100, query, ...(cursor ? { cursor } : {}) }),
    });
    const body = (await response.json()) as SquareEventsResponse;
    events.push(...(body.events ?? []).filter((event) => event.type === "booking.created" || event.type === "booking.updated"));
    cursor = body.cursor;
  } while (cursor && events.length < 2_000);

  return events;
}

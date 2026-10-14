import { getGa4Config } from "@/lib/bookings/config";

export async function sendBookingCompletedToGa4(): Promise<void> {
  const config = getGa4Config();
  const endpoint = new URL("https://www.google-analytics.com/mp/collect");
  endpoint.searchParams.set("measurement_id", config.measurementId);
  endpoint.searchParams.set("api_secret", config.apiSecret);

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: config.clientId,
      events: [{ name: "booking_completed", params: { engagement_time_msec: 1 } }],
    }),
    signal: AbortSignal.timeout(8_000),
  });

  if (!response.ok) throw new Error(`GA4 Measurement Protocol returned HTTP ${response.status}`);
}

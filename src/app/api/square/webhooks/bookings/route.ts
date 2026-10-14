import { createHmac, timingSafeEqual } from "node:crypto";
import { getWebhookConfig } from "@/lib/bookings/config";
import { processSquareBookingEvent } from "@/lib/bookings/service";
import type { SquareBookingEvent } from "@/lib/bookings/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function hasValidSquareSignature(rawBody: string, signature: string | null): boolean {
  if (!signature) return false;
  const config = getWebhookConfig();
  const expected = createHmac("sha256", config.signatureKey)
    .update(config.notificationUrl + rawBody, "utf8")
    .digest();

  let received: Buffer;
  try {
    received = Buffer.from(signature, "base64");
  } catch {
    return false;
  }

  return received.length === expected.length && timingSafeEqual(received, expected);
}

function isBookingEvent(value: unknown): value is SquareBookingEvent {
  if (!value || typeof value !== "object") return false;
  const event = value as Partial<SquareBookingEvent>;
  return Boolean(event.event_id && (event.type === "booking.created" || event.type === "booking.updated") && event.data);
}

export async function POST(request: Request) {
  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return Response.json({ error: "Unable to read request body" }, { status: 400 });
  }

  try {
    if (!hasValidSquareSignature(rawBody, request.headers.get("x-square-hmacsha256-signature"))) {
      return Response.json({ error: "Invalid Square signature" }, { status: 403 });
    }
  } catch (error) {
    console.error("Square webhook configuration error", error);
    return Response.json({ error: "Webhook is not configured" }, { status: 503 });
  }

  let event: unknown;
  try {
    event = JSON.parse(rawBody);
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }
  if (!isBookingEvent(event)) return Response.json({ error: "Unsupported webhook event" }, { status: 400 });

  try {
    const result = await processSquareBookingEvent(event, rawBody);
    return Response.json({ received: true, duplicate: result.duplicate }, { status: 202 });
  } catch (error) {
    console.error("Square booking webhook processing failed", error);
    // No 2xx here: Square retries delivery and the event is also recoverable through
    // the scheduled Events API reconciliation.
    return Response.json({ error: "Webhook processing failed" }, { status: 503 });
  }
}

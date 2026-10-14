import { timingSafeEqual } from "node:crypto";
import { getCronSecret } from "@/lib/bookings/config";
import { getBookingReconciliationMetrics, runBookingReconciliation } from "@/lib/bookings/service";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function isAuthorized(request: Request): boolean {
  const token = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "") ?? "";
  let expected: string;
  try {
    expected = getCronSecret();
  } catch {
    return false;
  }
  const receivedBuffer = Buffer.from(token);
  const expectedBuffer = Buffer.from(expected);
  return receivedBuffer.length === expectedBuffer.length && timingSafeEqual(receivedBuffer, expectedBuffer);
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) return Response.json({ error: "Unauthorized" }, { status: 401 });
  try {
    return Response.json(await getBookingReconciliationMetrics());
  } catch (error) {
    console.error("Booking reconciliation metrics failed", error);
    return Response.json({ error: "Metrics unavailable" }, { status: 503 });
  }
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) return Response.json({ error: "Unauthorized" }, { status: 401 });
  try {
    return Response.json(await runBookingReconciliation());
  } catch (error) {
    console.error("Booking reconciliation failed", error);
    return Response.json({ error: "Reconciliation failed" }, { status: 503 });
  }
}

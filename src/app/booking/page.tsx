import { redirect } from "next/navigation";
import { BOOKING_URL } from "@/data/autodetailData";

export default function Page() {
  redirect(BOOKING_URL);
}

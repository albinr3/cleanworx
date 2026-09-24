import Link from "next/link";
import { Calendar } from "lucide-react";

export function BookingLink({ label = "Book Now", className = "" }: { label?: string; className?: string }) {
  return <Link href="/booking" className={`inline-flex items-center justify-center gap-2 rounded-lg bg-[#1277ff] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#1277ff]/25 transition hover:bg-[#0d62d6] ${className}`}><Calendar className="h-4 w-4" />{label}</Link>;
}

import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { SiteShell } from "@/components/autodetail/SiteShell";

export const metadata: Metadata = {
  title: {
    absolute: "Book Your Appointment | CleanWorx",
  },
  description:
    "Book your auto detailing, ceramic coating, or mobile appointment with CleanWorx in Basking Ridge, NJ. Simple booking and upfront pricing.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <SiteShell>
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#0c0d11] py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(18,119,255,0.2),transparent_38%)]" />
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#4da3ff]">
            CleanWorx Auto Detailing &amp; Ceramic Coating
          </p>
          <h1 className="mt-4 text-4xl font-black uppercase tracking-tight text-white sm:text-6xl">
            Book Your Appointment
          </h1>
          <p className="mt-6 text-base leading-8 text-neutral-300 sm:text-lg">
            Online booking will be available soon. For current appointment availability or a quote, contact CleanWorx directly.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <a href="tel:+19088992832" className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#1277ff] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#0d62d6]">
              <Phone className="h-5 w-5" />
              Call 908-899-2832
            </a>
            <a href="mailto:cleanworxnj@gmail.com" className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/15 bg-white/5 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10">
              <Mail className="h-5 w-5" />
              Email CleanWorx
            </a>
          </div>
          <p className="mt-6 text-sm text-neutral-400">
            Monday–Saturday, 9:00 AM–5:00 PM · Closed Sunday
          </p>
        </div>
      </section>
    </SiteShell>
  );
}

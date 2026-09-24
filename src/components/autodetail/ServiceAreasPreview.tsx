import Link from "next/link";
import { MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/autodetail/ScrollReveal";

export function ServiceAreasPreview() {
  return <section className="bg-[#0a0a0c] py-16 sm:py-20 lg:py-28">
    <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
      <ScrollReveal animation="fade-right" duration={700}>
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#4da3ff]">Basking Ridge, New Jersey</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">Serving Basking Ridge and Nearby Communities</h2>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-400 sm:text-base">CleanWorx operates from our Basking Ridge studio at 19 E. Henry Street and sends mobile detailing vans across Somerset, Morris, and Union counties. Check our verified service towns or call to schedule an in-shop or mobile visit.</p>
      </ScrollReveal>
      <ScrollReveal animation="fade-left" delay={120} duration={700}>
        <div className="rounded-2xl border border-white/10 bg-[#14151a] p-6 sm:p-8">
          <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#1277ff]" /><div><p className="font-bold text-white">CleanWorx Auto Detailing &amp; Ceramic Coating</p><p className="mt-1 text-sm leading-6 text-neutral-400">19 E. Henry Street, Basking Ridge, NJ 07920</p></div></div>
          <Link href="/service-areas" className="mt-6 inline-flex rounded-lg bg-[#1277ff] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0d62d6]">View service areas</Link>
        </div>
      </ScrollReveal>
    </div>
  </section>;
}

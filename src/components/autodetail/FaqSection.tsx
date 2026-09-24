import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQS } from "@/data/autodetailData";

export function FaqSection() {
  return (
    <section id="faq" className="relative bg-[#0a0a0c] py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">Questions and appointment guidance</p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-neutral-400 sm:text-base">Answers about complete detailing, coating, paint correction, mobile availability, and requesting a quote.</p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq) => (
            <details key={faq.id} className="group overflow-hidden rounded-xl border border-white/10 bg-[#14151b] transition-colors hover:border-white/20">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-5 text-left text-sm font-bold text-white marker:hidden [&::-webkit-details-marker]:hidden sm:p-6 sm:text-base">
                <span>{faq.question}</span>
                <ChevronDown className="h-5 w-5 shrink-0 text-[#4da3ff] transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
              </summary>
              <div className="border-t border-white/10 px-5 pb-5 sm:px-6 sm:pb-6">
                <p className="pt-4 text-sm leading-7 text-neutral-300">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-stretch justify-between gap-4 rounded-2xl border border-white/5 bg-[#14151b] p-5 sm:mt-12 sm:flex-row sm:items-center sm:p-6">
          <div className="flex items-center gap-3 text-left">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1277ff]/10 text-[#1277ff]">
              <HelpCircle className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Have a specific question about your vehicle?</p>
              <p className="text-xs text-neutral-400">Call or message us directly to discuss your vehicle and schedule an appointment.</p>
            </div>
          </div>
          <a href="tel:+19088992832" className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-3 text-xs font-bold text-white transition hover:bg-white/15">Call 908-899-2832</a>
        </div>
      </div>
    </section>
  );
}

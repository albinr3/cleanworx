"use client";

import { useState } from "react";
import { FAQS } from "@/data/autodetailData";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-[#0a0a0c]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-widest text-neutral-400 uppercase mb-3">
            <span className="text-[#1277ff] font-mono font-bold">05</span>
            <span className="w-1 h-1 rounded-full bg-[#1277ff]" />
            <span>Specifications &amp; Inquiries</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight text-balance">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-base text-neutral-400 max-w-2xl mx-auto text-pretty">
            Got questions about our detailing process, ceramic coats, or booking? Here are quick answers to our most common inquiries.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3.5">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#14151b] border-white/15 border-l-2 border-l-[#1277ff] shadow-xl"
                    : "bg-[#101115] border-white/5 hover:border-white/10"
                }`}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-white flex items-center gap-3">
                    <span className="font-mono text-xs text-neutral-400">
                      {faq.id.replace("faq-", "Q0")}
                    </span>
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-md flex items-center justify-center bg-white/5 text-neutral-300 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#1277ff] text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-neutral-300 leading-relaxed border-t border-white/5 animate-in fade-in slide-in-from-top-2 duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions callout */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#14151b] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-[#1277ff]/10 text-[#1277ff] flex items-center justify-center">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Have a specific question about your car?</p>
              <p className="text-xs text-neutral-400">Our master detailers are available to advise you.</p>
            </div>
          </div>
          <a
            href="tel:+1234567890"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 px-5 py-2.5 text-xs font-bold text-white transition-all"
          >
            Call +1 (234) 567-890
          </a>
        </div>

      </div>
    </section>
  );
}

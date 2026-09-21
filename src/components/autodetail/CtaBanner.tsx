"use client";

import { Calendar, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/autodetail/ScrollReveal";

interface CtaBannerProps {
  onOpenBooking: () => void;
}

export function CtaBanner({ onOpenBooking }: CtaBannerProps) {
  return (
    <section className="relative w-full bg-[#1277ff] py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 text-center lg:text-left">
          <ScrollReveal animation="fade-right" duration={750} className="max-w-3xl">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight uppercase text-balance">
              Want your car to shine like new again?
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-white/90 font-medium text-pretty">
              Book your appointment today and give your vehicle the showroom finish it deserves.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-left" delay={150} duration={750} className="w-full sm:w-auto flex-shrink-0 flex justify-center">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-lg bg-[#0a0a0c] px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-white shadow-2xl hover:bg-neutral-900 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#1277ff]" />
              <span>Make Appointment</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

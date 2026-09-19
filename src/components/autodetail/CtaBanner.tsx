"use client";

import { Calendar, ArrowRight } from "lucide-react";

interface CtaBannerProps {
  onOpenBooking: () => void;
}

export function CtaBanner({ onOpenBooking }: CtaBannerProps) {
  return (
    <section className="relative w-full bg-[#1277ff] py-16 lg:py-20 overflow-hidden">
      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight uppercase text-balance">
              Want your car to shine like new again?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/90 font-medium text-pretty">
              Book your appointment today and give your vehicle the showroom finish it deserves.
            </p>
          </div>

          <div className="flex-shrink-0">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-3 rounded-lg bg-[#0a0a0c] px-8 py-4 text-base font-bold text-white shadow-2xl hover:bg-neutral-900 hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer"
            >
              <Calendar className="w-5 h-5 text-[#1277ff]" />
              <span>Make Appointment</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

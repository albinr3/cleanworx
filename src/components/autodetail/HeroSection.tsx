"use client";

import { Calendar, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export function HeroSection({ onOpenBooking }: HeroSectionProps) {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover object-center scale-105"
        >
          <source src="/images/autodetail/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark Vignette and Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-black/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center flex flex-col items-center">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase max-w-5xl leading-[1.02] text-balance drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
          Luxury <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-neutral-400">Detail</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-neutral-200 font-medium leading-relaxed text-pretty drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          AutoDetail offers efficient, reliable detailing that restores shine and preserves your vehicle. From multi-stage paint correction to permanent ceramic shields.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-lg bg-[#1277ff] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#1277ff]/25 hover:bg-[#0d62d6] hover:shadow-xl hover:shadow-[#1277ff]/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all cursor-pointer"
          >
            <Calendar className="w-5 h-5" />
            <span>Make Appointment</span>
          </button>

          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 hover:border-white/25 px-8 py-4 text-base font-semibold text-white backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

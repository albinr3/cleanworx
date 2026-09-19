"use client";

import Image from "next/image";
import { Calendar } from "lucide-react";

interface CockpitBannerProps {
  onOpenBooking: () => void;
}

export function CockpitBanner({ onOpenBooking }: CockpitBannerProps) {
  return (
    <section className="relative w-full h-[400px] sm:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/autodetail/c1-scaled.webp"
        alt="Luxury Car Interior & Cockpit"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-[#0a0a0c]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-black/60 backdrop-blur-md px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wider text-neutral-200 uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1277ff]" />
          <span>Precision Cockpit Restoration</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight text-balance">
          Experience The Ultimate Clean &amp; Protection
        </h2>

        <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto text-pretty">
          Every stitch, leather contour, and touchscreen display treated with surgical precision and anti-static formulas.
        </p>

        <div className="mt-8">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 rounded-lg bg-[#1277ff] px-8 py-3.5 text-sm font-bold text-white shadow-xl shadow-[#1277ff]/30 hover:bg-[#0d62d6] active:scale-[0.98] transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule Interior Restoration</span>
          </button>
        </div>
      </div>
    </section>
  );
}

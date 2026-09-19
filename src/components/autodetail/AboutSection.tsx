"use client";

import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export function AboutSection({ onOpenBooking }: AboutSectionProps) {
  const highlights = [
    "Certified Master Paint Polishers & Technicians",
    "100% pH-Neutral & Eco-Safe Formula Products",
    "Clean-Room Climate-Controlled Detailing Studio",
    "Full Manufacturer Warranty on Ceramic Coatings",
  ];

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-[#0a0a0c] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Dual Image Composition */}
          <div className="relative">
            <div className="relative grid grid-cols-2 gap-4 sm:gap-6">
              {/* Image 1: Paint Correction */}
              <div className="relative h-[320px] sm:h-[420px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                <Image
                  src="/images/autodetail/p1.webp"
                  alt="AutoDetail Paint Correction Specialist"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 text-xs font-bold uppercase tracking-wider text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                  Paint Correction
                </span>
              </div>

              {/* Image 2: Interior Detailing */}
              <div className="relative h-[320px] sm:h-[420px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl mt-8 sm:mt-12 group">
                <Image
                  src="/images/autodetail/p2.webp"
                  alt="AutoDetail Interior Deep Clean"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 text-xs font-bold uppercase tracking-wider text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                  Interior Deep Clean
                </span>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:-left-6 rounded-xl bg-[#1277ff] p-5 shadow-2xl text-white flex items-center gap-4 z-20 border border-white/20">
              <div className="text-3xl sm:text-4xl font-black tabular-nums">20+</div>
              <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider leading-tight">
                Years Of <br />Excellence
              </div>
            </div>
          </div>

          {/* Right: Copy & Highlights */}
          <div className="flex flex-col items-start lg:pl-4">
            <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-widest text-neutral-400 uppercase mb-3">
              <span className="text-[#1277ff] font-mono font-bold">01</span>
              <span className="w-1 h-1 rounded-full bg-[#1277ff]" />
              <span>Heritage &amp; Workflow</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
              Restoring Lasting Shine, Inside and Out
            </h2>

            <p className="mt-6 text-base sm:text-lg text-neutral-300 leading-relaxed">
              At AutoDetail, we’re passionate about making every vehicle look its absolute best—inside and out. From restoring showroom-level gloss to deep-cleaning interiors, our expert team delivers flawless results with care and precision.
            </p>

            <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
              Whether you drive an exotic supercar, a luxury daily commuter, or a classic restoration project, our tailored detailing workflows ensure your finish is protected against oxidation, swirl marks, road debris, and weathering.
            </p>

            {/* Checklist */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1277ff] flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-neutral-200">{item}</span>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 rounded-md bg-[#1277ff] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#1277ff]/25 hover:bg-[#0d62d6] hover:shadow-xl transition-all cursor-pointer"
              >
                <span>Read More & Book</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3.5 text-sm font-semibold text-neutral-300 hover:text-white transition-all"
              >
                <span>View All Services</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

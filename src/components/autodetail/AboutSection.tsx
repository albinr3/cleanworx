"use client";

import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/autodetail/ScrollReveal";

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
    <section id="about" className="relative py-16 sm:py-20 lg:py-28 bg-[#0a0a0c] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left: Dual Image Composition with Staggered Scroll Reveal */}
          <div className="relative">
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Image 1: Paint Correction */}
              <ScrollReveal animation="fade-right" duration={850}>
                <div className="relative h-[260px] sm:h-[420px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                  <Image
                    src="/images/autodetail/paint-correction.png"
                    alt="AutoDetail Paint Correction Specialist"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 text-xs font-bold uppercase tracking-wider text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                    Paint Correction
                  </span>
                </div>
              </ScrollReveal>

              {/* Image 2: Interior Detailing */}
              <ScrollReveal animation="fade-right" delay={180} duration={850}>
                <div className="relative h-[260px] sm:h-[420px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl mt-0 sm:mt-12 group">
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
              </ScrollReveal>
            </div>

            {/* Floating Experience Badge */}
            <ScrollReveal animation="zoom-in" delay={360} duration={650} className="absolute -bottom-5 sm:-bottom-6 right-4 sm:right-auto sm:-left-6 z-20">
              <div className="rounded-xl bg-[#1277ff] p-3.5 sm:p-5 shadow-2xl text-white flex items-center gap-3 sm:gap-4 border border-white/20 hover:scale-105 transition-transform duration-300">
                <div className="text-2xl sm:text-4xl font-black tabular-nums">20+</div>
                <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider leading-tight">
                  Years Of <br />Excellence
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Copy & Highlights */}
          <div className="flex flex-col items-start lg:pl-4 mt-6 sm:mt-8 lg:mt-0">
            <ScrollReveal animation="fade-left" duration={750}>
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-widest text-neutral-400 uppercase mb-3">
                <span className="text-[#1277ff] font-mono font-bold">01</span>
                <span className="w-1 h-1 rounded-full bg-[#1277ff]" />
                <span>Heritage &amp; Workflow</span>
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
                Restoring Lasting Shine, Inside and Out
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={150} duration={750}>
              <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-neutral-300 leading-relaxed">
                At AutoDetail, we’re passionate about making every vehicle look its absolute best—inside and out. From restoring showroom-level gloss to deep-cleaning interiors, our expert team delivers flawless results with care and precision.
              </p>

              <p className="mt-3 sm:mt-4 text-xs sm:text-base text-neutral-400 leading-relaxed">
                Whether you drive an exotic supercar, a luxury daily commuter, or a classic restoration project, our tailored detailing workflows ensure your finish is protected against oxidation, swirl marks, road debris, and weathering.
              </p>
            </ScrollReveal>

            {/* Checklist */}
            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              {highlights.map((item, idx) => (
                <ScrollReveal
                  key={item}
                  animation="fade-up"
                  delay={240 + idx * 75}
                  duration={600}
                >
                  <div className="flex items-start gap-2.5 group">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1277ff] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-xs sm:text-sm font-medium text-neutral-200">{item}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Action buttons */}
            <ScrollReveal animation="fade-up" delay={450} duration={700} className="w-full">
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full">
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-[#1277ff] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#1277ff]/25 hover:bg-[#0d62d6] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>Read More &amp; Book</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3.5 text-sm font-semibold text-neutral-300 hover:text-white hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all"
                >
                  <span>View All Services</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}

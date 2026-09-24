"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/autodetail/ScrollReveal";

const detailPhases = [
  {
    step: "01",
    tag: "Cabin Deep Clean",
    title: "A cabin that feels fresh again",
    description: "Steam cleaning and shampooing for seats, carpets, and upholstery.",
  },
  {
    step: "02",
    tag: "Interior Surfaces",
    title: "Details you notice every drive",
    description: "Leather, trim, dashboard surfaces, glass, and mirrors are cleaned and conditioned.",
  },
  {
    step: "03",
    tag: "Decontamination",
    title: "More than a quick wash",
    description: "Hand washing and paint decontamination remove embedded road grime before protection.",
  },
  {
    step: "04",
    tag: "Surface Protection",
    title: "Six-month ceramic wax finish",
    description: "The full exterior detail includes a durable ceramic wax layer for water beading and gloss.",
  },
];

export function CockpitBanner() {
  return (
    <section
      className="relative flex min-h-[640px] w-full items-center justify-center overflow-hidden px-4 py-16 sm:min-h-[700px] sm:py-24"
    >
      <div className="absolute -inset-y-[8%] inset-x-0 scale-105">
        <Image
          src="/images/autodetail/pexels-mikebirdy-1035108.webp"
          alt="CleanWorx interior detailing visual"
          fill
          sizes="100vw"
          unoptimized
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-[#06080e]/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#06080e]/90 via-[#06080e]/40 to-[#06080e]/95" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(290px,390px)] lg:gap-14">
          <div className="text-center lg:text-left">
            <ScrollReveal animation="zoom-in" duration={600}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#8fc5ff] backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1277ff]" />
                <span>Complete Detailing Process</span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={120} duration={750}>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#8fc5ff]">
                What a Complete Car Detail Can Include
              </h2>
              <p className="mt-3 text-balance text-3xl font-black uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
                Bring Your Vehicle Back to Showroom Condition
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={220} duration={750}>
              <p className="mx-auto mt-3 max-w-2xl text-pretty text-sm text-neutral-300 sm:mt-4 sm:text-base md:mx-0 md:text-lg">
                From a deep-cleaned cabin to a decontaminated exterior, we tailor the right full detail to your vehicle. You get a clear recommendation and price before work begins.
              </p>
            </ScrollReveal>

            {/* Luxury Editorial Grid — Zero Generic AI Icons */}
            <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 overflow-hidden rounded-2xl border border-white/10 bg-[#090d16]/85 text-left shadow-2xl backdrop-blur-xl sm:grid-cols-2 lg:mx-0">
            {detailPhases.map((phase, idx) => (
              <div
                key={phase.step}
                className={`group relative p-5 sm:p-6 transition-colors duration-300 hover:bg-white/[0.03] ${
                  idx === 0
                    ? "border-b border-white/10 sm:border-r"
                    : idx === 1
                    ? "border-b border-white/10"
                    : idx === 2
                    ? "border-b border-white/10 sm:border-b-0 sm:border-r"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold tracking-widest text-[#1277ff]">
                    {phase.step}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                    {phase.tag}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white sm:text-base group-hover:text-white transition-colors">
                  {phase.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-neutral-300 sm:text-sm">
                  {phase.description}
                </p>
              </div>
            ))}
            </div>

            <div className="mt-6 flex flex-col items-center justify-center gap-1 lg:items-start">
              <p className="text-sm font-bold tracking-wide text-white sm:text-base">
                Complete Interior + Exterior Detail from $405+
              </p>
              <p className="text-xs text-neutral-400 sm:text-sm">
                Clear scope and upfront pricing before work begins. Final pricing depends on vehicle size and surface condition.
              </p>
            </div>

            <ScrollReveal animation="zoom-in" delay={320} duration={650}>
              <div className="mt-7">
                <Link
                  href="/booking"
                  className="group inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-lg bg-[#1277ff] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-[#1277ff]/30 transition-all hover:-translate-y-0.5 hover:bg-[#0d62d6] active:scale-[0.98] sm:w-auto"
                >
                  <span>Get My Detail Recommendation</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-left" delay={180} duration={850}>
            <div className="relative mx-auto w-full max-w-[390px] overflow-hidden rounded-2xl border border-white/15 bg-[#090d16] shadow-2xl shadow-black/50 lg:mx-0">
              <video
                autoPlay
                className="aspect-[4/5] h-full w-full object-cover"
                loop
                muted
                onLoadedMetadata={({ currentTarget }) => {
                  currentTarget.defaultPlaybackRate = 2.5;
                  currentTarget.playbackRate = 2.5;
                }}
                playsInline
                poster="/images/autodetail/showroom-detail-poster.webp"
                preload="metadata"
              >
                <source src="/videos/showroom-detail.mp4" type="video/mp4" />
              </video>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06080e]/55 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between p-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">
                <span>CleanWorx Detail</span>
                <span className="rounded-full border border-white/25 bg-black/25 px-2 py-1">2.5×</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

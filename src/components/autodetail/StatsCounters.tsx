"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/autodetail/ScrollReveal";

interface AnimatedNumberProps {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  start: boolean;
  formatCommas?: boolean;
}

function AnimatedNumber({
  target,
  prefix = "",
  suffix = "",
  duration = 2000,
  start,
  formatCommas = true,
}: AnimatedNumberProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const easeOutExpo = (t: number): number => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutExpo(progress);

      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrameId);
  }, [start, target, duration]);

  const formatted = formatCommas ? count.toLocaleString() : count.toString();

  return (
    <span>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export function StatsCounters() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const current = sectionRef.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const pillars = [
    {
      number: "01",
      badgeLabel: "ON-DEMAND FLEET",
      image: "/images/autodetail/p2.webp",
      imagePosition: "object-center",
      title: "MOBILE AUTO DETAILING IN NJ",
      tagline: "Driveway and workplace appointments",
      description:
        "Skip the hassle of driving, arranging rides, or losing half your Saturday in a waiting room. We bring our fully self-contained mobile detailing rig directly to your driveway or office across Somerset County. You get showroom care without leaving home.",
      highlights: [
        "We come directly to your home or office",
        "Complete self-powered mobile detailing rig",
        "Transparent $35 flat-rate mobile fee",
      ],
      featured: false,
    },
    {
      number: "02",
      badgeLabel: "PRECISION CRAFT",
      image: "/images/autodetail/p1.webp",
      imagePosition: "object-center",
      title: "MACHINE POLISHING & PAINT CORRECTION",
      tagline: "Operating in Basking Ridge since 2019",
      description:
        "Every vehicle receives careful, hands-on attention. We measure clear-coat depth with digital gauges, use two-bucket hand wash methods, and perform multi-stage machine polishing. No automatic conveyor tunnels and no swirl-inducing brushes.",
      highlights: [
        "Consistent 5.0 Google review track record",
        "Digital paint-depth readings before polishing",
        "Thorough, unhurried hand wash and finish",
      ],
      featured: false,
    },
    {
      number: "03",
      badgeLabel: "HIGH-TICKET SHIELD",
      featuredBadge: "FLAGSHIP PROTECTION",
      image: "/images/autodetail/8-2.webp",
      imagePosition: "object-center",
      title: "CERTIFIED SYSTEM X CERAMIC COATING",
      tagline: "Multi-year hydrophobic paint protection",
      description:
        "As a certified System X ceramic coating installer, we apply commercial-grade ceramic protection that chemically bonds to your vehicle's clear coat. This delivers mirror-like gloss, hydrophobic water beading, and lasting defense against NJ winter road salt, acid rain, and UV damage.",
      highlights: [
        "Certified System X Ceramic installer",
        "1, 3, and 5-year coating protection options",
        "Winter road salt and UV oxidation barrier",
      ],
      featured: true,
    },
  ];

  const stats = [
    {
      numericValue: 2019,
      formatCommas: false,
      label: "Established In NJ",
      description: "Serving Basking Ridge & Somerset Co.",
    },
    {
      numericValue: 5,
      suffix: ".0 ★",
      formatCommas: false,
      label: "Google Review Rating",
      description: "Verified 5-star customer satisfaction",
    },
    {
      numericValue: 35,
      prefix: "$",
      suffix: " Flat",
      formatCommas: false,
      label: "Mobile Detailing Fee",
      description: "One-time fee per mobile appointment",
    },
    {
      numericValue: 6,
      suffix: " Days",
      formatCommas: false,
      label: "Weekly Availability",
      description: "Open Mon–Sat, 9:00 AM – 5:00 PM",
    },
  ];

  return (
    <section
      id="why-choose-us"
      ref={sectionRef}
      className="relative bg-gradient-to-b from-[#080d1d] via-[#0a1226] to-[#070a14] border-y border-[#1277ff]/20 py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      {/* Scroll-stopping Laser Beam Horizon at top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#1277ff] to-transparent z-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[3px] bg-gradient-to-r from-transparent via-[#00d4ff]/70 to-transparent blur-sm z-20 pointer-events-none" />

      {/* Atmospheric Luminous Spotlight Break: shifts the visual tone from dark charcoal to rich electric sapphire */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] max-w-full h-[550px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1277ff]/20 via-[#0055ff]/10 to-transparent blur-3xl pointer-events-none" />
      
      {/* Dynamic technical blueprint mesh grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1277ff0d_1px,transparent_1px),linear-gradient(to_bottom,#1277ff0d_1px,transparent_1px)] bg-[size:44px_44px] pointer-events-none opacity-60" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with High-Contrast Typography */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1277ff]/10 border border-[#1277ff]/30 text-xs font-bold tracking-widest text-[#6bb0ff] uppercase mb-4 backdrop-blur-md shadow-sm shadow-[#1277ff]/20">
              <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
              <span>The CleanWorx Advantage</span>
              <span className="text-white/30">|</span>
              <span className="font-mono text-neutral-400">Somerset County, NJ</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white text-balance font-heading">
              Why Choose <span className="bg-gradient-to-r from-white via-sky-200 to-[#4da3ff] bg-clip-text text-transparent">CleanWorx</span>
            </h2>

            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed text-pretty">
              Engineered around your convenience and vehicle value: self-contained mobile care delivered directly to your driveway, or dedicated service at our Basking Ridge studio.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Pillars Grid with Asymmetric Flagship Highlight & Custom 3D Emblems */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8 items-stretch pt-4">
          {pillars.map((pillar, idx) => {
            const isFeatured = pillar.featured;
            return (
              <ScrollReveal
                key={pillar.title}
                animation="fade-up"
                delay={idx * 130}
                duration={750}
                className="h-full flex"
              >
                <div className="relative w-full h-full flex flex-col">
                  {/* Flagship Crown Badge for Pillar 03 (Positioned outside overflow-hidden) */}
                  {isFeatured && pillar.featuredBadge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-[#1277ff] via-[#00c8ff] to-[#1277ff] text-white text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-lg shadow-[#1277ff]/50 z-30 ring-2 ring-black">
                      <Sparkles className="w-3.5 h-3.5 text-white fill-white animate-spin-slow" />
                      <span>{pillar.featuredBadge}</span>
                    </div>
                  )}

                  {/* Main Card Body */}
                  <div
                    className={`group relative flex flex-col justify-between w-full h-full rounded-2xl p-6 sm:p-8 transition-all duration-500 overflow-hidden ${
                      isFeatured
                        ? "bg-gradient-to-b from-[#142347] via-[#0f1a35] to-[#0a1020] border-2 border-[#1277ff] shadow-[0_0_60px_-15px_rgba(18,119,255,0.45)] lg:-translate-y-2 hover:shadow-[0_0_80px_-10px_rgba(18,119,255,0.7)]"
                        : "bg-gradient-to-b from-[#131622] via-[#0f111a] to-[#0a0c13] border border-white/10 hover:border-[#1277ff]/60 hover:shadow-2xl hover:shadow-[#1277ff]/20 hover:-translate-y-1.5"
                    }`}
                  >
                    <div>
                      <div className="mb-4 flex items-center justify-between text-[10px] font-mono font-bold tracking-widest uppercase">
                        <span className="text-[#6cb4ff]">{pillar.badgeLabel}</span>
                        <span className="text-neutral-500">Pillar {pillar.number}</span>
                      </div>

                      <div className="relative mb-6 aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-[#090b11]">
                        <div className="absolute inset-x-0 bottom-0 z-10 h-1/3 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                        <div className="relative h-full w-full transition-transform duration-700 group-hover:scale-[1.03]">
                          <Image
                            src={pillar.image}
                            alt={`CleanWorx ${pillar.title.toLowerCase()}`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className={`object-cover ${pillar.imagePosition}`}
                            priority={idx === 0}
                          />
                        </div>
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="text-lg sm:text-xl font-black tracking-tight text-white uppercase group-hover:text-[#6cb4ff] transition-colors leading-tight">
                        {pillar.title}
                      </h3>
                      <p className="mt-1.5 text-xs font-bold text-[#3894ff] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1277ff]" />
                        <span>{pillar.tagline}</span>
                      </p>

                      {/* Body Copy */}
                      <p className="mt-3.5 text-xs sm:text-sm text-neutral-300 leading-relaxed text-pretty">
                        {pillar.description}
                      </p>

                      {/* Value Highlights */}
                      <div className="mt-5 space-y-2.5 border-t border-white/10 pt-4">
                        {pillar.highlights.map((item) => (
                          <div key={item} className="flex items-start gap-2.5 text-xs text-neutral-200">
                            <div className="w-4 h-4 rounded-full bg-[#1277ff]/20 border border-[#1277ff]/40 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5 text-[#6cb4ff]" />
                            </div>
                            <span className="leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button Link */}
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <Link
                        href="/booking"
                        className={`inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                          isFeatured
                            ? "bg-[#1277ff] hover:bg-[#0066ee] text-white shadow-lg shadow-[#1277ff]/30"
                            : "bg-white/5 hover:bg-[#1277ff]/20 text-[#6cb4ff] hover:text-white border border-white/10 hover:border-[#1277ff]/40"
                        }`}
                      >
                        <span>Book this service</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Upgraded Authority Stat Strip */}
        <ScrollReveal animation="fade-up" delay={250} duration={750}>
          <div className="mt-14 sm:mt-20 p-6 sm:p-8 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1277ff]/5 via-transparent to-[#1277ff]/5 pointer-events-none" />
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 divide-y-0 lg:divide-x lg:divide-white/10 relative z-10">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col justify-between px-3 sm:px-6 py-2 group hover:bg-white/[0.02] rounded-xl transition-colors"
                >
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight tabular-nums font-heading">
                    <AnimatedNumber
                      target={stat.numericValue}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      formatCommas={stat.formatCommas}
                      start={isInView}
                    />
                  </div>
                  <div className="mt-2 text-xs sm:text-sm font-bold text-neutral-200">
                    {stat.label}
                  </div>
                  <div className="mt-1 text-[11px] sm:text-xs text-neutral-400 leading-snug">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

// Named alias so any reference to WhyChooseUsSection is supported
export { StatsCounters as WhyChooseUsSection };

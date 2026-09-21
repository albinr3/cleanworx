"use client";

import { useEffect, useState } from "react";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/autodetail/ScrollReveal";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export function HeroSection({ onOpenBooking }: HeroSectionProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-[75vh] sm:min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background Video with Scroll Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="w-full h-full will-change-transform transition-transform duration-75 ease-out"
          style={{
            transform: `translate3d(0, ${scrollY * 0.3}px, 0) scale(${1.05 + scrollY * 0.0002})`,
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover object-center"
          >
            <source src="/images/autodetail/hero-video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Dark Vignette and Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-black/30" />
      </div>

      {/* Hero Content with Scroll Fade & Parallax */}
      <div
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 text-center flex flex-col items-center will-change-transform"
        style={{
          transform: `translate3d(0, -${scrollY * 0.12}px, 0)`,
          opacity: Math.max(0, 1 - scrollY / 650),
        }}
      >
        {/* Floating Sub-eyebrow */}
        <ScrollReveal animation="fade-down" duration={700}>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-neutral-200 mb-5 sm:mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#1277ff]" />
            <span>The Art of Automotive Detailing</span>
          </div>
        </ScrollReveal>

        {/* Main Heading with Staggered Entrance */}
        <ScrollReveal animation="fade-up" delay={150} duration={850}>
          <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase max-w-5xl leading-[1.05] text-balance drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            Luxury <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-neutral-400">Detail</span>
          </h1>
        </ScrollReveal>

        {/* Subtitle with Delay */}
        <ScrollReveal animation="fade-up" delay={300} duration={850}>
          <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-lg md:text-xl text-neutral-200 font-medium leading-relaxed text-pretty drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            AutoDetail offers efficient, reliable detailing that restores shine and preserves your vehicle. From multi-stage paint correction to permanent ceramic shields.
          </p>
        </ScrollReveal>

        {/* CTA Buttons with Delay */}
        <ScrollReveal animation="fade-up" delay={450} duration={850} className="w-full sm:w-auto">
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-lg bg-[#1277ff] px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-white shadow-lg shadow-[#1277ff]/25 hover:bg-[#0d62d6] hover:shadow-xl hover:shadow-[#1277ff]/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Make Appointment</span>
            </button>

            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 hover:border-white/25 px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

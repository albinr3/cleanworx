"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { ScrollReveal } from "@/components/autodetail/ScrollReveal";

interface CockpitBannerProps {
  onOpenBooking: () => void;
}

export function CockpitBanner({ onOpenBooking }: CockpitBannerProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking && sectionRef.current) {
        window.requestAnimationFrame(() => {
          const rect = sectionRef.current?.getBoundingClientRect();
          if (rect) {
            // Compute distance from viewport center for parallax
            const windowHeight = window.innerHeight;
            const elementCenter = rect.top + rect.height / 2;
            const diff = (elementCenter - windowHeight / 2) * 0.15;
            setOffsetY(diff);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[360px] sm:h-[480px] md:h-[520px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with subtle Parallax Depth */}
      <div
        className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform"
        style={{
          transform: `translate3d(0, ${offsetY}px, 0) scale(1.05)`,
        }}
      >
        <Image
          src="/images/autodetail/pexels-mikebirdy-1035108.webp"
          alt="Luxury Car Detailing & Restoration"
          fill
          sizes="100vw"
          unoptimized
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Dark Vignette Overlays */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-[#0a0a0c]" />

      {/* Content with Staggered Scroll Reveal */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <ScrollReveal animation="zoom-in" duration={600}>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 backdrop-blur-md px-3.5 py-1 text-[11px] sm:text-xs font-semibold tracking-wider text-neutral-200 uppercase mb-3.5 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1277ff] animate-ping" />
            <span>Precision Cockpit Restoration</span>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={120} duration={750}>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight text-balance">
            Experience The Ultimate Clean &amp; Protection
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={220} duration={750}>
          <p className="mt-3 sm:mt-4 text-xs sm:text-base md:text-lg text-neutral-300 max-w-2xl mx-auto text-pretty">
            Every stitch, leather contour, and touchscreen display treated with surgical precision and anti-static formulas.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="zoom-in" delay={320} duration={650}>
          <div className="mt-6 sm:mt-8">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#1277ff] px-6 sm:px-8 py-3.5 text-sm font-bold text-white shadow-xl shadow-[#1277ff]/30 hover:bg-[#0d62d6] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Interior Restoration</span>
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

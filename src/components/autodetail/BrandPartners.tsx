"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { BRAND_PARTNERS } from "@/data/autodetailData";
import { ScrollReveal } from "@/components/autodetail/ScrollReveal";

export function BrandPartners() {
  // Triple array to ensure seamless infinite looping
  const displayPartners = [...BRAND_PARTNERS, ...BRAND_PARTNERS, ...BRAND_PARTNERS];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [stepWidth, setStepWidth] = useState(0);

  const itemRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Measure single item width on mount and resize
  const measureStep = useCallback(() => {
    if (itemRef.current) {
      setStepWidth(itemRef.current.getBoundingClientRect().width);
    }
  }, []);

  useEffect(() => {
    measureStep();
    window.addEventListener("resize", measureStep);
    return () => window.removeEventListener("resize", measureStep);
  }, [measureStep]);

  // Step interval: stays paused for 2.6s, then shifts by 1 logo
  useEffect(() => {
    if (isPaused || stepWidth === 0) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 2600);

    return () => clearInterval(timer);
  }, [isPaused, stepWidth]);

  // Handle loop reset seamlessly at transition end
  const handleTransitionEnd = () => {
    if (currentIndex >= BRAND_PARTNERS.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  return (
    <div
      className="relative w-full border-y border-white/[0.08] bg-[#0d0e12] py-8 sm:py-14 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Left/Right Edge Fades - slimmed on mobile to prevent obscuring logos */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-24 md:w-40 bg-gradient-to-r from-[#0d0e12] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-24 md:w-40 bg-gradient-to-l from-[#0d0e12] to-transparent z-10" />

      {/* Header Eyebrow */}
      <ScrollReveal animation="fade-down" className="mx-auto max-w-7xl px-3 sm:px-6 mb-6 sm:mb-8 text-center">
        <p className="text-[10px] sm:text-xs uppercase font-bold tracking-[0.2em] sm:tracking-[0.25em] text-neutral-400 font-mono">
          Trusted by owners of premium &amp; exotic vehicles worldwide
        </p>
      </ScrollReveal>

      {/* Sliding Carousel Track */}
      <ScrollReveal animation="fade-up" delay={150}>
        <div ref={containerRef} className="relative w-full overflow-hidden">
          <div
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(-${currentIndex * stepWidth}px)`,
              transition: isTransitioning
                ? "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)"
                : "none",
            }}
            className="flex items-center will-change-transform"
          >
            {displayPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                ref={index === 0 ? itemRef : null}
                className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-3 sm:px-6 md:px-8 flex items-center justify-center"
              >
                <div className="relative h-12 sm:h-16 md:h-20 w-28 sm:w-36 md:w-44 flex items-center justify-center group cursor-pointer transition-transform duration-300 hover:scale-110">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain filter brightness-0 invert opacity-90 group-hover:opacity-100 transition-all duration-300 drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]"
                    sizes="(max-width: 640px) 120px, (max-width: 1024px) 170px, 200px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}

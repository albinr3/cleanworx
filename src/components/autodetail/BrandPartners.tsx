"use client";

import Image from "next/image";
import { BRAND_PARTNERS } from "@/data/autodetailData";

export function BrandPartners() {
  // Duplicate array to achieve seamless infinite loop
  const displayPartners = [...BRAND_PARTNERS, ...BRAND_PARTNERS];

  return (
    <div className="relative w-full border-y border-white/5 bg-[#0e0f13] py-8 overflow-hidden">
      {/* Left/Right Edge Fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0e0f13] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0e0f13] to-transparent z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-4 text-center">
        <p className="text-xs uppercase font-bold tracking-widest text-neutral-400">
          Trusted by owners of premium & exotic vehicles worldwide
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="animate-marquee flex items-center gap-12 sm:gap-16 whitespace-nowrap">
          {displayPartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="relative h-10 w-24 sm:w-28 flex-shrink-0 opacity-45 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0 cursor-pointer"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

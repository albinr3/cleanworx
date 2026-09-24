"use client";

import Image from "next/image";
import Link from "next/link";
import { INSTAGRAM_IMAGES } from "@/data/autodetailData";
import { Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/autodetail/ScrollReveal";

function GalleryIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function InstagramGallery() {
  return (
    <section id="gallery" className="relative py-16 sm:py-20 lg:py-28 bg-[#0c0d11]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal animation="fade-up" duration={750}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 sm:gap-6 mb-8 sm:mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1277ff] mb-2 sm:mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1277ff]" />
                <span>RECENT WORK &amp; GALLERY</span>
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                See Our Recent Work
              </h2>
            </div>

            <Link
              href="/our-work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-3 sm:py-2.5 text-xs font-bold text-white transition-colors active:scale-[0.98]"
            >
              <GalleryIcon className="w-4 h-4 text-[#1277ff]" />
              <span>View all work</span>
            </Link>
          </div>
        </ScrollReveal>

        {/* 8-Photo Responsive Grid with Staggered Zoom-In */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {INSTAGRAM_IMAGES.map((src, index) => (
            <ScrollReveal
              key={src}
              animation="zoom-in"
              delay={(index % 4) * 80 + Math.floor(index / 4) * 120}
              duration={600}
            >
              <div className="group relative aspect-square rounded-xl overflow-hidden bg-neutral-900 border border-white/10 cursor-pointer shadow-lg hover:border-[#1277ff]/50 transition-colors">
                <Image
                  src={src}
                  alt={`CleanWorx detailing visual ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Hover Dark Overlay with Icon */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#1277ff] text-white flex items-center justify-center shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <GalleryIcon className="w-6 h-6" />
                  </div>
                  <span className="mt-3 text-xs font-bold text-white uppercase tracking-wider">
                    View gallery
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

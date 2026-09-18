"use client";

import Image from "next/image";
import { INSTAGRAM_IMAGES } from "@/data/autodetailData";
import { Sparkles } from "lucide-react";

function InstagramIcon({ className = "w-6 h-6" }: { className?: string }) {
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
    <section id="gallery" className="relative py-20 lg:py-28 bg-[#0c0d11]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e30613] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>RECENT WORK &amp; GALLERY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              @autodetail_works
            </h2>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-2.5 text-xs font-bold text-white transition-colors"
          >
            <InstagramIcon className="w-4 h-4 text-[#e30613]" />
            <span>Follow on Instagram</span>
          </a>
        </div>

        {/* 8-Photo Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {INSTAGRAM_IMAGES.map((src, index) => (
            <div
              key={src}
              className="group relative aspect-square rounded-xl overflow-hidden bg-neutral-900 border border-white/10 cursor-pointer shadow-lg"
            >
              <Image
                src={src}
                alt={`AutoDetail Showcase ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover Dark Overlay with Icon */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-12 h-12 rounded-full bg-[#e30613] text-white flex items-center justify-center shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <span className="mt-3 text-xs font-bold text-white uppercase tracking-wider">
                  View Post
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

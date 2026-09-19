"use client";

import Image from "next/image";
import { TESTIMONIALS } from "@/data/autodetailData";
import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-[#0c0d11]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header with Google Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-widest text-neutral-400 uppercase mb-3">
              <span className="text-[#1277ff] font-mono font-bold">04</span>
              <span className="w-1 h-1 rounded-full bg-[#1277ff]" />
              <span>Verified Client Experiences</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight text-balance">
              What They Say
            </h2>
          </div>

          {/* Google Review Badge */}
          <div className="inline-flex items-center gap-3 rounded-xl bg-[#15161c] border border-white/10 px-4 py-3 shadow-lg">
            <div className="relative w-8 h-8 flex-shrink-0">
              <Image
                src="/images/autodetail/google-icon.svg"
                alt="Google Reviews"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#fcb900]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#fcb900]" />
                ))}
                <span className="ml-1 text-xs font-bold text-white">5.0</span>
              </div>
              <p className="text-xs text-neutral-400">Based on 1,234 client reviews</p>
            </div>
          </div>
        </div>

        {/* Carousel / Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                className="relative flex flex-col justify-between rounded-2xl bg-[#14151a] border border-white/10 p-8 shadow-xl hover:border-[#1277ff]/40 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    {/* Stars */}
                    <div className="flex items-center gap-1 text-[#1277ff]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#1277ff]" />
                      ))}
                    </div>

                    <Quote className="w-8 h-8 text-neutral-600 group-hover:text-[#1277ff]/40 transition-colors" />
                  </div>

                  <p className="text-base sm:text-lg text-neutral-300 leading-relaxed italic">
                    &ldquo;{item.content}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-8 flex items-center gap-4 pt-6 border-t border-white/5">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20">
                    <Image
                      src={item.avatar}
                      alt={item.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">{item.author}</h4>
                    <p className="text-xs text-neutral-400">{item.role} • {item.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

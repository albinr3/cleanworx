"use client";

import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/data/autodetailData";
import { ArrowRight, Check } from "lucide-react";
import { ScrollReveal } from "@/components/autodetail/ScrollReveal";

export function ServicesSection() {
  return (
    <section id="services" className="relative py-16 sm:py-24 lg:py-32 bg-[#0c0d11]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" duration={750}>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-widest text-neutral-400 uppercase mb-3">
              <span className="text-[#1277ff] font-mono font-bold">03</span>
              <span className="w-1 h-1 rounded-full bg-[#1277ff]" />
              <span>Precision Detailing &amp; Protection</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight text-balance">
              Our Auto Detailing Services
            </h2>

            <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-neutral-300 text-pretty">
              From multi-year ceramic coating to convenient mobile detailing at your driveway. Select a package below to view details and book:
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Services Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {SERVICES.map((service, idx) => (
            <ScrollReveal
              key={service.id}
              animation="fade-up"
              delay={idx * 100}
              duration={700}
              className="h-full"
            >
              <div className="group relative flex flex-col justify-between rounded-2xl bg-[#14151a] border border-white/10 overflow-hidden hover:border-[#1277ff]/50 hover:shadow-2xl hover:shadow-[#1277ff]/15 hover:-translate-y-1.5 transition-all duration-300 h-full">
                <div>
                  {/* Image Container */}
                  <div className="relative h-48 sm:h-60 w-full overflow-hidden bg-neutral-900">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14151a] via-transparent to-transparent" />

                    {/* Price Tag */}
                    <div className="absolute top-3.5 right-3.5 rounded-lg border border-white/25 bg-[#1277ff]/95 px-3 py-1.5 text-xs font-black tracking-tight text-white shadow-lg shadow-[#1277ff]/35 backdrop-blur-md sm:top-4 sm:right-4 sm:text-sm">
                      {service.price}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#4da3ff] transition-colors">
                      {service.title}
                    </h3>

                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    {service.features && (
                      <div className="mt-4 sm:mt-5 space-y-2 border-t border-white/5 pt-3.5 sm:pt-4">
                        {service.features.map((feat) => (
                          <div key={feat} className="flex items-center gap-2 text-xs text-neutral-300">
                            <Check className="w-3.5 h-3.5 text-[#1277ff] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <div className="p-5 pt-0 sm:p-6 sm:pt-0">
                  <Link
                    href={service.id === "supplemental-services" ? "/services" : `/${service.id}`}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-white/5 hover:bg-[#1277ff] hover:text-white border border-white/10 hover:border-[#1277ff] py-3.5 sm:py-3 text-sm font-bold text-neutral-200 transition-all cursor-pointer group-hover:bg-[#1277ff] group-hover:text-white active:scale-[0.98]"
                  >
                    <span>View Package &amp; Book</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

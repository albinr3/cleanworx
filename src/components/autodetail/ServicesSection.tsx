"use client";

import Image from "next/image";
import { SERVICES } from "@/data/autodetailData";
import { ArrowRight, Check, Sparkles } from "lucide-react";

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-[#0c0d11]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e30613] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR SPECIALTIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Premium Car Detailing
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Crafted for connoisseurs of automotive excellence. We restore gloss, eliminate defects, and protect every surface with industry-leading precision.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between rounded-2xl bg-[#14151a] border border-white/10 overflow-hidden hover:border-[#e30613]/50 hover:shadow-2xl hover:shadow-[#e30613]/10 transition-all duration-300"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-60 w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14151a] via-transparent to-transparent" />

                  {/* Number Badge */}
                  <div className="absolute top-4 left-4 rounded-md bg-[#e30613] px-3 py-1 text-xs font-black text-white shadow-lg">
                    {service.number}
                  </div>

                  {/* Price Tag */}
                  <div className="absolute top-4 right-4 rounded-md bg-black/70 backdrop-blur-md px-3 py-1 text-xs font-bold text-neutral-200 border border-white/10">
                    {service.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#ff3341] transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  {service.features && (
                    <div className="mt-5 space-y-2 border-t border-white/5 pt-4">
                      {service.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs text-neutral-300">
                          <Check className="w-3.5 h-3.5 text-[#e30613]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-white/5 hover:bg-[#e30613] hover:text-white border border-white/10 hover:border-[#e30613] py-3 text-sm font-bold text-neutral-200 transition-all cursor-pointer group-hover:bg-[#e30613] group-hover:text-white"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

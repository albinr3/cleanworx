"use client";

import { Calendar, ArrowRight, ShieldCheck, Star, Award } from "lucide-react";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export function HeroSection({ onOpenBooking }: HeroSectionProps) {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover object-center scale-105"
        >
          <source src="/images/autodetail/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark Vignette and Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-black/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#e30613]/30 bg-[#e30613]/10 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wider text-[#ff3341] uppercase mb-6 backdrop-blur-md">
          <Star className="w-3.5 h-3.5 fill-[#e30613]" />
          <span>Restoring Showroom Perfection</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase max-w-5xl leading-[1.05]">
          Luxury <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">Detail</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed">
          AutoDetail offers efficient, reliable detailing that restores shine and preserves your vehicle. From multi-stage paint correction to permanent ceramic shields.
        </p>

        {/* CTA Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-md bg-[#e30613] px-8 py-4 text-base font-bold text-white shadow-xl shadow-[#e30613]/30 hover:bg-[#c5040f] hover:shadow-2xl hover:shadow-[#e30613]/50 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            <Calendar className="w-5 h-5" />
            <span>Make Appointment</span>
          </button>

          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-white/10 hover:bg-white/15 border border-white/20 px-8 py-4 text-base font-semibold text-white backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 transition-all"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Key Trust Signals Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-12 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#e30613]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">9H Certified Installers</p>
              <p className="text-xs text-neutral-400">Authorized ceramic lab</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#e30613]">
              <Star className="w-5 h-5 fill-[#e30613]" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">5.0 Star Rating</p>
              <p className="text-xs text-neutral-400">Over 1,234 verified reviews</p>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1 flex items-center justify-center md:justify-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#e30613]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">100% Satisfaction</p>
              <p className="text-xs text-neutral-400">Guaranteed quality results</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

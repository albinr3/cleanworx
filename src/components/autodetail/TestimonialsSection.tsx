"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/autodetailData";
import { ScrollReveal } from "@/components/autodetail/ScrollReveal";

const portraitClasses: Record<string, string> = {
  "google-david": "reviewer-portrait-one",
  "google-yuval": "reviewer-portrait-two",
  "google-jason": "reviewer-portrait-three",
  "google-megan": "reviewer-portrait-four",
  "google-conor": "reviewer-portrait-five",
};

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  useEffect(() => { const update = () => setIsDesktop(window.innerWidth >= 768); update(); window.addEventListener("resize", update); return () => window.removeEventListener("resize", update); }, []);
  const totalSlides = isDesktop ? Math.max(1, TESTIMONIALS.length - 1) : TESTIMONIALS.length;
  const safeIndex = currentIndex >= totalSlides ? 0 : currentIndex;
  useEffect(() => { if (isHovered) return; const timer = setInterval(() => setCurrentIndex((index) => (index + 1) % totalSlides), 3500); return () => clearInterval(timer); }, [isHovered, totalSlides]);
  const handleTouchEnd = (event: React.TouchEvent) => { if (touchStartX === null) return; const difference = touchStartX - event.changedTouches[0].clientX; if (Math.abs(difference) > 40) setCurrentIndex((index) => difference > 0 ? (index + 1) % totalSlides : (index - 1 + totalSlides) % totalSlides); setTouchStartX(null); };
  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#0e0e0e] py-16 sm:py-20 lg:py-28">
      <div id="reviews" className="absolute -top-24" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 sm:gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        
        {/* Left Column: Heading + High-Impact 220+ Reviews Google Trust Card */}
        <ScrollReveal animation="fade-right" duration={800} className="flex flex-col items-start lg:col-span-5">
          <div className="relative mb-3 inline-block">
            <span className="absolute -top-1.5 right-0 h-[2px] w-16 bg-[#1277ff]" />
            <span className="text-xs font-bold uppercase tracking-[0.32em] text-[#4da3ff] sm:text-[13px]">
              Customer Reputation
            </span>
            <span className="absolute -bottom-1.5 left-0 h-[2px] w-16 bg-[#1277ff]" />
          </div>

          <h2 className="mt-3 text-3xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[54px] font-heading">
            What Clients<br className="hidden sm:inline" /> Say
          </h2>

          {/* 220+ Reviews & 5-Star Prominent Google Badge Card */}
          <div className="mt-6 sm:mt-8 w-full rounded-2xl border border-white/10 bg-[#16171d] p-5 sm:p-7 shadow-2xl backdrop-blur-md relative overflow-hidden group hover:border-[#1277ff]/40 transition-all">
            {/* Ambient blue glow behind */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#1277ff]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header: Google Multi-color Icon + Status Badge */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span className="font-bold text-sm tracking-tight text-white">Google Rating</span>
              </div>
              <span className="rounded-full bg-[#1277ff]/15 px-3 py-1 text-[11px] font-bold text-[#4da3ff] border border-[#1277ff]/30 uppercase tracking-wider">
                100% 5.0 Rated
              </span>
            </div>

            {/* Score & Stars */}
            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-4xl sm:text-5xl font-black text-white font-heading tracking-tight">5.0</span>
              <div className="flex flex-col">
                <div className="flex gap-1 text-[#FFB800]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#FFB800]" />
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-[#4da3ff] mt-1">
                  220+ Verified Reviews
                </span>
              </div>
            </div>

            {/* High-Impact Copy */}
            <p className="mt-3.5 text-xs sm:text-sm text-neutral-300 leading-relaxed text-pretty">
              Over 220 vehicle owners across Basking Ridge and Somerset County have rated CleanWorx 5.0 stars on Google. We take pride in honest advice, thorough workmanship, and dependable results on every appointment.
            </p>

            {/* External Google Maps Link */}
            <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between">
              <a
                href="https://www.google.com/maps?cid=15973418579450373920"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-200 hover:text-[#4da3ff] transition-colors group/link"
              >
                <span>Read all 220+ reviews on Google</span>
                <span className="text-[#1277ff] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform">↗</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Column: Interactive Testimonials Carousel */}
        <ScrollReveal animation="fade-left" delay={150} duration={800} className="relative lg:col-span-7">
          <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="-mx-2 overflow-hidden select-none sm:-mx-3" onTouchStart={(event) => setTouchStartX(event.touches[0].clientX)} onTouchEnd={handleTouchEnd}>
              <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${safeIndex * (isDesktop ? 50 : 100)}%)` }}>
                {TESTIMONIALS.map((item) => (
                  <article key={item.id} className="flex w-full shrink-0 px-2 sm:w-1/2 sm:px-3">
                    <div className="flex w-full flex-col justify-between rounded-2xl border border-white/[0.06] bg-[#1c1c1c] p-5 shadow-2xl transition-transform duration-300 hover:-translate-y-1 sm:p-7 md:p-8">
                      <div>
                        <div className="mb-4 flex items-start justify-between gap-3 sm:mb-5">
                          <div className="flex items-center gap-3">
                            <div aria-hidden="true" className={`h-11 w-11 shrink-0 rounded-full border border-white/10 bg-neutral-800 bg-cover sm:h-12 sm:w-12 ${portraitClasses[item.id]}`} />
                            <div>
                              <h3 className="text-sm font-bold leading-tight text-white sm:text-base">{item.author}</h3>
                              <p className="mt-0.5 text-[11px] font-medium text-neutral-400 sm:mt-1 sm:text-xs">{item.role} · {item.date}</p>
                            </div>
                          </div>
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-black text-[#4285F4]">G</div>
                        </div>
                        <div className="mb-3 flex items-center gap-1.5 sm:mb-4">
                          <div className="flex gap-1 text-[#FFB800]">{[...Array(5)].map((_, index) => <Star key={index} className="h-3.5 w-3.5 fill-[#FFB800] sm:h-4 sm:w-4" />)}</div>
                          <span className="ml-1 font-mono text-xs font-semibold text-neutral-300 sm:text-sm">5.0</span>
                        </div>
                        <p className="text-xs leading-relaxed text-neutral-300 sm:text-[14px] md:text-[14.5px]">{item.content}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center gap-1 sm:mt-8">
              {[...Array(totalSlides)].map((_, index) => (
                <button key={index} onClick={() => setCurrentIndex(index)} aria-label={`Go to review slide ${index + 1}`} className="group flex h-8 w-8 items-center justify-center">
                  <span className={`rounded-full transition-all duration-300 ${safeIndex === index ? "h-3 w-3 scale-110 bg-[#1277ff] shadow-[0_0_10px_rgba(18,119,255,0.8)]" : "h-2 w-2 bg-white/40 group-hover:bg-white/70"}`} />
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

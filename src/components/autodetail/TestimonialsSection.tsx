"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/autodetailData";
import { ScrollReveal } from "@/components/autodetail/ScrollReveal";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Detect desktop (>= 768px) for 2 cards per view vs mobile (1 card)
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // On desktop: 2 cards visible, 4 testimonials => 3 slides (0, 1, 2)
  // On mobile: 1 card visible => 4 slides (0, 1, 2, 3)
  const totalSlides = isDesktop
    ? Math.max(1, TESTIMONIALS.length - 1)
    : TESTIMONIALS.length;

  const safeCurrentIndex =
    currentIndex >= totalSlides ? Math.max(0, totalSlides - 1) : currentIndex;

  // Autoplay slider with pause on mouse hover
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5500);
    return () => clearInterval(interval);
  }, [isHovered, totalSlides]);

  // Touch gesture support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Swiped left -> next
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      } else {
        // Swiped right -> prev
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
      }
    }
    setTouchStartX(null);
  };

  return (
    <section
      id="testimonials"
      className="relative py-16 sm:py-20 lg:py-28 bg-[#0e0e0e] overflow-hidden scroll-mt-20"
    >
      {/* Anchor targets for reviews and navigation */}
      <div id="reviews" className="absolute -top-24" />
      <div id="why-us" className="absolute -top-24" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Subtitle */}
          <ScrollReveal animation="fade-right" duration={800} className="lg:col-span-4 flex flex-col items-start">
            {/* Subtitle with split red accent bars */}
            <div className="relative inline-block mb-3 select-none">
              {/* Top-right red line spanning over right part */}
              <span
                className="absolute -top-1.5 right-0 w-16 h-[2px] bg-[#E30613]"
                aria-hidden="true"
              />
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.32em] text-white">
                TESTIMONIALS
              </span>
              {/* Bottom-left red line spanning under left part */}
              <span
                className="absolute -bottom-1.5 left-0 w-16 h-[2px] bg-[#E30613]"
                aria-hidden="true"
              />
            </div>

            {/* Display Title */}
            <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-[1.08] mt-2 sm:mt-3">
              What They
              <br className="hidden sm:inline" />{" "}
              Says
            </h2>
          </ScrollReveal>

          {/* Right Column: Carousel Track & Cards */}
          <ScrollReveal
            animation="fade-left"
            delay={150}
            duration={800}
            className="lg:col-span-8 relative"
          >
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
            {/* Carousel Viewport */}
            <div
              className="overflow-hidden w-full select-none"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-out -mx-2 sm:-mx-3"
                style={{
                  transform: `translateX(-${safeCurrentIndex * (isDesktop ? 50 : 100)}%)`,
                }}
              >
                {TESTIMONIALS.map((item) => (
                  <div
                    key={item.id}
                    className="w-full md:w-1/2 shrink-0 px-2 sm:px-3 flex"
                  >
                    <div className="w-full rounded-2xl bg-[#1c1c1c] border border-white/[0.04] p-5 sm:p-7 md:p-8 flex flex-col justify-between shadow-2xl transition-transform hover:-translate-y-1 duration-300">
                      <div>
                        {/* Card Header: Avatar, Author, Date, and Google G Logo */}
                        <div className="flex items-start justify-between gap-3 mb-4 sm:mb-5">
                          <div className="flex items-center gap-3">
                            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden shrink-0 border border-white/10 bg-neutral-800">
                              <Image
                                src={item.avatar}
                                alt={item.author}
                                fill
                                sizes="48px"
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                                {item.author}
                              </h3>
                              <p className="text-[11px] sm:text-xs text-neutral-400 mt-0.5 sm:mt-1 font-medium">
                                {item.date}
                              </p>
                            </div>
                          </div>

                          {/* Official Google G Logo */}
                          <div className="relative w-5 h-5 sm:w-6 sm:h-6 shrink-0 mt-0.5">
                            <Image
                              src="/images/autodetail/google-icon.svg"
                              alt="Google Review"
                              width={24}
                              height={24}
                              className="object-contain"
                            />
                          </div>
                        </div>

                        {/* Card Rating Stars + Score */}
                        <div className="flex items-center gap-1.5 mb-3 sm:mb-4">
                          <div className="flex items-center gap-1 text-[#FFB800]">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                                  i < item.rating
                                    ? "fill-[#FFB800] text-[#FFB800]"
                                    : "fill-transparent text-neutral-600"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs sm:text-sm font-semibold text-neutral-300 ml-1 font-mono">
                            {item.rating}
                          </span>
                        </div>

                        {/* Review Quote Text */}
                        <p className="text-xs sm:text-[14.5px] md:text-[15px] leading-relaxed text-neutral-300 font-normal">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Controls with Accessible Touch Targets */}
            <div className="flex items-center justify-center gap-1 mt-6 sm:mt-8">
              {[...Array(totalSlides)].map((_, idx) => {
                const isActive = safeCurrentIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to testimonial slide ${idx + 1}`}
                    className="w-8 h-8 flex items-center justify-center cursor-pointer group"
                  >
                    <span
                      className={`transition-all duration-300 rounded-full ${
                        isActive
                          ? "w-3 h-3 bg-[#E30613] scale-110 shadow-[0_0_8px_rgba(227,6,19,0.8)]"
                          : "w-2 h-2 bg-white/40 group-hover:bg-white/70"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}

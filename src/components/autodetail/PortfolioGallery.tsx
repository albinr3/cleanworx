"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  PORTFOLIO_ITEMS,
  PORTFOLIO_CATEGORIES,
  type PortfolioCategory,
  type PortfolioItem,
} from "@/data/ourWorkData";
import { BookingTrigger } from "@/components/autodetail/BookingTrigger";
import { normalizeTerminology } from "@/lib/terminology";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Sparkles,
  MapPin,
  ShieldCheck,
} from "lucide-react";

export function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("All Projects");
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    if (activeCategory === "All Projects") return true;
    if (item.category === activeCategory) return true;
    if (item.tags.includes(activeCategory)) return true;
    return false;
  });
  const filteredItemCount = filteredItems.length;

  const activeItem: PortfolioItem | null =
    activeItemIndex !== null && filteredItems[activeItemIndex]
      ? filteredItems[activeItemIndex]
      : null;

  const handleNext = useCallback(() => {
    if (activeItemIndex === null) return;
    setActiveItemIndex((prev) =>
      prev === null ? 0 : (prev + 1) % filteredItemCount
    );
  }, [activeItemIndex, filteredItemCount]);

  const handlePrev = useCallback(() => {
    if (activeItemIndex === null) return;
    setActiveItemIndex((prev) =>
      prev === null ? 0 : (prev - 1 + filteredItemCount) % filteredItemCount
    );
  }, [activeItemIndex, filteredItemCount]);

  const handleClose = useCallback(() => {
    setActiveItemIndex(null);
  }, []);

  useEffect(() => {
    if (activeItemIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeItemIndex, handleClose, handleNext, handlePrev]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (activeItemIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeItemIndex]);

  return (
    <section className="relative mt-8">
      {/* Category Filter Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-white/10 pb-6">
        {PORTFOLIO_CATEGORIES.map((cat) => {
          const count = PORTFOLIO_ITEMS.filter((it) => {
            if (cat === "All Projects") return true;
            if (it.category === cat) return true;
            return it.tags.includes(cat);
          }).length;

          const isActive = activeCategory === cat;

          return (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setActiveItemIndex(null);
              }}
              className={`group flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 sm:text-sm ${
                isActive
                  ? "bg-[#1277ff] text-white shadow-lg shadow-[#1277ff]/30 ring-2 ring-[#4da3ff]/50"
                  : "bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span>{cat}</span>
              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] font-black transition-colors ${
                  isActive
                    ? "bg-black/25 text-white"
                    : "bg-white/10 text-neutral-400 group-hover:text-white"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid of Optimized Real Client Work */}
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {filteredItems.map((item, index) => {
          const isPortrait = item.width < item.height;

          return (
            <div
              key={item.id}
              onClick={() => setActiveItemIndex(index)}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#14151a] transition-all duration-300 hover:-translate-y-1 hover:border-[#1277ff]/60 hover:shadow-2xl hover:shadow-[#1277ff]/20 ${
                isPortrait ? "row-span-1" : ""
              }`}
            >
              {/* Image Frame */}
              <div
                className={`relative w-full overflow-hidden ${
                  isPortrait ? "aspect-[4/5]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={item.src}
                  alt={normalizeTerminology(item.alt)}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority={index < 4}
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />

                {/* Top Badge */}
                <div className="absolute left-3 top-3 z-10 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#4da3ff] backdrop-blur-md border border-white/10">
                  <Sparkles className="h-3 w-3" />
                  <span>{item.category}</span>
                </div>

                {/* Expand Icon Button (Hover) */}
                <div className="absolute right-3 top-3 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 border border-white/20">
                  <Maximize2 className="h-4 w-4" />
                </div>

                {/* Bottom Content Info */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                  <p className="text-xs font-semibold text-neutral-300 flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-[#4da3ff]" />
                    {normalizeTerminology(item.location)}
                  </p>
                  <h3 className="mt-1 text-base font-bold text-white transition-colors group-hover:text-[#4da3ff] line-clamp-1">
                    {normalizeTerminology(item.title)}
                  </h3>
                  <p className="mt-1.5 text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    {normalizeTerminology(item.description)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-3 backdrop-blur-lg sm:p-6"
          onClick={handleClose}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            aria-label="Close modal"
            className="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 border border-white/15"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-50 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white backdrop-blur-md transition-colors hover:bg-[#1277ff] border border-white/20 sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Navigation Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-50 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white backdrop-blur-md transition-colors hover:bg-[#1277ff] border border-white/20 sm:right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#101115] shadow-2xl"
          >
            {/* Top Bar with Info & Counter */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5 bg-[#14151a]">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[#1277ff] px-2.5 py-0.5 text-xs font-bold text-white">
                  {activeItem.category}
                </span>
                <span className="text-xs font-medium text-neutral-400">
                  {activeItemIndex !== null ? activeItemIndex + 1 : 1} of{" "}
                  {filteredItems.length}
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-neutral-400">
                <ShieldCheck className="h-4 w-4 text-[#4da3ff]" />
                Certified CleanWorx Craftsmanship
              </div>
            </div>

            {/* Main High-Res Image View */}
            <div className="relative flex flex-1 items-center justify-center bg-black/80 p-2 sm:p-4 max-h-[62vh] sm:max-h-[68vh]">
              <div className="relative h-full w-full flex items-center justify-center">
                <Image
                  src={activeItem.src}
                  alt={normalizeTerminology(activeItem.alt)}
                  width={activeItem.width}
                  height={activeItem.height}
                  className="max-h-[60vh] sm:max-h-[65vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Bottom Caption & Booking Action */}
            <div className="flex flex-col gap-3 border-t border-white/10 bg-[#14151a] p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h4 className="text-lg font-bold text-white">
                  {normalizeTerminology(activeItem.title)}
                </h4>
                <p className="mt-1 text-xs text-neutral-400 sm:text-sm">
                  {normalizeTerminology(activeItem.description)}
                </p>
                <p className="mt-1 text-xs text-[#4da3ff] font-medium flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {normalizeTerminology(activeItem.location)}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2 pt-2 sm:pt-0">
                <BookingTrigger
                  label="Book This Service"
                  className="bg-[#1277ff] hover:bg-[#0f62d4] text-xs sm:text-sm px-4 py-2.5 font-bold"
                />
                <a
                  href="tel:+19088992832"
                  className="rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-white/10"
                >
                  908-899-2832
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

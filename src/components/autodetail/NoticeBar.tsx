"use client";

import { useState } from "react";
import { X, Sparkles, ArrowRight } from "lucide-react";

interface NoticeBarProps {
  onOpenBooking: () => void;
}

export function NoticeBar({ onOpenBooking }: NoticeBarProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative z-50 w-full bg-gradient-to-r from-[#0170b9] via-[#083b6b] to-[#0d093b] px-4 py-2.5 text-xs sm:text-sm text-white transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div className="hidden sm:block w-6" /> {/* Balance spacer */}
        
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-center mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
            <Sparkles className="w-3 h-3 text-amber-300" /> Special Offer
          </span>
          <span className="font-medium text-white/95">
            Book Ceramic Coating this month & get a free engine bay detail!
          </span>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-1 font-semibold underline underline-offset-4 hover:text-amber-300 transition-colors cursor-pointer ml-1"
          >
            Claim Now <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          aria-label="Dismiss banner"
          className="rounded p-1 text-white/75 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

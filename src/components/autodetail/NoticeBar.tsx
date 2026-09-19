"use client";

import { useState } from "react";
import { X, ArrowRight } from "lucide-react";

interface NoticeBarProps {
  onOpenBooking: () => void;
}

export function NoticeBar({ onOpenBooking }: NoticeBarProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative z-50 w-full bg-[#0d0e12] border-b border-white/10 px-4 py-2.5 text-xs sm:text-sm text-neutral-300 transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div className="hidden sm:block w-6" /> {/* Balance spacer */}
        
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-center mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-md border border-[#1277ff]/30 bg-[#1277ff]/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#4da3ff]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1277ff] animate-pulse" />
            Seasonal Privilege
          </span>
          <span className="font-medium text-neutral-200">
            Book Ceramic Coating this month &amp; receive complimentary engine bay restoration.
          </span>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-1 font-semibold text-white underline underline-offset-4 decoration-[#1277ff] hover:text-[#4da3ff] transition-colors cursor-pointer ml-1"
          >
            Claim Benefit <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          aria-label="Dismiss banner"
          className="rounded p-1 text-neutral-400 hover:bg-white/5 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

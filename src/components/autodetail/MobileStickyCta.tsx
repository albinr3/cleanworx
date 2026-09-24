"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, Phone } from "lucide-react";

export function MobileStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear once the user scrolls slightly past the top (e.g. 80px)
      if (window.scrollY > 80) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-[#0a0a0c]/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 sm:hidden animate-in fade-in slide-in-from-bottom-4"
      aria-label="Mobile quick actions"
    >
      <div className="mx-auto flex max-w-md items-center gap-2.5">
        <a
          href="tel:+19088992832"
          className="flex h-12 w-14 shrink-0 flex-col items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white active:scale-95 transition-transform"
          aria-label="Call CleanWorx Auto Detailing"
        >
          <Phone className="h-4 w-4 text-[#1277ff]" />
          <span className="text-[10px] font-semibold text-neutral-300">Call</span>
        </a>

        <Link
          href="/booking"
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#1277ff] px-5 text-sm font-black uppercase tracking-wider text-white shadow-lg shadow-[#1277ff]/30 active:scale-[0.98] transition-all"
        >
          <Calendar className="h-4 w-4" />
          <span>Book Now</span>
        </Link>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#e30613] hover:bg-[#c5040f] text-white shadow-2xl shadow-[#e30613]/50 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer border border-white/20"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}

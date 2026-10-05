"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronDown, ChevronRight, Menu, Phone, X } from "lucide-react";
import { BOOKING_URL } from "@/data/autodetailData";

const services = [
  ["Ceramic Coating", "/ceramic-coating"],
  ["Paint Correction", "/paint-correction"],
  ["Window Tinting", "/window-tinting"],
  ["Interior Detailing", "/interior-detailing"],
  ["Exterior Detailing", "/exterior-detailing"],
  ["Mobile Auto Detailing", "/mobile-auto-detailing"],
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full border-b transition-all ${
          scrolled
            ? "border-white/10 bg-[#0a0a0ce6] py-3 backdrop-blur-md"
            : "border-white/5 bg-[#0a0a0c]/80 py-5 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="relative h-11 w-40 sm:h-14 sm:w-60 transition-transform hover:scale-[1.02]"
          >
            <Image
              src="/images/cleanworx-logo.webp"
              alt="CleanWorx Auto Detailing & Ceramic Coating"
              fill
              sizes="(max-width: 639px) 160px, 240px"
              priority
              loading="eager"
              className="object-contain object-left"
            />
          </Link>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            <div className="relative group">
              <Link
                href="/#services"
                className="flex items-center gap-1.5 py-2 text-sm font-medium text-neutral-300 transition-colors group-hover:text-white hover:text-white"
              >
                <span>Services</span>
                <ChevronDown
                  className="h-4 w-4 text-neutral-400 transition-transform duration-200 group-hover:rotate-180 group-hover:text-white"
                />
              </Link>
              <div className="invisible pointer-events-none absolute left-0 top-full z-50 w-64 pt-2 opacity-0 transition-all duration-200 ease-out group-hover:visible group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                <div className="rounded-xl border border-white/10 bg-[#14151a]/95 p-2 shadow-2xl shadow-black/60 backdrop-blur-md">
                  <Link
                    href="/#services"
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-bold text-white transition-colors hover:bg-white/10"
                  >
                    <span>All Packages</span>
                    <ChevronRight className="h-3.5 w-3.5 text-neutral-400" />
                  </Link>
                  <div className="my-1 border-t border-white/10" />
                  {services.map(([label, href]) => (
                    <Link
                      key={href}
                      href={href}
                      className="block rounded-lg px-3 py-2 text-sm text-neutral-300 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {label}
                    </Link>
                  ))}
                  <div className="my-1 border-t border-white/10" />
                  <Link
                    href="/add-ons"
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-[#4da3ff] transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <span>Add-Ons &amp; Extras</span>
                    <span className="rounded bg-[#1277ff]/20 px-1.5 py-0.5 text-[10px] font-bold text-[#4da3ff]">NEW</span>
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/our-work" className="text-sm font-medium text-neutral-300 hover:text-white">
              Our Work
            </Link>
            <Link href="/about" className="text-sm font-medium text-neutral-300 hover:text-white">
              About
            </Link>
            <Link href="/faq" className="text-sm font-medium text-neutral-300 hover:text-white">
              FAQ
            </Link>
            <Link href="/contact" className="text-sm font-medium text-neutral-300 hover:text-white">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2 sm:gap-5">
            <a href="tel:+19088992832" className="hidden items-center gap-2 text-sm md:flex">
              <Phone className="h-4 w-4 text-[#1277ff]" />
              <span className="font-semibold text-white">908-899-2832</span>
            </a>
            <a
              href={BOOKING_URL}
              aria-label="Book Now"
              className="inline-flex min-h-11 min-w-11 items-center justify-center gap-1.5 rounded-lg bg-[#1277ff] px-3 py-2 text-xs font-bold text-white shadow-lg shadow-[#1277ff]/25 transition hover:bg-[#0d62d6] active:scale-95 sm:px-5 sm:py-2.5 sm:text-sm"
            >
              <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span className="hidden min-[360px]:inline">Book Now</span>
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              className="flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-white sm:p-2.5 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <button
            aria-label="Close navigation menu"
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <div className="relative ml-auto flex h-full w-[85vw] max-w-xs flex-col overflow-y-auto overscroll-contain bg-[#111216] p-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <Image
                src="/images/cleanworx-logo.webp"
                alt="CleanWorx Auto Detailing & Ceramic Coating"
                width={176}
                height={40}
                className="h-10 w-44 object-contain object-left"
              />
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="p-2 text-white"
              >
                <X />
              </button>
            </div>
            <nav className="mt-5 space-y-1">
              <Link
                href="/#services"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-neutral-100 font-bold"
              >
                Services <ChevronRight className="h-4 w-4" />
              </Link>
              {services.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-2 text-sm text-neutral-400"
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/add-ons"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between px-6 py-2.5 text-sm font-semibold text-[#4da3ff]"
              >
                <span>Add-Ons &amp; Extras</span>
                <span className="rounded bg-[#1277ff]/20 px-1.5 py-0.5 text-[10px] font-bold text-[#4da3ff]">NEW</span>
              </Link>
              {[
                ["Our Work", "/our-work"],
                ["About", "/about"],
                ["Service Areas", "/service-areas"],
                ["FAQ", "/faq"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between rounded-lg px-3 py-3 text-neutral-100"
                >
                  {label}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              ))}
            </nav>
            <div className="mt-auto border-t border-white/10 pt-6">
              <a
                href={BOOKING_URL}
                onClick={() => setMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#1277ff] py-3.5 text-sm font-bold text-white"
              >
                <Calendar className="h-4 w-4" />
                Book Now
              </a>
              <a
                href="tel:+19088992832"
                className="mt-4 block text-center text-sm font-semibold text-white"
              >
                908-899-2832
              </a>
              <p className="mt-1 text-center text-xs text-neutral-400">
                Monday–Saturday, 9:00 AM–5:00 PM
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Search, Menu, X, ChevronRight, Calendar } from "lucide-react";

interface HeaderProps {
  onOpenBooking: () => void;
}

export function Header({ onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Lock body scroll when mobile menu or search overlay is open
  useEffect(() => {
    if (isMobileMenuOpen || isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen, isSearchOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Reviews", href: "#why-us" },
    { label: "FAQ", href: "#faq" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#0a0a0ce6] backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5"
            : "bg-[#0a0a0c]/80 backdrop-blur-sm border-b border-white/5 py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-3 group">
            <div className="relative w-40 sm:w-48 h-10 transition-transform group-hover:scale-[1.02]">
              <Image
                src="/images/cleanworx-logo.webp"
                alt="CleanWorx"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm font-medium text-neutral-300 hover:text-white transition-colors py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1277ff] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Phone contact */}
            <a
              href="tel:+1234567890"
              className="hidden md:flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#1277ff] group-hover:bg-[#1277ff] group-hover:text-white transition-all">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left leading-tight">
                <span className="block text-[11px] text-neutral-400 font-medium">CALL US TODAY</span>
                <span className="font-semibold text-white">+1 (234) 567-890</span>
              </div>
            </a>

            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search services"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white transition-colors cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Appointment CTA */}
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center gap-2 rounded-md bg-[#1277ff] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#1277ff]/25 hover:bg-[#0d62d6] hover:shadow-xl hover:shadow-[#1277ff]/40 active:scale-95 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Make Appointment</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="lg:hidden w-11 h-11 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Offcanvas Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative ml-auto w-[85vw] max-w-xs bg-[#111216] border-l border-white/10 h-full p-6 flex flex-col justify-between shadow-2xl z-10 overflow-y-auto animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="relative w-36 h-8">
                  <Image
                    src="/images/cleanworx-logo.webp"
                    alt="CleanWorx"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="w-10 h-10 rounded-md flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Navigation List */}
              <nav className="mt-6 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-3 rounded-lg text-base font-medium text-neutral-200 hover:text-white hover:bg-white/5 active:bg-white/10 transition-colors"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-neutral-500" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#1277ff] py-3.5 text-sm font-bold text-white shadow-lg shadow-[#1277ff]/30 hover:bg-[#0d62d6] active:scale-[0.98] transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Make Appointment</span>
              </button>

              <div className="text-center text-xs text-neutral-400">
                <p>Mon - Sat: 8:00 AM - 6:00 PM</p>
                <a href="tel:+1234567890" className="inline-block text-white font-medium mt-1 hover:text-[#4da3ff] transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search Overlay Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl rounded-xl bg-[#14151a] border border-white/10 p-5 sm:p-6 shadow-2xl">
            <button
              onClick={() => setIsSearchOpen(false)}
              aria-label="Close search"
              className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center text-neutral-400 hover:text-white rounded-md hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-base sm:text-lg font-bold text-white mb-4 pr-8">Search Services &amp; Packages</h3>
            <div className="relative">
              <Search className="absolute left-3.5 top-3.5 w-5 h-5 text-neutral-500 pointer-events-none" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="e.g. Ceramic coating, paint correction..."
                className="w-full rounded-lg bg-black/50 border border-white/10 pl-11 pr-4 py-3 text-base sm:text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#1277ff] transition-colors"
                autoFocus
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-xs text-neutral-400 py-1">Popular:</span>
              {["Ceramic Coating", "Paint Correction", "Interior Steam", "Headlights"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearchQuery(tag)}
                  className="rounded-md bg-white/5 hover:bg-white/10 border border-white/10 px-2.5 py-1 text-xs text-neutral-300 hover:text-white active:scale-95 transition-all cursor-pointer"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

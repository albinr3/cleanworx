"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronDown, ChevronRight, Menu, Phone, X } from "lucide-react";

const services = [
  ["Ceramic Coating", "/ceramic-coating"], ["Paint Correction", "/paint-correction"], ["Interior Detailing", "/interior-detailing"], ["Exterior Detailing", "/exterior-detailing"], ["Mobile Auto Detailing", "/mobile-auto-detailing"],
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const listener = () => setScrolled(window.scrollY > 40); window.addEventListener("scroll", listener, { passive: true }); return () => window.removeEventListener("scroll", listener); }, []);
  useEffect(() => { document.body.style.overflow = menuOpen ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [menuOpen]);
  return <>
    <header className={`sticky top-0 z-40 w-full border-b transition-all ${scrolled ? "border-white/10 bg-[#0a0a0ce6] py-3 backdrop-blur-md" : "border-white/5 bg-[#0a0a0c]/80 py-5 backdrop-blur-sm"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="relative h-11 w-40 sm:h-14 sm:w-60 transition-transform hover:scale-[1.02]"><Image src="/images/cleanworx-logo.webp" alt="CleanWorx Auto Detailing & Ceramic Coating" fill sizes="(max-width: 639px) 160px, 240px" priority className="object-contain object-left" /></Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          <div className="relative"><button onClick={() => setServicesOpen((value) => !value)} className="flex items-center gap-1 py-2 text-sm font-medium text-neutral-300 transition-colors hover:text-white">Services <ChevronDown className="h-4 w-4" /></button>{servicesOpen && <div className="absolute left-0 top-10 w-60 rounded-xl border border-white/10 bg-[#14151a] p-2 shadow-2xl"><Link href="/services" onClick={() => setServicesOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-bold text-white hover:bg-white/5">All services</Link>{services.map(([label, href]) => <Link key={href} href={href} onClick={() => setServicesOpen(false)} className="block rounded-lg px-3 py-2 text-sm text-neutral-300 hover:bg-white/5 hover:text-white">{label}</Link>)}</div>}</div>
          <Link href="/our-work" className="text-sm font-medium text-neutral-300 hover:text-white">Our Work</Link><Link href="/about" className="text-sm font-medium text-neutral-300 hover:text-white">About</Link><Link href="/faq" className="text-sm font-medium text-neutral-300 hover:text-white">FAQ</Link><Link href="/contact" className="text-sm font-medium text-neutral-300 hover:text-white">Contact</Link>
        </nav>
        <div className="flex items-center gap-2 sm:gap-5"><a href="tel:+19088992832" className="hidden items-center gap-2 text-sm md:flex"><Phone className="h-4 w-4 text-[#1277ff]" /><span className="font-semibold text-white">908-899-2832</span></a><Link href="/booking" className="inline-flex items-center gap-1.5 rounded-lg bg-[#1277ff] px-3 py-2 text-xs font-bold text-white shadow-lg shadow-[#1277ff]/25 transition hover:bg-[#0d62d6] active:scale-95 sm:px-5 sm:py-2.5 sm:text-sm"><Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4" /><span>Book Now</span></Link><button onClick={() => setMenuOpen(true)} aria-label="Open navigation menu" className="rounded-lg border border-white/10 bg-white/5 p-2 text-white sm:p-2.5 lg:hidden"><Menu className="h-5 w-5" /></button></div>
      </div>
    </header>
    {menuOpen && <div className="fixed inset-0 z-50 flex lg:hidden"><button aria-label="Close navigation menu" onClick={() => setMenuOpen(false)} className="absolute inset-0 bg-black/80 backdrop-blur-sm" /><div className="relative ml-auto flex h-full w-[85vw] max-w-xs flex-col bg-[#111216] p-6"><div className="flex items-center justify-between border-b border-white/10 pb-6"><Image src="/images/cleanworx-logo.webp" alt="CleanWorx Auto Detailing & Ceramic Coating" width={176} height={40} className="h-10 w-44 object-contain object-left" /><button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="p-2 text-white"><X /></button></div><nav className="mt-5 space-y-1"><Link href="/services" onClick={() => setMenuOpen(false)} className="flex items-center justify-between rounded-lg px-3 py-3 text-neutral-100">Services <ChevronRight className="h-4 w-4" /></Link>{services.map(([label, href]) => <Link key={href} href={href} onClick={() => setMenuOpen(false)} className="block px-6 py-2 text-sm text-neutral-400">{label}</Link>)}{[["Our Work", "/our-work"], ["About", "/about"], ["Service Areas", "/service-areas"], ["FAQ", "/faq"], ["Contact", "/contact"]].map(([label, href]) => <Link key={href} href={href} onClick={() => setMenuOpen(false)} className="flex items-center justify-between rounded-lg px-3 py-3 text-neutral-100">{label}<ChevronRight className="h-4 w-4" /></Link>)}</nav><div className="mt-auto border-t border-white/10 pt-6"><Link href="/booking" onClick={() => setMenuOpen(false)} className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#1277ff] py-3.5 text-sm font-bold text-white"><Calendar className="h-4 w-4" />Book Now</Link><a href="tel:+19088992832" className="mt-4 block text-center text-sm font-semibold text-white">908-899-2832</a><p className="mt-1 text-center text-xs text-neutral-400">Monday–Saturday, 9:00 AM–5:00 PM</p></div></div></div>}
  </>;
}

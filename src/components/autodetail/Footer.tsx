import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const links = [
  ["Home", "/"],
  ["Add-Ons & Extras", "/add-ons"],
  ["Our Work", "/our-work"],
  ["About", "/about"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"],
  ["Sitemap", "/sitemap.xml"],
] as const;
const serviceLinks = [
  ["Ceramic Coating", "/ceramic-coating"],
  ["Paint Correction", "/paint-correction"],
  ["Window Tinting", "/window-tinting"],
  ["Interior Detailing", "/interior-detailing"],
  ["Exterior Detailing", "/exterior-detailing"],
  ["Mobile Auto Detailing", "/mobile-auto-detailing"],
  ["Specialized Add-Ons", "/add-ons"],
  ["Service Areas", "/service-areas"],
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070709] pb-[calc(5rem+env(safe-area-inset-bottom))] text-neutral-400 sm:pb-0">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Link href="/" className="inline-block">
            <Image
              src="/images/cleanworx-logo.webp"
              alt="CleanWorx Auto Detailing & Ceramic Coating"
              width={176}
              height={40}
              className="h-10 w-44 object-contain object-left"
            />
          </Link>
          <p className="mt-5 text-sm leading-relaxed">CleanWorx Auto Detailing &amp; Ceramic Coating provides professional auto detailing in Basking Ridge, New Jersey, with studio and mobile appointment options confirmed for each request.</p>

          {/* Official Profiles: Google & BBB */}
          <div className="mt-6 pt-5 border-t border-white/10 space-y-2.5">
            <a
              href="https://share.google/UwkPd2O0H8zeL4M37"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 hover:border-[#1277ff] hover:bg-white/[0.06] transition-all group max-w-full w-full"
              title="CleanWorx Auto Detailing & Ceramic Coating | Google Business Profile"
            >
              <div className="flex h-8 w-11 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold text-white group-hover:text-[#4da3ff] transition-colors leading-tight truncate">
                  Google Business Profile
                </p>
                <p className="text-[11px] text-neutral-400 leading-tight mt-0.5 truncate">
                  5.0 ★ · 220+ Reviews
                </p>
              </div>
              <span className="text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 transition-all text-xs shrink-0">
                ↗
              </span>
            </a>

            <a
              href="https://www.bbb.org/us/nj/basking-ridge/profile/auto-detailing/cleanworx-llc-auto-detailing-0221-90237271"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 hover:border-[#005a9c] hover:bg-white/[0.06] transition-all group max-w-full w-full"
              title="CLEANWORX LLC AUTO DETAILING | Better Business Bureau Profile"
            >
              <div className="flex h-8 w-11 shrink-0 items-center justify-center rounded-lg bg-[#005a9c] font-black text-xs text-white shadow-sm tracking-wider">
                BBB
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold text-white group-hover:text-[#4da3ff] transition-colors leading-tight truncate">
                  BBB Business Profile
                </p>
                <p className="text-[11px] text-neutral-400 leading-tight mt-0.5 truncate">
                  CLEANWORX LLC · Basking Ridge
                </p>
              </div>
              <span className="text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 transition-all text-xs shrink-0">
                ↗
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">Explore</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {links.map(([label, href]) => (
              <li key={href}>
                {href.endsWith(".xml") ? (
                  <a href={href} className="hover:text-white transition-colors">
                    {label}
                  </a>
                ) : (
                  <Link href={href} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div><h2 className="text-sm font-bold uppercase tracking-wider text-white">Services</h2><ul className="mt-5 space-y-3 text-sm">{serviceLinks.map(([label, href]) => <li key={href}><Link href={href} className="hover:text-white">{label}</Link></li>)}</ul></div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h2>
          <address itemScope itemType="https://schema.org/AutoRepair" className="mt-5 not-italic space-y-4 text-sm">
            <div>
              <p itemProp="name" className="text-sm font-bold text-white leading-snug">
                CleanWorx Auto Detailing &amp; Ceramic Coating
              </p>
            </div>
            <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="flex gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-[#1277ff]" />
              <span>
                <span itemProp="streetAddress">19 E. Henry Street</span><br />
                <span itemProp="addressLocality">Basking Ridge</span>, <span itemProp="addressRegion">NJ</span> <span itemProp="postalCode">07920</span><br />
                <a
                  href="https://share.google/UwkPd2O0H8zeL4M37"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-1 text-xs text-[#4da3ff] hover:text-white transition-colors"
                >
                  Google Maps / GBP ↗
                </a>
              </span>
            </div>
            <div className="flex gap-3">
              <Phone className="h-5 w-5 shrink-0 text-[#1277ff]" />
              <a href="tel:+19088992832" itemProp="telephone" className="hover:text-white">908-899-2832</a>
            </div>
            <div className="flex gap-3">
              <Mail className="h-5 w-5 shrink-0 text-[#1277ff]" />
              <a href="mailto:cleanworxnj@gmail.com" itemProp="email" className="hover:text-white">cleanworxnj@gmail.com</a>
            </div>
            <div className="flex gap-3">
              <Clock className="h-5 w-5 shrink-0 text-[#1277ff]" />
              <span>
                <meta itemProp="openingHours" content="Mo-Sa 09:00-17:00" />
                Monday–Saturday, 9:00 AM–5:00 PM<br />Closed Sunday
              </span>
            </div>
          </address>
        </div>
      </div>
      <div className="border-t border-white/5 px-4 py-6 text-xs text-neutral-500">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <span>© 2026 CleanWorx Auto Detailing &amp; Ceramic Coating. All rights reserved.</span>
          <p className="text-neutral-500">
            Website designed by{" "}
            <a
              href="https://isearchdigital.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors underline decoration-white/20 underline-offset-4 hover:decoration-white font-medium"
              title="iSearch Digital"
            >
              iSearch Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

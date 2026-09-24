import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const links = [["Home", "/"], ["Services", "/services"], ["Our Work", "/our-work"], ["About", "/about"], ["FAQ", "/faq"], ["Contact", "/contact"]] as const;
const serviceLinks = [["Ceramic Coating", "/ceramic-coating"], ["Paint Correction", "/paint-correction"], ["Interior Detailing", "/interior-detailing"], ["Exterior Detailing", "/exterior-detailing"], ["Mobile Auto Detailing", "/mobile-auto-detailing"], ["Service Areas", "/service-areas"]] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070709] text-neutral-400">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Link href="/" className="relative block h-10 w-44">
            <Image src="/images/cleanworx-logo.webp" alt="CleanWorx Auto Detailing & Ceramic Coating" fill sizes="176px" className="object-contain object-left" />
          </Link>
          <p className="mt-5 text-sm leading-relaxed">CleanWorx Auto Detailing &amp; Ceramic Coating provides professional auto detailing in Basking Ridge, New Jersey, with studio and mobile appointment options confirmed for each request.</p>

          {/* BBB Official Profile Badge */}
          <div className="mt-6 pt-5 border-t border-white/10">
            <a
              href="https://www.bbb.org/us/nj/basking-ridge/profile/auto-detailing/cleanworx-llc-auto-detailing-0221-90237271"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 hover:border-[#005a9c] hover:bg-white/[0.06] transition-all group max-w-full"
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
        <div><h2 className="text-sm font-bold uppercase tracking-wider text-white">Explore</h2><ul className="mt-5 space-y-3 text-sm">{links.map(([label, href]) => <li key={href}><Link href={href} className="hover:text-white">{label}</Link></li>)}</ul></div>
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
                <span itemProp="addressLocality">Basking Ridge</span>, <span itemProp="addressRegion">NJ</span> <span itemProp="postalCode">07920</span>
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
        </div>
      </div>
    </footer>
  );
}

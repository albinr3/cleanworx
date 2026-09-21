"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/autodetail/ScrollReveal";

export function Footer() {
  return (
    <footer id="contact" className="relative bg-[#070709] border-t border-white/10 text-neutral-400">
      {/* Main Footer Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 pb-10 sm:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 mb-12 sm:mb-16">
          
          {/* Column 1: Brand & Bio */}
          <ScrollReveal animation="fade-up" delay={0} duration={700} className="space-y-5 sm:space-y-6">
            <Link href="#" className="inline-block">
              <div className="relative w-44 h-10">
                <Image
                  src="/images/autodetail/logo-white.webp"
                  alt="AutoDetail"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-neutral-400">
              At AutoDetail, we’re dedicated to providing professional, high-quality car detailing services. From routine hand washes to advanced ceramic coatings, we preserve your vehicle’s brilliance and value.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 sm:gap-3 pt-1">
              {["Facebook", "Instagram", "YouTube", "Twitter"].map((network) => (
                <a
                  key={network}
                  href="#"
                  aria-label={network}
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#1277ff] hover:text-white border border-white/10 flex items-center justify-center text-neutral-300 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span className="text-xs font-bold">{network[0]}</span>
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Column 2: Quick Links */}
          <ScrollReveal animation="fade-up" delay={100} duration={700}>
            <h4 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider mb-4 sm:mb-6">
              Company
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-sm">
              {[
                { label: "Home", href: "#" },
                { label: "About Us", href: "#about" },
                { label: "Our Services", href: "#services" },
                { label: "Why Choose Us", href: "#why-us" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Frequently Asked", href: "#faq" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-2 py-0.5 text-neutral-400 hover:text-white transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 text-neutral-600 group-hover:text-[#1277ff] group-hover:translate-x-1 transition-all" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Column 3: Services */}
          <ScrollReveal animation="fade-up" delay={200} duration={700}>
            <h4 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider mb-4 sm:mb-6">
              Our Services
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-sm">
              {[
                "Exterior Hand Wash & Wax",
                "Interior Deep Cleaning",
                "Paint Correction & Buffing",
                "Ceramic Shield Coating",
                "Engine Bay Detailing",
                "Headlight Optical Restoration",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 py-0.5 text-neutral-400 hover:text-white transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 text-neutral-600 group-hover:text-[#1277ff] group-hover:translate-x-1 transition-all" />
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Column 4: Contact Details */}
          <ScrollReveal animation="fade-up" delay={300} duration={700}>
            <h4 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider mb-4 sm:mb-6">
              Contact Us
            </h4>
            <ul className="space-y-3.5 sm:space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#1277ff] flex-shrink-0 mt-0.5" />
                <span>123 Luxury Auto Way, Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#1277ff] flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors font-medium">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#1277ff] flex-shrink-0" />
                <a href="mailto:info@autodetail.com" className="hover:text-white transition-colors">
                  info@autodetail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#1277ff] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-neutral-200">Mon - Sat: 8:00 AM - 6:00 PM</p>
                  <p className="text-neutral-500 text-xs mt-0.5">Sunday: By Appointment Only</p>
                </div>
              </li>
            </ul>
          </ScrollReveal>

        </div>

        {/* Bottom Bar */}
        <ScrollReveal animation="fade" delay={350} duration={700}>
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 text-center sm:text-left">
            <p>© 2026 AutoDetail. All Rights Reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <a href="#" className="hover:text-white transition-colors py-1">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors py-1">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors py-1">Sitemap</a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}

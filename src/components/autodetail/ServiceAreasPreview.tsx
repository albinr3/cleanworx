import Link from "next/link";
import { MapPin, Clock, Phone, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/autodetail/ScrollReveal";

export function ServiceAreasPreview() {
  return (
    <section className="bg-[#0a0a0c] py-16 sm:py-20 lg:py-28 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Location Info & Details */}
          <ScrollReveal animation="fade-right" duration={700} className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1277ff]/30 bg-[#1277ff]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#4da3ff] w-fit mb-4">
              <MapPin className="h-3.5 w-3.5" />
              <span>In-Shop &amp; Mobile Service</span>
            </div>

            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl font-heading">
              Serving Basking Ridge &amp; Nearby Communities
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-neutral-300 sm:text-base">
              CleanWorx operates from our dedicated detailing shop at 19 E. Henry Street in Basking Ridge, NJ, and dispatches self-contained mobile detailing units across Somerset, Morris, and Union counties.
            </p>

            {/* Quick Details Card */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-[#14151a] p-5 sm:p-6 space-y-3.5 shadow-xl">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#1277ff]" />
                <div>
                  <p className="font-bold text-white text-sm">CleanWorx Auto Detailing &amp; Ceramic Coating</p>
                  <p className="text-xs sm:text-sm text-neutral-400">19 E. Henry Street, Basking Ridge, NJ 07920</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300 pt-2.5 border-t border-white/5">
                <Clock className="h-4 w-4 shrink-0 text-[#1277ff]" />
                <span>Monday – Saturday: 9:00 AM – 5:00 PM · Closed Sunday</span>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300 pt-2.5 border-t border-white/5">
                <Phone className="h-4 w-4 shrink-0 text-[#1277ff]" />
                <a href="tel:+19088992832" className="font-semibold text-white hover:text-[#4da3ff] transition-colors">
                  908-899-2832
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/service-areas"
                className="inline-flex items-center gap-2 rounded-xl bg-[#1277ff] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#1277ff]/20 transition-all hover:bg-[#0d62d6] hover:shadow-[#1277ff]/30 active:scale-[0.98]"
              >
                <span>View Service Areas</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://share.google/UwkPd2O0H8zeL4M37"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all hover:border-[#1277ff] hover:bg-white/10"
              >
                <span>Google Business Profile ↗</span>
              </a>
            </div>
          </ScrollReveal>

          {/* Right Column: Google Maps Iframe Embed */}
          <ScrollReveal animation="fade-left" delay={150} duration={700} className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#14151a] shadow-2xl h-[380px] sm:h-[420px] lg:h-[460px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.586929759875!2d-74.5508026239746!3d40.70509417139475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b79f2ad31b11%3A0xddacbc0a3ba76720!2sCleanWorx%20Auto%20Detailing%20%26%20Ceramic%20Coating!5e0!3m2!1ses!2sdo!4v1790476152104!5m2!1ses!2sdo"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 h-full w-full border-0"
                title="CleanWorx Auto Detailing & Ceramic Coating Shop Map"
              />
            </div>
            <div className="mt-2.5 flex items-center justify-between px-1 text-xs">
              <span className="text-neutral-400">19 E. Henry St, Basking Ridge, NJ 07920</span>
              <a
                href="https://share.google/UwkPd2O0H8zeL4M37"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#4da3ff] hover:text-white transition-colors"
              >
                Open in Google Maps / Directions ↗
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

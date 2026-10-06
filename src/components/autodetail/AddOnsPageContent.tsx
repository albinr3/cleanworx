"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sun,
  Wrench,
  Layers,
  Flame,
  ShieldCheck,
  Sparkles,
  Check,
  ChevronRight,
  Clock,
  Car,
  Phone,
  HelpCircle,
  ArrowRight,
  Dog,
  Calendar,
  CheckCircle2,
  Info,
} from "lucide-react";
import { BOOKING_URL } from "@/data/autodetailData";
import { ScrollReveal } from "@/components/autodetail/ScrollReveal";

type CategoryFilter = "all" | "exterior" | "interior" | "restoration";

interface AddonItem {
  id: string;
  category: "exterior" | "interior" | "restoration";
  badge: string;
  title: string;
  tagline: string;
  addonPrice: string;
  standalonePrice: string;
  duration: string;
  icon: React.ReactNode;
  image: string;
  imageAlt: string;
  description: string;
  inclusions: string[];
  bestFor: string;
  bookingNote: string;
}

const ADDONS_CATALOG: AddonItem[] = [
  {
    id: "headlight-restoration",
    category: "restoration",
    badge: "Safety & Clarity",
    title: "Crystal-Clear Headlight Restoration",
    tagline: "Multi-stage sanding, compounding & 2-year ceramic coating",
    addonPrice: "$75.00",
    standalonePrice: "$125.00",
    duration: "45 mins",
    icon: <Sun className="h-6 w-6 text-[#1277ff]" />,
    image: "/images/autodetail/cleanworx-headlight-restoration-engine-bay-detailing.webp",
    imageAlt: "CleanWorx professional headlight restoration in Basking Ridge NJ",
    description:
      "Cloudy, yellowed, and oxidized headlight lenses reduce nighttime visibility by up to 50% and make even a pristine car look aged. We perform a multi-stage wet sanding process to remove degraded polycarbonate, polish the lens back to optical transparency, and seal it with a durable 2-year ceramic coating to prevent future UV oxidation.",
    inclusions: [
      "Precision wet sanding removing UV oxidation & pitting",
      "Rotary machine compound & finishing jewel polish",
      "Defect-free optical lens clarity restoration",
      "2-Year ceramic coating seal against UV and road salt",
      "Enhanced nighttime visibility and passing NJ inspection",
    ],
    bestFor: "Vehicles with foggy, yellowed, hazy, or scratched plastic headlight lenses.",
    bookingNote: "Available as a $75 add-on to any detail, or $125 standalone at our Basking Ridge studio.",
  },
  {
    id: "engine-bay-detail",
    category: "restoration",
    badge: "Showroom Under-the-Hood",
    title: "Engine Bay Deep Clean & Dressing",
    tagline: "Delicate hand cleaning, steam degreasing & factory satin dressing",
    addonPrice: "$75.00",
    standalonePrice: "$125.00",
    duration: "30–45 mins",
    icon: <Wrench className="h-6 w-6 text-[#1277ff]" />,
    image: "/images/autodetail/cleanworx-headlight-restoration-engine-bay-detailing.webp",
    imageAlt: "CleanWorx engine bay deep clean and protective dressing",
    description:
      "A clean engine runs cooler, makes routine maintenance easier, and dramatically boosts private resale value. We meticulously isolate and mask sensitive electrical components, apply safe pH-neutral citrus degreasers, gently agitate grease buildup, and rinse with low-moisture steam. Finished with a non-silicone, factory-matte OEM dressing that repels dust.",
    inclusions: [
      "Careful masking of alternator, exposed air intakes & battery",
      "Targeted citrus degreasing & soft-bristle brush agitation",
      "Controlled low-moisture steam rinse (no high-pressure water)",
      "High-pressure heated air blow-out of all crevices",
      "Factory-satin UV dressing applied to plastics & rubber hoses",
    ],
    bestFor: "Vehicles with dust, oil mist, leaves, or road grime under the hood.",
    bookingNote: "Add to any interior/exterior package for $75, or book standalone at our studio for $125.",
  },
  {
    id: "air-purification",
    category: "interior",
    badge: "Odor Neutralization",
    title: "Cabin Air Purification & Odor Removal",
    tagline: "30 to 40 minute ozone treatment for lingering vehicle odors",
    addonPrice: "$75.00",
    standalonePrice: "$125.00",
    duration: "45 mins",
    icon: <Flame className="h-6 w-6 text-[#1277ff]" />,
    image: "/images/autodetail/cleanworx-interior-steam-leather-restoration.webp",
    imageAlt: "CleanWorx deep interior air purification and steam treatment",
    description:
      "Air fresheners only change the scent in a vehicle. Our standalone ozone air purification appointment runs for approximately 30 to 40 minutes and is intended for lingering cabin odor concerns. Results depend on the odor source, affected materials, and vehicle condition.",
    inclusions: [
      "30 to 40 minute ozone generator treatment",
      "45-minute standalone studio appointment",
      "USD 125 standalone appointment",
      "USD 75 add-on to a Full Interior Detail",
      "Optional pairing with Full Interior Detailing for cabin cleaning",
    ],
    bestFor: "Vehicles with lingering smoke, pet, food, spill, or musty cabin odors after the underlying concern has been addressed.",
    bookingNote: "Add to a Full Interior Detail for $75, or schedule a standalone Basking Ridge studio appointment for $125.",
  },
  {
    id: "one-step-polish",
    category: "exterior",
    badge: "Gloss Enhancement",
    title: "1-Step Machine Polish (Gloss Boost)",
    tagline: "Single-stage dual-action machine polish for enhanced shine",
    addonPrice: "From $123.99+",
    standalonePrice: "Package Add-On",
    duration: "1 hr 15 mins+",
    icon: <Sparkles className="h-6 w-6 text-[#1277ff]" />,
    image: "/images/autodetail/cleanworx-precision-machine-polishing-paint-correction.webp",
    imageAlt: "CleanWorx 1-step machine polish gloss enhancement",
    description:
      "The perfect sweet spot between a standard wash and full multi-stage paint correction. Using a dual-action machine polisher and a precision finishing compound, this 1-step polish cleans paint micro-pores, removes light oxidation, and enhances optical gloss depth before applying a protective wax or sealant.",
    inclusions: [
      "Precision dual-action machine pass on all painted panels",
      "Removes light wash haze, oxidation, and micro-marring",
      "Dramatically amplifies metallic flake and paint reflections",
      "Prepares the clear coat for maximum wax or sealant bonding",
      "Significantly lower cost than multi-stage paint correction",
    ],
    bestFor: "Vehicles with minor surface dullness that want an immediate gloss boost.",
    bookingNote: "Available as an add-on to any exterior detail package (starting at $123.99+).",
  },
  {
    id: "interior-protection",
    category: "interior",
    badge: "Surface Defense",
    title: "Interior Surface Protection Package",
    tagline: "UV shield & stain barrier for leather seating and interior trim",
    addonPrice: "$55.00",
    standalonePrice: "Detail Upgrade",
    duration: "30 mins",
    icon: <ShieldCheck className="h-6 w-6 text-[#1277ff]" />,
    image: "/images/autodetail/interior-leather-extraction.webp",
    imageAlt: "CleanWorx interior surface protection and leather conditioning",
    description:
      "Upgrade your detailing service with long-lasting surface protection. We apply a specialized, non-greasy UV protective barrier across all interior leather seats, vinyl dashboard, door cards, and center console. Shields against sun fading, cracking, and dye transfer from blue jeans while repelling dust.",
    inclusions: [
      "OEM-matte leather conditioner & UV sun shield application",
      "Anti-static dashboard and center console protective coat",
      "Protection against dye transfer from jeans & clothing",
      "Non-greasy, non-sticky factory finish (no cheap slick residue)",
      "Helps prevent premature leather drying and cracking",
    ],
    bestFor: "Vehicles with leather interiors, high-sun exposure, or daily commuter use.",
    bookingNote: "Available as a $55 upgrade to the Mini Detail or Full Interior package.",
  },
  {
    id: "tint-removal",
    category: "restoration",
    badge: "Defroster Safe",
    title: "Professional Window Tint Removal",
    tagline: "Steam-assisted peeling & adhesive stripping with zero defroster damage",
    addonPrice: "From $20 / window",
    standalonePrice: "From $20 / window",
    duration: "Varies by scope",
    icon: <Layers className="h-6 w-6 text-[#1277ff]" />,
    image: "/images/autodetail/window-tint-process.webp",
    imageAlt: "CleanWorx precision automotive window tint removal Basking Ridge",
    description:
      "Old, low-quality window film turns purple, bubbles, and distorts visibility. Peeling it yourself can tear rear defroster heating lines or leave behind rock-hard adhesive. We utilize high-temperature steam and non-damaging adhesive removers to cleanly strip old film without scratching glass or ruining defroster grids.",
    inclusions: [
      "High-heat steam softening for clean film delamination",
      "100% safe on delicate rear window defroster grids and antenna lines",
      "Complete chemical adhesive solvent residue removal",
      "Streak-free glass cleaning inside and out",
      "Prepares glass for fresh Carbon or Ceramic tint installation",
    ],
    bestFor: "Vehicles with bubbling, purple, peeling, or damaged window tint.",
    bookingNote: "$20 per window; $50 for a front or rear windshield; $100 for a whole vehicle; $150 for a large van or SUV. Whole-vehicle prices exclude the front windshield. Studio and mobile appointments available; one $50 mobile fee applies when the pre-fee appointment subtotal is below $400.",
  },
  {
    id: "pet-hair-removal",
    category: "interior",
    badge: "Deep Soil Removal",
    title: "Pet Hair, Sand & Severe Soil Removal",
    tagline: "Mechanical agitation & deep extraction for stubborn embedded debris",
    addonPrice: "$50.00 – $150.00",
    standalonePrice: "Add-On Only",
    duration: "Approx. 1 hr",
    icon: <Dog className="h-6 w-6 text-[#1277ff]" />,
    image: "/images/autodetail/interior-carpet-after.jpg",
    imageAlt: "CleanWorx pet hair and heavy soil carpet extraction",
    description:
      "Routine vacuuming cannot dislodge barbed pet hair woven into carpet fibers or fine Jersey Shore beach sand lodged beneath seats. We use specialized rubber pet-hair stones, high-pressure air pulsators, and heated commercial extractors to safely remove embedded hair, sand, and tough spills.",
    inclusions: [
      "Pneumatic air-tool purging of carpet fibers and seat tracks",
      "Specialized rubber pet-hair brushes and detail stones",
      "Deep extraction of stubborn beach sand and grit",
      "Removal of embedded hair from trunks, cargo liners, and seats",
      "Transparent price assessment before work begins",
    ],
    bestFor: "Vehicles carrying pets, heavy beach trips, or stubborn carpet debris.",
    bookingNote: "Priced from $50.00 to $150.00 depending on condition. Assessed upfront with you prior to work.",
  },
];

export function AddOnsPageContent() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");

  const filteredCatalog = ADDONS_CATALOG.filter((item) => {
    if (activeFilter === "all") return true;
    return item.category === activeFilter;
  });

  return (
    <div className="relative bg-[#070709] text-white">
      {/* Hero Section */}
      <section className="relative isolate min-h-[520px] overflow-hidden border-b border-white/10 lg:min-h-[580px]">
        <Image
          src="/images/autodetail/cleanworx-headlight-restoration-engine-bay-detailing.webp"
          alt="CleanWorx specialized auto detailing add-ons and restoration services in Basking Ridge NJ"
          fill
          priority
          sizes="100vw"
          className="-z-30 object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,#070709_0%,rgba(7,7,9,.94)_40%,rgba(7,7,9,.6)_70%,rgba(7,7,9,.8)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_25%,rgba(18,119,255,.35),transparent_35%),linear-gradient(0deg,#070709_0%,transparent_45%)]" />

        <div className="mx-auto flex min-h-[520px] max-w-7xl flex-col justify-between px-4 pb-12 pt-8 sm:min-h-[580px] sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-400">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span aria-current="page" className="text-neutral-200">
              Add-Ons &amp; Extras
            </span>
          </nav>

          {/* Hero Content */}
          <div className="max-w-4xl py-10 sm:py-14">
            <ScrollReveal animation="fade-up" duration={800}>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#1277ff]/30 bg-[#1277ff]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#4da3ff]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Specialized Enhancements &amp; Upgrades</span>
              </div>
              <h1 className="mt-4 text-4xl font-black uppercase leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Auto Detailing <span className="text-[#4da3ff]">Add-Ons</span> &amp; Restoration
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg">
                Targeted vehicle enhancements for lingering cabin odors, headlight clarity, engine-bay cleaning, and interior or exterior protection. Services are available as applicable add-ons or standalone studio appointments in Basking Ridge, NJ.
              </p>

              {/* Value Pills */}
              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm">
                <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-medium text-neutral-200">
                  <CheckCircle2 className="h-4 w-4 text-[#1277ff]" />
                  <span>100% Transparent Square Pricing</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-medium text-neutral-200">
                  <CheckCircle2 className="h-4 w-4 text-[#1277ff]" />
                  <span>Studio &amp; Mobile Options</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-medium text-neutral-200">
                  <CheckCircle2 className="h-4 w-4 text-[#1277ff]" />
                  <span>Starting at just $50</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={BOOKING_URL}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1277ff] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#1277ff]/25 transition hover:bg-[#0d62d6] active:scale-95"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Book an Add-On Now</span>
                </a>
                <a
                  href="tel:+19088992832"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/10 active:scale-95"
                >
                  <Phone className="h-4 w-4 text-[#4da3ff]" />
                  <span>908-899-2832</span>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Pricing Notice */}
      <section className="sticky top-[73px] z-30 border-b border-white/10 bg-[#0a0a0c]/95 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "All Add-Ons (7)" },
              { id: "restoration", label: "Restoration & Safety" },
              { id: "interior", label: "Interior & Odor" },
              { id: "exterior", label: "Exterior & Paint" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as CategoryFilter)}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all sm:text-sm ${
                  activeFilter === tab.id
                    ? "bg-[#1277ff] text-white shadow-md shadow-[#1277ff]/20"
                    : "border border-white/10 bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <Info className="h-4 w-4 text-[#4da3ff]" />
            <span>Pair with any package or book standalone at our studio</span>
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredCatalog.map((item, idx) => (
              <ScrollReveal
                key={item.id}
                animation="fade-up"
                delay={idx * 75}
                className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111216] transition-all hover:border-[#1277ff]/50 hover:shadow-xl hover:shadow-[#1277ff]/10"
              >
                {/* Card Header with Badges */}
                <div className="p-6 pb-4">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                        {item.icon}
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#4da3ff]">
                        {item.badge}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-neutral-400">
                      <Clock className="h-3.5 w-3.5 text-neutral-500" />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  <h2 className="mt-4 text-xl font-bold text-white leading-snug">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-xs text-[#70b5ff]">
                    {item.tagline}
                  </p>
                </div>

                {/* Price Display Box */}
                <div className="mx-6 rounded-xl border border-white/10 bg-[#161820] p-3.5">
                  <div className="grid grid-cols-2 divide-x divide-white/10 text-center">
                    <div className="px-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                        Add-On Price
                      </span>
                      <p className="mt-0.5 text-lg font-black text-[#4da3ff]">
                        {item.addonPrice}
                      </p>
                    </div>
                    <div className="px-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                        Standalone
                      </span>
                      <p className="mt-0.5 text-base font-bold text-neutral-200">
                        {item.standalonePrice}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description & Inclusions */}
                <div className="flex flex-1 flex-col p-6 pt-4">
                  <p className="text-xs leading-relaxed text-neutral-300 sm:text-sm">
                    {item.description}
                  </p>

                  <div className="mt-5 border-t border-white/10 pt-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                      What is included:
                    </p>
                    <ul className="mt-2.5 space-y-2 text-xs text-neutral-300">
                      {item.inclusions.map((inc) => (
                        <li key={inc} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#1277ff]" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best For Note */}
                  <div className="mt-5 rounded-lg border border-white/5 bg-white/[0.02] p-3 text-xs text-neutral-400">
                    <span className="font-semibold text-white">Ideal for: </span>
                    {item.bestFor}
                  </div>

                  {item.id === "headlight-restoration" && (
                    <Link
                      href="/headlight-restoration"
                      className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#70b5ff] transition hover:text-white"
                    >
                      Learn about headlight restoration <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  )}

                  {item.id === "air-purification" && (
                    <Link
                      href="/car-odor-treatment"
                      className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#70b5ff] transition hover:text-white"
                    >
                      Learn about car odor removal <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  )}

                  {/* Card Action Button */}
                  <div className="mt-6 pt-2">
                    <a
                      href={BOOKING_URL}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white/10 py-3 text-xs font-bold text-white transition hover:bg-[#1277ff] active:scale-95"
                    >
                      <span>Book on Square</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works & Booking Rules */}
      <section className="border-t border-white/10 bg-[#0d0e12] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4da3ff]">
              Seamless Booking Flexibility
            </span>
            <h2 className="mt-2 text-3xl font-black uppercase text-white sm:text-4xl">
              How CleanWorx Add-Ons Work
            </h2>
            <p className="mt-4 text-sm text-neutral-300 sm:text-base leading-relaxed">
              Whether you need a quick headlight restoration before inspection or want to add engine bay dressing to your mobile detail, we make appointment scheduling simple and transparent.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[#14151a] p-6 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1277ff]/10 text-[#4da3ff]">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">
                1. Add to Any Detail Package
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Booking a Full Interior, Exterior, or Ceramic Coating? Select any add-on during checkout at the discounted add-on rate ($75 for headlights, $75 for engine bay, etc.) to complete your vehicle transformation in one single appointment.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#14151a] p-6 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1277ff]/10 text-[#4da3ff]">
                <Car className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">
                2. Standalone Studio Drop-Off
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Only need headlight restoration, window tint removal, or air purification? Book a dedicated standalone appointment at our studio located at <strong>19 E. Henry Street in Basking Ridge, NJ</strong> with fast turnaround times.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#14151a] p-6 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1277ff]/10 text-[#4da3ff]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">
                3. Clear, Upfront Pricing
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                No hidden surprise fees. For variable condition services like pet hair or heavy sand extraction, our certified technician assesses the vehicle with you upfront before starting, confirming the exact price ($50–$150).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4da3ff]">
              Got Questions?
            </span>
            <h2 className="mt-2 text-3xl font-black uppercase text-white sm:text-4xl">
              Add-On &amp; Upgrade FAQs
            </h2>
            <p className="mt-3 text-sm text-neutral-400">
              Clear answers regarding add-on compatibility, durability, and scheduling.
            </p>
          </div>

          <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-[#111216]">
            {[
              {
                q: "Can I book an add-on service by itself without getting a full detail?",
                a: "Yes. Headlight Restoration ($125 standalone), Engine Bay Cleaning ($125 standalone), Air Purification ($125 standalone), and Window Tint Removal (from $20 per window) can be booked separately. Ask about studio or mobile availability for your service."
              },
              {
                q: "What is the difference between a 1-step polish and full paint correction?",
                a: "A 1-step machine polish uses a single finishing pad and fine compound to clean paint pores and boost optical gloss, removing 40%–60% of very light hazing. Full multi-stage paint correction starts at $350 and involves heavy compounding followed by fine polishing to eliminate 85% to 90%+ of deep swirl marks and scratches.",
              },
              {
                q: "How long will my headlight restoration last?",
                a: "Unlike quick DIY kits that fog up in weeks, our professional service concludes with a multi-year ceramic coating that chemically bonds with the freshly polished polycarbonate. This provides up to 2 years of UV resistance against sun oxidation and winter road salts.",
              },
              {
                q: "Will window tint removal damage my rear window defrosters?",
                a: "No. We use specialized high-temperature steam and non-caustic adhesive softeners that allow the tint to release gently. We never use razor blades on rear windows equipped with embedded defroster lines or radio antennas.",
              },
              {
                q: "How does the pet hair and heavy soil surcharge work?",
                a: "Standard interior detailing covers routine soil and vacuuming. When pet hair is deeply woven into automotive carpets or beach sand is compacted into floor fibers, mechanical extraction tools are required. We inspect the vehicle upon arrival and confirm the exact fee (typically $50 to $150) before touching the vehicle.",
              },
            ].map((faq, i) => (
              <div key={i} className="p-6">
                <h3 className="text-base font-bold text-white flex items-start gap-2.5">
                  <HelpCircle className="h-5 w-5 text-[#1277ff] shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="mt-2.5 pl-7 text-xs sm:text-sm leading-relaxed text-neutral-300">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Conversion Banner */}
      <section className="border-t border-white/10 bg-[#070709] py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#1277ff]/20 via-[#1277ff]/10 to-transparent p-8 sm:p-12 lg:flex lg:items-center lg:justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#4da3ff]">
                Ready to Upgrade Your Vehicle?
              </span>
              <h2 className="mt-2 text-2xl font-black uppercase text-white sm:text-3xl">
                Schedule Your Add-On or Package Today
              </h2>
              <p className="mt-3 max-w-xl text-sm text-neutral-300">
                Book online in 60 seconds with live availability on Square, or call our Basking Ridge studio for tailored recommendations.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3 lg:mt-0">
              <a
                href={BOOKING_URL}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1277ff] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#1277ff]/30 transition hover:bg-[#0d62d6] active:scale-95"
              >
                <Calendar className="h-4 w-4" />
                <span>Book Appointment</span>
              </a>
              <a
                href="tel:+19088992832"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10 active:scale-95"
              >
                <Phone className="h-4 w-4 text-[#4da3ff]" />
                <span>908-899-2832</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

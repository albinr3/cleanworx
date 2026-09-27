"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  Phone,
  Clock,
  ShieldCheck,
  Sparkles,
  Car,
  Users,
  Award,
  ArrowRight,
  ChevronRight,
  Gauge,
  Flame,
  Star,
  Building2,
  Truck,
} from "lucide-react";
import { BookingLink, BOOKING_URL } from "@/components/autodetail/BookingLink";
import { ScrollReveal } from "@/components/autodetail/ScrollReveal";
import { SiteShell } from "@/components/autodetail/SiteShell";

const STORY_MILESTONES = [
  {
    year: "2019",
    tag: "Garage Origins",
    title: "Starting Out in Colonia",
    description:
      "Vito DeGironimo started detailing full-time out of his garage in Colonia, packing equipment into a Jeep Grand Cherokee to service vehicles across Woodbridge and Central NJ.",
    icon: Flame,
  },
  {
    year: "2021",
    tag: "Mobile Rig",
    title: "The Custom Jeep Gladiator",
    description:
      "Built a dedicated Gladiator equipped with an onboard generator, pressure systems, and deionized spot-free water for complete mobile independence in client driveways.",
    icon: Truck,
  },
  {
    year: "2023",
    tag: "The Team",
    title: "Melqui & Hemza Join CleanWorx",
    description:
      "Detailing specialists Melqui Pichardo and Hemza Nasser joined full-time, allowing the shop to take on more multi-stage paint corrections, ceramic coatings, and window tint jobs.",
    icon: Users,
  },
  {
    year: "2025",
    tag: "Studio Opening",
    title: "19 E. Henry St in Basking Ridge",
    description:
      "Opened our dedicated detailing studio with 6500K LED inspection lighting, a dust-controlled window tint bay, and climate-controlled ceramic coating bays.",
    icon: Building2,
  },
];

const TEAM_MEMBERS = [
  {
    name: "Vito DeGironimo",
    role: "Founder & Owner-Operator",
    tenure: "Est. 2019",
    specialties: ["Paint Correction", "System X Ceramic Coatings", "Studio Direction"],
    bio: "Vito founded CleanWorx in his Colonia garage. He works on vehicles daily alongside the team, checking each finish personally before handing back the keys.",
  },
  {
    name: "Melqui Pichardo",
    role: "Detailing Specialist",
    tenure: "Joined 2023",
    specialties: ["Multi-Stage Correction", "Interior Steam Cleaning", "Leather Restoration"],
    bio: "Melqui is a machine paint correction specialist focused on clear-coat hardness, multi-stage swirl removal, and deep leather and interior restoration.",
  },
  {
    name: "Hemza Nasser",
    role: "Detailing Specialist",
    tenure: "Joined 2023",
    specialties: ["System X Ceramic", "Window Tint Installation", "Surface Decontamination"],
    bio: "Hemza handles ceramic coating installations and computer-cut automotive window tinting, ensuring clean edges and thorough surface decontamination.",
  },
];

const STUDIO_AMENITIES = [
  {
    icon: Sparkles,
    title: "6500K Hexagonal LED Array",
    description: "High-CRI ceiling lighting reveals micro-swirls and defects that ordinary daylight masks.",
  },
  {
    icon: ShieldCheck,
    title: "Climate-Controlled Ceramic Bays",
    description: "Controlled temperature and humidity for proper System X bonding and infrared curing.",
  },
  {
    icon: Gauge,
    title: "Digital Paint-Depth Analysis",
    description: "Ultrasonic gauges measure clear coat thickness across all panels before compounding.",
  },
  {
    icon: Car,
    title: "Dust-Controlled Tint Enclosure",
    description: "Indoor bay minimizes airborne particles for ultra-clean window film installations.",
  },
];

export function AboutUsPage() {
  const [activePhoto, setActivePhoto] = useState<"composite" | "team" | "studio">("composite");

  return (
    <SiteShell>
      {/* 1. HERO SECTION */}
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#0a0a0c] pt-28 pb-16 sm:pt-36 sm:pb-20">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-[#1277ff]/15 rounded-full blur-[130px] pointer-events-none -z-10" />
        <div className="absolute top-20 right-10 w-80 h-80 bg-[#00d2ff]/10 rounded-full blur-[110px] pointer-events-none -z-10" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-medium text-neutral-400">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-neutral-600" />
            <span aria-current="page" className="text-[#4da3ff]">
              About CleanWorx
            </span>
          </nav>

          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-300 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#1277ff] animate-pulse" />
            <span>Our Story · Est. 2019 · Basking Ridge, NJ</span>
          </div>

          {/* Main Title & Subtitle */}
          <div className="mt-6 max-w-4xl">
            <h1 className="text-3xl font-black uppercase tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.08]">
              Born in a Garage. <br />
              <span className="bg-gradient-to-r from-white via-neutral-200 to-[#4da3ff] bg-clip-text text-transparent">
                Refined in Basking Ridge.
              </span>
            </h1>
            <p className="mt-5 max-w-3xl text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              In 2019, <strong className="text-white font-semibold">Vito DeGironimo</strong> started detailing cars out of his Colonia garage with a Jeep Grand Cherokee. That setup grew into a custom mobile rig and, in 2025, our dedicated studio at <strong className="text-white font-semibold">19 E. Henry Street</strong> in Basking Ridge. Today, Vito, <strong className="text-white font-semibold">Melqui Pichardo</strong>, and <strong className="text-white font-semibold">Hemza Nasser</strong> handle every vehicle directly—no outsourced crews or handed-off prep work.
            </p>
          </div>

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <BookingLink label="Book Studio or Mobile Service" />
            <a
              href="tel:+19088992832"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-semibold text-neutral-200 hover:text-white hover:bg-white/10 hover:border-white/25 transition-all"
            >
              <Phone className="h-4 w-4 text-[#4da3ff]" />
              <span>908-899-2832</span>
            </a>
            <a
              href="#our-team"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-transparent px-4 py-3.5 text-sm font-medium text-neutral-400 hover:text-white transition-colors"
            >
              <span>Meet the Team</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Stats Bar */}
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 border-t border-white/10 pt-8">
            <div className="rounded-xl border border-white/5 bg-[#121318]/70 p-4 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-black text-white">2019</div>
              <div className="mt-1 text-xs font-medium text-neutral-400">Founded in Colonia, NJ</div>
            </div>
            <div className="rounded-xl border border-white/5 bg-[#121318]/70 p-4 backdrop-blur-sm">
              <div className="flex items-center gap-1 text-2xl sm:text-3xl font-black text-[#4da3ff]">
                <span>5.0</span>
                <Star className="h-5 w-5 fill-[#4da3ff] text-[#4da3ff]" />
              </div>
              <div className="mt-1 text-xs font-medium text-neutral-400">220+ Verified Reviews</div>
            </div>
            <div className="rounded-xl border border-white/5 bg-[#121318]/70 p-4 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-black text-white">19 E. Henry</div>
              <div className="mt-1 text-xs font-medium text-neutral-400">Basking Ridge Detailing Studio</div>
            </div>
            <div className="rounded-xl border border-white/5 bg-[#121318]/70 p-4 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-black text-[#4da3ff]">System X</div>
              <div className="mt-1 text-xs font-medium text-neutral-400">Certified Ceramic Installer</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE STORY & VISUAL SHOWCASE */}
      <section className="relative bg-[#0d0e12] py-16 sm:py-24 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left: Concise Narrative & Milestones */}
            <div className="lg:col-span-6">
              <ScrollReveal animation="fade-right">
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#4da3ff] uppercase mb-2">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>How We Grew</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  From Mobile Driveways to a Dedicated Studio
                </h2>
                <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed">
                  CleanWorx grew through word of mouth and repeat clients across Central and North Jersey. We handle all paint correction, ceramic coatings, and interior restorations in-house with the same care we put into our own cars.
                </p>

                {/* 4 Concise Milestone Steps */}
                <div className="mt-8 space-y-4">
                  {STORY_MILESTONES.map((step) => {
                    const StepIcon = step.icon;
                    return (
                      <div
                        key={step.year}
                        className="flex items-start gap-4 rounded-xl border border-white/5 bg-[#121319] p-4 transition-all hover:border-white/15"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1277ff]/10 border border-[#1277ff]/20 text-[#4da3ff]">
                          <StepIcon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-[#4da3ff]">{step.year}</span>
                            <span className="text-neutral-500 text-xs">·</span>
                            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">{step.tag}</span>
                          </div>
                          <h3 className="text-sm font-bold text-white mt-0.5">{step.title}</h3>
                          <p className="text-xs text-neutral-300 mt-1 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Master Visual Showcase */}
            <div className="lg:col-span-6">
              <ScrollReveal animation="fade-left">
                {/* Photo Switcher Tabs */}
                <div className="mb-4 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-400">
                    <span className="h-2 w-2 rounded-full bg-[#1277ff]" />
                    <span>CleanWorx In Action</span>
                  </div>
                  <div className="inline-flex rounded-lg border border-white/10 bg-[#121319] p-1 text-xs font-medium">
                    <button
                      type="button"
                      onClick={() => setActivePhoto("composite")}
                      className={`rounded-md px-3 py-1 cursor-pointer transition-all ${
                        activePhoto === "composite"
                          ? "bg-[#1277ff] text-white font-bold"
                          : "text-neutral-400 hover:text-white"
                      }`}
                    >
                      Team &amp; Shop
                    </button>
                    <button
                      type="button"
                      onClick={() => setActivePhoto("team")}
                      className={`rounded-md px-3 py-1 cursor-pointer transition-all ${
                        activePhoto === "team"
                          ? "bg-[#1277ff] text-white font-bold"
                          : "text-neutral-400 hover:text-white"
                      }`}
                    >
                      The Team
                    </button>
                    <button
                      type="button"
                      onClick={() => setActivePhoto("studio")}
                      className={`rounded-md px-3 py-1 cursor-pointer transition-all ${
                        activePhoto === "studio"
                          ? "bg-[#1277ff] text-white font-bold"
                          : "text-neutral-400 hover:text-white"
                      }`}
                    >
                      Studio
                    </button>
                  </div>
                </div>

                {/* Photo Container */}
                <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#14151b] shadow-2xl group">
                  <div className="relative aspect-[16/10] w-full">
                    {activePhoto === "composite" && (
                      <Image
                        src="/images/about/cleanworx-team-and-shop.webp"
                        alt="CleanWorx Team Vito DeGironimo, Melqui Pichardo, and Hemza Nasser inside Basking Ridge studio"
                        fill
                        priority
                        quality={95}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    {activePhoto === "team" && (
                      <Image
                        src="/images/about/cleanworx-team-4k.webp"
                        alt="Melqui Pichardo, Vito DeGironimo, and Hemza Nasser crouching in shop"
                        fill
                        priority
                        quality={95}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    {activePhoto === "studio" && (
                      <Image
                        src="/images/about/cleanworx-shop-exterior.webp"
                        alt="CleanWorx Auto Detailing storefront at 19 E. Henry Street Basking Ridge NJ"
                        fill
                        priority
                        quality={95}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Info Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/15 bg-black/75 p-3.5 backdrop-blur-md">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#4da3ff]">
                        {activePhoto === "studio" ? "19 E. Henry Street Studio" : "CleanWorx Detailing Team"}
                      </p>
                      <p className="text-sm font-semibold text-white mt-0.5">
                        {activePhoto === "studio"
                          ? "Basking Ridge, NJ 07920 · Somerset County"
                          : "Melqui Pichardo · Vito DeGironimo · Hemza Nasser"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct facility verification footnote */}
                <div className="mt-3 flex items-center justify-between text-xs text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-[#1277ff]" />
                    <span>Licensed &amp; Insured Facility &amp; Mobile Fleet</span>
                  </span>
                  <span className="text-[#4da3ff] font-semibold">220+ 5-Star Reviews</span>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MEET THE TEAM (THE CRAFTSMEN) */}
      <section id="our-team" className="relative bg-[#0a0a0c] py-16 sm:py-24 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto">
            <ScrollReveal animation="fade-up">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#4da3ff] uppercase mb-2">
                <Users className="h-4 w-4" />
                <span>Who Details Your Vehicle</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Meet the Team Working on Your Car
              </h2>
              <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed">
                We don&apos;t use temporary crews or hand keys over to apprentices. Every car is inspected, corrected, and coated directly by Vito, Melqui, or Hemza.
              </p>
            </ScrollReveal>
          </div>

          {/* 3 Team Cards Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member, idx) => (
              <ScrollReveal key={member.name} animation="fade-up" delay={idx * 100}>
                <div className="h-full rounded-2xl border border-white/10 bg-[#12131a] p-6 flex flex-col justify-between hover:border-[#1277ff]/40 hover:bg-[#141520] transition-all group">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-semibold text-neutral-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">
                        {member.tenure}
                      </span>
                      <Award className="h-4 w-4 text-[#1277ff] group-hover:scale-110 transition-transform" />
                    </div>

                    <h3 className="mt-4 text-xl font-bold text-white group-hover:text-[#4da3ff] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#4da3ff] mt-0.5">
                      {member.role}
                    </p>

                    <p className="mt-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                      Key Specialties
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {member.specialties.map((spec) => (
                        <span
                          key={spec}
                          className="rounded bg-white/5 px-2 py-0.5 text-[11px] font-medium text-neutral-300 border border-white/5"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Vito Quote Bar */}
          <ScrollReveal animation="fade-up">
            <div className="mt-8 rounded-xl border border-white/10 bg-[#121319] p-5 sm:p-6 text-center max-w-3xl mx-auto">
              <p className="text-sm sm:text-base italic text-neutral-200">
                “Not even in a lab could a better fit have been created.”
              </p>
              <p className="mt-2 text-xs text-neutral-400">
                — Vito DeGironimo, on Melqui Pichardo and Hemza Nasser joining the shop full-time in 2023
              </p>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 4. THE BASKING RIDGE STUDIO & MOBILE SERVICE */}
      <section className="relative bg-[#0d0e12] py-16 sm:py-24 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left: Studio Amenities & Location Card */}
            <div className="lg:col-span-7">
              <ScrollReveal animation="fade-right">
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#4da3ff] uppercase mb-2">
                  <Building2 className="h-4 w-4" />
                  <span>Studio &amp; Mobile</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  19 E. Henry Street Detailing Studio
                </h2>
                <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed">
                  Our Basking Ridge shop provides the clean, temperature-controlled environment needed for thorough multi-stage paint correction, dust-free window tinting, and proper System X ceramic curing.
                </p>

                {/* 4 Amenities */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {STUDIO_AMENITIES.map((item) => {
                    const AmenityIcon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="rounded-xl border border-white/10 bg-[#12131a] p-4 hover:border-white/20 transition-all"
                      >
                        <div className="h-8 w-8 rounded-lg bg-[#1277ff]/15 border border-[#1277ff]/30 flex items-center justify-center text-[#4da3ff] mb-2.5">
                          <AmenityIcon className="h-4 w-4" />
                        </div>
                        <h3 className="text-sm font-bold text-white">{item.title}</h3>
                        <p className="mt-1 text-xs text-neutral-400 leading-relaxed">{item.description}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Studio Address & Get Directions */}
                <div className="mt-6 rounded-xl border border-white/10 bg-[#14151e] p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-sm font-bold text-white">
                      <MapPin className="h-4 w-4 text-[#1277ff]" />
                      <span>19 E. Henry Street, Basking Ridge, NJ 07920</span>
                    </div>
                    <div className="mt-1 flex items-center gap-2 text-xs text-neutral-400">
                      <Clock className="h-3.5 w-3.5 text-neutral-500" />
                      <span>Mon–Sat: 9:00 AM – 5:00 PM · Closed Sunday</span>
                    </div>
                  </div>
                  <a
                    href="https://www.google.com/maps?cid=15973418579450373920"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-2 rounded-lg bg-[#1277ff] px-4 py-2 text-xs font-bold text-white hover:bg-[#0d62d6] transition-colors"
                  >
                    <span>Get Directions</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Studio Photo & Mobile Alternative */}
            <div className="lg:col-span-5">
              <ScrollReveal animation="fade-left">
                <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#14151b] group">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/images/about/cleanworx-shop-basking-ridge.webp"
                      alt="CleanWorx Auto Detailing studio storefront at 19 E. Henry Street Basking Ridge NJ"
                      fill
                      quality={95}
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="inline-flex items-center gap-1.5 rounded-md bg-[#00d2ff]/20 border border-[#00d2ff]/40 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-[#00d2ff] mb-1.5 backdrop-blur-md">
                        Basking Ridge Studio
                      </div>
                      <p className="text-sm font-bold text-white">
                        Dedicated Indoor Detailing Bays
                      </p>
                      <p className="text-xs text-neutral-300">
                        Located in downtown Basking Ridge with straightforward drop-off and dedicated customer parking.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile Rig Callout */}
                <div className="mt-4 rounded-xl border border-white/10 bg-[#121319] p-4 flex items-center gap-3.5">
                  <div className="h-10 w-10 shrink-0 rounded-lg bg-[#1277ff]/10 border border-[#1277ff]/20 flex items-center justify-center text-[#4da3ff]">
                    <Truck className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-white">
                      Prefer Service At Home?
                    </div>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      Our custom Jeep Gladiator mobile rig brings onboard power and spot-free deionized water directly to your driveway.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 5. DIRECT CALL TO ACTION BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0d62d6] via-[#1277ff] to-[#0052cc] py-14 sm:py-18">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md mb-3">
                <Sparkles className="h-3.5 w-3.5" />
                <span>CleanWorx Auto Detailing</span>
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                Book Your Detailing Appointment at Our Studio or at Home
              </h2>
              <p className="mt-3 text-sm sm:text-base text-white/90 leading-relaxed">
                Drop off your car at 19 E. Henry Street in Basking Ridge or schedule our mobile rig to your driveway. Vito, Melqui, and Hemza handle each vehicle personally.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0 w-full sm:w-auto">
              <a
                href={BOOKING_URL}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#0a0a0c] px-7 py-3.5 text-sm font-bold text-white shadow-2xl hover:bg-black hover:scale-105 active:scale-95 transition-all"
              >
                <Calendar className="h-4 w-4" />
                <span>Book Service Now</span>
              </a>
              <a
                href="tel:+19088992832"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white hover:bg-white/20 transition-all"
              >
                <Phone className="h-4 w-4" />
                <span>Call 908-899-2832</span>
              </a>
            </div>
          </div>

          {/* Quick links footer inside CTA */}
          <div className="mt-10 border-t border-white/20 pt-5 flex flex-wrap items-center justify-center lg:justify-between gap-4 text-xs font-semibold text-white/80">
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-white" />
              <span>19 E. Henry Street, Basking Ridge, NJ 07920</span>
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/services" className="hover:text-white transition-colors">
                Explore Services →
              </Link>
              <Link href="/our-work" className="hover:text-white transition-colors">
                View Portfolio →
              </Link>
              <Link href="/ceramic-coating" className="hover:text-white transition-colors">
                Ceramic Coating →
              </Link>
              <Link href="/window-tinting" className="hover:text-white transition-colors">
                Window Tinting →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

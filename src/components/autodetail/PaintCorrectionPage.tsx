import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
} from "lucide-react";
import { BookingLink } from "@/components/autodetail/BookingLink";
import { BeforeAfterSlider } from "@/components/autodetail/BeforeAfterSlider";
import { PaintCorrectionIcon } from "@/components/autodetail/PaintCorrectionIcon";
import { HorizontalScrollRegion } from "@/components/autodetail/HorizontalScrollRegion";
import { ScrollReveal } from "@/components/autodetail/ScrollReveal";
import { SiteShell } from "@/components/autodetail/SiteShell";
import type { ServicePageData } from "@/components/autodetail/ServicePage";

const comparisonRows = [
  ["Defect Removal Rate", "0% (Fills only)", "50%–60%", "80%–90%+"],
  ["Swirl Mark Elimination", "Masked temporarily", "Light swirls removed", "Deeply corrected"],
  ["Deep Scratch Reduction", "None", "Minor reduction", "Significant leveling"],
  ["Paint Depth Inspection", "No", "Visual check", "Digital gauge verified"],
  ["Mirror Clarity & Gloss", "★★★☆☆", "★★★★☆", "★★★★★"],
  ["Clear Coat Safety", "Surface only", "Moderate pad", "Precision multi-stage"],
  ["Permanence of Results", "Weeks (Washes off)", "Permanent level", "Permanent level"],
] as const;

function Paragraphs({ paragraphs }: { paragraphs: string[] }) {
  return (
    <>
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="mt-4 text-sm leading-7 text-neutral-400 sm:text-base">
          {paragraph}
        </p>
      ))}
    </>
  );
}

export function PaintCorrectionPage({ data }: { data: ServicePageData }) {
  const [intro, defects, process, protection, pricing, results] = data.sections;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: data.name,
        provider: {
          "@type": "LocalBusiness",
          "@id": "https://www.cleanworxnj.com/#business",
          name: "CleanWorx Auto Detailing & Ceramic Coating",
          telephone: "+1-908-899-2832",
          address: {
            "@type": "PostalAddress",
            streetAddress: "19 E. Henry Street",
            addressLocality: "Basking Ridge",
            addressRegion: "NJ",
            postalCode: "07920",
            addressCountry: "US",
          },
          url: "https://www.cleanworxnj.com",
        },
        areaServed: "Basking Ridge, New Jersey",
        url: `https://www.cleanworxnj.com/${data.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cleanworxnj.com/" },
          { "@type": "ListItem", position: 2, name: data.name, item: `https://www.cleanworxnj.com/${data.slug}` },
        ],
      },
    ],
  };

  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero Section */}
      <section className="relative isolate min-h-[500px] overflow-hidden border-b border-white/10 lg:min-h-[560px]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/videos/hero-paint-correction-poster.webp"
          className="absolute inset-0 -z-30 h-full w-full object-cover object-[60%_center]"
          aria-hidden="true"
        >
          <source src="/videos/hero-paint-correction.webm" type="video/webm" />
          <source src="/videos/hero-paint-correction.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,#08090c_0%,rgba(8,9,12,.91)_35%,rgba(8,9,12,.42)_68%,rgba(8,9,12,.68)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_77%_24%,rgba(18,119,255,.4),transparent_26%),linear-gradient(0deg,#08090c_0%,transparent_42%)]" />
        <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full border border-white/15 bg-white/[0.025] sm:h-[30rem] sm:w-[30rem]" />
        <div className="absolute bottom-12 right-[8%] hidden h-32 w-32 rounded-full border border-[#4da3ff]/30 lg:block" />

        <div className="mx-auto flex min-h-[500px] max-w-7xl flex-col justify-between px-4 pb-8 pt-6 sm:px-6 sm:pb-10 lg:min-h-[560px] lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-400">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span aria-current="page" className="text-neutral-200">{data.name}</span>
          </nav>

          <div className="grid items-end gap-8 py-6 sm:py-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-12">
            <div>
              <ScrollReveal animation="fade-up" duration={800}>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#70b5ff]">{data.eyebrow}</p>
                <h1 className="mt-3 max-w-3xl text-3xl font-black uppercase leading-[.96] tracking-[-.05em] text-white sm:text-5xl lg:text-[3.5rem]">
                  {data.h1}
                </h1>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-200 sm:text-base">
                  {data.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <BookingLink />
                  <Link
                    href="/add-ons"
                    className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/20 active:translate-y-0"
                  >
                    Explore Add-Ons
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal animation="fade-up" delay={150} className="w-full">
              <div className="border border-white/15 bg-[#0b0d13]/80 p-5 shadow-2xl shadow-black/35 backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-widest text-[#70b5ff]">Packages start at</p>
                <p className="mt-2 font-mono text-3xl font-bold tracking-[-.06em] text-white sm:text-4xl">{data.price}</p>
                <p className="mt-2 text-xs leading-5 text-neutral-300 sm:text-sm">
                  All prices are subject to change upon inspection of the vehicle.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Intro Section with Image & Inclusions */}
      <section className="relative overflow-hidden bg-[#0c0e14] py-20 sm:py-28">
        <div className="absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-[#1277ff]/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,.78fr)_minmax(0,1.22fr)] lg:gap-20 lg:px-8">
          <ScrollReveal animation="fade-right" className="relative mx-auto w-full max-w-md lg:mx-0">
            <div className="absolute -inset-3 border border-[#4da3ff]/25" />
            <div className="relative aspect-[4/5] overflow-hidden bg-[#111827]">
              <Image
                src="/images/autodetail/paint-correction-5050.jpg"
                alt="CleanWorx 50/50 paint correction comparison showing swirl mark and oxidation removal with mirror clarity"
                fill
                sizes="(min-width: 1024px) 35vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080a0e]/80 via-transparent" />
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-left" delay={100}>
            <span className="block h-px w-20 bg-[#4da3ff]" />
            <h2 className="mt-6 max-w-2xl text-4xl font-black leading-[.98] tracking-[-.045em] text-white sm:text-5xl">
              {intro.title}
            </h2>
            <Paragraphs paragraphs={intro.paragraphs} />
            <div className="mt-9 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2">
              {data.inclusions.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-6 text-neutral-300">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[#4da3ff]" />
                  {item}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Defects Bento Grid Section */}
      <section className="relative overflow-hidden bg-[#080a0e] py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:4rem_4rem]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up" className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[.28em] text-[#70b5ff]">{data.eyebrow}</p>
            <h2 className="mt-4 text-4xl font-black leading-[.98] tracking-[-.045em] text-white sm:text-5xl">
              {defects.title}
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center xl:gap-14">
            <ScrollReveal animation="fade-right" className="relative mx-auto w-full max-w-[540px] lg:mx-0 lg:max-w-none">
              {/* Soft ambient blue glow behind the diagram */}
              <div className="absolute -inset-4 rounded-3xl bg-[#1277ff]/15 blur-2xl" />

              <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/15 bg-black shadow-2xl">
                <Image
                  src="/images/autodetail/paint-defects-diagram.jpg"
                  alt="Common paint defect examples: swirl marks, deep marring, scratches, etching, holograms and clear coat cross section"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 90vw"
                  className="object-contain"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-white/10 bg-black/75 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm sm:px-5 sm:py-3 sm:text-xs">
                  <span>Defect Cross-Section</span>
                  <span className="text-[#8ec7ff]">Paint Depth Anatomy</span>
                </div>
              </div>
            </ScrollReveal>
            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
              {defects.subsections?.map((defect, index) => (
                <ScrollReveal
                  key={defect.title}
                  animation="fade-up"
                  delay={index * 70}
                  className={`bg-[#080a0e] p-7 transition duration-300 hover:bg-[#101723] sm:p-8 ${index === 2 ? "md:col-span-2" : ""}`}
                >
                  <div className="flex items-start justify-between gap-5">
                    <h3 className="max-w-sm text-xl font-bold leading-tight text-white">{defect.title}</h3>
                    <PaintCorrectionIcon index={index} className="h-8 w-8 shrink-0 text-[#4da3ff]" />
                  </div>
                  <Paragraphs paragraphs={defect.paragraphs} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="overflow-hidden bg-[#111722] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <p className="mb-3 text-xs font-semibold text-[#70b5ff] lg:hidden">Swipe sideways to compare all columns →</p>
            <HorizontalScrollRegion label="Paint correction comparison table" className="overflow-x-auto border border-white/10 bg-[#0b0e14] shadow-[0_24px_80px_rgba(0,0,0,.28)] focus-visible:outline-2 focus-visible:outline-[#70b5ff]">
              <table className="min-w-[720px] w-full border-collapse text-left text-base sm:text-lg">
                <thead>
                  <tr className="border-b border-white/10 text-sm font-bold uppercase tracking-[.18em] text-neutral-400 sm:text-base">
                    <th scope="col" className="p-5 sm:p-6">Feature</th>
                    <th scope="col" className="p-5 sm:p-6">Hand Glaze / Wax</th>
                    <th scope="col" className="p-5 sm:p-6">1-Stage Enhancement</th>
                    <th scope="col" className="border-x border-[#4da3ff]/25 bg-[#1277ff]/10 p-5 text-[#8ec7ff] sm:p-6">Multi-Stage Correction</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map(([feature, wax, stage1, multiStage]) => (
                    <tr key={feature} className="border-b border-white/[.07] last:border-b-0">
                      <th scope="row" className="p-5 font-semibold text-white sm:p-6">{feature}</th>
                      <td className="p-5 text-neutral-400 sm:p-6">{wax}</td>
                      <td className="p-5 text-neutral-300 sm:p-6">{stage1}</td>
                      <td className="border-x border-[#4da3ff]/25 bg-[#1277ff]/10 p-5 font-mono font-bold tracking-[.08em] text-[#8ec7ff] sm:p-6">
                        {multiStage}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </HorizontalScrollRegion>
          </ScrollReveal>
        </div>
      </section>

      {/* Process & Protection Section */}
      <section className="bg-[#0b0d12] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,.85fr)] lg:items-center">
            <ScrollReveal animation="fade-right">
              <span className="block h-px w-20 bg-[#4da3ff]" />
              <h2 className="mt-6 text-4xl font-black leading-[.98] tracking-[-.045em] text-white sm:text-5xl">
                {process.title}
              </h2>
              <Paragraphs paragraphs={process.paragraphs} />
              <div className="mt-9 space-y-6">
                {process.subsections?.map((section, idx) => (
                  <div key={section.title} className="border-l-2 border-[#4da3ff] pl-5">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#70b5ff]">
                      Step 0{idx + 1}
                    </span>
                    <h3 className="mt-1 text-xl font-bold text-white">{section.title}</h3>
                    <Paragraphs paragraphs={section.paragraphs} />
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Action Image */}
            <ScrollReveal animation="fade-left" className="relative mx-auto w-full max-w-[420px] lg:mx-0">
              <div className="absolute -inset-4 rounded-3xl bg-[#1277ff]/20 blur-3xl" />
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/15 bg-[#111722] shadow-2xl">
                <Image
                  src="/images/autodetail/cleanworx-paint-correction-action.jpg"
                  alt="CleanWorx certified specialist performing dual-action machine polishing and paint correction in the Basking Ridge shop"
                  fill
                  priority
                  sizes="(min-width: 1024px) 35vw, 90vw"
                  className="object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080a0e]/80 via-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-4 flex items-center justify-between px-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90">
                  <span className="rounded-full border border-white/20 bg-black/60 px-3 py-1 backdrop-blur-md">CleanWorx in action</span>
                  <span className="rounded-full border border-[#4da3ff]/40 bg-[#1277ff]/30 px-2.5 py-1 text-[#8ec7ff] backdrop-blur-md">Multi-Stage Machine Polish</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Why Ceramic Coating Follows Paint Correction */}
          <ScrollReveal animation="fade-up" delay={120} className="relative mt-16 overflow-hidden border border-white/10 bg-[#121722] p-8 sm:p-10 lg:mt-20">
            <div className="absolute right-0 top-0 h-24 w-24 border-b border-l border-[#4da3ff]/40" />
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,.8fr)] lg:items-start">
              <div>
                <span className="text-xs font-bold uppercase tracking-[.25em] text-[#70b5ff]">Recommended Next Step</span>
                <h2 className="mt-2 text-3xl font-black leading-[.98] tracking-[-.04em] text-white sm:text-4xl">
                  {protection.title}
                </h2>
                <Paragraphs paragraphs={protection.paragraphs} />
                {protection.subsections?.map((section) => (
                  <div key={section.title} className="mt-6 border-t border-white/10 pt-5">
                    <h3 className="text-lg font-bold text-white">{section.title}</h3>
                    <Paragraphs paragraphs={section.paragraphs} />
                  </div>
                ))}
              </div>
              <div className="flex flex-col justify-between rounded-xl border border-[#4da3ff]/20 bg-[#0d121c] p-6 lg:p-8">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#4da3ff]/30 bg-[#1277ff]/10 px-3 py-1 text-xs font-semibold text-[#8ec7ff]">
                    The CleanWorx Standard
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-white">Correction Restores Clarity. Ceramic Locks It In.</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                    A machine-corrected finish reaches peak gloss, but the bare clear coat is also completely unprotected. Locking it in immediately provides:
                  </p>
                  <ul className="mt-5 space-y-3 text-xs text-neutral-300 sm:text-sm">
                    <li className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#4da3ff]" />
                      <span><strong>Permanent 9H Glass Shield:</strong> Cross-links molecularly with clear coat, unlike carnauba waxes that wash off in weeks.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#4da3ff]" />
                      <span><strong>Swirl & Scratch Resistance:</strong> Drastically reduces friction and wash-induced spiderwebbing during future maintenance.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#4da3ff]" />
                      <span><strong>Hydrophobic Self-Cleaning:</strong> Extreme water-beading sheds road grime, salt, and fallout effortlessly.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#4da3ff]" />
                      <span><strong>Protects Finite Clear Coat:</strong> Prevents paint degradation so you never have to aggressively compound your vehicle again.</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 border-t border-white/10 pt-5">
                  <Link
                    href="/ceramic-coating"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#4da3ff]/40 bg-[#1277ff] px-5 py-3.5 font-semibold text-white shadow-lg shadow-[#1277ff]/20 transition hover:bg-[#0e61ce]"
                  >
                    Explore Ceramic Coating Packages <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <p className="mt-2 text-center text-xs text-neutral-400">
                    Ask about bundling paint correction with System X Ceramic Protection.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Paint Correction Pricing */}
      <section className="relative overflow-hidden bg-[#0e61ce] py-20 sm:py-28">
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(255,255,255,.42)_1px,transparent_1px)] [background-size:1.2rem_1.2rem]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up" className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.25em] text-[#bde0ff]">Transparent Rates</p>
              <h2 className="mt-2 max-w-md text-4xl font-black leading-[.98] tracking-[-.045em] text-white sm:text-5xl">
                {pricing?.title ?? "Paint Correction Pricing"}
              </h2>
              {pricing?.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mt-4 max-w-md text-sm leading-7 text-white/90 sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto]">
              {pricing?.subsections ? (
                pricing.subsections.map((section) => (
                  <div key={section.title} className="border border-white/20 bg-[#0753b7]/80 p-6 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-white">{section.title}</h3>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="mt-4 text-sm leading-7 text-white/85">{paragraph}</p>
                    ))}
                  </div>
                ))
              ) : (
                <>
                  <div className="border border-white/20 bg-[#0753b7]/80 p-6 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-white">Starting at USD 350</h3>
                    <p className="mt-4 text-sm leading-7 text-white/85">
                      Single-stage paint enhancement starts at $350, ideal for newer vehicles or well-maintained paint seeking a substantial gloss boost and 50%–60% swirl reduction.
                    </p>
                  </div>
                  <div className="border border-white/20 bg-[#0753b7]/80 p-6 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-white">Scope Based on Vehicle Condition and Your Goals</h3>
                    <p className="mt-4 text-sm leading-7 text-white/85">
                      Multi-stage corrections are quoted based on paint hardness, surface defect depth, and vehicle dimensions to safely eliminate 80% to 90%+ of imperfections.
                    </p>
                  </div>
                </>
              )}
              <BookingLink label="Book Now" className="self-start bg-white !text-[#0753b7] shadow-black/20 hover:!bg-neutral-100" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Paint Correction Results */}
      <section className="relative overflow-hidden bg-[#080a0e] py-12 sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:4rem_4rem]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up" className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[.28em] text-[#70b5ff]">Verified Clarity</p>
            <h2 className="mt-2 text-3xl font-black leading-[.98] tracking-[-.045em] text-white sm:text-4xl lg:text-5xl">
              {results?.title ?? "Paint Correction Results"}
            </h2>
            {results?.paragraphs?.map((p) => (
              <p key={p} className="mt-3 text-sm leading-6 text-neutral-300 sm:text-base sm:leading-7">
                {p}
              </p>
            ))}
          </ScrollReveal>

          <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12">
            <ScrollReveal animation="fade-right" className="relative mx-auto w-full max-w-[380px] sm:max-w-[420px] lg:mx-0">
              <div className="absolute -inset-4 rounded-3xl bg-[#1277ff]/15 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#111722] p-2.5 shadow-2xl">
                <BeforeAfterSlider
                  beforeImage="/images/autodetail/paint-swirls-before-v2.jpg"
                  afterImage="/images/autodetail/paint-mirror-after.jpg"
                  beforeAlt="Vehicle clear coat with circular swirl marks and spiderweb scratches before correction"
                  afterAlt="Vehicle clear coat with flawless swirl-free mirror clarity after multi-stage correction"
                  ariaLabel="Drag to compare paint surface before and after machine paint correction"
                  aspectRatio="4 / 5"
                  className="w-full"
                />
              </div>
            </ScrollReveal>

            <div className="space-y-3.5 sm:space-y-4">
              <ScrollReveal animation="fade-left" delay={80} className="border border-white/10 bg-[#121722]/80 p-4 backdrop-blur-sm sm:p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1277ff]/20 font-mono text-sm font-bold text-[#4da3ff]">
                    80%+
                  </span>
                  <h3 className="text-base font-bold text-white sm:text-lg">Permanent Defect Elimination</h3>
                </div>
                <p className="mt-2 text-xs leading-5 text-neutral-300 sm:text-sm sm:leading-6">
                  Swirl marks, spiderwebbing, and oxidation are safely leveled out of the clear coat rather than masked with cosmetic glazes or heavy waxes.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-left" delay={140} className="border border-white/10 bg-[#121722]/80 p-4 backdrop-blur-sm sm:p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1277ff]/20 font-mono text-sm font-bold text-[#4da3ff]">
                    µm
                  </span>
                  <h3 className="text-base font-bold text-white sm:text-lg">Clear-Coat Preserved</h3>
                </div>
                <p className="mt-2 text-xs leading-5 text-neutral-300 sm:text-sm sm:leading-6">
                  Every pass is verified with digital paint depth gauges, ensuring only microscopic clear coat is removed to maximize paint longevity and safety.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-left" delay={200} className="border border-white/10 bg-[#121722]/80 p-4 backdrop-blur-sm sm:p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1277ff]/20 font-mono text-sm font-bold text-[#4da3ff]">
                    100%
                  </span>
                  <h3 className="text-base font-bold text-white sm:text-lg">Ceramic Ready Surface</h3>
                </div>
                <p className="mt-2 text-xs leading-5 text-neutral-300 sm:text-sm sm:leading-6">
                  Optically level paint creates the ideal foundation for ceramic coating bonds, sealing in mirror gloss for 1 to 5+ years.
                </p>
              </ScrollReveal>

              <div className="pt-1">
                <Link
                  href="/our-work"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#70b5ff] transition hover:text-white sm:text-sm"
                >
                  View more paint correction gallery photos <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs, CTA Banner, & Related Links */}
      <section className="bg-[#0a0b0f] py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <h2 className="text-4xl font-black leading-[.98] tracking-[-.045em] text-white sm:text-5xl">
              {data.faqTitle}
            </h2>
          </ScrollReveal>
          <div className="mt-12 border-t border-white/10">
            {data.faqs.map((faq, index) => (
              <ScrollReveal key={faq.question} animation="fade-up" delay={index * 80}>
                <details className="group border-b border-white/10 py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold text-white marker:content-none">
                    <span>{faq.question}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/20 text-[#70b5ff] transition duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="max-w-3xl pr-12 pt-4 text-sm leading-7 text-neutral-400 sm:text-base">
                    {faq.answer}
                  </p>
                </details>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="zoom-in" className="mt-16 bg-[#1277ff] p-7 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-10">
            <div>
              <h2 className="text-3xl font-black leading-tight text-white">{data.ctaTitle}</h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/85">
                Tell us about your vehicle, its condition, and the service you are considering.
              </p>
            </div>
            <BookingLink label="Book Now" className="mt-6 shrink-0 bg-[#080a0e] hover:bg-black sm:mt-0" />
          </ScrollReveal>
        </div>
      </section>
    </SiteShell>
  );
}

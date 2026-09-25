import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Sparkles,
  MapPin,
  Truck,
} from "lucide-react";
import { BookingLink } from "@/components/autodetail/BookingLink";
import { BeforeAfterSlider } from "@/components/autodetail/BeforeAfterSlider";
import { InteriorDetailIcon } from "@/components/autodetail/InteriorDetailIcon";
import { ScrollReveal } from "@/components/autodetail/ScrollReveal";
import { SiteShell } from "@/components/autodetail/SiteShell";
import type { ServicePageData } from "@/components/autodetail/ServicePage";

const comparisonRows = [
  ["High-Heat Steam Sanitization", "None", "Surface wipe only", "220°F+ Commercial steam"],
  ["Deep Carpet & Upholstery Extraction", "Dry vacuum only", "Basic surface shampoo", "Heated hot-water extractor"],
  ["Leather Cleansing & Conditioning", "Silicone spray (greasy)", "Basic wipe-down", "pH-neutral scrub & UV shield"],
  ["Pet Hair & Crevice Removal", "Not included", "Partial surface vacuum", "Pneumatic air & rubber blades"],
  ["Dashboard, Console & Air Vents", "Surface dusting", "Quick wipe", "Detail brushes & streak-free"],
  ["Cabin Chemical & Odor Level", "Heavy synthetic scents", "Lingering cleaners", "Non-toxic, odor-neutralized"],
  ["Fabric & Carpet Dry Time", "Often left soaking", "12–24 hours", "Rapid extraction (dry in ~2h)"],
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

export function InteriorDetailingPage({ data }: { data: ServicePageData }) {
  const [intro, services, delivery] = data.sections;

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
          { "@type": "ListItem", position: 2, name: "Services", item: "https://www.cleanworxnj.com/services" },
          { "@type": "ListItem", position: 3, name: data.name, item: `https://www.cleanworxnj.com/${data.slug}` },
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
          poster="/videos/hero-interior-detailing-poster.webp"
          className="absolute inset-0 -z-30 h-full w-full object-cover object-[60%_center]"
          aria-hidden="true"
        >
          <source src="/videos/hero-interior-detailing.webm" type="video/webm" />
          <source src="/videos/hero-interior-detailing.mp4" type="video/mp4" />
        </video>
        {/* Subtle overlays: ensures crisp text readability on the left while keeping the video clear and bright */}
        <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#08090c]/80 via-[#08090c]/40 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#08090c] via-transparent to-black/20" />

        <div className="mx-auto flex min-h-[500px] max-w-7xl flex-col justify-between px-4 pb-8 pt-6 sm:px-6 sm:pb-10 lg:min-h-[560px] lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-400">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/services" className="transition hover:text-white">Services</Link>
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
                    href="/services"
                    className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/20 active:translate-y-0"
                  >
                    Compare services
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal animation="fade-up" delay={150} className="w-full">
              <div className="border border-white/15 bg-[#0b0d13]/80 p-5 shadow-2xl shadow-black/35 backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-widest text-[#70b5ff]">Published starting point</p>
                <p className="mt-2 font-mono text-3xl font-bold tracking-[-.06em] text-white sm:text-4xl">{data.price}</p>
                <p className="mt-2 text-xs leading-5 text-neutral-300 sm:text-sm">
                  Prices marked with a plus sign or as variable are confirmed after reviewing the vehicle and selected service.
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
                src="/images/autodetail/interior-leather-extraction.webp"
                alt="Professional deep interior vacuum extraction on red leather automotive seats at CleanWorx"
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

      {/* Services Included Bento Grid Section */}
      <section className="relative overflow-hidden bg-[#080a0e] py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:4rem_4rem]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up" className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[.28em] text-[#70b5ff]">{data.eyebrow}</p>
            <h2 className="mt-4 text-4xl font-black leading-[.98] tracking-[-.045em] text-white sm:text-5xl">
              {services.title}
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center xl:gap-14">
            <ScrollReveal animation="fade-right" className="relative mx-auto w-full max-w-[540px] lg:mx-0 lg:max-w-none">
              <div className="absolute -inset-4 rounded-3xl bg-[#1277ff]/15 blur-2xl" />
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/15 bg-black shadow-2xl">
                <Image
                  src="/images/autodetail/interior-steam-extraction.jpg"
                  alt="CleanWorx detailer extracting dirt and shampoo from vehicle rear upholstery seats with commercial extractor"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 90vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080a0e]/85 via-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-white/10 bg-black/75 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm sm:px-5 sm:py-3 sm:text-xs">
                  <span>CleanWorx In Action</span>
                  <span className="text-[#8ec7ff]">Deep Cabin Restoration</span>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
              {services.subsections?.map((service, index) => (
                <ScrollReveal
                  key={service.title}
                  animation="fade-up"
                  delay={index * 70}
                  className={`bg-[#080a0e] p-7 transition duration-300 hover:bg-[#101723] sm:p-8 ${index === 2 ? "md:col-span-2" : ""}`}
                >
                  <div className="flex items-start justify-between gap-5">
                    <h3 className="max-w-sm text-xl font-bold leading-tight text-white">{service.title}</h3>
                    <InteriorDetailIcon index={index} className="h-8 w-8 shrink-0 text-[#4da3ff]" />
                  </div>
                  <Paragraphs paragraphs={service.paragraphs} />
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
            <div className="overflow-x-auto border border-white/10 bg-[#0b0e14] shadow-[0_24px_80px_rgba(0,0,0,.28)]">
              <table className="min-w-[720px] w-full border-collapse text-left text-base sm:text-lg">
                <thead>
                  <tr className="border-b border-white/10 text-sm font-bold uppercase tracking-[.18em] text-neutral-400 sm:text-base">
                    <th scope="col" className="p-5 sm:p-6">Feature</th>
                    <th scope="col" className="p-5 sm:p-6">Standard Car Wash</th>
                    <th scope="col" className="p-5 sm:p-6">Basic Interior Detail</th>
                    <th scope="col" className="border-x border-[#4da3ff]/25 bg-[#1277ff]/10 p-5 text-[#8ec7ff] sm:p-6">CleanWorx Deep Restoration</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map(([feature, wash, basic, cleanworx]) => (
                    <tr key={feature} className="border-b border-white/[.07] last:border-b-0">
                      <th scope="row" className="p-5 font-semibold text-white sm:p-6">{feature}</th>
                      <td className="p-5 text-neutral-400 sm:p-6">{wash}</td>
                      <td className="p-5 text-neutral-300 sm:p-6">{basic}</td>
                      <td className="border-x border-[#4da3ff]/25 bg-[#1277ff]/10 p-5 font-mono font-bold tracking-[.08em] text-[#8ec7ff] sm:p-6">
                        {cleanworx}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mobile or In-Studio Section */}
      <section className="bg-[#0b0d12] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,.85fr)] lg:items-center">
            <ScrollReveal animation="fade-right">
              <span className="block h-px w-20 bg-[#4da3ff]" />
              <h2 className="mt-6 text-4xl font-black leading-[.98] tracking-[-.045em] text-white sm:text-5xl">
                {delivery.title}
              </h2>
              <Paragraphs paragraphs={delivery.paragraphs} />

              <div className="mt-9 space-y-6">
                <div className="border-l-2 border-[#4da3ff] pl-5">
                  <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#70b5ff]">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>Studio Drop-Off Option</span>
                  </div>
                  <h3 className="mt-1 text-xl font-bold text-white">CleanWorx Detailing Studio</h3>
                  <p className="mt-2 text-sm leading-7 text-neutral-400 sm:text-base">
                    Drop your vehicle off at 19 E. Henry Street in Basking Ridge, NJ. Our studio provides a fully controlled workspace with industrial extraction equipment and dedicated drying fans.
                  </p>
                </div>

                <div className="border-l-2 border-[#4da3ff] pl-5">
                  <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#70b5ff]">
                    <Truck className="h-3.5 w-3.5" />
                    <span>Convenient Mobile Service</span>
                  </div>
                  <h3 className="mt-1 text-xl font-bold text-white">Mobile Van Directly to Your Driveway</h3>
                  <p className="mt-2 text-sm leading-7 text-neutral-400 sm:text-base">
                    Prefer zero downtime? Our self-contained mobile detailing van comes directly to your home or workplace throughout Basking Ridge, Bernardsville, Bedminster, and Far Hills for a flat $35 mobile fee.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Visual Feature Card */}
            <ScrollReveal animation="fade-left" className="relative mx-auto w-full max-w-[440px] lg:mx-0">
              <div className="absolute -inset-4 rounded-3xl bg-[#1277ff]/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#111722] p-6 shadow-2xl sm:p-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#4da3ff]/30 bg-[#1277ff]/10 px-3 py-1 text-xs font-semibold text-[#8ec7ff]">
                  <Sparkles className="h-3.5 w-3.5" />
                  The CleanWorx Standard
                </div>
                <h3 className="mt-4 text-2xl font-bold text-white">Hospital-Grade Clean. Zero Greasy Residues.</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  Every cabin we detail receives thorough hand care, safe steam sanitation, and strict attention to detail:
                </p>

                <ul className="mt-6 space-y-3.5 text-xs text-neutral-300 sm:text-sm">
                  <li className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#4da3ff]" />
                    <span><strong>High-Heat Steam Sanitization:</strong> 220°F+ steam eliminates bacteria, dust mites, and stubborn cabin allergens.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#4da3ff]" />
                    <span><strong>Heated Extraction:</strong> Hot-water extraction pulls out embedded dirt and stains while recovering 90%+ of moisture.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#4da3ff]" />
                    <span><strong>pH-Neutral Leather Care:</strong> Cleans and replenishes natural oils without artificial shine or slick residues.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#4da3ff]" />
                    <span><strong>Streak-Free Optical Glass:</strong> Interior windshield and tinted windows cleaned crystal clear with zero haze.</span>
                  </li>
                </ul>

                <div className="mt-8 border-t border-white/10 pt-5">
                  <Link
                    href="/mobile-auto-detailing"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#4da3ff]/40 bg-[#1277ff] px-5 py-3.5 font-semibold text-white shadow-lg shadow-[#1277ff]/20 transition hover:bg-[#0e61ce]"
                  >
                    Explore Mobile Detailing Van <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <p className="mt-2 text-center text-xs text-neutral-400">
                    Flat $35 mobile dispatch fee anywhere in our service area.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Transparent Pricing Section */}
      <section className="relative overflow-hidden bg-[#0e61ce] py-20 sm:py-28">
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(255,255,255,.42)_1px,transparent_1px)] [background-size:1.2rem_1.2rem]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,340px)] lg:items-center xl:gap-16">
            <div>
              <ScrollReveal animation="fade-up">
                <p className="text-xs font-bold uppercase tracking-[.25em] text-[#bde0ff]">Transparent Rates</p>
                <h2 className="mt-2 text-4xl font-black leading-[.98] tracking-[-.045em] text-white sm:text-5xl">
                  Full Interior Detailing
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/90 sm:text-base">
                  Final rates depend on vehicle size, seat count, and cabin condition, confirmed with you before work begins.
                </p>
              </ScrollReveal>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <ScrollReveal animation="fade-up" delay={80} className="border border-white/20 bg-[#0753b7]/80 p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white">{data.price}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/85">
                    Complete cabin restoration including commercial steam sanitization, hot-water carpet extraction, and leather conditioning.
                  </p>
                </ScrollReveal>
                <ScrollReveal animation="fade-up" delay={140} className="border border-white/20 bg-[#0753b7]/80 p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white">Studio or Mobile ($35 Fee)</h3>
                  <p className="mt-3 text-sm leading-6 text-white/85">
                    Choose in-studio drop-off at 19 E. Henry Street in Basking Ridge or have our self-contained mobile detailing van come right to your door.
                  </p>
                </ScrollReveal>
              </div>

              <ScrollReveal animation="fade-up" delay={200} className="mt-6 flex flex-wrap items-center gap-4">
                <BookingLink label="Book Now" className="bg-white !text-[#0753b7] shadow-black/20 hover:!bg-neutral-100" />
                <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
                  Self-contained van or studio drop-off
                </span>
              </ScrollReveal>
            </div>

            <ScrollReveal animation="fade-left" delay={150} className="relative mx-auto w-full max-w-[340px] lg:mx-0">
              <div className="absolute -inset-3 rounded-3xl bg-black/25 blur-xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white/25 bg-[#091b38] shadow-2xl shadow-black/40">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  poster="/videos/full-interior-detailing-poster.webp"
                  className="aspect-[9/16] h-full w-full object-cover"
                  aria-label="Full Interior Detailing deep cabin restoration"
                >
                  <source src="/videos/full-interior-detailing.webm" type="video/webm" />
                  <source src="/videos/full-interior-detailing.mp4" type="video/mp4" />
                </video>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between p-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                  <span>Full Interior In Action</span>
                  <span className="rounded-full border border-white/30 bg-black/40 px-2.5 py-0.5 text-[#bde0ff]">CleanWorx</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Interior Detailing Results */}
      <section className="relative overflow-hidden bg-[#080a0e] py-12 sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:4rem_4rem]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up" className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[.28em] text-[#70b5ff]">Verified Transformation</p>
            <h2 className="mt-2 text-3xl font-black leading-[.98] tracking-[-.045em] text-white sm:text-4xl lg:text-5xl">
              Interior Detailing Results
            </h2>
            <p className="mt-3 text-sm leading-6 text-neutral-300 sm:text-base sm:leading-7">
              Commercial steam extraction, high-lift shampooing, and targeted carpet restoration lift ground-in dirt, winter road salt, food spills, and embedded pet hair from deep within vehicle fibers.
            </p>
          </ScrollReveal>

          <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12">
            <ScrollReveal animation="fade-right" className="relative mx-auto w-full max-w-[440px] sm:max-w-[480px] lg:mx-0">
              <div className="absolute -inset-4 rounded-3xl bg-[#1277ff]/15 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#111722] p-2.5 shadow-2xl">
                <BeforeAfterSlider
                  beforeImage="/images/autodetail/interior-carpet-before.jpg"
                  afterImage="/images/autodetail/interior-carpet-after.jpg"
                  beforeAlt="Vehicle floor carpet stained with ground-in mud, road salt, and debris before deep extraction detailing"
                  afterAlt="Vehicle floor carpet pristine, deep-extracted, and sanitized after CleanWorx interior detailing"
                  ariaLabel="Drag to compare vehicle interior carpet before and after CleanWorx deep extraction detailing"
                  aspectRatio="4 / 3"
                  className="w-full"
                />
              </div>
            </ScrollReveal>

            <div className="space-y-3.5 sm:space-y-4">
              <ScrollReveal animation="fade-left" delay={80} className="border border-white/10 bg-[#121722]/80 p-4 backdrop-blur-sm sm:p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1277ff]/20 font-mono text-sm font-bold text-[#4da3ff]">
                    220°F
                  </span>
                  <h3 className="text-base font-bold text-white sm:text-lg">Commercial Steam Sanitization</h3>
                </div>
                <p className="mt-2 text-xs leading-5 text-neutral-300 sm:text-sm sm:leading-6">
                  High-temperature pressurized steam penetrates deep into carpet weave and upholstery fibers to break down heavy road salt, grease, and bacteria without leaving chemical residues.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-left" delay={140} className="border border-white/10 bg-[#121722]/80 p-4 backdrop-blur-sm sm:p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1277ff]/20 font-mono text-sm font-bold text-[#4da3ff]">
                    90%+
                  </span>
                  <h3 className="text-base font-bold text-white sm:text-lg">Moisture Extracted Instantly</h3>
                </div>
                <p className="mt-2 text-xs leading-5 text-neutral-300 sm:text-sm sm:leading-6">
                  Our commercial hot-water extraction vacuum recovers over 90% of injected moisture on contact, allowing carpets and cloth seats to dry naturally in 2 to 4 hours with no mold or mildew risk.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-left" delay={200} className="border border-white/10 bg-[#121722]/80 p-4 backdrop-blur-sm sm:p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1277ff]/20 font-mono text-sm font-bold text-[#4da3ff]">
                    100%
                  </span>
                  <h3 className="text-base font-bold text-white sm:text-lg">Pet Hair & Crevice Extraction</h3>
                </div>
                <p className="mt-2 text-xs leading-5 text-neutral-300 sm:text-sm sm:leading-6">
                  Pneumatic air tools, rubber static blades, and fine horsehair brushes dislodge deeply embedded pet hair and sand from seat tracks, pedals, and tight carpet borders.
                </p>
              </ScrollReveal>

              <div className="pt-1">
                <Link
                  href="/our-work"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#70b5ff] transition hover:text-white sm:text-sm"
                >
                  View more interior detailing gallery photos <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
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

          {/* CTA Banner */}
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

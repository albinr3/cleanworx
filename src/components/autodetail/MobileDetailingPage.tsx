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
import { MobileDetailIcon } from "@/components/autodetail/MobileDetailIcon";
import { ScrollReveal } from "@/components/autodetail/ScrollReveal";
import { SiteShell } from "@/components/autodetail/SiteShell";
import type { ServicePageData } from "@/components/autodetail/ServicePage";

const comparisonRows = [
  ["Water & Power Supply", "Requires your home hose & power outlets", "Plugs into customer spigots & cords", "100% self-contained van & generator"],
  ["Water Quality & Spotting", "Hard tap water leaves mineral spots", "Untreated municipal tap water", "Deionized spot-free filtered water"],
  ["Equipment & Chemical Grade", "Over-the-counter soaps & dirty sponges", "Basic shop-vac & harsh degreasers", "Commercial steam & pH-neutral chemistry"],
  ["Customer Time & Effort", "3–5 hours of heavy physical labor", "Managing cords & waiting around", "Zero downtime — relax or work inside"],
  ["Service Location Flexibility", "Restricted strictly to garden hose range", "Requires outdoor hookups nearby", "Driveway, office lot, or private road"],
  ["Paint & Clear Coat Safety", "Severe swirl risk from improper washing", "High swirl risk from rapid wiping", "Scratch-free two-bucket wash with grit guards"],
  ["Pricing Transparency", "Uncalculated equipment & chemical costs", "Surprise travel fees & hidden add-ons", "Flat $35 mobile fee + clear upfront pricing"],
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

export function MobileDetailingPage({ data }: { data: ServicePageData }) {
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
          poster={data.image || "/images/autodetail/3-4.webp"}
          className="absolute inset-0 -z-30 h-full w-full object-cover object-[60%_center]"
          aria-hidden="true"
        >
          <source src="/images/autodetail/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Subtle overlays: ensures crisp text readability on the left while keeping the video clear and bright */}
        <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#08090c]/85 via-[#08090c]/45 to-transparent" />
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
            <div className="relative aspect-square overflow-hidden bg-[#111827]">
              <Image
                src={data.image || "/images/autodetail/3-4.webp"}
                alt="CleanWorx mobile auto detailing setup ready to detail at customer driveway"
                fill
                sizes="(min-width: 1024px) 35vw, 90vw"
                className="object-cover object-center"
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
                  src="/images/autodetail/1-2.webp"
                  alt="CleanWorx mobile detailing van fully equipped with water, power and tools"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 90vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080a0e]/85 via-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-white/10 bg-black/75 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm sm:px-5 sm:py-3 sm:text-xs">
                  <span>CleanWorx In Action</span>
                  <span className="text-[#8ec7ff]">Self-Contained Rig</span>
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
                    <MobileDetailIcon index={index} className="h-8 w-8 shrink-0 text-[#4da3ff]" />
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
                    <th scope="col" className="p-5 sm:p-6">Driveway DIY Wash</th>
                    <th scope="col" className="p-5 sm:p-6">Standard Mobile Detailer</th>
                    <th scope="col" className="border-x border-[#4da3ff]/25 bg-[#1277ff]/10 p-5 text-[#8ec7ff] sm:p-6">CleanWorx Self-Contained Van</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map(([feature, diy, standard, cleanworx]) => (
                    <tr key={feature} className="border-b border-white/[.07] last:border-b-0">
                      <th scope="row" className="p-5 font-semibold text-white sm:p-6">{feature}</th>
                      <td className="p-5 text-neutral-400 sm:p-6">{diy}</td>
                      <td className="p-5 text-neutral-300 sm:p-6">{standard}</td>
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

      {/* Service Area Coverage & Delivery Section */}
      <section className="bg-[#0b0d12] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,.85fr)] lg:items-center">
            <ScrollReveal animation="fade-right">
              <span className="block h-px w-20 bg-[#4da3ff]" />
              <h2 className="mt-6 text-4xl font-black leading-[.98] tracking-[-.045em] text-white sm:text-5xl">
                {delivery?.title ?? "Service Area Coverage"}
              </h2>
              {delivery?.paragraphs ? (
                <Paragraphs paragraphs={delivery.paragraphs} />
              ) : (
                <p className="mt-4 text-sm leading-7 text-neutral-400 sm:text-base">
                  Choose between dropping off at our dedicated Basking Ridge facility or having our mobile detailing rig travel directly to your location.
                </p>
              )}

              <div className="mt-9 space-y-6">
                <div className="border-l-2 border-[#4da3ff] pl-5">
                  <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#70b5ff]">
                    <Truck className="h-3.5 w-3.5" />
                    <span>Direct To Your Driveway</span>
                  </div>
                  <h3 className="mt-1 text-xl font-bold text-white">Mobile Detailing Unit</h3>
                  <p className="mt-2 text-sm leading-7 text-neutral-400 sm:text-base">
                    We bring our fully self-contained detailing van directly to your home or office driveway across Basking Ridge, Bernardsville, Bedminster, and neighboring communities. Flat $35 mobile fee added per appointment.
                  </p>
                </div>

                <div className="border-l-2 border-[#4da3ff] pl-5">
                  <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#70b5ff]">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>Studio Drop-Off Option</span>
                  </div>
                  <h3 className="mt-1 text-xl font-bold text-white">CleanWorx Detailing Studio</h3>
                  <p className="mt-2 text-sm leading-7 text-neutral-400 sm:text-base">
                    Prefer studio drop-off? You can also bring your vehicle directly to our detailing facility at 19 E. Henry Street in Basking Ridge, NJ.
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
                <h3 className="mt-4 text-2xl font-bold text-white">Zero Utilities Required. Showroom Care at Home.</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  Our dedicated mobile detailing van brings professional-grade care directly to your vehicle without using your utilities:
                </p>

                <ul className="mt-6 space-y-3.5 text-xs text-neutral-300 sm:text-sm">
                  <li className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#4da3ff]" />
                    <span><strong>100% Self-Contained:</strong> Built-in ultra-quiet commercial generator powers all steam machines and extractors.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#4da3ff]" />
                    <span><strong>Deionized Spot-Free Water:</strong> Onboard pure filtered water tank ensures zero mineral spots or hard-water residue.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#4da3ff]" />
                    <span><strong>Driveway &amp; Office Ready:</strong> Compact footprint fits comfortably in standard driveways and business parking bays.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#4da3ff]" />
                    <span><strong>Transparent Flat $35 Fee:</strong> One simple setup fee per appointment added to your selected detailing package.</span>
                  </li>
                </ul>

                <div className="mt-8 border-t border-white/10 pt-5">
                  <BookingLink
                    label="Schedule Mobile Detailing"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#4da3ff]/40 bg-[#1277ff] px-5 py-3.5 font-semibold text-white shadow-lg shadow-[#1277ff]/20 transition hover:bg-[#0e61ce]"
                  />
                  <p className="mt-2 text-center text-xs text-neutral-400">
                    Flat $35 mobile setup fee per appointment.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timing and Pricing Section */}
      <section className="relative overflow-hidden bg-[#0e61ce] py-20 sm:py-28">
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(255,255,255,.42)_1px,transparent_1px)] [background-size:1.2rem_1.2rem]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,340px)] lg:items-center xl:gap-16">
            <div>
              <ScrollReveal animation="fade-up">
                <p className="text-xs font-bold uppercase tracking-[.25em] text-[#bde0ff]">Transparent Rates</p>
                <h2 className="mt-2 text-4xl font-black leading-[.98] tracking-[-.045em] text-white sm:text-5xl">
                  Mobile Detailing Rates &amp; Scheduling
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/90 sm:text-base">
                  We charge a simple, flat $35 mobile setup fee added to whichever detailing package you choose (interior detail, exterior detail, or complete package). Final pricing is confirmed upfront before any work begins.
                </p>
              </ScrollReveal>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <ScrollReveal animation="fade-up" delay={80} className="border border-white/20 bg-[#0753b7]/80 p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white">{data.price}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/85">
                    Choose any of our interior, exterior, or full detailing services, and our self-contained van comes directly to your driveway or workplace.
                  </p>
                </ScrollReveal>
                <ScrollReveal animation="fade-up" delay={140} className="border border-white/20 bg-[#0753b7]/80 p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white">Self-Contained Rig Included</h3>
                  <p className="mt-3 text-sm leading-6 text-white/85">
                    All electricity, deionized water, commercial steam extraction, and high-lubricity foam equipment are completely self-supplied by our van.
                  </p>
                </ScrollReveal>
              </div>

              <ScrollReveal animation="fade-up" delay={200} className="mt-6 flex flex-wrap items-center gap-4">
                <BookingLink label="Book Now" className="bg-white !text-[#0753b7] shadow-black/20 hover:!bg-neutral-100" />
                <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
                  Studio drop-off or mobile availability check
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
                  poster="/images/autodetail/showroom-detail-poster.webp"
                  className="aspect-[9/16] h-full w-full object-cover"
                  aria-label="CleanWorx mobile auto detailing in action"
                >
                  <source src="/videos/showroom-detail.mp4" type="video/mp4" />
                </video>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between p-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                  <span>Mobile Care In Action</span>
                  <span className="rounded-full border border-white/30 bg-black/40 px-2.5 py-0.5 text-[#bde0ff]">CleanWorx</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="relative overflow-hidden bg-[#080a0e] py-12 sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:4rem_4rem]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up" className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[.28em] text-[#70b5ff]">Verified Transformation</p>
            <h2 className="mt-2 text-3xl font-black leading-[.98] tracking-[-.045em] text-white sm:text-4xl lg:text-5xl">
              Mobile Detailing Results
            </h2>
            <p className="mt-3 text-sm leading-6 text-neutral-300 sm:text-base sm:leading-7">
              Experience showroom-grade clarity and cleanliness right in your driveway. From deep interior carpet extraction to scratch-free hand washing and ceramic wax protection, our mobile setup delivers complete results.
            </p>
          </ScrollReveal>

          <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12">
            <ScrollReveal animation="fade-right" className="relative mx-auto w-full max-w-[440px] sm:max-w-[480px] lg:mx-0">
              <div className="absolute -inset-4 rounded-3xl bg-[#1277ff]/15 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#111722] p-2.5 shadow-2xl">
                <BeforeAfterSlider
                  beforeImage="/images/autodetail/exterior-detail-before.webp"
                  afterImage="/images/autodetail/exterior-detail-after.webp"
                  beforeAlt="Vehicle wheel, tire and exterior panels covered in road grime and brake dust before mobile detailing"
                  afterAlt="Vehicle wheel, dressed tire, and glossy paint finish after CleanWorx complete mobile detailing service"
                  ariaLabel="Drag to compare vehicle condition before and after CleanWorx mobile detailing"
                  aspectRatio="4 / 3"
                  className="w-full"
                />
              </div>
            </ScrollReveal>

            <div className="space-y-3.5 sm:space-y-4">
              <ScrollReveal animation="fade-left" delay={80} className="border border-white/10 bg-[#121722]/80 p-4 backdrop-blur-sm sm:p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1277ff]/20 font-mono text-sm font-bold text-[#4da3ff]">
                    100%
                  </span>
                  <h3 className="text-base font-bold text-white sm:text-lg">Self-Contained Water &amp; Power</h3>
                </div>
                <p className="mt-2 text-xs leading-5 text-neutral-300 sm:text-sm sm:leading-6">
                  Commercial generator and deionized pure water supply mean we never need to plug into your home&apos;s water spigot or electrical outlets.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-left" delay={140} className="border border-white/10 bg-[#121722]/80 p-4 backdrop-blur-sm sm:p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1277ff]/20 font-mono text-sm font-bold text-[#4da3ff]">
                    $35
                  </span>
                  <h3 className="text-base font-bold text-white sm:text-lg">Simple Flat Mobile Setup Fee</h3>
                </div>
                <p className="mt-2 text-xs leading-5 text-neutral-300 sm:text-sm sm:leading-6">
                  One predictable flat fee per appointment across Basking Ridge and surrounding Somerset &amp; Morris County towns—no mileage markups.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-left" delay={200} className="border border-white/10 bg-[#121722]/80 p-4 backdrop-blur-sm sm:p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1277ff]/20 font-mono text-sm font-bold text-[#4da3ff]">
                    0 Hrs
                  </span>
                  <h3 className="text-base font-bold text-white sm:text-lg">Zero Travel or Waiting Room Time</h3>
                </div>
                <p className="mt-2 text-xs leading-5 text-neutral-300 sm:text-sm sm:leading-6">
                  No Saturday traffic, rides to coordinate, or lobby waiting rooms. Relax at home or keep working while we detail your vehicle outside.
                </p>
              </ScrollReveal>

              <div className="pt-1">
                <Link
                  href="/our-work"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#70b5ff] transition hover:text-white sm:text-sm"
                >
                  View more mobile detailing gallery photos <ArrowUpRight className="h-4 w-4" />
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

          {/* Related Links */}
          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-4 border-t border-white/10 pt-8 text-sm">
            {data.related.map((link) => (
              <Link
                key={`${link.href}-${link.label}`}
                href={link.href}
                className="inline-flex items-center gap-1 font-semibold text-[#70b5ff] transition hover:text-white"
              >
                {link.label}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

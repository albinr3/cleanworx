import Image from "next/image";
import Link from "next/link";
import {
  Check,
  ChevronRight,
  Shield,
  Sun,
  MapPin,
  Phone,
  ThermometerSun,
  Wrench,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { BookingLink } from "@/components/autodetail/BookingLink";
import { HorizontalScrollRegion } from "@/components/autodetail/HorizontalScrollRegion";
import { ScrollReveal } from "@/components/autodetail/ScrollReveal";
import { SiteShell } from "@/components/autodetail/SiteShell";
import { TintLevelVisualizer } from "@/components/autodetail/TintLevelVisualizer";
import type { ServicePageData } from "@/components/autodetail/ServicePage";

const filmComparisonRows = [
  ["Primary Technology", "Carbon particulate polyester", "Non-conductive ceramic nanoparticles"],
  ["Infrared Heat Rejection", "Up to 45%–55%", "Up to 80%–88%+"],
  ["Total Solar Energy Rejected (TSER)", "Moderate to high", "Maximum thermal barrier"],
  ["UV Ray Protection", "99% UVA / UVB", "99% UVA / UVB"],
  ["Optical Clarity", "Rich matte black finish", "High-definition clarity, zero haze"],
  ["Signal Interference (GPS/Cell)", "0% (Zero interference)", "0% (Zero interference)"],
  ["Warranty", "2 years", "10 years"],
  ["Full sedan or coupe", "$300", "$400"],
] as const;

const vltShades = [
  {
    vlt: "70% VLT",
    label: "Clear Thermal Shield",
    desc: "Nearly invisible on glass for drivers seeking heat rejection without noticeably darkening the interior.",
    badge: "Maximum Clarity",
    darknessClass: "bg-neutral-800/30 border-white/20",
  },
  {
    vlt: "55% VLT",
    label: "Subtle Sun Shield",
    desc: "Light charcoal shade that cuts daylight glare and reduces eye strain while maintaining total night driving visibility and a discreet OEM look.",
    badge: "Balanced Shading",
    darknessClass: "bg-neutral-900/40 border-white/20",
  },
  {
    vlt: "30% VLT",
    label: "High-Performance Medium",
    desc: "New Jersey's most popular shade. Delivers clean exterior contrast, substantial glare cut, and balanced daytime privacy.",
    badge: "Driver Favorite",
    darknessClass: "bg-neutral-950/70 border-white/20",
  },
  {
    vlt: "20% VLT",
    label: "Factory Privacy Match",
    desc: "Matches the deep privacy glass found on factory rear SUV, truck, and crossover windows. Excellent heat insulation and strong cabin privacy.",
    badge: "SUV / Rear Match",
    darknessClass: "bg-black/85 border-[#1277ff]/40",
  },
  {
    vlt: "15% VLT",
    label: "Deep Stealth Privacy",
    desc: "Executive dark tint allowing only 15% light transmission. Rich contrast and heavy interior obscuration with solid daytime outward visibility.",
    badge: "Executive Privacy",
    darknessClass: "bg-black/95 border-white/25",
  },
  {
    vlt: "5% VLT",
    label: "Limousine Dark Tint",
    desc: "Maximum privacy shade allowing only 5% of light transmission. Deep shading for a more private cabin.",
    badge: "Maximum Privacy",
    darknessClass: "bg-black border-white/30",
  },
];

const tintPackages = [
  { service: "Sedan or coupe · full vehicle", carbon: 300, ceramic: 400 },
  { service: "Sedan or coupe · back half", carbon: 250, ceramic: 300 },
  { service: "SUV, wagon, truck or minivan · full vehicle", carbon: 350, ceramic: 480 },
  { service: "SUV, wagon, truck or minivan · back half", carbon: 300, ceramic: 380 },
  { service: "Front two windows", carbon: 150, ceramic: 200 },
  { service: "Front two windows + quarter windows", carbon: 200, ceramic: 250 },
  { service: "Front windshield", carbon: 150, ceramic: 200 },
  { service: "Windshield stripe", carbon: 50, ceramic: 80 },
] as const;

const tintRemovalPrices = [
  { service: "Each window", price: 20 },
  { service: "Front or rear windshield", price: 50 },
  { service: "Whole vehicle (excluding front windshield)", price: 100 },
  { service: "Large van or SUV (excluding front windshield)", price: 150 },
] as const;

const fiveStageProcess = [
  {
    step: "01",
    title: "Vehicle and Glass Preparation",
    subtitle: "Precision decontamination",
    description:
      "Every window undergoes multi-stage glass scrubbing, chemical adhesive decontamination, and razor-edge scraping to eliminate road grime, oils, and microscopic dust particles from factory edges.",
  },
  {
    step: "02",
    title: "Computer-Cut Precision and Heat Contouring",
    subtitle: "Digital plotting & heat forming",
    description:
      "Patterns are digitally plotted to your vehicle's exact make, model, and year. The film is heat-formed and contoured along the exterior curved glass with professional heat guns to prevent stress creasing.",
  },
  {
    step: "03",
    title: "Film Application and Edge Inspection",
    subtitle: "Careful film application",
    description:
      "The film is positioned, squeegeed with specialized slip solutions to expel moisture, and inspected along each edge before delivery.",
  },
];

export function WindowTintingPage({ data }: { data: ServicePageData }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: data.name,
        serviceType: "Automotive Window Tinting",
        provider: {
          "@type": "AutoRepair",
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
        areaServed: [
          { "@type": "City", name: "Basking Ridge" },
          { "@type": "City", name: "Bernardsville" },
          { "@type": "City", name: "Bedminster" },
          { "@type": "City", name: "Far Hills" },
          { "@type": "City", name: "Warren" },
          { "@type": "City", name: "Bridgewater" },
          { "@type": "AdministrativeArea", name: "Somerset County, NJ" },
          { "@type": "AdministrativeArea", name: "Morris County, NJ" },
        ],
        url: `https://www.cleanworxnj.com/${data.slug}`,
        description: data.summary,
        offers: [
          ...tintPackages.flatMap((tintPackage) => ([
            { "@type": "Offer", name: `${tintPackage.service} · Carbon film`, price: tintPackage.carbon, priceCurrency: "USD" },
            { "@type": "Offer", name: `${tintPackage.service} · Ceramic film`, price: tintPackage.ceramic, priceCurrency: "USD" },
          ])),
          ...tintRemovalPrices.map((removal) => ({
            "@type": "Offer",
            name: `Tint removal · ${removal.service}`,
            price: removal.price,
            priceCurrency: "USD",
          })),
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cleanworxnj.com/" },
          { "@type": "ListItem", position: 2, name: data.name, item: `https://www.cleanworxnj.com/${data.slug}` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: data.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero Section */}
      <section className="relative isolate min-h-[500px] overflow-hidden border-b border-white/10 lg:min-h-[580px]">
        <Image
          src={data.image}
          alt="Professional window tint installation at CleanWorx Auto Detailing & Ceramic Coating studio in Basking Ridge, NJ"
          fill
          priority
          sizes="100vw"
          className="-z-30 object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,#08090c_0%,rgba(8,9,12,.92)_35%,rgba(8,9,12,.55)_68%,rgba(8,9,12,.75)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_77%_24%,rgba(18,119,255,.35),transparent_30%),linear-gradient(0deg,#08090c_0%,transparent_42%)]" />
        <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full border border-white/15 bg-white/[0.025] sm:h-[30rem] sm:w-[30rem]" />
        <div className="absolute bottom-12 right-[8%] hidden h-32 w-32 rounded-full border border-[#4da3ff]/30 lg:block" />

        <div className="mx-auto flex min-h-[500px] max-w-7xl flex-col justify-between px-4 pb-8 pt-6 sm:px-6 sm:pb-10 lg:min-h-[580px] lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-400">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span aria-current="page" className="text-neutral-200">
              {data.name}
            </span>
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
                    className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/10 active:scale-95"
                  >
                    Explore Add-Ons
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal animation="fade-up" delay={150} className="w-full">
              <div className="border border-white/15 bg-[#0b0d13]/85 p-5 shadow-2xl shadow-black/40 backdrop-blur-md sm:p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-[#70b5ff]">Published starting point</p>
                <p className="mt-2 font-mono text-3xl font-bold tracking-[-.06em] text-white sm:text-4xl">{data.price}</p>
                <p className="mt-2.5 text-xs leading-5 text-neutral-300">
                  Full sedan or coupe tint from $300. Tint removal from $20 per window. Carbon film carries a 2-year warranty; ceramic film carries a 10-year warranty.
                </p>
                <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-3 text-xs text-neutral-300">
                  <MapPin className="h-3.5 w-3.5 text-[#1277ff]" />
                  <span>19 E. Henry St, Basking Ridge, NJ</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="border-t border-white/10 pt-4">
            <ul className="grid grid-cols-1 gap-2 text-xs text-neutral-300 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {data.inclusions.map((inc) => (
                <li key={inc} className="flex items-start gap-1.5">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#1277ff]" />
                  <span className="leading-5">{inc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 1: Drive in Comfort */}
      <section className="relative overflow-hidden bg-[#0c0e14] py-16 sm:py-24">
        <div className="absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-[#1277ff]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,.85fr)] lg:gap-16">
            <ScrollReveal animation="fade-left">
              <span className="block h-px w-20 bg-[#4da3ff]" />
              <h2 className="mt-6 max-w-2xl text-3xl font-black leading-[.98] tracking-[-.045em] text-white sm:text-4xl lg:text-5xl">
                Drive in Comfort with Professional Window Tint
              </h2>
              <p className="mt-5 text-sm leading-7 text-neutral-300 sm:text-base">
                Summer heat can turn your vehicle cabin into an oven, while UV exposure slowly fades and cracks leather upholstery. Our window films help keep your interior cooler, cut road glare, and block UV rays across Somerset and Morris counties.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="border border-white/10 bg-[#121620] p-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1277ff]/15 text-[#4da3ff]">
                    <ThermometerSun className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-base font-bold text-white">Solar Heat Rejection</h3>
                  <p className="mt-2 text-xs leading-5 text-neutral-400">
                    Blocks intense infrared thermal radiation, reducing vehicle cabin heat by up to 30°F during humid New Jersey summers.
                  </p>
                </div>

                <div className="border border-white/10 bg-[#121620] p-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1277ff]/15 text-[#4da3ff]">
                    <Shield className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-base font-bold text-white">99% UV Ray Protection for Leather and Interiors</h3>
                  <p className="mt-2 text-xs leading-5 text-neutral-400">
                    Blocks 99% of damaging UVA and UVB rays, preventing leather cracking, dashboard fading, and protecting passenger skin.
                  </p>
                </div>

                <div className="border border-white/10 bg-[#121620] p-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1277ff]/15 text-[#4da3ff]">
                    <Sun className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-base font-bold text-white">Glare Reduction and Driving Safety</h3>
                  <p className="mt-2 text-xs leading-5 text-neutral-400">
                    Eliminates blinding road reflections and high-beam headlight glare from following cars, reducing eye fatigue on I-287 and Route 202.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-right" className="relative mx-auto w-full max-w-md lg:mx-0">
              <div className="absolute -inset-3 border border-[#4da3ff]/25" />
              <div className="relative aspect-square sm:aspect-[4/3.6] overflow-hidden bg-[#111827]">
                <Image
                  src="/images/autodetail/window-tint-comfort.jpg"
                  alt="CleanWorx technician precision window tint squeegee installation in Basking Ridge studio"
                  fill
                  sizes="(min-width: 1024px) 35vw, 90vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080a0e]/90 via-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#70b5ff]">Precision Studio Craft</p>
                  <p className="text-sm font-bold text-white">Computer-Cut Edge Alignment Inside Dust-Free Bay</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 2: Premium Film Technology (Ceramic vs. Carbon) */}
      <section className="relative overflow-hidden bg-[#080a0e] py-16 sm:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:4rem_4rem]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up" className="max-w-3xl">
            <span className="block h-px w-20 bg-[#4da3ff]" />
            <h2 className="mt-6 text-3xl font-black leading-[.98] tracking-[-.045em] text-white sm:text-4xl lg:text-5xl">
              Film Technology: Nano-Ceramic vs. Carbon Tint
            </h2>
            <p className="mt-4 text-sm leading-7 text-neutral-300 sm:text-base">
              Choosing the right window tint comes down to heat rejection, optical clarity, and budget. CleanWorx offers carbon and ceramic films with 2-year and 10-year warranties respectively.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <ScrollReveal animation="fade-up" delay={80} className="border border-white/10 bg-[#10141d] p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#1277ff]/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#4da3ff]">
                  Flagship Performance
                </span>
                <span className="font-mono text-xs text-neutral-400">Up to 88% Heat Block</span>
              </div>
              <h3 className="mt-4 text-2xl font-bold text-white">Nano-Ceramic Window Film</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-300">
                Engineered with microscopic non-conductive ceramic nanoparticles that block up to 88%+ of infrared heat without metal particles, ensuring zero interference with GPS, cellular, Bluetooth, or keyless entry signals.
              </p>
              <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-5 text-xs text-neutral-300 sm:text-sm">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#1277ff]" />
                  <span>Maximum infrared heat rejection (IR rejection up to 88%+)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#1277ff]" />
                  <span>Zero electronic, mobile 5G, or radio signal interference</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#1277ff]" />
                  <span>Optically crisp clarity with zero daytime haze</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#1277ff]" />
                  <span>10-year ceramic film warranty</span>
                </li>
              </ul>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={160} className="border border-white/10 bg-[#10141d] p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-neutral-300">
                  Value &amp; Style
                </span>
                <span className="font-mono text-xs text-neutral-400">Up to 55% Heat Block</span>
              </div>
              <h3 className="mt-4 text-2xl font-bold text-white">High-Performance Carbon Film</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-300">
                Carbon particulate technology embedded into the polyester layers gives this film a sleek matte black finish. It delivers dependable heat defense, 99% UV rejection, and long-lasting color stability at an accessible entry price.
              </p>
              <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-5 text-xs text-neutral-300 sm:text-sm">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#1277ff]" />
                  <span>Sleek, deep non-reflective charcoal matte finish</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#1277ff]" />
                  <span>99% UV radiation blocking for leather protection</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#1277ff]" />
                  <span>Dye-free composition that will never discolor or turn purple</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#1277ff]" />
                  <span>2-year carbon film warranty</span>
                </li>
              </ul>
            </ScrollReveal>
          </div>

          {/* Film Comparison Table */}
          <p className="mb-3 mt-12 text-xs font-semibold text-[#70b5ff] min-[360px]:hidden">Swipe sideways to see the full comparison →</p>
          <HorizontalScrollRegion label="Window film comparison table" className="overflow-x-auto border border-white/10 bg-[#0d1017] focus-visible:outline-2 focus-visible:outline-[#70b5ff] min-[360px]:mt-12">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-[#131722] text-neutral-300">
                  <th className="p-3 sm:p-4 font-bold text-white">Feature Specification</th>
                  <th className="p-3 sm:p-4 font-bold text-white">Carbon Window Film</th>
                  <th className="p-3 sm:p-4 font-bold text-[#4da3ff]">Nano-Ceramic Window Film</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-neutral-300">
                {filmComparisonRows.map(([spec, carbon, ceramic]) => (
                  <tr key={spec} className="hover:bg-white/[0.02]">
                    <td className="p-3 sm:p-4 font-medium text-white">{spec}</td>
                    <td className="p-3 sm:p-4">{carbon}</td>
                    <td className="p-3 sm:p-4 font-semibold text-white">{ceramic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </HorizontalScrollRegion>
        </div>
      </section>

      {/* Section 3: Choose Your Tint % Level (VLT) */}
      <section className="relative overflow-hidden bg-[#0a0c12] py-16 sm:py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up" className="max-w-3xl">
            <span className="block h-px w-20 bg-[#4da3ff]" />
            <h2 className="mt-6 text-3xl font-black leading-[.98] tracking-[-.045em] text-white sm:text-4xl lg:text-5xl">
              Choose Your Tint Darkness Level
            </h2>
            <p className="mt-4 text-sm leading-7 text-neutral-300 sm:text-base">
              Visible Light Transmission (VLT) refers to the percentage of light that passes through the film. Lower percentages indicate a darker shade, while higher percentages offer subtle, nearly clear protection.
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-bold text-white">
                Interactive Tint Level Simulator &amp; 70% to 5% VLT Shading Options
              </h3>
              <p className="mt-2 text-sm leading-6 text-neutral-400">
                Test different tint shades on our interactive vehicle simulator below. Compare nearly invisible 70% film, balanced 30% shading, popular 20% factory-matching shades, and deep 5% privacy tint to find the look you prefer.
              </p>
            </div>
          </ScrollReveal>

          {/* Interactive Tint Level Simulator */}
          <div className="mt-10">
            <ScrollReveal animation="fade-up">
              <TintLevelVisualizer />
            </ScrollReveal>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {vltShades.map((shade, idx) => (
              <ScrollReveal
                key={shade.vlt}
                animation="fade-up"
                delay={idx * 60}
                className={`relative flex flex-col justify-between border p-5 transition hover:border-[#1277ff]/60 ${shade.darknessClass}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-black text-white">{shade.vlt}</span>
                    <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-neutral-300">
                      {shade.badge}
                    </span>
                  </div>
                  <h4 className="mt-3 text-sm font-bold text-white">{shade.label}</h4>
                  <p className="mt-2 text-xs leading-5 text-neutral-400">{shade.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-400">
                  <span>Light Pass:</span>
                  <span className="font-mono font-bold text-white">{shade.vlt}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: 3-Stage Precision Process */}
      <section className="relative overflow-hidden bg-[#08090d] py-16 sm:py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up" className="max-w-3xl">
            <span className="block h-px w-20 bg-[#4da3ff]" />
            <h2 className="mt-6 text-3xl font-black leading-[.98] tracking-[-.045em] text-white sm:text-4xl lg:text-5xl">
              Precision Window Tint Installation: Our 3-Stage Process
            </h2>
            <p className="mt-4 text-sm leading-7 text-neutral-300 sm:text-base">
              Choose an appointment at our Basking Ridge studio or ask about mobile installation at your home or workplace. We prepare the glass, fit the film, and inspect the finished edges for either appointment type.
            </p>
          </ScrollReveal>

          {/* Studio Process Showcase Image */}
          <ScrollReveal animation="fade-up" delay={80} className="mt-10">
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#10141e] shadow-2xl shadow-black/60">
              <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full">
                <Image
                  src="/images/autodetail/window-tint-process.webp"
                  alt="Precision automotive window tint installation on luxury BMW M4 coupe at CleanWorx studio in Basking Ridge NJ"
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-cover object-center transition duration-700 hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08090d]/85 via-transparent to-transparent opacity-75" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-end justify-between gap-3">
                  <div className="rounded-xl border border-white/15 bg-black/65 px-4 py-2.5 backdrop-blur-md">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#4da3ff]">
                      CleanWorx Studio Bay &bull; Basking Ridge, NJ
                    </p>
                    <p className="mt-0.5 text-sm font-bold text-white">
                      Dust-Free Cleanroom Installation Environment
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/65 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                    <Check className="h-4 w-4 text-[#1277ff]" />
                    Micro-Shaved Edge Precision
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {fiveStageProcess.map((item, index) => (
              <ScrollReveal
                key={item.step}
                animation="fade-up"
                delay={index * 100}
                className="relative border border-white/10 bg-[#10141e] p-6 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl font-black text-[#1277ff]">{item.step}</span>
                  <span className="text-xs uppercase tracking-wider text-neutral-400">{item.subtitle}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-white sm:text-xl">{item.title}</h3>
                <p className="mt-3 text-xs leading-6 text-neutral-300 sm:text-sm">{item.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Windows Tinted Price Guide */}
      <section className="relative overflow-hidden bg-[#0c0e14] py-16 sm:py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up" className="max-w-3xl">
            <span className="block h-px w-20 bg-[#4da3ff]" />
            <h2 className="mt-6 text-3xl font-black leading-[.98] tracking-[-.045em] text-white sm:text-4xl lg:text-5xl">
              Window Tint Pricing: What Does Installation Cost?
            </h2>
            <p className="mt-4 text-sm leading-7 text-neutral-300 sm:text-base">
              Choose carbon film with a 2-year warranty or ceramic film with a 10-year warranty. Prices below are for each listed installation service.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tintPackages.map((tintPackage, idx) => (
              <ScrollReveal
                key={tintPackage.service}
                animation="fade-up"
                delay={idx * 50}
                className="border border-white/10 bg-[#121622] p-5 sm:p-6"
              >
                <h3 className="min-h-12 text-sm font-bold leading-6 text-white">{tintPackage.service}</h3>
                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4 text-sm">
                  <span className="text-neutral-300">Carbon</span>
                  <span className="font-mono text-lg font-bold text-white">${tintPackage.carbon}</span>
                </div>
                <div className="mt-2 flex items-center justify-between text-sm">
                  <span className="text-[#70b5ff]">Ceramic</span>
                  <span className="font-mono text-lg font-bold text-[#70b5ff]">${tintPackage.ceramic}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <p className="mt-5 text-sm leading-6 text-neutral-300">
            Full vehicle covers the side windows and rear windshield. Back half covers the rear side windows and rear windshield. The front windshield is priced separately.
          </p>

          <ScrollReveal animation="fade-up" className="mt-12 border border-white/10 bg-[#10141d] p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white">
              Key Factors That Influence Window Tinting Cost
            </h3>
            <p className="mt-3 text-sm leading-7 text-neutral-300">
              Studio and mobile appointments are available. One $50 mobile service fee applies when the pre-fee appointment subtotal is below $400; appointments of $400 or more have no mobile fee. We confirm the service total before work begins.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 7: Curing and Aftercare Guidelines */}
      <section className="relative overflow-hidden bg-[#090b10] py-16 sm:py-20">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up" className="max-w-3xl">
            <span className="block h-px w-20 bg-[#4da3ff]" />
            <h2 className="mt-6 text-3xl font-black leading-[.98] tracking-[-.045em] text-white sm:text-4xl lg:text-5xl">
              Window Tint Curing and Aftercare Guidelines
            </h2>
            <p className="mt-4 text-sm leading-7 text-neutral-300 sm:text-base">
              Freshly installed window film requires a short curing period as residual slip moisture evaporates through the microscopic pores of the film. We provide clear care guidelines: keep your roll-down windows closed for 3 to 5 days, avoid cleaning the inside glass for one week, and strictly use ammonia-free cleaners with soft microfiber towels to protect the film&apos;s protective hard coat.
            </p>
          </ScrollReveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border border-white/10 bg-[#111520] p-5">
              <span className="font-mono text-2xl font-bold text-[#4da3ff]">3–5 Days</span>
              <h4 className="mt-2 text-sm font-bold text-white">Leave Windows Rolled Up</h4>
              <p className="mt-1.5 text-xs leading-5 text-neutral-400">
                Allows moisture slip solutions to evaporate without catching the bottom rubber gasket seal.
              </p>
            </div>
            <div className="border border-white/10 bg-[#111520] p-5">
              <span className="font-mono text-2xl font-bold text-[#4da3ff]">7 Days</span>
              <h4 className="mt-2 text-sm font-bold text-white">No Interior Glass Cleaning</h4>
              <p className="mt-1.5 text-xs leading-5 text-neutral-400">
                Let adhesive achieve 100% cure strength before any towel friction touches the interior film.
              </p>
            </div>
            <div className="border border-white/10 bg-[#111520] p-5">
              <span className="font-mono text-2xl font-bold text-emerald-400">Ammonia-Free</span>
              <h4 className="mt-2 text-sm font-bold text-white">Safe Cleaning Chemistry</h4>
              <p className="mt-1.5 text-xs leading-5 text-neutral-400">
                Never use blue ammonia sprays (like standard Windex) which strip film top-coats over time.
              </p>
            </div>
            <div className="border border-white/10 bg-[#111520] p-5">
              <span className="font-mono text-2xl font-bold text-[#4da3ff]">Microfiber</span>
              <h4 className="mt-2 text-sm font-bold text-white">Soft Towel Maintenance</h4>
              <p className="mt-1.5 text-xs leading-5 text-neutral-400">
                Use clean, plush microfiber cloths for routine dusting to maintain optical crystal clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Where Can I Get My Car Windows Tinted in New Jersey */}
      <section className="relative overflow-hidden bg-[#0c0e14] py-16 sm:py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_minmax(0,340px)] lg:items-center">
            <div>
              <ScrollReveal animation="fade-up" className="max-w-3xl">
                <span className="block h-px w-20 bg-[#4da3ff]" />
                <h2 className="mt-6 text-3xl font-black leading-[.98] tracking-[-.045em] text-white sm:text-4xl lg:text-5xl">
                  Where to Get Your Windows Tinted in New Jersey
                </h2>
                <p className="mt-4 text-sm leading-7 text-neutral-300 sm:text-base">
                  Visit our dedicated studio at 19 E. Henry Street in Basking Ridge, NJ, or ask about a mobile appointment at your home or workplace. We confirm availability and your total before booking.
                </p>
              </ScrollReveal>

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <ScrollReveal animation="fade-right" className="border border-white/10 bg-[#121622] p-6 sm:p-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1277ff]/20 text-[#4da3ff]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-white sm:text-2xl">
                    Dedicated Dust-Free Studio in Basking Ridge
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-300">
                    Located at 19 E. Henry Street in Basking Ridge, NJ, our dedicated facility offers a climate-controlled space for tint installation.
                  </p>
                  <div className="mt-6 space-y-2 text-xs text-neutral-300">
                    <p className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#1277ff]" />
                      <span>Climate-controlled cleanroom lighting and airflow</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#1277ff]" />
                      <span>Studio appointments booked Monday through Saturday</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-[#1277ff]" />
                      <span>Easy access from I-78, I-287, and Route 202</span>
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal animation="fade-left" className="border border-white/10 bg-[#121622] p-6 sm:p-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1277ff]/20 text-[#4da3ff]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-white sm:text-2xl">
                    Serving Somerset and Morris County Communities
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-300">
                    We proudly serve clients throughout Basking Ridge, Bernardsville, Bedminster, Far Hills, Peapack-Gladstone, Warren, Bridgewater, Morristown, and neighboring communities.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2 text-xs">
                    {[
                      "Basking Ridge",
                      "Bernardsville",
                      "Bedminster",
                      "Far Hills",
                      "Peapack-Gladstone",
                      "Warren",
                      "Bridgewater",
                      "Morristown",
                      "Mendham",
                      "Harding",
                    ].map((town) => (
                      <span key={town} className="rounded border border-white/10 bg-white/5 px-2.5 py-1 text-neutral-300">
                        {town}, NJ
                      </span>
                    ))}
                  </div>
                </ScrollReveal>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <BookingLink label="Book Window Tinting" className="w-full sm:w-auto" />
                <span className="text-xs text-neutral-400">
                  Studio and mobile appointments available
                </span>
              </div>
            </div>

            {/* Video Demonstration Card in Studio Section */}
            <ScrollReveal animation="fade-left" className="relative mx-auto w-full max-w-[340px] lg:mx-0">
              <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-[#1277ff]/30 bg-[#0c0e15] shadow-2xl shadow-black/60">
                <video
                  aria-label="CleanWorx professional automotive window tint installation demonstration"
                  autoPlay
                  className="h-full w-full object-cover"
                  loop
                  muted
                  playsInline
                  poster="/videos/window-tint-studio-poster.webp"
                  preload="metadata"
                >
                  <source src="/videos/window-tint-studio.webm" type="video/webm" />
                  <source src="/videos/window-tint-studio.mp4" type="video/mp4" />
                </video>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080a0e]/85 via-transparent to-[#080a0e]/40" />
                <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#4da3ff]">
                  <span className="rounded-full bg-black/60 px-2.5 py-1 backdrop-blur-md border border-white/10">
                    CleanWorx Studio
                  </span>
                  <span className="rounded-full bg-black/60 px-2 py-1 backdrop-blur-md border border-white/10 text-white font-mono">
                    2× Speed
                  </span>
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
                  <p className="text-xs font-bold text-white drop-shadow-md">
                    5% Nano-Ceramic Precision
                  </p>
                  <p className="mt-0.5 text-[11px] text-neutral-300">
                    2024 Mustang 5.0 &bull; Shaved to perfection
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 9: Professional Windows Tint Removal */}
      <section className="relative overflow-hidden bg-[#090a0f] py-16 sm:py-24 border-t border-white/10">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border border-[#1277ff]/30 bg-[linear-gradient(135deg,#0d111a_0%,#111728_100%)] p-6 sm:p-10 lg:p-12">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <span className="inline-block rounded-full bg-[#1277ff]/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#4da3ff]">
                  Tint Removal Options
                </span>
                <h2 className="mt-4 text-3xl font-black leading-[.98] tracking-[-.045em] text-white sm:text-4xl lg:text-5xl">
                  Professional Window Tint Removal in Basking Ridge, NJ
                </h2>
                <p className="mt-4 text-sm leading-7 text-neutral-300 sm:text-base">
                  Bubbling, peeling, or purple window tint not only ruins vehicle aesthetics but also dangerously obscures visibility and can lead to inspection failure. CleanWorx offers professional window tint removal performed safely by trained technicians.
                </p>
              </div>
              <div className="shrink-0">
                <BookingLink label="Book Tint Removal" className="w-full sm:w-auto" />
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="flex flex-col justify-between border border-white/10 bg-[#0c0e15]/70 p-6 backdrop-blur-sm">
                <div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1277ff]/20 text-[#4da3ff]">
                    <Wrench className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-white">
                    Safe Steam Extraction and Defroster Grid Protection
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-neutral-300 sm:text-sm">
                    We use controlled commercial steam extraction that softens stubborn adhesive without razor blades on rear windows, safeguarding your vehicle&apos;s sensitive rear defroster heating lines and radio antenna grids from costly damage.
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-between border border-[#1277ff]/30 bg-[#0c0e15]/70 p-6 backdrop-blur-sm">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                      <Clock className="h-5 w-5" />
                    </div>
                    <span className="rounded bg-white/10 px-2.5 py-0.5 font-mono text-xs text-neutral-300">
                      Time varies by scope
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-white">Window Tint Removal Pricing</h3>
                  <p className="mt-2 text-xs leading-6 text-neutral-300 sm:text-sm">
                    Remove old film and adhesive at the studio or through a mobile appointment.
                  </p>
                  <dl className="mt-4 space-y-2 border-t border-white/10 pt-4 text-sm">
                    {tintRemovalPrices.map((removal) => (
                      <div key={removal.service} className="flex items-center justify-between gap-4 text-neutral-200">
                        <dt>{removal.service}</dt>
                        <dd className="font-mono font-bold text-emerald-400">${removal.price}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-3 text-xs leading-5 text-neutral-400">
                    Whole-vehicle and large van or SUV removal exclude the front windshield.
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
                  <div>
                    <span className="block text-xs text-neutral-400">Starting at</span>
                    <span className="font-mono text-lg font-bold text-emerald-400">$20 / window</span>
                  </div>
                  <BookingLink label="Book Now" className="text-xs px-4 py-2.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Frequently Asked Questions */}
      <section className="bg-[#0a0b0f] py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <span className="block h-px w-20 bg-[#4da3ff]" />
            <h2 className="mt-6 text-3xl font-black leading-[.98] tracking-[-.045em] text-white sm:text-4xl lg:text-5xl">
              Frequently Asked Questions About Windows Tint in New Jersey
            </h2>
          </ScrollReveal>

          <div className="mt-10 border-t border-white/10">
            {data.faqs.map((faq, index) => (
              <ScrollReveal key={faq.question} animation="fade-up" delay={index * 60}>
                <details className="group border-b border-white/10 py-6" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-bold text-white marker:content-none sm:text-lg">
                    <h3 className="text-base font-bold text-white sm:text-lg">{faq.question}</h3>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/20 text-[#70b5ff] transition duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="max-w-3xl pr-12 pt-4 text-xs leading-6 text-neutral-400 sm:text-sm sm:leading-7">
                    {faq.answer}
                  </p>
                </details>
              </ScrollReveal>
            ))}
          </div>

          {/* Section 11: Call to Action Banner */}
          <ScrollReveal animation="zoom-in" className="mt-16 bg-[#1277ff] p-7 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-10">
            <div>
              <h2 className="text-2xl font-black leading-tight text-white sm:text-3xl">
                Schedule Your Window Tint Installation in Basking Ridge, NJ
              </h2>
              <p className="mt-3 max-w-xl text-xs leading-6 text-white/90 sm:text-sm">
                Choose a studio appointment at 19 E. Henry Street, Basking Ridge, or request mobile service. Select your vehicle class and choose between carbon or ceramic film.
              </p>
            </div>
            <div className="mt-6 flex shrink-0 flex-wrap items-center gap-3 sm:mt-0">
              <BookingLink label="Book Now" className="bg-[#080a0e] hover:bg-black text-white" />
              <a
                href="tel:+19088992832"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-xs font-bold text-white transition hover:bg-white/20"
              >
                <Phone className="h-4 w-4" />
                <span>908-899-2832</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </SiteShell>
  );
}

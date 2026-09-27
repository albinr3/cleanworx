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
  ["Color Stability", "Guaranteed color-stable", "Lifetime color stability"],
  ["Starting Price Point", "Entry-level luxury ($199+)", "Premium high-performance ($325+)"],
] as const;

const vltShades = [
  {
    vlt: "70% VLT",
    label: "Clear Thermal Shield",
    desc: "Nearly invisible on glass. Ideal for windshields (AS-1 line or medical waiver) and drivers seeking high heat rejection without darkening the interior.",
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
    desc: "Maximum privacy shade allowing only 5% of light transmission. Legal for rear side and back glass in NJ. Ultimate privacy and security for personal belongings.",
    badge: "Maximum Privacy",
    darknessClass: "bg-black border-white/30",
  },
];

const vehiclePricingTiers = [
  {
    category: "Coupe / 2-Door",
    models: "Porsche 911, Corvette, Mustang, BMW M4, Miata",
    carbonRange: "$199 – $249",
    ceramicRange: "$299 – $375",
    windows: "2 side roll-downs + small quarter / rear glass",
  },
  {
    category: "Sedan / 4-Door",
    models: "BMW 3/5 Series, Mercedes C/E-Class, Tesla Model 3/S, Audi A4/A6",
    carbonRange: "$275 – $349",
    ceramicRange: "$399 – $485",
    windows: "4 roll-down doors + rear windshield",
  },
  {
    category: "Truck / Cab",
    models: "Ford F-150, Ram 1500, Chevy Silverado, Rivian R1T",
    carbonRange: "$225 – $299",
    ceramicRange: "$325 – $425",
    windows: "Cab configuration (regular, super, or crew cab)",
  },
  {
    category: "SUV / Crossover",
    models: "Porsche Cayenne, BMW X5, Tesla Model Y/X, Range Rover, Tahoe",
    carbonRange: "$325 – $425",
    ceramicRange: "$449 – $550",
    windows: "Full vehicle coverage including rear cargo glass",
  },
];

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
    title: "Dust-Free Bay Application and Edge Inspection",
    subtitle: "Studio cleanroom installation",
    description:
      "Inside our climate-controlled Basking Ridge studio bay, the film is positioned, squeegeed with specialized slip solutions to expel moisture, and hand-inspected along every micro-edge to guarantee zero peeling.",
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
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "USD",
          lowPrice: "50.00",
          highPrice: "550.00",
          offerCount: "6",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cleanworxnj.com/" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://www.cleanworxnj.com/services" },
          { "@type": "ListItem", position: 3, name: data.name, item: `https://www.cleanworxnj.com/${data.slug}` },
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
            <Link href="/services" className="transition hover:text-white">
              Services
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
                    href="/services"
                    className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/10 active:scale-95"
                  >
                    Compare services
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal animation="fade-up" delay={150} className="w-full">
              <div className="border border-white/15 bg-[#0b0d13]/85 p-5 shadow-2xl shadow-black/40 backdrop-blur-md sm:p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-[#70b5ff]">Published starting point</p>
                <p className="mt-2 font-mono text-3xl font-bold tracking-[-.06em] text-white sm:text-4xl">{data.price}</p>
                <p className="mt-2.5 text-xs leading-5 text-neutral-300">
                  Window tint installation from $199+ based on vehicle class. Safe steam tint removal available at $50 per window.
                </p>
                <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-3 text-xs text-neutral-300">
                  <MapPin className="h-3.5 w-3.5 text-[#1277ff]" />
                  <span>19 E. Henry St, Basking Ridge, NJ</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="border-t border-white/10 pt-4">
            <ul className="grid grid-cols-2 gap-2 text-xs text-neutral-300 sm:grid-cols-3 lg:grid-cols-6">
              {data.inclusions.map((inc) => (
                <li key={inc} className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 shrink-0 text-[#1277ff]" />
                  <span className="truncate">{inc}</span>
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
                Summer heat can turn your vehicle cabin into an oven, while UV exposure slowly fades and cracks leather upholstery. Our studio-installed window films keep your interior significantly cooler, cut blinding road glare, and block harmful UV rays across Somerset and Morris counties.
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
              Choosing the right window tint in New Jersey comes down to heat rejection performance, optical clarity, and budget. At CleanWorx, we work exclusively with premium color-stable carbon and advanced nano-ceramic films that will never turn purple or bubble.
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
                  <span>Lifetime manufacturer color stability against purple fade</span>
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
                  <span>Outstanding durability at an accessible price point</span>
                </li>
              </ul>
            </ScrollReveal>
          </div>

          {/* Film Comparison Table */}
          <div className="mt-12 overflow-x-auto border border-white/10 bg-[#0d1017]">
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
          </div>
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
                Test different tint shades on our interactive vehicle simulator below. From nearly invisible 70% windshield visor strips to balanced 30% side glass, popular 20% factory-matching rear shades, and deep 5% limousine privacy tint, select the ideal darkness level tailored to your driving style and legal compliance.
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

      {/* Section 4: Window Tint Laws in New Jersey */}
      <section className="relative overflow-hidden bg-[#0c0e16] py-16 sm:py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up" className="max-w-3xl">
            <span className="block h-px w-20 bg-[#4da3ff]" />
            <h2 className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#4da3ff] sm:text-sm">
              Window Tint Laws in New Jersey: Legal Compliance &amp; VLT Rules
            </h2>
            <p className="mt-3 text-3xl font-black leading-[1.05] tracking-[-.045em] text-white sm:text-4xl lg:text-5xl">
              Stay Legal. Stay Cool. Choose the Right Tint for Your Vehicle.
            </p>
            <p className="mt-4 text-sm leading-7 text-neutral-300 sm:text-base">
              New Jersey has stricter window tint laws than many other states, especially for the windshield and front windows. We help you understand your options before installation so you can choose a tint that delivers the look, privacy, and heat protection you want without unnecessary compliance issues.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ScrollReveal animation="fade-up" delay={60} className="flex flex-col justify-between border border-white/10 bg-[#121622] p-6 transition hover:border-white/20">
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded border border-rose-500/30 bg-rose-500/15 px-2 py-0.5 text-xs font-bold text-rose-300">
                    Restricted in New Jersey
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">Windshield</h3>
                <p className="mt-3 text-xs leading-6 text-neutral-300 sm:text-sm">
                  Aftermarket windshield tint is generally restricted in New Jersey. Additional sun-screening may be permitted for drivers with an approved NJ MVC medical exemption.
                </p>
              </div>
              <div className="mt-4 border-t border-white/10 pt-3 text-xs leading-5 text-neutral-400">
                Ask us about the options available for your vehicle before installation.
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={120} className="flex flex-col justify-between border border-white/10 bg-[#121622] p-6 transition hover:border-white/20">
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded border border-amber-500/30 bg-amber-500/15 px-2 py-0.5 text-xs font-bold text-amber-300">
                    Medical Exemption Required
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">Front Driver &amp; Passenger Windows</h3>
                <p className="mt-3 text-xs leading-6 text-neutral-300 sm:text-sm">
                  New Jersey generally does not permit aftermarket tint on the driver and front passenger windows unless the vehicle owner has an approved medical exemption from the NJ MVC.
                </p>
              </div>
              <div className="mt-4 border-t border-white/10 pt-3 text-xs leading-5 text-neutral-400">
                If you have an approved exemption, we can help you select film that meets the applicable requirements.
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={180} className="flex flex-col justify-between border border-white/10 bg-[#121622] p-6 transition hover:border-white/20">
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-xs font-bold text-emerald-300">
                    Tinting Permitted
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">Rear Side Windows</h3>
                <p className="mt-3 text-xs leading-6 text-neutral-300 sm:text-sm">
                  Rear passenger windows can be tinted, giving you more flexibility to increase privacy, reduce interior heat, block UV rays, and create a darker appearance.
                </p>
              </div>
              <div className="mt-4 border-t border-white/10 pt-3 text-xs leading-5 text-neutral-400">
                We offer multiple shade options depending on the look and level of privacy you want.
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={240} className="flex flex-col justify-between border border-white/10 bg-[#121622] p-6 transition hover:border-white/20">
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-xs font-bold text-emerald-300">
                    Tinting Permitted
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">Rear Windshield</h3>
                <p className="mt-3 text-xs leading-6 text-neutral-300 sm:text-sm">
                  The rear windshield can also be tinted, subject to New Jersey visibility and mirror requirements.
                </p>
              </div>
              <div className="mt-4 border-t border-white/10 pt-3 text-xs leading-5 text-neutral-400">
                Pairing the rear windshield with the rear side windows creates a cleaner, more uniform finish while improving comfort and privacy.
              </div>
            </ScrollReveal>
          </div>

          {/* Consultation & Quote Box */}
          <ScrollReveal animation="fade-up" delay={200} className="mt-12">
            <div className="relative overflow-hidden rounded-2xl border border-[#1277ff]/30 bg-gradient-to-br from-[#121626] via-[#0f121d] to-[#0a0c14] p-6 shadow-2xl sm:p-8 lg:p-10">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#1277ff]/10 blur-3xl" />
              <div className="relative grid items-center gap-8 lg:grid-cols-[1.3fr_minmax(0,0.7fr)]">
                <div>
                  <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                    Not Sure Which Tint to Choose?
                  </h3>
                  <p className="mt-2 text-base font-semibold text-[#70b5ff]">
                    You do not need to figure it out alone.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-300 sm:text-base">
                    Tell us the look you want, how much privacy you prefer, and how much heat rejection matters to you. We will walk you through the available film options and explain which areas of your vehicle can be tinted under current New Jersey regulations.
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-2.5 text-xs font-semibold text-neutral-200 sm:text-sm">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
                      <Check className="h-3.5 w-3.5 text-[#1277ff]" />
                      Professional Installation
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
                      <Check className="h-3.5 w-3.5 text-[#1277ff]" />
                      Multiple Tint Shades
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
                      <Check className="h-3.5 w-3.5 text-[#1277ff]" />
                      Clean OEM-Style Finish
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-3 lg:items-end">
                  <BookingLink label="Get a Window Tint Quote" className="w-full justify-center px-8 py-4 text-base font-bold sm:w-auto" />
                  <p className="text-xs text-neutral-400">
                    Compliant NJ Tinting · Studio Bay in Basking Ridge, NJ
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
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
              Unlike mobile tinting done on driveways where dust and wind compromise quality, every window tint installation at CleanWorx takes place inside our dedicated, climate-controlled studio bay.
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
              We believe in transparent, upfront pricing. Window tinting costs depend primarily on the number of glass panes, vehicle body style, and whether you choose carbon or nano-ceramic film technology.
            </p>
          </ScrollReveal>

          <div className="mt-10">
            <ScrollReveal animation="fade-up">
              <h3 className="text-2xl font-bold text-white">
                Vehicle Class Estimates (Coupe, Sedan, Truck, SUV)
              </h3>
              <p className="mt-2 text-sm leading-6 text-neutral-400">
                Two-door coupes and single-cab trucks typically start around $199–$275 for standard carbon packages. Four-door sedans range from $275–$399. Larger SUVs, crossovers, and minivans with extensive rear cargo glass range between $350–$550 for full vehicle coverage.
              </p>
            </ScrollReveal>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {vehiclePricingTiers.map((tier, idx) => (
                <ScrollReveal
                  key={tier.category}
                  animation="fade-up"
                  delay={idx * 70}
                  className="border border-white/10 bg-[#121622] p-5 sm:p-6"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-[#70b5ff]">{tier.category}</p>
                  <p className="mt-1 text-xs text-neutral-400 truncate" title={tier.models}>
                    {tier.models}
                  </p>
                  <div className="mt-5 space-y-3 border-t border-white/10 pt-4">
                    <div>
                      <p className="text-[11px] text-neutral-400">High-Performance Carbon</p>
                      <p className="font-mono text-xl font-bold text-white">{tier.carbonRange}</p>
                    </div>
                    <div>
                      <p className="text-[11px] text-[#4da3ff]">Nano-Ceramic IR Film</p>
                      <p className="font-mono text-xl font-bold text-[#70b5ff]">{tier.ceramicRange}</p>
                    </div>
                  </div>
                  <p className="mt-4 border-t border-white/5 pt-3 text-[11px] leading-relaxed text-neutral-400">
                    {tier.windows}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal animation="fade-up" className="mt-12 border border-white/10 bg-[#10141d] p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white">
              Key Factors That Influence Window Tinting Cost
            </h3>
            <p className="mt-3 text-sm leading-7 text-neutral-300">
              Key cost variables include film grade (Nano-Ceramic vs. Carbon), presence of old tint that requires removal, steep rear windshield curvature, and specialty visor or sunroof additions. We inspect every vehicle upon arrival at our Basking Ridge studio and provide an exact, itemized quote before work begins.
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
                  CleanWorx provides professional, studio-backed window tint installation from our dedicated facility at 19 E. Henry Street in Basking Ridge, NJ. By tinting inside a clean, climate-controlled bay, we eliminate the airborne dust, wind, and imperfections common in mobile driveway installations.
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
                    Located at 19 E. Henry Street in Basking Ridge, NJ, our dedicated facility eliminates wind-blown debris, temperature fluctuations, and environmental contaminants that ruin mobile driveway tint jobs.
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
                <BookingLink label="Book Studio Appointment" className="w-full sm:w-auto" />
                <span className="text-xs text-neutral-400">
                  19 E. Henry Street, Basking Ridge, NJ · Dust-Free Bay
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
                  Catalog Service &bull; Removal Sub-Service
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
                      ~30 min / window
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-white">
                    Window Tint Removal Pricing: $50.00 per Window
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-neutral-300 sm:text-sm">
                    Professional window tint removal is priced at $50.00 per window (approximately 30 minutes per window), including complete adhesive residue dissolution and glass polish.
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
                  <div>
                    <span className="block text-xs text-neutral-400">Transparent Pricing:</span>
                    <span className="font-mono text-lg font-bold text-emerald-400">$50.00 / window</span>
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
                Reserve your dedicated studio slot at 19 E. Henry Street, Basking Ridge. Select your vehicle class and choose between high-performance carbon or nano-ceramic film.
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

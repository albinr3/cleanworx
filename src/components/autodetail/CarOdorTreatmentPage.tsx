import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Check,
  ChevronRight,
  CircleAlert,
  Clock3,
  MapPin,
  ShieldCheck,
  Wind,
} from "lucide-react";
import { BookingLink } from "@/components/autodetail/BookingLink";
import { ScrollReveal } from "@/components/autodetail/ScrollReveal";
import { SiteShell } from "@/components/autodetail/SiteShell";

const commonConcerns = [
  {
    title: "Smoke and lingering scents",
    description:
      "Cigarette, cigar, and marijuana smoke penetrate deep into cabin surfaces. Ozone air purification circulates through the interior to neutralize trapped odor compounds at the source.",
  },
  {
    title: "Pet, food, and spill odors",
    description:
      "Pets, food, and spills leave odors deep in upholstery and carpets. Pairing ozone air purification with a Full Interior Detail extracts the physical residue before clearing the cabin air.",
  },
  {
    title: "Musty cabin odors",
    description:
      "Musty cabin smells often trace back to damp floor mats, spills, or AC condensation. Once the source is cleaned and dried, ozone clears away any remaining stale odor.",
  },
];

const faqs = [
  {
    question: "How much does car odor removal cost?",
    answer:
      "A standalone ozone air purification appointment is $125 at the CleanWorx studio in Basking Ridge. When added to a Full Interior Detail, the treatment is $75.",
  },
  {
    question: "How long does the appointment take?",
    answer:
      "The booking appointment is 45 minutes. The ozone generator treatment runs for approximately 30 to 40 minutes.",
  },
  {
    question: "Should I combine it with interior detailing?",
    answer:
      "For a vehicle with a dirty interior, stained upholstery, pet hair, or residue from a spill, pairing this treatment with a Full Interior Detail is recommended to extract the physical source while ozone purifies the air.",
  },
  {
    question: "What affects the results of car odor removal?",
    answer:
      "Results depend on the odor source, how long it has been in the cabin, and the materials affected. Ozone neutralizes airborne and surface odor compounds throughout the vehicle. For deeply embedded smells or heavy residue, combining it with interior detailing produces the most thorough results.",
  },
  {
    question: "Can ozone treatment remove smoke odor from a car?",
    answer:
      "Yes. Ozone gas circulates through the headliner, upholstery, and climate vents where smoke compounds settle. Because heavy cigarette, cigar, or cannabis smoke can saturate foam and fabrics, pairing ozone treatment with a Full Interior Detail addresses both the physical residue and the airborne odor.",
  },
  {
    question: "Is car air purification the same as auto odor removal?",
    answer:
      "These terms describe the same professional ozone treatment process. It targets persistent cabin odors at the molecular level, offering a focused solution when ordinary air fresheners fall short.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Car Odor Removal",
      description:
        "A 30 to 40 minute ozone air purification treatment for lingering vehicle cabin odors, offered as a standalone studio appointment or as a Full Interior Detail add-on.",
      url: "https://www.cleanworxnj.com/car-odor-treatment",
      image: [
        "https://www.cleanworxnj.com/images/autodetail/cleanworx-car-odor-removal-ozone-treatment.webp",
        "https://www.cleanworxnj.com/images/autodetail/cleanworx-car-ac-vent-steam-cleaning-odor-removal.webp",
      ],
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
      },
      areaServed: "Basking Ridge, New Jersey",
      offers: {
        "@type": "Offer",
        price: "125.00",
        priceCurrency: "USD",
        url: "https://cleanworx-llc.square.site/",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.cleanworxnj.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Car Odor Removal",
          item: "https://www.cleanworxnj.com/car-odor-treatment",
        },
      ],
    },
  ],
};

export function CarOdorTreatmentPage() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />

      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#080b10]">
        <Image
          src="/images/autodetail/car-odor-treatment-hero.png"
          alt="Vehicle receiving an ozone air purification treatment in the CleanWorx detail studio"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[67%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,11,16,.98)_0%,rgba(8,11,16,.94)_37%,rgba(8,11,16,.48)_66%,rgba(8,11,16,.2)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(8,11,16,.78)_0%,transparent_48%)]" />

        <div className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pb-24 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-300">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span aria-current="page" className="text-neutral-100">Car Odor Removal</span>
          </nav>

          <div className="max-w-2xl pb-4 pt-16 sm:pt-24 lg:min-h-[540px] lg:pt-28">
            <div className="inline-flex items-center gap-2 border border-[#4da3ff]/30 bg-[#1277ff]/15 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#9bcaff]">
              <Wind className="h-3.5 w-3.5" />
              Studio air purification
            </div>
            <h1 className="mt-5 text-4xl font-black leading-[.98] tracking-[-.045em] text-white sm:text-5xl lg:text-6xl">
              Car Odor Removal in Basking Ridge, NJ
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-200 sm:text-lg">
              <span className="font-semibold text-white">Smoke odor removal:</span> cigarette, cigar, and marijuana smoke removed permanently at the source. Professional 30 to 40 minute ozone air purification for lingering vehicle odors, available as a studio appointment or Full Interior Detail add-on.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-neutral-200">
              <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-[#70b5ff]" />45-minute appointment</span>
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-[#70b5ff]" />Basking Ridge studio</span>
            </div>
            <div className="mt-8">
              <BookingLink label="Book Air Purification" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0d1017] py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.12fr)_minmax(320px,.88fr)] lg:items-start lg:px-8">
          <ScrollReveal animation="fade-right">
            <h2 className="max-w-2xl text-3xl font-black leading-[1] tracking-[-.04em] text-white sm:text-5xl">
              Car smell removal for a lingering cabin odor.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-300">
              Air fresheners only mask scents temporarily. CleanWorx uses professional ozone air purification to break down odor compounds circulating inside the cabin and ventilation system. The ozone generator runs inside the closed vehicle for approximately 30 to 40 minutes.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-300">
              For a vehicle that also needs deep cleaning, stains addressed, or pet hair removed, pairing this service with a Full Interior Detail provides the most complete cabin refresh by extracting the physical source.
            </p>
            <Link href="/interior-detailing" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#70b5ff] transition hover:text-white">
              Explore Full Interior Detailing <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>

          <ScrollReveal animation="fade-left" className="border border-[#4da3ff]/25 bg-[#111b2b] p-6 shadow-[0_24px_72px_rgba(0,0,0,.25)] sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[.16em] text-[#9bcaff]">Standalone studio appointment</p>
            <p className="mt-3 text-5xl font-black tracking-[-.05em] text-white">$125</p>
            <p className="mt-2 text-sm leading-6 text-neutral-300">45 minutes reserved through Square for the standalone air-purification service.</p>
            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="text-xs font-bold uppercase tracking-[.16em] text-[#9bcaff]">Full Interior Detail add-on</p>
              <p className="mt-2 text-3xl font-black tracking-[-.04em] text-white">$75</p>
              <p className="mt-2 text-sm leading-6 text-neutral-300">Available when added to a Full Interior Detail appointment.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#0d1017] py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <ScrollReveal animation="fade-right">
            <div className="inline-flex items-center gap-2 border border-[#4da3ff]/30 bg-[#1277ff]/15 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#9bcaff]">
              <Wind className="h-3.5 w-3.5" />
              Ozone Air Purification
            </div>
            <h2 className="mt-4 text-3xl font-black leading-[1] tracking-[-.04em] text-white sm:text-5xl">
              Ozone treatment targeting odors at the source.
            </h2>
            <p className="mt-6 text-base leading-7 text-neutral-300">
              The standalone appointment reserves 45 minutes, with our commercial ozone generator circulating inside the cabin for approximately 30 to 40 minutes. It targets trapped odor molecules throughout the interior surfaces and ventilation system.
            </p>
            <p className="mt-4 text-base leading-7 text-neutral-300">
              <strong className="font-semibold text-white">Car smoke smell removal starts with the source.</strong> Cigarette, cigar, and marijuana smoke settle deep into fabric upholstery, carpeting, and headliners. While ozone air purification breaks down airborne and surface odor compounds, pairing it with a{" "}
              <Link
                href="/interior-detailing"
                className="font-semibold text-[#70b5ff] underline decoration-[#70b5ff]/40 underline-offset-4 transition hover:text-white"
              >
                Full Interior Detail
              </Link>{" "}
              provides the deep physical extraction needed for the cleanest cabin environment.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/add-ons"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#70b5ff] transition hover:text-white"
              >
                View the air-purification add-on <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-left">
            <figure className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111723] p-2.5 shadow-2xl transition-all duration-300 hover:border-[#4da3ff]/40">
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-neutral-900">
                <Image
                  src="/images/autodetail/cleanworx-car-odor-removal-ozone-treatment.webp"
                  alt="CleanWorx auto detailer operating an OdorStop ozone generator inside a car cabin for odor removal in Basking Ridge, NJ"
                  width={1024}
                  height={682}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080b10]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-neutral-300 sm:bottom-4 sm:left-4 sm:right-4">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-[#080b10]/90 px-2.5 py-1 text-[11px] font-semibold text-[#9bcaff] backdrop-blur-sm">
                    <Wind className="h-3 w-3" />
                    OdorStop Ozone Machine Setup
                  </span>
                  <span className="rounded bg-[#080b10]/80 px-2 py-0.5 text-[11px] text-neutral-300">
                    Basking Ridge Studio
                  </span>
                </div>
              </div>
              <figcaption className="px-3 py-2.5 text-xs text-neutral-400">
                CleanWorx technician preparing the commercial OdorStop ozone generator inside the cabin for 30–40 minute air purification and smoke smell removal.
              </figcaption>
            </figure>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#0a0d13] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <ScrollReveal animation="fade-right">
                <p className="text-xs font-bold uppercase tracking-[.16em] text-[#70b5ff]">Common odor concerns</p>
                <h2 className="mt-3 text-3xl font-black leading-[1] tracking-[-.04em] text-white sm:text-5xl">
                  When air purification may be a fit.
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-300 sm:text-base">
                  Persistent smells linger across air vents, headliners, and fabrics. We assess whether ozone air purification, high-temperature steam detailing, or a combined interior treatment is the right match.
                </p>

                <div className="mt-8 space-y-4">
                  {commonConcerns.map((concern, index) => (
                    <div
                      key={concern.title}
                      className="border border-white/10 bg-[#11151e] p-5 transition-all duration-300 hover:border-[#4da3ff]/30"
                    >
                      <div className="flex items-start gap-4">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#1277ff]/15 text-sm font-black text-[#70b5ff]">
                          0{index + 1}
                        </span>
                        <div>
                          <h3 className="text-lg font-bold text-white">{concern.title}</h3>
                          <p className="mt-1.5 text-sm leading-6 text-neutral-300">{concern.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal animation="fade-left">
                <figure className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111723] p-2.5 shadow-2xl transition-all duration-300 hover:border-[#4da3ff]/40">
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-neutral-900">
                    <Image
                      src="/images/autodetail/cleanworx-car-ac-vent-steam-cleaning-odor-removal.webp"
                      alt="High-temperature steam cleaning and sanitization of car AC air vents and dashboard for odor removal at CleanWorx Basking Ridge, NJ"
                      width={1024}
                      height={1024}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 520px"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080b10]/85 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-neutral-300 sm:bottom-4 sm:left-4 sm:right-4">
                      <span className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-[#080b10]/90 px-2.5 py-1 text-[11px] font-semibold text-[#9bcaff] backdrop-blur-sm">
                        AC Vent Steam Extraction
                      </span>
                      <span className="rounded bg-[#080b10]/80 px-2 py-0.5 text-[11px] text-neutral-300">
                        Targeting Musty Cabin Odors
                      </span>
                    </div>
                  </div>
                  <figcaption className="px-3 py-2.5 text-xs text-neutral-400">
                    High-temperature steam deep-cleaning vehicle AC vents to eliminate bacteria, trapped moisture, and mildew odors before ozone purification resets the cabin air.
                  </figcaption>
                </figure>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0d1017] py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:items-center lg:px-8">
          <ScrollReveal animation="fade-right" className="relative overflow-hidden border border-white/10 bg-[#111723] p-7 sm:p-10">
            <div className="absolute right-0 top-0 h-24 w-24 border-b border-l border-[#4da3ff]/30" />
            <ShieldCheck className="h-8 w-8 text-[#70b5ff]" />
            <h2 className="mt-6 text-3xl font-black leading-[1] tracking-[-.04em] text-white sm:text-4xl">Targeted process, practical next steps.</h2>
            <p className="mt-5 text-sm leading-7 text-neutral-300 sm:text-base">
              Results depend on the odor source, affected materials, and cabin exposure time. When strong smells are tied to physical residue or spills, pairing air purification with a Full Interior Detail delivers the most thorough outcome.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-left">
            <h2 className="text-3xl font-black leading-[1] tracking-[-.04em] text-white sm:text-5xl">Choose the appointment that matches the vehicle.</h2>
            <div className="mt-8 space-y-5">
              <div className="flex gap-4 border-l-2 border-[#1277ff] pl-5">
                <Calendar className="mt-0.5 h-5 w-5 shrink-0 text-[#70b5ff]" />
                <div>
                  <h3 className="font-bold text-white">Standalone air purification</h3>
                  <p className="mt-1 text-sm leading-6 text-neutral-300">Book the 45-minute, $125 studio appointment when air purification is the service you need.</p>
                </div>
              </div>
              <div className="flex gap-4 border-l-2 border-[#4da3ff] pl-5">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#70b5ff]" />
                <div>
                  <h3 className="font-bold text-white">Air purification with interior detailing</h3>
                  <p className="mt-1 text-sm leading-6 text-neutral-300">Add the $75 treatment to a Full Interior Detail when the cabin needs cleaning alongside odor removal.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#090b10] py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <p className="text-xs font-bold uppercase tracking-[.16em] text-[#70b5ff]">Before you book</p>
            <h2 className="mt-3 text-3xl font-black leading-[1] tracking-[-.04em] text-white sm:text-5xl">Car odor removal FAQs</h2>
          </ScrollReveal>
          <div className="mt-10 border-t border-white/10">
            {faqs.map((faq, index) => (
              <ScrollReveal key={faq.question} animation="fade-up" delay={index * 70}>
                <details className="group border-b border-white/10 py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold text-white marker:content-none">
                    <span>{faq.question}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/20 text-[#70b5ff] transition duration-300 group-open:rotate-45">+</span>
                  </summary>
                  <p className="max-w-3xl pt-4 text-sm leading-7 text-neutral-300 sm:text-base">{faq.answer}</p>
                </details>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fade-up" className="mt-14 border border-[#4da3ff]/35 bg-[#1277ff] p-7 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-10">
            <div>
              <h2 className="text-3xl font-black leading-tight text-white">Book air purification at our Basking Ridge studio.</h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/85">Choose a standalone appointment or add the treatment to a Full Interior Detail.</p>
            </div>
            <BookingLink label="Book Air Purification" className="mt-6 shrink-0 bg-[#080a0e] hover:bg-black sm:mt-0" />
          </ScrollReveal>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <Link href="/interior-detailing" className="font-semibold text-[#70b5ff] transition hover:text-white">Interior Detailing <span aria-hidden="true">→</span></Link>
            <Link href="/add-ons" className="font-semibold text-[#70b5ff] transition hover:text-white">All Add-Ons <span aria-hidden="true">→</span></Link>
          </div>

          <p className="mt-8 flex items-start gap-2 text-xs leading-5 text-neutral-500">
            <CircleAlert className="mt-0.5 h-4 w-4 shrink-0 text-neutral-400" />
            This service is performed at the CleanWorx studio. Mobile availability is not advertised for air purification.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}

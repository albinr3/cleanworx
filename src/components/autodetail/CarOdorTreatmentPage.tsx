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
      "Smoke and strong fragrances can remain noticeable long after the source is gone. An ozone treatment is a focused option when a lingering cabin odor is the concern.",
  },
  {
    title: "Pet, food, and spill odors",
    description:
      "Pets, food, and spills can leave an odor behind in a vehicle cabin. Pairing air purification with a Full Interior Detail gives the interior a more complete reset.",
  },
  {
    title: "Musty cabin odors",
    description:
      "A musty smell can have different causes. This service may be appropriate for a lingering cabin odor after the underlying concern has been addressed.",
  },
];

const faqs = [
  {
    question: "How much does car odor treatment cost?",
    answer:
      "A standalone ozone air purification appointment is USD 125 at the CleanWorx studio in Basking Ridge. When added to a Full Interior Detail, the treatment is USD 75.",
  },
  {
    question: "How long does the appointment take?",
    answer:
      "The booking appointment is 45 minutes. The ozone generator treatment runs for approximately 30 to 40 minutes.",
  },
  {
    question: "Should I combine it with interior detailing?",
    answer:
      "For a vehicle with a dirty interior, stained upholstery, pet hair, or residue from a spill, pairing this treatment with a Full Interior Detail is recommended for a more complete cabin refresh.",
  },
  {
    question: "Will ozone treatment guarantee every odor is gone?",
    answer:
      "No. Results depend on the odor source, the affected materials, and the vehicle's condition. CleanWorx does not present this service as a guaranteed odor-elimination, sanitization, or mold-remediation service.",
  },
  {
    question: "Can ozone treatment remove smoke odor from a car?",
    answer:
      "It may be a fit when lingering smoke odor is the concern after the relevant interior condition has been addressed. Results vary, so CleanWorx does not guarantee complete car smoke smell removal or cigarette smoke odor removal.",
  },
  {
    question: "Is car air purification the same as auto odor removal?",
    answer:
      "These terms can describe the same ozone treatment service. The appointment is a focused option for lingering cabin odors, not a substitute for cleaning or a promise that every source of odor can be removed.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Car Odor Treatment",
      description:
        "A 30 to 40 minute ozone air purification treatment for lingering vehicle cabin odors, offered as a standalone studio appointment or as a Full Interior Detail add-on.",
      url: "https://www.cleanworxnj.com/car-odor-treatment",
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
          name: "Car Odor Treatment",
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
            <span aria-current="page" className="text-neutral-100">Car Odor Treatment</span>
          </nav>

          <div className="max-w-2xl pb-4 pt-16 sm:pt-24 lg:min-h-[540px] lg:pt-28">
            <div className="inline-flex items-center gap-2 border border-[#4da3ff]/30 bg-[#1277ff]/15 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#9bcaff]">
              <Wind className="h-3.5 w-3.5" />
              Studio air purification
            </div>
            <h1 className="mt-5 text-4xl font-black leading-[.98] tracking-[-.045em] text-white sm:text-5xl lg:text-6xl">
              Car Odor Treatment in Basking Ridge, NJ
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-200 sm:text-lg">
              A 30 to 40 minute ozone treatment for lingering vehicle odors and car smell removal concerns, available as a studio appointment or Full Interior Detail add-on.
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
              Air fresheners only change the scent in a vehicle. CleanWorx offers car air purification as an auto odor removal option for lingering concerns in an otherwise addressed interior. The treatment uses an ozone generator inside the vehicle for approximately 30 to 40 minutes.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-300">
              For a vehicle that also needs deep cleaning, stains addressed, or pet hair removed, a Full Interior Detail is the better companion service. It gives the cabin the cleaning attention that ozone treatment alone does not provide.
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
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,.95fr)] lg:items-start lg:px-8">
          <ScrollReveal animation="fade-right">
            <p className="text-xs font-bold uppercase tracking-[.16em] text-[#70b5ff]">Smoke odor concerns</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black leading-[1] tracking-[-.04em] text-white sm:text-5xl">Car smoke smell removal starts with the source.</h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-300">
              Smoke smell removal in a car can be more involved when an odor is set into fabric, carpet, or other porous interior materials. For that reason, an ozone treatment is best understood as a focused car air purification option after the relevant interior condition has been addressed.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-300">
              This can be relevant for cigarette smoke odor removal or other lingering smoke concerns, but it is not a promise that smoke odor will be fully removed. When the cabin also needs cleaning, pairing the treatment with a <Link href="/interior-detailing" className="font-semibold text-[#70b5ff] underline decoration-[#70b5ff]/40 underline-offset-4 transition hover:text-white">Full Interior Detail</Link> gives the vehicle a more complete starting point.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-left" className="border border-[#4da3ff]/25 bg-[#111b2b] p-7 sm:p-8">
            <Wind className="h-8 w-8 text-[#70b5ff]" />
            <h3 className="mt-5 text-2xl font-black leading-tight text-white">Ozone treatment for cars, without overpromising.</h3>
            <p className="mt-4 text-sm leading-7 text-neutral-300 sm:text-base">
              The standalone appointment reserves 45 minutes, with the ozone generator running for approximately 30 to 40 minutes. Results depend on the odor source, the affected materials, and the vehicle&apos;s condition.
            </p>
            <Link href="/add-ons" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#70b5ff] transition hover:text-white">
              View the air-purification add-on <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#0a0d13] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up" className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[.16em] text-[#70b5ff]">Common odor concerns</p>
            <h2 className="mt-3 text-3xl font-black leading-[1] tracking-[-.04em] text-white sm:text-5xl">When air purification may be a fit.</h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {commonConcerns.map((concern, index) => (
              <ScrollReveal key={concern.title} animation="fade-up" delay={index * 80} className="border border-white/10 bg-[#11151e] p-6">
                <span className="flex h-10 w-10 items-center justify-center bg-[#1277ff]/15 text-sm font-black text-[#70b5ff]">0{index + 1}</span>
                <h3 className="mt-5 text-xl font-bold text-white">{concern.title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-300">{concern.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0d1017] py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:items-center lg:px-8">
          <ScrollReveal animation="fade-right" className="relative overflow-hidden border border-white/10 bg-[#111723] p-7 sm:p-10">
            <div className="absolute right-0 top-0 h-24 w-24 border-b border-l border-[#4da3ff]/30" />
            <ShieldCheck className="h-8 w-8 text-[#70b5ff]" />
            <h2 className="mt-6 text-3xl font-black leading-[1] tracking-[-.04em] text-white sm:text-4xl">Clear limits, practical next steps.</h2>
            <p className="mt-5 text-sm leading-7 text-neutral-300 sm:text-base">
              Results depend on the odor source, the materials affected, and the vehicle&apos;s condition. This is not a guaranteed odor-elimination service, a sanitization service, or mold remediation.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-left">
            <h2 className="text-3xl font-black leading-[1] tracking-[-.04em] text-white sm:text-5xl">Choose the appointment that matches the vehicle.</h2>
            <div className="mt-8 space-y-5">
              <div className="flex gap-4 border-l-2 border-[#1277ff] pl-5">
                <Calendar className="mt-0.5 h-5 w-5 shrink-0 text-[#70b5ff]" />
                <div>
                  <h3 className="font-bold text-white">Standalone air purification</h3>
                  <p className="mt-1 text-sm leading-6 text-neutral-300">Book the 45-minute, USD 125 studio appointment when air purification is the service you need.</p>
                </div>
              </div>
              <div className="flex gap-4 border-l-2 border-[#4da3ff] pl-5">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#70b5ff]" />
                <div>
                  <h3 className="font-bold text-white">Air purification with interior detailing</h3>
                  <p className="mt-1 text-sm leading-6 text-neutral-300">Add the USD 75 treatment to a Full Interior Detail when the cabin needs cleaning alongside odor treatment.</p>
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
            <h2 className="mt-3 text-3xl font-black leading-[1] tracking-[-.04em] text-white sm:text-5xl">Car odor treatment FAQs</h2>
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

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
} from "lucide-react";
import { BookingLink } from "@/components/autodetail/BookingLink";
import { BeforeAfterSlider } from "@/components/autodetail/BeforeAfterSlider";
import { CeramicBenefitIcon } from "@/components/autodetail/CeramicBenefitIcon";
import { ScrollReveal } from "@/components/autodetail/ScrollReveal";
import { SiteShell } from "@/components/autodetail/SiteShell";
import type { ServicePageData } from "@/components/autodetail/ServicePage";

const comparisonRows = [
  ["Typical Durability", "1–3 months", "6–12 months", "1–5+ years"],
  ["Gloss Enhancement", "★★★☆☆", "★★★★☆", "★★★★★"],
  ["Water Repellency", "★★★☆☆", "★★★★☆", "★★★★★"],
  ["UV & Environmental Protection", "★★☆☆☆", "★★★☆☆", "★★★★★"],
  ["Chemical Resistance", "★★☆☆☆", "★★★☆☆", "★★★★★"],
  ["Ease of Cleaning", "★★☆☆☆", "★★★☆☆", "★★★★★"],
  ["Long-Term Protection", "★☆☆☆☆", "★★★☆☆", "★★★★★"],
] as const;

function Paragraphs({ paragraphs }: { paragraphs: string[] }) {
  return <>{paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 text-sm leading-7 text-neutral-400 sm:text-base">{paragraph}</p>)}</>;
}

export function CeramicCoatingPage({ data }: { data: ServicePageData }) {
  const [intro, benefits, preparation, options, cost] = data.sections;
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

      <section className="relative isolate min-h-[720px] overflow-hidden border-b border-white/10 lg:min-h-[820px]">
        <Image src={data.image} alt={`${data.name} service at CleanWorx Auto Detailing & Ceramic Coating`} fill priority sizes="100vw" className="-z-30 object-cover object-[60%_center]" />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,#08090c_0%,rgba(8,9,12,.91)_35%,rgba(8,9,12,.42)_68%,rgba(8,9,12,.68)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_77%_24%,rgba(18,119,255,.4),transparent_26%),linear-gradient(0deg,#08090c_0%,transparent_42%)]" />
        <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full border border-white/15 bg-white/[0.025] sm:h-[30rem] sm:w-[30rem]" />
        <div className="absolute bottom-12 right-[8%] hidden h-32 w-32 rounded-full border border-[#4da3ff]/30 lg:block" />

        <div className="mx-auto flex min-h-[720px] max-w-7xl flex-col justify-between px-4 pb-10 pt-8 sm:min-h-[820px] sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-400">
            <Link href="/" className="transition hover:text-white">Home</Link><ChevronRight className="h-3 w-3" />
            <Link href="/services" className="transition hover:text-white">Services</Link><ChevronRight className="h-3 w-3" />
            <span aria-current="page" className="text-neutral-200">{data.name}</span>
          </nav>

          <div className="max-w-4xl py-14 sm:py-20">
            <ScrollReveal animation="fade-up" duration={800}>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#70b5ff]">{data.eyebrow}</p>
              <h1 className="mt-5 max-w-4xl text-5xl font-black uppercase leading-[.94] tracking-[-.06em] text-white sm:text-7xl lg:text-[5.7rem]">{data.h1}</h1>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-neutral-200 sm:text-lg">{data.summary}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <BookingLink />
                <Link href="/services" className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/20 active:translate-y-0">Compare services</Link>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-up" delay={150} className="max-w-md self-end sm:mr-[8%] lg:mr-[16%]">
            <div className="border border-white/15 bg-[#0b0d13]/75 p-5 shadow-2xl shadow-black/30 backdrop-blur-md sm:p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[#70b5ff]">Published starting point</p>
              <p className="mt-2 font-mono text-4xl font-bold tracking-[-.06em] text-white">{data.price}</p>
              <p className="mt-3 text-sm leading-6 text-neutral-300">Prices marked with a plus sign or as variable are confirmed after reviewing the vehicle and selected service.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0c0e14] py-20 sm:py-28">
        <div className="absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-[#1277ff]/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,.78fr)_minmax(0,1.22fr)] lg:gap-20 lg:px-8">
          <ScrollReveal animation="fade-right" className="relative mx-auto w-full max-w-md lg:mx-0">
            <div className="absolute -inset-3 border border-[#4da3ff]/25" />
            <div className="relative aspect-[4/5] overflow-hidden bg-[#111827]">
              <Image src="/images/autodetail/ceramic-coating-application.png" alt="Ceramic coating protection" fill sizes="(min-width: 1024px) 35vw, 90vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080a0e]/80 via-transparent" />
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-left" delay={100}>
            <span className="block h-px w-20 bg-[#4da3ff]" />
            <h2 className="mt-6 max-w-2xl text-4xl font-black leading-[.98] tracking-[-.045em] text-white sm:text-5xl">{intro.title}</h2>
            <Paragraphs paragraphs={intro.paragraphs} />
            <div className="mt-9 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2">
              {data.inclusions.map((item) => <div key={item} className="flex gap-3 text-sm leading-6 text-neutral-300"><Check className="mt-1 h-4 w-4 shrink-0 text-[#4da3ff]" />{item}</div>)}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#080a0e] py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:4rem_4rem]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up" className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[.28em] text-[#70b5ff]">{data.eyebrow}</p>
            <h2 className="mt-4 text-4xl font-black leading-[.98] tracking-[-.045em] text-white sm:text-5xl">{benefits.title}</h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,.56fr)_minmax(0,1.44fr)] lg:items-stretch">
            <ScrollReveal animation="fade-right" className="relative mx-auto w-full max-w-[360px] lg:mx-0 lg:h-full">
              <div className="absolute -inset-3 border border-[#4da3ff]/25" />
              <div className="relative aspect-[9/16] overflow-hidden bg-[#111827] shadow-2xl shadow-black/30 lg:h-full lg:aspect-auto">
                <video
                  aria-label="Ceramic coating water-repellency demonstration"
                  autoPlay
                  className="h-full w-full object-cover"
                  loop
                  muted
                  playsInline
                  poster="/videos/ceramic-coating-application-poster.webp"
                  preload="metadata"
                >
                  <source src="/videos/ceramic-coating-application-3x.mp4" type="video/mp4" />
                </video>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080a0e]/80 via-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between p-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/85">
                  <span>Ceramic coating in action</span>
                  <span className="rounded-full border border-white/25 bg-black/25 px-2 py-1">3×</span>
                </div>
              </div>
            </ScrollReveal>
            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
              {benefits.subsections?.map((benefit, index) => {
                return <ScrollReveal key={benefit.title} animation="fade-up" delay={index * 70} className="bg-[#080a0e] p-7 transition duration-300 hover:bg-[#101723] sm:p-8">
                  <div className="flex items-start justify-between gap-5">
                    <h3 className="max-w-sm text-xl font-bold leading-tight text-white">{benefit.title}</h3>
                    <CeramicBenefitIcon index={index} className="h-8 w-8 shrink-0 text-[#4da3ff]" />
                  </div>
                  <Paragraphs paragraphs={benefit.paragraphs} />
                </ScrollReveal>;
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#111722] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="overflow-x-auto border border-white/10 bg-[#0b0e14] shadow-[0_24px_80px_rgba(0,0,0,.28)]">
              <table className="min-w-[720px] w-full border-collapse text-left text-base sm:text-lg">
                <thead>
                  <tr className="border-b border-white/10 text-sm font-bold uppercase tracking-[.18em] text-neutral-400 sm:text-base">
                    <th scope="col" className="p-5 sm:p-6">Feature</th>
                    <th scope="col" className="p-5 sm:p-6">Traditional Wax</th>
                    <th scope="col" className="p-5 sm:p-6">Paint Sealant</th>
                    <th scope="col" className="border-x border-[#4da3ff]/25 bg-[#1277ff]/10 p-5 text-[#8ec7ff] sm:p-6">Ceramic Coating</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map(([feature, wax, sealant, coating]) => <tr key={feature} className="border-b border-white/[.07] last:border-b-0">
                    <th scope="row" className="p-5 font-semibold text-white sm:p-6">{feature}</th>
                    <td className="p-5 text-neutral-400 sm:p-6">{wax}</td>
                    <td className="p-5 text-neutral-300 sm:p-6">{sealant}</td>
                    <td className="border-x border-[#4da3ff]/25 bg-[#1277ff]/10 p-5 font-mono font-bold tracking-[.08em] text-[#8ec7ff] sm:p-6">{coating}</td>
                  </tr>)}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#0b0d12] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,.75fr)_minmax(19rem,.9fr)] xl:items-stretch xl:gap-12 lg:px-8">
          <ScrollReveal animation="fade-right">
            <h2 className="text-4xl font-black leading-[.98] tracking-[-.045em] text-white sm:text-5xl">{preparation.title}</h2>
            <Paragraphs paragraphs={preparation.paragraphs} />
            {preparation.subsections?.map((section) => <div key={section.title} className="mt-9 border-l-2 border-[#4da3ff] pl-5"><h3 className="text-xl font-bold text-white">{section.title}</h3><Paragraphs paragraphs={section.paragraphs} /></div>)}
          </ScrollReveal>
          <ScrollReveal animation="zoom-in" delay={120} className="relative overflow-hidden border border-white/10 bg-[#121722] p-7 sm:p-9">
            <div className="absolute right-0 top-0 h-20 w-20 border-b border-l border-[#4da3ff]/40" />
            <h2 className="max-w-md text-3xl font-black leading-[.98] tracking-[-.04em] text-white">{options.title}</h2>
            <Paragraphs paragraphs={options.paragraphs} />
            {options.subsections?.map((section) => <div key={section.title} className="mt-8 border-t border-white/10 pt-7"><h3 className="text-lg font-bold text-white">{section.title}</h3><Paragraphs paragraphs={section.paragraphs} /></div>)}
          </ScrollReveal>
          <ScrollReveal animation="zoom-in" delay={80} className="xl:h-full"><BeforeAfterSlider /></ScrollReveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0e61ce] py-20 sm:py-28">
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(255,255,255,.42)_1px,transparent_1px)] [background-size:1.2rem_1.2rem]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up" className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
            <div>
              <h2 className="max-w-md text-4xl font-black leading-[.98] tracking-[-.045em] text-white sm:text-5xl">{cost.title}</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto]">{cost.subsections?.map((section) => <div key={section.title} className="border border-white/20 bg-[#0753b7]/80 p-6 backdrop-blur-sm"><h3 className="text-xl font-bold text-white">{section.title}</h3>{section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 text-sm leading-7 text-white/85">{paragraph}</p>)}</div>)}<BookingLink label="Book Now" className="self-start bg-white !text-[#0753b7] shadow-black/20 hover:!bg-neutral-100" /></div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#0a0b0f] py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up"><h2 className="text-4xl font-black leading-[.98] tracking-[-.045em] text-white sm:text-5xl">{data.faqTitle}</h2></ScrollReveal>
          <div className="mt-12 border-t border-white/10">
            {data.faqs.map((faq, index) => <ScrollReveal key={faq.question} animation="fade-up" delay={index * 80}>
              <details className="group border-b border-white/10 py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold text-white marker:content-none"><span>{faq.question}</span><span className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/20 text-[#70b5ff] transition duration-300 group-open:rotate-45">+</span></summary>
                <p className="max-w-3xl pr-12 pt-4 text-sm leading-7 text-neutral-400 sm:text-base">{faq.answer}</p>
              </details>
            </ScrollReveal>)}
          </div>
          <ScrollReveal animation="zoom-in" className="mt-16 bg-[#1277ff] p-7 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-10">
            <div><h2 className="text-3xl font-black leading-tight text-white">{data.ctaTitle}</h2><p className="mt-3 max-w-xl text-sm leading-6 text-white/85">Tell us about your vehicle, its condition, and the service you are considering.</p></div>
            <BookingLink label="Book Now" className="mt-6 shrink-0 bg-[#080a0e] hover:bg-black sm:mt-0" />
          </ScrollReveal>
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4 text-sm">{data.related.map((link) => <Link key={link.href} href={link.href} className="inline-flex items-center gap-1 font-semibold text-[#70b5ff] transition hover:text-white">{link.label}<ArrowUpRight className="h-4 w-4" /></Link>)}</div>
        </div>
      </section>
    </SiteShell>
  );
}

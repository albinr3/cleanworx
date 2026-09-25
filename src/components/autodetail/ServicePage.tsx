import Image from "next/image";
import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";
import { BookingLink } from "@/components/autodetail/BookingLink";
import { SiteShell } from "@/components/autodetail/SiteShell";
import type { ContentSection } from "@/types/content";

export interface ServicePageData {
  slug: string;
  name: string;
  h1: string;
  eyebrow: string;
  summary: string;
  image: string;
  price: string;
  inclusions: string[];
  sections: ContentSection[];
  faqs: { question: string; answer: string }[];
  faqTitle: string;
  ctaTitle: string;
  related: { label: string; href: string }[];
}

export function ServicePage({ data }: { data: ServicePageData }) {
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
            addressCountry: "US"
          },
          url: "https://www.cleanworxnj.com"
        },
        areaServed: "Basking Ridge, New Jersey",
        url: `https://www.cleanworxnj.com/${data.slug}`
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cleanworxnj.com/" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://www.cleanworxnj.com/services" },
          { "@type": "ListItem", position: 3, name: data.name, item: `https://www.cleanworxnj.com/${data.slug}` }
        ]
      }
    ]
  };
  return <SiteShell><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><section className="relative isolate overflow-hidden border-b border-white/10"><Image src={data.image} alt={`${data.name} service at CleanWorx Auto Detailing & Ceramic Coating`} fill sizes="100vw" priority className="-z-20 object-cover opacity-80" /><div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0a0a0c]/90 via-[#0a0a0c]/50 to-transparent" /><div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8"><nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs text-neutral-400"><Link href="/" className="hover:text-white">Home</Link><ChevronRight className="h-3 w-3" /><Link href="/services" className="hover:text-white">Services</Link><ChevronRight className="h-3 w-3" /><span aria-current="page" className="text-neutral-200">{data.name}</span></nav><p className="text-xs font-bold uppercase tracking-[0.25em] text-[#4da3ff]">{data.eyebrow}</p><h1 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-[1.04] tracking-tight text-white drop-shadow-md sm:text-6xl lg:text-7xl">{data.h1}</h1><p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-200 sm:text-lg">{data.summary}</p><div className="mt-8 flex flex-wrap gap-3"><BookingLink /><Link href="/services" className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white hover:bg-white/10">Compare services</Link></div></div></section><section className="bg-[#0c0d11] py-16 sm:py-24"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8"><aside className="h-fit rounded-2xl border border-white/10 bg-[#14151a] p-6 sm:p-8"><p className="text-xs font-bold uppercase tracking-widest text-[#4da3ff]">Published starting point</p><p className="mt-2 text-3xl font-black text-white">{data.price}</p><p className="mt-2 text-sm text-neutral-400">Prices marked with a plus sign or as variable are confirmed after reviewing the vehicle and selected service.</p><ul className="mt-7 space-y-3 border-t border-white/10 pt-6">{data.inclusions.map((item) => <li key={item} className="flex gap-2 text-sm leading-relaxed text-neutral-300"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#1277ff]" />{item}</li>)}</ul></aside><div>{data.sections.map((section, index) => <section key={section.title} className={index === 0 ? "" : "mt-10 border-t border-white/10 pt-9"}><h2 className="text-2xl font-bold text-white sm:text-3xl">{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 text-sm leading-7 text-neutral-400 sm:text-base">{paragraph}</p>)}{section.subsections?.map((subsection) => <div key={subsection.title} className="mt-6"><h3 className="text-lg font-bold text-white">{subsection.title}</h3>{subsection.paragraphs.map((paragraph) => <p key={paragraph} className="mt-2 text-sm leading-7 text-neutral-400 sm:text-base">{paragraph}</p>)}</div>)}</section>)}</div></div></section><section className="bg-[#0a0a0c] py-16 sm:py-24"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><h2 className="text-3xl font-black text-white sm:text-4xl">{data.faqTitle}</h2><div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-[#14151a]">{data.faqs.map((faq) => <div key={faq.question} className="p-6"><h3 className="text-base font-bold text-white">{faq.question}</h3><p className="mt-2 text-sm leading-7 text-neutral-400">{faq.answer}</p></div>)}</div><div className="mt-12 rounded-2xl bg-[#1277ff] p-7 sm:flex sm:items-center sm:justify-between"><div><h2 className="text-2xl font-black text-white">{data.ctaTitle}</h2><p className="mt-2 text-sm text-white/85">Tell us about your vehicle, its condition, and the service you are considering.</p></div><BookingLink label="Book Now" className="mt-5 bg-[#0a0a0c] hover:bg-black sm:mt-0" /></div><div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm">{data.related.map((link) => <Link key={`${link.href}-${link.label}`} href={link.href} className="font-semibold text-[#4da3ff] hover:text-white">{link.label} →</Link>)}</div></div></section></SiteShell>;
}

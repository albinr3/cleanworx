import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPin } from "lucide-react";
import { BookingTrigger } from "@/components/autodetail/BookingTrigger";
import { SiteShell } from "@/components/autodetail/SiteShell";
import type { ContentSubsection } from "@/types/content";

export interface StandardSection { title: string; content: string[]; subsections?: ContentSubsection[]; }
export interface StandardPageProps { title: string; h1: string; description: string; image: string; sections: StandardSection[]; ctaTitle: string; links?: { label: string; href: string }[]; children?: React.ReactNode; }

export function StandardPage({ title, h1, description, image, sections, ctaTitle, links = [], children }: StandardPageProps) {
  const schema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.cleanworxnj.com/" }, { "@type": "ListItem", position: 2, name: title, item: `https://www.cleanworxnj.com/${title === "Services" ? "services" : title.toLowerCase().replaceAll(" ", "-")}` }] };
  return <SiteShell><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><section className="relative isolate overflow-hidden border-b border-white/10"><Image src={image} alt="CleanWorx auto detailing" fill sizes="100vw" priority className="-z-20 object-cover opacity-30" /><div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/90 to-[#0a0a0c]/50" /><div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8"><nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs text-neutral-400"><Link href="/" className="hover:text-white">Home</Link><ChevronRight className="h-3 w-3" /><span aria-current="page" className="text-neutral-200">{title}</span></nav><p className="text-xs font-bold uppercase tracking-[0.25em] text-[#4da3ff]">CleanWorx · Basking Ridge, NJ</p><h1 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-[1.04] tracking-tight text-white sm:text-6xl">{h1}</h1><p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-200 sm:text-lg">{description}</p><div className="mt-8 flex flex-wrap gap-3"><BookingTrigger /><a href="tel:+19088992832" className="rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white hover:bg-white/10">Call 908-899-2832</a></div></div></section><section className="bg-[#0c0d11] py-16 sm:py-24"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">{sections.map((section, index) => <section key={section.title} className={index === 0 ? "" : "mt-12 border-t border-white/10 pt-12"}><p className="text-xs font-bold uppercase tracking-widest text-[#4da3ff]">0{index + 1}</p><h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">{section.title}</h2>{section.content.map((paragraph) => <p key={paragraph} className="mt-5 text-sm leading-8 text-neutral-400 sm:text-base">{paragraph}</p>)}{section.subsections?.map((subsection) => <div key={subsection.title} className="mt-7"><h3 className="text-lg font-bold text-white">{subsection.title}</h3>{subsection.paragraphs.map((paragraph) => <p key={paragraph} className="mt-2 text-sm leading-7 text-neutral-400 sm:text-base">{paragraph}</p>)}</div>)}</section>)}{children}<div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-8 text-sm">{links.map((link) => <Link key={`${link.href}-${link.label}`} href={link.href} className="font-semibold text-[#4da3ff] hover:text-white">{link.label} →</Link>)}</div></div></section><section className="bg-[#1277ff] py-12"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8"><div><h2 className="text-2xl font-black text-white">{ctaTitle}</h2><p className="mt-2 text-sm text-white/85">Tell CleanWorx about your vehicle, the service you are considering, and your preferred timing.</p></div><BookingTrigger label="Book Now" className="bg-[#0a0a0c] hover:bg-black" /></div></section></SiteShell>;
}

export function ContactDetails() {
  return (
    <div className="mt-10 grid gap-4 rounded-2xl border border-white/10 bg-[#14151a] p-6 sm:grid-cols-2">
      <div className="flex gap-3">
        <MapPin className="h-5 w-5 shrink-0 text-[#1277ff]" />
        <div>
          <p className="font-bold text-white">CleanWorx Auto Detailing &amp; Ceramic Coating</p>
          <p className="mt-1 text-sm text-neutral-300">
            19 E. Henry Street<br />
            Basking Ridge, NJ 07920
          </p>
        </div>
      </div>
      <p className="text-sm leading-7 text-neutral-300">
        <strong className="text-white">Hours</strong><br />
        Monday–Saturday, 9:00 AM–5:00 PM<br />
        Closed Sunday
      </p>
    </div>
  );
}

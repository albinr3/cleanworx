import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight, CircleAlert, Clock3, MapPin, ShieldCheck, Sparkles, Sun } from "lucide-react";
import { BeforeAfterSlider } from "@/components/autodetail/BeforeAfterSlider";
import { BookingLink } from "@/components/autodetail/BookingLink";
import { ScrollReveal } from "@/components/autodetail/ScrollReveal";
import { SiteShell } from "@/components/autodetail/SiteShell";

const oxidationCauses = [
  { title: "UV exposure & sun damage", description: "Sunlight and UV rays gradually break down the factory protective layer on polycarbonate headlight lenses, turning the surface yellow and hazy." },
  { title: "Road film & environmental wear", description: "Road grime, chemical fallout, salt, moisture, and harsh New Jersey seasons coat car headlights, causing dulling and light scatter." },
  { title: "Micro-pitting & surface haze", description: "Pitted polycarbonate scatters forward beam projection, cutting down night visibility and dulling your vehicle's front end." },
];

const processSteps = [
  { title: "Decontamination & lens cleaning", description: "We wash, decontaminate, and tape off surrounding paintwork for clean, safe preparation." },
  { title: "Multi-stage wet sanding", description: "Progressive wet sanding steps level and remove the yellowed, oxidized outer layer of polycarbonate." },
  { title: "Machine headlight polishing", description: "Rotary and dual-action machine polishing refines the lens surface back to crystal-clear optical clarity." },
  { title: "2-year ceramic coating barrier", description: "A durable 2-year ceramic coating is hand-applied to seal the porous polycarbonate and defend against future UV oxidation." },
];

const faqs = [
  { question: "How much does headlight restoration cost?", answer: "A standalone Headlight Restoration appointment is $125 at our CleanWorx studio in Basking Ridge, NJ. If you are already booking an eligible interior, exterior, or ceramic detailing package, you can add headlight restoration for $75." },
  { question: "Why doesn't basic headlight cleaning or DIY kits provide lasting results?", answer: "Simple cleaning or DIY wipe kits only scrub surface road film or leave oily residue that washes away in the rain. Cloudiness and yellowing happen inside degraded polycarbonate plastic. Lasting clarity requires wet sanding to strip the damaged layer, machine polishing to restore light output, and a 2-year ceramic coating to seal the bare lens." },
  { question: "What is the difference between headlight polishing and full restoration?", answer: "Headlight polishing alone refines minor light haze, while a full auto headlight restoration service includes wet sanding deeply oxidized layers, multi-step compound polishing, and applying professional UV ceramic protection." },
  { question: "How long does headlight restoration take?", answer: "The standalone studio booking appointment is 45 minutes. Actual working time can vary depending on the severity of lens oxidation." },
  { question: "What is included with the car headlight restoration service?", answer: "Both front headlights are completely restored. The service includes decontamination cleaning, precision tape masking, multi-grade wet sanding, machine polishing, and a 2-year ceramic coating." },
  { question: "Can every headlight be restored?", answer: "Surface oxidation, yellowing, and external hazing are fully corrected. Internal assembly condensation, interior water staining, or physical cracks require headlight housing replacement and cannot be solved by exterior restoration." },
  { question: "Why protect restored headlights with ceramic coating?", answer: "Once sanded and polished, the bare polycarbonate has no factory UV filter. The 2-year ceramic coating forms a hard, hydrophobic shield that locks out UV rays, salt, and contaminants to keep headlights crystal-clear for years." },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Car & Auto Headlight Restoration Service",
      serviceType: "Headlight Restoration, Cleaning & Polishing",
      description: "Professional auto and car headlight restoration service in Basking Ridge, NJ. Includes multi-stage wet sanding, lens machine polishing, and a 2-year ceramic coating for lasting clarity.",
      image: "https://www.cleanworxnj.com/images/autodetail/cleanworx-headlight-restoration-basking-ridge.webp",
      url: "https://www.cleanworxnj.com/headlight-restoration",
      provider: {
        "@type": "AutoRepair",
        "@id": "https://www.cleanworxnj.com/#business",
        name: "CleanWorx Auto Detailing & Ceramic Coating",
        telephone: "+1-908-899-2832",
        address: { "@type": "PostalAddress", streetAddress: "19 E. Henry Street", addressLocality: "Basking Ridge", addressRegion: "NJ", postalCode: "07920", addressCountry: "US" },
      },
      areaServed: "Basking Ridge, New Jersey",
      offers: [
        { "@type": "Offer", name: "Headlight Restoration (Stand Alone)", price: "125.00", priceCurrency: "USD", url: "https://cleanworx-llc.square.site/" },
        { "@type": "Offer", name: "Headlight Restoration Add-On", price: "75.00", priceCurrency: "USD", url: "https://cleanworx-llc.square.site/" },
      ],
    },
    { "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cleanworxnj.com/" },
      { "@type": "ListItem", position: 2, name: "Headlight Restoration", item: "https://www.cleanworxnj.com/headlight-restoration" },
    ] },
  ],
};

export function HeadlightRestorationPage() {
  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#080b10]">
        <Image src="/images/autodetail/cleanworx-headlight-restoration-basking-ridge.webp" alt="CleanWorx technician machine polishing oxidized headlight lens in Basking Ridge, NJ studio" fill priority sizes="100vw" className="-z-20 object-cover object-[70%_center]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,11,16,.99)_0%,rgba(8,11,16,.94)_38%,rgba(8,11,16,.5)_66%,rgba(8,11,16,.16)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(8,11,16,.8)_0%,transparent_52%)]" />
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pb-24 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-300">
            <Link href="/" className="transition hover:text-white">Home</Link><ChevronRight className="h-3 w-3" /><span aria-current="page" className="text-neutral-100">Headlight Restoration</span>
          </nav>
          <div className="max-w-2xl pb-4 pt-16 sm:pt-24 lg:min-h-[540px] lg:pt-28">
            <div className="inline-flex items-center gap-2 border border-[#4da3ff]/30 bg-[#1277ff]/15 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#9bcaff]"><Sun className="h-3.5 w-3.5" />Car & Auto Headlight Restoration Service</div>
            <h1 className="mt-5 text-4xl font-black leading-[.98] tracking-[-.045em] text-white sm:text-5xl lg:text-6xl">Headlight Restoration in Basking Ridge, NJ</h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-200 sm:text-lg">Restore yellowed, foggy car headlights to crystal clarity. Our auto headlight restoration service combines deep cleaning, multi-stage wet sanding, machine polishing, and a 2-year ceramic coating for lasting night visibility.</p>
            <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-neutral-200"><span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-[#70b5ff]" />45-minute appointment</span><span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-[#70b5ff]" />Basking Ridge studio</span></div>
            <div className="mt-8"><BookingLink label="Book Headlight Restoration" /></div>
          </div>
        </div>
      </section>

      <section className="bg-[#0d1017] py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.12fr)_minmax(320px,.88fr)] lg:items-start lg:px-8">
          <ScrollReveal animation="fade-right">
            <p className="text-xs font-bold uppercase tracking-[.16em] text-[#70b5ff]">Headlight Restoration Cost & Options</p><h2 className="mt-3 max-w-2xl text-3xl font-black leading-[1] tracking-[-.04em] text-white sm:text-5xl">Professional Car Headlight Restoration Service</h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-300">Oxidation, yellowing, and haze make even well-maintained cars look tired while reducing nighttime driving safety. Our car headlight restoration service carefully eliminates the weathered outer layer, restores clarity with precision polishing, and locks in the finish with a 2-year ceramic coating.</p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-300">Both headlights are included. Book a dedicated 45-minute standalone appointment at our CleanWorx studio in Basking Ridge for $125, or add headlight restoration to any eligible full detail package for just $75.</p>
            <Link href="/add-ons" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#70b5ff] transition hover:text-white">Explore detailing add-ons <ArrowRight className="h-4 w-4" /></Link>
          </ScrollReveal>
          <ScrollReveal animation="fade-left" className="border border-[#4da3ff]/25 bg-[#111b2b] p-6 shadow-[0_24px_72px_rgba(0,0,0,.25)] sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[.16em] text-[#9bcaff]">Standalone studio appointment</p><p className="mt-3 text-5xl font-black tracking-[-.05em] text-white">$125</p><p className="mt-2 text-sm leading-6 text-neutral-300">45 minutes reserved through Square for Headlight Restoration (STAND ALONE).</p>
            <div className="mt-6 border-t border-white/10 pt-5"><p className="text-xs font-bold uppercase tracking-[.16em] text-[#9bcaff]">Eligible detailing add-on</p><p className="mt-2 text-3xl font-black tracking-[-.04em] text-white">$75</p><p className="mt-2 text-sm leading-6 text-neutral-300">Add headlight restoration to your eligible detailing appointment when booking through Square.</p></div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#0a0d13] py-16 sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up" className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.16em] text-[#70b5ff]">Why lenses lose clarity</p><h2 className="mt-3 text-3xl font-black leading-[1] tracking-[-.04em] text-white sm:text-5xl">Foggy headlights start at the surface.</h2></ScrollReveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">{oxidationCauses.map((cause, index) => <ScrollReveal key={cause.title} animation="fade-up" delay={index * 80} className="border border-white/10 bg-[#11151e] p-6"><span className="flex h-10 w-10 items-center justify-center bg-[#1277ff]/15 text-sm font-black text-[#70b5ff]">0{index + 1}</span><h3 className="mt-5 text-xl font-bold text-white">{cause.title}</h3><p className="mt-3 text-sm leading-6 text-neutral-300">{cause.description}</p></ScrollReveal>)}</div>
      </div></section>

      <section className="bg-[#0d1017] py-16 sm:py-24"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:items-center lg:px-8">
        <ScrollReveal animation="fade-right" className="relative aspect-square overflow-hidden border border-white/10 bg-[#111723]"><Image src="/images/autodetail/headlight-restoration-process.png" alt="Controlled wet sanding of a vehicle headlight with paint protected by masking tape" fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" /></ScrollReveal>
        <ScrollReveal animation="fade-left"><p className="text-xs font-bold uppercase tracking-[.16em] text-[#70b5ff]">Step-by-step restoration process</p><h2 className="mt-3 text-3xl font-black leading-[1] tracking-[-.04em] text-white sm:text-5xl">Headlight cleaning, multi-stage sanding & polishing.</h2><div className="mt-8 grid gap-5 sm:grid-cols-2">{processSteps.map((step, index) => <div key={step.title} className="border-l-2 border-[#1277ff] pl-5"><p className="text-xs font-black tracking-[.16em] text-[#70b5ff]">STEP 0{index + 1}</p><h3 className="mt-2 text-lg font-bold text-white">{step.title}</h3><p className="mt-2 text-sm leading-6 text-neutral-300">{step.description}</p></div>)}</div></ScrollReveal>
      </div></section>

      <section className="bg-[#0b0e14] py-16 sm:py-24"><div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,.9fr)] lg:items-center lg:px-8">
        <ScrollReveal animation="fade-right"><p className="text-xs font-bold uppercase tracking-[.16em] text-[#70b5ff]">2-year ceramic coating included</p><h2 className="mt-3 text-3xl font-black leading-[1] tracking-[-.04em] text-white sm:text-5xl">Why ceramic coating beats basic headlight cleaning.</h2><p className="mt-6 max-w-2xl text-base leading-7 text-neutral-300">Surface cleaning or quick polishing kits only provide temporary gloss without addressing UV protection. Once polycarbonate lenses are leveled and polished clear, they require durable barrier protection. The included 2-year ceramic coating chemically bonds to the polished lens, shielding your car headlights from UV oxidation, road film, and harsh New Jersey weather.</p></ScrollReveal>
        <ScrollReveal animation="fade-left" className="border border-[#4da3ff]/25 bg-[#111b2b] p-7 sm:p-8"><ShieldCheck className="h-9 w-9 text-[#70b5ff]" /><h3 className="mt-5 text-2xl font-black text-white">Included with every restoration</h3><ul className="mt-5 space-y-3 text-sm leading-6 text-neutral-200">{["Both car headlights restored", "Deep decontamination & lens cleaning", "Multi-step wet sanding & machine polishing", "2-year ceramic coating barrier", "$125 standalone studio appointment or $75 add-on"].map((item) => <li key={item} className="flex gap-3"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#70b5ff]" />{item}</li>)}</ul></ScrollReveal>
      </div></section>

      <section className="relative overflow-hidden bg-[#080a0e] py-16 sm:py-24"><div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:4rem_4rem]" /><div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up" className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.16em] text-[#70b5ff]">See the surface difference</p><h2 className="mt-3 text-3xl font-black leading-[1] tracking-[-.04em] text-white sm:text-5xl">Drag from oxidation to optical clarity.</h2><p className="mt-5 text-base leading-7 text-neutral-300">Move the handle to compare an oxidized car headlight lens with our restored, polished, and ceramic-coated finish.</p></ScrollReveal>
        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,.92fr)_minmax(0,1.08fr)] lg:items-center"><ScrollReveal animation="fade-right" className="relative mx-auto w-full max-w-[440px]"><div className="absolute -inset-4 rounded-3xl bg-[#1277ff]/15 blur-2xl" /><div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#111722] p-2.5 shadow-2xl"><BeforeAfterSlider beforeImage="/images/autodetail/headlight-restoration-before.png" afterImage="/images/autodetail/headlight-restoration-after.png" beforeAlt="Yellowed and oxidized vehicle headlight lens before restoration" afterAlt="Clear polished vehicle headlight lens after restoration" ariaLabel="Drag to compare headlight restoration before and after results" aspectRatio="4 / 5" className="w-full" /></div></ScrollReveal>
        <ScrollReveal animation="fade-left" className="border border-white/10 bg-[#11151e] p-7 sm:p-9"><Sparkles className="h-8 w-8 text-[#70b5ff]" /><h3 className="mt-5 text-3xl font-black leading-tight text-white">Clearer lenses. Maximum night driving safety.</h3><p className="mt-4 text-sm leading-7 text-neutral-300 sm:text-base">Cloudy lenses can diminish headlight beam output by over 50%. Instead of masking haze with temporary oils, our auto headlight restoration service levels degraded plastic, completes multi-stage headlight polishing, and locks in clarity with a 2-year ceramic coating.</p><BookingLink label="Book Headlight Restoration" className="mt-7" /></ScrollReveal></div>
      </div></section>

      <section className="bg-[#090b10] py-16 sm:py-24"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up"><p className="text-xs font-bold uppercase tracking-[.16em] text-[#70b5ff]">Before you book</p><h2 className="mt-3 text-3xl font-black leading-[1] tracking-[-.04em] text-white sm:text-5xl">Headlight restoration & polishing FAQs</h2></ScrollReveal>
        <div className="mt-10 border-t border-white/10">{faqs.map((faq, index) => <ScrollReveal key={faq.question} animation="fade-up" delay={index * 70}><details className="group border-b border-white/10 py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold text-white marker:content-none"><span>{faq.question}</span><span className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/20 text-[#70b5ff] transition duration-300 group-open:rotate-45">+</span></summary><p className="max-w-3xl pt-4 text-sm leading-7 text-neutral-300 sm:text-base">{faq.answer}</p></details></ScrollReveal>)}</div>
        <ScrollReveal animation="fade-up" className="mt-14 border border-[#4da3ff]/35 bg-[#1277ff] p-7 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-10"><div><h2 className="text-3xl font-black leading-tight text-white">Book headlight restoration at our Basking Ridge studio.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-white/85">Reserve your 45-minute standalone appointment or add headlight restoration to an eligible detailing package.</p></div><BookingLink label="Book Headlight Restoration" className="mt-6 shrink-0 bg-[#080a0e] hover:bg-black sm:mt-0" /></ScrollReveal>
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm"><Link href="/add-ons" className="font-semibold text-[#70b5ff] transition hover:text-white">Specialized Add-Ons <span aria-hidden="true">→</span></Link><Link href="/exterior-detailing" className="font-semibold text-[#70b5ff] transition hover:text-white">Exterior Detailing <span aria-hidden="true">→</span></Link><Link href="/ceramic-coating" className="font-semibold text-[#70b5ff] transition hover:text-white">Ceramic Coating <span aria-hidden="true">→</span></Link><Link href="/contact" className="font-semibold text-[#70b5ff] transition hover:text-white">Contact CleanWorx <span aria-hidden="true">→</span></Link></div>
        <p className="mt-8 flex items-start gap-2 text-xs leading-5 text-neutral-500"><CircleAlert className="mt-0.5 h-4 w-4 shrink-0 text-neutral-400" />This service is performed at our Basking Ridge studio. Internal condensation, interior moisture, and physical cracks require housing replacement and cannot be solved with exterior restoration.</p>
      </div></section>
    </SiteShell>
  );
}

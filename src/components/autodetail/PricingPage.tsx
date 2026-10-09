import { Check, Phone } from "lucide-react";
import { ADD_ON_PRICES, CERAMIC_PACKAGES, DETAILING_PACKAGES, type PricingPackage } from "@/data/pricingData";
import { ScrollReveal } from "@/components/autodetail/ScrollReveal";
import { SiteShell } from "@/components/autodetail/SiteShell";

function PackageTable({ packageData }: { packageData: PricingPackage }) {
  return (
    <article className="overflow-hidden border border-white/10 bg-[#14151a] shadow-2xl shadow-black/20">
      <div className="border-b border-white/10 bg-[#10131a] px-5 py-5 sm:px-6">
        <h2 className="text-xl font-black text-white">{packageData.name}</h2>
        {packageData.detail ? <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#70b5ff]">{packageData.detail}</p> : null}
      </div>
      <dl className="divide-y divide-white/10 px-5 sm:px-6">
        {packageData.prices.map(({ vehicle, price }) => (
          <div key={vehicle} className="flex items-center justify-between gap-4 py-3.5 text-sm">
            <dt className="text-neutral-300">{vehicle}</dt>
            <dd className="font-mono text-base font-bold text-white">${price}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

export function PricingPage() {
  return (
    <SiteShell>
      <section className="border-b border-white/10 bg-[#0a0a0c] py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up" className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#4da3ff]">CleanWorx pricing</p>
            <h1 className="mt-4 text-4xl font-black uppercase leading-[.98] tracking-[-.045em] text-white sm:text-6xl">Service Packages &amp; Pricing</h1>
            <p className="mt-5 text-base leading-relaxed text-neutral-300 sm:text-lg">Choose the package that fits your vehicle. All prices are subject to change upon inspection of the vehicle.</p>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={100} className="mt-8 flex gap-3 border border-[#1277ff]/35 bg-[#1277ff]/10 p-4 text-sm leading-6 text-neutral-200 sm:max-w-3xl">
            <Check className="mt-1 h-4 w-4 shrink-0 text-[#70b5ff]" />
            <p><strong className="text-white">Mobile service:</strong> a $35 mobile service fee applies to all mobile appointments. Window Tinting is available in shop only.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#0d0e12] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up"><h2 className="text-3xl font-black text-white sm:text-4xl">Detailing Packages</h2></ScrollReveal>
          <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {DETAILING_PACKAGES.map((packageData, index) => <ScrollReveal key={packageData.name} animation="fade-up" delay={index * 45}><PackageTable packageData={packageData} /></ScrollReveal>)}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#101722] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up"><p className="text-xs font-bold uppercase tracking-[0.28em] text-[#70b5ff]">Paint protection</p><h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Ceramic Coating Packages</h2></ScrollReveal>
          <div className="mt-9 grid gap-5 lg:grid-cols-3">
            {CERAMIC_PACKAGES.map((packageData, index) => <ScrollReveal key={packageData.name} animation="fade-up" delay={index * 60}><PackageTable packageData={packageData} /></ScrollReveal>)}
          </div>
        </div>
      </section>

      <section className="bg-[#0d0e12] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up"><h2 className="text-3xl font-black text-white sm:text-4xl">Additional Services</h2></ScrollReveal>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {ADD_ON_PRICES.map((addOn, index) => <ScrollReveal key={addOn.name} animation="fade-up" delay={index * 60} className="border border-white/10 bg-[#14151a] p-6"><h3 className="text-lg font-bold text-white">{addOn.name}</h3>{addOn.addOn ? <p className="mt-5 font-mono text-base font-bold text-[#70b5ff]">{addOn.addOn}</p> : null}{addOn.standalone ? <p className="mt-2 text-sm font-semibold text-neutral-200">{addOn.standalone}</p> : null}{addOn.note ? <p className="mt-5 text-sm leading-6 text-neutral-300">{addOn.note}</p> : null}</ScrollReveal>)}
          </div>
          <ScrollReveal animation="fade-up" className="mt-12 flex flex-col justify-between gap-5 bg-[#1277ff] p-7 sm:flex-row sm:items-center sm:p-9"><div><h2 className="text-2xl font-black text-white">Questions about your vehicle?</h2><p className="mt-2 text-sm text-white/90">Call us for availability and a confirmed price.</p></div><a href="tel:+19088992832" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#080a0e] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-black"><Phone className="h-4 w-4" />908-899-2832</a></ScrollReveal>
        </div>
      </section>
    </SiteShell>
  );
}

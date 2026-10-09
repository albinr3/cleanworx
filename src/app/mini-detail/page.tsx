import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronRight, Clock3 } from "lucide-react";
import { BookingLink } from "@/components/autodetail/BookingLink";
import { SiteShell } from "@/components/autodetail/SiteShell";

const image = "/images/autodetail/mini-detail-foam-covered-wagon.webp";
const bookingUrl = "https://book.squareup.com/appointments/zaytwokypbkwju/location/LTG6WA905VGVV/services/JXK72CJDYWYTKO3W6MPCJSJI";

const inclusions = [
  "Three-bucket exterior hand wash",
  "Gentle air cleaning, interior vacuum, and plastic wipe-down",
  "Wheels, tires, and door jambs cleaned",
  "Spray wax finish and tire shine",
];

export const metadata: Metadata = {
  title: { absolute: "Mini Detail in Basking Ridge, NJ | CleanWorx" },
  description:
    "Keep your vehicle clean between full details with a Mini Detail: hand wash, light interior cleaning, spray wax, and tire shine. From $95 in Basking Ridge, NJ.",
  alternates: { canonical: "/mini-detail" },
  openGraph: {
    title: "Mini Detail in Basking Ridge, NJ | CleanWorx",
    description:
      "Monthly maintenance after a Full Detail, with a three-bucket hand wash and light interior care. From $95.",
    url: "https://www.cleanworxnj.com/mini-detail",
    images: [{ url: image, alt: "Sport wagon covered in foam during an exterior wash" }],
  },
};

export default function MiniDetailPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Mini Detail",
        description:
          "A three-bucket exterior hand wash and light interior cleaning for routine vehicle maintenance.",
        url: "https://www.cleanworxnj.com/mini-detail",
        provider: { "@id": "https://www.cleanworxnj.com/#business" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cleanworxnj.com/" },
          { "@type": "ListItem", position: 2, name: "Mini Detail", item: "https://www.cleanworxnj.com/mini-detail" },
        ],
      },
    ],
  };

  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="border-b border-white/10 bg-[#0a0a0c]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 text-xs text-neutral-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="h-3 w-3" aria-hidden="true" />
              <span aria-current="page" className="text-neutral-200">Mini Detail</span>
            </nav>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#4da3ff]">CleanWorx · Basking Ridge, NJ</p>
            <h1 className="mt-4 text-5xl font-black uppercase leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">Mini Detail</h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-neutral-300 sm:text-lg">
              A careful hand wash and light interior clean to keep your vehicle looking its best between deep details.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-y border-white/10 py-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">Starting at</p>
                <p className="mt-1 text-3xl font-black text-white">$95</p>
              </div>
              <div className="flex items-center gap-2 text-neutral-300">
                <Clock3 className="h-5 w-5 text-[#4da3ff]" aria-hidden="true" />
                <span>1 hour or more</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-neutral-400">Final price and time depend on vehicle size and condition.</p>
            <BookingLink href={bookingUrl} label="Book Mini Detail" className="mt-7" />
          </div>
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-white/10 bg-[#14151a] lg:aspect-square">
            <Image
              src={image}
              alt="Sport wagon covered in foam during an exterior wash"
              fill
              sizes="(max-width: 1023px) 100vw, 45vw"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#0c0d11] py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#4da3ff]">The package</p>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">What&apos;s Included</h2>
            <p className="mt-5 text-base leading-8 text-neutral-400">
              Mini Detail covers the exterior and the everyday touchpoints inside your vehicle. It is a maintenance clean, with a focused scope and a shorter appointment than a Full Detail.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {inclusions.map((item) => (
              <li key={item} className="flex gap-3 rounded-xl border border-white/10 bg-[#14151a] p-5 text-sm leading-6 text-neutral-200">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#4da3ff]" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#101722] py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#4da3ff]">After a Full Detail</p>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">An Easy Monthly Maintenance Routine</h2>
          <p className="mt-6 text-base leading-8 text-neutral-300">
            Most customers who book a Full Detail choose Mini Detail for monthly maintenance afterward. The regular hand wash, interior vacuum, and surface wipe-down help keep the vehicle clean between deeper appointments.
          </p>
          <p className="mt-4 text-base leading-8 text-neutral-300">
            If your vehicle needs deeper interior cleaning or more extensive exterior treatment, start with a Full Detail. Learn what that service can include in our{" "}
            <Link href="/#full-detail" className="font-semibold text-[#70b5ff] underline decoration-[#70b5ff]/40 underline-offset-4 hover:text-white">Full Detailing Process</Link>.
          </p>
        </div>
      </section>

      <section className="bg-[#0c0d11] py-16 sm:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#4da3ff]">Keep it clean</p>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Ready for Your Mini Detail?</h2>
            <p className="mt-3 text-sm leading-7 text-neutral-400">Choose your vehicle in Square to see its appointment option.</p>
          </div>
          <BookingLink href={bookingUrl} label="Book Mini Detail" />
        </div>
      </section>
    </SiteShell>
  );
}

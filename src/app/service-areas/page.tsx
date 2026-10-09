import type { Metadata } from "next";
import Link from "next/link";
import { StandardPage } from "@/components/autodetail/StandardPage";
import { cityPages, citySlugs } from "@/data/cityServicePages";

export const metadata: Metadata = {
  title: {
    absolute: "Auto Detailing Service Areas in NJ | CleanWorx",
  },
  description:
    "Explore CleanWorx auto detailing service guides for Woodbridge, Edison, Westfield, Cranford, and Bridgewater, NJ. In-shop and eligible mobile appointments.",
  alternates: { canonical: "/service-areas" },
  openGraph: {
    title: "Auto Detailing Service Areas in NJ | CleanWorx",
    description:
      "Explore CleanWorx auto detailing service guides for Woodbridge, Edison, Westfield, Cranford, and Bridgewater, NJ. In-shop and eligible mobile appointments.",
    url: "https://www.cleanworxnj.com/service-areas",
    images: [
      {
        url: "/images/cleanworx-logo.webp",
        width: 1200,
        height: 630,
        alt: "CleanWorx Service Areas Basking Ridge NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Detailing Service Areas in NJ | CleanWorx",
    description:
      "Explore CleanWorx auto detailing service guides for Woodbridge, Edison, Westfield, Cranford, and Bridgewater, NJ. In-shop and eligible mobile appointments.",
    images: ["/images/cleanworx-logo.webp"],
  },
};

export default function Page() {
  return (
    <StandardPage
      title="Service Areas"
      h1="Auto Detailing Service Areas in New Jersey"
      description="CleanWorx Auto Detailing & Ceramic Coating is based in Basking Ridge and serves nearby New Jersey communities through in-shop and eligible mobile appointment options."
      image="/images/autodetail/cleanworx-service-areas-somerset-county-nj.webp"
      ctaTitle="Confirm an Appointment"
      childrenPosition="before"
      containerMaxWidth="max-w-7xl"
      sections={[
        {
          title: "Based in Basking Ridge, Serving Nearby Communities",
          content: [
            "CleanWorx Auto Detailing & Ceramic Coating is located at 19 E. Henry Street in Basking Ridge, NJ 07920. Mobile availability is confirmed for each request."
          ]
        },
        {
          title: "Current Service Areas",
          content: [
            "We provide dedicated in-shop services at our Basking Ridge location and dispatch fully self-contained mobile detailing units across the following New Jersey towns:"
          ],
          subsections: [
            {
              title: "Somerset County and Nearby Communities",
              paragraphs: [
                "Basking Ridge, Bernardsville, Bernards, Far Hills, Bedminster, Peapack-Gladstone, Liberty Corner, Warren, Bridgewater, Martinsville, Somerville, and Somerset."
              ]
            },
            {
              title: "Morris County and Nearby Communities",
              paragraphs: [
                "Morristown, Mendham, Chester, Madison, Morris Plains, Morris Township, Parsippany, Florham Park, Whippany, and Stirling."
              ]
            },
            {
              title: "Union County and Nearby Communities",
              paragraphs: [
                "Westfield, Cranford, Berkeley Heights, Watchung, Scotch Plains, New Providence, and Gillette."
              ]
            },
            {
              title: "Middlesex County and Nearby Communities",
              paragraphs: [
                "Woodbridge and Edison. Confirm the requested service and any mobile appointment details before scheduling."
              ]
            }
          ]
        },
        {
          title: "Mobile and In-Shop Appointment Options",
          content: [
            "One $50 mobile fee applies when the pre-fee appointment subtotal is below $400. Appointments of $400 or more have no mobile fee. We confirm mobile availability and scheduling directly."
          ]
        },
        {
          title: "Confirm Availability for Your Town",
          content: [
            "Share your vehicle, service need, town, and preferred timing so CleanWorx can confirm a practical appointment path."
          ]
        },
        {
          title: "Service Area Questions",
          content: [
            "Have a question about whether our mobile detailing rig travels to your neighborhood? Call or text 908-899-2832 and we will confirm our current schedule."
          ]
        }
      ]}
      links={[
        { label: "Mobile auto detailing", href: "/mobile-auto-detailing" },
        { label: "Specialized add-ons", href: "/add-ons" },
        { label: "Contact CleanWorx", href: "/contact" },
        { label: "Frequently asked questions", href: "/faq" }
      ]}
    >
      <section aria-labelledby="city-guides" className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#4da3ff]">Local service guides</p>
          <h2 id="city-guides" className="mt-3 text-3xl font-black text-white sm:text-4xl">Explore Your Area</h2>
          <p className="mt-4 text-sm leading-7 text-neutral-400">
            Compare available services and appointment options for these New Jersey communities.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {citySlugs.map((slug) => (
            <Link
              key={slug}
              href={`/service-areas/${slug}`}
              className="rounded-xl border border-white/10 bg-[#14151a] p-5 hover:border-[#4da3ff]"
            >
              <span className="text-lg font-bold text-white">{cityPages[slug].city}, NJ</span>
              <span className="mt-2 block text-sm text-neutral-400">Detailing and specialist service guide →</span>
            </Link>
          ))}
        </div>
      </section>
    </StandardPage>
  );
}

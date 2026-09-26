import type { Metadata } from "next";
import Image from "next/image";
import { StandardPage } from "@/components/autodetail/StandardPage";

export const metadata: Metadata = {
  title: {
    absolute: "Auto Detailing Portfolio | CleanWorx Basking Ridge",
  },
  description:
    "View CleanWorx detailing results: certified ceramic coatings, paint correction mirror finishes, interior steam restorations, and mobile details.",
  alternates: { canonical: "/our-work" },
  openGraph: {
    title: "Auto Detailing Portfolio | CleanWorx Basking Ridge",
    description:
      "View CleanWorx detailing results: certified ceramic coatings, paint correction mirror finishes, interior steam restorations, and mobile details.",
    url: "https://www.cleanworxnj.com/our-work",
    images: [
      {
        url: "/images/autodetail/4-2.webp",
        width: 1200,
        height: 630,
        alt: "CleanWorx Detailing Portfolio Basking Ridge NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Detailing Portfolio | CleanWorx Basking Ridge",
    description:
      "View CleanWorx detailing results: certified ceramic coatings, paint correction mirror finishes, interior steam restorations, and mobile details.",
    images: ["/images/autodetail/4-2.webp"],
  },
};
const images = ["/images/autodetail/4-2.webp", "/images/autodetail/4-1.webp", "/images/autodetail/5-2.webp", "/images/autodetail/5-1.webp", "/images/autodetail/2-2.webp", "/images/autodetail/2.webp", "/images/autodetail/1-2.webp", "/images/autodetail/3-3.webp"];

export default function Page() {
  return (
    <StandardPage
      title="Our Work"
      h1="Our Detailing Work"
      description="Browse current CleanWorx Auto Detailing & Ceramic Coating imagery and explore the service category that fits your vehicle."
      image="/images/autodetail/c1-1536x575.webp"
      ctaTitle="Start Your Project With CleanWorx"
      sections={[
        {
          title: "Ceramic Coating Projects",
          content: ["See the deep gloss and mirror-like reflection achieved through our certified System X ceramic coating packages in Basking Ridge, NJ."],
          subsections: [
            {
              title: "Certified Protection Results",
              paragraphs: ["Our multi-year coatings shield daily drivers, family SUVs, and sports cars from UV fading, acid rain, and harsh winter road salt."]
            }
          ]
        },
        {
          title: "Paint Correction & Swirl Removal",
          content: ["Browse examples of paint clarity restoration. Multi-stage machine polishing safely removes swirl marks, spiderwebbing, and dull hazing."],
          subsections: [
            {
              title: "Mirror Clarity Restoration",
              paragraphs: ["Every correction project begins with digital paint depth readings to ensure safe, repeatable results across all vehicle panels."]
            }
          ]
        },
        {
          title: "Deep Interior Restoration",
          content: ["From family vehicles with stubborn stains to fine leather interiors needing conditioning, our commercial steam extraction brings cabins back to showroom condition."],
          subsections: [
            {
              title: "Steam Cleaning & Extraction",
              paragraphs: ["High-heat steam sanitizes surfaces, removes embedded pet hair, and lifts deep carpet dirt without leaving harsh chemical odors."]
            }
          ]
        },
        {
          title: "Exterior Hand Detailing & Mobile Visits",
          content: ["Explore our scratch-free two-bucket hand washes, chemical decontamination, and mobile detailing visits dispatched throughout Somerset and Morris counties."],
          subsections: [
            {
              title: "Studio & Mobile Detailing",
              paragraphs: ["Drop your car off at our 19 E. Henry Street studio in Basking Ridge or schedule convenient mobile care right in your own driveway."]
            }
          ]
        }
      ]}
      links={[{ label: "Ceramic coating", href: "/ceramic-coating" }, { label: "Paint correction", href: "/paint-correction" }, { label: "Interior detailing", href: "/interior-detailing" }, { label: "Exterior detailing", href: "/exterior-detailing" }, { label: "Mobile auto detailing", href: "/mobile-auto-detailing" }]}
    >
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((src, index) => (
          <div key={src} className="relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-[#14151a]">
            <Image
              src={src}
              alt={`CleanWorx Auto Detailing & Ceramic Coating gallery image ${index + 1}`}
              fill
              sizes="(max-width: 639px) 50vw, (max-width: 1023px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </StandardPage>
  );
}

import type { Metadata } from "next";
import { PaintCorrectionPage } from "@/components/autodetail/PaintCorrectionPage";
import { servicePages } from "@/data/servicePageData";
export const metadata: Metadata = {
  title: {
    absolute: "Paint Correction in Basking Ridge, NJ | CleanWorx",
  },
  description:
    "Professional paint correction & swirl removal in Basking Ridge, NJ. Multi-stage machine polishing restores mirror clarity. Packages start at $350.",
  alternates: { canonical: "/paint-correction" },
  openGraph: {
    title: "Paint Correction in Basking Ridge, NJ | CleanWorx",
    description:
      "Professional paint correction & swirl removal in Basking Ridge, NJ. Multi-stage machine polishing restores mirror clarity. Packages start at $350.",
    url: "https://www.cleanworxnj.com/paint-correction",
    images: [
      {
        url: "/images/autodetail/paint-correction-hero.jpg",
        width: 1200,
        height: 630,
        alt: "CleanWorx Paint Correction Basking Ridge NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paint Correction in Basking Ridge, NJ | CleanWorx",
    description:
      "Professional paint correction & swirl removal in Basking Ridge, NJ. Multi-stage machine polishing restores mirror clarity. Packages start at $350.",
    images: ["/images/autodetail/paint-correction-hero.jpg"],
  },
};
export default function Page() { return <PaintCorrectionPage data={servicePages["paint-correction"]} />; }

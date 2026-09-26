import type { Metadata } from "next";
import { ExteriorDetailingPage } from "@/components/autodetail/ExteriorDetailingPage";
import { servicePages } from "@/data/servicePageData";
export const metadata: Metadata = {
  title: {
    absolute: "Exterior Car Detailing in Basking Ridge, NJ | CleanWorx",
  },
  description:
    "Professional exterior car detailing in Basking Ridge, NJ. Scratch-free hand wash, chemical iron decon, clay-bar finish & 6-month ceramic wax. Studio or mobile.",
  alternates: { canonical: "/exterior-detailing" },
  openGraph: {
    title: "Exterior Car Detailing in Basking Ridge, NJ | CleanWorx",
    description:
      "Professional exterior car detailing in Basking Ridge, NJ. Scratch-free hand wash, chemical iron decon, clay-bar finish & 6-month ceramic wax. Studio or mobile.",
    url: "https://www.cleanworxnj.com/exterior-detailing",
    images: [
      {
        url: "/images/autodetail/cleanworx-hand-wash-lotus.webp",
        width: 1200,
        height: 630,
        alt: "CleanWorx Exterior Car Detailing Basking Ridge NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exterior Car Detailing in Basking Ridge, NJ | CleanWorx",
    description:
      "Professional exterior car detailing in Basking Ridge, NJ. Scratch-free hand wash, chemical iron decon, clay-bar finish & 6-month ceramic wax. Studio or mobile.",
    images: ["/images/autodetail/cleanworx-hand-wash-lotus.webp"],
  },
};
export default function Page() { return <ExteriorDetailingPage data={servicePages["exterior-detailing"]} />; }

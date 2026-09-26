import type { Metadata } from "next";
import { CeramicCoatingPage } from "@/components/autodetail/CeramicCoatingPage";
import { servicePages } from "@/data/servicePageData";
export const metadata: Metadata = {
  title: {
    absolute: "Ceramic Coating in Basking Ridge, NJ | CleanWorx",
  },
  description:
    "Certified System X ceramic coating in Basking Ridge, NJ. 1, 3 & 5-year warrantied protection, paint correction prep, and extreme hydrophobic gloss.",
  alternates: { canonical: "/ceramic-coating" },
  openGraph: {
    title: "Ceramic Coating in Basking Ridge, NJ | CleanWorx",
    description:
      "Certified System X ceramic coating in Basking Ridge, NJ. 1, 3 & 5-year warrantied protection, paint correction prep, and extreme hydrophobic gloss.",
    url: "https://www.cleanworxnj.com/ceramic-coating",
    images: [
      {
        url: "/images/autodetail/ceramic-coating-hero.jpg",
        width: 1200,
        height: 630,
        alt: "CleanWorx Ceramic Coating Basking Ridge NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ceramic Coating in Basking Ridge, NJ | CleanWorx",
    description:
      "Certified System X ceramic coating in Basking Ridge, NJ. 1, 3 & 5-year warrantied protection, paint correction prep, and extreme hydrophobic gloss.",
    images: ["/images/autodetail/ceramic-coating-hero.jpg"],
  },
};
export default function Page() { return <CeramicCoatingPage data={servicePages["ceramic-coating"]} />; }

import type { Metadata } from "next";
import { MobileDetailingPage } from "@/components/autodetail/MobileDetailingPage";
import { servicePages } from "@/data/servicePageData";
export const metadata: Metadata = {
  title: {
    absolute: "Mobile Auto Detailing in Basking Ridge, NJ | CleanWorx",
  },
  description:
    "Professional mobile auto detailing brought to your driveway across Basking Ridge, NJ. A $35 mobile service fee applies to every eligible mobile appointment.",
  alternates: { canonical: "/mobile-auto-detailing" },
  openGraph: {
    title: "Mobile Auto Detailing in Basking Ridge, NJ | CleanWorx",
    description:
      "Professional mobile auto detailing brought to your driveway across Basking Ridge, NJ. A $35 mobile service fee applies to every eligible mobile appointment.",
    url: "https://www.cleanworxnj.com/mobile-auto-detailing",
    images: [
      {
        url: "/images/autodetail/cleanworx-exterior-hand-wash-foam-cannon.webp",
        width: 1200,
        height: 630,
        alt: "CleanWorx Mobile Auto Detailing Basking Ridge NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Auto Detailing in Basking Ridge, NJ | CleanWorx",
    description:
      "Professional mobile auto detailing brought to your driveway across Basking Ridge, NJ. A $35 mobile service fee applies to every eligible mobile appointment.",
    images: ["/images/autodetail/cleanworx-exterior-hand-wash-foam-cannon.webp"],
  },
};
export default function Page() { return <MobileDetailingPage data={servicePages["mobile-auto-detailing"]} />; }

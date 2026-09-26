import type { Metadata } from "next";
import { ServicePage } from "@/components/autodetail/ServicePage";
import { servicePages } from "@/data/servicePageData";
export const metadata: Metadata = {
  title: {
    absolute: "Mobile Auto Detailing in Basking Ridge, NJ | CleanWorx",
  },
  description:
    "Professional mobile auto detailing brought to your driveway across Basking Ridge, NJ. Fully equipped van with spot-free water & power. Flat $35 fee.",
  alternates: { canonical: "/mobile-auto-detailing" },
  openGraph: {
    title: "Mobile Auto Detailing in Basking Ridge, NJ | CleanWorx",
    description:
      "Professional mobile auto detailing brought to your driveway across Basking Ridge, NJ. Fully equipped van with spot-free water & power. Flat $35 fee.",
    url: "https://www.cleanworxnj.com/mobile-auto-detailing",
    images: [
      {
        url: "/images/autodetail/1-2.webp",
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
      "Professional mobile auto detailing brought to your driveway across Basking Ridge, NJ. Fully equipped van with spot-free water & power. Flat $35 fee.",
    images: ["/images/autodetail/1-2.webp"],
  },
};
export default function Page() { return <ServicePage data={servicePages["mobile-auto-detailing"]} />; }

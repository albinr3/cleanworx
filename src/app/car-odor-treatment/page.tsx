import type { Metadata } from "next";
import { CarOdorTreatmentPage } from "@/components/autodetail/CarOdorTreatmentPage";

export const metadata: Metadata = {
  title: {
    absolute: "Car Odor & Smoke Smell Removal, Basking Ridge | CleanWorx",
  },
  description:
    "Smoke odor and car smell removal in Basking Ridge, NJ. Cigarette, cigar, and marijuana smoke odor removal with ozone air purification at our studio.",
  alternates: { canonical: "/car-odor-treatment" },
  openGraph: {
    title: "Car Odor & Smoke Smell Removal, Basking Ridge | CleanWorx",
    description:
      "Smoke odor and car smell removal in Basking Ridge, NJ. Cigarette, cigar, and marijuana smoke removal with ozone treatment.",
    url: "https://www.cleanworxnj.com/car-odor-treatment",
    images: [
      {
        url: "/images/autodetail/car-odor-treatment-hero.png",
        width: 1776,
        height: 888,
        alt: "Vehicle receiving ozone air purification at the CleanWorx detail studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Odor & Smoke Smell Removal, Basking Ridge | CleanWorx",
    description:
      "Smoke odor and car smell removal in Basking Ridge, NJ. Cigarette, cigar, and marijuana smoke removal with ozone treatment.",
    images: ["/images/autodetail/car-odor-treatment-hero.png"],
  },
};

export default function Page() {
  return <CarOdorTreatmentPage />;
}

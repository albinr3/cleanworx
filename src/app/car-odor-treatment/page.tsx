import type { Metadata } from "next";
import { CarOdorTreatmentPage } from "@/components/autodetail/CarOdorTreatmentPage";

export const metadata: Metadata = {
  title: {
    absolute: "Car Odor & Smoke Smell Removal, Basking Ridge | CleanWorx",
  },
  description:
    "Car smell and smoke odor removal in Basking Ridge, NJ. Book a USD 125 ozone treatment or add car air purification to an interior detail.",
  alternates: { canonical: "/car-odor-treatment" },
  openGraph: {
    title: "Car Odor & Smoke Smell Removal, Basking Ridge | CleanWorx",
    description:
      "Car smell and smoke odor removal with ozone treatment at the CleanWorx Basking Ridge studio.",
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
      "Car smell and smoke odor removal with ozone treatment at the CleanWorx Basking Ridge studio.",
    images: ["/images/autodetail/car-odor-treatment-hero.png"],
  },
};

export default function Page() {
  return <CarOdorTreatmentPage />;
}

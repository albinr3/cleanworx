import type { Metadata } from "next";
import { PricingPage } from "@/components/autodetail/PricingPage";

export const metadata: Metadata = {
  title: { absolute: "Auto Detailing Pricing in Basking Ridge, NJ | CleanWorx" },
  description: "Explore CleanWorx pricing for interior, exterior, full detailing, ceramic coating, and additional services in Basking Ridge, NJ.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Auto Detailing Pricing in Basking Ridge, NJ | CleanWorx",
    description: "Explore CleanWorx pricing for detailing packages, ceramic coatings, and additional services.",
    url: "https://www.cleanworxnj.com/pricing",
  },
};

export default function Page() {
  return <PricingPage />;
}

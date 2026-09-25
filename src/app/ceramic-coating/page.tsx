import type { Metadata } from "next";
import { CeramicCoatingPage } from "@/components/autodetail/CeramicCoatingPage";
import { servicePages } from "@/data/servicePageData";
export const metadata: Metadata = {
  title: "Ceramic Coating in Basking Ridge, NJ | CleanWorx Auto Detailing & Ceramic Coating",
  description: "Protect your vehicle with professional ceramic coating in Basking Ridge, NJ. Request a quote from CleanWorx Auto Detailing & Ceramic Coating for preparation, protection, and care.",
  alternates: { canonical: "/ceramic-coating" }
};
export default function Page() { return <CeramicCoatingPage data={servicePages["ceramic-coating"]} />; }

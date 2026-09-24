import type { Metadata } from "next";
import { ServicePage } from "@/components/autodetail/ServicePage";
import { servicePages } from "@/data/servicePageData";
export const metadata: Metadata = {
  title: "Ceramic Coating in Basking Ridge, NJ | CleanWorx Auto Detailing & Ceramic Coating",
  description: "Protect your vehicle with professional ceramic coating in Basking Ridge, NJ. Request a quote from CleanWorx Auto Detailing & Ceramic Coating for preparation, protection, and care.",
  alternates: { canonical: "/ceramic-coating" }
};
export default function Page() { return <ServicePage data={servicePages["ceramic-coating"]} />; }

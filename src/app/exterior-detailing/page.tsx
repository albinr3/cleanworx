import type { Metadata } from "next";
import { ServicePage } from "@/components/autodetail/ServicePage";
import { servicePages } from "@/data/servicePageData";
export const metadata: Metadata = {
  title: "Exterior Car Detailing in Basking Ridge, NJ | CleanWorx Auto Detailing & Ceramic Coating",
  description: "Choose professional exterior car detailing in Basking Ridge, NJ with CleanWorx Auto Detailing & Ceramic Coating: hand care, decontamination, paint protection options, and booking support.",
  alternates: { canonical: "/exterior-detailing" }
};
export default function Page() { return <ServicePage data={servicePages["exterior-detailing"]} />; }

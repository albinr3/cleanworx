import type { Metadata } from "next";
import { ServicePage } from "@/components/autodetail/ServicePage";
import { servicePages } from "@/data/servicePageData";
export const metadata: Metadata = {
  title: "Interior Car Detailing in Basking Ridge, NJ | CleanWorx Auto Detailing & Ceramic Coating",
  description: "CleanWorx Auto Detailing & Ceramic Coating provides deep interior car detailing in Basking Ridge, NJ for seats, carpets, upholstery, pet hair, and complete vehicle care.",
  alternates: { canonical: "/interior-detailing" }
};
export default function Page() { return <ServicePage data={servicePages["interior-detailing"]} />; }

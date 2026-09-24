import type { Metadata } from "next";
import { ServicePage } from "@/components/autodetail/ServicePage";
import { servicePages } from "@/data/servicePageData";
export const metadata: Metadata = {
  title: "Mobile Auto Detailing in Basking Ridge, NJ | CleanWorx Auto Detailing & Ceramic Coating",
  description: "CleanWorx Auto Detailing & Ceramic Coating brings mobile auto detailing to your driveway across Basking Ridge and Somerset County. Flat $35 mobile fee added to your selected package.",
  alternates: { canonical: "/mobile-auto-detailing" }
};
export default function Page() { return <ServicePage data={servicePages["mobile-auto-detailing"]} />; }

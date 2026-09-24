import type { Metadata } from "next";
import { ServicePage } from "@/components/autodetail/ServicePage";
import { servicePages } from "@/data/servicePageData";
export const metadata: Metadata = {
  title: "Paint Correction in Basking Ridge, NJ | CleanWorx Auto Detailing & Ceramic Coating",
  description: "Improve paint clarity with professional paint correction in Basking Ridge, NJ. CleanWorx Auto Detailing & Ceramic Coating provides multi-stage machine paint restoration starting at $350.",
  alternates: { canonical: "/paint-correction" }
};
export default function Page() { return <ServicePage data={servicePages["paint-correction"]} />; }

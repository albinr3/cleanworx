import type { Metadata } from "next";
import { InteriorDetailingPage } from "@/components/autodetail/InteriorDetailingPage";
import { servicePages } from "@/data/servicePageData";
export const metadata: Metadata = {
  title: "Interior Car Detailing in Basking Ridge, NJ | CleanWorx Auto Detailing & Ceramic Coating",
  description: "CleanWorx Auto Detailing & Ceramic Coating provides deep interior car detailing in Basking Ridge, NJ for seats, carpets, upholstery, pet hair, and complete vehicle care.",
  alternates: { canonical: "/interior-detailing" }
};
export default function Page() { return <InteriorDetailingPage data={servicePages["interior-detailing"]} />; }

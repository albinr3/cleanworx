import type { Metadata } from "next";
import { StandardPage } from "@/components/autodetail/StandardPage";

export const metadata: Metadata = {
  title: "Auto Detailing Services in Basking Ridge, NJ | CleanWorx Auto Detailing & Ceramic Coating",
  description: "Explore CleanWorx Auto Detailing & Ceramic Coating services in Basking Ridge, NJ, from ceramic coating and paint correction to interior, exterior, and mobile detailing.",
  alternates: { canonical: "/services" }
};

export default function Page() {
  return (
    <StandardPage
      title="Services"
      h1="Auto Detailing Services"
      description="Explore CleanWorx Auto Detailing & Ceramic Coating service options and choose the appropriate specialist page for your vehicle, condition, and goals."
      image="/images/autodetail/c1-scaled.webp"
      ctaTitle="Book an Appointment"
      sections={[{ title: "Find the Right Service for Your Vehicle", content: ["Each specialist page explains service scope, current starting-price context, and the questions to discuss before an appointment. We provide clear, upfront pricing tailored to your vehicle's size and condition."], subsections: [{ title: "Ceramic Coating", paragraphs: ["Certified System X ceramic coating packages from $325+."] }, { title: "Paint Correction", paragraphs: ["Multi-stage machine paint polishing and swirl removal from $350."] }, { title: "Interior Detailing", paragraphs: ["Deep steam cleaning for seats, carpets, upholstery, and leather from $225+."] }, { title: "Exterior Detailing", paragraphs: ["Scratch-free hand wash, decontamination, and 6-month ceramic wax from $205+."] }, { title: "Mobile Auto Detailing", paragraphs: ["Self-contained mobile detailing brought directly to your home or office driveway."] }] }, { title: "Mobile or Studio Appointments", content: ["Choose our dedicated Basking Ridge studio at 19 E. Henry Street or our mobile detailing service. Mobile appointments add a flat $35 fee to your selected package."] }, { title: "Supplementary Services Available With or Alongside Detailing", content: ["Specialized add-ons include engine-bay cleaning, headlight restoration, odor removal, and fabric protection."] }, { title: "View Our Detailing Work", content: ["See our recent work gallery and explore the service package that best fits your vehicle."] }]}
      links={[{ label: "Ceramic coating", href: "/ceramic-coating" }, { label: "Paint correction", href: "/paint-correction" }, { label: "Interior detailing", href: "/interior-detailing" }, { label: "Exterior detailing", href: "/exterior-detailing" }, { label: "Mobile auto detailing", href: "/mobile-auto-detailing" }, { label: "View our work", href: "/our-work" }, { label: "Service areas", href: "/service-areas" }]}
    />
  );
}

import type { Metadata } from "next";
import { StandardPage } from "@/components/autodetail/StandardPage";

export const metadata: Metadata = {
  title: "Auto Detailing FAQs | CleanWorx Auto Detailing & Ceramic Coating",
  description: "Find answers about CleanWorx Auto Detailing & Ceramic Coating services, quotes, ceramic coating, paint correction, mobile availability, service areas, and booking.",
  alternates: { canonical: "/faq" }
};

export default function Page() {
  return (
    <StandardPage
      title="FAQ"
      h1="Frequently Asked Questions"
      description="Answers to common CleanWorx Auto Detailing & Ceramic Coating questions about service scope, pricing, mobile availability, and requesting an appointment."
      image="/images/autodetail/pexels-mikebirdy-1035108.webp"
      ctaTitle="Request a Detailing Quote"
      sections={[{ title: "Booking and Quotes", content: [], subsections: [{ title: "How Do I Request a Quote?", paragraphs: ["Share your vehicle, desired service, condition or concern, town, and preferred timing by phone or email."] }, { title: "What Information Should I Provide?", paragraphs: ["Vehicle year, make, model, service interest, condition concerns, location, and timing help CleanWorx discuss the request."] }] }, { title: "Ceramic Coating and Paint Correction", content: [], subsections: [{ title: "How Is Ceramic Coating Priced?", paragraphs: ["Ceramic coating packages start at $325+, $899.99+, and $1,099.99+ for 1-, 3-, and 5-year options; final pricing depends on vehicle size and prep."] }, { title: "Can Paint Correction Improve Scratches?", paragraphs: ["Paint correction safely removes 80% to 90%+ of swirl marks and light scratches, restoring high-gloss reflection."] }] }, { title: "Interior and Exterior Detailing", content: [], subsections: [{ title: "What Is Included in a Complete Detail?", paragraphs: ["The Full Exterior and Interior Detailing package starts at $405+ and includes deep steam extraction, carpet cleaning, hand wash, decontamination, and a ceramic wax seal."] }, { title: "Can You Address Pet Hair or Stains?", paragraphs: ["Yes, our commercial steam extraction and specialized pet hair tools remove tough stains and stubborn pet hair."] }] }, { title: "Mobile Detailing and Service Areas", content: [], subsections: [{ title: "Which Towns Do You Serve?", paragraphs: ["We serve Basking Ridge, Bernardsville, Bedminster, Far Hills, Warren, Bridgewater, and surrounding communities in Somerset and Morris counties."] }, { title: "What Is Needed for a Mobile Appointment?", paragraphs: ["We just need space to park our van near your vehicle. Our rig is fully self-powered with onboard water and electricity."] }] }]}
      links={[{ label: "Ceramic coating", href: "/ceramic-coating" }, { label: "Paint correction", href: "/paint-correction" }, { label: "Interior detailing", href: "/interior-detailing" }, { label: "Exterior detailing", href: "/exterior-detailing" }, { label: "Mobile auto detailing", href: "/mobile-auto-detailing" }, { label: "Service areas", href: "/service-areas" }, { label: "Contact CleanWorx", href: "/contact" }]}
    />
  );
}

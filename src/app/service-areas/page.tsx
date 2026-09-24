import type { Metadata } from "next";
import { StandardPage } from "@/components/autodetail/StandardPage";

export const metadata: Metadata = {
  title: "Auto Detailing Service Areas in NJ | CleanWorx Auto Detailing & Ceramic Coating",
  description: "See the New Jersey communities CleanWorx Auto Detailing & Ceramic Coating serves from Basking Ridge and confirm studio or mobile appointment options for your vehicle.",
  alternates: { canonical: "/service-areas" }
};

export default function Page() {
  return (
    <StandardPage
      title="Service Areas"
      h1="Auto Detailing Service Areas in New Jersey"
      description="CleanWorx Auto Detailing & Ceramic Coating is based in Basking Ridge and serves nearby New Jersey communities through studio and eligible mobile appointment options."
      image="/images/autodetail/c1-2048x767.webp"
      ctaTitle="Confirm an Appointment"
      sections={[
        {
          title: "Based in Basking Ridge, Serving Nearby Communities",
          content: [
            "CleanWorx Auto Detailing & Ceramic Coating is located at 19 E. Henry Street in Basking Ridge, NJ 07920. Mobile availability is confirmed for each request."
          ]
        },
        {
          title: "Current Service Areas",
          content: [
            "We provide dedicated in-studio services at our Basking Ridge location and dispatch fully self-contained mobile detailing units across the following New Jersey towns:"
          ],
          subsections: [
            {
              title: "Somerset County and Nearby Communities",
              paragraphs: [
                "Basking Ridge, Bernardsville, Bernards, Far Hills, Bedminster, Peapack-Gladstone, Liberty Corner, Warren, Bridgewater, Martinsville, Somerville, and Somerset."
              ]
            },
            {
              title: "Morris County and Nearby Communities",
              paragraphs: [
                "Morristown, Mendham, Chester, Madison, Morris Plains, Morris Township, Parsippany, Florham Park, Whippany, and Stirling."
              ]
            },
            {
              title: "Union County and Nearby Communities",
              paragraphs: [
                "Westfield, Berkeley Heights, Watchung, Scotch Plains, New Providence, and Gillette."
              ]
            }
          ]
        },
        {
          title: "Mobile and Studio Appointment Options",
          content: [
            "A mobile appointment adds a flat $35 mobile fee to your chosen detailing package. We confirm mobile availability and scheduling directly."
          ]
        },
        {
          title: "Confirm Availability for Your Town",
          content: [
            "Share your vehicle, service need, town, and preferred timing so CleanWorx can confirm a practical appointment path."
          ]
        },
        {
          title: "Service Area Questions",
          content: [
            "Have a question about whether our mobile detailing rig travels to your neighborhood? Call or text 908-899-2832 and we will confirm our current schedule."
          ]
        }
      ]}
      links={[
        { label: "Mobile auto detailing", href: "/mobile-auto-detailing" },
        { label: "All services", href: "/services" },
        { label: "Contact CleanWorx", href: "/contact" },
        { label: "Frequently asked questions", href: "/faq" }
      ]}
    />
  );
}

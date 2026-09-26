import type { Metadata } from "next";
import { ContactDetails, StandardPage } from "@/components/autodetail/StandardPage";

export const metadata: Metadata = {
  title: {
    absolute: "About CleanWorx Auto Detailing | Basking Ridge, NJ",
  },
  description:
    "Learn about CleanWorx Auto Detailing in Basking Ridge, NJ. Certified System X installer, boutique detailing studio & mobile service operating since 2019.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About CleanWorx Auto Detailing | Basking Ridge, NJ",
    description:
      "Learn about CleanWorx Auto Detailing in Basking Ridge, NJ. Certified System X installer, boutique detailing studio & mobile service operating since 2019.",
    url: "https://www.cleanworxnj.com/about",
    images: [
      {
        url: "/images/autodetail/1-2.webp",
        width: 1200,
        height: 630,
        alt: "About CleanWorx Auto Detailing Basking Ridge NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About CleanWorx Auto Detailing | Basking Ridge, NJ",
    description:
      "Learn about CleanWorx Auto Detailing in Basking Ridge, NJ. Certified System X installer, boutique detailing studio & mobile service operating since 2019.",
    images: ["/images/autodetail/1-2.webp"],
  },
};

export default function Page() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://www.cleanworxnj.com/about#webpage",
        "url": "https://www.cleanworxnj.com/about",
        "name": "About CleanWorx Auto Detailing & Ceramic Coating",
        "description": "Learn about CleanWorx Auto Detailing & Ceramic Coating in Basking Ridge, NJ.",
        "mainEntity": {
          "@type": ["AutoRepair", "LocalBusiness"],
          "@id": "https://www.cleanworxnj.com/#business",
          "name": "CleanWorx Auto Detailing & Ceramic Coating",
          "sameAs": [
            "https://www.bbb.org/us/nj/basking-ridge/profile/auto-detailing/cleanworx-llc-auto-detailing-0221-90237271",
            "https://www.google.com/maps?cid=15973418579450373920"
          ]
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <StandardPage
        title="About"
        h1="About CleanWorx"
        description="CleanWorx Auto Detailing & Ceramic Coating provides professional auto detailing from our Basking Ridge studio and through self-contained mobile detailing vans."
        image="/images/autodetail/p1.webp"
        ctaTitle="Book With CleanWorx"
        sections={[
          {
            title: "Our Basking Ridge Detailing Studio",
            content: ["CleanWorx Auto Detailing & Ceramic Coating officially opened in August 2019 and operates from our dedicated studio at 19 E. Henry Street in Basking Ridge, NJ 07920. Founded by Vito DeGironimo, we provide professional in-shop detailing and self-contained mobile detailing throughout Somerset, Morris, and Union counties."]
          },
          {
            title: "The CleanWorx Standard",
            content: ["While many detailing businesses close within their first few years, CleanWorx has earned a 5.0-star reputation across more than 220 verified Google reviews by combining honest advice, thorough workmanship, and superior customer communication."],
            subsections: [
              {
                title: "Certified System X Ceramic Protection",
                paragraphs: ["We are certified System X ceramic coating installers, offering multi-year ceramic protection that chemically bonds to clear coats to shield against New Jersey winter road salt, acid rain, and UV fading."]
              },
              {
                title: "Digital Paint-Depth Inspection",
                paragraphs: ["Before performing machine paint correction, we take digital paint-depth readings across every panel to safely remove swirl marks and clear-coat scratches without risking clear-coat burn-through."]
              }
            ]
          },
          {
            title: "Studio & Mobile Detailing Options",
            content: ["Whether you drop your car off at our Basking Ridge studio or schedule our self-powered mobile detailing rig to visit your driveway or workplace, you receive the same level of care and attention."]
          }
        ]}
        links={[
          { label: "Explore services", href: "/services" },
          { label: "Our work", href: "/our-work" },
          { label: "Service areas", href: "/service-areas" },
          { label: "Contact CleanWorx", href: "/contact" }
        ]}
      >
        <ContactDetails />
      </StandardPage>
    </>
  );
}

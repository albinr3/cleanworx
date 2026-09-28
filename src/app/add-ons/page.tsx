import type { Metadata } from "next";
import { AddOnsPageContent } from "@/components/autodetail/AddOnsPageContent";
import { SiteShell } from "@/components/autodetail/SiteShell";

export const metadata: Metadata = {
  title: {
    absolute: "Auto Detailing Add-Ons & Upgrades in Basking Ridge, NJ | CleanWorx",
  },
  description:
    "Upgrade your vehicle detail with CleanWorx specialized add-ons in Basking Ridge, NJ: headlight restoration, engine bay cleaning, air purification, 1-step polish, tint removal & pet hair extraction.",
  alternates: { canonical: "/add-ons" },
  openGraph: {
    title: "Auto Detailing Add-Ons & Upgrades in Basking Ridge, NJ | CleanWorx",
    description:
      "Upgrade your vehicle detail with CleanWorx specialized add-ons in Basking Ridge, NJ: headlight restoration, engine bay cleaning, air purification, 1-step polish, tint removal & pet hair extraction.",
    url: "https://www.cleanworxnj.com/add-ons",
    images: [
      {
        url: "/images/autodetail/cleanworx-headlight-restoration-engine-bay-detailing.webp",
        width: 1200,
        height: 630,
        alt: "CleanWorx Auto Detailing Specialized Add-Ons Basking Ridge NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Detailing Add-Ons & Upgrades in Basking Ridge, NJ | CleanWorx",
    description:
      "Upgrade your vehicle detail with CleanWorx specialized add-ons in Basking Ridge, NJ: headlight restoration, engine bay cleaning, air purification, 1-step polish, tint removal & pet hair extraction.",
    images: ["/images/autodetail/cleanworx-headlight-restoration-engine-bay-detailing.webp"],
  },
};

export default function AddOnsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["AutoRepair", "LocalBusiness"],
        "@id": "https://www.cleanworxnj.com/#business",
        name: "CleanWorx Auto Detailing & Ceramic Coating",
        alternateName: ["CleanWorx", "CleanWorx NJ"],
        url: "https://www.cleanworxnj.com",
        telephone: "+1-908-899-2832",
        email: "cleanworxnj@gmail.com",
        logo: "https://www.cleanworxnj.com/images/cleanworx-logo.webp",
        image: "https://www.cleanworxnj.com/images/autodetail/cleanworx-headlight-restoration-engine-bay-detailing.webp",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "19 E. Henry Street",
          addressLocality: "Basking Ridge",
          addressRegion: "NJ",
          postalCode: "07920",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 40.7050942,
          longitude: -74.5471647,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "CleanWorx Auto Detailing Add-Ons & Specialized Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Headlight Restoration",
                description:
                  "Multi-stage sanding, compounding and 2-year ceramic coating to remove cloudy oxidation and restore night visibility.",
              },
              price: "75.00",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Engine Bay Deep Clean & Dressing",
                description:
                  "Delicate hand degreasing and factory satin UV protective dressing for engine bay components.",
              },
              price: "75.00",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Cabin Air Purification & Odor Treatment",
                description:
                  "30-40 minute ozone air purification treating interior fabric and HVAC ductwork to neutralize stubborn odor molecules.",
              },
              price: "75.00",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Window Tint Removal",
                description:
                  "High-temperature steam film removal and adhesive cleaning with zero defroster damage.",
              },
              price: "50.00",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "1-Step Machine Polish",
                description:
                  "Single-stage dual action machine polish to remove light swirls and boost optical clear coat gloss.",
              },
              price: "123.99",
              priceCurrency: "USD",
            },
          ],
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.cleanworxnj.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Add-Ons & Extras",
            item: "https://www.cleanworxnj.com/add-ons",
          },
        ],
      },
    ],
  };

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AddOnsPageContent />
    </SiteShell>
  );
}

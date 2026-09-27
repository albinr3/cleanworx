import type { Metadata } from "next";
import { AboutUsPage } from "@/components/autodetail/AboutUsPage";

export const metadata: Metadata = {
  title: {
    absolute: "About CleanWorx Auto Detailing | Vito DeGironimo & Team | Basking Ridge, NJ",
  },
  description:
    "The story of CleanWorx Auto Detailing. Founded in 2019 by Vito DeGironimo, joined by Melqui Pichardo & Hemza Nasser. Dedicated studio at 19 E. Henry St, Basking Ridge, NJ & mobile service.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About CleanWorx Auto Detailing | Vito DeGironimo & Team | Basking Ridge, NJ",
    description:
      "From a garage in Colonia to our detailing studio at 19 E. Henry St, Basking Ridge, NJ. Meet Vito DeGironimo, Melqui Pichardo & Hemza Nasser.",
    url: "https://www.cleanworxnj.com/about",
    images: [
      {
        url: "/images/about/cleanworx-team-and-shop.jpg",
        width: 1024,
        height: 576,
        alt: "CleanWorx Team Vito DeGironimo, Melqui Pichardo, and Hemza Nasser at Basking Ridge Detailing Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About CleanWorx Auto Detailing | Vito DeGironimo & Team | Basking Ridge, NJ",
    description:
      "Meet Vito DeGironimo, Melqui Pichardo & Hemza Nasser at CleanWorx Auto Detailing in Basking Ridge, NJ.",
    images: ["/images/about/cleanworx-team-and-shop.jpg"],
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
        "description":
          "The founding story, team, and studio history of CleanWorx Auto Detailing & Ceramic Coating in Basking Ridge, NJ.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.cleanworxnj.com/" },
            { "@type": "ListItem", "position": 2, "name": "About CleanWorx", "item": "https://www.cleanworxnj.com/about" }
          ]
        },
        "mainEntity": {
          "@type": ["AutoRepair", "LocalBusiness"],
          "@id": "https://www.cleanworxnj.com/#business",
          "name": "CleanWorx Auto Detailing & Ceramic Coating",
          "url": "https://www.cleanworxnj.com",
          "telephone": "+1-908-899-2832",
          "email": "cleanworxnj@gmail.com",
          "foundingDate": "2019",
          "foundingLocation": {
            "@type": "Place",
            "name": "Colonia, New Jersey"
          },
          "founder": {
            "@type": "Person",
            "name": "Vito DeGironimo",
            "jobTitle": "Founder & Owner-Operator"
          },
          "employee": [
            {
              "@type": "Person",
              "name": "Melqui Pichardo",
              "jobTitle": "Detailing Specialist"
            },
            {
              "@type": "Person",
              "name": "Hemza Nasser",
              "jobTitle": "Detailing Specialist"
            }
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "19 E. Henry Street",
            "addressLocality": "Basking Ridge",
            "addressRegion": "NJ",
            "postalCode": "07920",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 40.7050942,
            "longitude": -74.5482277
          },
          "hasMap": "https://www.google.com/maps?cid=15973418579450373920",
          "sameAs": [
            "https://www.bbb.org/us/nj/basking-ridge/profile/auto-detailing/cleanworx-llc-auto-detailing-0221-90237271",
            "https://www.google.com/maps?cid=15973418579450373920"
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "220",
            "bestRating": "5",
            "worstRating": "1"
          }
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
      <AboutUsPage />
    </>
  );
}

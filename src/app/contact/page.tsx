import type { Metadata } from "next";
import { SiteShell } from "@/components/autodetail/SiteShell";
import { ContactPageContent } from "@/components/autodetail/ContactPageContent";

export const metadata: Metadata = {
  title: {
    absolute: "Contact CleanWorx Auto Detailing | Basking Ridge, NJ",
  },
  description:
    "Contact CleanWorx Auto Detailing & Ceramic Coating in Basking Ridge, NJ. Dedicated studio drop-off at 19 E. Henry Street or mobile detailing service.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact CleanWorx Auto Detailing | Basking Ridge, NJ",
    description:
      "Contact CleanWorx Auto Detailing in Basking Ridge, NJ. Dedicated studio drop-off at 19 E. Henry Street or mobile detailing service.",
    url: "https://www.cleanworxnj.com/contact",
    images: [
      {
        url: "/images/cleanworx-logo.webp",
        width: 1200,
        height: 630,
        alt: "Contact CleanWorx Auto Detailing Basking Ridge NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact CleanWorx Auto Detailing | Basking Ridge, NJ",
    description:
      "Contact CleanWorx Auto Detailing in Basking Ridge, NJ. Dedicated studio drop-off at 19 E. Henry Street or mobile detailing service.",
    images: ["/images/cleanworx-logo.webp"],
  },
};

export default function Page() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://www.cleanworxnj.com/contact#webpage",
        "url": "https://www.cleanworxnj.com/contact",
        "name": "Contact CleanWorx Auto Detailing & Ceramic Coating",
        "description": "Contact CleanWorx Auto Detailing & Ceramic Coating in Basking Ridge, NJ.",
        "mainEntity": {
          "@type": ["AutoRepair", "LocalBusiness"],
          "@id": "https://www.cleanworxnj.com/#business",
          "name": "CleanWorx Auto Detailing & Ceramic Coating",
          "telephone": "+1-908-899-2832",
          "email": "cleanworxnj@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "19 E. Henry Street",
            "addressLocality": "Basking Ridge",
            "addressRegion": "NJ",
            "postalCode": "07920",
            "addressCountry": "US"
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "09:00",
              "closes": "17:00"
            }
          ],
          "hasMap": "https://share.google/UwkPd2O0H8zeL4M37",
          "sameAs": [
            "https://www.bbb.org/us/nj/basking-ridge/profile/auto-detailing/cleanworx-llc-auto-detailing-0221-90237271",
            "https://share.google/UwkPd2O0H8zeL4M37",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <SiteShell>
        <ContactPageContent />
      </SiteShell>
    </>
  );
}

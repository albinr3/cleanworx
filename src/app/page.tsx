import { AboutSection } from "@/components/autodetail/AboutSection";
import { CockpitBanner } from "@/components/autodetail/CockpitBanner";
import { CtaBanner } from "@/components/autodetail/CtaBanner";
import { FaqSection } from "@/components/autodetail/FaqSection";
import { HeroSection } from "@/components/autodetail/HeroSection";
import { InstagramGallery } from "@/components/autodetail/InstagramGallery";
import { ServiceAreasPreview } from "@/components/autodetail/ServiceAreasPreview";
import { ServicesSection } from "@/components/autodetail/ServicesSection";
import { SiteShell } from "@/components/autodetail/SiteShell";
import { StatsCounters } from "@/components/autodetail/StatsCounters";
import { TestimonialsSection } from "@/components/autodetail/TestimonialsSection";
import { FAQS } from "@/data/autodetailData";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["AutoRepair", "LocalBusiness"],
        "@id": "https://www.cleanworxnj.com/#business",
        name: "CleanWorx Auto Detailing & Ceramic Coating",
        alternateName: ["CleanWorx", "CleanWorx Auto Detailing", "CleanWorx NJ"],
        description: "Professional auto detailing, ceramic coating, paint correction, interior detailing, and exterior car care in Basking Ridge, NJ.",
        url: "https://www.cleanworxnj.com",
        telephone: "+1-908-899-2832",
        email: "cleanworxnj@gmail.com",
        logo: "https://www.cleanworxnj.com/images/cleanworx-logo.webp",
        image: "https://www.cleanworxnj.com/images/cleanworx-logo.webp",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "19 E. Henry Street",
          addressLocality: "Basking Ridge",
          addressRegion: "NJ",
          postalCode: "07920",
          addressCountry: "US"
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 40.7050942,
          longitude: -74.5482277
        },
        hasMap: "https://www.google.com/maps?cid=15973418579450373920",
        sameAs: [
          "https://www.bbb.org/us/nj/basking-ridge/profile/auto-detailing/cleanworx-llc-auto-detailing-0221-90237271",
          "https://www.google.com/maps?cid=15973418579450373920"
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "220",
          bestRating: "5",
          worstRating: "1"
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "17:00"
          }
        ],
        areaServed: [
          { "@type": "City", "name": "Basking Ridge" },
          { "@type": "City", "name": "Bernardsville" },
          { "@type": "City", "name": "Bedminster" },
          { "@type": "City", "name": "Far Hills" },
          { "@type": "AdministrativeArea", "name": "Somerset County, NJ" },
          { "@type": "AdministrativeArea", "name": "Morris County, NJ" },
          { "@type": "AdministrativeArea", "name": "Union County, NJ" }
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "CleanWorx Detailing & Ceramic Coating Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Ceramic Coating Protection",
                description: "Certified System X ceramic coating providing multi-year paint protection, extreme hydrophobic water beading, and UV defense in Basking Ridge, NJ."
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Precision Paint Correction",
                description: "Multi-stage machine polishing to safely eliminate swirl marks, light scratches, and clear-coat hazing."
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Deep Interior Detailing",
                description: "Deep steam sanitization, hot water carpet extraction, and leather conditioning for a factory-fresh cabin."
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Complete Exterior Detailing",
                description: "Scratch-free two-bucket hand wash, chemical iron decontamination, clay-bar glass finish, and 6-month ceramic wax seal."
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Mobile Auto Detailing",
                description: "Self-contained mobile auto detailing service brought directly to your home or office driveway across Somerset County."
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.cleanworxnj.com/#website",
        name: "CleanWorx Auto Detailing & Ceramic Coating",
        alternateName: "CleanWorx",
        url: "https://www.cleanworxnj.com/"
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.cleanworxnj.com/#faq",
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      }
    ]
  };
  return <SiteShell><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><HeroSection /><AboutSection /><StatsCounters /><ServicesSection /><TestimonialsSection /><CockpitBanner /><InstagramGallery /><ServiceAreasPreview /><FaqSection /><CtaBanner /></SiteShell>;
}

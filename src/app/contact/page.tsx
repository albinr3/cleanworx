import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactDetails, StandardPage } from "@/components/autodetail/StandardPage";

export const metadata: Metadata = {
  title: {
    absolute: "Contact CleanWorx Auto Detailing | Basking Ridge, NJ",
  },
  description:
    "Contact CleanWorx Auto Detailing in Basking Ridge, NJ. Book studio drop-off at 19 E. Henry Street or request mobile detailing to your driveway.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact CleanWorx Auto Detailing | Basking Ridge, NJ",
    description:
      "Contact CleanWorx Auto Detailing in Basking Ridge, NJ. Book studio drop-off at 19 E. Henry Street or request mobile detailing to your driveway.",
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
      "Contact CleanWorx Auto Detailing in Basking Ridge, NJ. Book studio drop-off at 19 E. Henry Street or request mobile detailing to your driveway.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <StandardPage
        title="Contact"
        h1="Book Your Detailing Appointment"
        description="Call or email CleanWorx Auto Detailing & Ceramic Coating to discuss your vehicle, service interest, and appointment availability."
        image="/images/autodetail/c1-1024x383.webp"
        ctaTitle="Book Your Detailing Appointment"
        sections={[
          {
            title: "Request an Appointment or Quote",
            content: ["For a helpful request, include your name, preferred contact method, vehicle year/make/model, desired service, condition or concern, town, and preferred timing. A request is not a confirmed appointment until CleanWorx responds."]
          },
          {
            title: "Visit or Contact CleanWorx",
            content: [],
            subsections: [
              {
                title: "Studio Address",
                paragraphs: [
                  "CleanWorx Auto Detailing & Ceramic Coating",
                  "19 E. Henry Street, Basking Ridge, NJ 07920"
                ]
              },
              {
                title: "Phone, Email, and Hours",
                paragraphs: [
                  "Call 908-899-2832 or email cleanworxnj@gmail.com. Hours are Monday–Saturday, 9:00 AM–5:00 PM; closed Sunday."
                ]
              }
            ]
          },
          {
            title: "Find CleanWorx in Basking Ridge",
            content: [],
            subsections: [
              {
                title: "Map and Directions",
                paragraphs: ["Use the map and text directions below to find the Basking Ridge studio."]
              }
            ]
          },
          {
            title: "Mobile Detailing Availability",
            content: ["Mobile detailing is offered for eligible appointments. The mobile total is the applicable in-shop package price plus a flat $35 mobile fee; availability is confirmed directly."]
          },
          {
            title: "Explore Our Detailing Services",
            content: ["Review ceramic coating, paint correction, interior, exterior, and mobile service pages for current scope and starting-price context."]
          },
          {
            title: "Contact FAQs",
            content: ["Call or email to ask how to get a quote, what information to provide, whether mobile service is available in your town, and where the studio is located."]
          }
        ]}
        links={[
          { label: "All services", href: "/services" },
          { label: "Ceramic coating", href: "/ceramic-coating" },
          { label: "Paint correction", href: "/paint-correction" },
          { label: "Interior detailing", href: "/interior-detailing" },
          { label: "Exterior detailing", href: "/exterior-detailing" },
          { label: "Mobile auto detailing", href: "/mobile-auto-detailing" },
          { label: "Service areas", href: "/service-areas" },
          { label: "FAQ", href: "/faq" },
          { label: "Our work", href: "/our-work" },
          { label: "About", href: "/about" }
        ]}
      >
        <ContactDetails />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a href="tel:+19088992832" className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#14151a] p-5 text-sm font-bold text-white hover:border-[#1277ff]/60">
            <Phone className="h-5 w-5 text-[#1277ff]" />
            908-899-2832
          </a>
          <a href="mailto:cleanworxnj@gmail.com" className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#14151a] p-5 text-sm font-bold text-white hover:border-[#1277ff]/60">
            <Mail className="h-5 w-5 text-[#1277ff]" />
            cleanworxnj@gmail.com
          </a>
        </div>
        <div className="mt-12 border-t border-white/10 pt-12">
          <p className="flex items-center gap-2 text-sm text-neutral-300">
            <MapPin className="h-4 w-4 text-[#1277ff]" />
            <span className="font-semibold text-white">CleanWorx Auto Detailing &amp; Ceramic Coating</span> · 19 E. Henry Street, Basking Ridge, NJ 07920
          </p>
          <div className="relative mt-6 aspect-video overflow-hidden rounded-2xl border border-white/10 bg-[#14151a]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.5869284608007!2d-74.5482277!3d40.7050942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b79f2ad31b11%3A0xddacbc0a3ba76720!2sCleanWorx%20Auto%20Detailing%20%26%20Ceramic%20Coating!5e0!3m2!1ses!2sdo!4v1790135250329!5m2!1ses!2sdo"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Map showing CleanWorx Auto Detailing & Ceramic Coating location in Basking Ridge, NJ"
              allowFullScreen
            />
          </div>
          <a
            className="mt-4 inline-block text-sm font-bold text-[#4da3ff] hover:text-white"
            href="https://www.google.com/maps/search/?api=1&query=19+E.+Henry+Street,+Basking+Ridge,+NJ+07920"
            target="_blank"
            rel="noreferrer"
          >
            Open directions in Google Maps →
          </a>
        </div>
      </StandardPage>
    </>
  );
}

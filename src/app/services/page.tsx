import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { StandardPage } from "@/components/autodetail/StandardPage";
import { SERVICES } from "@/data/autodetailData";

export const metadata: Metadata = {
  title: { absolute: "Auto Detailing Services in Basking Ridge, NJ | CleanWorx" },
  description:
    "Explore CleanWorx detailing, paint protection, window tinting, and specialty services. Choose a service and confirm in-shop or mobile availability.",
  alternates: { canonical: "/services" },
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
};

const catalogImages = Object.fromEntries(SERVICES.map(({ id, image }) => [id, image]));

const services = [
  {
    title: "Ceramic Coating",
    href: "/ceramic-coating",
    description: "Compare coating options and protection for your vehicle's finish.",
    image: catalogImages["ceramic-coating"],
    imageAlt: "Ceramic coating on a polished vehicle at CleanWorx",
  },
  {
    title: "Paint Correction",
    href: "/paint-correction",
    description: "Explore an assessed polishing process for swirls and paint defects.",
    image: catalogImages["paint-correction"],
    imageAlt: "Paint correction on a vehicle finish at CleanWorx",
  },
  {
    title: "Interior Detailing",
    href: "/interior-detailing",
    description: "Find cleaning options for seats, carpets, upholstery, and interior surfaces.",
    image: catalogImages["interior-detailing"],
    imageAlt: "CleanWorx interior detailing of vehicle seats and surfaces",
  },
  {
    title: "Exterior Detailing",
    href: "/exterior-detailing",
    description: "See hand washing, decontamination, and finish protection options.",
    image: catalogImages["exterior-detailing"],
    imageAlt: "Hand washing a vehicle during exterior detailing",
  },
  {
    title: "Mobile Auto Detailing",
    href: "/mobile-auto-detailing",
    description: "Learn how to arrange an eligible detailing appointment at your location.",
    image: catalogImages["mobile-auto-detailing"],
    imageAlt: "CleanWorx mobile detailing setup beside a vehicle",
  },
  {
    title: "Window Tinting",
    href: "/window-tinting",
    description: "Review film choices, installation options, and published prices.",
    image: "/images/autodetail/window-tint-hero.jpg",
    imageAlt: "Vehicle with window tint installed by CleanWorx",
  },
  {
    title: "Headlight Restoration",
    href: "/headlight-restoration",
    description: "Learn how cloudy, oxidized headlight lenses are assessed and restored.",
    image: "/images/autodetail/cleanworx-headlight-restoration-basking-ridge.webp",
    imageAlt: "CleanWorx technician restoring an oxidized vehicle headlight",
  },
  {
    title: "Car Odor Treatment",
    href: "/car-odor-treatment",
    description: "Explore vehicle odor treatment, its process, and its limits.",
    image: "/images/autodetail/car-odor-treatment-hero.png",
    imageAlt: "Vehicle receiving odor treatment at the CleanWorx shop",
  },
  {
    title: "Specialized Add-Ons",
    href: "/add-ons",
    description: "Browse additional options for targeted vehicle care and restoration.",
    image: "/images/autodetail/cleanworx-headlight-restoration-engine-bay-detailing.webp",
    imageAlt: "Headlight and engine bay detailing services from CleanWorx",
  },
] as const;

export default function ServicesPage() {
  return (
    <StandardPage
      title="Services"
      h1="Auto Detailing Services"
      description="Choose the work your vehicle needs, then explore the dedicated service page for scope, pricing, and appointment details. CleanWorx is based in Basking Ridge, New Jersey."
      image="/images/autodetail/cleanworx-auto-detailing-services-basking-ridge.webp"
      ctaTitle="Ready to discuss your vehicle?"
      childrenPosition="before"
      containerMaxWidth="max-w-7xl"
      sections={[
        {
          title: "Which service is right for your vehicle?",
          content: [
            "Start with interior detailing for interior cleaning or exterior detailing for the body and finish. Choose paint correction for an assessment of visible paint defects or ceramic coating for a protection option. Mobile detailing explains appointments at your location; window tinting covers in-shop film installation and removal. For cloudy headlights, lingering odors, or other targeted needs, explore the specialist pages below.",
          ],
        },
        {
          title: "Mobile or In-Shop Appointments",
          content: [
            "CleanWorx confirms the service, location, and availability for each appointment. A $35 mobile service fee applies to every mobile appointment. Window tinting is available in shop only. Ask us which services are suitable for your location.",
          ],
        },
        {
          title: "Supplementary Services",
          content: [
            "Headlight restoration, vehicle odor treatment, and specialized add-ons have their own service details. Check those pages for scope and current pricing before booking.",
          ],
        },
      ]}
      links={[
        { label: "Headlight restoration", href: "/headlight-restoration" },
        { label: "Car odor treatment", href: "/car-odor-treatment" },
        { label: "Specialized add-ons", href: "/add-ons" },
        { label: "View our work", href: "/our-work" },
        { label: "Check service areas", href: "/service-areas" },
        { label: "Frequently asked questions", href: "/faq" },
        { label: "Contact CleanWorx", href: "/contact" },
        { label: "Home", href: "/" },
      ]}
    >
      <section aria-labelledby="find-service">
        <p className="text-xs font-bold uppercase tracking-widest text-[#4da3ff]">Explore services</p>
        <h2 id="find-service" className="mt-3 text-3xl font-black text-white sm:text-4xl">
          Find the Right Service for Your Vehicle
        </h2>
        <p className="mt-5 max-w-3xl text-sm leading-8 text-neutral-400 sm:text-base">
          Each page explains what the service covers and how pricing is determined.
        </p>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.href} className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#14151a]">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-neutral-400">{service.description}</p>
                <Link
                  href={service.href}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-[#4da3ff] hover:text-white"
                >
                  Explore {service.title} <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </StandardPage>
  );
}

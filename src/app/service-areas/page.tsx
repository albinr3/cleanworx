import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, MapPin, Phone, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Auto Detailing Service Areas in NJ | CleanWorx",
  description:
    "CleanWorx provides professional auto detailing and ceramic coating from Basking Ridge, NJ to nearby communities. Call to confirm availability for your location.",
};

const serviceAreas = [
  "Basking Ridge",
  "Bernards",
  "Bernardsville",
  "Far Hills",
  "Bedminster",
  "Peapack-Gladstone",
  "Liberty Corner",
  "Warren",
  "Bridgewater",
  "Martinsville",
  "Somerville",
  "Watchung",
  "Berkeley Heights",
  "New Providence",
  "Stirling",
  "Gillette",
  "Westfield",
  "Scotch Plains",
  "Morristown",
  "Mendham",
  "Madison",
  "Morris Plains",
  "Morris Township",
  "Florham Park",
  "Whippany",
  "Parsippany",
  "Chester",
  "Somerset",
];

const availabilityNotes = [
  "Mobile appointments may be available at your home or workplace, subject to the service and site conditions.",
  "Ceramic coating and paint-correction work may require a controlled studio environment for preparation and curing.",
  "A quick call lets us confirm travel availability, timing, and the best service option for your vehicle.",
];

export default function ServiceAreasPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0a0a0c] text-white selection:bg-[#1277ff] selection:text-white">
      <header className="border-b border-white/10 bg-[#0a0a0c]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="relative h-9 w-40 shrink-0 sm:h-10 sm:w-48" aria-label="CleanWorx home">
            <Image
              src="/images/cleanworx-logo.webp"
              alt="CleanWorx"
              fill
              priority
              className="object-contain object-left"
            />
          </Link>
          <a
            href="tel:+19088992832"
            className="inline-flex items-center gap-2 rounded-md bg-[#1277ff] px-3.5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#0d62d6] sm:px-5"
          >
            <Phone className="size-4" />
            <span className="hidden sm:inline">Call (908) 899-2832</span>
            <span className="sm:hidden">Call us</span>
          </a>
        </div>
      </header>

      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(18,119,255,0.28),_transparent_42%),radial-gradient(circle_at_bottom_left,_rgba(18,119,255,0.12),_transparent_38%)]" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-7 text-sm text-neutral-400">
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <span aria-hidden="true" className="mx-2 text-neutral-600">/</span>
            <span aria-current="page" className="text-neutral-200">Service Areas</span>
          </nav>
          <div className="max-w-3xl">
            <p className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#69a9ff]">
              <MapPin className="size-4" />
              Based in Basking Ridge, New Jersey
            </p>
            <h1 className="text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Auto Detailing Service Areas in New Jersey
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
              CleanWorx serves Basking Ridge and nearby communities with professional auto detailing,
              paint correction, and ceramic coating. Tell us where your vehicle is located and we will
              confirm the right appointment option.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+19088992832"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#1277ff] px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#0d62d6]"
              >
                Check availability
                <ArrowRight className="size-4" />
              </a>
              <a
                href="mailto:cleanworxnj@gmail.com?subject=Service%20area%20availability"
                className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-3.5 text-sm font-bold text-white transition-colors hover:border-white/40 hover:bg-white/5"
              >
                Email CleanWorx
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#69a9ff]">Areas we serve</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Nearby towns, one standard of care</h2>
            <p className="mt-5 text-base leading-7 text-neutral-400">
              Our studio is located in Basking Ridge, and we regularly serve drivers throughout Somerset,
              Morris, Union, and nearby New Jersey communities. This list describes current coverage; it
              does not represent separate location pages or separate businesses.
            </p>
            <div className="mt-7 rounded-xl border border-[#1277ff]/30 bg-[#1277ff]/10 p-5">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-[#69a9ff]" />
                <div>
                  <h3 className="font-bold text-white">CleanWorx studio</h3>
                  <address className="mt-1 not-italic leading-7 text-neutral-300">
                    19 E. Henry Street<br />
                    Basking Ridge, NJ 07920
                  </address>
                </div>
              </div>
            </div>
          </div>

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2" aria-label="Current service areas">
            {serviceAreas.map((area) => (
              <li key={area} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3.5 text-neutral-200">
                <CheckCircle2 className="size-4 shrink-0 text-[#4da3ff]" aria-hidden="true" />
                {area}, NJ
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#111216]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#69a9ff]">Appointment options</p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">We will match the service to your location</h2>
              <p className="mt-5 leading-7 text-neutral-400">
                A great result starts with the right setting. Some detailing services work well at a home
                or workplace, while advanced paint work benefits from the controlled conditions of our
                Basking Ridge studio. We will help you choose before you book.
              </p>
            </div>
            <ul className="space-y-4">
              {availabilityNotes.map((note) => (
                <li key={note} className="flex gap-3 rounded-lg border border-white/10 bg-black/20 p-4 text-sm leading-6 text-neutral-300">
                  <Sparkles className="mt-0.5 size-4 shrink-0 text-[#4da3ff]" aria-hidden="true" />
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#1277ff]/25 to-[#111216] p-7 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#8bbdff]"><Clock3 className="size-4" /> Confirm before you book</p>
            <h2 className="mt-3 text-3xl font-bold text-white">Not sure whether we serve your town?</h2>
            <p className="mt-3 leading-7 text-neutral-300">Call or email with your town, vehicle, and service needs. We will confirm availability and recommend the best appointment option.</p>
          </div>
          <a
            href="tel:+19088992832"
            className="mt-6 inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-white px-5 py-3.5 text-sm font-bold text-[#0a0a0c] transition-colors hover:bg-neutral-200 lg:mt-0"
          >
            Call (908) 899-2832
            <ArrowRight className="size-4" />
          </a>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPin } from "lucide-react";
import { SiteShell } from "@/components/autodetail/SiteShell";
import { normalizeTerminology } from "@/lib/terminology";
import { PORTFOLIO_ITEMS, type PortfolioItem } from "@/data/ourWorkData";
import {
  cityPages,
  citySlugs,
  portfolioStories,
  serviceTopics,
  type CitySlug,
  type ServiceTopicId,
} from "@/data/cityServicePages";

const photoService: Record<PortfolioItem["category"], ServiceTopicId> = {
  "Ceramic Coating": "ceramic-coating",
  "Paint Correction": "paint-correction",
  "Interior Restoration": "interior-detailing",
  "Exterior Detailing": "exterior-detailing",
  "Mobile Detailing": "mobile-auto-detailing",
};

const photoServiceOverride: Partial<Record<string, ServiceTopicId>> = {
  "work-19": "paint-correction",
  "work-23": "window-tinting",
};

const portfolioById = new Map(PORTFOLIO_ITEMS.map((item) => [item.id, item]));

function getPortfolioItem(id: string): PortfolioItem {
  const item = portfolioById.get(id);
  if (!item) throw new Error(`Missing portfolio item: ${id}`);
  return item;
}

export function getCityMetadata(slug: CitySlug): Metadata {
  const { city } = cityPages[slug];
  const title = `Auto Detailing in ${city}, NJ | CleanWorx`;
  const description = `Explore detailing, paint protection, headlight and odor services for ${city}, NJ drivers. In-shop appointments in Basking Ridge; eligible mobile visits confirmed individually.`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `/service-areas/${slug}` },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: `https://www.cleanworxnj.com/service-areas/${slug}`,
      images: ["/images/autodetail/cleanworx-service-areas-somerset-county-nj.webp"],
    },
  };
}

export function CityServicePage({ slug }: { slug: CitySlug }) {
  const page = cityPages[slug];
  const photos = page.photoIds.map(getPortfolioItem);
  const url = `https://www.cleanworxnj.com/service-areas/${slug}`;
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cleanworxnj.com/" },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://www.cleanworxnj.com/service-areas" },
      { "@type": "ListItem", position: 3, name: page.city, item: url },
    ],
  };

  return (
    <SiteShell hideOurWork>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <section className="border-b border-white/10 bg-[#10141c]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-neutral-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3" aria-hidden="true" />
            <Link href="/service-areas" className="hover:text-white">Service Areas</Link>
            <ChevronRight className="h-3 w-3" aria-hidden="true" />
            <span aria-current="page" className="text-white">{page.city}</span>
          </nav>
          <p className="mt-12 text-xs font-bold uppercase tracking-[0.22em] text-[#4da3ff]">
            CleanWorx · New Jersey service areas
          </p>
          <h1 className="mt-4 max-w-5xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl">
            Auto Detailing in {page.city}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-300 sm:text-lg">{normalizeTerminology(page.intro)}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex min-h-11 items-center rounded-lg bg-[#1277ff] px-6 py-3 text-sm font-bold text-white hover:bg-[#0d62d6]">
              Discuss Your Vehicle
            </Link>
            <a href="tel:+19088992832" className="inline-flex min-h-11 items-center rounded-lg border border-white/20 px-6 py-3 text-sm font-bold text-white hover:bg-white/10">
              Call 908-899-2832
            </a>
          </div>
          <p className="mt-8 flex max-w-3xl items-start gap-2 text-sm leading-6 text-neutral-400">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#4da3ff]" aria-hidden="true" />
            {normalizeTerminology(page.appointmentNote)}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="max-w-3xl rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm leading-7 text-neutral-300">
          The customer stories below are illustrative examples of how a service can unfold. The photos show separate portfolio projects, with each photo&apos;s documented location in its caption.
        </p>
        <nav aria-label="Jump to service" className="mt-8 flex flex-wrap gap-2 border-b border-white/10 pb-10">
          {serviceTopics.map((topic) => (
            <a key={topic.id} href={`#${topic.id}`} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-neutral-300 hover:border-[#4da3ff] hover:text-white">
              {topic.title}
            </a>
          ))}
        </nav>

        {serviceTopics.map((topic, index) => {
          const sectionPhotos = photos.filter((photo) => (photoServiceOverride[photo.id] ?? photoService[photo.category]) === topic.id);

          return (
            <section key={topic.id} id={topic.id} className="scroll-mt-28 border-b border-white/10 py-14 sm:py-20">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#4da3ff]">0{index + 1} / 08</span>
                  <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">{topic.title}</h2>
                  <Link href={topic.href} className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-[#4da3ff] hover:text-white">
                    Explore {topic.title} <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
                <div>
                  <p className="max-w-3xl text-base leading-8 text-neutral-300">{normalizeTerminology(page.serviceCopy[topic.id])}</p>
                  {topic.id === "exterior-detailing" && (
                    <div className="mt-7 space-y-4 rounded-xl border border-white/10 bg-[#14151a] p-5 text-sm leading-7 text-neutral-300">
                      <p>{normalizeTerminology(page.fullDetailNote)} <Link href="/" className="font-semibold text-[#4da3ff] hover:text-white">Explore full detailing →</Link></p>
                      <p>{normalizeTerminology(page.engineBayNote)} <Link href="/add-ons" className="font-semibold text-[#4da3ff] hover:text-white">Explore engine bay cleaning →</Link></p>
                    </div>
                  )}
                  {sectionPhotos.length > 0 && (
                    <div className="mt-9 space-y-5">
                      {sectionPhotos.map((photo) => (
                        <figure key={photo.id} className="overflow-hidden rounded-2xl border border-white/10 bg-[#14151a] md:grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
                          <div className="relative aspect-[4/3] bg-neutral-900 md:h-full md:min-h-72 md:aspect-auto">
                            <Image src={photo.src} alt={normalizeTerminology(photo.alt)} fill sizes="(max-width: 767px) 100vw, 35vw" className="object-cover" />
                          </div>
                          <figcaption className="p-5">
                            <h3 className="text-lg font-bold text-white">{normalizeTerminology(photo.title)}</h3>
                            <p className="mt-2 text-xs font-semibold text-[#4da3ff]">
                              {photo.id === "work-06" ? "Shop and mobile rig photo" : "Separate photographed project"} · {normalizeTerminology(photo.location)}
                            </p>
                            <p className="mt-4 text-xs font-bold uppercase tracking-wider text-neutral-400">Illustrative service story for {page.city}</p>
                            <div className="mt-3 space-y-4 text-sm leading-7 text-neutral-300">
                              {portfolioStories[photo.id].split("\n\n").map((paragraph) => (
                                <p key={paragraph}>{normalizeTerminology(paragraph)}</p>
                              ))}
                            </div>
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </section>
          );
        })}

        <section aria-label={`Questions about detailing for ${page.city} drivers`} className="py-14 sm:py-20">
          <p className="text-xs font-bold uppercase tracking-widest text-[#4da3ff]">Before you book</p>
          <p className="mt-3 text-2xl font-black text-white sm:text-3xl">Questions from {page.city} drivers</p>
          <dl className="mt-8 grid gap-5 md:grid-cols-2">
            {page.questions.map(({ question, answer }) => (
              <div key={question} className="rounded-xl border border-white/10 bg-[#14151a] p-6">
                <dt className="font-bold text-white">{normalizeTerminology(question)}</dt>
                <dd className="mt-3 text-sm leading-7 text-neutral-300">{normalizeTerminology(answer)}</dd>
              </div>
            ))}
          </dl>
        </section>

        <nav aria-label="Other service areas" className="border-t border-white/10 py-8 text-sm text-neutral-400">
          <p>Explore other service areas</p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
            <Link href="/service-areas" className="font-semibold text-[#4da3ff] hover:text-white">All service areas</Link>
            {citySlugs.filter((otherSlug) => otherSlug !== slug).map((otherSlug) => (
              <Link key={otherSlug} href={`/service-areas/${otherSlug}`} className="font-semibold text-[#4da3ff] hover:text-white">
                {cityPages[otherSlug].city}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </SiteShell>
  );
}

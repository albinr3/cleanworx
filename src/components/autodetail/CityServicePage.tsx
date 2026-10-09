import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
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
  "work-24": "exterior-detailing",
};

const storyTitleOverride: Record<string, string> = {
  "work-21": "Rolls-Royce Cullinan — Mobile Full Detail in Sewaren",
  "work-24": "Audi S5 Coupe — Navarra Blue Finish",
};

const portfolioById = new Map(PORTFOLIO_ITEMS.map((item) => [item.id, item]));

function CityStoryCard({
  title,
  image,
  imageAlt,
  paragraphs,
  service,
  index,
  preserveImage = false,
}: {
  title: string;
  image: string;
  imageAlt: string;
  paragraphs: readonly string[];
  service: string;
  index: number;
  preserveImage?: boolean;
}) {
  return (
    <figure className="group overflow-hidden rounded-2xl border border-white/15 bg-[#151a23] shadow-[0_22px_70px_-45px_rgba(18,119,255,0.4)] lg:grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
      <div className={`relative min-h-64 overflow-hidden bg-[#090d14] sm:min-h-80 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
        <Image
          src={image}
          alt={normalizeTerminology(imageAlt)}
          fill
          sizes="(max-width: 1023px) 100vw, 34vw"
          className={preserveImage ? "object-contain" : "object-cover transition-transform duration-700 group-hover:scale-[1.04]"}
        />
        <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-[#090d14]/85 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
          {service}
        </span>
      </div>
      <figcaption className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
        <div className="mb-7 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#66adff]">
          <span className="h-px w-8 bg-[#4da3ff]" aria-hidden="true" />
          Documented case
          <span className="ml-auto text-neutral-500">0{index + 1}</span>
        </div>
        <h3 className="max-w-xl text-2xl font-bold leading-tight text-white sm:text-[1.75rem]">{normalizeTerminology(title)}</h3>
        <div className="mt-5 space-y-4 border-l-2 border-[#347bd2]/70 pl-5 text-sm leading-7 text-neutral-300 sm:text-[0.95rem]">
          {paragraphs.map((paragraph, paragraphIndex) => (
            <p key={paragraphIndex} className={paragraphIndex === 0 ? "text-neutral-100" : ""}>
              {normalizeTerminology(paragraph)}
            </p>
          ))}
        </div>
      </figcaption>
    </figure>
  );
}

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
      <section className="relative overflow-hidden border-b border-white/10 bg-[#10141c]">
        <div className="pointer-events-none absolute -right-12 top-10 select-none font-heading text-[17vw] font-black leading-none tracking-[-0.09em] text-white/[0.025]" aria-hidden="true">{page.city}</div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-neutral-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3" aria-hidden="true" />
            <Link href="/service-areas" className="hover:text-white">Service Areas</Link>
            <ChevronRight className="h-3 w-3" aria-hidden="true" />
            <span aria-current="page" className="text-white">{page.city}</span>
          </nav>
          <div className="mt-12 grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(17rem,0.38fr)] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#4da3ff]">CleanWorx · New Jersey service areas</p>
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
            </div>
            <div className="border-l-2 border-[#4da3ff] bg-white/[0.035] p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#66adff]">Planning a visit?</p>
              <p className="mt-3 text-sm leading-7 text-neutral-300">{normalizeTerminology(page.appointmentNote)}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <nav aria-label="Jump to service" className="mt-4 flex flex-wrap gap-2 border-b border-white/10 pb-10">
          {serviceTopics.map((topic) => (
            <a key={topic.id} href={`#${topic.id}`} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-neutral-300 hover:border-[#4da3ff] hover:text-white">
              {topic.title}
            </a>
          ))}
        </nav>

        {serviceTopics.map((topic, index) => {
          const sectionPhotos = photos.filter((photo) => (photoServiceOverride[photo.id] ?? photoService[photo.category]) === topic.id);
          const serviceStory = page.serviceStories?.[topic.id];
          const storyCount = sectionPhotos.length + (serviceStory ? 1 : 0);

          return (
            <section key={topic.id} id={topic.id} className="scroll-mt-28 border-b border-white/10 py-14 sm:py-20">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#4da3ff]">0{index + 1} / 08</span>
                  <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">{topic.title}</h2>
                  <Link href={topic.href} className="group mt-6 inline-flex min-h-12 items-center gap-4 rounded-lg border border-[#3993ff] bg-[#1277ff] px-5 py-3 text-sm font-bold text-white shadow-[0_10px_28px_-14px_rgba(18,119,255,0.85)] transition-colors hover:border-[#8cc4ff] hover:bg-[#0865dd] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8cc4ff]">
                    Explore {topic.title}
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
                <div>
                  <p className="max-w-3xl text-base leading-8 text-neutral-300">{normalizeTerminology(page.serviceCopy[topic.id])}</p>
                </div>
              </div>
              {storyCount > 0 && (
                <div className="mt-10 space-y-6 lg:mt-12">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#66adff]">{storyCount === 1 ? "A case" : "Cases"} from {page.city}</span>
                    <span className="h-px flex-1 bg-white/10" aria-hidden="true" />
                  </div>
                  {sectionPhotos.map((photo, storyIndex) => (
                    <CityStoryCard
                      key={photo.id}
                      title={storyTitleOverride[photo.id] ?? photo.title}
                      image={photo.src}
                      imageAlt={photo.alt}
                      paragraphs={portfolioStories[photo.id].split("\n\n")}
                      service={topic.title}
                      index={storyIndex}
                    />
                  ))}
                  {serviceStory && (
                    <CityStoryCard
                      title={serviceStory.title}
                      image={serviceStory.image}
                      imageAlt={serviceStory.imageAlt}
                      paragraphs={serviceStory.paragraphs}
                      service={topic.title}
                      index={sectionPhotos.length}
                      preserveImage
                    />
                  )}
                </div>
              )}
              {topic.id === "exterior-detailing" && (
                <div className="mt-8 max-w-3xl space-y-4 rounded-xl border border-white/10 bg-[#14151a] p-5 text-sm leading-7 text-neutral-300 lg:ml-auto">
                  <p>{normalizeTerminology(page.fullDetailNote)} <Link href="/" className="font-semibold text-[#4da3ff] hover:text-white">Explore full detailing →</Link></p>
                  <p>{normalizeTerminology(page.engineBayNote)} <Link href="/add-ons" className="font-semibold text-[#4da3ff] hover:text-white">Explore engine bay cleaning →</Link></p>
                </div>
              )}
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

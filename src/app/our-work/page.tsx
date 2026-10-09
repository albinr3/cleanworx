import type { Metadata } from "next";
import { StandardPage } from "@/components/autodetail/StandardPage";
import { PortfolioGallery } from "@/components/autodetail/PortfolioGallery";

export const metadata: Metadata = {
  title: {
    absolute: "Auto Detailing Portfolio | CleanWorx Basking Ridge",
  },
  description:
    "Explore CleanWorx auto detailing results: certified ceramic coatings, multi-stage paint correction, luxury interior steam restorations, and mobile visits across Somerset & Morris County, NJ.",
  alternates: { canonical: "/our-work" },
  openGraph: {
    title: "Auto Detailing Portfolio | CleanWorx Basking Ridge",
    description:
      "Explore CleanWorx auto detailing results: certified ceramic coatings, multi-stage paint correction, luxury interior steam restorations, and mobile visits across Somerset & Morris County, NJ.",
    url: "https://www.cleanworxnj.com/our-work",
    images: [
      {
        url: "/images/our-work/cleanworx-lamborghini-urus-matte-ceramic-coating-basking-ridge.webp",
        width: 1200,
        height: 630,
        alt: "CleanWorx Detailing Portfolio Basking Ridge NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Detailing Portfolio | CleanWorx Basking Ridge",
    description:
      "Explore CleanWorx auto detailing results: certified ceramic coatings, multi-stage paint correction, luxury interior steam restorations, and mobile visits across Somerset & Morris County, NJ.",
    images: ["/images/our-work/cleanworx-lamborghini-urus-matte-ceramic-coating-basking-ridge.webp"],
  },
};

export default function Page() {
  return (
    <StandardPage
      title="Our Work"
      h1="Our Detailing Work"
      description="Browse real results crafted at our Basking Ridge shop and through our on-site mobile detailing unit. Explore certified ceramic coatings, multi-stage paint corrections, exotic supercar care, and showroom interior restorations."
      image="/images/our-work/cleanworx-lamborghini-urus-matte-ceramic-coating-basking-ridge.webp"
      ctaTitle="Ready For Showroom Results on Your Vehicle?"
      childrenPosition="before"
      containerMaxWidth="max-w-7xl"
      sections={[
        {
          title: "Ceramic Coating Projects",
          content: [
            "Explore the deep optical clarity, intense water beading, and mirror reflections achieved with certified System X ceramic coating packages installed at our Basking Ridge facility.",
          ],
          subsections: [
            {
              title: "Certified Multi-Year Protection",
              paragraphs: [
                "Our ceramic coatings bond at the molecular level, shielding exotic sports cars, daily luxury sedans, and family SUVs from harsh UV oxidation, road salt, acid rain, and bird strike etchings.",
              ],
            },
          ],
        },
        {
          title: "Paint Correction & Swirl Removal",
          content: [
            "Multi-stage machine compounding and dual-action jeweling eliminate spiderwebbing, wash haze, and light trail scratches to restore maximum depth, color richness, and mirror clarity.",
          ],
          subsections: [
            {
              title: "Digital Paint Depth Inspection",
              paragraphs: [
                "Before polishing a single panel, our technicians take precise digital micron measurements to ensure safe, repeatable clear-coat preservation across all makes and models.",
              ],
            },
          ],
        },
        {
          title: "Deep Interior Restoration",
          content: [
            "Commercial-grade high-heat steam extraction and pH-balanced conditioning bring fine semi-aniline leather, Alcantara, carpets, and trim back to factory showroom purity.",
          ],
          subsections: [
            {
              title: "Steam Sanitization & Odor Elimination",
              paragraphs: [
                "High-temperature steam reaches deep into seat stitching, air vents, and floor fibers, eliminating bacteria and stubborn contaminants without synthetic chemical perfumes.",
              ],
            },
          ],
        },
        {
          title: "Exotic Supercars & Mobile Care",
          content: [
            "From Rolls-Royce Cullinans and Lamborghini Uruses to Porsche GT3s and track-prepped Shelby Mustangs, we treat every vehicle with uncompromising precision either at our 19 E. Henry Street shop or at your residence via our custom mobile unit.",
          ],
          subsections: [
            {
              title: "Shop & Driveway Convenience",
              paragraphs: [
                "Drop off your vehicle at our secure facility in Basking Ridge or enjoy the convenience of our fully self-contained mobile detailing unit dispatched across Somerset, Morris, and Union counties.",
              ],
            },
          ],
        },
      ]}
      links={[
        { label: "Ceramic coating", href: "/ceramic-coating" },
        { label: "Paint correction", href: "/paint-correction" },
        { label: "Window tinting", href: "/window-tinting" },
        { label: "Interior detailing", href: "/interior-detailing" },
        { label: "Exterior detailing", href: "/exterior-detailing" },
        { label: "Mobile auto detailing", href: "/mobile-auto-detailing" },
      ]}
    >
      {/* Interactive Filterable Gallery with Lightbox */}
      <PortfolioGallery />
    </StandardPage>
  );
}

import type { Metadata } from "next";
import { InteriorDetailingPage } from "@/components/autodetail/InteriorDetailingPage";
import { servicePages } from "@/data/servicePageData";
export const metadata: Metadata = {
  title: {
    absolute: "Interior Car Detailing in Basking Ridge, NJ | CleanWorx",
  },
  description:
    "Deep interior car detailing in Basking Ridge, NJ. Steam cleaning, stain & pet hair removal, leather conditioning, and odor elimination from $225+.",
  alternates: { canonical: "/interior-detailing" },
  openGraph: {
    title: "Interior Car Detailing in Basking Ridge, NJ | CleanWorx",
    description:
      "Deep interior car detailing in Basking Ridge, NJ. Steam cleaning, stain & pet hair removal, leather conditioning, and odor elimination from $225+.",
    url: "https://www.cleanworxnj.com/interior-detailing",
    images: [
      {
        url: "/images/autodetail/interior-leather-extraction.webp",
        width: 1200,
        height: 630,
        alt: "CleanWorx Interior Car Detailing Basking Ridge NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Car Detailing in Basking Ridge, NJ | CleanWorx",
    description:
      "Deep interior car detailing in Basking Ridge, NJ. Steam cleaning, stain & pet hair removal, leather conditioning, and odor elimination from $225+.",
    images: ["/images/autodetail/interior-leather-extraction.webp"],
  },
};
export default function Page() { return <InteriorDetailingPage data={servicePages["interior-detailing"]} />; }

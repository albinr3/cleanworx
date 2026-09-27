import type { Metadata } from "next";
import { WindowTintingPage } from "@/components/autodetail/WindowTintingPage";
import { servicePages } from "@/data/servicePageData";

export const metadata: Metadata = {
  title: {
    absolute: "Window Tint Installation in Basking Ridge, NJ | CleanWorx",
  },
  description:
    "Professional automotive window tint installation and removal in Basking Ridge, NJ. Nano-ceramic and carbon films, 99% UV protection, heat rejection, and safe steam tint removal.",
  alternates: { canonical: "/window-tinting" },
  openGraph: {
    title: "Window Tint Installation in Basking Ridge, NJ | CleanWorx",
    description:
      "Professional automotive window tint installation and removal in Basking Ridge, NJ. Nano-ceramic and carbon films, 99% UV protection, heat rejection, and safe steam tint removal.",
    url: "https://www.cleanworxnj.com/window-tinting",
    images: [
      {
        url: "/images/autodetail/window-tint-hero.jpg",
        width: 1200,
        height: 630,
        alt: "CleanWorx Professional Window Tint Installation Basking Ridge NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Window Tint Installation in Basking Ridge, NJ | CleanWorx",
    description:
      "Professional automotive window tint installation and removal in Basking Ridge, NJ. Nano-ceramic and carbon films, 99% UV protection, heat rejection, and safe steam tint removal.",
    images: ["/images/autodetail/window-tint-hero.jpg"],
  },
};

export default function Page() {
  return <WindowTintingPage data={servicePages["window-tinting"]} />;
}

import type { Metadata } from "next";
import { HeadlightRestorationPage } from "@/components/autodetail/HeadlightRestorationPage";

export const metadata: Metadata = {
  title: { absolute: "Headlight Restoration in Basking Ridge, NJ | CleanWorx" },
  description: "Professional headlight restoration in Basking Ridge, NJ. CleanWorx cleans, sands, polishes, and applies a 2-year ceramic coating. Standalone appointments are $125 for 45 minutes.",
  alternates: { canonical: "/headlight-restoration" },
  openGraph: {
    title: "Headlight Restoration in Basking Ridge, NJ | CleanWorx",
    description: "Restore cloudy headlights with multi-step sanding, polishing, and a 2-year ceramic coating. Standalone appointments are $125.",
    url: "https://www.cleanworxnj.com/headlight-restoration",
    images: [{ url: "/images/autodetail/headlight-restoration-hero.png", width: 1672, height: 941, alt: "Professional headlight restoration at the CleanWorx studio" }],
  },
  twitter: { card: "summary_large_image", title: "Headlight Restoration in Basking Ridge, NJ | CleanWorx", description: "Restore cloudy headlights with multi-step sanding, polishing, and a 2-year ceramic coating.", images: ["/images/autodetail/headlight-restoration-hero.png"] },
};

export default function Page() {
  return <HeadlightRestorationPage />;
}

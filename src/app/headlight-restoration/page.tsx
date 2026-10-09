import type { Metadata } from "next";
import { HeadlightRestorationPage } from "@/components/autodetail/HeadlightRestorationPage";

export const metadata: Metadata = {
  title: { absolute: "Car & Auto Headlight Restoration Service in Basking Ridge, NJ | CleanWorx" },
  description: "Professional car headlight restoration service in Basking Ridge, NJ. Multi-step cleaning, wet sanding, polishing, and 2-year ceramic coating from $125.",
  alternates: { canonical: "/headlight-restoration" },
  openGraph: {
    title: "Car & Auto Headlight Restoration Service in Basking Ridge, NJ | CleanWorx",
    description: "Professional auto headlight restoration service with multi-step wet sanding, precision polishing, and 2-year ceramic coating. Standalone appointments from $125.",
    url: "https://www.cleanworxnj.com/headlight-restoration",
    images: [{
      url: "/images/autodetail/cleanworx-headlight-restoration-basking-ridge.webp",
      width: 1600,
      height: 1066,
      alt: "CleanWorx technician machine polishing oxidized headlight lens in the Basking Ridge, NJ shop",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Car & Auto Headlight Restoration Service in Basking Ridge, NJ | CleanWorx",
    description: "Professional auto headlight restoration service with multi-step wet sanding, precision polishing, and 2-year ceramic coating.",
    images: ["/images/autodetail/cleanworx-headlight-restoration-basking-ridge.webp"],
  },
};

export default function Page() {
  return <HeadlightRestorationPage />;
}

import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CleanWorx Auto Detailing & Ceramic Coating",
    short_name: "CleanWorx",
    description: "Professional auto detailing and ceramic coating in Basking Ridge, NJ.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0c",
    theme_color: "#1277ff",
    icons: [
      {
        src: "/images/cleanworx-logo.webp",
        sizes: "any",
        type: "image/webp",
      },
    ],
  };
}

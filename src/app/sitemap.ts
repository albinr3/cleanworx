import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.cleanworxnj.com";
  const currentDate = new Date().toISOString();

  const routes = [
    "",
    "/services",
    "/ceramic-coating",
    "/paint-correction",
    "/interior-detailing",
    "/exterior-detailing",
    "/mobile-auto-detailing",
    "/service-areas",
    "/our-work",
    "/about",
    "/faq",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1.0 : route === "/ceramic-coating" || route === "/services" ? 0.9 : 0.8,
  }));
}

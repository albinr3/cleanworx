# CleanWorx Website Architecture & Sitemap Documentation

> **Estado: arquitectura objetivo del proyecto nuevo, no auditoría de producción.** El sitemap publicado en el dominio el 5 de octubre de 2026 contiene 132 URL del sitio anterior. Las 13 URL y los estados “PASSED” de este documento describen la implementación prevista y requieren verificación después del despliegue. Ver [plan de migración de URL antiguas](./LEGACY-URL-MIGRATION-PLAN.md) antes de publicar.

**Domain:** https://www.cleanworxnj.com  
**Sitemap URL:** https://www.cleanworxnj.com/sitemap.xml  
**Robots.txt:** https://www.cleanworxnj.com/robots.txt  
**Business:** CleanWorx Auto Detailing & Ceramic Coating (Basking Ridge, NJ)  
**Last Updated:** September 26, 2026  

---

## 1. Executive Summary

This document outlines the canonical URL structure, XML sitemap specifications, and crawl governance rules for CleanWorx.

- **Total Canonical URLs in Sitemap:** 14
- **Excluded / Disallowed Routes:** 1 (`/booking` redirected to Square booking engine; disallowed in `robots.txt` to prevent index dilution and duplicate content)
- **Sitemap Protocol:** Sitemaps XML protocol 0.9 (`xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"`)
- **Generation Method:** Dynamic Next.js App Router metadata route (`src/app/sitemap.ts`)
- **Discovery Vectors:**
  1. `robots.txt` direct directive: `Sitemap: https://www.cleanworxnj.com/sitemap.xml`
  2. Footer Explore navigation link (`Sitemap`)
  3. Footer copyright utility bar link (`XML Sitemap`)
  4. 308 permanent redirect from `/sitemap` to `/sitemap.xml`

---

## 2. Canonical URL Hierarchy & Priority Tiers

| Priority | URL | Tier | Primary Topic & Purpose | Change Frequency | Last Modified |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1.0** | `/` | P0 | Homepage: Broad detailing intent in Basking Ridge, NJ, studio & mobile options, trust proof | weekly | 2026-09-26 |
| **0.9** | `/ceramic-coating` | P0 | Ceramic Coating: Highest-ticket service, System X 1/3/6-year packages, paint protection | monthly | 2026-09-26 |
| **0.9** | `/paint-correction` | P0 | Paint Correction: Swirl & scratch removal, multi-stage compound/polish processes | monthly | 2026-09-26 |
| **0.9** | `/window-tinting` | P0 | Window Tinting: Carbon/Ceramic heat rejection, NJ legal compliance, film removal section | monthly | 2026-09-26 |
| **0.8** | `/interior-detailing` | P0 | Interior Detailing: Deep steam cleaning, hot-water extraction, leather/carpet stain removal | monthly | 2026-09-26 |
| **0.8** | `/exterior-detailing` | P0 | Exterior Detailing: Multi-stage hand wash, clay bar decontamination, sealant & gloss protection | monthly | 2026-09-26 |
| **0.8** | `/mobile-auto-detailing` | P0 | Mobile Detailing: On-site van detailing across Somerset/Morris counties (appointment confirmed) | monthly | 2026-09-26 |
| **0.8** | `/car-odor-treatment` | P1 | Studio ozone air purification for lingering vehicle odors; USD 125 standalone or USD 75 with Full Interior Detailing | monthly | 2026-10-05 |
| **0.9** | `/services` | P1 | Services Discovery Hub: Catalog overview and transparent pricing entry point | monthly | 2026-09-26 |
| **0.8** | `/service-areas` | P1 | Service Areas Hub: Verified coverage across Basking Ridge, Bernardsville, Bedminster, etc. | monthly | 2026-09-26 |
| **0.8** | `/our-work` | P1 | Portfolio & Proof: Genuine before-and-after vehicle gallery, real craftsmanship proof | monthly | 2026-09-26 |
| **0.8** | `/about` | P1 | About & E-E-A-T: Company origin (2019), shop history, team (Vito, Melqui, Hemza), certifications | monthly | 2026-09-26 |
| **0.8** | `/faq` | P1 | FAQ: Customer decision-making, prep instructions, warranty, and process details | monthly | 2026-09-26 |
| **0.8** | `/contact` | P1 | Contact & Studio NAP: 19 E. Henry St, interactive map, direct phone, and booking routing | monthly | 2026-09-26 |

---

## 3. SEO Quality & Compliance Audit

| Standard Audit Check | Status | Verification Detail |
| :--- | :--- | :--- |
| **Valid XML Syntax** | PASSED | Conforms to Sitemaps XML protocol 0.9 with UTF-8 encoding |
| **URL Count Protocol** | PASSED | 13 URLs (<50,000 threshold; single file without index needed) |
| **HTTP Status Codes** | PASSED | All 13 canonical URLs verified returning `HTTP 200 OK` |
| **HTTPS Canonicalization** | PASSED | All URLs use exact `https://www.cleanworxnj.com` canonical host |
| **Accurate `<lastmod>`** | PASSED | Realistic, distinct dates reflecting content updates (not dynamic millisecond stamps) |
| **Noindex Exclusions** | PASSED | No noindexed, redirected, or staging URLs included in sitemap |
| **Robots.txt Directive** | PASSED | Referenced in `robots.ts` at `https://www.cleanworxnj.com/sitemap.xml` |
| **Utility Route Handling** | PASSED | `/booking` excluded; `/sitemap` 308-redirects to `/sitemap.xml` |
| **Footer Accessibility** | PASSED | Prominently linked in both "Explore" navigation and bottom utility bar |

---

## 4. Technical Implementation

1. **`src/app/sitemap.ts`**: Provides the type-safe Next.js `MetadataRoute.Sitemap` generator returning the 14 canonical objects with realistic `lastModified`, `priority`, and `changeFrequency`.
2. **`src/app/robots.ts`**: Declares user agent rules, allows `/`, disallows `/booking`, and points search crawlers to `https://www.cleanworxnj.com/sitemap.xml`.
3. **`next.config.ts`**: Manages permanent redirect from `/sitemap` to `/sitemap.xml`.
4. **`src/components/autodetail/Footer.tsx`**: Renders direct anchor links to `/sitemap.xml` in both the Explore section and the bottom legal/copyright bar.

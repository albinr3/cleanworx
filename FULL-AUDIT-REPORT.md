# CleanWorx SEO Audit

**Site:** https://www.cleanworxnj.com/  
**Audited:** October 15, 2026  
**Business type:** Local auto-detailing, ceramic-coating, tinting, and mobile-detailing service  
**Overall SEO health:** **77 / 100**

## Executive summary

CleanWorx has a solid technical foundation: server-rendered content, an accessible sitemap, clean service URLs, good basic metadata, strong original service detail, complete NAP data, and responsive image delivery. All 22 sitemap URLs returned HTTP 200, were indexable, and specified matching canonical URLs.

The most urgent fix is trust and structured-data accuracy. The homepage's FAQ JSON-LD states a **$50** mobile-service fee, while the visible homepage and pricing page state **$35**. The homepage also markets a Full Detail from **$405+**, while the pricing page starts the two-door service at **$400**. Publish one authoritative price source and use it everywhere before expanding schema or content.

The site should then remove/redirect old Squarespace-era pages found in search, make location pages materially more local, and improve independent authority signals. Preferred-host consolidation is a sensible technical cleanup, not a demonstrated ranking problem: the canonical tags and sitemap already consistently select WWW. This report does not include Search Console, GA4, PageSpeed, or CrUX metrics, so traffic, ranking, and field-CWV conclusions are intentionally excluded.

## Scorecard

| Area | Score | Assessment |
|---|---:|---|
| Technical SEO | 77 | Crawlable, server-rendered and indexable; hostname duplication and defensive headers need work. |
| Content & E-E-A-T | 76 | Strong first-hand process detail and service coverage; trust consistency, readability, and proof can improve. |
| On-page SEO | 83 | Clear local intent, titles, H1s, and canonical URLs; a few thin pages and long descriptions remain. |
| Structured data | 82 | Broad valid coverage, but price facts conflict and `/pricing` has no JSON-LD. |
| Performance / CWV | 65* | No lab or field CWV data. Source signals merit validation. |
| AI-search readiness | 65 | Good SSR, FAQ and service answers; no `llms.txt`, citation structure, or broad entity footprint. |
| Images | 87 | Alt text, responsive sources, and lazy loading are strong; fill-image layout stability needs CWV validation. |

\*A provisional score, not a measured Core Web Vitals verdict.

## Crawl evidence

- `robots.txt` permits crawling, disallows `/booking`, and declares the XML sitemap.
- The sitemap contains 22 canonical HTTPS URLs: the homepage, 10 core service/pricing pages, five city pages, and supporting pages.
- Every sitemap URL returned 200 with `index, follow` and a matching self-canonical.
- Primary content and metadata are delivered in the initial Next.js HTML to both normal and Googlebot mobile user agents.
- The non-WWW hostname still returns 200 while canonicals target WWW. Redirect it permanently to the preferred host.

## Findings by priority

### Critical — correct price and offer conflicts

**Evidence:** The homepage JSON-LD FAQ says the mobile-service fee is `$50 below $400`; homepage copy and `/pricing` say `$35`. The homepage says Full Detail starts at `$405+`; `/pricing` lists `$400` for a two-door coupe. Protection-duration claims also differ: one homepage section states 1/3/6 years while other homepage content states 1/3/5 years.

**Why it matters:** This damages conversion trust and can make offer/FAQ markup ineligible or misleading. Structured-data facts must match visible, current page content.

**Action:** Establish one pricing and warranty source of truth. Update homepage copy, `/pricing`, all FAQs, JSON-LD, booking flow, ads, and directory listings in a single release. Add a reviewed-on date to variable prices and warranties.

### Low — optionally make the preferred host unambiguous

This behavior was independently verified on October 15, 2026: both PowerShell and `curl`, with redirects disabled, received `200 OK` and no `Location` header for `https://cleanworxnj.com/` and `https://cleanworxnj.com/ceramic-coating`. The HTTP version returns `301` to HTTPS non-WWW. Canonicals, `og:url`, and the sitemap consistently select WWW, which already gives search engines a clear preferred URL. A one-hop, path-and-query-preserving redirect to WWW would be cleaner, but should be treated as optional maintenance unless Search Console shows duplicate/alternate canonical issues.

### High — clean up legacy indexed pages and stale NAP

Search still surfaces old Squarespace-era paths and copy, including phone number `908-899-2833` rather than the current `908-899-2832`, historic pricing, and a Westfield page snippet with Edison text. Redirect every retired URL to the closest equivalent or return 410 where no replacement exists. Then request recrawls through the correctly configured Search Console property.

### High — improve location-page uniqueness

The five city pages share the same eight service headings and have moderate normalized content overlap. Their local introductions help, but each page needs proof it serves that city: travel/parking and mobile-setup guidance, local job photos, city-specific testimonials, availability notes, local FAQs, and a mapped route/service explanation. Do not create more city pages until this quality bar is met.

### Medium — increase local authority and trust proof

The live entity data is good: name, address, phone, geo, hours, area served, reviews, BBB/GBP links, and named ownership. Public discovery found BBB, GBP, and DetailSphere, but did not independently verify a consistent presence on Apple Business Connect, Bing Places, Yelp, relevant social profiles, or manufacturer/certification directories. Verify and complete those only where the business genuinely has a listing. Add dated customer-approved project case studies with vehicle, condition, process, result, and quote.

### Medium — strengthen structured data, carefully

21 of 22 sitemap pages contain parseable JSON-LD. The homepage graph includes `AutoRepair`, `LocalBusiness`, `WebSite`, and `FAQPage`; service pages generally include `Service` and `BreadcrumbList`. `/pricing` has no JSON-LD.

After correcting prices, add a truthful `WebPage` + `OfferCatalog`/`Service` graph on `/pricing`, reflecting only visible verified offers. Do not rely on business-owned `aggregateRating` for Google stars: it is self-serving and not eligible for review-snippet treatment. Commercial FAQ markup does not generally qualify for FAQ rich results, though it may remain semantically useful.

### Medium — measure and improve CWV

No PageSpeed or CrUX result could be collected: the API key is absent and PageSpeed returned quota exhaustion. The homepage source contains 25 images, 14 scripts, and many fill-mode images without explicit width/height attributes. That is not proof of CLS, but it warrants a real mobile PageSpeed/Lighthouse and CrUX baseline. Verify that each image container reserves dimensions; prioritize the actual LCP resource only after measurement.

### Medium — improve conversion and content clarity

Core service pages are substantial, but consumer readability is relatively dense. Put plain-language answers and pricing variables before technical detail, use shorter sentences, and define specialist terms once. The Mini Detail (~357 words), Contact (~258), Pricing (~527), and FAQ (~457) pages deserve expansion where it helps a buyer decide, rather than filler. Trim long meta descriptions (for example, Add-ons, Our Work, and About exceed typical display length).

### Medium — add trust policies and current facts

Link a clear privacy policy plus booking, cancellation, rescheduling, warranty, and mobile-service requirements from the footer and booking/contact flow. Attach a visible "last reviewed" date to prices, film/warranty claims, service-area eligibility, and other changing facts. Cite manufacturer documentation for technical claims such as film performance or coating guarantees.

### Low — AI-search and discovery enhancements

Publish `/llms.txt` listing the canonical homepage, core services, service-area hub, about, and contact pages. Keep SSR and the broad robots allow policy if AI discovery is desired. Add concise, cited answer blocks for common questions (full-detail inclusions, paint-correction limits, mobile detailing requirements, ceramic versus carbon tint, and NJ tint rules). Add `dateModified` only where the page is actually maintained.

### Low — hardening and optional discovery work

At the CDN/host layer, consider HSTS (after verifying all needed subdomains), `X-Content-Type-Options`, a frame-ancestors policy, `Referrer-Policy`, and `Permissions-Policy`. IndexNow was not publicly verifiable; implement it only if Bing/Yandex/Naver discovery is a meaningful priority. Sitemap `changefreq` and `priority` fields are valid but ignored by Google and may be removed.

## What is already working

- Clear local service intent in titles, H1s, service pages, and calls to action.
- Good first-party experience signals: local history, named team, process details, paint-depth-gauge methodology, mobile rig, original work imagery, and review excerpts.
- Complete visible/schema NAP on current pages: CleanWorx Auto Detailing & Ceramic Coating, 19 E. Henry Street, Basking Ridge, NJ 07920, 908-899-2832.
- 161 audited image tags had alt attributes; responsive sources appeared on all, and most were lazy loaded.
- Mobile and desktop checks found no horizontal overflow; the mobile primary booking button is visible and 44px+ controls are used in the header.

## Data limitations

- This is a public crawl and visual/source audit, not a ranking or traffic report.
- The local script configuration examined during this audit defaulted to an unrelated restaurant property. That does **not** establish what is available through the GA4 MCP. This report did not query the MCP property inventory or select CleanWorx's GA4 property; its data is therefore excluded pending a correctly targeted MCP read. PageSpeed/CrUX also needs a valid API key, and the local GSC script was missing its Google client dependency.
- No GBP admin data, geo-grid rank tracking, citation database, backlink index, or direct AI-platform mention data was available. Common Crawl returned a 502 response during the check.
- Field LCP, INP, and CLS were not measured.

## Evidence links

- [Robots directives](https://cleanworxnj.com/robots.txt)
- [XML sitemap](https://www.cleanworxnj.com/sitemap.xml)
- [Homepage](https://www.cleanworxnj.com/)
- [Pricing](https://www.cleanworxnj.com/pricing)
- [Google LocalBusiness documentation](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Google review-snippet policy](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)

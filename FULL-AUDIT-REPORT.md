# CleanWorx SEO Audit

**Site:** https://www.cleanworxnj.com/  
**Audited:** October 15, 2026  
**Business type:** Local auto-detailing, ceramic-coating, tinting, and mobile-detailing service  
**Overall SEO health:** **77 / 100**

## Executive summary

CleanWorx has a solid technical foundation: server-rendered content, an accessible sitemap, clean service URLs, good basic metadata, strong original service detail, complete NAP data, and responsive image delivery. All 22 sitemap URLs returned HTTP 200, were indexable, and specified matching canonical URLs.

The most urgent fix is trust and structured-data accuracy. The approved mobile-service rule is a **$35** surcharge for every mobile-eligible service; window tint is available **in shop only** and is not eligible for mobile service. The homepage also markets a Full Detail from **$405+**, while the pricing page starts the two-door service at **$400**. Publish one authoritative price source and use it everywhere before expanding schema or content.

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

## Prioritized remediation table

| Priority | What to fix | Required action | Completion check | Expected impact |
|---|---|---|---|---|
| **P0 — Critical** | Price, mobile-service, and warranty consistency | Make the `$35` mobile surcharge the single rule for every mobile-eligible service; mark window tint as in-shop only. Update the homepage, `/pricing`, FAQs, JSON-LD, booking flow, ads, and listings in one release. | Visible content, schema, booking flow, and external listings consistently show `$35` for eligible mobile service and exclude window tint from mobile booking; variable claims have a review date. | Prevents misleading offer markup and restores conversion trust. |
| **P1 — High** | Legacy Squarespace URLs, old phone number, and stale snippets | Inventory retired URLs; permanently redirect each to the closest current equivalent, or return `410` where no equivalent exists. Request recrawls in Search Console. | Searches no longer surface `908-899-2833`, obsolete prices, or mismatched location snippets; redirects are one hop. | Removes misinformation and consolidates relevance to current pages. |
| **P1 — High** | Thin, overlapping city pages | Add city-specific proof to each city page: local project photos/testimonials, mobile-setup and parking guidance, availability, local FAQs, and route/service details. Pause new city pages until completed. | Each city page demonstrates distinct local value beyond its introduction and no longer relies on a shared service template. | Stronger local relevance and lower doorway-page risk. |
| **P2 — Medium** | Incomplete local authority and trust proof | Verify and complete legitimate listings (Apple Business Connect, Bing Places, Yelp, relevant social and certification directories); publish dated, customer-approved case studies. | Consistent NAP across confirmed profiles; case studies include vehicle, condition, process, result, and customer approval. | Improves local trust, entity confidence, and conversions. |
| **P2 — Medium** | `/pricing` lacks structured data | After P0 is complete, add truthful `WebPage` plus visible `OfferCatalog`/`Service` JSON-LD to `/pricing`. | Schema validates and exactly matches the page; no self-serving aggregate rating is used. | Better semantic understanding of services and offers. |
| **P2 — Medium** | Unmeasured Core Web Vitals and image-layout risk | Establish mobile Lighthouse/PageSpeed and CrUX baselines; confirm all fill-image containers reserve space; optimize only the measured LCP resource. | Baseline and post-change results are documented; no image-driven CLS is observed. | Protects usability and performance visibility. |
| **P2 — Medium** | Dense buyer-facing content, thin decision pages, and long meta descriptions | Lead with plain-language answers and pricing variables; expand Mini Detail, Contact, Pricing, and FAQ where helpful; shorten overlong meta descriptions. | Pages answer purchase questions quickly without filler; snippets are concise and distinct. | Higher clarity and conversion potential. |
| **P2 — Medium** | Missing/unclear policies and undocumented changing claims | Publish/link privacy, booking, cancellation, rescheduling, warranty, and mobile-service policies; date-review volatile facts and cite manufacturer claims. | Policies are linked from footer and booking/contact paths; claims have current evidence. | Reduces booking friction and increases credibility. |
| **P3 — Low** | Preferred-host redirect ambiguity | Configure a one-hop, path-and-query-preserving permanent redirect from non-WWW HTTPS to WWW. | `https://cleanworxnj.com/*` returns one `301` to the corresponding `https://www.cleanworxnj.com/*` URL. | Technical cleanup; investigate sooner only if Search Console reports canonical duplication. |
| **P3 — Low** | AI-search discovery gaps | Publish `/llms.txt`; add concise, cited answer blocks for common service questions; set `dateModified` only on genuinely maintained pages. | File and answer blocks reference canonical, current content. | Improves machine-readable discovery and answer quality. |
| **P3 — Low** | Defensive headers and optional discovery maintenance | Evaluate HSTS, `X-Content-Type-Options`, frame-ancestors, `Referrer-Policy`, and `Permissions-Policy`; consider IndexNow only if relevant. Remove ignored sitemap fields if desired. | Header changes are tested for subdomain/embedding compatibility; optional work has a documented rationale. | Security hardening and minor operational cleanup. |

**Recommended sequence:** complete P0 first; then work through both P1 items before starting any P2 initiative that depends on accurate prices or current content. P3 work is maintenance, not a substitute for the earlier fixes.

## Detailed findings by priority

### Critical — establish one price, mobile-service, and warranty policy

**Approved rule:** Add a `$35` surcharge to every mobile-eligible service. Window tint is in-shop only and must not be offered or priced as mobile service. The homepage says Full Detail starts at `$405+`, while `/pricing` lists `$400` for a two-door coupe. Protection-duration claims also differ: one homepage section states 1/3/6 years while other homepage content states 1/3/5 years.

**Why it matters:** This damages conversion trust and can make offer/FAQ markup ineligible or misleading. Structured-data facts must match visible, current page content.

**Action:** Establish one pricing and warranty source of truth. In every customer-facing channel, show the `$35` mobile surcharge only for eligible services and clearly label window tint as in-shop only. Update homepage copy, `/pricing`, all FAQs, JSON-LD, booking flow, ads, and directory listings in a single release. Add a reviewed-on date to variable prices and warranties.

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

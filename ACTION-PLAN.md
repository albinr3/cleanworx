# CleanWorx SEO Action Plan

## This week — fix trust and indexation risk

1. **Set one verified pricing policy.** Resolve the $50-versus-$35 mobile-fee conflict, $405-versus-$400 Full Detail conflict, and 5-versus-6-year coating claim. Update all page copy, JSON-LD, booking flow, ads, and listings together. Owner: operations + web. Effort: 2–4 hours.
2. **Retire legacy URLs properly.** Build a redirect map for old Squarespace URLs, especially pages exposing the old phone number or old city/pricing copy. Use 301 only where a close replacement exists; use 410 otherwise. Owner: web. Effort: 4–8 hours.
3. **Connect the Google-data foundation.** Select the CleanWorx GA4 and Search Console properties in the analytics MCP for the next audit; add a PageSpeed/CrUX API key. The local script's unrelated default property should not be used as a fallback. Owner: marketing/analytics. Effort: 1–2 hours.

## This month — build page quality and local proof

1. Upgrade every city page with local eligibility/travel details, original nearby work, a local review, local FAQ, and city-specific image captions. Publish no new location pages until each page meets that standard. Owner: content + operations. Effort: 3–5 hours/page.
2. Add accurate offer/schema markup to `/pricing` only after price normalization. Keep self-serving review markup out of SEO expectations. Owner: web. Effort: 2–3 hours.
3. Publish 3–5 dated customer-approved case studies with specific vehicle, condition, process, result, and testimonial. Link each to its service and relevant city page. Owner: operations + content. Effort: 2 hours/case study.
4. Verify/claim only genuine profiles on Apple Business Connect, Bing Places, Yelp, relevant manufacturer/certification directories, and primary social pages. Match the current NAP exactly. Owner: marketing. Effort: 4–6 hours.
5. Add footer-linked privacy, booking/cancellation, warranty, and mobile-appointment-requirement policies. Owner: operations + web. Effort: 3–5 hours.

## Next quarter — sustain authority and performance

1. Capture a mobile PageSpeed/Lighthouse and CrUX baseline; fix measured LCP/INP/CLS issues, beginning with actual above-the-fold assets and image-container sizing. Owner: web. Effort: measurement first, then scoped.
2. Publish concise service-answer blocks and a maintained `llms.txt`; cite technical and regulatory claims. Owner: content. Effort: 1–2 days.
3. Improve independent authority with local partnerships, community features, manufacturer verification, and earned local coverage—not low-quality directories. Owner: marketing. Ongoing.
4. Add recommended security headers and consider IndexNow if its supported search engines matter to acquisition. Owner: host/CDN. Effort: 1–2 hours.
5. **Optional: consolidate to WWW with 301s.** The non-WWW version currently serves `200`, while canonicals and sitemap already point to WWW. Implement only after checking the CleanWorx Search Console property for duplicate/alternate-canonical evidence. Owner: host/CDN. Effort: 1 hour.

## KPIs after analytics access is corrected

| KPI | Baseline | 90-day target |
|---|---:|---:|
| Indexed canonical service/location pages | Verify in GSC | All intended live URLs indexed; legacy URLs excluded |
| Price-policy conflicts | 3 observed | 0 |
| Organic clicks and impressions | Establish in GSC | +20% qualified impressions, trend-dependent |
| Organic contact/booking conversions | Establish in GA4 | +15% |
| Page Experience / CWV | Establish in CrUX | All available CWV signals Good |
| City pages with local proof modules | 0 verified baseline | 5 of 5 |

# CleanWorx — Website Initial Implementation Plan

**Status:** Planning only. This document does not authorize or represent any change to the website, source code, CMS, Google Business Profile, analytics, redirects, schema, or deployment.  
**Bonsai parent task:** `WEBSITE INITIAL IMPLEMENTATION` (`TSK-01593`)  
**Scope source:** Bonsai subtasks `TSK-01594` through `TSK-01602`  
**SEO strategy sources:** [Keyword & URL Mapping](./KEYWORD-URL-MAPPING.md) and [Page Strategy & SEO Briefs](./PAGE-STRATEGY-SEO-BRIEFS.md)  
**Business-fact source rules:** [Business Facts & Source Rules](./BUSINESS-FACTS-AND-SOURCE-RULES.md)

## Scope boundary

This plan intentionally does **not** inspect, assess, or take direction from the current website/template. The real implementation must start from the approved SEO documentation and verified business facts, not template content, placeholder claims, sample services, fictional reviews, invented prices, or inherited design details.

`near me` is not a page keyword target. It is a proximity/local-pack query modifier. The implementation must target the underlying service topic and support local relevance through accurate business data, verified service-area context, GBP/NAP consistency, reviews, prominence, and the searcher’s proximity.

## Implementation prerequisites

Do not begin production work until these inputs are available and approved:

- Verified business facts: legal/business name, address, phone, hours, email, service area, services actually offered, available appointment flow, current warranties/certifications, and approved pricing language. The supplied Square catalog is the source for operational service facts; the onboarding is the source for hours/email and the certification declaration.
- Original or licensed visual assets, plus permissions and factual captions for any project images or testimonials.
- The confirmed Google Maps embed URL for the contact-page map is documented in Phase 7.
- Approved on-site booking destination/anchor and form-handling method. Booking will exist on the website, but no URL, route, or anchor has yet been assigned; `/contact` must not be assumed as its destination.
- Confirmation of the final platform/repository and a backup or version-control checkpoint before deployment work.

## Workstream and task plan

| Bonsai task | Required documentary deliverable | Production action when later authorized | Completion evidence |
| --- | --- | --- | --- |
| `TSK-01594` Create wireframes | Page-level structure and responsive content order for every priority URL. | Build the approved page layouts. | Wireframe approved against page briefs before UI work begins. |
| `TSK-01595` Optimize existing priority pages | Homepage optimization specification. | Replace only the approved homepage content, metadata, hierarchy, links, and structured data. | URL, content intent, metadata, crawlable HTML, and conversion paths match specification. |
| `TSK-01596` Create priority new pages | Route inventory and page briefs for every approved new URL. | Create each approved canonical page. | Every page is indexable, has unique purpose/content, and passes its page brief. |
| `TSK-01597` Internal linking | Contextual link matrix and anchor guidance. | Add internal links only after their destinations exist. | All required source-to-destination links work and no temporary/broken links remain. |
| `TSK-01598` Schema | Schema decision matrix and validation plan. | Implement only the approved JSON-LD types with verified values. | Rich Results Test and Schema Validator report no critical errors. |
| `TSK-01599` Titles and meta descriptions | Metadata register for each priority URL. | Add route-level metadata. | One unique title and description per indexable canonical page. |
| `TSK-01600` H1/H2/H3 hierarchy | Heading outline for each priority URL. | Implement semantic heading hierarchy in the page HTML. | One descriptive H1; sections are ordered without skipped levels. |
| `TSK-01601` Crawlable HTML | Crawlability specification. | Render commercial content server-side/static HTML, with accessible links and text. | View-source/rendered HTML exposes the core content and links without interaction. |
| `TSK-01602` GBP map | Contact-page map specification. | Embed the approved Google Business Profile/Maps iframe on `/contact`. | Map displays the verified business location, is titled accessibly, and has a text/address fallback. |

### Confirmed facts and publication constraints

- Use the Square catalog for service packages, prices, durations, inclusions, and whether an item is standalone or an add-on. It currently lists coating packages at 1, 3, and 6 years; the 6-year package description says 5 years, so no duration/warranty copy may be published until that conflict is resolved.
- The onboarding confirms `cleanworxnj@gmail.com`, Monday–Saturday 9:00 AM–5:00 PM (closed Sunday), and the business's System X Ceramic Coating certification declaration. Retain current credential evidence before publishing the certification.
- Do not publish a CleanWorx guarantee or warranty until the exact product, package, eligibility, registration, inspection/maintenance requirements, exclusions, and warranty process are approved in writing.
- Paint Correction and Mobile Auto Detailing are owner-confirmed offers absent from the current Square catalog. Paint correction starts at USD 350 and uses an assessment-led multiple-step process; final price depends on vehicle condition and customer goals. Mobile price is the applicable in-shop package price plus a one-time USD 35 fee per appointment. Both routes are approved; do not invent a fixed correction-stage matrix or unconfirmed mobile coverage/package/access/weather rules.
- Engine-bay cleaning, headlight restoration, and air purification are catalog-confirmed supplemental services. They may be represented factually in a supplementary area, but no dedicated SEO URL is planned in this phase. Do not make mold-remediation, sanitization, or guaranteed odor-elimination claims.

## Phase 1 — IA and wireframes (`TSK-01594`)

### Canonical page inventory

| Priority | URL | Page role | Wireframe sections |
| --- | --- | --- | --- |
| P0 | `/` | Broad local-service entry point | Hero and booking CTA → proof/trust → service chooser → complete-detail overview → work samples → service-area preview → FAQs → closing CTA. |
| P0 | `/ceramic-coating` | High-intent paint-protection service page | Hero → protection/limits → assessment and preparation → verified options/cost variables → results → process/care → FAQs → quote CTA. |
| P0 | `/paint-correction` | Paint-defect and inspection page | Hero → defect education/limits → inspection → correction stages → protection next step → results → FAQs → inspection CTA. State USD 350 starting price and assessment-led final pricing. |
| P0 | `/interior-detailing` | Cabin-cleaning service page | Hero → catalog-confirmed inclusions → material/condition assessment → realistic outcomes → mobile/studio suitability → results → FAQs → quote CTA. |
| P0 | `/exterior-detailing` | Professional exterior-care page | Hero → distinction from a car wash → inclusions → condition options → protection → results → FAQs → booking CTA. |
| P0 | `/mobile-auto-detailing` | Mobile service and availability page | Hero → how it works → eligible services → studio-only/suited services → coverage → preparation → FAQs → availability CTA. State the one-time USD 35 mobile fee per appointment plus the applicable in-shop package price. |
| P1 | `/services` | Service-discovery hub | Intro → five concise service cards → catalog-confirmed supplementary services → service-choice guide → mobile/studio note → work proof → booking CTA. |
| P1 | `/service-areas` | Coverage and qualification hub | Coverage intro → verified-town list → mobile/studio availability process → FAQs → contact CTA. |
| P1 | `/our-work` | Portfolio/trust page | Intro → service-grouped original projects → factual project captions → matching service links → booking CTA. |
| P1 | `/about` | Business trust/E-E-A-T page | Origin/team → real studio/process → verified credentials → local context → work proof → booking CTA. |
| P1 | `/faq` | Objection-removal and routing page | Topic navigation → concise verified answers → contextual service links → request-a-quote CTA. |
| P1 | `/contact` | Contact, booking, and location page | Contact CTA → qualified request/booking path → NAP/hours → GBP map → availability guidance → service links → FAQs. |

### Responsive rules

- Desktop may use image-and-copy compositions where the page needs proof; mobile collapses to a single reading order with the CTA immediately available.
- Use one visible H1 per page. Do not place essential text only in images, accordions, video, or a modal.
- Keep the primary CTA and click-to-call path visible before an extensive content section.
- A map is supplementary; the complete address and contact path remain HTML text.
- Do not use a layout pattern to imply unverified benefits, ratings, awards, prices, turnaround times, certifications, or guarantees.

### Detailed SEO heading wireframes

These outlines define the title tag and visible heading hierarchy for implementation. H3s belong to the H2 immediately above them; omit an H3 when its supporting fact or offering is not verified. Do not add headings merely to insert keywords.

#### `/` — Homepage

- **Title tag:** Auto Detailing in Basking Ridge, NJ | CleanWorx
- **H1:** Professional Auto Detailing in Basking Ridge, NJ
- **H2:** Detail Your Vehicle With Care
  - **H3:** Studio and Mobile Appointment Options
- **H2:** Our Auto Detailing Services
  - **H3:** Ceramic Coating
  - **H3:** Paint Correction
  - **H3:** Interior Detailing
  - **H3:** Exterior Detailing
  - **H3:** Mobile Auto Detailing
- **H2:** What a Complete Car Detail Can Include
  - **H3:** Interior Care
  - **H3:** Exterior Care
- **H2:** See Our Recent Work
- **H2:** Serving Basking Ridge and Nearby Communities
- **H2:** Frequently Asked Questions
- **H2:** Request Your Detailing Appointment

#### `/ceramic-coating`

- **Title tag:** Ceramic Coating in Basking Ridge, NJ | CleanWorx
- **H1:** Professional Ceramic Coating in Basking Ridge, NJ
- **H2:** Protect Your Vehicle’s Paint
- **H2:** What Ceramic Coating Can and Cannot Do
  - **H3:** Protection Benefits
  - **H3:** What Coating Does Not Repair
- **H2:** Paint Preparation Before Ceramic Coating
  - **H3:** When Paint Correction Is Recommended
- **H2:** Ceramic Coating Options
  - **H3:** Coverage and Care Requirements
  - **H3:** Warranty Terms (only after package-specific confirmation)
- **H2:** What Affects Ceramic Coating Cost
  - **H3:** Vehicle Size and Condition
  - **H3:** Preparation and Chosen Protection
- **H2:** Ceramic Coating Results
- **H2:** Ceramic Coating FAQs
- **H2:** Request a Ceramic Coating Quote

#### `/paint-correction`

- **Title tag:** Paint Correction in Basking Ridge, NJ | CleanWorx
- **H1:** Paint Correction & Car Scratch Removal in Basking Ridge, NJ
- **H2:** Restore Clarity to Your Vehicle’s Paint
- **H2:** Paint Defects We Assess
  - **H3:** Swirl Marks and Light Scratches
  - **H3:** Haze, Oxidation, and Water Spots
  - **H3:** Defects That Require Body Repair
- **H2:** Our Paint Correction Process
  - **H3:** Vehicle and Paint Inspection
  - **H3:** Correction Stage Selection
  - **H3:** Final Protection Recommendation
- **H2:** Why Ceramic Coating Follows Paint Correction
- **H2:** Paint Correction Pricing
  - **H3:** Starting at USD 350
  - **H3:** Scope Based on Vehicle Condition and Your Goals
- **H2:** Paint Correction Results
- **H2:** Paint Correction FAQs
- **H2:** Schedule a Paint Inspection

#### `/interior-detailing`

- **Title tag:** Interior Car Detailing in Basking Ridge, NJ | CleanWorx
- **H1:** Deep Interior Car Detailing in Basking Ridge, NJ
- **H2:** Refresh Your Vehicle’s Interior
- **H2:** Interior Detailing Services
  - **H3:** Seats, Carpets, and Upholstery
  - **H3:** Interior Surfaces and Trim
  - **H3:** Pet Hair and Vehicle Condition Assessment
- **H2:** What to Expect From Stain and Odor Treatment
  - **H3:** Results Depend on Material and Condition
- **H2:** Mobile or Studio Interior Detailing
- **H2:** Interior Detailing Results
- **H2:** Interior Detailing FAQs
- **H2:** Request an Interior Detailing Quote

#### `/exterior-detailing`

- **Title tag:** Exterior Car Detailing in Basking Ridge, NJ | CleanWorx
- **H1:** Professional Exterior Detailing in Basking Ridge, NJ
- **H2:** More Than a Standard Car Wash
- **H2:** What Exterior Detailing Includes
  - **H3:** Hand Washing and Wheel Care
  - **H3:** Surface Decontamination
  - **H3:** Wax and Sealant Protection When Offered
- **H2:** Choose the Right Level of Exterior Care
  - **H3:** Exterior Detailing
  - **H3:** Paint Correction
  - **H3:** Ceramic Coating
- **H2:** Exterior Detailing Results
- **H2:** Exterior Detailing FAQs
- **H2:** Book Exterior Detailing

#### `/mobile-auto-detailing`

- **Title tag:** Mobile Auto Detailing in Basking Ridge, NJ | CleanWorx
- **H1:** Mobile Auto Detailing in Basking Ridge, NJ
- **H2:** Detailing at Your Home or Workplace
- **H2:** How Mobile Auto Detailing Works
  - **H3:** Appointment and Access Requirements
  - **H3:** Weather and Site Conditions
- **H2:** Services Available for Mobile Appointments
  - **H3:** Mobile Interior Detailing
  - **H3:** Mobile Exterior Detailing
- **H2:** Services Best Performed at Our Studio
  - **H3:** Paint Correction
  - **H3:** Ceramic Coating
- **H2:** Mobile Detailing Pricing
  - **H3:** In-Shop Package Price Plus a One-Time USD 35 Fee per Appointment
- **H2:** Areas We Serve
- **H2:** Mobile Detailing FAQs
- **H2:** Check Mobile Detailing Availability

#### `/services`

- **Title tag:** Auto Detailing Services in Basking Ridge, NJ | CleanWorx
- **H1:** Auto Detailing Services
- **H2:** Find the Right Service for Your Vehicle
  - **H3:** Ceramic Coating
  - **H3:** Paint Correction
  - **H3:** Interior Detailing
  - **H3:** Exterior Detailing
  - **H3:** Mobile Auto Detailing
- **H2:** Mobile or Studio Appointments
- **H2:** Supplementary Services Available With or Alongside Detailing
- **H2:** View Our Detailing Work
- **H2:** Book an Appointment

#### `/service-areas`

- **Title tag:** Auto Detailing Service Areas in NJ | CleanWorx
- **H1:** Auto Detailing Service Areas in New Jersey
- **H2:** Based in Basking Ridge, Serving Nearby Communities
- **H2:** Current Service Areas
  - **H3:** Somerset County and Nearby Communities
  - **H3:** Morris County and Nearby Communities
  - **H3:** Union County and Nearby Communities
- **H2:** Mobile and Studio Appointment Options
- **H2:** Confirm Availability for Your Town
- **H2:** Service Area FAQs

#### `/our-work`

- **Title tag:** Auto Detailing Portfolio | CleanWorx Basking Ridge
- **H1:** Our Detailing Work
- **H2:** Ceramic Coating Projects
  - **H3:** [Vehicle and service-specific project title]
- **H2:** Paint Correction Projects
  - **H3:** [Vehicle and service-specific project title]
- **H2:** Interior Detailing Projects
  - **H3:** [Vehicle and service-specific project title]
- **H2:** Exterior and Mobile Detailing Projects
  - **H3:** [Vehicle and service-specific project title]
- **H2:** Start Your Project With CleanWorx

#### `/about`

- **Title tag:** About CleanWorx Auto Detailing | Basking Ridge, NJ
- **H1:** About CleanWorx
- **H2:** Our Basking Ridge Detailing Studio
- **H2:** The CleanWorx Approach
  - **H3:** Vehicle Care and Process Standards
  - **H3:** System X Certification (with retained credential)
- **H2:** Meet the Team
- **H2:** Our Detailing Work
- **H2:** Book With CleanWorx

#### `/faq`

- **Title tag:** Auto Detailing FAQs | CleanWorx Basking Ridge
- **H1:** Frequently Asked Questions
- **H2:** Booking and Quotes
  - **H3:** How Do I Request a Quote?
  - **H3:** What Information Should I Provide?
- **H2:** Ceramic Coating and Paint Correction
  - **H3:** How Is Ceramic Coating Priced?
  - **H3:** Can Paint Correction Improve Scratches?
- **H2:** Interior and Exterior Detailing
  - **H3:** What Is Included in a Complete Detail?
  - **H3:** Can You Address Pet Hair or Stains?
- **H2:** Mobile Detailing and Service Areas
  - **H3:** Which Towns Do You Serve?
  - **H3:** What Is Needed for a Mobile Appointment?
- **H2:** Request a Detailing Quote

#### `/contact`

- **Title tag:** Contact CleanWorx Auto Detailing | Basking Ridge, NJ
- **H1:** Book Your Detailing Appointment
- **H2:** Request an Appointment or Quote
- **H2:** Visit or Contact CleanWorx
  - **H3:** Studio Address
  - **H3:** Phone, Email, and Hours
- **H2:** Find CleanWorx in Basking Ridge
  - **H3:** Map and Directions
- **H2:** Mobile Detailing Availability
- **H2:** Explore Our Detailing Services
- **H2:** Contact FAQs

## Phase 2 — content and page implementation (`TSK-01595`, `TSK-01596`)

### Homepage optimization specification

- **Primary service topic:** `car detailing`; supporting service intent is defined in the keyword mapping.
- **Purpose:** introduce CleanWorx, establish local trust, and route visitors to a specialist service or booking.
- **Required links:** the five P0 service pages, `/services`, `/our-work`, `/service-areas`, `/faq`, `/about`, and `/contact`.
- **Do not add:** a separate full-detail URL, unverified reviews, template business details, or `near me` targeting language.

### New-page creation sequence

1. `/ceramic-coating`, `/paint-correction`, `/interior-detailing`, `/exterior-detailing`, and `/mobile-auto-detailing`.
2. `/services` and `/service-areas` once the service destinations exist.
3. `/our-work`, `/about`, `/faq`, and `/contact` as the conversion/trust layer.
4. Do not create city-service, ceramic-coating-cost, engine-bay, headlight-restoration, air-purification/odor, or mold pages in this phase. The latter three services may still appear factually as catalog-confirmed supplementary services.

### Minimum page-quality rules

- Each service page is unique, useful, factual, and follows its full brief.
- Every page uses original or properly licensed images with descriptive alt text.
- Use the catalog's verified current prices/durations/inclusions accurately, including `Price varies` and `+` where applicable. Hold warranty/guarantee language and the unresolved six-year/5-year coating duration until specifically confirmed. Certification may be planned from onboarding but needs retained current evidence before publication.
- The service hub summarizes and routes; it must not duplicate full service-page content.
- The service-area hub names only verified current coverage and does not link to unqualified town pages.

## Phase 3 — internal links (`TSK-01597`)

| Source | Required destination(s) | Anchor principle |
| --- | --- | --- |
| Homepage | Every P0 service page, service hub, work, areas, FAQ, about, contact | Use the service name naturally. |
| Services hub | Every P0 service page | One concise service-card CTA per destination; use sourceable price/status only. |
| Ceramic coating | Paint correction, work, service hub, areas, FAQ, contact | Explain the relationship, e.g. paint correction before ceramic coating. |
| Paint correction | Ceramic coating, exterior detailing, work, service hub, FAQ, contact | Use outcome/service context, not repeated exact-match anchors. |
| Interior detailing | Mobile detailing, work, areas, service hub, FAQ, contact, homepage | Link visitors to the appropriate service scope. |
| Exterior detailing | Paint correction, ceramic coating, mobile detailing where applicable, work, FAQ, contact | Maintain the professional-detailing distinction. |
| Mobile detailing | Interior, exterior, paint correction, ceramic coating, areas, work, FAQ, contact | State the USD 35 one-time fee per appointment plus the applicable in-shop package price; confirm remaining operational details per appointment. |
| Service areas | Mobile detailing, contact, service hub, appropriate services | Do not link town names until qualifying pages are published. |
| Our work | Matching service page and contact per project | Use project-specific context. |
| About / FAQ / Contact | Relevant service pages, service hub, areas, work, homepage | Route visitors to the most useful canonical destination. |

## Phase 4 — schema decision matrix (`TSK-01598`)

| Page / scope | Proposed schema | Preconditions and exclusions |
| --- | --- | --- |
| Sitewide business identity | `LocalBusiness`; use `AutomotiveBusiness` only if confirmed as an accurate classification | Use only verified NAP, hours, geo/address, service area, sameAs profiles, logo, and contact details. Do not use nonexistent `AutoDetailing`. Use one canonical entity definition; add a separate `Organization` only when it has a distinct, truthful role and references the same entity. |
| Homepage | `LocalBusiness`/selected subtype and `WebSite` where appropriate | Must match visible content exactly. Do not invent aggregate ratings, review counts, awards, or service prices. |
| Service pages | `Service` | Use only services actually offered; link provider to the verified business entity. Do not add unsupported offers. |
| All appropriate hierarchy pages | `BreadcrumbList` | Must match visible breadcrumbs exactly. |
| Our Work | No automatic specialized schema | Consider `ImageObject` only for clearly owned/licensed, accurately described original work; do not fabricate case-study or review data. |
| FAQ | No new commercial `FAQPage` schema for Google rich-result benefit | Visible FAQs are allowed when useful; answers must be factual and maintained. |
| Contact | No separate schema required beyond the canonical business entity | Use the verified address and contact details in visible HTML. |

**Validation sequence:** validate JSON-LD in Schema Markup Validator and Google Rich Results Test, correct errors/warnings that reflect inaccurate or unsupported data, then test the live canonical URL after deployment.

## Phase 5 — metadata and heading register (`TSK-01599`, `TSK-01600`)

| URL | Proposed title | Proposed H1 | Proposed meta description |
| --- | --- | --- | --- |
| `/` | Auto Detailing in Basking Ridge, NJ \| CleanWorx | Professional Auto Detailing in Basking Ridge, NJ | CleanWorx provides professional auto detailing in Basking Ridge, NJ, including ceramic coating, interior detailing, exterior detailing, and catalog-confirmed supplemental services. |
| `/ceramic-coating` | Ceramic Coating in Basking Ridge, NJ \| CleanWorx | Professional Ceramic Coating in Basking Ridge, NJ | Protect your vehicle with professional ceramic coating in Basking Ridge, NJ. Request a CleanWorx quote for preparation, protection, and care. |
| `/paint-correction` | Paint Correction in Basking Ridge, NJ \| CleanWorx | Paint Correction & Car Scratch Removal in Basking Ridge, NJ | Improve paint clarity with professional paint correction in Basking Ridge, NJ. Services start at USD 350; an inspection defines the right multi-step process. |
| `/interior-detailing` | Interior Car Detailing in Basking Ridge, NJ \| CleanWorx | Deep Interior Car Detailing in Basking Ridge, NJ | CleanWorx provides deep interior car detailing in Basking Ridge, NJ for seats, carpets, upholstery, pet hair, and everyday vehicle care. |
| `/exterior-detailing` | Exterior Car Detailing in Basking Ridge, NJ \| CleanWorx | Professional Exterior Detailing in Basking Ridge, NJ | Choose professional exterior car detailing in Basking Ridge, NJ with hand care, decontamination, paint protection options, and booking support. |
| `/mobile-auto-detailing` | Mobile Auto Detailing in Basking Ridge, NJ \| CleanWorx | Mobile Auto Detailing in Basking Ridge, NJ | CleanWorx brings mobile auto detailing to eligible Basking Ridge area locations. Mobile appointments add a one-time USD 35 fee to the applicable in-shop package price. |
| `/services` | Auto Detailing Services in Basking Ridge, NJ \| CleanWorx | Auto Detailing Services | Explore CleanWorx auto detailing services in Basking Ridge, NJ, from ceramic coating and paint correction to interior, exterior, and mobile detailing. |
| `/service-areas` | Auto Detailing Service Areas in NJ \| CleanWorx | Auto Detailing Service Areas in New Jersey | See the New Jersey communities CleanWorx serves from Basking Ridge and confirm the best studio or mobile appointment option for your vehicle. |
| `/our-work` | Auto Detailing Portfolio \| CleanWorx Basking Ridge | Our Detailing Work | View original CleanWorx detailing projects, including ceramic coating, paint correction, interior, exterior, and mobile service work. |
| `/about` | About CleanWorx Auto Detailing \| Basking Ridge, NJ | About CleanWorx | Learn about CleanWorx Auto Detailing in Basking Ridge, NJ, our studio, team, approach, and commitment to thoughtful vehicle care. |
| `/faq` | Auto Detailing FAQs \| CleanWorx Basking Ridge | Frequently Asked Questions | Find answers about CleanWorx detailing services, quotes, ceramic coating, paint correction, mobile availability, service areas, and booking. |
| `/contact` | Contact CleanWorx Auto Detailing \| Basking Ridge, NJ | Book Your Detailing Appointment | Contact CleanWorx Auto Detailing in Basking Ridge, NJ to request an appointment, ask about service availability, or get directions to our studio. |

### Heading hierarchy rules

- One H1 per page, expressing the unique page purpose.
- H2s follow the page-specific sections defined in the brief/wireframe. H3s only divide a genuine H2 subsection or repeated component.
- Do not use headings only for visual sizing, and do not skip from H1 to H3.
- Do not make headings out of `near me` phrases. Use service topic plus natural geographic clarity when needed.
- Service-card titles and FAQ questions may be H3s only when they are semantically within an H2 section.

## Phase 6 — crawlable HTML (`TSK-01601`)

- Render H1, service descriptions, location/service-area context, navigation links, internal links, NAP, and CTAs as semantic HTML that is available without a click, hover, client-side filter, or modal.
- Use real `<a>` links for internal destinations and contact actions, not JavaScript-only controls.
- Give each image meaningful `alt` text; decorative images use empty alt text.
- Provide captions/context in text for portfolio imagery when that evidence supports a service claim.
- Do not load core commercial copy exclusively after client-side JavaScript. Do not hide essential copy behind accordions.
- Preserve a valid document outline and accessible labels for all form fields, map iframe, navigation, and interactive components.

## Phase 7 — GBP map on contact page (`TSK-01602`)

### Required implementation specification

- Use the confirmed official Google Maps/GBP embed below, configured for CleanWorx Auto Detailing & Ceramic Coating.
- Add an iframe `title` such as `Map showing CleanWorx in Basking Ridge, New Jersey`.
- Keep the business name, full address, telephone, hours, and a text directions/open-in-maps link outside the iframe.
- Load the iframe lazily and reserve its dimensions to prevent layout shift.
- Do not expose an API key in client-side code. If an API-backed map is chosen, use approved server-side/environment configuration instead.
- Verify the pin, business name, address, studio/mobile guidance, responsive behavior, keyboard focus, and fallback link after deployment.

### Confirmed Google Maps embed

```html
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.5869284608007!2d-74.5482277!3d40.7050942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b79f2ad31b11%3A0xddacbc0a3ba76720!2sCleanWorx%20Auto%20Detailing%20%26%20Ceramic%20Coating!5e0!3m2!1ses!2sdo!4v1790135250329!5m2!1ses!2sdo"
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="strict-origin-when-cross-origin"
  title="Map showing CleanWorx Auto Detailing and Ceramic Coating"
></iframe>
```

The implementation should make the iframe responsive while retaining `loading="lazy"`, `referrerpolicy="strict-origin-when-cross-origin"`, an accessible title, and the visible text-address fallback.

## Launch acceptance checklist

- [ ] All 12 approved canonical routes exist or are intentionally deferred according to this plan.
- [ ] No template copy, placeholder business data, fictitious reviews, unverified claims, or unapproved services remain.
- [ ] Every page matches its assigned service topic and does not use `near me` as a keyword target.
- [ ] Page title, meta description, canonical URL, H1, headings, visible content, and JSON-LD agree.
- [ ] Required internal links work, target canonical URLs, and use useful contextual anchors.
- [ ] Core commercial content is present in rendered HTML and accessible without JavaScript interactions.
- [ ] Contact page contains confirmed NAP and the verified GBP map with accessible fallback content.
- [ ] Schema is validated against the visible page and contains no invented ratings, reviews, offers, credentials, or business details.
- [ ] Mobile and desktop layouts are visually and functionally tested; images have reserved dimensions and no material CLS is introduced.
- [ ] Redirects, sitemap, robots, analytics/conversion tracking, and post-launch QA are handled in their separate authorized workstreams.

## Decisions needed before the future implementation phase

1. Resolve the six-year coating title versus five-year description, then supply any package-specific warranty/guarantee terms and eligibility conditions.
2. Confirm mobile coverage, eligible in-shop packages, access requirements, and weather policy for publication.
3. Assign the on-site booking URL/anchor and form-handling/tracking method; do not use `/contact` by default.
4. Supply approved original work images and the factual information needed to caption them.
5. Confirm whether the current canonical domain and telephone number remain final.

Until these are confirmed, this task is complete as an execution plan only; it must not be marked as a completed website implementation.

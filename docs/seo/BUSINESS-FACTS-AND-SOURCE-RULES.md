# CleanWorx — Business Facts & Source Rules

**Status:** Planning source of truth for the future website implementation. This file does not authorize website changes.  
**Updated:** 2026-09-23

## Source hierarchy

| Topic | Authoritative source | Publication rule |
| --- | --- | --- |
| Current services, package names, visible prices, durations, standalone/add-on status, and package inclusions | [CATALOGO-SERVICIOS-SQUARE-2026-09-23.md](./CATALOGO-SERVICIOS-SQUARE-2026-09-23.md), except the two owner-confirmed catalog omissions below | Treat Square as the operational source. Do not invent packages, prices, durations, inclusions, or standalone availability. A `+` or `Price varies` remains visible where published. |
| Legal/business identity, address, phone, email, hours, launch history, broad service-area guidance, and certification declaration | [`CleanWorx-SEO-Onboarding.md`](../../CleanWorx-SEO-Onboarding.md) | Use the supplied facts exactly and keep NAP/hours consistent across visible content, schema, contact data, and GBP. |
| Keyword ownership, canonical URL strategy, and anti-cannibalization rules | [KEYWORD-URL-MAPPING.md](./KEYWORD-URL-MAPPING.md) | Research determines demand and page intent; it never creates a service that is absent from the operational source. |
| Warranty terms | Written product/package terms plus the business's approved conditions | Do not publish a general “guarantee,” a duration as a warranty, or a warranty badge until the product, eligibility, registration, inspection/maintenance conditions, exclusions, and claimant process are documented. |

## Confirmed business facts for planning

| Fact | Confirmed value | Source |
| --- | --- | --- |
| Business name | CleanWorx Auto Detailing & Ceramic Coating | Onboarding |
| Address | 19 E. Henry Street, Basking Ridge, NJ | Onboarding |
| Phone | 908-899-2832 | Onboarding |
| Email | cleanworxnj@gmail.com | Onboarding |
| Hours | Monday–Saturday, 9:00 AM–5:00 PM; closed Sunday | Onboarding |
| Certification declaration | System X Ceramic Coating certified | Onboarding |
| Booking | The booking process will live on the website. No booking URL, route, anchor, or technical destination has been assigned yet. | Owner direction, 2026-09-23 |
| Paint correction | Standalone service from USD 350.00; multiple correction stages are available. Final scope and price depend on the vehicle's condition and the customer's needs/wants. | Owner confirmation, 2026-09-23 |
| Mobile detailing | Offered. Add a one-time USD 35.00 mobile fee per appointment to the applicable in-shop package price. | Owner confirmation, 2026-09-23 |

## Service reconciliation and publication constraints

- Square currently publishes 20 bookable services. It is the primary source for current service availability and commercial details, with two documented owner-confirmed omissions: standalone paint correction and mobile detailing. Update Square before implementation where possible so the public catalog matches the approved website plan.
- The catalog confirms full interior/exterior detailing, exterior detailing, interior detailing, ceramic-coating options, mini/exterior wash packages, 1 Step Polish as an **add-on**, air purification, interior protection, engine-bay cleaning, headlight restoration, extra-cleaning charges, and tint removal.
- The catalog publishes coating packages of **1 year, 3 years, and 6 years**. The title of the 6-year package conflicts with its own description, which says 5-year; no web copy may resolve that discrepancy without owner confirmation.
- Paint correction is an approved standalone service from USD 350.00. The exact correction stage, scope, and final price are assessment-led because vehicle condition and customer goals differ. Do not publish a fixed package matrix, a universal result, or an exact scratch-removal promise without the owner-approved option details.
- Mobile detailing is an approved service. The mobile appointment price is the applicable in-shop package price plus one one-time USD 35.00 fee per appointment. Do not imply the fee is per vehicle, per hour, or per service. Coverage, eligible package limits, access requirements, and weather policy must be confirmed before implementation copy makes those claims.
- Engine-bay cleaning, headlight restoration, and air purification are catalog-confirmed offerings. Their dedicated SEO URLs are deferred for this phase because no separate page is yet justified; this does **not** mean the business does not offer them. They may appear factually as supplementary or add-on services in the services hub and relevant approved service pages.
- The catalog’s absolute ozone/odor wording is not approved for reuse. Describe air purification only with owner-approved, non-medical, non-absolute language and do not make mold-remediation, sanitization, or guaranteed odor-elimination claims.

## Certification and warranty decision

The System X certification is sufficiently confirmed for planning by the owner-provided onboarding record. Before a public certification claim goes live, retain a current credential, installer record, or equivalent owner evidence in the project files.

System X's official materials show that warranty eligibility varies by product and conditions. For example, the official technical catalog describes a six-year Pro+ warranty only when installed by an Accredited Installation Center and when annual inspection requirements are met; the manufacturer also provides warranty registration. This confirms that a product warranty may exist, **not** that every CleanWorx ceramic-coating package carries that warranty. Until the owner supplies the exact product and terms for each package, use no CleanWorx warranty or guarantee claim. [System X technical catalog](https://www.systemx.com/wp-content/uploads/2026/01/SX-TECH-CATALOG-012026_compressed.pdf) · [System X warranty registration](https://systemx.com/pages/warranty-registration)

## Booking CTA rule

Until a booking URL is assigned, `Book now`, `Request an appointment`, and `Check availability` are interface requirements, not hyperlinks to `/contact` or a guessed route. The future implementation must connect them to the on-site booking process only after its destination and tracking event are defined. `/contact` remains the contact/location page and may include the booking interface, but it is not automatically the booking URL.

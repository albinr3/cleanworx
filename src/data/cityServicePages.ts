export const citySlugs = [
  "woodbridge-nj",
  "edison-nj",
  "westfield-nj",
  "cranford-nj",
  "bridgewater-nj",
] as const;

export type CitySlug = (typeof citySlugs)[number];

export const serviceTopics = [
  { id: "ceramic-coating", title: "Ceramic Coating", href: "/ceramic-coating" },
  { id: "paint-correction", title: "Paint Correction", href: "/paint-correction" },
  { id: "window-tinting", title: "Window Tinting", href: "/window-tinting" },
  { id: "interior-detailing", title: "Interior Detailing", href: "/interior-detailing" },
  { id: "exterior-detailing", title: "Exterior Detailing", href: "/exterior-detailing" },
  { id: "mobile-auto-detailing", title: "Mobile Auto Detailing", href: "/mobile-auto-detailing" },
  { id: "headlight-restoration", title: "Headlight Restoration", href: "/headlight-restoration" },
  { id: "car-odor-treatment", title: "Car Odor Treatment", href: "/car-odor-treatment" },
] as const;

export type ServiceTopicId = (typeof serviceTopics)[number]["id"];

type CityPageContent = {
  city: string;
  intro: string;
  appointmentNote: string;
  fullDetailNote: string;
  engineBayNote: string;
  serviceCopy: Record<ServiceTopicId, string>;
  questions: readonly { question: string; answer: string }[];
  photoIds: readonly string[];
  serviceStories?: Partial<Record<ServiceTopicId, {
    title: string;
    image: string;
    imageAlt: string;
    imageWidth: number;
    imageHeight: number;
    layout?: "split";
    paragraphs: readonly string[];
  }>>;
};

// Five unique portfolio images per city, distributed by the services they document.
// No image is reused between cities; work-09 is the only unused portfolio item.
export const cityPages: Record<CitySlug, CityPageContent> = {
  "woodbridge-nj": {
    city: "Woodbridge",
    intro:
      "Woodbridge drivers come to us for paint correction, persistent interior odors, and full details. Our shop is in Basking Ridge. We confirm mobile availability for each appointment.",
    appointmentNote:
      "Tell us whether you prefer our Basking Ridge shop or a mobile appointment in Woodbridge. We confirm which service can be performed at your location before scheduling.",
    fullDetailNote:
      "A full detail covers the interior and exterior. The homepage explains the combined service, and we assess both sides of your vehicle before recommending the work.",
    engineBayNote:
      "Engine bay cleaning is available as a specialized service. We review access and condition before discussing the appropriate cleaning approach; see our add-ons page for details.",
    photoIds: ["work-12", "work-24", "work-23", "work-01", "work-21"],
    serviceCopy: {
      "ceramic-coating":
        "Ceramic coating protects prepared paint with a water-repellent layer that makes the exterior easier to maintain. For a Woodbridge vehicle, we inspect the finish at our Basking Ridge shop, remove contamination, and discuss any polishing needed before applying a catalog-listed coating option.",
      "paint-correction":
        "Paint correction uses machine polishing to reduce wash swirls, haze, and light scratches so the finish reflects more clearly. We inspect the clear coat on each Woodbridge vehicle and set a safe polishing scope based on its condition. We then explain how to wash and care for the corrected paint.",
      "window-tinting":
        "Window tinting adds Carbon or Ceramic film to selected windows for privacy, UV protection, and heat reduction. We review the glass on a Woodbridge vehicle, help choose the film and windows, and remove old tint if needed. The front windshield is treated separately from full-vehicle packages, and we confirm whether installation is suitable for the shop or a mobile visit.",
      "interior-detailing":
        "Interior detailing cleans seats, carpets, mats, and trim using methods suited to their materials. For a Woodbridge vehicle, we assess buildup, stains, and pet hair before deciding where steam or extraction is needed. Persistent odors may also call for a separate treatment at our shop.",
      "exterior-detailing":
        "Exterior detailing combines a careful hand wash with wheel and tire cleaning, glass and trim care, and paint decontamination when needed. We finish a Woodbridge vehicle with suitable exterior protection after the surfaces are clean. Interior detailing can be added when the whole vehicle needs attention.",
      "mobile-auto-detailing":
        "Mobile auto detailing brings our equipment to a suitable Woodbridge home or workplace for eligible interior, exterior, or full detailing. We confirm the service, vehicle, and space before scheduling. One $50 mobile fee applies when the pre-fee appointment subtotal is below $400; there is no mobile fee at $400 or more.",
      "headlight-restoration":
        "Headlight restoration removes surface oxidation and haze from cloudy lenses. At our Basking Ridge shop, we clean, sand, polish, and protect the headlights on a Woodbridge vehicle when the lens condition allows it. Damage inside the housing or cracked lenses may need another repair.",
      "car-odor-treatment":
        "Car odor treatment addresses persistent smells such as smoke or pet odor. We check a Woodbridge vehicle for residue or affected materials that may need cleaning, then discuss whether in-shop ozone air purification is appropriate. Ozone circulates through the interior, but a continuing source or new exposure can bring an odor back; we do not promise total or permanent removal.",
    },
    questions: [
      {
        question: "Can a Woodbridge vehicle receive smoke or pet odor treatment?",
        answer:
          "Yes, ask us to assess the vehicle. The dedicated odor treatment is performed at our Basking Ridge shop; the source and condition determine the recommended work.",
      },
      {
        question: "Do you have a Woodbridge shop?",
        answer:
          "Our shop is in Basking Ridge. Eligible mobile visits in Woodbridge are confirmed for each appointment.",
      },
    ],
  },
  "edison-nj": {
    city: "Edison",
    intro:
      "Edison customers visit our Basking Ridge shop for paint, interior, and specialist work. Some detailing appointments can be done at their location after we confirm the service and site. We do not have a shop in Edison.",
    appointmentNote:
      "Describe the vehicle's condition and the result you want, then let us know whether you are considering a shop appointment or mobile service in Edison.",
    fullDetailNote:
      "A full detail covers the interior and exterior. The homepage explains what affects its price. Tell us which areas need the most attention when you request a quote.",
    engineBayNote:
      "Engine bay cleaning is a separate specialized option. Ask about it when planning a full detail, and review its scope on the add-ons page.",
    photoIds: ["work-08", "work-13", "work-05", "work-02", "work-10"],
    serviceCopy: {
      "ceramic-coating":
        "Ceramic coating forms a protective, water-repellent layer over prepared paint and helps make regular washing easier. For an Edison vehicle, we inspect and decontaminate the finish at our Basking Ridge shop, discuss any correction needed, and apply the coating option chosen for that vehicle.",
      "paint-correction":
        "Paint correction uses machine polishing to reduce swirls, wash marks, and haze that a wash cannot remove. We inspect the clear coat on an Edison vehicle, set a realistic goal, and polish within what the paint can safely support. Deep damage may remain and can require another type of repair.",
      "window-tinting":
        "Window tinting applies Carbon or Ceramic film to selected glass for privacy, UV protection, and reduced interior heat. We help Edison drivers choose the film and windows, and can remove deteriorated existing tint. The vehicle layout and chosen glass determine the installation scope; we confirm shop or eligible mobile service before booking.",
      "interior-detailing":
        "Interior detailing deep-cleans the seats, carpets, mats, and trim rather than stopping at a surface wipe. We assess an Edison vehicle's materials and soiling, then use steam, extraction, and material-specific care where appropriate. Tell us about stains or pet hair so we can plan the work.",
      "exterior-detailing":
        "Exterior detailing includes a careful hand wash, wheel and tire cleaning, attention to glass and trim, and decontamination of affected paint. We finish an Edison vehicle with suitable protection after cleaning the surfaces. Interior work can be added for a full detail.",
      "mobile-auto-detailing":
        "Mobile auto detailing brings our self-contained equipment to a suitable Edison home or workplace for eligible interior, exterior, or full detailing. We confirm the service and setup before scheduling. A $50 fee applies once per appointment below a $400 pre-fee subtotal; appointments of $400 or more have no mobile fee.",
      "headlight-restoration":
        "Headlight restoration clears surface haze and yellowing by cleaning, sanding, and machine polishing the lenses, then adding protection. We inspect both headlights on an Edison vehicle at our Basking Ridge shop to confirm what can be refinished. Cracks or damage inside the housing cannot be corrected by polishing the exterior.",
      "car-odor-treatment":
        "Car odor treatment targets persistent smells inside the vehicle. We look for residue or other sources in an Edison vehicle, discuss any interior cleaning needed, and perform ozone air purification at our Basking Ridge shop when appropriate. Odors can remain or return if the source is still present, so results are not guaranteed to be complete or permanent.",
    },
    questions: [
      {
        question: "Can I combine interior and exterior detailing?",
        answer:
          "Yes. Review full detailing on the homepage, then share your vehicle's condition for a suitable appointment and price.",
      },
      {
        question: "Is headlight restoration part of every Edison detail?",
        answer:
          "No. It is a specialist service to discuss separately after the headlight lenses have been assessed.",
      },
    ],
  },
  "westfield-nj": {
    city: "Westfield",
    intro:
      "Westfield customers have come to us with marked satin wraps, brake dust on wheels, and interiors that needed care before a trip. Our shop is in Basking Ridge; mobile visits depend on the service and location.",
    appointmentNote:
      "When contacting us from Westfield, include the vehicle, the areas that concern you, and whether you would like to discuss shop or eligible mobile service.",
    fullDetailNote:
      "A full detail covers the interior and exterior. The homepage describes the combined service. When requesting a quote, tell us which parts of your Westfield vehicle need the most attention.",
    engineBayNote:
      "An engine bay clean can be discussed alongside a detail when appropriate. It is described with the other specialized options on our add-ons page.",
    photoIds: ["work-22", "work-11", "work-26", "work-25", "work-20"],
    serviceCopy: {
      "ceramic-coating":
        "Ceramic coating adds a protective layer to a properly prepared finish and makes maintenance easier. We inspect a Westfield vehicle at our Basking Ridge shop, remove contamination, and discuss any correction before applying the coating. Satin wraps need products suited to their finish so they keep their intended appearance.",
      "paint-correction":
        "Paint correction uses machine polishing to reduce swirls, wash marks, haze, and light scratches in the clear coat. We inspect a Westfield vehicle under suitable light, choose a safe polishing process, and check the finish as we work. The result depends on the paint's condition and the depth of the marks.",
      "window-tinting":
        "Window tinting applies Carbon or Ceramic film to selected windows for privacy, UV protection, and heat reduction. We review the glass on a Westfield vehicle, remove old film when needed, and install the chosen option. Film choice and window configuration affect the quote and warranty; we confirm shop or eligible mobile installation.",
      "interior-detailing":
        "Interior detailing cleans seats, carpets, mats, and trim with methods suited to each material. For a Westfield vehicle, we assess stains and buildup, then use steam, extraction, and leather or trim care where appropriate. Tell us about problem areas before booking so we can set the scope.",
      "exterior-detailing":
        "Exterior detailing cleans the paint, wheels, tires, glass, and trim with a careful hand wash and targeted decontamination. We inspect a Westfield vehicle before choosing the preparation and finish with suitable paint protection. Interior detailing can be added for a full detail.",
      "mobile-auto-detailing":
        "Mobile auto detailing brings our equipment to a suitable Westfield driveway or workplace for eligible interior, exterior, or full detailing. We confirm the parking space, requested work, and schedule before the visit. A single $50 mobile fee applies below a $400 pre-fee appointment subtotal; it is waived at $400 or more.",
      "headlight-restoration":
        "Headlight restoration removes surface oxidation and haze from the lenses through cleaning, sanding, and polishing, then adds protection. We inspect both headlights on a Westfield vehicle at our Basking Ridge shop before refinishing them. Internal damage or cracks need a different repair.",
      "car-odor-treatment":
        "Car odor treatment addresses smoke and other persistent interior smells. We check a Westfield vehicle for affected fabrics or residue that may need cleaning, then discuss in-shop ozone air purification to treat lingering odor compounds. Results depend on the source and interior condition; no treatment can promise total or permanent removal.",
    },
    questions: [
      {
        question: "Can Westfield drivers request mobile detailing?",
        answer:
          "Yes, for eligible services. CleanWorx confirms service suitability, location, schedule, and any mobile fee before booking.",
      },
      {
        question: "Can ceramic coating and paint correction be discussed together?",
        answer:
          "Yes. The finish is assessed first so the polishing scope and coating option can be discussed for that particular vehicle.",
      },
    ],
  },
  "cranford-nj": {
    city: "Cranford",
    serviceStories: {
      "headlight-restoration": {
        title: "Blue Pickup — Headlight Restoration",
        image: "/images/autodetail/headlight-restoration-before-after-blue-vehicle.webp",
        imageAlt: "Headlight restoration before and after on a blue vehicle: cloudy lens above, clearer lens below",
        imageWidth: 1374,
        imageHeight: 1145,
        paragraphs: [
          "A Cranford driver contacted us because the headlights on his blue pickup looked cloudy. Gray haze hid the reflector bowls and amber marker even when the front end was clean. We examined the lens and discussed restoration as a separate job before deciding how much refinishing it could take.",
          "We refinished and polished the lens, then added protection. In the before photo, haze covers the lamp from edge to edge. Afterward, the reflectors and amber marker are easier to see. We explained that a lens with deeper damage could need a different approach.",
        ],
      },
    },
    intro:
      "Cranford customers have brought us cloudy headlights, satin finishes, and interiors needing attention. Those jobs call for different methods at our Basking Ridge shop. We confirm mobile availability for each request.",
    appointmentNote:
      "If you are coming from Cranford, tell us whether the priority is the whole vehicle or a specific issue such as oxidized headlight lenses, and share photos when requesting an assessment.",
    fullDetailNote:
      "A full detail covers the interior and exterior. The homepage explains the combined service. Mention any paint, headlight, or odor concerns when you contact us so we can discuss specialist work separately.",
    engineBayNote:
      "Engine bay cleaning is a specialized add-on. We assess its condition and access before confirming scope; the add-ons page explains the offering.",
    photoIds: ["work-18", "work-03", "work-14", "work-16", "work-15"],
    serviceCopy: {
      "ceramic-coating":
        "Ceramic coating protects prepared paint with a water-repellent barrier that makes the exterior easier to clean. At our Basking Ridge shop, we inspect and decontaminate a Cranford vehicle, discuss any paint correction needed, and apply a coating suited to the finish. Regular washing is still part of its care.",
      "paint-correction":
        "Paint correction uses machine polishing to reduce swirls, haze, and light scratches and improve the paint's reflection. We inspect the clear coat on a Cranford vehicle before deciding whether a focused polish or broader correction is safe. Deep marks may remain if removing them would take too much clear coat.",
      "window-tinting":
        "Window tinting applies Carbon or Ceramic film to selected glass to add privacy, block UV, and reduce interior heat. We review a Cranford vehicle's windows, remove old tint if needed, and install the chosen film. The film and window configuration affect the quote; we confirm whether shop or eligible mobile installation is suitable.",
      "interior-detailing":
        "Interior detailing cleans seats, carpets, mats, trim, and frequently touched surfaces. We assess the materials and soiling in a Cranford vehicle, then use steam, extraction, or material-specific care where appropriate. Stains and pet hair should be mentioned before a full detail so we can include the needed interior work.",
      "exterior-detailing":
        "Exterior detailing washes the body by hand, cleans wheels and tires, and addresses glass, trim, and paint contamination. We inspect a Cranford vehicle before choosing any decontamination and finish the cleaned exterior with protection. Engine bay cleaning is a separate service when that area needs attention.",
      "mobile-auto-detailing":
        "Mobile auto detailing brings our equipment to a suitable Cranford home or workplace for eligible interior, exterior, or full detailing. We confirm the vehicle, requested work, and address before scheduling. A single $50 mobile fee applies below a $400 pre-fee appointment subtotal; appointments of $400 or more do not have that fee.",
      "headlight-restoration":
        "Headlight restoration removes the weathered outer layer from cloudy lenses through cleaning, controlled sanding, and machine polishing. We add protection after refinishing both headlights on a Cranford vehicle. The improvement depends on lens condition; cracks and internal damage need a different repair.",
      "car-odor-treatment":
        "Car odor treatment starts by identifying residue or another source of a lingering interior smell. We discuss cleaning affected materials in a Cranford vehicle and, when appropriate, perform ozone air purification at our Basking Ridge shop. The treatment addresses odor compounds in the interior, but a remaining source can cause the smell to return.",
    },
    questions: [
      {
        question: "Will ordinary detailing restore cloudy headlights?",
        answer:
          "No. Headlight restoration is a separate service, and the lens condition needs to be assessed before a result can be discussed.",
      },
      {
        question: "Where is the CleanWorx shop?",
        answer:
          "The shop is at 19 E. Henry Street in Basking Ridge, NJ. Ask us which Cranford appointments are eligible for mobile service.",
      },
    ],
  },
  "bridgewater-nj": {
    city: "Bridgewater",
    serviceStories: {
      "car-odor-treatment": {
        title: "Ferrari Interior — Ozone Odor Treatment",
        image: "/images/autodetail/ferrari-interior-ozone-car-odor-treatment.webp",
        imageAlt: "Ferrari black leather interior with a red ozone generator set on a towel for car odor treatment",
        imageWidth: 1433,
        imageHeight: 1098,
        layout: "split",
        paragraphs: [
          "A Bridgewater owner brought his Ferrari to our Basking Ridge shop because of a lingering interior smell. The black leather and red stitching looked well cared for, so we checked whether the odor had a physical source that needed cleaning before discussing air purification.",
          "We placed the red ozone generator on a towel inside the Ferrari, keeping it off the leather during the in-shop treatment. At pickup, we explained that ozone can address lingering odor compounds, while a spill or residue still needs cleaning if it is the source.",
        ],
      },
    },
    intro:
      "Bridgewater customers visit our Basking Ridge shop for paint correction, ceramic coating, and interior odor treatment. Some detailing work can also be done at their home or workplace after we confirm the service and site.",
    appointmentNote:
      "Share your Bridgewater location, vehicle details, and the surfaces you want addressed. We will confirm whether a shop or mobile appointment is appropriate for that service.",
    fullDetailNote:
      "The homepage explains full interior and exterior detailing and how vehicle condition affects price. Tell us about paint, headlights, odors, or the engine bay when requesting a quote so we can discuss specialist work separately.",
    engineBayNote:
      "Engine bay cleaning is available as a specialized service; its scope depends on the vehicle and is described on the add-ons page.",
    photoIds: ["work-07", "work-19", "work-04", "work-06", "work-17"],
    serviceCopy: {
      "ceramic-coating":
        "Ceramic coating adds a protective, water-repellent layer to prepared paint and makes routine washing easier. At our Basking Ridge shop, we wash and decontaminate a Bridgewater vehicle, inspect the finish, and discuss any polishing needed before applying a catalog-listed coating option.",
      "paint-correction":
        "Paint correction uses machine polishing to reduce swirls, haze, and light scratches in the clear coat and bring back a clearer reflection. We inspect each Bridgewater vehicle in person before choosing a polishing process the paint can safely support. The scope and price depend on its condition.",
      "window-tinting":
        "Window tinting applies Carbon or Ceramic film to the selected glass for privacy, UV protection, and less heat inside the vehicle. We review the windows on a Bridgewater vehicle, discuss film options, and remove existing tint when needed. The front windshield and installation location are confirmed separately.",
      "interior-detailing":
        "Interior detailing cleans the seats, carpets, mats, and trim with methods suited to each material. For a Bridgewater vehicle, we assess stains, pet hair, and worn areas, then use cleaning, steam, or extraction where appropriate. We can pair it with exterior work for a full detail; persistent odors may need separate treatment.",
      "exterior-detailing":
        "Exterior detailing starts with a careful hand wash, wheel and tire cleaning, and attention to glass and trim. We check a Bridgewater vehicle for bonded contamination, clean the affected surfaces, and finish with paint protection suited to the job. Engine bay cleaning and headlight restoration are separate services.",
      "mobile-auto-detailing":
        "Mobile auto detailing brings our equipment to a suitable Bridgewater home or workplace for eligible interior, exterior, or full detailing. We confirm the requested work, address, and setup before scheduling. One $50 mobile fee applies when the pre-fee appointment subtotal is below $400; there is no mobile fee at $400 or more.",
      "headlight-restoration":
        "Headlight restoration removes surface oxidation from cloudy lenses through cleaning, controlled sanding, and machine polishing. We then protect the refinished lenses. A Bridgewater vehicle's lens condition determines how much clarity we can restore; cracks or damage inside the housing need a different repair.",
      "car-odor-treatment":
        "Car odor treatment starts by checking for the source of a persistent smell. When cleaning is needed, we discuss that work separately; our in-shop ozone air purification treatment circulates through the interior to address lingering odor compounds. For a Bridgewater vehicle, results depend on the source and materials affected, so we do not promise permanent removal.",
    },
    questions: [
      {
        question: "What if my Bridgewater vehicle needs several services?",
        answer:
          "Describe the whole vehicle and your priorities. CleanWorx can discuss full detailing together with any separate specialist services.",
      },
      {
        question: "Is every service available at my address?",
        answer:
          "No. Mobile suitability is confirmed for the specific service and location; the Basking Ridge shop remains available for shop work.",
      },
    ],
  },
};

export const portfolioStories: Record<string, string> = {
  "work-01":
    "The engine bay of a Mercedes-Benz C-Class looked older than the rest of the car when its owner from Fords in Woodbridge Township opened the hood. He wanted it cleaned before a weekend visit with family, but was worried about water around the electrical parts. We asked him to bring the car from Fords to our shop at 19 E. Henry St in Basking Ridge so we could look at the bay before agreeing on the scope.\n\nWe worked carefully around the electrical components, used steam and controlled degreasing on the dirty areas, and refreshed the plastic dressing. Then we hand-washed the front end so the visible exterior matched the work under the hood. When he lifted the hood again, the covers and trim looked clean.",
  "work-02":
    "Brake dust inside the wheels and faded trim stood out to an Edison C-Class Cabriolet owner preparing for open-top driving. She found us through the website; the body looked clean from a distance, while the wheels and trim showed the wear that concerned her. She drove from Edison to our 19 E. Henry St shop in Basking Ridge and showed us the areas that bothered her most.\n\nWe started with a careful two-bucket hand wash, then worked into the wheel barrels instead of stopping at the visible spokes. After conditioning the trim, we finished the paint with a protective glaze. She had booked an exterior detail; paint correction was outside the agreed scope.",
  "work-03":
    "After a track day, a Cranford Shelby GT350 owner noticed how tired the paint looked in direct light. He messaged us after seeing our paint work on social media and asked us to improve the paint without treating the vinyl stripes like painted panels. He drove from Cranford to our Basking Ridge shop on E. Henry St so we could inspect both surfaces together.\n\nWe separated the stripe preparation from the painted-panel work, decontaminated the stripes, and used a single-stage machine polish where the finish allowed it. A ceramic barrier completed the protection plan for future road and track grime.",
  "work-04":
    "A normal wash had left a Bridgewater family's Volvo XC90 looking dull, so they contacted us through the website. Swirls were visible on the paint, and the panoramic roof drew the eye every time they looked across the top of the SUV. They brought it from Bridgewater to our shop at 19 E. Henry St, Basking Ridge, and asked us to focus on the marked paint and panoramic roof glass.\n\nWe addressed the exterior swirls, polished the large roof glass, and finished with a ceramic sealant. The glass work mattered as much as the paint because it spans so much of this vehicle. At pickup, the paint reflected more evenly and the roof glass was clearer.",
  "work-05":
    "The carpets and wood trim inside an Edison customer's Range Rover Autobiography needed attention. She phoned us because daily use had worn the carpets and left fingerprints on the wood, even though the leather still looked good at first glance. She drove over from Edison to the CleanWorx shop on E. Henry St in Basking Ridge and asked for the interior to feel cared for again without harsh treatment of the delicate materials.\n\nWe used steam where appropriate, cleaned and conditioned the semi-aniline leather with a gentler approach, shampooed the carpets, and polished the wood trim.",
  "work-06":
    "A Bridgewater driver needed an exterior detail during the workday and asked through our contact form about the mobile unit he had seen online. His car would be available near Commons Way, where he hoped we could complete the detail. We checked the vehicle, the requested exterior work, and the available space before treating it as a mobile appointment.\n\nWe arrived with the equipment needed for the agreed detail, cleaned the exterior surfaces in sequence, and walked around the car with him before packing up.",
  "work-07":
    "Road film stood out against the gloss-black trim of an Alpine White BMW owned by a Bridgewater customer. He called us about it. He wanted ceramic protection, but also wanted to know whether the carbon-fiber roof would be included. He drove to our Basking Ridge shop at 19 E. Henry St, where we could examine the painted panels, roof, and dark accents in the same light.\n\nWe prepared each surface for its part of the coating job and protected the paint, carbon-fiber roof, and gloss-black trim. We explained how to wash the protected surfaces afterward.",
  "work-08":
    "Sunlight revealed faint marks in an Edison customer's Torch Red Corvette C8. He found us on social media after that drive. He wanted to protect the car while the finish was still relatively fresh, so he brought it from Edison to our 19 E. Henry St shop in Basking Ridge. We looked at the paint in proper light before discussing a System X ceramic coating; the surface underneath had to be ready before any protection went on.\n\nWe prepared the finish, installed the coating, and checked the red panels in daylight after the work. At pickup, he noticed the depth of the red paint; he had booked for the coating's hydrophobic protection. We also went over wash care so the gloss would not be undone by rough maintenance.",
  "work-09":
    "We carried out chemical decontamination and ceramic application on a Defender 110 in the Basking Ridge shop's LED detailing bay. Its large painted panels made preparation a substantial part of the work.",
  "work-10":
    "An Edison customer's new Quicksilver Tesla Model 3 Highland needed care, but he could not give up most of his day for a shop visit. He contacted us through the website. After he told us the car would be parked at a suitable driveway near Oak Tree Road, we confirmed a mobile detail.\n\nWe arrived at the Edison address, gave the paint a soft wash, used iron remover to deal with bonded contamination, and finished with a spray ceramic sealant. We explained that the spray sealant was a mobile finish-care product, separate from a shop-installed ceramic coating. Before leaving the Edison driveway, we went over gentle wash care for the sealed finish.",
  "work-11":
    "Fine wash marks caught the light on a Westfield customer's Guards Red Porsche 911 GT3. He called us about the paint. The micro-marring stood out in every reflection even though the car was clean. He brought the GT3 from Westfield to our shop on E. Henry St in Basking Ridge and asked us to improve the paint before protecting it.\n\nWe inspected the finish, machine-polished the marked areas, and checked the reflections before moving to the certified System X coating. Polishing addressed the visible defects, and the ceramic layer protected the prepared finish. We showed him the result in daylight and discussed careful washing so the same marks would not return quickly.",
  "work-12":
    "Soon after collecting his Magma Red Lotus Emira, an owner from Colonia in Woodbridge Township contacted us about ceramic protection. He wanted the composite body panels and gloss-black accents to be easier to care for between weekend drives. He brought the Emira from Colonia to our Basking Ridge shop at 19 E. Henry St so we could inspect each surface and agree on the coating scope.\n\nWe cleaned and prepared the car, including a single-stage gloss enhancement where appropriate, before applying the ceramic coating to the prepared exterior surfaces. In daylight, the red finish had a deeper gloss and the black accents looked crisp beside it. We explained how to wash and maintain the coated surfaces so he could preserve that finish after leaving the shop.",
  "work-13":
    "Even after washing, the Black Sapphire paint on an Edison customer's BMW 7 Series looked uneven in sunlight. He phoned us about the finish. Factory swirls broke up the reflection across the hood and doors. He drove the car from Edison to our 19 E. Henry St shop in Basking Ridge, where we inspected the finish under strong light and explained that this was correction work, not a cleaning problem.\n\nWe planned a two-stage approach, using rotary and dual-action polishing for the defects and final clarity. After each stage we checked the dark panels again rather than judging them only in shade. The finished black reflection was much more even. We explained how the original paint condition had shaped the polishing work on this BMW.",
  "work-14":
    "The Satin Daytona finish on a Cranford customer's Audi RS6 Avant needed cleaning without added shine. He found us through social media and asked about that before booking. He had seen standard detailing packages that focused on gloss, which was exactly the wrong goal for his car. He drove from Cranford to our shop at 19 E. Henry St in Basking Ridge so we could inspect the finish and the bronze forged wheels.\n\nWe used a matte-safe wash and decontamination approach for the body, keeping polish away from the satin finish. The wheels needed their own work, including high-temperature ceramic protection. When he collected the RS6, the paint still had its intended quiet sheen and the bronze wheels looked clean beside it.",
  "work-15":
    "The fabric roof and RS Spyder wheels made a basic detail feel incomplete to a Cranford owner of an Arctic Grey 911 Cabriolet. He called before the first long stretch of top-down weather. He wanted the paint looking sharper too. He brought the Porsche from Cranford to our shop on E. Henry St in Basking Ridge, where we could examine all three materials instead of quoting only the body paint.\n\nWe refined the paint in stages, treated the soft top with fabric-specific hydrophobic protection, and coated the wheels. When the car was ready, we walked him around the cabriolet and explained the different care needs of the fabric, finish, and wheels.",
  "work-16":
    "After a busy month, a Cranford driver's two-tone Mercedes-Maybach GLS 600 needed care that he hoped could be done at his location. He called us about a mobile detail. Bringing the large SUV to a shop was difficult that week, so he asked whether we could come to a suitable space near North Avenue East. We confirmed the site and the exact mobile scope before setting the visit.\n\nAt the Cranford appointment, we worked through the two-tone paint without treating both finishes as one anonymous surface, preserved the glossy ceramic finish, and gave the forged monoblock wheels focused care. Before leaving, we looked over the SUV with the owner and discussed upkeep.",
  "work-17":
    "Months of ordinary washing had left the Diamond White paint on a Bridgewater customer's Mercedes-AMG CLE 53 Cabriolet looking muted. She contacted us through the website. She liked the color and wanted to bring back the clarity of its metallic flake. She drove from Bridgewater to our Basking Ridge shop at 19 E. Henry St and asked whether a ceramic coating alone would bring back that crisp appearance. We explained that the finish underneath had to be addressed first.\n\nWe used a dual-action finishing polish to bring clarity to the white paint, then installed the ceramic coating for ongoing protection. The black wheels gave us a useful contrast when we reviewed the finished car with her. At pickup, she could see the added clarity in the Diamond White paint beneath the new coating.",
  "work-18":
    "Protecting the Nero Nemesis satin finish without adding shine was the priority for a Cranford Lamborghini Urus owner who contacted us through the website. He also wanted the acid-green calipers detailed. He drove the Urus from Cranford to our shop on E. Henry St in Basking Ridge, and we looked at the matte body and bright brake hardware as two separate parts of the job.\n\nWe prepared the satin surface with products suited to its finish and applied a matte-safe ceramic coating. Then we detailed the calipers so they looked as deliberate as the black body around them. At pickup the Urus still had its satin character.",
  "work-19":
    "The Olive Green paint on a Bridgewater customer's Porsche 911 GTS had lost some of the clarity he remembered from buying it. He called us about the finish. He had considered going straight to ceramic coating, but wanted someone to look at the finish first. He drove from Bridgewater to our Basking Ridge shop at 19 E. Henry St, where we inspected the paint in strong light and showed him why correction would come before protection.\n\nWe worked on the visible defects until the green finish reflected more cleanly, then applied the ceramic coating to the prepared surface. The Olive Green paint looked richer at pickup.",
  "work-20":
    "Brake dust built up quickly on the wheels of a Westfield driver's Polar White Mercedes-AMG CLA 45 S. He messaged us after seeing a mobile detail on social media. The car spent weekdays near East Broad Street. He wanted the car cleaned while he worked, so we confirmed that the location and requested exterior service suited a mobile visit.\n\nAt the Westfield appointment, we worked through a precision wash, broke down the brake dust, added a synthetic-wax gloss booster, and cleaned the exterior glass. At the end, we checked the wheels and windows with him.",
  "work-21":
    "A full detail at home suited the owner of a Rolls-Royce Cullinan in Sewaren, Woodbridge Township. He phoned us about bringing the service to his large SUV. We confirmed that his driveway had enough room for a mobile appointment and agreed to clean both the interior and exterior at his home.\n\nAt his Sewaren home, we cleaned the leather seats, carpets, and interior trim, then worked around the outside with foam decontamination, a careful hand wash, and attention to the wheels and glass. We finished the clean paint with a hand-applied ceramic sealant and walked through both the interior and exterior with him before leaving.",
  "work-22":
    "Marks on a satin wrap prompted a Westfield Range Rover SE owner to contact us through the website. He wanted protection without making the SUV glossy. He drove from Westfield to our shop at 19 E. Henry St in Basking Ridge, where we inspected the matte material and talked through what a finish-specific ceramic coating could and could not do.\n\nWe cleaned and prepared the satin surface, then used a coating formulated to protect it without adding artificial gloss. The 23-inch wheels were part of the final walkaround because their finish changes how the whole SUV reads. He left with the same restrained matte appearance he liked, plus a clearer idea of how to clean it without altering the wrap.",
  "work-23":
    "After seeing a Batumi Gold SUV on our social feed, a Range Rover owner from Iselin in Woodbridge Township called about window tint. He liked the privacy look but did not want to choose a film without first discussing which glass areas could be covered and how the darker windows would sit against the gold paint. He came from Iselin to our Basking Ridge shop on E. Henry St, where we reviewed film options and the vehicle's existing glass.\n\nWe confirmed the tint scope, prepared the windows, installed the chosen film, and checked the edges before handing the SUV back. We explained the initial curing period and care afterward.",
  "work-24":
    "Road film had dulled the Navarra Blue paint on an Audi S5 from Avenel in Woodbridge Township, while brake dust collected on the wheels. Its owner reached us through the website. He wanted the road film and brake dust removed, so he brought the coupe from Avenel to our Basking Ridge shop for an exterior detail.\n\nWe cleaned the wheels and tires, hand-washed the body, and checked the paint for bonded contamination before finishing the glass and exterior trim. We reviewed the result with him in daylight and discussed gentle washing to help keep the finish clean between details.",
  "work-25":
    "Mud remained in the underbody and wheel arches of a Westfield customer's Jeep Wrangler Rubicon 392 after an off-road weekend and a quick driveway wash. He called us about those hard-to-reach areas. He brought the Jeep from Westfield to our Basking Ridge shop on E. Henry St and asked us to concentrate on the areas that kept dropping dirt after every rinse.\n\nWe flushed the underbody, cleaned the wheel arches, and then worked outward to the visible surfaces. The matte fender flares received UV conditioning and the tires a suitable dressing. At pickup, the Jeep no longer carried that weekend's mud in its hidden corners.",
  "work-26":
    "Before a summer trip, a Westfield C-Class Cabriolet owner used our website form to ask about interior detailing. With the top down, every mark on the leather, dashboard, and center console seemed more noticeable, and she wanted the interior refreshed before the drive. She brought the car from Westfield to our Basking Ridge shop at 19 E. Henry St, where we looked at the interior materials and the areas exposed when the roof was open.\n\nWe cleaned and treated the leather, detailed the dashboard and console, and added UV-focused protection for top-down use. Before she left, we walked through simple care for the exposed interior. She collected the car with a cleaner interior for the summer trip she had planned.",
};

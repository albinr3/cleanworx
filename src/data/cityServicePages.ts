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
      "Woodbridge drivers bring us different jobs: paint that needs correction, interiors with persistent odors, and vehicles that need a full detail. Our shop is in Basking Ridge, and we confirm eligible mobile visits individually.",
    appointmentNote:
      "Tell us whether you prefer our Basking Ridge shop or a mobile appointment in Woodbridge. We confirm which service can be performed at your location before scheduling.",
    fullDetailNote:
      "For a complete interior and exterior detail, start with the full detailing guidance on our homepage. We assess both sides of the vehicle together rather than assuming one fixed scope suits every car.",
    engineBayNote:
      "Engine bay cleaning is available as a specialized service. We review access and condition before discussing the appropriate cleaning approach; see our add-ons page for details.",
    photoIds: ["work-12", "work-24", "work-23", "work-01", "work-21"],
    serviceCopy: {
      "ceramic-coating":
        "Ceramic coating starts with the surface underneath it. For Woodbridge customers, we check the paint for contamination and defects at our Basking Ridge shop, then discuss preparation and the catalog-listed coating options. The work shown below includes different finishes; your vehicle's condition determines the preparation it needs.",
      "paint-correction":
        "Paint correction starts with an inspection of the clear coat, not a promise that every mark will disappear. On a daily driver from Woodbridge, wash haze and light swirls may call for a different approach than deeper damage. We discuss the desired improvement and the safe polishing scope before work begins, then explain how to care for the finish afterward.",
      "window-tinting":
        "Window tinting is offered with approved Carbon and Ceramic film options. A Woodbridge appointment begins by choosing the windows and film that fit your needs, then confirming whether shop or mobile installation is suitable. Film pricing and warranty durations are listed on the dedicated page; the front windshield is treated separately from full-vehicle packages.",
      "interior-detailing":
        "Interior detailing can focus on seats, carpets, trim, and the areas where daily use leaves the most visible buildup. Tell us whether the main issue is general soil, pet hair, or a persistent smell so we can distinguish cleaning from odor treatment. The condition of the interior determines the final scope rather than the town the vehicle comes from.",
      "exterior-detailing":
        "For exterior detailing, we look at the paint, glass, wheels, and trim before choosing a wash and protection approach. A vehicle driven through Woodbridge may need careful decontamination as well as routine cleaning; the service page explains what is included. If the goal is a full detail, pair this with the interior service and review the complete-detail guidance on the homepage.",
      "mobile-auto-detailing":
        "Mobile detailing may be available at a Woodbridge home or workplace when the requested service and site are suitable. Share the address, vehicle, and work needed so CleanWorx can confirm the appointment setup. One $50 mobile fee applies when the pre-fee appointment subtotal is below $400; there is no mobile fee at $400 or more.",
      "headlight-restoration":
        "Cloudy headlight lenses need an inspection before restoration. We assess oxidation and lens condition, then explain the sanding, polishing, and protection process that may be appropriate. Results depend on the original condition, so the dedicated headlight page is the place to review the service before bringing a vehicle from Woodbridge to the shop.",
      "car-odor-treatment":
        "A smoke or pet odor complaint in a Woodbridge vehicle begins with finding likely sources in the interior. Cleaning affected fabric, carpets, and surfaces may be part of the conversation before deciding whether shop ozone air purification is appropriate. Ozone treatment has limits: a continuing source, contamination trapped in materials, or new exposure can leave or bring back an odor. We explain those limits before booking, never promise total removal, and keep the treatment at our Basking Ridge shop.",
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
      "Edison customers come to our Basking Ridge shop for paint, interior, and specialist work; eligible detailing can also be arranged at their location. There is no Edison shop. The services below explain what each job involves and what to tell us before booking.",
    appointmentNote:
      "Describe the vehicle's condition and the result you want, then let us know whether you are considering a shop appointment or mobile service in Edison.",
    fullDetailNote:
      "A full detail brings interior and exterior work together. The homepage explains that combined service and its pricing variables; use the two detailing sections below to decide where the vehicle needs the most attention.",
    engineBayNote:
      "Engine bay cleaning is a separate specialized option. Ask about it when planning a full detail, and review its scope on the add-ons page.",
    photoIds: ["work-08", "work-13", "work-05", "work-02", "work-10"],
    serviceCopy: {
      "ceramic-coating":
        "On an Edison vehicle, a coating will preserve the finish we prepare beneath it. We inspect the paint first and discuss any correction it needs, along with maintenance expectations. The ceramic coating page lists the available packages, preparation, and price variables.",
      "paint-correction":
        "Paint correction is useful when reflected light reveals wash marks, haze, or other defects that ordinary cleaning will not address. For a vehicle coming from Edison, we inspect the finish and discuss a realistic improvement target before choosing the polishing scope. Some marks cannot be safely removed from the available clear coat, so assessment comes first.",
      "window-tinting":
        "Edison drivers can review Carbon and Ceramic film installation, as well as existing tint removal, on the window tinting page. The chosen film, glass areas, and vehicle layout determine the quote. Shop and eligible mobile appointments are available; the installation location is confirmed when the work is scheduled.",
      "interior-detailing":
        "For an Edison vehicle with worn seats, carpet buildup, or an interior that needs a reset, interior detailing begins with an inspection of materials and soiling. Cleaning may involve careful attention to upholstery, carpets, trim, and touch points. Explain stains or pet hair in advance so the team can discuss scope and any extra work before the appointment.",
      "exterior-detailing":
        "Exterior detailing addresses more than the visible body panels. Wheels, glass, trim, and paint each need appropriate care, and contamination may change the preparation required. Edison drivers can use the dedicated page to compare exterior scope and then combine it with interior work when a full detail makes more sense.",
      "mobile-auto-detailing":
        "For eligible services in Edison, a mobile appointment can bring detailing to a suitable home or workplace. CleanWorx confirms the specific service, address, and schedule before committing to the visit. A $50 fee applies once per appointment below a $400 pre-fee subtotal, while appointments of $400 or more have no mobile fee.",
      "headlight-restoration":
        "Headlight restoration starts by inspecting the lens for oxidation and wear. The service can include controlled refinishing and protective finishing when the lens condition supports it. A driver from Edison should expect a condition-based discussion, not an identical result for every vehicle; the dedicated page explains the process and pricing.",
      "car-odor-treatment":
        "Interior odor treatment is distinct from regular interior cleaning. If an Edison vehicle has a persistent smell, describe when it appears and what may be causing it so we can discuss cleaning and shop ozone air purification. The treatment has limits, especially when an odor source remains, and no complete or permanent removal is promised.",
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
      "Westfield customers have brought us everything from marked satin wraps to brake-dust-covered wheels and interiors needing care before a trip. The work is arranged through our Basking Ridge shop, with mobile visits available when the service and location permit.",
    appointmentNote:
      "When contacting us from Westfield, include the vehicle, the areas that concern you, and whether you would like to discuss shop or eligible mobile service.",
    fullDetailNote:
      "Full detailing combines interior and exterior care. The homepage describes the complete service; the interior and exterior sections below help you identify what needs attention before requesting a quote.",
    engineBayNote:
      "An engine bay clean can be discussed alongside a detail when appropriate. It is described with the other specialized options on our add-ons page.",
    photoIds: ["work-22", "work-11", "work-26", "work-25", "work-20"],
    serviceCopy: {
      "ceramic-coating":
        "A satin wrap and glossy paint cannot take the same preparation. The Westfield Range Rover case below shows why the desired finish matters: its owner wanted protection without added gloss. At our Basking Ridge shop, we inspect the surface and discuss a suitable coating and care routine.",
      "paint-correction":
        "Dark paint can reveal fine wash marks especially clearly, while lighter finishes can still carry haze and scratches. Paint correction begins with assessing those defects and choosing a safe polishing goal. For Westfield drivers, the conversation should focus on the actual condition of the vehicle and the improvement sought, not a fixed percentage of marks removed.",
      "window-tinting":
        "Carbon and Ceramic tint options give Westfield drivers different published price points and warranty durations. Film selection, the windows being treated, and removal of old film if needed are separate decisions. The window tinting page sets out the approved options; the team confirms whether a shop or mobile installation works for the appointment.",
      "interior-detailing":
        "Interior detailing looks at the materials occupants touch and the fabric or carpet that collects everyday soil. On a Westfield vehicle, leather care, floor cleaning, and trim attention may require different methods within the same visit. Describe any stains or unusual buildup before booking so the recommended work fits the interior rather than a generic package description.",
      "exterior-detailing":
        "A careful exterior detail considers paint, wheels, glass, and trim as different surfaces. For a Westfield driver wanting the finish refreshed, CleanWorx can discuss hand washing, decontamination, and protection after seeing the vehicle. Interior work can be added as a full detail when the interior also needs attention.",
      "mobile-auto-detailing":
        "For mobile detailing in Westfield, tell us where the vehicle will be parked and what work it needs. We confirm that the site, service, and timing suit a visit. A single $50 mobile fee applies below a $400 pre-fee appointment subtotal; it is waived at $400 or more.",
      "headlight-restoration":
        "Oxidized headlights require more than a routine wash. Lens condition determines whether refinishing is suitable and how much improvement is realistic. Westfield drivers can review the restoration method on the dedicated service page and ask for an assessment before scheduling work at the shop.",
      "car-odor-treatment":
        "Smoke odor may settle into the surfaces of a vehicle, so a Westfield inquiry should include the odor history and any cleaning already attempted. CleanWorx can discuss interior cleaning and its shop ozone air purification service. Results depend on the source and interior condition; the service does not carry a promise of total or permanent odor removal.",
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
          "Cloudiness across the headlight lens led a Cranford driver to contact us about his blue pickup. Even with the front end clean, the gray haze dulled the reflector bowls and amber marker behind the lens. He wanted the light looking clearer again, so we discussed headlight restoration as a separate job and examined the lens before deciding how much refinishing it could take.",
          "We worked through the surface refinishing and polishing, then protected the restored lens. In the before photo, the haze veils the lamp from edge to edge. Afterward, the reflectors and amber marker are much easier to see, and the front of the pickup looks more even. We explained that the improvement on this lens was specific to its condition; a second vehicle with deeper damage might need a different plan.",
        ],
      },
    },
    intro:
      "A cloudy headlight, a satin finish, and an interior that needs care call for different work. Cranford customers can compare those services here and see examples of cars brought to our Basking Ridge shop. We confirm mobile availability for each request.",
    appointmentNote:
      "If you are coming from Cranford, tell us whether the priority is the whole vehicle or a specific issue such as oxidized headlight lenses, and share photos when requesting an assessment.",
    fullDetailNote:
      "Full detailing covers interior and exterior care together. Start with the homepage for the combined service, then use these sections to identify any specialist work that should be discussed separately.",
    engineBayNote:
      "Engine bay cleaning is a specialized add-on. We assess its condition and access before confirming scope; the add-ons page explains the offering.",
    photoIds: ["work-18", "work-03", "work-14", "work-16", "work-15"],
    serviceCopy: {
      "ceramic-coating":
        "Ceramic coating can protect a prepared finish, but the preparation depends on the vehicle in front of us. For a Cranford driver, the shop first considers paint condition and the owner's maintenance expectations, then discusses a catalog-listed option. Coating does not replace washing or correct existing defects on its own.",
      "paint-correction":
        "Paint correction is an assessed service for a finish marked by swirls, haze, or light scratches. A Cranford vehicle may need a focused polish or a broader process depending on its clear coat and the owner's goal. We set a realistic scope before polishing rather than promise that every defect will disappear.",
      "window-tinting":
        "Cranford drivers can compare approved Carbon and Ceramic film installations on the tinting page. The choice includes the film, which windows are treated, and whether old tint needs removal. CleanWorx confirms shop or eligible mobile installation for the actual booking; published prices vary by the selected configuration.",
      "interior-detailing":
        "Interior work starts with the materials and the type of soiling. Seats, carpets, mats, trim, and frequently touched areas can each need a different cleaning approach. For a Cranford driver planning a full detail, identify any interior stains or pet hair early so those needs are considered with the exterior work.",
      "exterior-detailing":
        "Exterior detailing can combine a careful hand wash with attention to wheels, glass, trim, and paint contamination. A Cranford vehicle used every day may have a different finish condition from a weekend car, so the final work is based on inspection. Engine bay cleaning can be discussed separately when that area needs attention.",
      "mobile-auto-detailing":
        "Some detailing appointments can be arranged at a Cranford home or workplace after CleanWorx confirms the service and location. Provide the vehicle and address when asking. A single $50 mobile fee applies below a $400 pre-fee appointment subtotal; appointments of $400 or more do not have that fee.",
      "headlight-restoration":
        "The blue pickup from Cranford below shows what surface haze can hide: the reflector bowls and amber marker were hard to see through the cloudy lens. Headlight restoration may involve sanding, polishing, and protection after we inspect both lenses. We discuss the expected improvement and price before work; deeper damage can limit the result.",
      "car-odor-treatment":
        "When a Cranford vehicle has a lingering interior smell, identifying a possible source matters before choosing a treatment. Interior cleaning and shop ozone air purification address different parts of the problem. The dedicated odor page describes the treatment and its limits; no method is presented as a guaranteed permanent fix.",
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
          "A lingering smell inside a Ferrari brought its Bridgewater owner to us for an interior assessment. The black leather seats and red stitching looked well cared for, but the odor made every drive less pleasant. He brought the car to our Basking Ridge shop so we could check the interior and discuss whether air purification alone made sense or whether a physical source needed cleaning first.",
          "We set the red ozone generator on a towel inside the Ferrari and carried out the in-shop air purification treatment. The equipment stayed off the leather while it worked through the enclosed interior. At pickup, we reviewed the interior with the owner and explained that ozone can address lingering odor compounds, while a spill or residue still needs to be cleaned if it is the source. That distinction shaped the plan for keeping the interior fresh after the visit.",
        ],
      },
    },
    intro:
      "Bridgewater customers have visited us for paint correction, ceramic coating, interior odor treatment, and mobile detailing. Our shop is in Basking Ridge. For work at your home or workplace, we confirm that the service and site suit a mobile appointment.",
    appointmentNote:
      "Share your Bridgewater location, vehicle details, and the surfaces you want addressed. We will confirm whether a shop or mobile appointment is appropriate for that service.",
    fullDetailNote:
      "For a full detail, the homepage explains the combined interior and exterior service and how condition affects price. Use the specialist sections below to identify paint, headlight, odor, or engine bay needs that deserve separate discussion.",
    engineBayNote:
      "Engine bay cleaning is available as a specialized service; its scope depends on the vehicle and is described on the add-ons page.",
    photoIds: ["work-07", "work-19", "work-04", "work-06", "work-17"],
    serviceCopy: {
      "ceramic-coating":
        "The Olive Green Porsche in the Bridgewater work below needed paint correction before ceramic coating. That order matters when defects are already visible: coating protects the prepared finish, while polishing changes its appearance. We inspect your vehicle and discuss preparation, any correction, and the catalog-listed coating options.",
      "paint-correction":
        "Paint correction is for finish defects that cleaning cannot remove. In a Bridgewater inquiry, photos of swirls, haze, or light scratches help begin the discussion, but an in-person assessment sets the safe polishing scope. The service starts at the approved catalog price and changes with condition and the selected process.",
      "window-tinting":
        "Window tinting in the CleanWorx service range includes Carbon and Ceramic film as well as removal of existing tint. Bridgewater drivers can compare the published installation and removal prices by window configuration. Shop or eligible mobile delivery is confirmed for the chosen work, including whether a front windshield is part of the request.",
      "interior-detailing":
        "Interior detailing is useful when seats, carpets, and trim need more than a quick wipe down. For a Bridgewater vehicle, describe the materials, stains, pet hair, or high-use areas that matter most. The team can then discuss cleaning scope and whether combining it with exterior work as a full detail makes practical sense.",
      "exterior-detailing":
        "Exterior detailing addresses the finish as a set of surfaces: paint, wheels, glass, and trim. A Bridgewater vehicle with road film or embedded contamination may need more preparation than a lightly used car. Review the exterior service for its core work, then ask separately about engine bay cleaning or headlight restoration if those areas need attention.",
      "mobile-auto-detailing":
        "An eligible Bridgewater mobile appointment brings the equipment to a suitable home or workplace, subject to service and scheduling confirmation. Tell us what work is requested and where the vehicle will be available. One $50 fee applies when the pre-fee appointment subtotal is below $400; there is no mobile fee at $400 or more.",
      "headlight-restoration":
        "Cloudiness and oxidation on headlights vary from vehicle to vehicle. The lens is inspected before deciding whether controlled refinishing and protection are suitable. Bridgewater drivers can use the dedicated headlight page to understand the process, then request an assessment rather than assume a fixed outcome.",
      "car-odor-treatment":
        "Vehicle odors may persist after a routine clean if their source remains in the interior. For a Bridgewater driver, the first useful detail is what kind of odor is present and where it seems strongest. CleanWorx can discuss cleaning and its shop-only ozone air purification treatment, including the limits of either approach.",
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
    "The engine bay of a Mercedes-Benz C-Class looked older than the rest of the car when its owner from Fords in Woodbridge Township opened the hood. He wanted it cleaned before a weekend visit with family, but was worried about water around the electrical parts. We asked him to bring the car from Fords to our shop at 19 E. Henry St in Basking Ridge so we could look at the bay before agreeing on the scope.\n\nWe worked carefully around the electrical components, used steam and controlled degreasing on the dirty areas, and refreshed the plastic dressing. Then we hand-washed the front end so the visible exterior matched the work under the hood. When he lifted it again, the difference was in the details: clean covers and trim without treating the engine bay like an ordinary car wash.",
  "work-02":
    "Brake dust inside the wheels and faded trim stood out to an Edison C-Class Cabriolet owner preparing for open-top driving. She found us through the website; the body looked clean from a distance, while the wheels and trim showed the wear that concerned her. She drove from Edison to our 19 E. Henry St shop in Basking Ridge and showed us the areas that bothered her most.\n\nWe started with a careful two-bucket hand wash, then worked into the wheel barrels instead of stopping at the visible spokes. After conditioning the trim, we finished the paint with a protective glaze. She had asked for an exterior detail rather than correction, so the goal was a well-finished, protected car ready to drive, not a promise that washing could erase every paint defect.",
  "work-03":
    "After a track day, a Cranford Shelby GT350 owner noticed how tired the paint looked in direct light. He messaged us after seeing our paint work on social media and asked us to improve the paint without treating the vinyl stripes like painted panels. He drove from Cranford to our Basking Ridge shop on E. Henry St so we could inspect both surfaces together.\n\nWe separated the stripe preparation from the painted-panel work, decontaminated the stripes, and used a single-stage machine polish where the finish allowed it. A ceramic barrier completed the protection plan for future road and track grime. The important moment was the inspection before polishing; that kept the service tied to the GT350's materials rather than a one-size-fits-all correction package.",
  "work-04":
    "A normal wash had left a Bridgewater family's Volvo XC90 looking dull, so they contacted us through the website. Swirls were visible on the paint, and the panoramic roof drew the eye every time they looked across the top of the SUV. They brought it from Bridgewater to our shop at 19 E. Henry St, Basking Ridge, and asked us to focus on the surfaces they actually noticed rather than sell them a generic package.\n\nWe addressed the exterior swirls, polished the large roof glass, and finished with a ceramic sealant. The glass work mattered as much as the paint because it spans so much of this vehicle. The result was a clearer, more even exterior, with a service scope shaped by the XC90's size and the family's priorities.",
  "work-05":
    "The carpets and wood trim inside an Edison customer's Range Rover Autobiography needed attention. She phoned us because daily use had worn the carpets and left fingerprints on the wood, even though the leather still looked good at first glance. She drove over from Edison to the CleanWorx shop on E. Henry St in Basking Ridge and asked for the interior to feel cared for again without harsh treatment of the delicate materials.\n\nWe used steam where appropriate, cleaned and conditioned the semi-aniline leather with a gentler approach, shampooed the carpets, and polished the wood trim. We moved material by material instead of applying one cleaner everywhere. By the time the interior was finished, the seats, floor, and trim looked like parts of the same well-kept interior again.",
  "work-06":
    "A Bridgewater driver needed an exterior detail during the workday and asked through our contact form about the mobile unit he had seen online. His car would be available near Commons Way, where he hoped we could complete the detail. We checked the vehicle, the requested exterior work, and the available space before treating it as a mobile appointment.\n\nWe arrived with the equipment needed for the agreed detail, cleaned the exterior surfaces in sequence, and walked around the car with him before packing up. What made the visit work was confirming the site and scope first. Some services still belong at the shop, even when a customer first asks for mobile detailing.",
  "work-07":
    "Road film stood out against the gloss-black trim of an Alpine White BMW owned by a Bridgewater customer. He called us about it. He wanted ceramic protection, but also wanted to know whether the carbon-fiber roof would be included. He drove to our Basking Ridge shop at 19 E. Henry St, where we could examine the painted panels, roof, and dark accents in the same light.\n\nWe prepared each surface for its part of the coating job and protected the paint, carbon-fiber roof, and gloss-black trim. The conversation had started with easier maintenance, but the car itself set the scope: leaving the roof or trim out would have meant ignoring two of its most visible finishes. We explained how to wash the protected surfaces afterward.",
  "work-08":
    "Sunlight revealed faint marks in an Edison customer's Torch Red Corvette C8. He found us on social media after that drive. He wanted to protect the car while the finish was still relatively fresh, so he brought it from Edison to our 19 E. Henry St shop in Basking Ridge. We looked at the paint in proper light before discussing a System X ceramic coating; the surface underneath had to be ready before any protection went on.\n\nWe prepared the finish, installed the coating, and checked the red panels in daylight after the work. The depth of the color was the reward he noticed first, while the hydrophobic barrier was the practical reason he booked. We also went over wash care so the gloss would not be undone by rough maintenance.",
  "work-09":
    "We carried out chemical decontamination and ceramic application on a Defender 110 in the Basking Ridge shop's LED detailing bay. Its large painted panels made preparation a substantial part of the work.",
  "work-10":
    "An Edison customer's new Quicksilver Tesla Model 3 Highland needed care, but he could not give up most of his day for a shop visit. He contacted us through the website. After he told us the car would be parked at a suitable driveway near Oak Tree Road, we confirmed a mobile detail.\n\nWe arrived at the Edison address, gave the paint a soft wash, used iron remover to deal with bonded contamination, and finished with a spray ceramic sealant. We told him exactly what that sealant was: a mobile finish-care product, not the same service as a shop-installed ceramic coating. He got the convenient visit he needed and a clear plan for gentle upkeep.",
  "work-11":
    "Fine wash marks caught the light on a Westfield customer's Guards Red Porsche 911 GT3. He called us about the paint. The car was already clean, but that was exactly why the micro-marring bothered him: every reflection made it easier to spot. He brought the GT3 from Westfield to our shop on E. Henry St in Basking Ridge and asked us to improve the paint before protecting it.\n\nWe inspected the finish, machine-polished the marked areas, and checked the reflections before moving to the certified System X coating. The correction and coating had different jobs. Polishing addressed the visible defects; the ceramic layer protected the finish we had prepared. We showed him the result in daylight and discussed careful washing so the same marks would not return quickly.",
  "work-12":
    "Soon after collecting his Magma Red Lotus Emira, an owner from Colonia in Woodbridge Township contacted us about ceramic protection. He wanted the composite body panels and gloss-black accents to be easier to care for between weekend drives. He brought the Emira from Colonia to our Basking Ridge shop at 19 E. Henry St so we could inspect each surface and agree on the coating scope.\n\nWe cleaned and prepared the car, including a single-stage gloss enhancement where appropriate, before applying the ceramic coating to the prepared exterior surfaces. In daylight, the red finish had a deeper gloss and the black accents looked crisp beside it. We explained how to wash and maintain the coated surfaces so he could preserve that finish after leaving the shop.",
  "work-13":
    "Even after washing, the Black Sapphire paint on an Edison customer's BMW 7 Series looked uneven in sunlight. He phoned us about the finish. Factory swirls broke up the reflection across the hood and doors. He drove the car from Edison to our 19 E. Henry St shop in Basking Ridge, where we inspected the finish under strong light and explained that this was correction work, not a cleaning problem.\n\nWe planned a two-stage approach, using rotary and dual-action polishing for the defects and final clarity. After each stage we checked the dark panels again rather than judging them only in shade. The finished black reflection was much more even. We also explained that the result depended on the paint we started with; another BMW might need a different scope.",
  "work-14":
    "The Satin Daytona finish on a Cranford customer's Audi RS6 Avant needed cleaning without added shine. He found us through social media and asked about that before booking. He had seen standard detailing packages that focused on gloss, which was exactly the wrong goal for his car. He drove from Cranford to our shop at 19 E. Henry St in Basking Ridge so we could inspect the finish and the bronze forged wheels.\n\nWe used a matte-safe wash and decontamination approach for the body, keeping polish away from the satin finish. The wheels needed their own work, including high-temperature ceramic protection. When he collected the RS6, the paint still had its intended quiet sheen and the bronze wheels looked clean beside it. Preserving that contrast was the point of the detail.",
  "work-15":
    "The fabric roof and RS Spyder wheels made a basic detail feel incomplete to a Cranford owner of an Arctic Grey 911 Cabriolet. He called before the first long stretch of top-down weather. He also wanted the paint looking sharper. He brought the Porsche from Cranford to our shop on E. Henry St in Basking Ridge, where we could examine all three materials instead of quoting only the body paint.\n\nWe refined the paint in stages, treated the soft top with fabric-specific hydrophobic protection, and coated the wheels. Each surface got the method that suited it; the roof was never treated like paint. When the car was ready, we walked him around the cabriolet and explained the different care needs of the fabric, finish, and wheels.",
  "work-16":
    "After a busy month, a Cranford driver's two-tone Mercedes-Maybach GLS 600 needed care that he hoped could be done at his location. He called us about a mobile detail. Bringing the large SUV to a shop was difficult that week, so he asked whether we could come to a suitable space near North Avenue East. We confirmed the site and the exact mobile scope before setting the visit.\n\nAt the Cranford appointment, we worked through the two-tone paint without treating both finishes as one anonymous surface, preserved the glossy ceramic finish, and gave the forged monoblock wheels focused care. Before leaving, we looked over the SUV with the owner and discussed upkeep. The location made the appointment convenient; the car's materials still determined the work.",
  "work-17":
    "Months of ordinary washing had left the Diamond White paint on a Bridgewater customer's Mercedes-AMG CLE 53 Cabriolet looking muted. She contacted us through the website. She liked the color and wanted to bring back the clarity of its metallic flake. She drove from Bridgewater to our Basking Ridge shop at 19 E. Henry St and asked whether a ceramic coating alone would bring back that crisp appearance. We explained that the finish underneath had to be addressed first.\n\nWe used a dual-action finishing polish to bring clarity to the white paint, then installed the ceramic coating for ongoing protection. The black wheels gave us a useful contrast when we reviewed the finished car with her. The gloss she noticed at pickup came from the preparation and coating working together, not from simply adding a product over dull paint.",
  "work-18":
    "Protecting the Nero Nemesis satin finish without adding shine was the priority for a Cranford Lamborghini Urus owner who contacted us through the website. He also pointed out the acid-green calipers, which looked too visible to leave out of the detail. He drove the Urus from Cranford to our shop on E. Henry St in Basking Ridge, and we looked at the matte body and bright brake hardware as two separate parts of the job.\n\nWe prepared the satin surface with products suited to its finish and applied a matte-safe ceramic coating. Then we detailed the calipers so they looked as deliberate as the black body around them. At pickup the Urus still had its satin character. That was the success criterion we had agreed on before the work began.",
  "work-19":
    "The Olive Green paint on a Bridgewater customer's Porsche 911 GTS had lost some of the clarity he remembered from buying it. He called us about the finish. He had considered going straight to ceramic coating, but wanted someone to look at the finish first. He drove from Bridgewater to our Basking Ridge shop at 19 E. Henry St, where we inspected the paint in strong light and showed him why correction would come before protection.\n\nWe worked on the visible defects until the green finish reflected more cleanly, then applied the ceramic coating to the prepared surface. The color looked richer when he saw the car again, but we explained the two stages separately: correction changed the appearance, coating helped protect it. That order was the center of the job.",
  "work-20":
    "Brake dust built up quickly on the wheels of a Westfield driver's Polar White Mercedes-AMG CLA 45 S. He messaged us after seeing a mobile detail on social media. The car spent weekdays near East Broad Street. He wanted the car cleaned while he worked, so we confirmed that the location and requested exterior service suited a mobile visit.\n\nAt the Westfield appointment, we worked through a precision wash, broke down the brake dust, added a synthetic-wax gloss booster, and cleaned the exterior glass. We checked the wheels and windows with him at the end rather than calling the job finished when the white body looked clean. The mobile setup solved his scheduling problem without reducing the exterior scope.",
  "work-21":
    "A full detail at home suited the owner of a Rolls-Royce Cullinan in Sewaren, Woodbridge Township. He phoned us about bringing the service to his large SUV. We confirmed that his driveway had enough room for a mobile appointment and agreed to clean both the interior and exterior at his home.\n\nAt his Sewaren home, we cleaned the leather seats, carpets, and interior trim, then worked around the outside with foam decontamination, a careful hand wash, and attention to the wheels and glass. We finished the clean paint with a hand-applied ceramic sealant and walked through both the interior and exterior with him before leaving. The mobile service let him have the full detail completed at home.",
  "work-22":
    "Marks on a satin wrap prompted a Westfield Range Rover SE owner to contact us through the website. He wanted protection but was clear about one thing: he did not want the SUV to come back glossy. He drove from Westfield to our shop at 19 E. Henry St in Basking Ridge, where we inspected the matte material and talked through what a finish-specific ceramic coating could and could not do.\n\nWe cleaned and prepared the satin surface, then used a coating formulated to protect it without adding artificial gloss. The 23-inch wheels were part of the final walkaround because their finish changes how the whole SUV reads. He left with the same restrained matte appearance he liked, plus a clearer idea of how to clean it without altering the wrap.",
  "work-23":
    "After seeing a Batumi Gold SUV on our social feed, a Range Rover owner from Iselin in Woodbridge Township called about window tint. He liked the privacy look but did not want to choose a film without first discussing which glass areas could be covered and how the darker windows would sit against the gold paint. He came from Iselin to our Basking Ridge shop on E. Henry St, where we reviewed film options and the vehicle's existing glass.\n\nWe confirmed the tint scope, prepared the windows, installed the chosen film, and checked the edges before handing the SUV back. We explained the initial curing period and care afterward.",
  "work-24":
    "Road film had dulled the Navarra Blue paint on an Audi S5 from Avenel in Woodbridge Township, while brake dust collected on the wheels. Its owner reached us through the website. He wanted the coupe looking clean and cared for again, so he brought it from Avenel to our Basking Ridge shop for an exterior detail.\n\nWe cleaned the wheels and tires, hand-washed the body, and checked the paint for bonded contamination before finishing the glass and exterior trim. We reviewed the result with him in daylight and discussed gentle washing to help keep the finish clean between details.",
  "work-25":
    "Mud remained under a Westfield customer's Jeep Wrangler Rubicon 392 after an off-road weekend and a quick driveway wash. He called us about the areas he could not reach. Mud also remained in the underbody and wheel arches. He brought the Jeep from Westfield to our Basking Ridge shop on E. Henry St and asked us to concentrate on the areas that kept dropping dirt after every rinse.\n\nWe flushed the underbody, cleaned the wheel arches, and then worked outward to the visible surfaces. The matte fender flares received UV conditioning and the tires a suitable dressing. At pickup, the Jeep still looked like a vehicle meant to be driven off-road, but it no longer carried that weekend's mud in its hidden corners.",
  "work-26":
    "Before a summer trip, a Westfield C-Class Cabriolet owner used our website form to ask about interior detailing. With the top down, every mark on the leather, dashboard, and center console seemed more noticeable, and she wanted the interior refreshed before the drive. She brought the car from Westfield to our Basking Ridge shop at 19 E. Henry St, where we looked at the interior materials and the areas exposed when the roof was open.\n\nWe cleaned and treated the leather, detailed the dashboard and console, and added UV-focused protection for top-down use. Before she left, we walked through simple care for the exposed interior. The point of the visit was not a dramatic before-and-after claim; it was making the interior comfortable and ready for the trip she had planned.",
};

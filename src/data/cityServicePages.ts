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
};

// Five unique portfolio images per city, distributed by the services they document.
// No image is reused between cities; work-09 is the only unused portfolio item.
export const cityPages: Record<CitySlug, CityPageContent> = {
  "woodbridge-nj": {
    city: "Woodbridge",
    intro:
      "CleanWorx serves drivers from Woodbridge, New Jersey, through appointments at our Basking Ridge studio and eligible mobile visits confirmed individually. This guide helps you choose a service without treating every vehicle or odor source as the same job.",
    appointmentNote:
      "Tell us whether you prefer our Basking Ridge studio or a mobile appointment in Woodbridge. We confirm which service can be performed at your location before scheduling.",
    fullDetailNote:
      "For a complete interior and exterior detail, start with the full detailing guidance on our homepage. We assess both sides of the vehicle together rather than assuming one fixed scope suits every car.",
    engineBayNote:
      "Engine bay cleaning is available as a specialized service. We review access and condition before discussing the appropriate cleaning approach; see our add-ons page for details.",
    photoIds: ["work-12", "work-24", "work-23", "work-01", "work-21"],
    serviceCopy: {
      "ceramic-coating":
        "For a Woodbridge driver considering ceramic coating, the useful first question is what the paint needs before protection. At the Basking Ridge studio, the finish can be assessed for contamination and defects before selecting a catalog-listed coating option. The portfolio below shows different finishes and vehicles; the package for your car depends on its condition and the protection you choose.",
      "paint-correction":
        "Paint correction starts with an inspection of the clear coat, not a promise that every mark will disappear. On a daily driver from Woodbridge, wash haze and light swirls may call for a different approach than deeper damage. We discuss the desired improvement and the safe polishing scope before work begins, then explain how to care for the finish afterward.",
      "window-tinting":
        "Window tinting is offered with approved Carbon and Ceramic film options. A Woodbridge appointment begins by choosing the windows and film that fit your needs, then confirming whether studio or mobile installation is suitable. Film pricing and warranty durations are listed on the dedicated page; the front windshield is treated separately from full-vehicle packages.",
      "interior-detailing":
        "Interior detailing can focus on seats, carpets, trim, and the areas where daily use leaves the most visible buildup. Tell us whether the main issue is general soil, pet hair, or a persistent smell so we can distinguish cleaning from odor treatment. The condition of the cabin determines the final scope rather than the town the vehicle comes from.",
      "exterior-detailing":
        "For exterior detailing, we look at the paint, glass, wheels, and trim before choosing a wash and protection approach. A vehicle driven through Woodbridge may need careful decontamination as well as routine cleaning; the service page explains what is included. If the goal is a full detail, pair this with the interior service and review the complete-detail guidance on the homepage.",
      "mobile-auto-detailing":
        "Mobile detailing may be available at a Woodbridge home or workplace when the requested service and site are suitable. Share the address, vehicle, and work needed so CleanWorx can confirm the appointment setup. One $50 mobile fee applies when the pre-fee appointment subtotal is below $400; there is no mobile fee at $400 or more.",
      "headlight-restoration":
        "Cloudy headlight lenses need an inspection before restoration. We assess oxidation and lens condition, then explain the sanding, polishing, and protection process that may be appropriate. Results depend on the original condition, so the dedicated headlight page is the place to review the service before bringing a vehicle from Woodbridge to the studio.",
      "car-odor-treatment":
        "A smoke or pet odor complaint in a Woodbridge vehicle begins with finding likely sources in the cabin. Cleaning affected fabric, carpets, and surfaces may be part of the conversation before deciding whether studio ozone air purification is appropriate. Ozone treatment has limits: a continuing source, contamination trapped in materials, or new exposure can leave or bring back an odor. We explain those limits before booking, never promise total removal, and keep the treatment at our Basking Ridge studio.",
    },
    questions: [
      {
        question: "Can a Woodbridge vehicle receive smoke or pet odor treatment?",
        answer:
          "Yes, ask us to assess the vehicle. The dedicated odor treatment is performed at our Basking Ridge studio; the source and condition determine the recommended work.",
      },
      {
        question: "Do you have a Woodbridge shop?",
        answer:
          "Our studio is in Basking Ridge. Eligible mobile visits in Woodbridge are confirmed for each appointment.",
      },
    ],
  },
  "edison-nj": {
    city: "Edison",
    intro:
      "Drivers from Edison can compare complete, interior, and exterior detailing alongside paint protection and specialist services here. CleanWorx works from its Basking Ridge studio and confirms mobile availability for eligible appointments rather than operating a separate Edison location.",
    appointmentNote:
      "Describe the vehicle's condition and the result you want, then let us know whether you are considering a studio appointment or mobile service in Edison.",
    fullDetailNote:
      "A full detail brings interior and exterior work together. The homepage explains that combined service and its pricing variables; use the two detailing sections below to decide where the vehicle needs the most attention.",
    engineBayNote:
      "Engine bay cleaning is a separate specialized option. Ask about it when planning a full detail, and review its scope on the add-ons page.",
    photoIds: ["work-08", "work-13", "work-05", "work-02", "work-10"],
    serviceCopy: {
      "ceramic-coating":
        "Ceramic coating for an Edison vehicle should follow a conversation about its finish, maintenance, and intended protection. The studio reviews surface condition before application, because coating a neglected finish would preserve the wrong starting point. Compare the catalog-listed options on the service page, including preparation and price variables, before selecting a package.",
      "paint-correction":
        "Paint correction is useful when reflected light reveals wash marks, haze, or other defects that ordinary cleaning will not address. For a vehicle coming from Edison, we inspect the finish and discuss a realistic improvement target before choosing the polishing scope. Some marks cannot be safely removed from the available clear coat, so assessment comes first.",
      "window-tinting":
        "Edison drivers can review Carbon and Ceramic film installation, as well as existing tint removal, on the window tinting page. The chosen film, glass areas, and vehicle layout determine the quote. Studio and eligible mobile appointments are available; the installation location is confirmed when the work is scheduled.",
      "interior-detailing":
        "For an Edison vehicle with worn seats, carpet buildup, or a cabin that needs a reset, interior detailing begins with an inspection of materials and soiling. Cleaning may involve careful attention to upholstery, carpets, trim, and touch points. Explain stains or pet hair in advance so the team can discuss scope and any extra work before the appointment.",
      "exterior-detailing":
        "Exterior detailing addresses more than the visible body panels. Wheels, glass, trim, and paint each need appropriate care, and contamination may change the preparation required. Edison drivers can use the dedicated page to compare exterior scope and then combine it with interior work when a complete detail makes more sense.",
      "mobile-auto-detailing":
        "For eligible services in Edison, a mobile appointment can bring detailing to a suitable home or workplace. CleanWorx confirms the specific service, address, and schedule before committing to the visit. A $50 fee applies once per appointment below a $400 pre-fee subtotal, while appointments of $400 or more have no mobile fee.",
      "headlight-restoration":
        "Headlight restoration starts by inspecting the lens for oxidation and wear. The service can include controlled refinishing and protective finishing when the lens condition supports it. A driver from Edison should expect a condition-based discussion, not an identical result for every vehicle; the dedicated page explains the process and pricing.",
      "car-odor-treatment":
        "Cabin odor treatment is distinct from regular interior cleaning. If an Edison vehicle has a persistent smell, describe when it appears and what may be causing it so we can discuss cleaning and studio ozone air purification. The treatment has limits, especially when an odor source remains, and no complete or permanent removal is promised.",
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
      "This page gathers the detailing and specialist services relevant to drivers from Westfield. The work is arranged through CleanWorx in Basking Ridge, with mobile appointments considered when the chosen service and location allow them.",
    appointmentNote:
      "When contacting us from Westfield, include the vehicle, the areas that concern you, and whether you would like to discuss studio or eligible mobile service.",
    fullDetailNote:
      "Full detailing combines cabin and exterior care. The homepage describes the complete service; the interior and exterior sections below help you identify what needs attention before requesting a quote.",
    engineBayNote:
      "An engine bay clean can be discussed alongside a detail when appropriate. It is described with the other specialized options on our add-ons page.",
    photoIds: ["work-22", "work-11", "work-26", "work-25", "work-20"],
    serviceCopy: {
      "ceramic-coating":
        "The best coating choice depends on a Westfield vehicle's paint condition and how its owner plans to maintain it. At the Basking Ridge studio, the surface is reviewed before preparation and application. The photos here show how different finishes appear in our portfolio; they document work at their listed locations rather than projects claimed in Westfield.",
      "paint-correction":
        "Dark paint can reveal fine wash marks especially clearly, while lighter finishes can still carry haze and scratches. Paint correction begins with assessing those defects and choosing a safe polishing goal. For Westfield drivers, the conversation should focus on the actual condition of the vehicle and the improvement sought, not a fixed percentage of marks removed.",
      "window-tinting":
        "Carbon and Ceramic tint options give Westfield drivers different published price points and warranty durations. Film selection, the windows being treated, and removal of old film if needed are separate decisions. The window tinting page sets out the approved options; the team confirms whether a studio or mobile installation works for the appointment.",
      "interior-detailing":
        "Interior detailing looks at the materials occupants touch and the fabric or carpet that collects everyday soil. On a Westfield vehicle, leather care, floor cleaning, and trim attention may require different methods within the same visit. Describe any stains or unusual buildup before booking so the recommended work fits the cabin rather than a generic package description.",
      "exterior-detailing":
        "A careful exterior detail considers paint, wheels, glass, and trim as different surfaces. For a Westfield driver wanting the finish refreshed, CleanWorx can discuss hand washing, decontamination, and protection after seeing the vehicle. Interior work can be added as a full detail when the cabin also needs attention.",
      "mobile-auto-detailing":
        "An eligible mobile detail in Westfield starts with confirming the requested service and a practical place to work. The team will also confirm timing and vehicle condition. The mobile fee is $50 once for a pre-fee appointment subtotal below $400; it is waived at $400 or more.",
      "headlight-restoration":
        "Oxidized headlights require more than a routine wash. Lens condition determines whether refinishing is suitable and how much improvement is realistic. Westfield drivers can review the restoration method on the dedicated service page and ask for an assessment before scheduling work at the studio.",
      "car-odor-treatment":
        "Smoke odor may settle into the surfaces of a vehicle, so a Westfield inquiry should include the odor history and any cleaning already attempted. CleanWorx can discuss interior cleaning and its studio ozone air purification service. Results depend on the source and cabin condition; the service does not carry a promise of total or permanent odor removal.",
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
    intro:
      "Cranford drivers can use this guide to compare full detailing with specific finish, cabin, and headlight services. CleanWorx's studio is in Basking Ridge; mobile availability depends on the work and is confirmed for each request.",
    appointmentNote:
      "If you are coming from Cranford, tell us whether the priority is the whole vehicle or a specific issue such as oxidized headlight lenses, and share photos when requesting an assessment.",
    fullDetailNote:
      "Full detailing covers interior and exterior care together. Start with the homepage for the combined service, then use these sections to identify any specialist work that should be discussed separately.",
    engineBayNote:
      "Engine bay cleaning is a specialized add-on. We assess its condition and access before confirming scope; the add-ons page explains the offering.",
    photoIds: ["work-18", "work-03", "work-14", "work-16", "work-15"],
    serviceCopy: {
      "ceramic-coating":
        "Ceramic coating can protect a prepared finish, but the preparation depends on the vehicle in front of us. For a Cranford driver, the studio first considers paint condition and the owner's maintenance expectations, then discusses a catalog-listed option. Coating does not replace washing or correct existing defects on its own.",
      "paint-correction":
        "Paint correction is an assessed service for a finish marked by swirls, haze, or light scratches. A Cranford vehicle may need a focused polish or a broader process depending on its clear coat and the owner's goal. We set a realistic scope before polishing rather than promise that every defect will disappear.",
      "window-tinting":
        "Cranford drivers can compare approved Carbon and Ceramic film installations on the tinting page. The choice includes the film, which windows are treated, and whether old tint needs removal. CleanWorx confirms studio or eligible mobile installation for the actual booking; published prices vary by the selected configuration.",
      "interior-detailing":
        "Cabin work starts with the materials and the type of soiling. Seats, carpets, mats, trim, and frequently touched areas can each need a different cleaning approach. For a Cranford driver planning a complete detail, identify any interior stains or pet hair early so those needs are considered with the exterior work.",
      "exterior-detailing":
        "Exterior detailing can combine a careful hand wash with attention to wheels, glass, trim, and paint contamination. A Cranford vehicle used every day may have a different finish condition from a weekend car, so the final work is based on inspection. Engine bay cleaning can be discussed separately when that area needs attention.",
      "mobile-auto-detailing":
        "Some detailing appointments can be arranged at a Cranford home or workplace after CleanWorx confirms the service and location. Provide the vehicle and address when asking. A single $50 mobile fee applies below a $400 pre-fee appointment subtotal; appointments of $400 or more do not have that fee.",
      "headlight-restoration":
        "Headlight restoration deserves its own assessment because the haze may sit on the lens surface or reflect deeper wear. The process can involve controlled sanding, polishing, and protection when appropriate for the lens. For a Cranford vehicle, we would inspect both headlights, explain the realistic improvement, and confirm pricing before work. Clearer lenses are the aim, but their starting condition limits the result; routine exterior detailing alone cannot replace this specialist process.",
      "car-odor-treatment":
        "When a Cranford vehicle has a lingering cabin smell, identifying a possible source matters before choosing a treatment. Interior cleaning and studio ozone air purification address different parts of the problem. The dedicated odor page describes the treatment and its limits; no method is presented as a guaranteed permanent fix.",
    },
    questions: [
      {
        question: "Will ordinary detailing restore cloudy headlights?",
        answer:
          "No. Headlight restoration is a separate service, and the lens condition needs to be assessed before a result can be discussed.",
      },
      {
        question: "Where is the CleanWorx studio?",
        answer:
          "The studio is at 19 E. Henry Street in Basking Ridge, NJ. Ask us which Cranford appointments are eligible for mobile service.",
      },
    ],
  },
  "bridgewater-nj": {
    city: "Bridgewater",
    intro:
      "Auto detailing in Bridgewater can mean anything from a complete cabin and exterior reset to a focused finish service. CleanWorx helps Bridgewater drivers choose the right scope, with studio work in Basking Ridge and eligible mobile visits confirmed by appointment.",
    appointmentNote:
      "Share your Bridgewater location, vehicle details, and the surfaces you want addressed. We will confirm whether a studio or mobile appointment is appropriate for that service.",
    fullDetailNote:
      "For a full detail, the homepage explains the combined interior and exterior service and how condition affects price. Use the specialist sections below to identify paint, headlight, odor, or engine bay needs that deserve separate discussion.",
    engineBayNote:
      "Engine bay cleaning is available as a specialized service; its scope depends on the vehicle and is described on the add-ons page.",
    photoIds: ["work-07", "work-19", "work-04", "work-06", "work-17"],
    serviceCopy: {
      "ceramic-coating":
        "A Bridgewater driver looking for ceramic coating should start with the condition of the paint rather than a protection duration alone. Preparation, any desired correction, and the catalog-listed coating option are discussed together. The portfolio images show actual finish work at their recorded locations, while the studio assesses each new vehicle on its own merits.",
      "paint-correction":
        "Paint correction is for finish defects that cleaning cannot remove. In a Bridgewater inquiry, photos of swirls, haze, or light scratches help begin the discussion, but an in-person assessment sets the safe polishing scope. The service starts at the approved catalog price and changes with condition and the selected process.",
      "window-tinting":
        "Window tinting in the CleanWorx service range includes Carbon and Ceramic film as well as removal of existing tint. Bridgewater drivers can compare the published installation and removal prices by window configuration. Studio or eligible mobile delivery is confirmed for the chosen work, including whether a front windshield is part of the request.",
      "interior-detailing":
        "Interior detailing is useful when seats, carpets, and trim need more than a quick wipe down. For a Bridgewater vehicle, describe the materials, stains, pet hair, or high-use areas that matter most. The team can then discuss cleaning scope and whether combining it with exterior work as a full detail makes practical sense.",
      "exterior-detailing":
        "Exterior detailing addresses the finish as a set of surfaces: paint, wheels, glass, and trim. A Bridgewater vehicle with road film or embedded contamination may need more preparation than a lightly used car. Review the exterior service for its core work, then ask separately about engine bay cleaning or headlight restoration if those areas need attention.",
      "mobile-auto-detailing":
        "An eligible Bridgewater mobile appointment brings the equipment to a suitable home or workplace, subject to service and scheduling confirmation. Tell us what work is requested and where the vehicle will be available. One $50 fee applies when the pre-fee appointment subtotal is below $400; there is no mobile fee at $400 or more.",
      "headlight-restoration":
        "Cloudiness and oxidation on headlights vary from vehicle to vehicle. The lens is inspected before deciding whether controlled refinishing and protection are suitable. Bridgewater drivers can use the dedicated headlight page to understand the process, then request an assessment rather than assume a fixed outcome.",
      "car-odor-treatment":
        "Vehicle odors may persist after a routine clean if their source remains in the cabin. For a Bridgewater driver, the first useful detail is what kind of odor is present and where it seems strongest. CleanWorx can discuss cleaning and its studio-only ozone air purification treatment, including the limits of either approach.",
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
          "No. Mobile suitability is confirmed for the specific service and location; the Basking Ridge studio remains available for studio work.",
      },
    ],
  },
};

export const portfolioStories: Record<string, string> = {
  "work-01":
    "A Woodbridge driver called us after opening the hood of his Mercedes-Benz C-Class and realizing that the engine bay looked much older than the rest of the car. He wanted it cleaned before a weekend visit with family, but was worried about water around the electrical parts. We asked him to bring the car from Woodbridge to our studio at 19 E. Henry St in Basking Ridge so we could look at the bay before agreeing on the scope.\n\nWe worked carefully around the electrical components, used steam and controlled degreasing on the dirty areas, and refreshed the plastic dressing. Then we hand-washed the front end so the visible exterior matched the work under the hood. When he lifted it again, the difference was in the details: clean covers and trim without treating the engine bay like an ordinary car wash.",
  "work-02":
    "An Edison owner found us through the website while getting a C-Class Cabriolet ready for a stretch of open-top driving. The body looked reasonably clean from a distance, but brake dust remained inside the wheels and the trim had lost its even appearance. She drove from Edison to our 19 E. Henry St studio in Basking Ridge and showed us the areas that bothered her most.\n\nWe started with a careful two-bucket hand wash, then worked into the wheel barrels instead of stopping at the visible spokes. After conditioning the trim, we finished the paint with a protective glaze. She had asked for an exterior detail rather than correction, so the goal was a well-finished, protected car ready to drive, not a promise that washing could erase every paint defect.",
  "work-03":
    "A Cranford Shelby GT350 owner sent us a message after seeing our paint work on social media. A track day had left the Mustang looking tired under direct light, and he was especially concerned about the vinyl stripes: he wanted the paint clearer without anyone treating the stripes like painted panels. He drove from Cranford to our Basking Ridge studio on E. Henry St so we could inspect both surfaces together.\n\nWe separated the stripe preparation from the painted-panel work, decontaminated the stripes, and used a single-stage machine polish where the finish allowed it. A ceramic barrier completed the protection plan for future road and track grime. The important moment was the inspection before polishing; that kept the service tied to the GT350's materials rather than a one-size-fits-all correction package.",
  "work-04":
    "A Bridgewater family reached us through the website because their Volvo XC90 still looked dull after a normal wash. Swirls were visible on the paint, and the panoramic roof drew the eye every time they looked across the top of the SUV. They brought it from Bridgewater to our studio at 19 E. Henry St, Basking Ridge, and asked us to focus on the surfaces they actually noticed rather than sell them a generic package.\n\nWe addressed the exterior swirls, polished the large roof glass, and finished with a ceramic sealant. The glass work mattered as much as the paint because it spans so much of this vehicle. The result was a clearer, more even exterior, with a service scope shaped by the XC90's size and the family's priorities.",
  "work-05":
    "An Edison customer phoned us about the inside of a Range Rover Autobiography. The leather still looked good at first glance, but daily use had left the carpets tired and fingerprints made the wood trim stand out for the wrong reason. She drove over from Edison to the CleanWorx studio on E. Henry St in Basking Ridge and asked for the cabin to feel cared for again without harsh treatment of the delicate materials.\n\nWe used steam where appropriate, cleaned and conditioned the semi-aniline leather with a gentler approach, shampooed the carpets, and polished the wood trim. We moved material by material instead of applying one cleaner everywhere. By the time the cabin was finished, the seats, floor, and trim looked like parts of the same well-kept interior again.",
  "work-06":
    "A Bridgewater driver used our contact form after seeing the mobile unit online. He could not easily leave his car at a shop during the workday, so he asked whether we could detail it at his location near Commons Way. We checked the vehicle, the requested exterior work, and the available space before treating it as a mobile appointment. The photo here shows our actual mobile rig outside the studio at 19 E. Henry St, not that illustrative Bridgewater visit.\n\nIn this example, we arrived with the equipment needed for the agreed detail, cleaned the exterior surfaces in sequence, and walked around the car with him before packing up. What made the visit work was confirming the site and scope first. Some services still belong at the studio, even when a customer first asks for mobile detailing.",
  "work-07":
    "A BMW owner from Bridgewater called after noticing how quickly road film showed up on the gloss-black trim beside his Alpine White paint. He wanted ceramic protection, but also wanted to know whether the carbon-fiber roof would be included. He drove to our Basking Ridge studio at 19 E. Henry St, where we could examine the painted panels, roof, and dark accents in the same light.\n\nWe prepared each surface for its part of the coating job and protected the paint, carbon-fiber roof, and gloss-black trim. The conversation had started with easier maintenance, but the car itself set the scope: leaving the roof or trim out would have meant ignoring two of its most visible finishes. We explained how to wash the protected surfaces afterward.",
  "work-08":
    "An Edison Corvette C8 owner found us on social media after a sunny drive made faint marks in the Torch Red paint more noticeable. He wanted to protect the car while the finish was still relatively fresh, so he brought it from Edison to our 19 E. Henry St studio in Basking Ridge. We looked at the paint in proper light before discussing a System X ceramic coating; the surface underneath had to be ready before any protection went on.\n\nWe prepared the finish, installed the coating, and checked the red panels in daylight after the work. The depth of the color was the reward he noticed first, while the hydrophobic barrier was the practical reason he booked. We also went over wash care so the gloss would not be undone by rough maintenance.",
  "work-09":
    "The Defender 110 project recorded in our portfolio involved chemical decontamination and ceramic application in the Basking Ridge studio's LED detailing bay. Its large painted panels made preparation a substantial part of the work. This image is not assigned to the five city stories, but remains available as a documented coating example.",
  "work-10":
    "An Edison Tesla Model 3 Highland owner filled out our website form because he wanted the new Quicksilver paint cared for without losing most of his day to a shop visit. After he told us the car would be parked at a suitable driveway near Oak Tree Road, we confirmed a mobile detail. The photo beside this story is from a separate documented Tesla visit in Somerset, NJ.\n\nIn this example we arrived at the Edison address, gave the paint a soft wash, used iron remover to deal with bonded contamination, and finished with a spray ceramic sealant. We told him exactly what that sealant was: a mobile finish-care product, not the same service as a studio-installed ceramic coating. He got the convenient visit he needed and a clear plan for gentle upkeep.",
  "work-11":
    "A Westfield Porsche 911 GT3 owner called after seeing fine wash marks catch the light on the Guards Red curves. The car was already clean, but that was exactly why the micro-marring bothered him: every reflection made it easier to spot. He brought the GT3 from Westfield to our studio on E. Henry St in Basking Ridge and asked us to improve the paint before protecting it.\n\nWe inspected the finish, machine-polished the marked areas, and checked the reflections before moving to the certified System X coating. The correction and coating had different jobs. Polishing addressed the visible defects; the ceramic layer protected the finish we had prepared. We showed him the result in daylight and discussed careful washing so the same marks would not return quickly.",
  "work-12":
    "A Lotus Emira owner from Woodbridge contacted us through the website after collecting the Magma Red car. He wanted to enjoy it on weekends without rushing past the finish preparation, and he was especially concerned about the contrast between the red composite panels and gloss-black accents. He drove from Woodbridge to our Basking Ridge studio at 19 E. Henry St so we could inspect those surfaces together.\n\nWe carried out a single-stage gloss enhancement, paying attention to the bodywork and dark accents before applying ceramic protection. When the Emira came back into daylight, the red paint looked deeper and the black details read cleanly against it. We walked him through maintenance because the coating would only look its best if the car was washed with the same care used in preparation.",
  "work-13":
    "An Edison BMW 7 Series owner phoned because the Black Sapphire paint never looked quite right in the sun. Even after washing, factory swirls broke up the reflection across the hood and doors. He drove the car from Edison to our 19 E. Henry St studio in Basking Ridge, where we inspected the finish under strong light and explained that this was correction work, not a cleaning problem.\n\nWe planned a two-stage approach, using rotary and dual-action polishing for the defects and final clarity. After each stage we checked the dark panels again rather than judging them only in shade. The finished black reflection was much more even. We also explained that the result depended on the paint we started with; another BMW might need a different scope.",
  "work-14":
    "A Cranford Audi RS6 Avant owner found us through social media and asked one question before booking: could we clean the Satin Daytona finish without making it shiny? He had seen standard detailing packages that focused on gloss, which was exactly the wrong goal for his car. He drove from Cranford to our studio at 19 E. Henry St in Basking Ridge so we could inspect the finish and the bronze forged wheels.\n\nWe used a matte-safe wash and decontamination approach for the body, keeping polish away from the satin finish. The wheels needed their own work, including high-temperature ceramic protection. When he collected the RS6, the paint still had its intended quiet sheen and the bronze wheels looked clean beside it. Preserving that contrast was the point of the detail.",
  "work-15":
    "A Cranford owner called about an Arctic Grey 911 Cabriolet before the first long stretch of top-down weather. He wanted the paint looking sharper, but the fabric roof and RS Spyder wheels were what made him hesitate over a basic detail. He brought the Porsche from Cranford to our studio on E. Henry St in Basking Ridge, where we could examine all three materials instead of quoting only the body paint.\n\nWe refined the paint in stages, treated the soft top with fabric-specific hydrophobic protection, and coated the wheels. Each surface got the method that suited it; the roof was never treated like paint. When the car was ready, we walked him around the cabriolet and explained the different care needs of the fabric, finish, and wheels.",
  "work-16":
    "A Cranford driver called after a busy month had left his two-tone Mercedes-Maybach GLS 600 needing careful attention. Bringing the large SUV to a studio was difficult that week, so he asked whether we could come to a suitable space near North Avenue East. We confirmed the site and the exact mobile scope before setting the visit. The Maybach in the photo is a separate portfolio project documented in Morris County.\n\nIn this illustrative Cranford visit, we worked through the two-tone paint without treating both finishes as one anonymous surface, preserved the glossy ceramic finish, and gave the forged monoblock wheels focused care. Before leaving, we looked over the SUV with the owner and discussed upkeep. The location made the appointment convenient; the car's materials still determined the work.",
  "work-17":
    "A Bridgewater Mercedes-AMG CLE 53 Cabriolet owner first reached us through the website. She liked the Diamond White color but felt that the metallic flake looked muted after months of ordinary washing. She drove from Bridgewater to our Basking Ridge studio at 19 E. Henry St and asked whether a ceramic coating alone would bring back that crisp appearance. We explained that the finish underneath had to be addressed first.\n\nWe used a dual-action finishing polish to bring clarity to the white paint, then installed the ceramic coating for ongoing protection. The black wheels gave us a useful contrast when we reviewed the finished car with her. The gloss she noticed at pickup came from the preparation and coating working together, not from simply adding a product over dull paint.",
  "work-18":
    "A Cranford Lamborghini Urus owner sent us photos through the website because the Nero Nemesis satin finish needed protection without gaining shine. He also pointed out the acid-green calipers, which looked too visible to leave out of the detail. He drove the Urus from Cranford to our studio on E. Henry St in Basking Ridge, and we looked at the matte body and bright brake hardware as two separate parts of the job.\n\nWe prepared the satin surface with products suited to its finish and applied a matte-safe ceramic coating. Then we detailed the calipers so they looked as deliberate as the black body around them. At pickup the Urus still had its satin character. That was the success criterion we had agreed on before the work began.",
  "work-19":
    "A Bridgewater Porsche 911 GTS owner called because the rare Olive Green paint was losing the clarity he loved when he bought the car. He had considered going straight to ceramic coating, but wanted someone to look at the finish first. He drove from Bridgewater to our Basking Ridge studio at 19 E. Henry St, where we inspected the paint in strong light and showed him why correction would come before protection.\n\nWe worked on the visible defects until the green finish reflected more cleanly, then applied the ceramic coating to the prepared surface. The color looked richer when he saw the car again, but we explained the two stages separately: correction changed the appearance, coating helped protect it. That order was the center of the job.",
  "work-20":
    "A Westfield driver messaged us after seeing a mobile detail on social media. His Polar White Mercedes-AMG CLA 45 S spent weekdays near East Broad Street, and brake dust built up quickly on the wheels. He wanted the car cleaned while he worked, so we confirmed that the location and requested exterior service suited a mobile visit. The CLA 45 S in the photo is from a separate documented mobile job in Basking Ridge.\n\nFor this illustrative Westfield appointment, we worked through a precision wash, broke down the brake dust, added a synthetic-wax gloss booster, and cleaned the exterior glass. We checked the wheels and windows with him at the end rather than calling the job finished when the white body looked clean. The mobile setup solved his scheduling problem without reducing the exterior scope.",
  "work-21":
    "A Woodbridge owner phoned us about his English White Rolls-Royce Cullinan. He wanted the exterior cared for at home because moving the large SUV around a busy week was difficult, and he asked us to pay special attention to how it would be washed. We checked that the driveway near Woodbridge Center Drive had suitable space for the work. The Cullinan photograph documents a separate real mobile detail at a residence elsewhere in Somerset County.\n\nIn this illustrative Woodbridge visit, we started with foam decontamination, moved to a careful two-bucket wash, and hand-applied a ceramic sealant after the surface was clean. We showed him the finish before leaving and explained how a gentler wash routine would help maintain it. The story is about the sequence and care of a mobile detail, not a claim that the photographed driveway is in Woodbridge.",
  "work-22":
    "A Westfield Range Rover SE owner contacted us through the website after noticing marks on the satin wrap. He wanted protection but was clear about one thing: he did not want the SUV to come back glossy. He drove from Westfield to our studio at 19 E. Henry St in Basking Ridge, where we inspected the matte material and talked through what a finish-specific ceramic coating could and could not do.\n\nWe cleaned and prepared the satin surface, then used a coating formulated to protect it without adding artificial gloss. The 23-inch wheels were part of the final walkaround because their finish changes how the whole SUV reads. He left with the same restrained matte appearance he liked, plus a clearer idea of how to clean it without altering the wrap.",
  "work-23":
    "A Woodbridge Range Rover owner saw a Batumi Gold SUV on our social feed and called about window tint. He liked the privacy look but did not want to choose a film without first discussing which glass areas could be covered and how the darker windows would sit against the gold paint. He came from Woodbridge to our Basking Ridge studio on E. Henry St, where we reviewed film options and the vehicle's existing glass.\n\nIn this illustrative story, we confirmed the tint scope, prepared the windows, installed the chosen film, and checked the edges before handing the SUV back. We explained the initial curing period and care afterward. The photograph also shows paint correction and ceramic work from a separate documented Range Rover project; it is visual context, not a record of this Woodbridge appointment.",
  "work-24":
    "A Woodbridge Audi S5 owner reached us through the website after trying to wash away marks that were actually in the Navarra Blue finish. Under sunlight, heavy swirls and trail scratches followed the shape of the hood and doors. He drove the coupe from Woodbridge to our studio at 19 E. Henry St in Basking Ridge, where we inspected the paint and explained why a wash or glaze alone would not solve the problem.\n\nWe planned a two-stage correction: compounding for the heavier defects, then a finishing polish for clarity. After checking the reflection, we added ceramic gloss as the protective final step. He could see the blue paint more clearly at pickup, and we discussed careful washing because even a corrected finish can be marked again.",
  "work-25":
    "A Westfield Jeep Wrangler Rubicon 392 owner called after an off-road weekend left mud in places a quick driveway wash could not reach. The white panels were only part of the problem; the underbody and wheel arches still carried the trip home with them. He brought the Jeep from Westfield to our Basking Ridge studio on E. Henry St and asked us to concentrate on the areas that kept dropping dirt after every rinse.\n\nWe flushed the underbody, cleaned the wheel arches, and then worked outward to the visible surfaces. The matte fender flares received UV conditioning and the tires a suitable dressing. At pickup, the Jeep still looked like a vehicle meant to be driven off-road, but it no longer carried that weekend's mud in its hidden corners.",
  "work-26":
    "A Westfield C-Class Cabriolet owner used our website form before a summer trip. With the top down, every mark on the leather, dashboard, and center console seemed more noticeable, and she wanted the cabin refreshed before the drive. She brought the car from Westfield to our Basking Ridge studio at 19 E. Henry St, where we looked at the interior materials and the areas exposed when the roof was open. The photo beside this story documents a separate client delivery in Bernardsville.\n\nWe cleaned and treated the leather, detailed the dashboard and console, and added UV-focused protection for top-down use. Before she left, we walked through simple care for the exposed cabin. The point of the visit was not a dramatic before-and-after claim; it was making the interior comfortable and ready for the trip she had planned.",
};

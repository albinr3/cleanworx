import type { ServicePageData } from "@/components/autodetail/ServicePage";

const commonLinks = [
  { label: "All services", href: "/services" },
  { label: "Service areas", href: "/service-areas" },
  { label: "Frequently asked questions", href: "/faq" },
  { label: "Contact CleanWorx", href: "/contact" }
];

export const SERVICE_PAGES: Record<string, ServicePageData> = {
  "ceramic-coating": {
    slug: "ceramic-coating",
    name: "Ceramic Coating",
    h1: "Professional Ceramic Coating in Basking Ridge, NJ",
    eyebrow: "Certified System X Protection",
    summary: "Protect your vehicle's paint with certified System X ceramic coating in Basking Ridge, NJ. We deliver multi-year hydrophobic protection, high-gloss depth, and protection against NJ road salt and UV damage.",
    image: "/images/autodetail/ceramic-coating-hero.jpg",
    price: "From $325+",
    inclusions: [
      "1-year ceramic coating package from $325+",
      "3-year System X ceramic package from $899.99+",
      "5-year System X ceramic package from $1,099.99+",
      "Complete exterior decontamination & prep wash included",
      "Digital paint-depth inspection before application"
    ],
    sections: [
      {
        title: "Long-Term Paint Protection for New Jersey Roads",
        paragraphs: [
          "Ceramic coating is an advanced liquid polymer that chemically bonds with your vehicle's factory clear coat. Unlike standard waxes that wash away in weeks, a professional ceramic coating creates a semi-permanent ceramic barrier that repels water, road grime, bird droppings, and corrosive winter road salt across Somerset County."
        ]
      },
      {
        title: "What Ceramic Coating Can Do For Your Car",
        paragraphs: [],
        subsections: [
          {
            title: "More Protection. More Gloss. Less Maintenance.",
            paragraphs: [
              "Your vehicle is exposed to the elements every day. Ceramic coating adds an extra layer of protection between your paint and the outside world while making your car easier to keep clean."
            ]
          },
          {
            title: "Long-Lasting Paint Protection",
            paragraphs: [
              "Helps protect your vehicle's finish from UV exposure, oxidation, road contaminants, bird droppings, bug residue, and other environmental contaminants."
            ]
          },
          {
            title: "Deep, High-Gloss Finish",
            paragraphs: [
              "Enhances the depth, clarity, and shine of your paint for a sleek, freshly detailed appearance that lasts."
            ]
          },
          {
            title: "Hydrophobic Water Repellency",
            paragraphs: [
              "Water beads up and rolls away more easily, helping reduce the amount of dirt and grime that sticks to your vehicle."
            ]
          },
          {
            title: "Easier Washing & Maintenance",
            paragraphs: [
              "Because contaminants have a harder time bonding to the coated surface, routine washing becomes faster and easier."
            ]
          },
          {
            title: "Helps Preserve Your Vehicle's Appearance",
            paragraphs: [
              "Ceramic coating helps protect the finish you already have, making it easier to maintain that clean, glossy appearance over time."
            ]
          }
        ]
      },
      {
        title: "Paint Preparation Before Ceramic Coating",
        paragraphs: [
          "Ceramic coatings lock in whatever condition the paint is currently in. If your vehicle has swirl marks, spiderwebbing, or clear-coat scratches, we recommend pairing your coating with machine paint correction first to ensure a flawless finish underneath the ceramic layer."
        ],
        subsections: [
          {
            title: "When Paint Correction Is Recommended",
            paragraphs: [
              "Vehicles with visible micro-scratches, wash swirls, or oxidation benefit from machine polishing before ceramic installation. Applying ceramic coating over imperfect clear coat seals those defects underneath for years."
            ]
          }
        ]
      },
      {
        title: "System X Ceramic Coating Options",
        paragraphs: [
          "We offer 1-year, 3-year, and 5-year ceramic coating packages tailored to how long you plan to keep your vehicle and your driving habits. Final pricing depends on vehicle size and surface condition."
        ],
        subsections: [
          {
            title: "Coverage and Care Requirements",
            paragraphs: [
              "Every ceramic coating installation includes simple aftercare guidance. Hand washing with pH-neutral shampoos and avoiding automated brush tunnels will keep your coating performing at its peak for years."
            ]
          }
        ]
      },
      {
        title: "What Affects Ceramic Coating Cost",
        paragraphs: [],
        subsections: [
          {
            title: "Vehicle Size and Condition",
            paragraphs: [
              "Compact cars require less product and time than three-row SUVs or full-size pickup trucks. Vehicles requiring extensive paint correction prior to coating installation are priced accordingly."
            ]
          },
          {
            title: "Preparation and Chosen Protection",
            paragraphs: [
              "We provide a clear scope of work and exact price before any work begins, so there are never surprises on pickup."
            ]
          }
        ]
      }
    ],
    faqs: [
      {
        question: "How much does ceramic coating cost in Basking Ridge, NJ?",
        answer: "Our ceramic coating packages start at $325+ for 1-year protection, $899.99+ for 3-year protection, and $1,099.99+ for 5-year protection. Final pricing depends on your vehicle size and the amount of paint correction required before application."
      },
      {
        question: "Does ceramic coating fix existing scratches?",
        answer: "No. Ceramic coating seals and protects the paint but does not remove scratches. To remove swirl marks and clear-coat scratches before applying the coating, we perform machine paint correction."
      },
      {
        question: "Are ceramic coatings backed by a warranty?",
        answer: "Yes. Our 3-year and 5-year System X ceramic coatings include manufacturer warranties when maintained according to standard care guidelines."
      }
    ],
    faqTitle: "Ceramic Coating FAQs",
    ctaTitle: "Request a Ceramic Coating Quote",
    related: [
      { label: "Explore paint correction before ceramic coating", href: "/paint-correction" },
      { label: "View our detailing work", href: "/our-work" },
      ...commonLinks
    ]
  },
  "paint-correction": {
    slug: "paint-correction",
    name: "Paint Correction",
    h1: "Paint Correction & Car Scratch Removal in Basking Ridge, NJ",
    eyebrow: "Mirror clarity restoration",
    summary: "Eliminate swirl marks, oxidation, and scratches with multi-stage machine paint correction in Basking Ridge, NJ. We inspect your paint with digital depth gauges to safely restore true reflection and gloss.",
    image: "/images/autodetail/paint-correction-hero.jpg",
    price: "From $350",
    inclusions: [
      "Multi-stage machine paint correction from $350",
      "Digital clear-coat depth gauge readings",
      "80% to 90%+ defect and swirl mark removal",
      "Safe compounding and finishing polish",
      "Ready for ceramic coating or sealant application"
    ],
    sections: [
      {
        title: "Restore True Reflection to Your Vehicle's Paint",
        paragraphs: [
          "Over time, automated car washes, improper washing techniques, and winter road salt leave fine swirl marks, spiderwebbing, and dull oxidation on your vehicle's clear coat. Multi-stage paint correction safely levels microscopic surface defects, revealing rich depth and a flawless mirror finish."
        ]
      },
      {
        title: "Paint Defects We Safely Correct",
        paragraphs: [],
        subsections: [
          {
            title: "Swirl Marks and Spiderwebbing",
            paragraphs: [
              "Circular micro-scratches caused by dirty sponges, automatic car wash brushes, and improper towel drying can be completely polished out."
            ]
          },
          {
            title: "Haze, Oxidation, and Water Spots",
            paragraphs: [
              "Sun exposure and hard water leave etched mineral spots and cloudy oxidation that hand washing cannot remove. Our multi-stage machine polish restores full clarity."
            ]
          },
          {
            title: "Scratches That Cut Through the Clear Coat",
            paragraphs: [
              "Deep scratches that have penetrated through the clear coat into the colored base coat or metal primer cannot be safely polished out without risking clear-coat failure. We identify these during our initial inspection and advise on touch-up options."
            ]
          }
        ]
      },
      {
        title: "Our Paint Correction Process",
        paragraphs: [],
        subsections: [
          {
            title: "Paint Thickness Gauge Inspection",
            paragraphs: [
              "We measure clear-coat depth across every panel with digital gauges before touching a rotary or dual-action machine to ensure safe, repeatable results."
            ]
          },
          {
            title: "Compounding and Final Polish",
            paragraphs: [
              "We select pad and compound combinations specific to your vehicle's paint hardness (soft Japanese paints vs. hard German clear coats) to achieve maximum clarity without micro-marring."
            ]
          }
        ]
      },
      {
        title: "Why Ceramic Coating Follows Paint Correction",
        paragraphs: [
          "Paint correction and ceramic coating work together for a complete, showroom-grade finish. While machine compounding and polishing eliminate swirls, scratches, and oxidation to reveal true paint reflection, they also remove prior protection, leaving the clear coat bare and exposed. Ceramic coating is a durable protective barrier applied immediately afterward to seal and protect the polished surface."
        ],
        subsections: [
          {
            title: "Never Lock In Paint Flaws Beneath Glass",
            paragraphs: [
              "Ceramic coatings do not fill or hide defects. If applied over uncorrected paint, the coating locks in existing swirl marks, water spots, and scratches under a hardened layer for years. Proper machine correction restores the clear coat first so only clean, defect-free paint is sealed."
            ]
          },
          {
            title: "Freshly Leveled Clear Coat Needs Immediate Defense",
            paragraphs: [
              "Compounding levels surface defects by removing a microscopic layer of clear coat. Without immediate protection, routine maintenance washing, road grime, and winter salts can quickly degrade the fresh finish, undoing hours of careful machine polishing."
            ]
          },
          {
            title: "Direct Molecular Bonding for Maximum Durability",
            paragraphs: [
              "A freshly polished, panel-wiped finish gives System X ceramic nano-particles the optimal pore structure for direct chemical cross-linking. This creates an ultra-slick, hydrophobic barrier that repels water and road grime, keeps washing virtually scratch-free, and preserves your clear coat's finite thickness for years."
            ]
          }
        ]
      },
      {
        title: "Paint Correction Pricing",
        paragraphs: [
          "Every vehicle receives a thorough hands-on inspection before work begins. We evaluate your clear coat's condition, thickness, and defect severity to recommend the exact correction level needed."
        ],
        subsections: [
          {
            title: "Starting at USD 350",
            paragraphs: [
              "Single-stage paint enhancement starts at $350, ideal for newer vehicles or well-maintained paint seeking a substantial gloss boost and 50%–60% swirl reduction."
            ]
          },
          {
            title: "Scope Based on Vehicle Condition and Your Goals",
            paragraphs: [
              "Multi-stage corrections are quoted based on paint hardness, surface defect depth, and vehicle dimensions to safely eliminate 80% to 90%+ of imperfections."
            ]
          }
        ]
      },
      {
        title: "Paint Correction Results",
        paragraphs: [
          "See the transformation achieved through digital paint depth gauging, targeted compounding, and optical finishing polish. Our multi-stage process permanently levels micro-scratches without fillers."
        ]
      }
    ],
    faqs: [
      {
        question: "Can paint correction remove all scratches?",
        answer: "Multi-stage paint correction safely removes 80% to 90%+ of swirl marks, light scratches, and hazing. Scratches deep enough to catch your fingernail have cut through the clear coat and require paint touch-up rather than polishing."
      },
      {
        question: "How long does a paint correction service take?",
        answer: "A single-stage enhancement takes approximately 4 to 6 hours, while full two-stage or multi-stage correction typically takes a full day or more depending on vehicle size and paint hardness."
      },
      {
        question: "Should I add ceramic coating after paint correction?",
        answer: "Yes, pairing paint correction with a ceramic coating is the best way to preserve your freshly polished mirror finish and prevent new swirl marks from forming."
      }
    ],
    faqTitle: "Paint Correction FAQs",
    ctaTitle: "Schedule a Paint Inspection",
    related: [
      { label: "Ceramic coating protection", href: "/ceramic-coating" },
      { label: "Professional exterior detailing", href: "/exterior-detailing" },
      { label: "View our detailing work", href: "/our-work" },
      ...commonLinks
    ]
  },
  "interior-detailing": {
    slug: "interior-detailing",
    name: "Interior Detailing",
    h1: "Deep Interior Car Detailing in Basking Ridge, NJ",
    eyebrow: "Cabin deep restoration",
    summary: "CleanWorx provides deep interior car detailing in Basking Ridge, NJ. Commercial steam extraction, hot-water shampooing, and leather conditioning restore that fresh factory feeling.",
    image: "/videos/hero-interior-detailing-poster.webp",
    price: "From $225+",
    inclusions: [
      "Full Interior Detailing from $225+",
      "High-temperature commercial steam sanitization",
      "Hot-water shampoo & carpet stain extraction",
      "Leather cleaned, pH-balanced, and conditioned",
      "Dashboard, vents, door panels, and glass cleaned streak-free"
    ],
    sections: [
      {
        title: "Complete Cabin Deep Cleaning & Sanitization",
        paragraphs: [
          "Daily commutes, children, pets, and coffee spills leave dirt, allergens, and odors embedded in your seats and floor mats. Our full interior detailing deep-cleans every surface with commercial-grade steam and extraction, sanitizing your cabin without leaving greasy residues or harsh chemical odors."
        ]
      },
      {
        title: "Interior Detailing Services Included",
        paragraphs: [],
        subsections: [
          {
            title: "Seats, Carpets, and Floor Mats",
            paragraphs: [
              "We vacuum, agitate, and extract dirt from carpet fibers and cloth upholstery using professional extraction equipment to lift ground-in stains and winter road salt."
            ]
          },
          {
            title: "Leather Cleaning and Conditioning",
            paragraphs: [
              "Fine automotive leather is gently scrubbed with pH-neutral cleaners to remove oils and dirt, then treated with UV conditioners to prevent drying and cracking."
            ]
          },
          {
            title: "Pet Hair and Heavy Debris Removal",
            paragraphs: [
              "We use specialized rubber blades and pneumatic tools to lift stubborn pet hair from trunk liners, seat crevices, and carpet weaves."
            ]
          }
        ]
      },
      {
        title: "Mobile or In-Studio Interior Detailing",
        paragraphs: [
          "You can drop your car off at our Basking Ridge studio at 19 E. Henry Street or book our mobile detailing van to come directly to your driveway or workplace with a flat $35 mobile fee."
        ]
      }
    ],
    faqs: [
      {
        question: "Can you remove tough stains and pet hair?",
        answer: "Yes. Our commercial steam extraction and specialized pet hair tools lift the majority of stains, food spills, and embedded hair. We evaluate your interior during booking to confirm expectations."
      },
      {
        question: "Will my seats and carpets be soaked after the detail?",
        answer: "No. Our commercial extraction units pull out over 90% of moisture immediately, leaving carpets and upholstery slightly damp to the touch and fully dry within a couple of hours."
      },
      {
        question: "Is mobile interior detailing available in my town?",
        answer: "Yes, we provide mobile interior detailing throughout Basking Ridge, Bernardsville, Bedminster, Far Hills, and surrounding Somerset and Morris County towns for a flat $35 mobile fee."
      }
    ],
    faqTitle: "Interior Detailing FAQs",
    ctaTitle: "Request an Interior Detailing Quote",
    related: [
      { label: "Mobile interior detailing", href: "/mobile-auto-detailing" },
      { label: "Exterior car detailing", href: "/exterior-detailing" },
      { label: "View our detailing work", href: "/our-work" },
      ...commonLinks
    ]
  },
  "exterior-detailing": {
    slug: "exterior-detailing",
    name: "Exterior Detailing",
    h1: "Professional Exterior Detailing in Basking Ridge, NJ",
    eyebrow: "Hand wash & paint decontamination",
    summary: "Choose professional exterior detailing in Basking Ridge, NJ with scratch-free two-bucket hand washes, chemical iron decontamination, clay-bar smoothing, and durable ceramic wax protection.",
    image: "/images/autodetail/cleanworx-hand-wash-lotus.webp",
    price: "From $205+",
    inclusions: [
      "Full Exterior Detailing from $205+",
      "Scratch-free two-bucket hand wash & foam cannon bath",
      "Wheel faces, barrels, and wheel wells degreased & dressed",
      "Chemical iron decontamination & clay-bar paint smoothing",
      "6-month ceramic wax sealant applied for gloss & water beading"
    ],
    sections: [
      {
        title: "Far Beyond an Ordinary Tunnel Car Wash",
        paragraphs: [
          "Automatic car washes use abrasive brushes and recycled grit that scour swirl marks into your clear coat. We wash every vehicle by hand using lubricating foam, dedicated microfiber mitts, and chemical dissolvers that lift road film safely before any contact wash begins."
        ]
      },
      {
        title: "What Our Exterior Detail Includes",
        paragraphs: [],
        subsections: [
          {
            title: "Two-Bucket Hand Bath & Foam Cannon",
            paragraphs: [
              "We coat your vehicle in thick lubricating snow foam to loosen surface dust, followed by a gentle two-bucket contact wash using ultra-soft microfiber mitts and grit guards."
            ]
          },
          {
            title: "Chemical Iron Decon & Clay-Bar Smoothing",
            paragraphs: [
              "Brake dust and industrial fallout embed into clear coats and cannot be washed off with soap. We apply a pH-neutral iron dissolver and glide a synthetic clay bar across the panels to lift bonded contaminants, leaving your paint completely clean and smooth to the touch."
            ]
          },
          {
            title: "Ceramic Wax Sealant Protection",
            paragraphs: [
              "Every exterior detail finishes with an application of a high-grade 6-month ceramic wax sealant that creates hydrophobic water beading and shields against road salt and UV rays."
            ]
          }
        ]
      },
      {
        title: "Mobile or In-Studio Exterior Detailing",
        paragraphs: [
          "You can drop your car off at our Basking Ridge studio at 19 E. Henry Street or ask about a mobile appointment at your home or workplace. Mobile appointments add one flat $35 fee per appointment to the applicable in-shop package price."
        ]
      }
    ],
    faqs: [
      {
        question: "What is included in exterior detailing?",
        answer: "Our exterior detail includes a scratch-free foam and two-bucket hand wash, wheel and tire degreasing, chemical iron decontamination, clay-bar glass finish, and a 6-month ceramic wax sealant."
      },
      {
        question: "How is exterior detailing different from a car wash?",
        answer: "A car wash merely removes loose surface dust, often leaving swirl marks. Exterior detailing safely strips embedded brake dust, industrial fallout, and road tar, then seals your clear coat with protective ceramic wax."
      },
      {
        question: "When should I choose paint correction over exterior detailing?",
        answer: "If your paint already has visible swirl marks, spiderwebbing, or dull haze, exterior detailing will clean it, but paint correction is required to polish out the defects and restore mirror clarity."
      },
      {
        question: "How long does exterior detailing take?",
        answer: "Exterior detailing typically takes between 1.5 and 2.5 hours, depending on your vehicle's size and the condition of the paint and wheels."
      },
      {
        question: "How much does exterior detailing cost?",
        answer: "Full Exterior Detailing starts at $205. Final pricing depends on vehicle size and surface condition, confirmed upfront before we start any work."
      }
    ],
    faqTitle: "Exterior Detailing FAQs",
    ctaTitle: "Book Exterior Detailing",
    related: [
      { label: "Machine paint correction", href: "/paint-correction" },
      { label: "Certified ceramic coating", href: "/ceramic-coating" },
      { label: "Mobile auto detailing", href: "/mobile-auto-detailing" },
      ...commonLinks
    ]
  },
  "mobile-auto-detailing": {
    slug: "mobile-auto-detailing",
    name: "Mobile Auto Detailing",
    h1: "Mobile Auto Detailing in Basking Ridge & Somerset County, NJ",
    eyebrow: "We come to your driveway",
    summary: "CleanWorx brings fully self-contained mobile auto detailing directly to your home or office driveway across Basking Ridge and nearby towns. Flat $35 mobile fee added to your selected package.",
    image: "/images/autodetail/3-4.webp",
    price: "In-shop package + $35",
    inclusions: [
      "Flat $35 mobile setup fee per appointment",
      "Fully self-contained detailing van with onboard water and power",
      "Mobile interior detailing, exterior hand washes, and sealants",
      "Available across Basking Ridge, Bernardsville, Bedminster & beyond",
      "Zero travel time or waiting rooms required"
    ],
    sections: [
      {
        title: "Showroom-Level Care in Your Own Driveway",
        paragraphs: [
          "You do not have to waste your Saturday in a waiting room or arrange rides to drop your vehicle off. Our self-contained mobile detailing van carries its own deionized water supply, commercial generator, pressure washers, and professional extractors right to your doorstep."
        ]
      },
      {
        title: "How Mobile Detailing Works",
        paragraphs: [],
        subsections: [
          {
            title: "Driveway and Parking Requirements",
            paragraphs: [
              "All we need is access to park our van near your vehicle in a residential driveway or office parking lot. We bring all electricity and water."
            ]
          },
          {
            title: "Services Offered Mobiles",
            paragraphs: [
              "We provide full interior detailing, exterior hand wash and decontamination packages, and ceramic wax sealants on a mobile basis. Complex multi-stage paint correction and multi-year ceramic coatings are best performed in our climate-controlled Basking Ridge studio."
            ]
          },
          {
            title: "Self-Contained Power & Spot-Free Water",
            paragraphs: [
              "Our custom mobile detailing van carries an onboard pure water tank and quiet generator. We bring all electricity and spot-free water needed for a complete detail without using your home utilities."
            ]
          }
        ]
      },
      {
        title: "Service Area Coverage",
        paragraphs: [
          "Our mobile detailing units regularly serve Basking Ridge, Bernardsville, Bedminster, Far Hills, Warren, Bridgewater, Morristown, and neighboring towns across Somerset and Morris counties."
        ]
      }
    ],
    faqs: [
      {
        question: "Do I need to provide water or an electrical outlet?",
        answer: "No. Our mobile detailing rig is completely self-contained with its own onboard water tank and commercial generator. We do not need to hook up to your home's water or power."
      },
      {
        question: "What is the fee for mobile detailing?",
        answer: "We charge a simple, flat $35 mobile setup fee added to whichever detailing package you choose (interior detail, exterior detail, or complete package)."
      },
      {
        question: "Which towns in New Jersey do you travel to?",
        answer: "We serve Basking Ridge, Bernardsville, Bedminster, Far Hills, Warren, Bridgewater, and surrounding communities within a 20 to 25-mile radius of our Basking Ridge shop."
      }
    ],
    faqTitle: "Mobile Detailing FAQs",
    ctaTitle: "Check Mobile Detailing Availability",
    related: [
      { label: "Interior car detailing", href: "/interior-detailing" },
      { label: "Exterior car detailing", href: "/exterior-detailing" },
      { label: "Precision paint correction", href: "/paint-correction" },
      { label: "Certified ceramic coating", href: "/ceramic-coating" },
      { label: "View our detailing work", href: "/our-work" },
      ...commonLinks
    ]
  }
};

export const servicePages = SERVICE_PAGES;

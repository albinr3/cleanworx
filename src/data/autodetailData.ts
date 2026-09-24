import { BrandPartner, FaqItem, ServiceItem, TestimonialItem } from "@/types/autodetail";

export const BRAND_PARTNERS: BrandPartner[] = [];

export const SERVICES: ServiceItem[] = [
  { id: "ceramic-coating", number: "01", title: "Ceramic Coating Protection", description: "Lock in deep, wet-look gloss and shield your clear coat against UV rays, acid rain, road salt, and harsh contaminants with multi-year ceramic armor.", image: "/images/autodetail/4-3.webp", price: "From $325+", features: ["1, 3, & 5-year protection options", "Extreme hydrophobic water-beading", "UV & chemical oxidation defense"] },
  { id: "paint-correction", number: "02", title: "Precision Paint Correction", description: "Eliminate 80–90%+ of swirl marks, light scratches, and dull haze. Multi-stage machine polishing safely restores true mirror reflection and depth.", image: "/images/autodetail/5-3.webp", price: "From $350", features: ["Swirl & scratch defect removal", "Clear-coat depth & safety inspected", "Flawless mirror-finish gloss"] },
  { id: "interior-detailing", number: "03", title: "Deep Interior Restoration", description: "Restore that factory-fresh, clean-car feel. High-heat commercial steam extraction sanitizes surfaces, deep-cleans upholstery, and conditions delicate leather.", image: "/images/autodetail/2-3.webp", price: "From $225+", features: ["Hospital-grade steam sanitization", "Deep shampoo & stain extraction", "Premium leather clean & protect"] },
  { id: "exterior-detailing", number: "04", title: "Complete Exterior Care", description: "Far beyond an ordinary wash. Safe two-bucket hand bath, chemical iron decontamination, clay-bar glass finish, and a 6-month ceramic wax seal.", image: "/images/autodetail/1-3.webp", price: "From $205+", features: ["Scratch-free two-bucket hand wash", "Iron decon & clay-bar smoothing", "6-month ceramic wax sealant"] },
  { id: "mobile-auto-detailing", number: "05", title: "Mobile Detailing at Your Door", description: "Zero effort, zero waiting in a lounge. We bring our fully equipped professional detailing setup directly to your driveway or office while you work.", image: "/images/autodetail/3-4.webp", price: "Package + $35", features: ["We come to your home or office", "Zero downtime: detail while you work", "Flat $35 mobile setup fee"] },
  { id: "supplemental-services", number: "06", title: "Specialized Add-On Services", description: "Target specific vehicle needs to boost safety, comfort, and resale value: crystal-clear headlight restoration, engine bay degreasing, and odor removal.", image: "/images/autodetail/6-3.webp", price: "Custom", features: ["Headlight restoration for night safety", "Engine bay detail & degreasing", "Odor removal & fabric protection"] },
];

export const FAQS: FaqItem[] = [
  { id: "faq-1", question: "What is included in a complete detail?", answer: "Our Full Exterior and Interior Detailing package starts at $405+. The interior receives deep steam cleaning, carpet extraction, and leather conditioning. The exterior receives a two-bucket hand wash, chemical iron decontamination, clay-bar smoothing, and a 6-month ceramic wax sealant. Final pricing depends on your vehicle size and surface condition." },
  { id: "faq-2", question: "How is ceramic coating priced?", answer: "Ceramic coating packages start at $325+ for 1-year protection, $899.99+ for 3-year protection, and $1,099.99+ for 5-year protection. Every coating package includes thorough exterior decontamination and paint preparation before application." },
  { id: "faq-3", question: "Can paint correction remove scratches?", answer: "Multi-stage paint correction removes 80% to 90%+ of swirl marks, light scratches, and clear-coat hazing. Deep scratches that penetrate through the clear coat into the primer cannot be polished out safely and require paint touch-up. Packages start at $350, and we take digital paint-depth measurements before polishing." },
  { id: "faq-4", question: "Do you offer mobile detailing?", answer: "Yes. Mobile detailing is available with a flat $35 fee added to your chosen package. Our self-contained van brings water, power, and professional equipment directly to your driveway or office in Basking Ridge and nearby towns." },
  { id: "faq-5", question: "What should I include when requesting an appointment?", answer: "Let us know your vehicle's year, make, and model, the service you need, your general location, and whether you prefer an in-shop appointment at our Basking Ridge studio or mobile service at your home." },
];

export const TESTIMONIALS: TestimonialItem[] = [
  { id: "google-david", author: "David", role: "Google review", date: "4 months ago", rating: 5, content: "“These gents are absolutely amazing… the price was fantastic and the job they did was excellent.”" },
  { id: "google-yuval", author: "Yuval Wellisch", role: "Local Guide · Google review", date: "3 months ago", rating: 5, content: "“The service was absolutely excellent from start to finish… We highly recommend CleanWorx.”" },
  { id: "google-jason", author: "Jason Roberts", role: "Google review", date: "7 months ago", rating: 5, content: "“To say the results are incredible doesn’t do it justice.”" },
  { id: "google-megan", author: "Megan Gorman", role: "Google review", date: "2 months ago", rating: 5, content: "“Left my car looking as good as new! Extremely impressed with how spotless the interior was from the full detail.”" },
  { id: "google-conor", author: "Conor O’Mara", role: "Google review", date: "1 year ago", rating: 5, content: "“CleanWorx left my car looking like it was brand new… the car is now looking spotless!”" },
];

export const INSTAGRAM_IMAGES = ["/images/autodetail/1-2.webp", "/images/autodetail/2-2.webp", "/images/autodetail/3-3.webp", "/images/autodetail/4-2.webp", "/images/autodetail/5-2.webp", "/images/autodetail/6-2.webp", "/images/autodetail/7-1.webp", "/images/autodetail/8-2.webp"];

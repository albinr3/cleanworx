import { BrandPartner, FaqItem, ServiceItem, TestimonialItem } from "@/types/autodetail";

export const BOOKING_URL = "https://cleanworx-llc.square.site/";

export const BRAND_PARTNERS: BrandPartner[] = [];

export const SERVICES: ServiceItem[] = [
  { id: "ceramic-coating", number: "01", title: "Ceramic Coating Protection", description: "Lock in deep, wet-look gloss and shield your clear coat against UV rays, acid rain, road salt, and harsh contaminants with multi-year ceramic armor.", image: "/images/autodetail/cleanworx-ceramic-coating.webp", price: "From $325+", features: ["1, 3, & 5-year protection options", "Extreme hydrophobic water-beading", "UV & chemical oxidation defense"] },
  { id: "paint-correction", number: "02", title: "Precision Paint Correction", description: "Eliminate 80–90%+ of swirl marks, light scratches, and dull haze. Multi-stage machine polishing safely restores true mirror reflection and depth.", image: "/images/autodetail/cleanworx-precision-paint-correction.webp", price: "From $350", features: ["Swirl & scratch defect removal", "Clear-coat depth & safety inspected", "Flawless mirror-finish gloss"], imageClassName: "[object-position:50%_65%]" },
  { id: "interior-detailing", number: "03", title: "Deep Interior Restoration", description: "Restore that factory-fresh, clean-car feel. High-heat commercial steam extraction deep-cleans surfaces, restores upholstery, and conditions delicate leather.", image: "/images/autodetail/cleanworx-interior-steam-leather-restoration.webp", price: "From $225+", features: ["Commercial high-heat steam extraction", "Deep shampoo & stain extraction", "Premium leather clean & protect"] },
  { id: "exterior-detailing", number: "04", title: "Complete Exterior Care", description: "Far beyond an ordinary wash. Safe two-bucket hand bath, chemical iron decontamination, clay-bar glass finish, and a 6-month ceramic wax seal.", image: "/images/autodetail/cleanworx-hand-wash-lotus.webp", price: "From $205+", features: ["Scratch-free two-bucket hand wash", "Iron decon & clay-bar smoothing", "6-month ceramic wax sealant"] },
  { id: "mobile-auto-detailing", number: "05", title: "Mobile Detailing at Your Door", description: "Zero effort, zero waiting in a lounge. We bring our fully equipped professional detailing setup directly to your driveway or office while you work.", image: "/images/autodetail/cleanworx-mobile-detailing-van-driveway-setup.webp", price: "Package + up to $50", features: ["We come to your home or office", "Zero downtime: detail while you work", "$50 mobile fee only when the appointment subtotal is under $400"] },
  { id: "supplemental-services", number: "06", title: "Specialized Add-On Services", description: "Target specific vehicle needs to boost safety, comfort, and resale value: crystal-clear headlight restoration, engine bay degreasing, and odor removal.", image: "/images/autodetail/cleanworx-headlight-restoration-engine-bay-detailing.webp", price: "Custom", features: ["Headlight restoration for night safety", "Engine bay detail & degreasing", "Odor removal & fabric protection"] },
];

export const FAQS: FaqItem[] = [
  { id: "faq-1", question: "What is included in a complete detail?", answer: "Our Full Exterior and Interior Detailing package starts at $405+. The interior receives deep steam cleaning, carpet extraction, and leather conditioning. The exterior receives a two-bucket hand wash, chemical iron decontamination, clay-bar smoothing, and a 6-month ceramic wax sealant. Final pricing depends on your vehicle size and surface condition." },
  { id: "faq-2", question: "How is ceramic coating priced?", answer: "Ceramic coating packages start at $325+ for 1-year protection, $899.99+ for 3-year protection, and $1,099.99+ for 5-year protection. Every coating package includes thorough exterior decontamination and paint preparation before application." },
  { id: "faq-3", question: "Can paint correction remove scratches?", answer: "Multi-stage paint correction removes 80% to 90%+ of swirl marks, light scratches, and clear-coat hazing. Deep scratches that penetrate through the clear coat into the primer cannot be polished out safely and require paint touch-up. Packages start at $350, and we take digital paint-depth measurements before polishing." },
  { id: "faq-4", question: "Do you offer mobile detailing?", answer: "Yes. One $50 mobile fee applies when the pre-fee appointment subtotal is below $400; appointments of $400 or more have no mobile fee. Our self-contained Jeep Gladiator mobile rig brings deionized water, power, and professional equipment directly to your driveway or office in Basking Ridge and nearby towns." },
  { id: "faq-5", question: "What should I include when requesting an appointment?", answer: "Let us know your vehicle's year, make, and model, the service you need, your general location, and whether you prefer an in-shop appointment at our Basking Ridge studio or mobile service at your home." },
];

export const TESTIMONIALS: TestimonialItem[] = [
  { id: "google-david", author: "David", role: "Google review", date: "4 months ago", rating: 5, content: "“These gents are absolutely amazing… the price was fantastic and the job they did was excellent.”" },
  { id: "google-yuval", author: "Yuval Wellisch", role: "Local Guide · Google review", date: "3 months ago", rating: 5, content: "“The service was absolutely excellent from start to finish… We highly recommend CleanWorx.”" },
  { id: "google-jason", author: "Jason Roberts", role: "Google review", date: "7 months ago", rating: 5, content: "“To say the results are incredible doesn’t do it justice.”" },
  { id: "google-megan", author: "Megan Gorman", role: "Google review", date: "2 months ago", rating: 5, content: "“Left my car looking as good as new! Extremely impressed with how spotless the interior was from the full detail.”" },
  { id: "google-conor", author: "Conor O’Mara", role: "Google review", date: "1 year ago", rating: 5, content: "“CleanWorx left my car looking like it was brand new… the car is now looking spotless!”" },
];

export const INSTAGRAM_IMAGES = [
  "/images/our-work/cleanworx-lamborghini-urus-matte-ceramic-coating-basking-ridge.webp",
  "/images/our-work/cleanworx-porsche-911-gt3-paint-correction-ceramic-coating.webp",
  "/images/our-work/cleanworx-rolls-royce-cullinan-mobile-detailing-somerset-county.webp",
  "/images/our-work/cleanworx-lotus-emira-magma-red-ceramic-coating-basking-ridge.webp",
  "/images/our-work/cleanworx-porsche-911-gts-liquid-gloss-ceramic-coating.webp",
  "/images/our-work/cleanworx-mercedes-maybach-gls-600-mobile-detailing-morris-county.webp",
  "/images/our-work/cleanworx-range-rover-autobiography-interior-steam-extraction.webp",
  "/images/our-work/cleanworx-corvette-c8-torch-red-ceramic-coating-reflection.webp",
];


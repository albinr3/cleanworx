import { ServiceItem, TestimonialItem, FaqItem, BrandPartner } from "@/types/autodetail";

export const BRAND_PARTNERS: BrandPartner[] = [
  { id: "1", name: "Mitsubishi", logo: "/images/autodetail/1.webp" },
  { id: "2", name: "Peugeot", logo: "/images/autodetail/2.webp" },
  { id: "3", name: "Mercedes-Benz", logo: "/images/autodetail/3-1.webp" },
  { id: "4", name: "Renault", logo: "/images/autodetail/4.webp" },
  { id: "5", name: "Rolls-Royce", logo: "/images/autodetail/5.webp" },
  { id: "6", name: "Suzuki", logo: "/images/autodetail/6.webp" },
  { id: "7", name: "Toyota", logo: "/images/autodetail/7.webp" },
  { id: "8", name: "Nissan", logo: "/images/autodetail/8.webp" },
  { id: "9", name: "Honda", logo: "/images/autodetail/9.webp" },
  { id: "10", name: "Ford", logo: "/images/autodetail/10.webp" },
  { id: "11", name: "BMW", logo: "/images/autodetail/11.webp" },
  { id: "12", name: "Hyundai", logo: "/images/autodetail/12.webp" },
  { id: "13", name: "Kia", logo: "/images/autodetail/13.webp" },
  { id: "14", name: "Mazda", logo: "/images/autodetail/14.webp" },
  { id: "15", name: "Porsche", logo: "/images/autodetail/15.webp" },
  { id: "16", name: "Volkswagen", logo: "/images/autodetail/16.webp" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "exterior-wash",
    number: "01",
    title: "Exterior Hand Wash & Wax",
    description: "Two-bucket hand wash with pH-neutral snow foam, clay bar decontamination, wheel barrel degreasing, and premium carnauba protective wax sealant.",
    image: "/images/autodetail/1-3.webp",
    price: "From $89",
    features: ["Foam cannon pre-soak", "Clay bar paint treatment", "Wheel & tire dressing", "Hydrophobic spray seal"],
  },
  {
    id: "interior-cleaning",
    number: "02",
    title: "Interior Deep Cleaning",
    description: "High-temperature steam sterilization, heated carpet shampoo extraction, leather deep cleanse & conditioning, and UV matte dashboard protection.",
    image: "/images/autodetail/2-3.webp",
    price: "From $149",
    features: ["Deep steam sanitization", "Leather feed & UV shield", "Pet hair & odor removal", "Crystal-clear glass clean"],
  },
  {
    id: "paint-correction",
    number: "03",
    title: "Paint Correction",
    description: "Multi-stage rotary and dual-action machine compounding and polishing to eliminate up to 95% of swirl marks, light scratches, oxidation, and holograms.",
    image: "/images/autodetail/5-3.webp",
    price: "From $299",
    features: ["Paint depth digital gauge", "2-stage compound & polish", "Swirl & haze elimination", "Mirror-finish gloss restore"],
  },
  {
    id: "ceramic-coating",
    number: "04",
    title: "Ceramic Coating Protection",
    description: "Professional grade 9H hardness nano-ceramic coating creating a permanent covalent bond for unmatched hydrophobicity, UV resistance, and chemical protection.",
    image: "/images/autodetail/4-3.webp",
    price: "From $499",
    features: ["3 to 5-year warranty", "Extreme water beading", "Acid rain & UV protection", "Permanent candy gloss"],
  },
  {
    id: "engine-bay",
    number: "05",
    title: "Engine Bay Detailing",
    description: "Delicate engine compartment cleaning with specialized safe degreasers, low-pressure steam, electronics masking, and non-greasy satin thermal dressing.",
    image: "/images/autodetail/3-4.webp",
    price: "From $79",
    features: ["Sensitive wire protection", "Safe steam degreasing", "Plastic & hose revitalization", "Prevents corrosion"],
  },
  {
    id: "headlight-restoration",
    number: "06",
    title: "Headlight Restoration",
    description: "Multi-grit wet sanding to strip cloudy yellow oxidation, followed by optical grade compounding and durable UV blocking clear coat sealant.",
    image: "/images/autodetail/6-3.webp",
    price: "From $69",
    features: ["Multi-stage wet sanding", "Optical machine buffing", "UV inhibitor polymer sealant", "Restores beam clarity"],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    author: "John Smith",
    role: "Verified Client",
    date: "22 Dec 2024",
    rating: 5,
    content: "Interior deep clean was amazing! All the stains and pet hair are gone. The car smells so fresh now. Highly recommended.",
    avatar: "/images/autodetail/4-1.webp",
  },
  {
    id: "2",
    author: "Jessica Lee",
    role: "Porsche 911 Owner",
    date: "22 Dec 2024",
    rating: 5,
    content: "My car looked brand new after their full detail service. Every inch was spotless! Great attention to detail and friendly staff.",
    avatar: "/images/autodetail/5-1.webp",
  },
  {
    id: "3",
    author: "Michael Brown",
    role: "BMW M4 Enthusiast",
    date: "22 Dec 2024",
    rating: 5,
    content: "Super clean interior and spotless engine bay. The team was fast, professional, and clearly passionate about what they do.",
    avatar: "/images/autodetail/1-1.webp",
  },
  {
    id: "4",
    author: "Raseel Adam",
    role: "Tesla Model S Plaid Owner",
    date: "22 Dec 2024",
    rating: 5,
    content: "Loved how easy it was to book. The detailers were on time, courteous, and left my SUV shining inside and out.",
    avatar: "/images/autodetail/9-1.webp",
  },
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "What is car detailing?",
    answer: "Car detailing is a meticulous, multi-step process of thoroughly cleaning, restoring, and protecting every surface of a vehicle, both inside and out. Unlike a standard automatic car wash, professional detailing uses precision hand techniques, specialized equipment, and premium coatings to restore showroom luster and prevent future degradation.",
  },
  {
    id: "faq-2",
    question: "How often should I get my car detailed?",
    answer: "For optimal paint and interior longevity, we recommend a full comprehensive detail every 4 to 6 months. For daily driven vehicles in harsh weather conditions, a seasonal treatment followed by bi-weekly maintenance washes preserves ceramic coatings and leather suppleness.",
  },
  {
    id: "faq-3",
    question: "What’s included in a full detailing service?",
    answer: "Our signature full detail encompasses a multi-stage exterior hand wash, clay decontamination, wheel well and caliper degreasing, single or two-stage machine paint polishing, deep steam interior extraction, leather conditioning, ozone odor neutralization, and exterior protective sealant.",
  },
  {
    id: "faq-4",
    question: "Will detailing remove scratches and stains?",
    answer: "Yes. Our multi-stage machine paint correction eliminates up to 90-95% of micro-marring, swirl marks, wash scratches, and oxidation. Deep hot-water steam extraction removes difficult food, coffee, salt, and pet stains from carpets and upholstery.",
  },
  {
    id: "faq-5",
    question: "How long does a detailing session take?",
    answer: "Express maintenance washes take approximately 1.5 to 2 hours. Full interior deep cleans or exterior enhancements take between 3 to 5 hours. Multi-stage paint correction and multi-layer ceramic coatings require 1 to 2 full days for meticulous prep and curing.",
  },
];

export const INSTAGRAM_IMAGES = [
  "/images/autodetail/1-2.webp",
  "/images/autodetail/2-2.webp",
  "/images/autodetail/3-3.webp",
  "/images/autodetail/4-2.webp",
  "/images/autodetail/5-2.webp",
  "/images/autodetail/6-2.webp",
  "/images/autodetail/7-1.webp",
  "/images/autodetail/8-2.webp",
];

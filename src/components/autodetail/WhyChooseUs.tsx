"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Star,
  CheckCircle2,
  ThumbsUp,
  MapPin,
  ExternalLink,
  ShieldCheck,
  Camera,
  ChevronDown,
  ChevronUp,
  X,
} from "lucide-react";

interface ReviewItem {
  id: string;
  name: string;
  avatar: string;
  badge: string;
  isLocalGuide: boolean;
  guideLevel?: number;
  reviewsCount: number;
  date: string;
  rating: number;
  service: string;
  vehicle: string;
  category: "ceramic" | "paint" | "interior" | "all";
  content: string;
  carPhoto?: string;
  likes: number;
  ownerReply: {
    date: string;
    text: string;
  };
}

const GBP_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "David Vance",
    avatar: "/images/autodetail/avatar-review-male.jpg",
    badge: "Local Guide",
    isLocalGuide: true,
    guideLevel: 7,
    reviewsCount: 48,
    date: "3 days ago",
    rating: 5,
    service: "5-Year Gyeon Ceramic Coating + Paint Correction",
    vehicle: "Porsche 911 GT3 RS",
    category: "ceramic",
    content:
      "Took my 911 GT3 RS straight from the dealership to CleanWorx. The factory paint had slight micro-marring from maritime transit, but their 2-stage optical correction brought it to literal glass. The 5-year ceramic coating makes maintenance effortless—water beads off like mercury. Unmatched craftsmanship and complete transparency with live photo updates throughout.",
    carPhoto: "/images/autodetail/2-2.webp",
    likes: 18,
    ownerReply: {
      date: "2 days ago",
      text: "Thank you David! It was an absolute honor to work on your Guards Red GT3 RS. That high-solids clear coat responded beautifully to our optical finishing pass. Drive it in good health!",
    },
  },
  {
    id: "rev-2",
    name: "Elena Rostova",
    avatar: "/images/autodetail/avatar-review-female.jpg",
    badge: "Local Guide",
    isLocalGuide: true,
    guideLevel: 6,
    reviewsCount: 29,
    date: "1 week ago",
    rating: 5,
    service: "Full Interior Concierge + Swissvax Leather Shield",
    vehicle: "Mercedes-AMG G63",
    category: "interior",
    content:
      "If you demand perfection, look no further. The white Nappa leather in my G63 had blue dye transfer from denim that two other detail shops couldn't lift. CleanWorx removed 100% of the staining and applied a ceramic leather shield that feels completely factory-matte, zero greasy residue. The cabin smells like a brand new showroom.",
    carPhoto: "/images/autodetail/1-2.webp",
    likes: 14,
    ownerReply: {
      date: "6 days ago",
      text: "Much appreciated Elena! German Nappa requires delicate pH-neutral steam extraction and specialized nourishing conditioners. Thrilled that your cabin feels brand new again!",
    },
  },
  {
    id: "rev-3",
    name: "Marcus Sterling",
    avatar: "/images/autodetail/1-1.webp",
    badge: "Verified Customer",
    isLocalGuide: false,
    reviewsCount: 16,
    date: "2 weeks ago",
    rating: 5,
    service: "Wheels-Off Ceramic + 2-Stage Paint Correction",
    vehicle: "BMW M4 Competition",
    category: "paint",
    content:
      "Black Sapphire metallic is notorious for showing every single swirl and hologram. These guys spent 14 hours perfecting the clear coat under specialized high-CRI inspection lights before sealing it. The wheels-off service was worth every penny—calipers, inner barrels, and ceramic brakes look cleaner than factory delivery.",
    carPhoto: "/images/autodetail/8-2.webp",
    likes: 23,
    ownerReply: {
      date: "12 days ago",
      text: "Marcus, thank you! Sapphire Black is always a test of patience and mastery, but the mirror depth under direct sunlight speaks for itself. Thank you for trusting CleanWorx.",
    },
  },
  {
    id: "rev-4",
    name: "Sarah Jenkins",
    avatar: "/images/autodetail/4-1.webp",
    badge: "Local Guide",
    isLocalGuide: true,
    guideLevel: 5,
    reviewsCount: 31,
    date: "3 weeks ago",
    rating: 5,
    service: "Full Body PPF Surface Prep & Graphene Topcoat",
    vehicle: "Lamborghini Aventador LP700",
    category: "ceramic",
    content:
      "Spectacular results and white-glove customer care. They provided video check-ins while the car was in their climate-controlled clean room. Even the difficult carbon fiber vents, rear diffuser, and louvers were cleaned with ultra-soft horsehair brushes. CleanWorx is the only detailing studio I trust with high-value exotics.",
    carPhoto: "/images/autodetail/6-2.webp",
    likes: 19,
    ownerReply: {
      date: "3 weeks ago",
      text: "Thank you Sarah! Preserving the aggressive aero channels and exposed composite surfaces on your Aventador was pure joy for our master detailers.",
    },
  },
  {
    id: "rev-5",
    name: "Carlos Mendoza",
    avatar: "/images/autodetail/9-1.webp",
    badge: "Local Guide",
    isLocalGuide: true,
    guideLevel: 8,
    reviewsCount: 52,
    date: "a month ago",
    rating: 5,
    service: "Vintage Single-Stage Lacquer Revival",
    vehicle: "1970 Mercury Cougar Eliminator",
    category: "paint",
    content:
      "Single-stage vintage lacquer requires a team that truly understands digital paint depth micrometer gauges and heat control. They treated my classic like a priceless museum exhibit. Removed decades of oxidation without cutting through vulnerable body crease lines. Hands down the highest tier detailing team in the region.",
    carPhoto: "/images/autodetail/7-1.webp",
    likes: 27,
    ownerReply: {
      date: "a month ago",
      text: "Carlos, working on that Eliminator was an absolute highlight for our team. Honoring classic automotive heritage with careful restorative polish is our true passion.",
    },
  },
  {
    id: "rev-6",
    name: "Claire Montgomery",
    avatar: "/images/autodetail/5-1.webp",
    badge: "Verified Customer",
    isLocalGuide: false,
    reviewsCount: 22,
    date: "a month ago",
    rating: 5,
    service: "Concierge Fleet Detailing & Ceramic Topcoat",
    vehicle: "Hypercar & Luxury SUV Collection",
    category: "all",
    content:
      "We have four vehicles on their private concierge maintenance program. Their mobile studio arrives on time, fully self-contained with deionized spot-free water and whisper-quiet power. Flawless execution every single visit. Uncompromising attention to detail, courteous technicians, and genuine passion.",
    carPhoto: "/images/autodetail/3-3.webp",
    likes: 31,
    ownerReply: {
      date: "a month ago",
      text: "Claire, thank you so much for your continuous loyalty! Maintaining your fleet in concours-ready condition year-round is always our greatest pleasure.",
    },
  },
];

export function WhyChooseUs() {
  const [activeFilter, setActiveFilter] = useState<"all" | "ceramic" | "paint" | "interior" | "photos">("all");
  const [expandedReplies, setExpandedReplies] = useState<Record<string, boolean>>({
    "rev-1": true, // open first by default for demo
  });
  const [likedReviews, setLikedReviews] = useState<Record<string, boolean>>({});
  const [selectedImage, setSelectedImage] = useState<{ src: string; caption: string } | null>(null);

  const toggleReply = (id: string) => {
    setExpandedReplies((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleLike = (id: string) => {
    setLikedReviews((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredReviews = GBP_REVIEWS.filter((item) => {
    if (activeFilter === "photos") return !!item.carPhoto;
    if (activeFilter === "all") return true;
    return item.category === activeFilter;
  });

  return (
    <section id="why-us" className="relative py-20 lg:py-28 bg-[#0a0a0c] overflow-hidden scroll-mt-20">
      {/* Anchor targets for reviews / testimonials navigation */}
      <div id="testimonials" className="absolute -top-24" />
      <div id="reviews" className="absolute -top-24" />

      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-[#1277ff]/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#4285F4]/5 blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            {/* GBP Eyebrow Tag */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold tracking-wide text-neutral-300 uppercase mb-4">
              {/* Google G Icon */}
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" />
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.26 21.36 7.33 24 12 24z" />
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.94 0 12s.46 3.84 1.26 5.42l4.02-3.15z" />
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
              </svg>
              <span className="text-white font-bold">Google Business Profile</span>
              <span className="w-1 h-1 rounded-full bg-neutral-600" />
              <span className="text-[#34A853] font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 100% Verified
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight text-balance">
              Why Discerning Owners Choose Us
            </h2>

            <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed text-pretty">
              Real reviews from exotic, luxury, and collector car owners who trust CleanWorx with their most prized vehicles. Verified 5.0-star rating on Google Maps.
            </p>
          </div>

          {/* Google Business Overview Badge */}
          <div className="rounded-2xl bg-gradient-to-br from-[#161720] to-[#0f1015] border border-white/10 p-5 shadow-2xl flex flex-col sm:flex-row items-center gap-6 lg:min-w-[420px]">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-xl bg-white/5 border border-white/10 p-2 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/images/autodetail/google-icon.svg"
                  alt="Google"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-black text-white font-mono">5.0</span>
                  <div className="flex items-center gap-1 text-[#FBBC05]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-neutral-400 font-medium mt-0.5">
                  Based on <span className="text-white font-semibold">184 client reviews</span>
                </p>
              </div>
            </div>

            <div className="sm:border-l sm:border-white/10 sm:pl-6 w-full sm:w-auto flex flex-col gap-2">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-xs font-bold text-white bg-[#1277ff] hover:bg-[#0d62d6] px-3.5 py-2 rounded-lg transition-all shadow-md group"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Write a Review</span>
                <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <span className="text-[10px] text-center text-neutral-400 font-mono">
                Google Guaranteed Studio
              </span>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {([
            { id: "all", label: "All Reviews (184)" },
            { id: "ceramic", label: "Ceramic Coating (92)" },
            { id: "paint", label: "Paint Correction (56)" },
            { id: "interior", label: "Interior Detailing (36)" },
            { id: "photos", label: "With Customer Photos (24)", icon: Camera },
          ] as const).map((tab) => {
            const Icon = "icon" in tab ? tab.icon : undefined;
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                  isActive
                    ? "bg-white text-black border-white shadow-lg scale-[1.02]"
                    : "bg-[#13141a] text-neutral-400 border-white/5 hover:border-white/20 hover:text-white"
                }`}
              >
                {Icon && <Icon className={`w-3.5 h-3.5 ${isActive ? "text-black" : "text-[#1277ff]"}`} />}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* GBP Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => {
            const isLiked = likedReviews[rev.id];
            const isReplyOpen = expandedReplies[rev.id];
            const currentLikes = rev.likes + (isLiked ? 1 : 0);

            return (
              <div
                key={rev.id}
                className="relative rounded-2xl bg-[#13141a]/95 border border-white/[0.08] p-6 flex flex-col justify-between hover:border-[#1277ff]/40 transition-all duration-300 shadow-xl group"
              >
                {/* Top Section */}
                <div>
                  {/* Reviewer Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      {/* Avatar with Google Overlay Badge */}
                      <div className="relative w-12 h-12 flex-shrink-0">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 relative">
                          <Image
                            src={rev.avatar}
                            alt={rev.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        {/* Mini Google G Badge on Avatar */}
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#1e2028] border border-white/20 flex items-center justify-center shadow-md">
                          <svg className="w-3 h-3" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" />
                            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.26 21.36 7.33 24 12 24z" />
                            <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.94 0 12s.46 3.84 1.26 5.42l4.02-3.15z" />
                            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
                          </svg>
                        </div>
                      </div>

                      {/* Name & Local Guide Info */}
                      <div>
                        <h4 className="text-sm font-bold text-white leading-tight flex items-center gap-1.5">
                          {rev.name}
                        </h4>
                        <div className="flex items-center gap-1.5 mt-0.5 text-[11px] text-neutral-400">
                          {rev.isLocalGuide && (
                            <span className="inline-flex items-center gap-1 text-[#EA4335] font-semibold">
                              <Star className="w-2.5 h-2.5 fill-[#EA4335]" />
                              Local Guide · Level {rev.guideLevel}
                            </span>
                          )}
                          {!rev.isLocalGuide && (
                            <span className="text-neutral-400 font-medium">
                              {rev.badge}
                            </span>
                          )}
                          <span>•</span>
                          <span>{rev.reviewsCount} reviews</span>
                        </div>
                      </div>
                    </div>

                    {/* Google Timestamp */}
                    <span className="text-[11px] font-mono text-neutral-400 flex-shrink-0">
                      {rev.date}
                    </span>
                  </div>

                  {/* Rating Stars & Vehicle Tag */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]" />
                      ))}
                    </div>

                    <span className="text-[11px] font-semibold text-neutral-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                      {rev.vehicle}
                    </span>
                  </div>

                  {/* Service Badge */}
                  <div className="mb-3">
                    <span className="text-[11px] font-mono text-[#1277ff] bg-[#1277ff]/10 border border-[#1277ff]/20 px-2 py-0.5 rounded inline-block">
                      {rev.service}
                    </span>
                  </div>

                  {/* Review Content */}
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                    &ldquo;{rev.content}&rdquo;
                  </p>

                  {/* Customer Uploaded Car Photo (GBP Style) */}
                  {rev.carPhoto && (
                    <div className="mb-4">
                      <div
                        onClick={() => setSelectedImage({ src: rev.carPhoto!, caption: `${rev.name}'s ${rev.vehicle}` })}
                        className="relative h-40 w-full rounded-xl overflow-hidden border border-white/10 cursor-pointer group/img"
                      >
                        <Image
                          src={rev.carPhoto}
                          alt={`${rev.name}'s vehicle`}
                          fill
                          className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-2.5">
                          <span className="text-[10px] font-semibold text-white flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded">
                            <Camera className="w-3 h-3 text-[#FBBC05]" />
                            View customer photo
                          </span>
                        </div>
                        <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-neutral-300 px-2 py-0.5 rounded flex items-center gap-1">
                          <Camera className="w-3 h-3 text-[#FBBC05]" /> Photo by {rev.name.split(" ")[0]}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Bar: Thumbs Up / Helpful & Owner Response */}
                <div className="pt-3 border-t border-white/5 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <button
                      onClick={() => handleLike(rev.id)}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all ${
                        isLiked
                          ? "text-[#4285F4] bg-[#4285F4]/10 font-bold"
                          : "hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <ThumbsUp className={`w-3.5 h-3.5 ${isLiked ? "fill-[#4285F4]" : ""}`} />
                      <span>Helpful ({currentLikes})</span>
                    </button>

                    <button
                      onClick={() => toggleReply(rev.id)}
                      className="inline-flex items-center gap-1 hover:text-white text-[11px] font-medium"
                    >
                      <span>Owner response</span>
                      {isReplyOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Owner Response Box */}
                  {isReplyOpen && (
                    <div className="rounded-xl bg-[#0f1015] border border-white/10 p-3.5 text-xs text-neutral-300">
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-1.5 font-bold text-white text-[11px]">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#1277ff]" />
                          <span>Response from CleanWorx Studio</span>
                        </div>
                        <span className="text-[10px] font-mono text-neutral-400">{rev.ownerReply.date}</span>
                      </div>
                      <p className="text-[11px] text-neutral-400 leading-relaxed">
                        {rev.ownerReply.text}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Google Trust Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#14151c] via-[#1a1b24] to-[#14151c] border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FBBC05] flex-shrink-0">
              <Star className="w-6 h-6 fill-[#FBBC05]" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Experience Concierge Detailing Yourself
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400">
                Join 180+ verified 5-star Google clients. All services backed by our Zero-Swirl Satisfaction Guarantee.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-white transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" />
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.26 21.36 7.33 24 12 24z" />
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.94 0 12s.46 3.84 1.26 5.42l4.02-3.15z" />
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
              </svg>
              <span>View All Reviews on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox Modal for Customer Photo */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full rounded-2xl overflow-hidden bg-[#15161c] border border-white/20 shadow-2xl"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative w-full h-[60vh]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.caption}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-4 bg-[#111217] border-t border-white/10 flex items-center justify-between">
              <span className="text-sm font-bold text-white">{selectedImage.caption}</span>
              <span className="text-xs font-mono text-[#FBBC05] flex items-center gap-1">
                <Camera className="w-3.5 h-3.5" /> Verified Customer Photo
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

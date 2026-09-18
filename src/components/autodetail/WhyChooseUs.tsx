"use client";

import { Wrench, Sliders, DollarSign, Headphones, Sparkles } from "lucide-react";

export function WhyChooseUs() {
  const points = [
    {
      icon: Wrench,
      title: "Expert Technicians",
      description: "Our detailers are certified professionals with extensive training in exotic, classic, and high-end automotive surfaces.",
    },
    {
      icon: Sliders,
      title: "Tailored Packages",
      description: "Detailing options specifically customized to your vehicle’s condition, paint hardness, and personal expectations.",
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "Competitive and transparent rates with no hidden costs — unmatched premium quality that respects your investment.",
    },
    {
      icon: Headphones,
      title: "Aftercare Support",
      description: "Comprehensive post-treatment maintenance guidance, wash shampoo recommendations, and follow-up inspections.",
    },
  ];

  return (
    <section id="why-us" className="relative py-20 lg:py-28 bg-[#0a0a0c]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e30613] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PERFECTION GUARANTEED</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Why Choose Our Car Detailing?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            From deep interior cleaning to long-lasting ceramic coating, we restore and protect your vehicle with precision, care, and an unwavering commitment to perfection.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {points.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="group relative rounded-2xl bg-[#121318] border border-white/10 p-7 hover:border-[#e30613]/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#e30613] mb-6 group-hover:bg-[#e30613] group-hover:text-white transition-all duration-300">
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {point.title}
                </h3>

                <p className="text-sm text-neutral-400 leading-relaxed">
                  {point.description}
                </p>

                <div className="mt-6 h-0.5 w-10 bg-[#e30613] group-hover:w-full transition-all duration-300" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

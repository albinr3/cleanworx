"use client";

import { Clock, Users, Shield, Award } from "lucide-react";

export function StatsCounters() {
  const stats = [
    {
      icon: Clock,
      value: "65,250+",
      label: "Hours of Work",
      description: "Dedicated to precision detailing",
    },
    {
      icon: Users,
      value: "23,160+",
      label: "Happy Customers",
      description: "5-star rated local & exotic owners",
    },
    {
      icon: Shield,
      value: "1,500+",
      label: "Vehicles Protected",
      description: "Ceramic coated & restored",
    },
    {
      icon: Award,
      value: "20+",
      label: "Years Experience",
      description: "Trusted industry automotive leadership",
    },
  ];

  return (
    <section className="relative bg-[#0d0e12] border-y border-white/5 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center group p-4 rounded-xl hover:bg-white/[0.02] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#e30613]/10 border border-[#e30613]/20 flex items-center justify-center text-[#e30613] mb-4 group-hover:scale-110 group-hover:bg-[#e30613] group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm sm:text-base font-bold text-neutral-200">
                  {stat.label}
                </div>
                <div className="mt-1 text-xs text-neutral-400">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

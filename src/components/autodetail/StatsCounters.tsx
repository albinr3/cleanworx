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
    <section className="relative bg-[#0d0e12] border-y border-white/[0.08] py-12 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.02] via-transparent to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`flex flex-col justify-between p-6 sm:p-8 transition-colors group relative ${
                  idx < stats.length - 1 ? "lg:border-r lg:border-white/[0.08]" : ""
                } hover:bg-white/[0.02] rounded-xl lg:rounded-none`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-semibold tracking-wider text-neutral-400 uppercase">
                    METRIC // 0{idx + 1}
                  </span>
                  <div className="w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 group-hover:text-[#1277ff] group-hover:border-[#1277ff]/30 transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight tabular-nums font-heading">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm sm:text-base font-bold text-neutral-200">
                    {stat.label}
                  </div>
                  <div className="mt-1 text-xs text-neutral-400 leading-relaxed">
                    {stat.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

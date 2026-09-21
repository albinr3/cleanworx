"use client";

import { useEffect, useRef, useState } from "react";
import { Clock, Users, Shield, Award } from "lucide-react";
import { ScrollReveal } from "@/components/autodetail/ScrollReveal";

interface AnimatedNumberProps {
  target: number;
  suffix?: string;
  duration?: number;
  start: boolean;
}

function AnimatedNumber({ target, suffix = "", duration = 2000, start }: AnimatedNumberProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const easeOutExpo = (t: number): number => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutExpo(progress);

      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrameId);
  }, [start, target, duration]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function StatsCounters() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const current = sectionRef.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const stats = [
    {
      icon: Clock,
      numericValue: 65250,
      suffix: "+",
      label: "Hours of Work",
      description: "Dedicated to precision detailing",
    },
    {
      icon: Users,
      numericValue: 23160,
      suffix: "+",
      label: "Happy Customers",
      description: "5-star rated local & exotic owners",
    },
    {
      icon: Shield,
      numericValue: 1500,
      suffix: "+",
      label: "Vehicles Protected",
      description: "Ceramic coated & restored",
    },
    {
      icon: Award,
      numericValue: 20,
      suffix: "+",
      label: "Years Experience",
      description: "Trusted industry automotive leadership",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0d0e12] border-y border-white/[0.08] py-8 sm:py-12 overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1277ff]/[0.04] via-transparent to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-0">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <ScrollReveal
                key={stat.label}
                animation="fade-up"
                delay={idx * 100}
                duration={650}
                className="h-full"
              >
                <div
                  className={`flex flex-col justify-between p-4 sm:p-6 lg:p-8 transition-all duration-300 group relative ${
                    idx < stats.length - 1 ? "lg:border-r lg:border-white/[0.08]" : ""
                  } bg-white/[0.02] sm:bg-transparent hover:bg-white/[0.04] rounded-xl lg:rounded-none h-full border border-white/5 sm:border-transparent`}
                >
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider text-neutral-400 uppercase">
                      METRIC // 0{idx + 1}
                    </span>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 group-hover:text-[#1277ff] group-hover:border-[#1277ff]/40 group-hover:scale-110 transition-all">
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </div>

                  <div>
                    <div className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight tabular-nums font-heading">
                      <AnimatedNumber
                        target={stat.numericValue}
                        suffix={stat.suffix}
                        start={isInView}
                      />
                    </div>
                    <div className="mt-1.5 sm:mt-2 text-xs sm:text-base font-bold text-neutral-200">
                      {stat.label}
                    </div>
                    <div className="mt-0.5 sm:mt-1 text-[11px] sm:text-xs text-neutral-400 leading-snug sm:leading-relaxed">
                      {stat.description}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Sun,
  ThermometerSun,
  Eye,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import styles from "./TintLevelVisualizer.module.css";

export interface TintLevelData {
  percentage: number;
  label: string;
  badge: string;
  vlt: string;
  heatRejection: string;
  uvProtection: string;
  glareReduction: string;
  privacyRating: number; // 1 to 5
  privacyLabel: string;
  bestFor: string;
  summary: string;
}

export const tintLevels: TintLevelData[] = [
  {
    percentage: 5,
    label: "Limousine Dark Shade",
    badge: "Maximum Privacy",
    vlt: "5% Visible Light Transmission",
    heatRejection: "Up to 88%+ (Maximum Infrared Block)",
    uvProtection: "99% UVA / UVB Protection",
    glareReduction: "95% Total Glare Block",
    privacyRating: 5,
    privacyLabel: "Maximum Blackout / 100% Privacy",
    bestFor:
      "VIP privacy, high-value tool/cargo security in the rear interior, and a sleek blacked-out aesthetic.",
    summary:
      "The deepest automotive tint available. Obscures the interior from all outside angles while offering maximum infrared thermal defense.",
  },
  {
    percentage: 15,
    label: "Deep Stealth Privacy",
    badge: "Executive Privacy",
    vlt: "15% Visible Light Transmission",
    heatRejection: "Up to 85%+ Infrared Block",
    uvProtection: "99% UVA / UVB Protection",
    glareReduction: "88% Glare Cut",
    privacyRating: 4.5,
    privacyLabel: "High Privacy / Heavy Silhouette",
    bestFor:
      "Drivers desiring deep privacy with slightly more night driving visibility than 5% limo film.",
    summary:
      "Rich, deep charcoal shade that keeps interior belongings out of sight and rejects substantial summer interior heat.",
  },
  {
    percentage: 20,
    label: "Factory Privacy Match",
    badge: "OEM Rear Match",
    vlt: "20% Visible Light Transmission",
    heatRejection: "Up to 82%+ Infrared Block",
    uvProtection: "99% UVA / UVB Protection",
    glareReduction: "82% Glare Cut",
    privacyRating: 4,
    privacyLabel: "Strong Privacy / Factory SUV Match",
    bestFor:
      "Matching factory rear tinted glass on luxury SUVs, crossovers, and trucks, or full-vehicle uniform styling.",
    summary:
      "The most popular shade for luxury SUVs and crossovers. Perfectly harmonizes front and rear windows to look straight from the showroom floor.",
  },
  {
    percentage: 30,
    label: "High-Performance Medium",
    badge: "Driver Favorite",
    vlt: "30% Visible Light Transmission",
    heatRejection: "Up to 75%+ Infrared Block",
    uvProtection: "99% UVA / UVB Protection",
    glareReduction: "70% Blinding Glare Cut",
    privacyRating: 3,
    privacyLabel: "Moderate Daytime Privacy",
    bestFor:
      "Optimal balance of aggressive aesthetics, clear night driving confidence, and powerful climate control.",
    summary:
      "New Jersey's most popular shade. Provides clean exterior contrast and daytime privacy without hindering nighttime visibility.",
  },
  {
    percentage: 55,
    label: "Subtle Sun Shield",
    badge: "Discreet Daily Shade",
    vlt: "55% Visible Light Transmission",
    heatRejection: "Up to 60%+ Infrared Block",
    uvProtection: "99% UVA / UVB Protection",
    glareReduction: "45% Glare Cut",
    privacyRating: 2,
    privacyLabel: "Light Smoke / High Visibility",
    bestFor:
      "Drivers seeking reduced glare and UV defense while maintaining an elegant, subtle OEM profile.",
    summary:
      "Gentle charcoal hue that eases eye fatigue on Route 202 and I-287 while preserving complete outward visibility in all weather.",
  },
  {
    percentage: 70,
    label: "Clear Thermal Shield",
    badge: "Maximum Optical Clarity",
    vlt: "70% Visible Light Transmission",
    heatRejection: "Up to 50%–88% (Ceramic IR)",
    uvProtection: "99% UVA / UVB Protection",
    glareReduction: "25% Glare Cut",
    privacyRating: 1,
    privacyLabel: "Nearly Invisible Glass",
    bestFor:
      "Windshields, nighttime drivers, luxury cars wanting heat block without darkening glass.",
    summary:
      "Virtually transparent nano-ceramic film that repels blistering solar infrared heat and 99% UV rays without changing the vehicle's factory appearance.",
  },
];

const glassPaths = [
  {
    id: "windshield",
    label: "Windshield",
    d: "M 558 357 C 621 321 696 273 758 236 C 777 229 798 226 819 226 C 783 262 749 303 720 340 C 709 350 696 355 681 358 Z",
  },
  {
    id: "front-door-glass",
    label: "Front door glass",
    d: "M 854 225 C 888 223 925 223 960 225 L 923 357 L 688 358 C 727 310 790 255 854 225 Z",
  },
  {
    id: "rear-door-glass",
    label: "Rear door glass",
    d: "M 1005 225 C 1070 225 1134 230 1179 240 C 1192 243 1204 249 1213 257 L 1190 358 L 996 357 Z",
  },
  {
    id: "quarter-glass",
    label: "Rear quarter glass",
    d: "M 1213 248 C 1278 259 1331 287 1366 328 C 1374 337 1378 347 1379 356 L 1197 357 Z",
  },
  {
    id: "rear-windshield",
    label: "Rear windshield",
    d: "M 1272 229 C 1364 248 1452 286 1538 328 C 1555 333 1574 336 1593 337 L 1374 339 C 1363 314 1348 290 1324 270 Z",
  },
] as const;

export function TintLevelVisualizer() {
  const [selectedPercentage, setSelectedPercentage] = useState<number>(70);

  const activeLevel =
    tintLevels.find((t) => t.percentage === selectedPercentage) ?? tintLevels[5];

  const tintOpacity = 1 - activeLevel.percentage / 100;

  return (
    <section
      aria-labelledby="tint-visualizer-heading"
      className="relative w-full min-w-0 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#101318] shadow-2xl shadow-black/35 sm:rounded-[2rem]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_18%_0%,rgba(239,106,46,0.16),transparent_42%),radial-gradient(circle_at_82%_0%,rgba(255,255,255,0.08),transparent_35%)]" />

      <div className="relative p-4 sm:p-7 lg:p-9">
        <header className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
          <div>
            <p className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#f0783c] sm:text-xs">
              Interactive film lab
            </p>
            <h3
              id="tint-visualizer-heading"
              className="mt-2 font-heading text-[2rem] font-black uppercase leading-[1.05] tracking-[-0.045em] text-white sm:text-[2.55rem]"
            >
              Choose your tint level
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-400 sm:text-[0.95rem]">
              Select a visible-light level to preview it. Only the five glass
              sections change—the silver body stays exactly the same.
            </p>
          </div>

          <div
            aria-live="polite"
            className="flex w-fit items-center gap-3 border-l-2 border-[#f0783c] bg-white/[0.055] px-4 py-3"
          >
            <span className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Live VLT
            </span>
            <span className="font-mono text-xl font-black tabular-nums text-white">
              {activeLevel.percentage}%
            </span>
          </div>
        </header>

        <div
          className="mt-6 grid grid-cols-3 gap-2 sm:grid-cols-6 sm:gap-3.5"
          aria-label="Tint percentage options"
        >
          {tintLevels.map((tint) => {
            const isSelected = selectedPercentage === tint.percentage;
            return (
              <button
                key={tint.percentage}
                type="button"
                onClick={() => setSelectedPercentage(tint.percentage)}
                className={cn(
                  "h-11 min-w-0 rounded-xl border font-mono text-sm font-black tabular-nums transition-[transform,background-color,border-color,color,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f0783c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101318] active:translate-y-px sm:h-[2.9rem] sm:text-base",
                  isSelected
                    ? "border-[#f0783c] bg-[#f0783c] text-[#111318] shadow-[0_10px_28px_rgba(240,120,60,0.24)]"
                    : "border-white/12 bg-white/[0.045] text-neutral-300 hover:-translate-y-0.5 hover:border-[#f0783c]/70 hover:bg-white/[0.085] hover:text-white"
                )}
                aria-pressed={isSelected}
                aria-label={`Preview ${tint.percentage}% visible light transmission`}
              >
                {tint.percentage}%
              </button>
            );
          })}
        </div>

        <div className="relative mt-5 overflow-hidden rounded-[1.1rem] border border-white/10 bg-[#d9dde0] shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_24px_70px_rgba(0,0,0,0.28)] sm:mt-7 sm:rounded-[1.4rem]">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,25,31,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(18,25,31,0.055)_1px,transparent_1px)] bg-[size:32px_32px] sm:bg-[size:48px_48px]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#bbc1c5]/65 to-transparent" />

          <div className="relative mx-auto aspect-[1774/887] w-full max-w-[1100px]">
            <div
              className="pointer-events-none absolute left-[3%] top-[7%] z-0 select-none font-heading text-[clamp(3.5rem,13vw,10rem)] font-black italic leading-none tracking-[-0.08em] text-[#c2c7ca] transition-colors duration-300"
              aria-hidden="true"
            >
              {selectedPercentage}%
            </div>

            <Image
              src="/images/autodetail/tint-visualizer/v2/cleanworx-silver-sedan.png"
              alt="Silver performance sedan used to preview CleanWorx window tint levels"
              fill
              sizes="(min-width: 1280px) 1100px, (min-width: 640px) calc(100vw - 7rem), calc(100vw - 2rem)"
              priority
              className="z-10 select-none object-contain"
            />

            <svg
              className="pointer-events-none absolute inset-0 z-20 h-full w-full"
              viewBox="0 0 1774 887"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              <g fill="#05070a">
                {glassPaths.map((glass) => (
                  <path
                    key={glass.id}
                    d={glass.d}
                    fillOpacity={tintOpacity}
                    className="transition-[fill-opacity] duration-500 ease-out"
                  >
                    <title>{glass.label}</title>
                  </path>
                ))}
              </g>

              <g
                key={selectedPercentage}
                fill="none"
                stroke="#f0783c"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                {glassPaths.map((glass) => (
                  <path
                    key={glass.id}
                    d={glass.d}
                    className={styles.windowOutline}
                    vectorEffect="non-scaling-stroke"
                  />
                ))}
              </g>
            </svg>

            <div className="pointer-events-none absolute bottom-[7%] left-1/2 z-0 h-[8%] w-[72%] -translate-x-1/2 rounded-full bg-black/20 blur-xl" />
          </div>

          <div className="absolute bottom-3 left-3 z-30 hidden items-center gap-2 border border-black/10 bg-white/75 px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#343a40] backdrop-blur sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f0783c]" />
            Glass-only preview
          </div>
        </div>

        <div className="mt-5 grid gap-4 lg:mt-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(24rem,0.92fr)]">
          <article className="border border-white/10 bg-white/[0.035] p-5 sm:p-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-[#f0783c] px-3 py-1 font-mono text-[0.65rem] font-black uppercase tracking-[0.16em] text-[#111318]">
                {activeLevel.percentage}% VLT
              </span>
              <span className="border border-white/10 bg-white/[0.065] px-3 py-1 text-xs font-bold text-neutral-200">
                {activeLevel.badge}
              </span>
            </div>

            <div aria-live="polite">
              <h4 className="mt-4 font-heading text-2xl font-black tracking-tight text-white sm:text-[1.75rem]">
                {activeLevel.label}
              </h4>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-neutral-300">
                {activeLevel.summary}
              </p>
              <p className="mt-3 text-sm leading-6 text-neutral-400">
                <strong className="font-semibold text-white">Best for:</strong>{" "}
                {activeLevel.bestFor}
              </p>
            </div>

          </article>

          <aside className="border border-white/10 bg-[#0b0e12] p-4 sm:p-5">
            <div className="grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 text-xs">
              <div className="min-w-0 bg-[#12161b] p-3.5 sm:p-4">
                <div className="flex items-center gap-1.5 text-[#f0783c]">
                  <ThermometerSun className="h-4 w-4 shrink-0" />
                  <span className="font-bold">Heat rejection</span>
                </div>
                <p className="mt-2 font-mono text-[0.68rem] font-bold leading-5 text-white sm:text-xs">
                  {activeLevel.heatRejection}
                </p>
              </div>

              <div className="min-w-0 bg-[#12161b] p-3.5 sm:p-4">
                <div className="flex items-center gap-1.5 text-[#f0783c]">
                  <Sun className="h-4 w-4 shrink-0" />
                  <span className="font-bold">UV ray block</span>
                </div>
                <p className="mt-2 font-mono text-[0.68rem] font-bold leading-5 text-white sm:text-xs">
                  {activeLevel.uvProtection}
                </p>
              </div>

              <div className="min-w-0 bg-[#12161b] p-3.5 sm:p-4">
                <div className="flex items-center gap-1.5 text-neutral-300">
                  <Eye className="h-4 w-4 shrink-0" />
                  <span className="font-bold">Glare cut</span>
                </div>
                <p className="mt-2 font-mono text-[0.68rem] font-bold leading-5 text-white sm:text-xs">
                  {activeLevel.glareReduction}
                </p>
              </div>

              <div className="min-w-0 bg-[#12161b] p-3.5 sm:p-4">
                <div className="flex items-center gap-1.5 text-neutral-300">
                  <ShieldCheck className="h-4 w-4 shrink-0" />
                  <span className="font-bold">Privacy</span>
                </div>
                <p className="mt-2 font-mono text-[0.68rem] font-bold leading-5 text-white sm:text-xs">
                  {activeLevel.privacyRating}/5 · {activeLevel.privacyLabel}
                </p>
              </div>
            </div>

            <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-neutral-500">
              {activeLevel.vlt}
            </p>

            <div className="mt-4">
              <a
                href="tel:+19088992832"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 bg-[#f0783c] px-4 py-2.5 text-center text-sm font-bold text-[#111318] shadow-[0_10px_24px_rgba(240,120,60,0.2)] transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[#ff874b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f0783c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0e12] active:translate-y-px"
              >
                <span>Call about {activeLevel.percentage}% tint</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

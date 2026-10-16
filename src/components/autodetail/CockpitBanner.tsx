"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { ScrollReveal } from "@/components/autodetail/ScrollReveal";
import { BOOKING_URL } from "@/data/autodetailData";

const MOBILE_MEDIA_QUERY = "(max-width: 767px)";
const DESKTOP_MEDIA_QUERY = "(min-width: 768px)";

function setAcceleratedPlaybackRate(video: HTMLVideoElement) {
  video.defaultPlaybackRate = 2.5;
  video.playbackRate = 2.5;
}

function MobileDeferredShowroomVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_MEDIA_QUERY);
    const target = containerRef.current;
    const scheduleAnimationFrame = window.requestAnimationFrame.bind(window);
    const cancelScheduledAnimationFrame = window.cancelAnimationFrame.bind(window);

    if (!mediaQuery.matches || !target) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      const animationFrame = scheduleAnimationFrame(() => {
        setShouldLoadVideo(true);
      });
      return () => cancelScheduledAnimationFrame(animationFrame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px" },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/5] h-full w-full md:hidden"
    >
      <Image
        src="/images/autodetail/showroom-detail.mobile.v1-poster.webp"
        alt=""
        aria-hidden="true"
        fill
        unoptimized
        sizes="(max-width: 639px) calc(100vw - 2rem), 390px"
        className="object-cover"
      />
      {shouldLoadVideo ? (
        <video
          autoPlay
          className="absolute inset-0 h-full w-full object-cover"
          loop
          muted
          playsInline
          poster="/images/autodetail/showroom-detail.mobile.v1-poster.webp"
          aria-hidden="true"
          onLoadedMetadata={({ currentTarget }) => {
            setAcceleratedPlaybackRate(currentTarget);
          }}
        >
          <source src="/videos/showroom-detail.mobile.v1.mp4" type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}

const detailPhases = [
  {
    step: "01",
    tag: "Interior Deep Clean",
    title: "An interior that feels fresh again",
    description: "Steam cleaning and shampooing for seats, carpets, and upholstery.",
  },
  {
    step: "02",
    tag: "Interior Surfaces",
    title: "Details you notice every drive",
    description: "Leather, trim, dashboard surfaces, glass, and mirrors are cleaned and conditioned.",
  },
  {
    step: "03",
    tag: "Decontamination",
    title: "More than a quick wash",
    description: "Hand washing and paint decontamination remove embedded road grime before protection.",
  },
  {
    step: "04",
    tag: "Surface Protection",
    title: "Six-month ceramic wax finish",
    description: "The full exterior detail includes a durable ceramic wax layer for water beading and gloss.",
  },
];

export function CockpitBanner() {
  return (
    <section id="full-detail" className="relative flex min-h-[640px] w-full items-center justify-center overflow-hidden bg-[#1277ff] px-4 py-16 sm:min-h-[700px] sm:py-24">
      {/* Subtle geometric pattern overlay matching CtaBanner */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(290px,390px)] lg:gap-14">
          <div className="text-center lg:text-left">
            <ScrollReveal animation="zoom-in" duration={600}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-white backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                <span>Full Detailing Process</span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={120} duration={750}>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                What a Full Car Detail Can Include
              </h2>
              <p className="mt-3 text-balance text-3xl font-black uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
                Bring Your Vehicle Back to Showroom Condition
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={220} duration={750}>
              <p className="mx-auto mt-3 max-w-2xl text-pretty text-sm text-white/90 sm:mt-4 sm:text-base md:mx-0 md:text-lg">
                From a deep-cleaned interior to a decontaminated exterior, we tailor the right full detail to your vehicle. You get a clear recommendation and price before work begins.
              </p>
            </ScrollReveal>

            {/* Luxury Editorial Grid — Zero Generic AI Icons */}
            <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 overflow-hidden rounded-2xl border border-white/15 bg-[#090d16]/90 text-left shadow-2xl backdrop-blur-xl sm:grid-cols-2 lg:mx-0">
            {detailPhases.map((phase, idx) => (
              <div
                key={phase.step}
                className={`group relative p-5 sm:p-6 transition-colors duration-300 hover:bg-white/[0.04] ${
                  idx === 0
                    ? "border-b border-white/10 sm:border-r"
                    : idx === 1
                    ? "border-b border-white/10"
                    : idx === 2
                    ? "border-b border-white/10 sm:border-b-0 sm:border-r"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-sm font-bold tracking-widest text-[#38bdf8]">
                    {phase.step}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    {phase.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white sm:text-lg group-hover:text-white transition-colors">
                  {phase.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-300 sm:text-base">
                  {phase.description}
                </p>
              </div>
            ))}
            </div>

            <div className="mt-6 flex flex-col items-center justify-center gap-1 lg:items-start">
              <p className="text-sm font-bold tracking-wide text-white sm:text-base">
                Full Interior + Exterior Detail from $405+
              </p>
              <p className="text-xs text-white/85 sm:text-sm">
                Clear scope and upfront pricing before work begins. Final pricing depends on vehicle size and surface condition.
              </p>
            </div>

            <ScrollReveal animation="zoom-in" delay={320} duration={650}>
              <div className="mt-7">
                <a
                  href={BOOKING_URL}
                  className="group inline-flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-lg bg-[#0a0a0c] px-7 py-4 text-sm font-bold text-white shadow-2xl transition-all hover:-translate-y-0.5 hover:bg-neutral-900 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] active:scale-[0.98] sm:w-auto"
                >
                  <Calendar className="h-4 w-4 text-[#1277ff]" />
                  <span>Get My Detail Recommendation</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-left" delay={180} duration={850}>
            <div className="relative mx-auto w-full max-w-[390px] overflow-hidden rounded-2xl border border-white/15 bg-[#090d16] shadow-2xl shadow-black/50 lg:mx-0">
              <video
                autoPlay
                className="hidden aspect-[4/5] h-full w-full object-cover md:block"
                loop
                muted
                onLoadedMetadata={({ currentTarget }) => {
                  setAcceleratedPlaybackRate(currentTarget);
                }}
                playsInline
                poster="/images/autodetail/showroom-detail-poster.webp"
                preload="metadata"
                aria-hidden="true"
              >
                <source
                  media={DESKTOP_MEDIA_QUERY}
                  src="/videos/showroom-detail.mp4"
                  type="video/mp4"
                />
              </video>
              <MobileDeferredShowroomVideo />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06080e]/55 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between p-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">
                <span>CleanWorx Detail</span>
                <span className="rounded-full border border-white/25 bg-black/25 px-2 py-1">2.5×</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

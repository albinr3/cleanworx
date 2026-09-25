"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowLeftRight } from "lucide-react";

export interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeAlt?: string;
  afterAlt?: string;
  ariaLabel?: string;
  aspectRatio?: string;
  className?: string;
  fillContainer?: boolean;
}

export function BeforeAfterSlider({
  beforeImage = "/images/autodetail/ceramic-water-before.png",
  afterImage = "/images/autodetail/ceramic-water-after.png",
  beforeAlt = "Blue vehicle panel with water sitting on the surface before ceramic protection",
  afterAlt = "Blue vehicle panel with water beading after ceramic protection",
  ariaLabel = "Drag to compare surface before and after treatment",
  aspectRatio = "1 / 1",
  className = "",
  fillContainer = false,
}: BeforeAfterSliderProps = {}) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handlePosition = (val: string) => {
    sliderRef.current?.style.setProperty("--comparison-position", `${val}%`);
  };

  return (
    <figure className={`mx-auto w-full ${fillContainer ? "max-w-sm xl:flex xl:h-full xl:flex-col" : ""} ${className}`}>
      <div
        ref={sliderRef}
        className={`before-after-slider ${fillContainer ? "before-after-slider--fill xl:flex-1" : ""}`}
        style={{
          "--comparison-position": "50%",
          aspectRatio: fillContainer ? undefined : aspectRatio,
        } as React.CSSProperties}
      >
        <div className="before-after-slider__image">
          <Image
            src={afterImage}
            alt={afterAlt}
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="select-none object-cover object-center"
            priority
          />
        </div>
        <div className="before-after-slider__image before-after-slider__before">
          <Image
            src={beforeImage}
            alt={beforeAlt}
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="select-none object-cover object-center"
            priority
          />
        </div>
        <div aria-hidden="true" className="before-after-slider__divider">
          <span className="before-after-slider__handle">
            <ArrowLeftRight className="h-4 w-4" strokeWidth={2} />
          </span>
        </div>
        <input
          aria-label={ariaLabel}
          className="before-after-slider__range"
          defaultValue="50"
          max="100"
          min="0"
          onInput={(event) => handlePosition(event.currentTarget.value)}
          onChange={(event) => handlePosition(event.currentTarget.value)}
          type="range"
        />
      </div>
      <figcaption className="mt-3 grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-[10px] font-semibold uppercase tracking-[.14em] text-neutral-400">
        <span>Before</span>
        <span className="text-[#70b5ff]">Drag to compare</span>
        <span className="text-right">After</span>
      </figcaption>
    </figure>
  );
}

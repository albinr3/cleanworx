"use client";

import type { KeyboardEvent, ReactNode } from "react";

interface HorizontalScrollRegionProps {
  children: ReactNode;
  className: string;
  label: string;
}

export function HorizontalScrollRegion({ children, className, label }: HorizontalScrollRegionProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const region = event.currentTarget;
    if (region.scrollWidth <= region.clientWidth) return;

    const step = Math.max(80, region.clientWidth * 0.4);
    let left: number;

    switch (event.key) {
      case "ArrowRight":
        left = region.scrollLeft + step;
        break;
      case "ArrowLeft":
        left = region.scrollLeft - step;
        break;
      case "Home":
        left = 0;
        break;
      case "End":
        left = region.scrollWidth;
        break;
      default:
        return;
    }

    event.preventDefault();
    region.scrollTo({ left, behavior: "smooth" });
  };

  return (
    <div role="region" aria-label={label} tabIndex={0} onKeyDown={handleKeyDown} className={className}>
      {children}
    </div>
  );
}

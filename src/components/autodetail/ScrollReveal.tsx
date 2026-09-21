"use client";

import React, { useEffect, useRef, useState, useSyncExternalStore, ElementType } from "react";

export type AnimationType =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "zoom-out"
  | "blur-in"
  | "fade";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number; // milliseconds
  duration?: number; // milliseconds
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  className?: string;
  as?: ElementType;
  style?: React.CSSProperties;
}

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerSnapshot() {
  return false;
}

export function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 750,
  threshold = 0.15,
  rootMargin = "0px 0px -40px 0px",
  once = true,
  className = "",
  as: Component = "div",
  style = {},
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getServerSnapshot
  );

  useEffect(() => {
    if (prefersReducedMotion) return;

    const currentRef = ref.current;
    if (!currentRef) return;

    if (!("IntersectionObserver" in window)) {
      const frame = requestAnimationFrame(() => setIsVisible(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once, threshold, rootMargin, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <Component ref={ref} className={className} style={style}>
        {children}
      </Component>
    );
  }

  // Define initial and target styles based on animation type
  const getTransform = () => {
    if (isVisible) return "translate3d(0, 0, 0) scale(1)";
    switch (animation) {
      case "fade-up":
        return "translate3d(0, 42px, 0)";
      case "fade-down":
        return "translate3d(0, -42px, 0)";
      case "fade-left":
        return "translate3d(48px, 0, 0)";
      case "fade-right":
        return "translate3d(-48px, 0, 0)";
      case "zoom-in":
        return "scale(0.92) translate3d(0, 20px, 0)";
      case "zoom-out":
        return "scale(1.08)";
      case "blur-in":
        return "translate3d(0, 30px, 0)";
      case "fade":
      default:
        return "none";
    }
  };

  const getFilter = () => {
    if (animation === "blur-in") {
      return isVisible ? "blur(0px)" : "blur(12px)";
    }
    return undefined;
  };

  const dynamicStyle: React.CSSProperties = {
    ...style,
    opacity: isVisible ? 1 : 0,
    transform: getTransform(),
    filter: getFilter(),
    transitionProperty: "opacity, transform, filter",
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: isVisible ? "auto" : "opacity, transform, filter",
  };

  return (
    <Component ref={ref} className={className} style={dynamicStyle}>
      {children}
    </Component>
  );
}

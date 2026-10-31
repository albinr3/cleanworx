"use client";

import { useEffect, useRef } from "react";

type ServiceVideoProps = {
  src: string;
  poster: string;
  label: string;
};

export function ServiceVideo({ src, poster, label }: ServiceVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !reducedMotion.matches) {
        void video.play().catch(() => {});
      } else {
        video.pause();
      }
    }, { threshold: 0.35 });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className="aspect-[9/16] w-full bg-black object-contain"
      controls
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      aria-label={label}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support video playback.
    </video>
  );
}

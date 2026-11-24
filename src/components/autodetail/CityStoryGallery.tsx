"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ServiceVideo } from "@/components/autodetail/ServiceVideo";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { normalizeTerminology } from "@/lib/terminology";

type Photo = { image: string; imageAlt: string };

export function CityStoryGallery({ photos, video }: { photos: readonly Photo[]; video?: { src: string; poster: string; label: string } }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (activeIndex !== null && !dialog.open) dialog.showModal();
    if (activeIndex === null && dialog.open) dialog.close();
  }, [activeIndex]);

  function move(amount: number) {
    setActiveIndex((current) => current === null ? null : (current + amount + photos.length) % photos.length);
  }

  return (
    <>
      <div className={video ? "grid grid-cols-2 items-start gap-1" : ""}>
      <div className={video ? "grid gap-1" : "grid grid-cols-2 gap-1"}>
        {photos.map((photo, index) => (
          <button key={photo.image} type="button" onClick={() => setActiveIndex(index)} aria-label={`Enlarge image: ${normalizeTerminology(photo.imageAlt)}`} className="group/photo relative cursor-zoom-in overflow-hidden focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white">
            <Image src={photo.image} alt={normalizeTerminology(photo.imageAlt)} width={1024} height={768} sizes="(max-width: 1023px) 50vw, 17vw" className="aspect-[4/3] h-auto w-full object-cover transition-transform duration-300 group-hover/photo:scale-105" />
            <span aria-hidden="true" className="absolute right-2 top-2 rounded-full bg-black/70 p-2 text-white"><Maximize2 className="h-4 w-4" /></span>
          </button>
        ))}
      </div>
      {video && <ServiceVideo {...video} />}
      </div>
      <dialog ref={dialogRef} onClose={() => setActiveIndex(null)} onClick={(event) => { if (event.target === event.currentTarget) event.currentTarget.close(); }} onKeyDown={(event) => { if (event.key === "ArrowLeft") move(-1); if (event.key === "ArrowRight") move(1); }} aria-label="Enlarged case images" className="fixed inset-0 m-auto h-dvh max-h-none w-screen max-w-none bg-black/95 p-0 text-white backdrop:bg-black/90">
        {activeIndex !== null && (
          <div className="flex h-full flex-col items-center justify-center px-12 py-16 sm:px-20">
            <button type="button" onClick={() => dialogRef.current?.close()} aria-label="Close enlarged image" className="absolute right-4 top-4 rounded-full bg-white/10 p-3 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white"><X className="h-6 w-6" /></button>
            <button type="button" onClick={() => move(-1)} aria-label="Previous image" className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white sm:left-5"><ChevronLeft className="h-6 w-6" /></button>
            <Image src={photos[activeIndex].image} alt={normalizeTerminology(photos[activeIndex].imageAlt)} width={1800} height={1350} sizes="100vw" className="max-h-full w-auto max-w-full object-contain" />
            <button type="button" onClick={() => move(1)} aria-label="Next image" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white sm:right-5"><ChevronRight className="h-6 w-6" /></button>
            <span className="absolute bottom-5 text-sm text-neutral-300">{activeIndex + 1} / {photos.length}</span>
          </div>
        )}
      </dialog>
    </>
  );
}

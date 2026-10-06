"use client";

import { useEffect } from "react";
import { BOOKING_URL } from "@/data/autodetailData";

export default function Page() {
  useEffect(() => {
    window.location.replace(BOOKING_URL);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0a0a0c] p-6 text-center text-white">
      <div>
        <h1 className="text-2xl font-bold">Book with CleanWorx</h1>
        <p className="mt-3 text-neutral-300">Opening our booking page...</p>
        <a href={BOOKING_URL} className="mt-6 inline-block rounded-lg bg-[#1277ff] px-6 py-3 font-semibold text-white">
          Continue to booking
        </a>
      </div>
    </main>
  );
}

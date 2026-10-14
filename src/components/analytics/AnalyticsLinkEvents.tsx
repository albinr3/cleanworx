"use client";

import { useEffect } from "react";
import { trackAnalyticsEvent } from "@/lib/analytics";

const BOOKING_HOSTS = new Set(["cleanworx-llc.square.site", "book.squareup.com"]);

export function AnalyticsLinkEvents() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;

      const link = event.target.closest("a[href]");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href) return;

      if (href.startsWith("tel:")) {
        trackAnalyticsEvent("click_call");
      } else if (href.startsWith("mailto:")) {
        trackAnalyticsEvent("click_email");
      } else {
        try {
          const destination = new URL(href, window.location.href);
          if (destination.protocol === "https:" && BOOKING_HOSTS.has(destination.hostname)) {
            trackAnalyticsEvent("booking_click", { destination_host: destination.hostname });
          }
        } catch {
          // Ignore links that are not valid URLs.
        }
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}

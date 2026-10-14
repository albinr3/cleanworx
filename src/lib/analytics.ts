type AnalyticsEvent = "page_view" | "generate_lead" | "click_call" | "click_email" | "booking_click";

type AnalyticsWindow = Window & {
  gtag?: (command: "event", eventName: AnalyticsEvent, parameters: Record<string, string>) => void;
};

export function trackAnalyticsEvent(eventName: AnalyticsEvent, parameters: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  if (window.location.hostname !== "cleanworxnj.com" && window.location.hostname !== "www.cleanworxnj.com") return;

  const analyticsWindow = window as AnalyticsWindow;
  analyticsWindow.gtag?.("event", eventName, {
    page_path: window.location.pathname,
    ...parameters,
  });
}

import { BackToTop } from "@/components/autodetail/BackToTop";
import { Footer } from "@/components/autodetail/Footer";
import { Header } from "@/components/autodetail/Header";
import { MobileStickyCta } from "@/components/autodetail/MobileStickyCta";
import { ScrollProgressBar } from "@/components/autodetail/ScrollProgressBar";

export type ContactMode = "booking" | "call";

export function SiteShell({ children, hideOurWork = false, contactMode = "booking" }: { children: React.ReactNode; hideOurWork?: boolean; contactMode?: ContactMode }) {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white">
      <ScrollProgressBar />
      <Header hideOurWork={hideOurWork} contactMode={contactMode} />
      <main className="overflow-x-clip">{children}</main>
      <Footer hideOurWork={hideOurWork} />
      <BackToTop />
      <MobileStickyCta contactMode={contactMode} />
    </div>
  );
}

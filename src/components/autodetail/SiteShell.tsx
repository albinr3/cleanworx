import { BackToTop } from "@/components/autodetail/BackToTop";
import { Footer } from "@/components/autodetail/Footer";
import { Header } from "@/components/autodetail/Header";
import { MobileStickyCta } from "@/components/autodetail/MobileStickyCta";
import { ScrollProgressBar } from "@/components/autodetail/ScrollProgressBar";

export function SiteShell({ children, hideOurWork = false }: { children: React.ReactNode; hideOurWork?: boolean }) {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white">
      <ScrollProgressBar />
      <Header hideOurWork={hideOurWork} />
      <main className="overflow-x-clip">{children}</main>
      <Footer hideOurWork={hideOurWork} />
      <BackToTop />
      <MobileStickyCta />
    </div>
  );
}

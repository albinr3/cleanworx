import { BackToTop } from "@/components/autodetail/BackToTop";
import { Footer } from "@/components/autodetail/Footer";
import { Header } from "@/components/autodetail/Header";
import { MobileStickyCta } from "@/components/autodetail/MobileStickyCta";
import { ScrollProgressBar } from "@/components/autodetail/ScrollProgressBar";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white">
      <ScrollProgressBar />
      <Header />
      <main className="overflow-x-clip">{children}</main>
      <Footer />
      <BackToTop />
      <MobileStickyCta />
    </div>
  );
}

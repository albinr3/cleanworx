"use client";

import { useState } from "react";
import { NoticeBar } from "@/components/autodetail/NoticeBar";
import { Header } from "@/components/autodetail/Header";
import { HeroSection } from "@/components/autodetail/HeroSection";
import { BrandPartners } from "@/components/autodetail/BrandPartners";
import { AboutSection } from "@/components/autodetail/AboutSection";
import { StatsCounters } from "@/components/autodetail/StatsCounters";
import { ServicesSection } from "@/components/autodetail/ServicesSection";
import { TestimonialsSection } from "@/components/autodetail/TestimonialsSection";
import { CockpitBanner } from "@/components/autodetail/CockpitBanner";
import { CtaBanner } from "@/components/autodetail/CtaBanner";
import { FaqSection } from "@/components/autodetail/FaqSection";
import { InstagramGallery } from "@/components/autodetail/InstagramGallery";
import { Footer } from "@/components/autodetail/Footer";
import { AppointmentModal } from "@/components/autodetail/AppointmentModal";
import { BackToTop } from "@/components/autodetail/BackToTop";
import { ScrollProgressBar } from "@/components/autodetail/ScrollProgressBar";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Ceramic Coating Protection");

  const handleOpenBooking = (service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <main className="relative min-h-screen bg-[#0a0a0c] text-white overflow-x-hidden selection:bg-[#1277ff] selection:text-white">
      {/* Dynamic Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Top Notice Bar */}
      <NoticeBar onOpenBooking={() => handleOpenBooking("Ceramic Coating Protection")} />

      {/* Sticky Main Navigation */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      {/* Hero Section with Looping Detailing Video */}
      <HeroSection onOpenBooking={() => handleOpenBooking()} />

      {/* Partner Brand Logos Marquee */}
      <BrandPartners />

      {/* About Us Showcase with Dual Staggered Imagery */}
      <AboutSection onOpenBooking={() => handleOpenBooking()} />

      {/* Performance Metrics Counters */}
      <StatsCounters />

      {/* 6 Premium Detailing Services */}
      <ServicesSection onSelectService={(s) => handleOpenBooking(s)} />

      {/* Testimonials / Reviews Section matching Homepage 2 */}
      <TestimonialsSection />

      {/* Parallax Cockpit Interior Break */}
      <CockpitBanner onOpenBooking={() => handleOpenBooking("Interior Deep Cleaning")} />

      {/* Blue Call-to-Action Banner */}
      <CtaBanner onOpenBooking={() => handleOpenBooking()} />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Instagram Gallery Feed */}
      <InstagramGallery />

      {/* Comprehensive Footer */}
      <Footer />

      {/* Interactive Booking Modal Dialog */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        defaultService={selectedService}
      />

      {/* Smooth Scroll to Top */}
      <BackToTop />
    </main>
  );
}

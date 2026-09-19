import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AutoDetail — Luxury Car Detailing & Restoration",
  description: "Restoring lasting shine, inside and out. Professional auto detailing, multi-stage paint correction, 9H ceramic coating, and luxury interior deep cleaning.",
  icons: {
    icon: "/images/autodetail/logo-white.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakartaSans.variable} dark scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full bg-[#0a0a0c] text-neutral-200 font-sans selection:bg-[#1277ff] selection:text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}

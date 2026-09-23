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
  title: "CleanWorx — Professional Cleaning Services",
  description: "Professional cleaning services focused on quality, care, and dependable results.",
  icons: {
    icon: "/images/cleanworx-logo.webp",
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

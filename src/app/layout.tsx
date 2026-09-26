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
  metadataBase: new URL("https://www.cleanworxnj.com"),
  title: {
    default: "CleanWorx Auto Detailing & Ceramic Coating | Basking Ridge, NJ",
    template: "%s | CleanWorx",
  },
  description: "CleanWorx provides professional auto detailing in Basking Ridge, NJ, including certified ceramic coating, paint correction, interior & exterior detailing.",
  keywords: [
    "auto detailing Basking Ridge NJ",
    "ceramic coating Basking Ridge NJ",
    "paint correction Somerset County",
    "mobile auto detailing NJ",
    "interior car detailing",
    "exterior car detailing hand wash",
    "System X ceramic coating",
    "CleanWorx NJ"
  ],
  alternates: {
    canonical: "https://www.cleanworxnj.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  applicationName: "CleanWorx Auto Detailing & Ceramic Coating",
  authors: [{ name: "CleanWorx Auto Detailing & Ceramic Coating", url: "https://www.cleanworxnj.com" }],
  creator: "CleanWorx Auto Detailing & Ceramic Coating",
  publisher: "CleanWorx Auto Detailing & Ceramic Coating",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.cleanworxnj.com",
    siteName: "CleanWorx Auto Detailing & Ceramic Coating",
    title: "CleanWorx Auto Detailing & Ceramic Coating | Basking Ridge, NJ",
    description: "Professional auto detailing and ceramic coating in Basking Ridge, NJ. Studio and mobile detailing appointments.",
    images: [
      {
        url: "/images/cleanworx-logo.webp",
        width: 1200,
        height: 630,
        alt: "CleanWorx Auto Detailing & Ceramic Coating",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CleanWorx Auto Detailing & Ceramic Coating | Basking Ridge, NJ",
    description: "Professional auto detailing and ceramic coating in Basking Ridge, NJ.",
    images: ["/images/cleanworx-logo.webp"],
  },
  icons: {
    icon: "/images/cleanworx-logo.webp",
    apple: "/images/cleanworx-logo.webp",
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
      data-scroll-behavior="smooth"
      className={`${outfit.variable} ${plusJakartaSans.variable} dark scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full bg-[#0a0a0c] text-neutral-200 font-sans selection:bg-[#1277ff] selection:text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { site } from "@/lib/site";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Georgetown TX realtor",
    "Williamson County real estate",
    "Forrest Hyde",
    "316 Realty Group",
    "Texas realtor",
    "Georgetown homes",
    "Round Rock realtor",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: `${site.name} — ${site.brokerage}`,
    title: site.title,
    description: site.description,
    images: [
      {
        url: "/logo-316.png",
        width: 316,
        height: 120,
        alt: "316 Realty Group logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: site.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSans.variable} ${sourceSerif.variable} font-sans antialiased`}
      >
        <Header />
        <main className="pb-20 sm:pb-0">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}

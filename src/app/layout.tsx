import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site-data";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Willow Grove | Senior Care in Bangkok", template: "%s | Willow Grove" },
  description: siteConfig.description,
  openGraph: { title: "Willow Grove", description: siteConfig.description, type: "website", locale: "en_US", siteName: "Willow Grove" },
  twitter: { card: "summary", title: "Willow Grove", description: siteConfig.description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = [
    { "@context": "https://schema.org", "@type": "Organization", name: "Willow Grove", slogan: siteConfig.tagline, areaServed: "Bangkok, Thailand", url: siteConfig.url },
    { "@context": "https://schema.org", "@type": "WebSite", name: "Willow Grove", url: siteConfig.url, description: siteConfig.description },
  ];
  return (
    <html lang="en" className={manrope.variable} data-scroll-behavior="smooth">
      <body className="font-sans antialiased">
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}

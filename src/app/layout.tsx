import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Willow Grove | Senior Care in Bangkok", template: "%s | Willow Grove" },
  description: siteConfig.description,
  openGraph: {
    title: "Willow Grove",
    description: siteConfig.description,
    type: "website",
    locale: "en_US",
    siteName: "Willow Grove",
  },
  twitter: { card: "summary", title: "Willow Grove", description: siteConfig.description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Willow Grove",
      slogan: siteConfig.tagline,
      areaServed: "Bangkok, Thailand",
      url: siteConfig.url,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Willow Grove",
      url: siteConfig.url,
      description: siteConfig.description,
    },
  ];

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="antialiased">
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}

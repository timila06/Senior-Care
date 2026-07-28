import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/services", "/contact"].map((route) => ({ url: `${siteConfig.url}${route}`, lastModified: new Date(), changeFrequency: "monthly", priority: route === "" ? 1 : 0.8 }));
}

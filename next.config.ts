import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/Senior-Care" : "";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : "standalone",
  distDir: isGitHubPages ? ".next-pages" : ".next",
  basePath,
  trailingSlash: isGitHubPages,
  images: {
    unoptimized: isGitHubPages,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

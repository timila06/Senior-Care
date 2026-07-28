import Link from "next/link";
import { navigation, siteConfig } from "@/lib/site-data";
import { SiteLogo } from "./site-logo";

export function SiteFooter() {
  return (
    <footer className="border-t bg-card">
      <div className="container-shell grid gap-12 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div><SiteLogo /><p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">{siteConfig.description}</p></div>
        <div><p className="text-sm font-extrabold">Explore</p><div className="mt-4 grid gap-3">{navigation.map((item) => <Link className="text-sm text-muted-foreground hover:text-foreground" key={item.href} href={item.href}>{item.label}</Link>)}<Link className="text-sm text-muted-foreground hover:text-foreground" href="/contact">Contact</Link></div></div>
        <div><p className="text-sm font-extrabold">Location</p><p className="mt-4 text-sm text-muted-foreground">{siteConfig.location}</p><p className="mt-3 text-xs leading-5 text-muted-foreground">Official contact details are pending for this website mockup.</p></div>
      </div>
      <div className="border-t"><div className="container-shell flex flex-col gap-2 py-5 text-xs text-muted-foreground sm:flex-row sm:justify-between"><p>© {new Date().getFullYear()} Willow Grove</p><p>Concept website. Mockup images do not show Willow Grove residents or premises.</p></div></div>
    </footer>
  );
}

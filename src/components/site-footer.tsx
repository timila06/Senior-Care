import Link from "next/link";
import { SiteLogo } from "./site-logo";

export function SiteFooter() {
  return (
    <footer className="bg-surface-highest">
      <div className="container-shell grid gap-12 py-20 md:grid-cols-3">
        <div>
          <SiteLogo />
          <p className="mt-6 max-w-sm text-base leading-7 text-muted-foreground">
            Residential support, daily care, and thoughtful wellbeing for older adults in Bangkok.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-sans text-sm font-bold uppercase tracking-wider">Quick Links</h2>
          <Link className="text-base text-muted-foreground hover:text-primary hover:underline" href="/services">Care &amp; Services</Link>
          <Link className="text-base text-muted-foreground hover:text-primary hover:underline" href="/about">Residential Life</Link>
          <Link className="text-base text-muted-foreground hover:text-primary hover:underline" href="/contact">Contact Us</Link>
          <Link className="text-base text-muted-foreground hover:text-primary hover:underline" href="/contact#faq">Common Questions</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-sans text-sm font-bold uppercase tracking-wider">Location</h2>
          <p className="text-base text-muted-foreground">Bangkok, Thailand</p>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground">
            Official address, phone, email, and LINE details are pending.
          </p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-shell flex flex-col gap-2 py-6 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <p>Copyright {new Date().getFullYear()} Willow Grove</p>
          <p>Concept website. Images do not show actual residents or premises.</p>
        </div>
      </div>
    </footer>
  );
}

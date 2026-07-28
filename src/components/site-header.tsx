"use client";

import { List } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiteLogo } from "./site-logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "Residential Life" },
  { href: "/services#wellness", label: "Wellness" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background shadow-sm">
      <nav className="container-shell flex h-20 items-center justify-between" aria-label="Primary navigation">
        <SiteLogo />
        <div className="hidden items-center gap-8 md:flex">
          {links.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href.split("#")[0]);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-sm text-base font-semibold text-muted-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring ${active ? "border-b-2 border-primary pb-1 text-primary" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/contact" className="rounded-xl border border-primary px-5 py-2.5 text-base font-semibold text-primary hover:bg-surface-low">Contact Us</Link>
          <Link href="/contact#form" className="rounded-xl bg-primary px-5 py-2.5 text-base font-semibold text-white hover:scale-[0.98]">Schedule a Tour</Link>
        </div>
        <details className="group relative md:hidden">
          <summary
            className="grid size-11 cursor-pointer list-none place-items-center rounded-xl border bg-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            aria-label="Open navigation"
          >
            <List size={23} weight="bold" />
          </summary>
          <nav className="absolute right-0 top-14 w-72 rounded-xl border bg-card p-3 shadow-xl" aria-label="Mobile navigation">
            {links.map((item) => (
              <Link className="block rounded-lg px-4 py-3 font-semibold hover:bg-muted" key={item.href} href={item.href}>{item.label}</Link>
            ))}
            <Link href="/contact" className="mt-2 block rounded-lg px-4 py-3 font-semibold hover:bg-muted">Contact Us</Link>
            <Link href="/contact#form" className="mt-2 block rounded-xl bg-primary px-4 py-3 text-center font-semibold text-white">Schedule a Tour</Link>
          </nav>
        </details>
      </nav>
    </header>
  );
}

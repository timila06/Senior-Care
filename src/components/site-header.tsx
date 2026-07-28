import { List } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { navigation } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { SiteLogo } from "./site-logo";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="container-shell flex h-[4.5rem] items-center justify-between">
        <SiteLogo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navigation.map((item) => <Link className="rounded-md text-base font-semibold text-muted-foreground hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring" key={item.href} href={item.href}>{item.label}</Link>)}
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "h-11 px-5")}>Schedule a Visit</Link>
        </nav>
        <details className="group relative md:hidden">
          <summary className="grid size-11 cursor-pointer list-none place-items-center rounded-lg border bg-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring" aria-label="Open navigation"><List size={22} weight="bold" /></summary>
          <nav className="absolute right-0 top-14 w-64 rounded-xl border bg-card p-3 shadow-xl" aria-label="Mobile navigation">
            {navigation.map((item) => <Link className="block rounded-lg px-4 py-3 font-semibold hover:bg-muted" key={item.href} href={item.href}>{item.label}</Link>)}
            <Link href="/contact" className={cn(buttonVariants(), "mt-2 h-11 w-full")}>Schedule a Visit</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

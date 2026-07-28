import Link from "next/link";

export function SiteLogo() {
  return (
    <Link href="/" className="flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring" aria-label="Willow Grove home">
      <span className="grid size-10 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">W</span>
      <span><span className="block text-base font-extrabold leading-none">Willow Grove</span><span className="mt-1 block text-[.62rem] font-bold uppercase tracking-[.16em] text-muted-foreground">Living With Dignity</span></span>
    </Link>
  );
}

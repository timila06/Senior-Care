import { Leaf } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export function SiteLogo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 rounded-md text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      aria-label="Willow Grove home"
    >
      <Leaf size={24} weight="fill" aria-hidden="true" />
      <span className="font-display text-2xl font-semibold">Willow Grove</span>
    </Link>
  );
}

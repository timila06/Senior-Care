import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { services } from "@/lib/site-data";

export function ServiceOverview() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {services.map((service, index) => {
        const Icon = service.icon;
        return <article key={service.slug} className={`surface-panel p-7 sm:p-9 ${index === 0 ? "lg:col-span-2 lg:grid lg:grid-cols-[.65fr_1.35fr] lg:items-center lg:gap-12" : ""}`}>
          <div className="mb-8 grid size-12 place-items-center rounded-xl bg-secondary text-foreground lg:mb-0"><Icon size={25} weight="duotone" /></div>
          <div><p className="text-sm font-bold text-sage">{String(index + 1).padStart(2, "0")}</p><h3 className="mt-4 text-2xl font-bold tracking-[-.035em] sm:text-3xl">{service.title}</h3><p className="mt-4 max-w-xl leading-7 text-muted-foreground">{service.short}</p><Link className="text-link mt-7" href={`/services#${service.slug}`}>Explore this care <ArrowRight size={17} weight="bold" /></Link></div>
        </article>;
      })}
    </div>
  );
}

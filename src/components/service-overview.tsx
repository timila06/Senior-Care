import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { services } from "@/lib/site-data";

export function ServiceOverview() {
  return (
    <div className="grid gap-4 lg:grid-cols-12">
      {services.map((service, index) => {
        const Icon = service.icon;
        const span = index === 0 || index === 3 ? "lg:col-span-7" : "lg:col-span-5";
        const tone = index === 0 ? "surface-panel-secondary" : index === 2 ? "surface-panel-muted" : "";
        return <article key={service.slug} className={`surface-panel p-7 sm:p-9 lg:min-h-80 ${span} ${tone}`}>
          <div className="grid size-12 place-items-center rounded-xl bg-background text-foreground"><Icon size={25} weight="duotone" /></div>
          <div><h3 className="mt-8 max-w-lg text-2xl font-bold tracking-[-.035em] sm:text-3xl">{service.title}</h3><p className="mt-4 max-w-xl leading-7 text-muted-foreground">{service.short}</p><Link className="text-link mt-7" href={`/services#${service.slug}`}>Explore this care <ArrowRight size={17} weight="bold" /></Link></div>
        </article>;
      })}
    </div>
  );
}

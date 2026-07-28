import type { Metadata } from "next";
import { PageBanner } from "@/components/page-banner";
import { services } from "@/lib/site-data";

export const metadata: Metadata = { title: "Services", description: "Explore Willow Grove's four senior care services in Bangkok." };

export default function ServicesPage() {
  return <main id="main-content"><PageBanner eyebrow="Our services" title="Focused care, thoughtfully connected." description="Our four services work together to support everyday comfort, health routines, and an engaging quality of life." />
    <section className="section-pad"><div className="container-shell grid gap-5">{services.map((service) => { const Icon = service.icon; return <article id={service.slug} key={service.slug} className="surface-panel scroll-mt-28 p-7 sm:p-10 lg:grid lg:grid-cols-[.55fr_1.45fr] lg:gap-14"><div><div className="grid size-14 place-items-center rounded-xl bg-secondary"><Icon size={28} weight="duotone" /></div></div><div className="mt-8 lg:mt-0"><h2 className="max-w-xl text-3xl font-bold tracking-[-.045em] sm:text-4xl">{service.title}</h2><p className="body-large mt-6">{service.description}</p><p className="mt-6 max-w-2xl leading-7 text-muted-foreground">{service.short}</p></div></article>; })}</div></section>
  </main>;
}

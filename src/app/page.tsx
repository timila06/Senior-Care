import {
  ArrowRight,
  ClockCountdown,
  FlowerLotus,
  Heartbeat,
  HouseLine,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { StitchImage } from "@/components/stitch-image";
import { TreeDivider } from "@/components/tree-divider";
import { services } from "@/lib/site-data";
import { stitchAssets } from "@/lib/stitch-assets";

const serviceIcons = [HouseLine, ClockCountdown, Heartbeat, FlowerLotus];

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="relative min-h-[46rem] overflow-hidden">
        <StitchImage
          src={stitchAssets.homeHero}
          alt="Concept image of a caregiver providing thoughtful daily support in a homelike room"
          className="absolute inset-0 size-full rounded-none"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
        <div className="container-shell relative flex min-h-[46rem] items-center py-20">
          <div className="max-w-2xl">
            <p className="inline-flex rounded-full bg-secondary px-4 py-2 text-sm font-bold uppercase tracking-[0.14em] text-secondary-foreground">
              Welcome Home
            </p>
            <h1 className="headline-xl mt-7 max-w-[12ch] text-[clamp(3.5rem,6vw,5rem)]">Care that feels like home.</h1>
            <p className="body-lg mt-7 max-w-xl">
              Residential support, daily care, and thoughtful wellbeing for older adults in Bangkok.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact#form" className="min-h-14 rounded-xl bg-primary px-8 py-3.5 font-bold text-white hover:scale-[0.98]">Schedule a Visit</Link>
              <Link href="/services" className="min-h-14 rounded-xl border-2 border-primary px-8 py-3.5 font-bold text-primary hover:bg-primary hover:text-white">Explore Our Care</Link>
            </div>
          </div>
        </div>
      </section>

      <TreeDivider />

      <section className="pb-20">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-sage">Thoughtful Support</p>
            <h2 className="headline-lg mt-4">Care for the whole person</h2>
            <p className="body-lg mt-5">
              Four focused services come together around comfort, continuity, and meaningful days.
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <article key={service.slug} className="group rounded-xl border bg-white p-7 custom-shadow">
                  <div className="grid size-14 place-items-center rounded-xl bg-secondary text-sage">
                    <Icon size={29} weight="duotone" />
                  </div>
                  <h3 className="mt-7 text-2xl font-semibold">{service.title}</h3>
                  <p className="mt-4 text-base leading-7 text-muted-foreground">{service.short}</p>
                  <Link className="mt-6 inline-flex items-center gap-2 font-bold text-primary hover:underline" href={`/services#${service.slug}`}>
                    Learn more <ArrowRight size={16} weight="bold" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface-low py-20">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-2">
          <StitchImage
            src={stitchAssets.homeLounge}
            alt="Concept image of a caregiver monitoring an older adult's blood pressure"
            className="h-[34rem] rounded-xl custom-shadow"
          />
          <div className="lg:pl-8">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-sage">Living With Dignity</p>
            <h2 className="headline-lg mt-5">A place to feel settled, known, and supported.</h2>
            <p className="body-lg mt-6">
              Care begins with knowing the person, not just the routine. Familiar rhythms, welcoming shared spaces, and quiet moments all have a place.
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our approach respects personal choice while keeping reassuring support close by and families part of the conversation.
            </p>
            <Link className="mt-8 inline-flex items-center gap-2 font-bold text-primary hover:underline" href="/about">
              Explore residential life <ArrowRight size={17} weight="bold" />
            </Link>
          </div>
        </div>
      </section>

      <section className="container-shell py-20">
        <div className="rounded-[2rem] bg-surface-high px-6 py-16 text-center sm:px-12">
          <p className="mx-auto max-w-4xl font-display text-3xl font-semibold leading-snug text-primary sm:text-4xl">
            Every day should offer comfort, connection, and the freedom to move at your own pace.
          </p>
          <p className="mt-6 font-bold uppercase tracking-[0.14em] text-sage">The Willow Grove philosophy</p>
        </div>
      </section>

      <CtaBand contained />
    </main>
  );
}

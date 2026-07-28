import type { Metadata } from "next";
import { ArrowRight, CheckCircle, WheelchairMotion } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { StitchImage } from "@/components/stitch-image";
import { TreeDivider } from "@/components/tree-divider";
import { stitchAssets } from "@/lib/stitch-assets";

export const metadata: Metadata = {
  title: "Residential Life",
  description: "Discover Willow Grove's calm, dignity-led residential environment in Bangkok.",
};

const gallery = [
  [stitchAssets.garden, "Concept image of a landscaped garden"],
  [stitchAssets.sunroom, "Concept image of a bright garden room"],
  [stitchAssets.artStudio, "Concept image of a welcoming creative studio"],
  [stitchAssets.wellnessSuite, "Concept image of a senior-friendly wellness room"],
] as const;

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="relative min-h-[40rem] overflow-hidden">
        <StitchImage
          src={stitchAssets.residenceHero}
          alt="Concept rendering of a low-rise Willow Grove residence with Thai-style roofs and garden courtyards"
          className="absolute inset-0 size-full rounded-none"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/55 to-transparent" />
        <div className="container-shell relative flex min-h-[40rem] items-center py-20">
          <div className="max-w-2xl text-white">
            <p className="inline-flex rounded-full bg-secondary px-4 py-2 text-sm font-bold uppercase tracking-[0.14em] text-secondary-foreground">Residential Life</p>
            <h1 className="headline-xl mt-7">Designed for comfort. Created for life.</h1>
            <p className="mt-7 max-w-xl text-xl leading-8 text-white/85">
              A calm, homelike environment in Bangkok with welcoming spaces, landscaped courtyards, and support close by.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-sage">A supportive setting</p>
            <h2 className="headline-lg mt-5">A home shaped around ease and dignity.</h2>
            <p className="body-lg mt-6">
              Thoughtful layouts, calm shared spaces, and a steady daily rhythm help older adults feel secure without losing their sense of choice.
            </p>
            <ul className="mt-8 grid gap-4">
              {["Comfortable spaces for rest and connection", "Support shaped around personal routines", "Room for family visits and quiet moments"].map((item) => (
                <li className="flex items-center gap-3 font-semibold" key={item}>
                  <CheckCircle className="text-sage" size={23} weight="fill" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <StitchImage src={stitchAssets.corridor} alt="Concept image of a wide, accessible residential corridor" className="h-[25rem] rounded-xl custom-shadow" />
        </div>
      </section>

      <TreeDivider />

      <section className="pb-20">
        <div className="container-shell">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-sage">Living with ease</p>
            <h2 className="headline-lg mt-4">Spaces for every part of the day</h2>
          </div>
          <div className="grid auto-rows-[18rem] gap-5 lg:grid-cols-12">
            <article className="relative overflow-hidden rounded-xl lg:col-span-7 lg:row-span-2">
              <StitchImage src={stitchAssets.suite} alt="Concept image of a light-filled private suite" className="absolute inset-0 size-full rounded-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-0 p-8 text-white">
                <h3 className="text-3xl font-semibold">Private suites</h3>
                <p className="mt-3 max-w-lg text-white/80">Personal space for familiar belongings, quiet routines, and restful moments.</p>
              </div>
            </article>
            <article className="rounded-xl bg-secondary p-8 lg:col-span-5">
              <WheelchairMotion className="text-sage" size={42} weight="duotone" />
              <h3 className="mt-6 text-3xl font-semibold">Ease of movement</h3>
              <p className="mt-4 leading-7 text-muted-foreground">Clear pathways and connected spaces support comfortable movement throughout the day.</p>
            </article>
            <article className="relative overflow-hidden rounded-xl lg:col-span-5">
              <StitchImage src={stitchAssets.social} alt="Concept image of a warm shared lounge" className="absolute inset-0 size-full rounded-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/75 to-transparent" />
              <h3 className="absolute bottom-6 left-6 text-2xl font-semibold text-white">Shared living spaces</h3>
            </article>
            <article className="relative overflow-hidden rounded-xl lg:col-span-12">
              <StitchImage src={stitchAssets.dining} alt="Concept image of a welcoming shared dining room" className="absolute inset-0 size-full rounded-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent" />
              <div className="absolute inset-y-0 left-0 flex max-w-xl flex-col justify-center p-8 text-white">
                <h3 className="text-3xl font-semibold">Dining and conversation</h3>
                <p className="mt-3 text-white/80">Shared meals create an easy rhythm for connection and companionship.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-surface-high py-20">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-sage">Life at Willow Grove</p>
              <h2 className="headline-lg mt-4">Space to enjoy each day</h2>
            </div>
            <Link href="/services#wellness" className="inline-flex items-center gap-2 font-bold hover:underline">Explore wellness <ArrowRight size={17} weight="bold" /></Link>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {gallery.map(([src, alt], index) => (
              <StitchImage key={src} src={src} alt={alt} className={`rounded-xl ${index % 2 ? "h-72 lg:mt-10" : "h-72"}`} sizes="(max-width: 1024px) 50vw, 25vw" />
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Come experience residential life" text="Schedule a private visit and take your time exploring the spaces, surroundings, and approach to daily support." />
    </main>
  );
}

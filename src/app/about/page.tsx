import type { Metadata } from "next";
import { MockupImage } from "@/components/mockup-image";
import { PageBanner } from "@/components/page-banner";

export const metadata: Metadata = { title: "About", description: "Discover Willow Grove's dignity-led approach to senior care in Bangkok." };

const principles = [
  ["See the person", "Preferences, stories, and familiar routines shape how support is offered."],
  ["Support independence", "Help is present when needed while personal choice remains central."],
  ["Keep families close", "Open, thoughtful communication helps families feel connected and reassured."],
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageBanner eyebrow="About Willow Grove" title="A more personal way to feel supported." description="Willow Grove is being created as a calm, welcoming senior care home in Bangkok where dignity guides the small decisions as much as the big ones." />
      <section className="section-pad">
        <div className="container-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <h2 className="section-title">Our mission</h2>
            <p className="body-large mt-7">To make daily life feel safe, meaningful, and familiar for older adults, while giving families the reassurance of attentive support.</p>
            <p className="mt-7 max-w-xl leading-8 text-muted-foreground">We believe care is strongest when it protects a person&apos;s sense of self. That means listening closely, respecting everyday preferences, and creating space for both companionship and privacy.</p>
          </div>
          <MockupImage src="/images/willow-grove-garden-mockup.webp" alt="Mockup of a green, homelike residence with shaded garden paths" className="aspect-[5/4]" />
        </div>
      </section>
      <section className="section-pad border-y bg-secondary">
        <div className="container-shell">
          <h2 className="section-title">Dignity in practice.</h2>
          <div className="mt-14 grid gap-4 lg:auto-rows-fr lg:grid-cols-12">
            {principles.map(([title, text], index) => (
              <article className={`surface-panel p-8 sm:p-10 ${index === 0 ? "surface-panel-primary lg:col-span-7 lg:row-span-2 lg:min-h-[30rem]" : "lg:col-span-5"} ${index === 1 ? "surface-panel-muted" : ""}`} key={title}>
                <h3 className="text-2xl font-bold sm:text-3xl">{title}</h3>
                <p className={`mt-5 max-w-lg leading-8 ${index === 0 ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <p className="eyebrow">For families</p>
          <div>
            <h2 className="section-title">Reassurance without losing the feeling of home.</h2>
            <p className="body-large mt-7">Choosing senior care is deeply personal. We want visits, conversations, and daily updates to feel clear and respectful, so families can make decisions at their own pace.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

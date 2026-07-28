import type { Metadata } from "next";
import {
  CheckCircle,
  ClockCountdown,
  FlowerLotus,
  Heartbeat,
  HouseLine,
  MoonStars,
  Sun,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import { CtaBand } from "@/components/cta-band";
import { StitchImage } from "@/components/stitch-image";
import { TreeDivider } from "@/components/tree-divider";
import { stitchAssets } from "@/lib/stitch-assets";

export const metadata: Metadata = {
  title: "Care & Services",
  description: "Explore Willow Grove's four senior care services in Bangkok.",
};

export default function ServicesPage() {
  return (
    <main id="main-content">
      <section className="container-shell py-20 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-sage">Care &amp; Services</p>
        <h1 className="headline-xl mx-auto mt-5 max-w-4xl">Support that grows with each person.</h1>
        <p className="body-lg mx-auto mt-6 max-w-3xl">
          Four connected services support everyday comfort, health routines, and a meaningful quality of life.
        </p>
      </section>

      <section id="residential-assisted-living" className="container-shell scroll-mt-28 pb-20">
        <div className="grid auto-rows-[20rem] gap-5 lg:grid-cols-12">
          <article className="relative overflow-hidden rounded-xl lg:col-span-8 lg:row-span-2">
            <StitchImage src={stitchAssets.serviceSuite} alt="Concept image of a calm assisted living suite" className="absolute inset-0 size-full rounded-none" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/15 to-transparent" />
            <div className="absolute bottom-0 max-w-2xl p-8 text-white sm:p-10">
              <HouseLine size={38} weight="duotone" />
              <h2 className="mt-5 text-4xl font-semibold">Residential and Assisted Living</h2>
              <p className="mt-4 text-lg text-white/80">A welcoming residential setting with assistance adapted to personal routines, preferences, and changing needs.</p>
            </div>
          </article>
          <article className="rounded-xl bg-secondary p-8 lg:col-span-4">
            <CheckCircle className="text-sage" size={38} weight="fill" />
            <h3 className="mt-5 text-2xl font-semibold">Familiar daily rhythms</h3>
            <p className="mt-4 leading-7 text-muted-foreground">Support is shaped around how each person prefers to begin, move through, and settle into the day.</p>
          </article>
          <article className="rounded-xl bg-surface-high p-8 lg:col-span-4">
            <UsersThree className="text-sage" size={38} weight="duotone" />
            <h3 className="mt-5 text-2xl font-semibold">Room for connection</h3>
            <p className="mt-4 leading-7 text-muted-foreground">Shared spaces welcome conversation, family time, and quiet companionship.</p>
          </article>
        </div>
      </section>

      <TreeDivider />

      <section id="daily-care-support" className="container-shell scroll-mt-28 pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <StitchImage src={stitchAssets.careSupport} alt="Concept image of attentive daily care support" className="h-[34rem] rounded-xl custom-shadow" />
          <div className="lg:pl-8">
            <ClockCountdown className="text-sage" size={46} weight="duotone" />
            <h2 className="headline-lg mt-6">24/7 Daily Care Support</h2>
            <p className="body-lg mt-6">
              Reassuring support is available throughout the day and night for everyday activities, personal routines, and comfort.
            </p>
            <div className="mt-9 grid grid-cols-2 gap-4">
              {[
                [Sun, "Daytime routines"],
                [MoonStars, "Overnight reassurance"],
                [UsersThree, "Personal support"],
                [CheckCircle, "Consistent approach"],
              ].map(([Icon, label]) => (
                <div key={label as string} className="rounded-xl bg-surface-low p-5">
                  <Icon className="text-sage" size={27} weight="duotone" />
                  <p className="mt-3 font-bold">{label as string}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TreeDivider />

      <section id="health-monitoring" className="container-shell scroll-mt-28 pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Heartbeat className="text-sage" size={46} weight="duotone" />
            <h2 className="headline-lg mt-6">Medication and Health Monitoring</h2>
            <p className="body-lg mt-6">
              Structured medication reminders and routine health observations support continuity, with families kept part of the conversation.
            </p>
            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              <div className="border-l-4 border-sage pl-5">
                <h3 className="font-sans text-lg font-bold">Medication routines</h3>
                <p className="mt-2 text-base text-muted-foreground">Clear, consistent reminders shaped around an established plan.</p>
              </div>
              <div className="border-l-4 border-[#a48652] pl-5">
                <h3 className="font-sans text-lg font-bold">Routine observations</h3>
                <p className="mt-2 text-base text-muted-foreground">Attentive monitoring helps changes be noticed and communicated.</p>
              </div>
            </div>
          </div>
          <StitchImage src={stitchAssets.healthMonitoring} alt="Concept image of organized health monitoring in a warm residential setting" className="h-[34rem] rounded-xl custom-shadow" />
        </div>
      </section>

      <TreeDivider />

      <section id="wellness" className="container-shell scroll-mt-28 pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <FlowerLotus className="mx-auto text-sage" size={46} weight="duotone" />
          <h2 className="headline-lg mt-6">Wellness and Recreational Activities</h2>
          <p className="body-lg mt-5">Meaningful days with gentle movement, creativity, personal interests, and connection.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            [stitchAssets.yoga, "Gentle movement", "Comfortable activities encourage mobility and confidence."],
            [stitchAssets.artActivity, "Creative expression", "Hands-on activities make room for curiosity and enjoyment."],
            [stitchAssets.bookClub, "Social connection", "Shared interests create easy opportunities for conversation."],
          ].map(([src, title, text]) => (
            <article key={title} className="overflow-hidden rounded-xl border bg-white">
              <StitchImage src={src} alt={`Concept image of ${title.toLowerCase()}`} className="h-52 rounded-none" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="p-7">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-3 text-base leading-7 text-muted-foreground">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand contained />
    </main>
  );
}

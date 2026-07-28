import { ArrowRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { MockupImage } from "@/components/mockup-image";
import { ServiceOverview } from "@/components/service-overview";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="section-pad overflow-hidden">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <p className="eyebrow">Senior care in Bangkok</p>
            <h1 className="display-title mt-7">Care that feels like home.</h1>
            <p className="body-large mt-8">Residential support, daily care, and thoughtful wellbeing for older adults in Bangkok.</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }))}>Schedule a Visit <ArrowRight size={17} weight="bold" /></Link>
              <Link href="/services" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>Explore Our Care</Link>
            </div>
          </div>
          <MockupImage src="/images/willow-grove-hero-mockup.webp" alt="Mockup of an older Thai woman in conversation with a caregiver in a warm lounge" className="aspect-[4/5]" priority />
        </div>
      </section>

      <section className="section-pad border-y bg-secondary">
        <div className="container-shell grid gap-6 lg:grid-cols-[.65fr_1.35fr] lg:items-end">
          <p className="text-base font-bold text-sage">Living With Dignity.</p>
          <h2 className="section-title max-w-[19ch]">Care begins with knowing the person, not just the routine.</h2>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <h2 className="section-title">Support for everyday living.</h2>
          <p className="body-large mt-6">Four focused services, brought together around comfort, continuity, and meaningful days.</p>
          <div className="mt-14"><ServiceOverview /></div>
        </div>
      </section>

      <section className="section-pad bg-secondary">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <MockupImage src="/images/willow-grove-garden-mockup.webp" alt="Mockup of a calm garden residence with shaded pathways in Bangkok" className="aspect-[5/4]" />
          <div>
            <p className="eyebrow">A homelike setting</p>
            <h2 className="section-title mt-6">Room to settle in and feel at ease.</h2>
            <p className="body-large mt-7">Familiar rhythms, welcoming shared spaces, and quiet moments all have a place. Our approach respects personal choice while keeping reassuring support close by.</p>
            <ul className="mt-8 grid gap-4 text-sm font-semibold">
              <li className="flex gap-3"><CheckCircle className="mt-0.5 shrink-0 text-sage" size={21} weight="fill" />Support shaped around individual routines</li>
              <li className="flex gap-3"><CheckCircle className="mt-0.5 shrink-0 text-sage" size={21} weight="fill" />Thoughtful connection with family</li>
              <li className="flex gap-3"><CheckCircle className="mt-0.5 shrink-0 text-sage" size={21} weight="fill" />Space for rest, conversation, and activity</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <h2 className="section-title">Days with purpose, at a comfortable pace.</h2>
            <p className="body-large mt-7">Gentle movement, creative activities, shared meals, and conversation help each day feel engaging without being overwhelming.</p>
            <Link className="text-link mt-8" href="/about">Our care philosophy <ArrowRight size={17} weight="bold" /></Link>
          </div>
          <MockupImage src="/images/willow-grove-activities-mockup.webp" alt="Mockup of older adults enjoying a flower arranging activity together" className="aspect-[3/2]" />
        </div>
      </section>

      <section className="section-pad border-t">
        <div className="container-shell surface-panel surface-panel-primary grid gap-8 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <h2 className="max-w-2xl text-3xl font-bold tracking-[-.04em] sm:text-5xl">Come and see whether Willow Grove feels right for your family.</h2>
          <Link href="/contact" className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}>Schedule a Visit</Link>
        </div>
      </section>
    </main>
  );
}

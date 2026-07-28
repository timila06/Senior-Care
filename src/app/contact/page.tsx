import type { Metadata } from "next";
import {
  CaretDown,
  CheckCircle,
  EnvelopeSimple,
  MapPin,
  PhoneCall,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { InquiryForm } from "@/components/inquiry-form";
import { StitchImage } from "@/components/stitch-image";
import { TreeDivider } from "@/components/tree-divider";
import { stitchAssets } from "@/lib/stitch-assets";

export const metadata: Metadata = {
  title: "Contact & Tours",
  description: "Start a conversation or schedule a visit with Willow Grove in Bangkok.",
};

const faqs = [
  ["What types of support do you offer?", "Willow Grove focuses on residential and assisted living, 24/7 daily care support, medication and health monitoring, and wellness and recreational activities."],
  ["How do I schedule a visit?", "Complete the concept inquiry form and choose Schedule a Visit. Official booking details will be added before launch."],
  ["Where is Willow Grove located?", "Willow Grove is planned for Bangkok, Thailand. The official address is still pending."],
  ["Can I share private health information here?", "No. This mockup does not send or store inquiries, and sensitive medical information should not be entered."],
];

export default function ContactPage() {
  return (
    <main id="main-content">
      <section className="container-shell py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-sage">Contact &amp; Tours</p>
            <h1 className="headline-xl mt-5">Find your home at <span className="text-sage">Willow Grove.</span></h1>
            <p className="body-lg mt-6">
              Whether you are beginning your search or ready to visit, start with a calm, straightforward conversation.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="#form" className="min-h-14 rounded-xl bg-primary px-8 py-3.5 font-bold text-white">Schedule a Visit</Link>
              <Link href="#faq" className="min-h-14 rounded-xl border-2 border-sage px-8 py-3.5 font-bold text-sage hover:bg-secondary">Common Questions</Link>
            </div>
          </div>
          <StitchImage
            src={stitchAssets.residenceHero}
            alt="Concept rendering of the Willow Grove courtyard residence"
            className="h-[31rem] rounded-xl custom-shadow"
            priority
          />
        </div>
      </section>

      <TreeDivider />

      <section id="form" className="container-shell scroll-mt-28 pb-20">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <InquiryForm />
          </div>
          <aside className="flex flex-col gap-5">
            <div className="rounded-xl bg-secondary p-8">
              <PhoneCall className="text-sage" size={39} weight="duotone" />
              <h2 className="mt-5 text-2xl font-semibold">Call us</h2>
              <p className="mt-3 text-base leading-7 text-muted-foreground">An official phone number will be added before launch.</p>
              <p className="mt-5 font-bold text-primary">Contact details pending</p>
            </div>
            <div className="rounded-xl bg-surface-high p-8">
              <MapPin className="text-sage" size={39} weight="duotone" />
              <h2 className="mt-5 text-2xl font-semibold">Visit us</h2>
              <p className="mt-3 text-base leading-7 text-muted-foreground">Bangkok, Thailand</p>
              <p className="mt-5 font-bold text-primary">Official address pending</p>
            </div>
            <div className="rounded-xl border bg-white p-8">
              <EnvelopeSimple className="text-sage" size={39} weight="duotone" />
              <h2 className="mt-5 text-2xl font-semibold">Email us</h2>
              <p className="mt-3 text-base leading-7 text-muted-foreground">An official email address will be added before launch.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-surface-high py-20">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="headline-lg">Our community location</h2>
            <p className="body-lg mt-6">
              Willow Grove is planned as a peaceful, low-rise residence in Bangkok with landscaped courtyards and easy-to-navigate spaces.
            </p>
            <ul className="mt-8 grid gap-4">
              {["Bangkok, Thailand", "Low-rise courtyard concept", "Official site details pending"].map((item) => (
                <li key={item} className="flex items-center gap-3 font-semibold">
                  <CheckCircle className="text-sage" size={22} weight="fill" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <StitchImage
            src={stitchAssets.residenceHero}
            alt="Concept aerial view of the proposed Willow Grove residence"
            className="h-[28rem] rounded-xl border custom-shadow lg:col-span-3"
          />
        </div>
      </section>

      <section id="faq" className="container-shell scroll-mt-28 py-20">
        <div className="text-center">
          <h2 className="headline-lg">Common questions</h2>
          <p className="body-lg mt-4">Helpful details for families beginning their search.</p>
        </div>
        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map(([question, answer], index) => (
            <details key={question} className="group rounded-xl border bg-surface-low" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-6 font-bold text-primary">
                {question}
                <CaretDown className="shrink-0 group-open:rotate-180" size={21} weight="bold" />
              </summary>
              <p className="border-t px-6 py-5 text-base leading-7 text-muted-foreground">{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <CtaBand title="Ready to see it in person?" text="Private visits will be available once official contact and location details are confirmed." />
    </main>
  );
}

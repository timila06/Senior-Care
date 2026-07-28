import type { Metadata } from "next";
import { MapPin } from "@phosphor-icons/react/dist/ssr";
import { InquiryForm } from "@/components/inquiry-form";
import { PageBanner } from "@/components/page-banner";

export const metadata: Metadata = { title: "Contact", description: "Schedule a visit with Willow Grove in Bangkok." };

export default function ContactPage() {
  return <main id="main-content"><PageBanner eyebrow="Contact" title="Start with a conversation." description="Tell us a little about what your family is looking for. This concept form is for interface demonstration only." />
    <section className="section-pad"><div className="container-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><aside><div className="flex gap-4"><div className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary"><MapPin size={22} weight="duotone" /></div><div><h2 className="font-extrabold">Location</h2><p className="mt-2 text-sm text-muted-foreground">Bangkok, Thailand</p></div></div><div className="mt-10 border-t pt-8"><p className="text-sm font-bold">Contact details pending</p><p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">An official address, phone number, email, and LINE account will be added before launch.</p></div></aside><InquiryForm /></div></section>
  </main>;
}

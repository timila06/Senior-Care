"use client";

import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { InquiryFormValues } from "@/types/site";
import { cn } from "@/lib/utils";

const empty: InquiryFormValues = { name: "", email: "", phone: "", message: "" };

export function InquiryForm() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormValues, string>>>({});
  const [sent, setSent] = useState(false);
  function change(field: keyof InquiryFormValues, value: string) { setValues((current) => ({ ...current, [field]: value })); setSent(false); }
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: typeof errors = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Please enter a valid email address.";
    if (values.phone && values.phone.replace(/\D/g, "").length < 7) next.phone = "Please enter a valid phone number or leave this blank.";
    if (values.message.trim().length < 10) next.message = "Please share a little more about your inquiry.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  }
  const field = (key: keyof InquiryFormValues, value: string) => change(key, value);
  return <form noValidate onSubmit={submit} className="surface-panel p-6 sm:p-9">
    <div className="grid gap-6">
      <div><Label htmlFor="name">Name</Label><Input className="mt-2 h-11 px-3" id="name" value={values.name} onChange={(e) => field("name", e.target.value)} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />{errors.name && <p id="name-error" className="mt-2 text-sm text-destructive">{errors.name}</p>}</div>
      <div><Label htmlFor="email">Email</Label><Input className="mt-2 h-11 px-3" id="email" type="email" value={values.email} onChange={(e) => field("email", e.target.value)} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />{errors.email && <p id="email-error" className="mt-2 text-sm text-destructive">{errors.email}</p>}</div>
      <div><Label htmlFor="phone">Phone <span className="font-normal text-muted-foreground">(optional)</span></Label><Input className="mt-2 h-11 px-3" id="phone" type="tel" value={values.phone} onChange={(e) => field("phone", e.target.value)} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} />{errors.phone && <p id="phone-error" className="mt-2 text-sm text-destructive">{errors.phone}</p>}</div>
      <div><Label htmlFor="message">How can we help?</Label><Textarea className="mt-2 min-h-32 px-3" id="message" value={values.message} onChange={(e) => field("message", e.target.value)} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error message-note" : "message-note"} /><p id="message-note" className="mt-2 text-xs leading-5 text-muted-foreground">Do not include medical records or other sensitive information.</p>{errors.message && <p id="message-error" className="mt-2 text-sm text-destructive">{errors.message}</p>}</div>
      <button className={cn(buttonVariants(), "h-12 px-6")} type="submit">Send Inquiry</button>
      {sent && <p role="status" className="rounded-lg border border-sage bg-secondary p-4 text-sm font-semibold">Thank you. This mockup does not send inquiries yet. No information has been stored.</p>}
    </div>
  </form>;
}

"use client";

import { useState } from "react";
import type { InquiryFormValues } from "@/types/site";

const empty: InquiryFormValues = { name: "", email: "", phone: "", message: "" };

export function InquiryForm() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormValues, string>>>({});
  const [sent, setSent] = useState(false);

  function change(field: keyof InquiryFormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setSent(false);
  }

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

  const inputClass = "mt-2 min-h-12 w-full rounded-lg border border-input bg-background px-4 text-base outline-none focus:border-sage focus:ring-2 focus:ring-sage/25";

  return (
    <form noValidate onSubmit={submit} className="rounded-xl border bg-white p-6 custom-shadow sm:p-10">
      <h2 className="headline-lg">Send us a message</h2>
      <p className="mt-3 text-base text-muted-foreground">Tell us what your family is looking for. This concept form stores and sends nothing.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <label className="font-bold" htmlFor="name">Full Name</label>
          <input className={inputClass} id="name" autoComplete="name" value={values.name} onChange={(event) => change("name", event.target.value)} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} placeholder="Your name" />
          {errors.name && <p id="name-error" className="mt-2 text-sm text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label className="font-bold" htmlFor="email">Email Address</label>
          <input className={inputClass} id="email" type="email" autoComplete="email" value={values.email} onChange={(event) => change("email", event.target.value)} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} placeholder="you@example.com" />
          {errors.email && <p id="email-error" className="mt-2 text-sm text-destructive">{errors.email}</p>}
        </div>
        <div>
          <label className="font-bold" htmlFor="phone">Phone Number <span className="font-normal text-muted-foreground">(optional)</span></label>
          <input className={inputClass} id="phone" type="tel" autoComplete="tel" value={values.phone} onChange={(event) => change("phone", event.target.value)} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} placeholder="Your phone number" />
          {errors.phone && <p id="phone-error" className="mt-2 text-sm text-destructive">{errors.phone}</p>}
        </div>
        <div>
          <label className="font-bold" htmlFor="inquiry-type">Inquiry Type</label>
          <select className={inputClass} id="inquiry-type" defaultValue="visit">
            <option value="visit">Schedule a Visit</option>
            <option value="services">Care and Services</option>
            <option value="residential">Residential Life</option>
            <option value="general">General Inquiry</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="font-bold" htmlFor="message">Your Message</label>
          <textarea className={`${inputClass} min-h-32 py-3`} id="message" value={values.message} onChange={(event) => change("message", event.target.value)} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error message-note" : "message-note"} placeholder="How can we help?" />
          <p id="message-note" className="mt-2 text-sm text-muted-foreground">Please do not include medical records or sensitive information.</p>
          {errors.message && <p id="message-error" className="mt-2 text-sm text-destructive">{errors.message}</p>}
        </div>
        <div className="md:col-span-2">
          <button className="min-h-14 rounded-xl bg-primary px-8 py-3.5 font-bold text-white hover:bg-deep-olive" type="submit">Submit Inquiry</button>
        </div>
        {sent && (
          <p role="status" className="rounded-xl border border-sage bg-secondary p-4 font-semibold md:col-span-2">
            This mockup does not send inquiries yet. No information has been stored.
          </p>
        )}
      </div>
    </form>
  );
}

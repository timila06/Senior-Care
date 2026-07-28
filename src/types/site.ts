import type { Icon } from "@phosphor-icons/react";

export type NavigationItem = { href: string; label: string };
export type Service = { slug: string; title: string; short: string; description: string; icon: Icon };
export type InquiryFormValues = { name: string; email: string; phone: string; message: string };

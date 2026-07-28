import { ClockCountdown, FlowerLotus, Heartbeat, HouseLine } from "@phosphor-icons/react/dist/ssr";
import type { NavigationItem, Service } from "@/types/site";

export const siteConfig = {
  name: "Willow Grove",
  tagline: "Living With Dignity.",
  description: "Residential support, daily care, and thoughtful wellbeing for older adults in Bangkok.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  location: "Bangkok, Thailand",
};

export const navigation: NavigationItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
];

export const services: Service[] = [
  { slug: "residential-assisted-living", title: "Residential and Assisted Living", short: "A calm, supportive home shaped around everyday comfort.", description: "A welcoming residential setting with assistance adapted to each older adult's daily routines, preferences, and changing needs.", icon: HouseLine },
  { slug: "daily-care-support", title: "24/7 Daily Care Support", short: "Reassuring support throughout the day and night.", description: "Care support is available around the clock for everyday activities, personal routines, comfort, and a steady sense of reassurance.", icon: ClockCountdown },
  { slug: "health-monitoring", title: "Medication and Health Monitoring", short: "Attentive oversight that helps families stay informed.", description: "Structured medication reminders and routine health observations support continuity, with families kept part of the conversation.", icon: Heartbeat },
  { slug: "wellness-activities", title: "Wellness and Recreational Activities", short: "Meaningful days with gentle movement, creativity, and connection.", description: "Thoughtfully planned activities encourage enjoyment, social connection, personal interests, and a comfortable daily rhythm.", icon: FlowerLotus },
];

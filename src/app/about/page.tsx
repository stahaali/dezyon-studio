import type { Metadata } from "next";
import { AboutCareers } from "@/components/About/AboutCareers/AboutCareers";
import { AboutHelps } from "@/components/About/AboutHelps/AboutHelps";
import { AboutHero } from "@/components/About/AboutHero/AboutHero";
import { AboutShowcase } from "@/components/About/AboutShowcase/AboutShowcase";
import { Team } from "@/components/Features/Team";
import { AboutTestimonials } from "@/components/About/AboutTestimonials/AboutTestimonials";
import { Timeline } from "@/components/Features/Timeline";
import { AboutValues } from "@/components/About/AboutValues/AboutValues";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `About | ${SITE_NAME}`,
  description:
    "Learn about Dezyon Studio — our story, values, team, and how we help teams manage projects of any complexity.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutShowcase />
      <AboutHelps />
      <AboutValues />
      <AboutTestimonials />
      <Timeline />
      <Team />
      <AboutCareers />
    </>
  );
}

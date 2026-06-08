import { Hero } from "@/components/Hero/Hero";
import { Features } from "@/components/Features/Features";
// import { Integrations } from "@/components/Integrations/Integrations";
import { Values } from "@/components/Features/Values";
import { Pricing } from "@/components/Pricing/Pricing";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { Timeline } from "@/components/Features/Timeline";
import { Team } from "@/components/Features/Team";
import { CTA } from "@/components/CTA/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      {/* <Integrations /> */}
      <Values />
      <Pricing />
      <Testimonials />
      <Timeline />
      <Team />
      <CTA />
    </>
  );
}

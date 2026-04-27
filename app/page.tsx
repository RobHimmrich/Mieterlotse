import { Hero } from "@/components/sections/hero";
import { StatBar } from "@/components/sections/stat-bar";
import { Problem } from "@/components/sections/problem";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Integration } from "@/components/sections/integration";
import { RoiCalculator } from "@/components/sections/roi-calculator";
import { Compliance } from "@/components/sections/compliance";
import { FounderTestimonial } from "@/components/sections/founder-testimonial";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";

export default function Page() {
  return (
    <>
      <Hero />
      <StatBar />
      <Problem />
      <HowItWorks />
      <Integration />
      <RoiCalculator />
      <Compliance />
      <FounderTestimonial />
      <Faq />
      <FinalCta />
    </>
  );
}

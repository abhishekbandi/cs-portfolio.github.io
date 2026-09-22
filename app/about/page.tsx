import type { Metadata } from "next";
import { CareerSection } from "@/components/career-section";
import { DailyToolsSection } from "@/components/daily-tools-section";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <>
      <section className="px-3 py-16">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h1 className="leading-[0.9] font-black tracking-tight uppercase">
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
                About
              </span>
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
                Yours Truly
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground">
              I’m <span className="font-black text-foreground">Chandrashekhar</span>,
              a digital designer with 10 years of experience, applying my
              skills across products and experiences.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <DailyToolsSection />
      <CareerSection />
    </>
  );
}

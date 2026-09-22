import type { Metadata } from "next";
import { AvailabilitySection } from "@/components/availability-section";
import { FaqSection } from "@/components/faq-section";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SocialLinksSection } from "@/components/social-links-section";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <div className="px-3 py-24 sm:py-36">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h1 className="text-6xl leading-[0.9] font-black tracking-tight uppercase sm:text-7xl md:text-8xl lg:text-9xl">
              Let’s Chat
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground">
              Contact us to discuss business opportunities, or just to say
              hello. Use the form below or send us an email at{" "}
              <a
                href="mailto:info@csdn.design"
                className="text-foreground transition-colors hover:text-[#FF5D64]"
              >
                info@csdn.design
              </a>
              .
            </p>

            <a
              href="tel:+919304898229"
              className="mt-6 inline-flex items-center gap-3 text-lg text-foreground transition-colors hover:text-[#FF5D64]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M3 5c0-1.1.9-2 2-2h2.2a1 1 0 0 1 1 .76l1 4a1 1 0 0 1-.3.98l-1.6 1.4a12.5 12.5 0 0 0 5.5 5.5l1.4-1.6a1 1 0 0 1 .98-.3l4 1a1 1 0 0 1 .76 1V19a2 2 0 0 1-2 2h-1C9.7 21 3 14.3 3 6V5Z" />
              </svg>
              +91 93048 98229
            </a>
          </ScrollReveal>
        </div>
      </div>

      <AvailabilitySection />
      <FaqSection />
      <SocialLinksSection />
    </>
  );
}

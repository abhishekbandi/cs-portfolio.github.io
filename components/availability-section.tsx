import { CtaButton } from "@/components/cta-button";
import { ScrollReveal } from "@/components/scroll-reveal";

export function AvailabilitySection() {
  return (
    <section className="px-3 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 md:grid-cols-2">
        <ScrollReveal>
          <div className="inline-flex flex-wrap items-center gap-3 rounded-full bg-muted px-5 py-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            <span className="text-sm font-medium text-foreground">
              Available for freelance work
            </span>
            <span className="text-muted-foreground">·</span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Bangalore, India
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-black tracking-tight uppercase sm:text-5xl">
            Looking To Create A Stunning Design?
          </h2>
          <p className="mt-4 max-w-md text-lg text-muted-foreground">
            Check out my services below — from early-stage product design to
            full design systems, I’d love to help bring your next idea to
            life.
          </p>

          <div className="mt-8">
            <CtaButton href="/work" label="My Work" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="aspect-square w-full rounded-[20px] bg-muted" />
        </ScrollReveal>
      </div>
    </section>
  );
}

import { Image } from "@/components/image";
import { HoverLift } from "@/components/hover-lift";
import { ScrollReveal } from "@/components/scroll-reveal";

function ExpertiseCard({
  src,
  alt,
  aspect,
}: {
  src: string;
  alt: string;
  aspect: string;
}) {
  return (
    <div className={`relative w-full overflow-hidden rounded-[20px] bg-muted ${aspect}`}>
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}

export function ExpertiseSection() {
  return (
    <section className="px-3 py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <h2 className="text-4xl font-bold tracking-tight uppercase sm:text-5xl">
          Expertise
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[800fr_440fr]">
          <ScrollReveal className="w-full">
            <HoverLift>
              <ExpertiseCard
                src="/expertise/ui-ux.png"
                alt="UI/UX"
                aspect="aspect-[800/500]"
              />
            </HoverLift>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="w-full">
            <HoverLift>
              <ExpertiseCard
                src="/expertise/interaction-design.png"
                alt="Interaction Design"
                aspect="aspect-[440/500]"
              />
            </HoverLift>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[500fr_740fr]">
          <ScrollReveal className="w-full">
            <HoverLift>
              <ExpertiseCard
                src="/expertise/branding.png"
                alt="Branding"
                aspect="aspect-[500/370]"
              />
            </HoverLift>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="w-full">
            <HoverLift>
              <ExpertiseCard
                src="/expertise/illustration.png"
                alt="Illustrations"
                aspect="aspect-[740/370]"
              />
            </HoverLift>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <ScrollReveal className="w-full">
            <HoverLift>
              <ExpertiseCard
                src="/expertise/product-design.png"
                alt="Product Design"
                aspect="aspect-[620/500]"
              />
            </HoverLift>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="w-full">
            <HoverLift>
              <ExpertiseCard
                src="/expertise/sketching.png"
                alt="Sketchings"
                aspect="aspect-[620/500]"
              />
            </HoverLift>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

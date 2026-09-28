"use client";

import { useState } from "react";
import { BottomSheet } from "@/components/bottom-sheet";
import { Image } from "@/components/image";
import { HoverLift } from "@/components/hover-lift";
import { ScrollReveal } from "@/components/scroll-reveal";

function ExpertiseCard({
  src,
  alt,
  aspect,
  onClick,
}: {
  src: string;
  alt: string;
  aspect: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative w-full cursor-pointer overflow-hidden rounded-[20px] bg-muted text-left ${aspect}`}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
    </button>
  );
}

export function ExpertiseSection() {
  const [activeTitle, setActiveTitle] = useState<string | null>(null);

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
                src="/home/expertise-ui-ux.png"
                alt="UI/UX"
                aspect="aspect-[800/500]"
                onClick={() => setActiveTitle("UI/UX")}
              />
            </HoverLift>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="w-full">
            <HoverLift>
              <ExpertiseCard
                src="/home/expertise-interaction-design.png"
                alt="Interaction Design"
                aspect="aspect-[440/500]"
                onClick={() => setActiveTitle("Interaction Design")}
              />
            </HoverLift>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[500fr_740fr]">
          <ScrollReveal className="w-full">
            <HoverLift>
              <ExpertiseCard
                src="/home/expertise-branding.png"
                alt="Branding"
                aspect="aspect-[500/370]"
                onClick={() => setActiveTitle("Branding")}
              />
            </HoverLift>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="w-full">
            <HoverLift>
              <ExpertiseCard
                src="/home/expertise-illustration.png"
                alt="Illustrations"
                aspect="aspect-[740/370]"
                onClick={() => setActiveTitle("Illustrations")}
              />
            </HoverLift>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <ScrollReveal className="w-full">
            <HoverLift>
              <ExpertiseCard
                src="/home/expertise-product-design.png"
                alt="Product Design"
                aspect="aspect-[620/500]"
                onClick={() => setActiveTitle("Product Design")}
              />
            </HoverLift>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="w-full">
            <HoverLift>
              <ExpertiseCard
                src="/home/expertise-sketching.png"
                alt="Sketchings"
                aspect="aspect-[620/500]"
                onClick={() => setActiveTitle("Sketching")}
              />
            </HoverLift>
          </ScrollReveal>
        </div>
      </div>

      <BottomSheet
        open={activeTitle !== null}
        title={activeTitle ?? ""}
        onClose={() => setActiveTitle(null)}
      >
        <p className="text-base leading-relaxed sm:text-lg">Details coming soon.</p>
      </BottomSheet>
    </section>
  );
}

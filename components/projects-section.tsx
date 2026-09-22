import { AiPlatformSection } from "@/components/ai-platform-section";
import { CtaButton } from "@/components/cta-button";
import { PlaceholderSection } from "@/components/placeholder-section";
import { SwashSection } from "@/components/swash-section";
import { TwoUpSection } from "@/components/two-up-section";
import { TwoUpSection2 } from "@/components/two-up-section-2";

export function ProjectsSection() {
  return (
    <section className="px-3 pt-10">
      <h2 className="mx-auto mt-10 max-w-7xl text-4xl font-bold tracking-tight uppercase sm:text-5xl">
        My Projects
      </h2>

      <TwoUpSection />
      <PlaceholderSection />
      <TwoUpSection2 />
      <AiPlatformSection />
      <SwashSection />

      <div className="mx-auto flex max-w-7xl justify-center px-3 pb-10">
        <CtaButton href="/work" label="View all projects" />
      </div>
    </section>
  );
}

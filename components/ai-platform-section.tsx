import { ProjectCard } from "@/components/project-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { getProject } from "@/lib/projects";

export function AiPlatformSection() {
  const aiPlatform = getProject("ai-platform")!;

  return (
    <section className="px-3 py-10">
      <div className="mx-auto flex max-w-7xl justify-start">
        <ScrollReveal className="w-full md:w-[70%]">
          <ProjectCard project={aiPlatform} />
        </ScrollReveal>
      </div>
    </section>
  );
}

import { ProjectCard } from "@/components/project-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { getProject } from "@/lib/projects";

export function AapSection() {
  const aap = getProject("aap")!;

  return (
    <section className="px-3 py-10">
      <div className="mx-auto flex max-w-7xl justify-end">
        <ScrollReveal className="w-full md:w-[70%]">
          <ProjectCard project={aap} />
        </ScrollReveal>
      </div>
    </section>
  );
}

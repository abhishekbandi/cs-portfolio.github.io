import { ProjectCard } from "@/components/project-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { getProject } from "@/lib/projects";

export function TwoUpSection() {
  const happtag = getProject("happtag")!;
  const tenX = getProject("ten-x")!;

  return (
    <section className="px-3 py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 md:grid-cols-2">
        <ScrollReveal className="flex flex-col items-start justify-center gap-8 p-12 text-left">
          <ProjectCard
            project={happtag}
            mediaClassName="aspect-[620/516] w-full rounded-[20px] object-cover"
          />
        </ScrollReveal>

        <ScrollReveal
          delay={0.15}
          className="flex flex-col items-start justify-center gap-8 p-12 text-left"
        >
          <ProjectCard project={tenX} />
        </ScrollReveal>
      </div>
    </section>
  );
}

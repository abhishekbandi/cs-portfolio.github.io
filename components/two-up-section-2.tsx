import { ProjectCard } from "@/components/project-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { getProject } from "@/lib/projects";

export function TwoUpSection2() {
  const bookdu = getProject("bookdu")!;
  const prepmyskills = getProject("prepmyskills")!;

  return (
    <section className="px-3 py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 md:grid-cols-2">
        <ScrollReveal className="flex flex-col items-start justify-center gap-8 p-12 text-left">
          <ProjectCard project={bookdu} />
        </ScrollReveal>

        <ScrollReveal
          delay={0.15}
          className="flex flex-col items-start justify-center gap-8 p-12 text-left"
        >
          <ProjectCard project={prepmyskills} />
        </ScrollReveal>
      </div>
    </section>
  );
}

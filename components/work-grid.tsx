import Link from "next/link";
import { ProjectCaption } from "@/components/project-caption";
import { ScrollReveal } from "@/components/scroll-reveal";
import { PROJECTS } from "@/lib/projects";

export function WorkGrid() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 px-3 py-10 sm:grid-cols-2">
      {PROJECTS.map((project, index) => (
        <ScrollReveal key={project.slug} delay={Math.min(index * 0.05, 0.2)}>
          <Link href={`/work/${project.slug}`} className="group block">
            <div className="aspect-[4/3] w-full rounded-[20px] bg-muted" />
            <ProjectCaption
              title={project.title}
              tags={project.tags}
              className="mt-6"
            />
          </Link>
        </ScrollReveal>
      ))}
    </div>
  );
}

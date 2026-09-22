import Link from "next/link";
import { HoverLift } from "@/components/hover-lift";
import { ProjectCaption } from "@/components/project-caption";
import { ProjectMedia } from "@/components/project-media";
import type { Project } from "@/lib/projects";

export function ProjectCard({
  project,
  mediaClassName = "h-auto w-full rounded-[20px] object-cover",
  className,
}: {
  project: Project;
  mediaClassName?: string;
  className?: string;
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={`group block w-full ${className ?? ""}`}
    >
      <HoverLift className="w-full">
        <ProjectMedia
          media={project.media}
          alt={project.title}
          className={mediaClassName}
        />
      </HoverLift>

      <ProjectCaption title={project.title} tags={project.tags} className="mt-6" />
    </Link>
  );
}

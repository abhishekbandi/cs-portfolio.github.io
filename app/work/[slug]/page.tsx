import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HapptagCaseStudy } from "@/components/happtag-case-study";
import { TenxCaseStudy } from "@/components/tenx-case-study";
import { ProjectMedia } from "@/components/project-media";
import { PROJECTS, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

// Static export can only prerender known params — any slug outside
// generateStaticParams() must 404 at build time rather than render on demand.
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  return { title: project?.title ?? "Work" };
}

export default async function ProjectPage({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  if (project.slug === "happtag") {
    return <HapptagCaseStudy />;
  }

  if (project.slug === "ten-x") {
    return <TenxCaseStudy />;
  }

  return (
    <div className="mx-auto max-w-5xl px-3 py-16">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {project.title}
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">{project.tags}</p>

      <div className="mt-10 overflow-hidden rounded-[20px]">
        <ProjectMedia
          media={project.media}
          alt={project.title}
          className="h-auto w-full object-cover"
        />
      </div>
    </div>
  );
}

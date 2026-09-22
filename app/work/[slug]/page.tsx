import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectMedia } from "@/components/project-media";
import { PROJECTS, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

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

  return (
    <div className="mx-auto max-w-5xl px-3 py-16">
      <Link
        href="/work"
        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        ← Back to work
      </Link>

      <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
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

import Image from "next/image";
import { BackgroundVideo } from "@/components/background-video";
import type { Project } from "@/lib/projects";

export function ProjectMedia({
  media,
  alt,
  className,
}: {
  media: Project["media"];
  alt: string;
  className?: string;
}) {
  if (media.type === "video") {
    return <BackgroundVideo src={media.src} className={className} />;
  }

  return (
    <Image
      src={media.src}
      alt={alt}
      width={media.width}
      height={media.height}
      className={className}
    />
  );
}

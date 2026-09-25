import { BackgroundVideo } from "@/components/background-video";

export function ProjectVideoHero({
  videoSrc,
  label,
}: {
  videoSrc: string;
  label: string;
}) {
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <BackgroundVideo
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        src={videoSrc}
      />
      <div className="absolute inset-0 -z-10 bg-black/50" />
      <h1 className="px-3 text-center text-6xl font-black tracking-tight text-white uppercase sm:text-8xl md:text-9xl">
        {label}
      </h1>
    </div>
  );
}

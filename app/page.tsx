import { BackgroundVideo } from "@/components/background-video";
import { ExpertiseSection } from "@/components/expertise-section";
import { Marquee } from "@/components/marquee";
import { ProjectsSection } from "@/components/projects-section";

export default function Home() {
  return (
    <>
      <div className="relative flex min-h-[calc(100vh-4rem-1px)] flex-col items-center justify-between overflow-hidden px-3 py-16 text-center">
        <BackgroundVideo
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          src="/home-background-video.mp4"
        />
        <div className="absolute inset-0 -z-10 bg-black/50" />

        <h1 className="mx-auto max-w-7xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
          <span className="block text-lg font-normal text-white/70 sm:text-xl">
            Where
          </span>
          <span className="block">Complexity</span>
          <span className="block">
            Becomes <span className="text-[#FF5D64]">Simple</span>
          </span>
        </h1>

        <p className="max-w-2xl text-lg text-white/70">
          I’m Chandrashekhar, a digital designer with 10 years of experience,
          applying my skills across products and experiences.
        </p>
      </div>

      <Marquee />
      <ProjectsSection />
      <ExpertiseSection />
    </>
  );
}

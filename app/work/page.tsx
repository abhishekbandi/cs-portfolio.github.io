import type { Metadata } from "next";
import { WorkGrid } from "@/components/work-grid";

export const metadata: Metadata = {
  title: "Work",
};

export default function Work() {
  return (
    <div className="px-3 py-36">
      <h1 className="mx-auto mb-28 max-w-7xl text-6xl leading-[0.9] font-black tracking-tight uppercase sm:text-7xl md:text-8xl lg:text-9xl">
        My Projects
      </h1>

      <WorkGrid />
    </div>
  );
}

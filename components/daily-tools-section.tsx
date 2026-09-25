import { Image } from "@/components/image";
import { ScrollReveal } from "@/components/scroll-reveal";

type Tool = { name: string; src: string };

const ROW_1: Tool[] = [
  { name: "Adobe Photoshop", src: "/about/adobe-photoshop-svgrepo-com.svg" },
  { name: "Adobe Illustrator", src: "/about/adobe-illustrator-svgrepo-com.svg" },
  { name: "Adobe XD", src: "/about/adobe-xd-svgrepo-com.svg" },
  {
    name: "Adobe After Effects",
    src: "/about/adobe-after-effects-svgrepo-com.svg",
  },
  {
    name: "Adobe Creative Cloud",
    src: "/about/adobe-creative-cloud-svgrepo-com.svg",
  },
];

const ROW_2: Tool[] = [
  { name: "Figma", src: "/about/figma-svgrepo-com.svg" },
  { name: "Framer", src: "/about/framer-svgrepo-com.svg" },
  { name: "Rive", src: "/about/Rive--Streamline-Simple-Icons.svg" },
  { name: "ChatGPT", src: "/about/ChatGPT-Logo.svg" },
];

function ToolRow({ items, reverse = false }: { items: Tool[]; reverse?: boolean }) {
  return (
    <div
      className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
    >
      <div
        className={`flex w-max gap-4 py-2 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {[0, 1].map((group) => (
          <div
            key={group}
            className="flex shrink-0 gap-4"
            aria-hidden={group === 1}
          >
            {items.map((tool, index) => (
              <div
                key={`${tool.name}-${index}`}
                className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[16px] bg-muted p-5 sm:h-24 sm:w-24"
              >
                <Image
                  src={tool.src}
                  alt={tool.name}
                  width={64}
                  height={64}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function DailyToolsSection() {
  return (
    <section className="px-3 py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        <ScrollReveal>
          <h2 className="text-5xl leading-[0.9] font-black tracking-tight uppercase sm:text-6xl md:text-7xl">
            Daily Tools
          </h2>
          <p className="mt-4 max-w-sm text-base text-muted-foreground">
            The design and prototyping tools I reach for every day to bring
            ideas to life.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="flex flex-col gap-4">
          <ToolRow items={ROW_1} />
          <ToolRow items={ROW_2} reverse />
        </ScrollReveal>
      </div>
    </section>
  );
}

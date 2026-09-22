import { ScrollReveal } from "@/components/scroll-reveal";

const ROW_1 = Array.from({ length: 6 });
const ROW_2 = Array.from({ length: 6 });

function ToolRow({
  items,
  reverse = false,
}: {
  items: unknown[];
  reverse?: boolean;
}) {
  return (
    <div className="overflow-hidden">
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
            {items.map((_, index) => (
              <div
                key={index}
                className="h-20 w-20 shrink-0 rounded-[16px] bg-muted sm:h-24 sm:w-24"
              />
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

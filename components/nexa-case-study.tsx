import { Inter } from "next/font/google";
import { Image } from "@/components/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  NEXA_ABOUT,
  NEXA_ADVANCED_TOOL,
  NEXA_BANNER_1,
  NEXA_BANNER_2,
  NEXA_HERO,
  NEXA_COLORS,
  NEXA_HIFI,
  NEXA_MOCKUPS,
  NEXA_OVERVIEW,
  NEXA_PROBLEM_SOLUTION,
  NEXA_ROADMAP,
  NEXA_SERVICES,
  NEXA_TYPOGRAPHY,
  NEXA_REQUIREMENT,
} from "@/lib/nexa-case-study";

const inter = Inter({ subsets: ["latin"] });

const ACCENT = "#6E6ED2";

function SectionHeading({
  text,
  className = "text-xl sm:text-2xl",
  breakLast = false,
}: {
  text: string;
  className?: string;
  breakLast?: boolean;
}) {
  const words = text.split(" ");
  const last = words.pop();

  return (
    <h2 className={`font-bold tracking-tight ${className}`}>
      {words.length > 0 && (
        <span className="text-foreground">{words.join(" ")} </span>
      )}
      {breakLast && <br />}
      <span style={{ color: ACCENT }}>{last}</span>
    </h2>
  );
}

export function NexaCaseStudy() {
  return (
    <div className="pb-24">
      <div className="w-full">
        <Image
          src={NEXA_HERO.src}
          alt="Nexa hero banner"
          width={NEXA_HERO.width}
          height={NEXA_HERO.height}
          priority
          className="h-auto w-full object-cover"
        />
      </div>

      <div className="px-3 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <dl className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {NEXA_OVERVIEW.map((item, i) => (
              <div
                key={item.label}
                className={i > 0 ? "lg:border-l lg:border-border lg:pl-10" : ""}
              >
                <dt className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                  {item.label}
                </dt>
                <dd className="mt-2 text-lg font-medium text-foreground">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="px-3 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-[3fr_7fr] sm:gap-10">
              <SectionHeading text={NEXA_REQUIREMENT.heading} />
              <p
                className="border-l-2 pl-6 text-2xl leading-snug font-medium tracking-tight text-foreground sm:text-3xl"
                style={{ borderColor: ACCENT }}
              >
                {NEXA_REQUIREMENT.body}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="px-3 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[4fr_6fr]">
            <ScrollReveal>
              <SectionHeading
                text={NEXA_ABOUT.heading}
                className="text-5xl leading-[1.05] sm:text-6xl lg:text-7xl xl:text-8xl"
                breakLast
              />
            </ScrollReveal>

            <div className="flex flex-col gap-6">
              {NEXA_ABOUT.paragraphs.map((text, i) => (
                <ScrollReveal key={text} delay={i * 0.1}>
                  <div className="rounded-[20px] border border-border p-8 md:p-10">
                    <span
                      className="text-sm font-semibold tabular-nums"
                      style={{ color: ACCENT }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-4 text-lg leading-relaxed text-foreground">
                      {text}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full pb-12 md:pb-20">
        <ScrollReveal>
          <Image
            src={NEXA_BANNER_1.src}
            alt="Nexa banner"
            width={NEXA_BANNER_1.width}
            height={NEXA_BANNER_1.height}
            className="h-auto w-full object-cover"
          />
        </ScrollReveal>
      </div>

      <div className="px-3 pb-12 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <SectionHeading text={NEXA_ROADMAP.heading} />
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {NEXA_ROADMAP.items.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="h-full rounded-[20px] border border-border p-8">
                  <Image
                    src={item.icon}
                    alt=""
                    width={100}
                    height={100}
                    className="h-16 w-16"
                  />
                  <h3 className="mt-6 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <div className="px-3 pb-12 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <SectionHeading text={NEXA_PROBLEM_SOLUTION.heading} />
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {NEXA_PROBLEM_SOLUTION.cards.map((card, i) => (
              <ScrollReveal key={card.label} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-[20px] bg-[#E8F1FF] p-8 text-[#0F172A] md:p-10">
                  <h3 className="text-2xl font-bold tracking-tight">
                    {card.label}
                  </h3>
                  <p className="mt-4 leading-relaxed text-[#334155]">
                    {card.intro}
                  </p>
                  <p className="mt-6 font-semibold">{card.listTitle}</p>
                  <ul className="mt-3 flex flex-col gap-2">
                    {card.points.map((point) => (
                      <li key={point} className="flex gap-3 text-[#334155]">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: ACCENT }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                  {card.outro && (
                    <p className="mt-6 leading-relaxed text-[#334155]">
                      {card.outro}
                    </p>
                  )}
                  <div className="mt-auto flex gap-2 pt-8">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white px-3 py-1 text-xs font-medium"
                        style={{ color: ACCENT }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full pb-12 md:pb-20">
        <ScrollReveal>
          <Image
            src={NEXA_BANNER_2.src}
            alt="Nexa banner"
            width={NEXA_BANNER_2.width}
            height={NEXA_BANNER_2.height}
            className="h-auto w-full object-cover"
          />
        </ScrollReveal>
      </div>

      <div className="px-3 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading text={NEXA_TYPOGRAPHY.heading} />

          <div
            className={`mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center ${inter.className}`}
          >
            <ScrollReveal>
              <span className="block text-[6rem] leading-none font-bold tracking-tight text-foreground min-[400px]:text-[8rem] sm:text-[10rem] lg:text-[12rem]">
                Inter
              </span>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {NEXA_TYPOGRAPHY.description}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="flex flex-wrap gap-6">
                {NEXA_TYPOGRAPHY.weights.map((weight) => (
                  <span
                    key={weight.label}
                    className={`text-lg text-foreground ${weight.className}`}
                  >
                    {weight.label}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-lg leading-relaxed font-semibold text-foreground sm:text-xl">
                {NEXA_TYPOGRAPHY.uppercase}
              </p>
              <p className="mt-1 text-lg leading-relaxed font-semibold text-foreground sm:text-xl">
                {NEXA_TYPOGRAPHY.lowercase}
              </p>
              <p className="mt-1 text-lg leading-relaxed font-semibold text-foreground sm:text-xl">
                {NEXA_TYPOGRAPHY.numbers}
              </p>
            </ScrollReveal>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-4">
            {NEXA_COLORS.map((group, i) => (
              <ScrollReveal
                key={group.label}
                delay={i * 0.1}
                className={group.swatches.length > 1 ? "md:col-span-2" : ""}
              >
                <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                  {group.label}
                </span>
                <div className="mt-3 flex gap-6">
                  {group.swatches.map((hex) => (
                    <div key={hex} className="flex-1">
                      <div
                        className="h-40 rounded-[20px] border border-border"
                        style={{ backgroundColor: hex }}
                      />
                      <p className="mt-3 text-lg font-medium text-foreground">
                        {hex.toUpperCase()}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <div className="px-3 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <SectionHeading text={NEXA_ADVANCED_TOOL.heading} />
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              {NEXA_ADVANCED_TOOL.body}
            </p>
          </ScrollReveal>

          <div className="mt-12 flex flex-col">
            {NEXA_SERVICES.map((service) => (
              <ScrollReveal key={service.label}>
                <div className="grid grid-cols-1 gap-6 border-t border-border py-10 sm:grid-cols-[4fr_6fr] sm:gap-10">
                  <div>
                    <Image
                      src={service.icon}
                      alt=""
                      width={100}
                      height={100}
                      className="h-14 w-14"
                    />
                    <h3 className="mt-4 text-lg font-semibold text-foreground">
                      {service.label}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {service.caption}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {service.body}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full pb-12 md:pb-20">
        <ScrollReveal>
          <Image
            src={NEXA_HIFI.src}
            alt="Nexa high fidelity design"
            width={NEXA_HIFI.width}
            height={NEXA_HIFI.height}
            className="h-auto w-full object-cover"
          />
        </ScrollReveal>
      </div>

      <div className="flex flex-col gap-10 overflow-hidden pt-8 pb-12 md:pb-20">
        {NEXA_MOCKUPS.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`flex w-max ${
              rowIndex % 2 === 0 ? "animate-marquee" : "animate-marquee-reverse"
            }`}
            style={{ animationDuration: "120s" }}
          >
            {[0, 1].map((group) => (
              <div
                key={group}
                className="flex shrink-0 gap-10 pr-10"
                aria-hidden={group === 1}
              >
                {row.map((mockup) => (
                  <Image
                    key={mockup.src}
                    src={mockup.src}
                    alt={group === 0 ? mockup.alt : ""}
                    width={1078}
                    height={701}
                    className="h-64 w-auto shrink-0 rounded-[20px] object-cover shadow-[0_20px_50px_-12px_rgba(0,0,0,0.35)] sm:h-80 md:h-96"
                  />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

import { Fragment } from "react";
import { AnimatedFrame } from "@/components/animated-frame";
import { Image } from "@/components/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  BOOKDU_BENTO,
  BOOKDU_BRIEF,
  BOOKDU_COMPETITOR_ANALYSIS,
  BOOKDU_DESIGN_PROCESS,
  BOOKDU_HERO,
  BOOKDU_INTRO,
  BOOKDU_META,
} from "@/lib/bookdu-case-study";

const ACCENT = "#422978";
const FRAME_ACCENT = "#FDA44D";

export function BookduCaseStudy() {
  return (
    <div className="pb-24">
      <div className="w-full">
        <Image
          src={BOOKDU_HERO.src}
          alt="Bookdu hero banner"
          width={BOOKDU_HERO.width}
          height={BOOKDU_HERO.height}
          priority
          className="h-auto w-full object-cover"
        />
      </div>

      <div className="px-3 py-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-4">
            <div>
              <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                My Role
              </span>
              <p className="mt-2 text-lg font-medium text-foreground">{BOOKDU_META.role}</p>
            </div>

            <div className="sm:border-l sm:border-border sm:pl-10">
              <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                Deliverables
              </span>
              <ul className="mt-2 flex flex-col gap-1">
                {BOOKDU_META.deliverables.map((item) => (
                  <li key={item} className="text-lg font-medium text-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:border-l sm:border-border sm:pl-10">
              <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                Team
              </span>
              <ul className="mt-2 flex flex-col gap-1">
                {BOOKDU_META.team.map((item) => (
                  <li key={item} className="text-lg font-medium text-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:border-l sm:border-border sm:pl-10">
              <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                Year
              </span>
              <p className="mt-2 text-lg font-medium text-foreground">{BOOKDU_META.year}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-3 py-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {BOOKDU_BRIEF.map((section, i) => (
              <ScrollReveal key={section.heading} delay={i * 0.1}>
                <AnimatedFrame delay={i * 0.1} accent={FRAME_ACCENT}>
                  <span className="text-sm font-semibold" style={{ color: FRAME_ACCENT }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-foreground sm:text-2xl">
                    {section.heading}
                  </h3>
                  <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                    {section.lines.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </AnimatedFrame>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <div className="px-3 py-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-2">
            <ScrollReveal>
              <p
                className="text-3xl leading-tight font-semibold sm:text-4xl md:text-5xl"
                style={{ color: ACCENT }}
              >
                {BOOKDU_INTRO.body}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <Image
                src={BOOKDU_INTRO.image.src}
                alt="Bookdu banner"
                width={BOOKDU_INTRO.image.width}
                height={BOOKDU_INTRO.image.height}
                className="h-auto w-full rounded-[20px] object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="px-3 py-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            {BOOKDU_DESIGN_PROCESS.heading}
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3 lg:grid-cols-5">
            {BOOKDU_DESIGN_PROCESS.stages.map((stage, i) => (
              <ScrollReveal key={stage.name} delay={i * 0.05}>
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={stage.icon.src}
                    alt={stage.name}
                    width={stage.icon.width}
                    height={stage.icon.height}
                    className="h-14 w-14"
                  />
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{stage.name}</h3>
                  <ul className="mt-3 flex flex-col gap-1">
                    {stage.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <div className="px-3 py-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <ScrollReveal>
              <Image
                src={BOOKDU_BENTO.left.src}
                alt="Bookdu banner"
                width={BOOKDU_BENTO.left.width}
                height={BOOKDU_BENTO.left.height}
                className="h-full w-full rounded-[20px] object-cover"
              />
            </ScrollReveal>

            <div className="flex flex-col gap-6">
              {BOOKDU_BENTO.rightTop && (
                <ScrollReveal delay={0.05}>
                  <Image
                    src={BOOKDU_BENTO.rightTop.src}
                    alt="Bookdu banner"
                    width={BOOKDU_BENTO.rightTop.width}
                    height={BOOKDU_BENTO.rightTop.height}
                    className="h-auto w-full rounded-[20px] object-cover"
                  />
                </ScrollReveal>
              )}
              {BOOKDU_BENTO.rightBottom && (
                <ScrollReveal delay={0.1}>
                  <Image
                    src={BOOKDU_BENTO.rightBottom.src}
                    alt="Bookdu banner"
                    width={BOOKDU_BENTO.rightBottom.width}
                    height={BOOKDU_BENTO.rightBottom.height}
                    className="h-auto w-full rounded-[20px] object-cover"
                  />
                </ScrollReveal>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden px-3 py-8 md:py-16">
        <span
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-2 h-[90%] -translate-y-1/2 text-foreground/[0.06] select-none"
          style={{
            writingMode: "vertical-rl",
            fontSize: "clamp(4rem, 18vw, 14rem)",
            fontWeight: 900,
            lineHeight: 1,
          }}
        >
          ANALYSIS
        </span>

        <div className="relative mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            {BOOKDU_COMPETITOR_ANALYSIS.heading}
          </h2>

          <div className="mt-8 overflow-x-auto">
            <div
              className="grid min-w-[720px] gap-x-6"
              style={{
                gridTemplateColumns: "1fr 2fr 2fr",
                gridTemplateRows: `auto repeat(${BOOKDU_COMPETITOR_ANALYSIS.rows.length}, auto)`,
              }}
            >
              {/* Continuous single-color background panels, spanning every data row behind the content. */}
              <div
                className="rounded-[20px] bg-red-50"
                style={{ gridColumn: 2, gridRow: `2 / -1` }}
              />
              <div
                className="rounded-[20px] bg-green-50"
                style={{ gridColumn: 3, gridRow: `2 / -1` }}
              />

              <div style={{ gridColumn: 1, gridRow: 1 }} />
              <h3
                className="relative pb-4 text-xs font-semibold tracking-[0.15em] uppercase"
                style={{ color: FRAME_ACCENT, gridColumn: 2, gridRow: 1 }}
              >
                {BOOKDU_COMPETITOR_ANALYSIS.weaknessHeading}
              </h3>
              <h3
                className="relative pb-4 text-xs font-semibold tracking-[0.15em] uppercase"
                style={{ color: FRAME_ACCENT, gridColumn: 3, gridRow: 1 }}
              >
                {BOOKDU_COMPETITOR_ANALYSIS.strengthHeading}
              </h3>

              {BOOKDU_COMPETITOR_ANALYSIS.rows.map((row, i) => (
                <Fragment key={row.screen}>
                  <p
                    className={`relative py-6 text-base font-medium text-foreground ${
                      i < BOOKDU_COMPETITOR_ANALYSIS.rows.length - 1
                        ? "border-b border-border"
                        : ""
                    }`}
                    style={{ gridColumn: 1, gridRow: i + 2 }}
                  >
                    {row.screen}
                  </p>
                  <ul
                    className="relative flex list-disc flex-col gap-2 px-6 py-6 pl-10 text-sm text-muted-foreground"
                    style={{ gridColumn: 2, gridRow: i + 2 }}
                  >
                    {row.weakness.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <ul
                    className="relative flex list-disc flex-col gap-2 px-6 py-6 pl-10 text-sm text-muted-foreground"
                    style={{ gridColumn: 3, gridRow: i + 2 }}
                  >
                    {row.strength.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

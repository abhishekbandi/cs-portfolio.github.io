import { Fragment } from "react";
import { AnimatedFrame } from "@/components/animated-frame";
import { Image } from "@/components/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  BOOKDU_BENTO,
  BOOKDU_BRAND_IDENTITY,
  BOOKDU_BRIEF,
  BOOKDU_COMPETITOR_ANALYSIS,
  BOOKDU_DESIGN_PROCESS,
  BOOKDU_DEFINE,
  BOOKDU_HERO,
  BOOKDU_HOME_SCREEN,
  BOOKDU_INTRO,
  BOOKDU_META,
  BOOKDU_SURVEY_RESULTS,
  BOOKDU_USER_INTERVIEW,
  BOOKDU_VISIT_WEBSITE,
  BOOKDU_VISUAL_DESIGN,
} from "@/lib/bookdu-case-study";

const ACCENT = "#422978";
const FRAME_ACCENT = "#FDA44D";
const DARK_BG = "#1B1030";

function SectionHeading({ text }: { text: string }) {
  return (
    <div className="inline-block">
      <h2 className="text-xl font-bold tracking-tight sm:text-2xl md:text-3xl">
        {text}
      </h2>
      <span
        className="mt-2 block h-1 w-1/2"
        style={{ backgroundColor: FRAME_ACCENT }}
      />
    </div>
  );
}

function SubHeading({ text, dark = false }: { text: string; dark?: boolean }) {
  return (
    <div className="mb-6 inline-block">
      <h3
        className={`text-xl font-bold tracking-tight sm:text-2xl md:text-3xl ${
          dark ? "text-white" : "text-foreground"
        }`}
      >
        {text}
      </h3>
      <span
        className="mt-2 block h-1 w-1/2"
        style={{ backgroundColor: FRAME_ACCENT }}
      />
    </div>
  );
}

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
              <p className="mt-2 text-lg font-medium text-foreground">
                {BOOKDU_META.role}
              </p>
            </div>

            <div className="sm:border-l sm:border-border sm:pl-10">
              <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                Deliverables
              </span>
              <ul className="mt-2 flex flex-col gap-1">
                {BOOKDU_META.deliverables.map((item) => (
                  <li
                    key={item}
                    className="text-lg font-medium text-foreground"
                  >
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
                  <li
                    key={item}
                    className="text-lg font-medium text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:border-l sm:border-border sm:pl-10">
              <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                Year
              </span>
              <p className="mt-2 text-lg font-medium text-foreground">
                {BOOKDU_META.year}
              </p>
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
                  <span
                    className="text-sm font-semibold"
                    style={{ color: FRAME_ACCENT }}
                  >
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
          <SectionHeading text={BOOKDU_DESIGN_PROCESS.heading} />

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-10 lg:grid-cols-5">
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
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {stage.name}
                  </h3>
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
          <SectionHeading text={BOOKDU_BENTO.heading} />

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:items-stretch">
            <ScrollReveal className="sm:relative sm:h-full sm:min-h-[320px]">
              <Image
                src={BOOKDU_BENTO.left.src}
                alt="Bookdu banner"
                width={BOOKDU_BENTO.left.width}
                height={BOOKDU_BENTO.left.height}
                className="h-auto w-full rounded-[20px] object-cover sm:absolute sm:inset-0 sm:h-full"
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
          className="pointer-events-none absolute top-1/2 left-2 hidden h-[90%] -translate-y-1/2 rotate-180 text-foreground/[0.06] select-none sm:block"
          style={{
            writingMode: "vertical-rl",
            fontSize: "clamp(4.5rem, 14vw, 10rem)",
            fontWeight: 900,
            lineHeight: 1,
          }}
        >
          Analysis
        </span>

        <div className="relative mx-auto max-w-7xl">
          <SectionHeading text={BOOKDU_COMPETITOR_ANALYSIS.heading} />

          <div className="mt-8 flex flex-col gap-6 sm:hidden">
            {BOOKDU_COMPETITOR_ANALYSIS.rows.map((row) => (
              <div key={row.screen} className="rounded-[20px] border border-border p-6">
                <h3 className="text-base font-semibold text-foreground">
                  {row.screen}
                </h3>
                <div className="mt-4 rounded-[16px] bg-blue-50 p-4">
                  <h4 className="text-xs font-semibold tracking-[0.1em] text-blue-700 uppercase">
                    {BOOKDU_COMPETITOR_ANALYSIS.strengthHeading}
                  </h4>
                  <ul className="mt-2 flex list-disc flex-col gap-2 pl-5 text-sm text-muted-foreground">
                    {row.strength.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 rounded-[16px] bg-orange-50 p-4">
                  <h4 className="text-xs font-semibold tracking-[0.1em] text-orange-700 uppercase">
                    {BOOKDU_COMPETITOR_ANALYSIS.weaknessHeading}
                  </h4>
                  <ul className="mt-2 flex list-disc flex-col gap-2 pl-5 text-sm text-muted-foreground">
                    {row.weakness.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 hidden overflow-x-auto sm:block">
            <div
              className="grid min-w-[720px] gap-x-6"
              style={{
                gridTemplateColumns: "1fr 2fr 2fr",
                gridTemplateRows: `auto repeat(${BOOKDU_COMPETITOR_ANALYSIS.rows.length}, auto)`,
              }}
            >
              {/* Continuous single-color background panels, spanning the header and every data row behind the content. */}
              <div
                className="rounded-[20px] bg-blue-50"
                style={{ gridColumn: 2, gridRow: `1 / -1` }}
              />
              <div
                className="rounded-[20px] bg-orange-50"
                style={{ gridColumn: 3, gridRow: `1 / -1` }}
              />

              <div style={{ gridColumn: 1, gridRow: 1 }} />
              <h3
                className="relative px-6 pt-6 pb-2 text-sm font-semibold tracking-[0.1em] sm:text-base text-blue-700 uppercase"
                style={{ gridColumn: 2, gridRow: 1 }}
              >
                {BOOKDU_COMPETITOR_ANALYSIS.strengthHeading}
              </h3>
              <h3
                className="relative px-6 pt-6 pb-2 text-sm font-semibold tracking-[0.1em] sm:text-base text-orange-700 uppercase"
                style={{ gridColumn: 3, gridRow: 1 }}
              >
                {BOOKDU_COMPETITOR_ANALYSIS.weaknessHeading}
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
                    {row.strength.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <ul
                    className="relative flex list-disc flex-col gap-2 px-6 py-6 pl-10 text-sm text-muted-foreground"
                    style={{ gridColumn: 3, gridRow: i + 2 }}
                  >
                    {row.weakness.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-3 py-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading text={BOOKDU_USER_INTERVIEW.heading} />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {BOOKDU_USER_INTERVIEW.body}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="rounded-[20px] bg-muted p-8">
              <h3
                className="text-sm font-semibold tracking-[0.15em] uppercase"
                style={{ color: ACCENT }}
              >
                {BOOKDU_USER_INTERVIEW.questionsHeading}
              </h3>
              <ol className="mt-4 flex list-decimal flex-col gap-3 pl-5 text-sm text-muted-foreground sm:text-base">
                {BOOKDU_USER_INTERVIEW.questions.map((question) => (
                  <li key={question}>{question}</li>
                ))}
              </ol>
            </div>

            <div className="rounded-[20px] bg-muted p-8">
              <h3
                className="text-sm font-semibold tracking-[0.15em] uppercase"
                style={{ color: ACCENT }}
              >
                {BOOKDU_USER_INTERVIEW.answersHeading}
              </h3>
              <ol className="mt-4 flex list-decimal flex-col gap-3 pl-5 text-sm text-muted-foreground sm:text-base">
                {BOOKDU_USER_INTERVIEW.answers.map((answer) => (
                  <li key={answer}>{answer}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="px-3 py-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading text={BOOKDU_SURVEY_RESULTS.heading} />

          <div className="mt-10 grid grid-cols-1 items-center gap-10 sm:grid-cols-2">
            <ScrollReveal>
              <Image
                src={BOOKDU_SURVEY_RESULTS.image.src}
                alt="Survey results illustration"
                width={BOOKDU_SURVEY_RESULTS.image.width}
                height={BOOKDU_SURVEY_RESULTS.image.height}
                className="h-auto w-full max-w-sm"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <ul className="flex list-disc flex-col gap-4 pl-5 text-sm text-muted-foreground sm:text-base">
                {BOOKDU_SURVEY_RESULTS.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="px-3 py-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading text={BOOKDU_DEFINE.heading} />

          <div className="mt-8 flex flex-col gap-6">
            {BOOKDU_DEFINE.images.map((image, i) => (
              <div
                key={image.src}
                className={"heading" in image && image.heading ? "mt-10" : ""}
              >
                {"heading" in image && image.heading && (
                  <SubHeading text={image.heading} />
                )}
                {"scenario" in image && image.scenario && (
                  <p className="mb-4 max-w-3xl text-sm text-muted-foreground sm:text-base">
                    {image.scenario}
                  </p>
                )}
                <ScrollReveal delay={i * 0.05}>
                  <Image
                    src={image.src}
                    alt={`Define ${i + 1}`}
                    width={image.width}
                    height={image.height}
                    className="h-auto w-full rounded-[20px] object-cover"
                  />
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="mb-10 border-t border-white/10"
        style={{
          background: `linear-gradient(to bottom, ${DARK_BG} 0%, ${DARK_BG} 88%, transparent 100%)`,
        }}
      >
        <div className="px-3 py-8 pb-32 md:py-16 md:pb-40">
          <div className="mx-auto max-w-7xl">
            <div className="inline-block">
              <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl">
                {BOOKDU_VISUAL_DESIGN.heading}
              </h2>
              <span
                className="mt-2 block h-1 w-1/2"
                style={{ backgroundColor: FRAME_ACCENT }}
              />
            </div>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
              {BOOKDU_VISUAL_DESIGN.body}
            </p>

            <div className="mt-10 flex flex-col gap-24">
              {BOOKDU_VISUAL_DESIGN.images.map((image, i) => (
                <div key={image.src}>
                  {"heading" in image && image.heading && (
                    <SubHeading text={image.heading} dark />
                  )}
                  <ScrollReveal delay={i * 0.05}>
                    <Image
                      src={image.src}
                      alt={`Visual design ${i + 1}`}
                      width={image.width}
                      height={image.height}
                      className="h-auto w-full rounded-[20px] object-cover"
                    />
                  </ScrollReveal>
                </div>
              ))}
            </div>

            <div className="mt-14 inline-block">
              <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl">
                {BOOKDU_BRAND_IDENTITY.heading}
              </h2>
              <span className="mt-2 block h-1 w-1/2" style={{ backgroundColor: FRAME_ACCENT }} />
            </div>
            <div className="mt-8">
              <Image
                src={BOOKDU_BRAND_IDENTITY.image.src}
                alt={BOOKDU_BRAND_IDENTITY.heading}
                width={BOOKDU_BRAND_IDENTITY.image.width}
                height={BOOKDU_BRAND_IDENTITY.image.height}
                className="h-auto w-full rounded-[20px] object-cover"
              />
            </div>

            <div className="mt-14 inline-block">
              <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl">
                {BOOKDU_HOME_SCREEN.heading}
              </h2>
              <span className="mt-2 block h-1 w-1/2" style={{ backgroundColor: FRAME_ACCENT }} />
            </div>
            <div className="mt-8 flex flex-col gap-24">
              {BOOKDU_HOME_SCREEN.images.map((image, i) => (
                <ScrollReveal key={image.src} delay={i * 0.05}>
                  <Image
                    src={image.src}
                    alt={`Home screen ${i + 1}`}
                    width={image.width}
                    height={image.height}
                    className="h-auto w-full rounded-[20px] object-cover"
                  />
                </ScrollReveal>
              ))}
            </div>

            <div className="mt-14 flex justify-center">
              <button
                type="button"
                className="rounded-full px-10 py-4 text-lg font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: ACCENT }}
              >
                {BOOKDU_VISIT_WEBSITE.label}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

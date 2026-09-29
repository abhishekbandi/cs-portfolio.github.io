import { Image } from "@/components/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  SWASH_BANNER_1,
  SWASH_BANNER_2,
  SWASH_BRANDING,
  SWASH_COLORS,
  SWASH_DESIGN_SYSTEM,
  SWASH_FLOW,
  SWASH_GRID,
  SWASH_HERO,
  SWASH_META,
  SWASH_PROCESS,
  SWASH_TYPOGRAPHY,
  SWASH_UI_SCREENS,
} from "@/lib/swash-case-study";

const ACCENT = "#6E6ED2";
const HIRAGINO_FONT =
  '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif';

function SectionHeading({ text }: { text: string }) {
  const words = text.split(" ");
  const last = words.pop();

  return (
    <h2 className="mt-2 text-xl font-bold tracking-tight sm:text-2xl">
      <span className="text-black">{words.join(" ")} </span>
      <span style={{ color: ACCENT }}>{last}</span>
    </h2>
  );
}

export function SwashCaseStudy() {
  return (
    <div className="pb-24">
      <div className="w-full">
        <Image
          src={SWASH_HERO.src}
          alt="Swash hero banner"
          width={SWASH_HERO.width}
          height={SWASH_HERO.height}
          priority
          className="h-auto w-full object-cover"
        />
      </div>

      <div className="px-3 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-4">
            <div>
              <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                My Role
              </span>
              <p className="mt-2 text-lg font-medium text-foreground">
                {SWASH_META.role}
              </p>
            </div>

            <div className="sm:border-l sm:border-border sm:pl-10">
              <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                Deliverables
              </span>
              <ul className="mt-2 flex flex-col gap-1">
                {SWASH_META.deliverables.map((item) => (
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
                {SWASH_META.team.map((item) => (
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
              <p className="mt-2 text-lg font-medium text-foreground">
                {SWASH_META.year}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-3 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading text="Project Introduction" />

          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-[3fr_7fr] sm:items-start">
            <ScrollReveal>
              <Image
                src={SWASH_PROCESS.image.src}
                alt="Swash design process"
                width={SWASH_PROCESS.image.width}
                height={SWASH_PROCESS.image.height}
                className="h-auto w-full max-w-[200px]"
              />
            </ScrollReveal>

            <div className="flex flex-col gap-8">
              {SWASH_PROCESS.steps.map((step, i) => (
                <ScrollReveal key={step.title} delay={i * 0.05}>
                  <div className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-sm font-semibold text-foreground">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <ScrollReveal>
              <Image
                src={SWASH_BANNER_1.src}
                alt="Swash banner"
                width={SWASH_BANNER_1.width}
                height={SWASH_BANNER_1.height}
                className="h-auto w-full rounded-[20px] object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="px-3 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading text={SWASH_FLOW.heading} />

          <div className="mt-10 flex flex-col gap-10">
            {SWASH_FLOW.images.map((image, i) => (
              <ScrollReveal key={image.src} delay={i * 0.05}>
                <Image
                  src={image.src}
                  alt={`Swash flow ${i + 1}`}
                  width={image.width}
                  height={image.height}
                  className="h-auto w-full rounded-[20px] object-cover"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <div className="px-3 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading text={SWASH_GRID.heading} />

          <div className="mt-10">
            <ScrollReveal>
              <Image
                src={SWASH_GRID.image.src}
                alt="Swash grid system"
                width={SWASH_GRID.image.width}
                height={SWASH_GRID.image.height}
                className="h-auto w-full rounded-[20px] object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="px-3 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading text={SWASH_BRANDING.heading} />

          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-[3fr_7fr] sm:items-center">
            <ScrollReveal>
              <h3 className="text-4xl leading-tight font-semibold text-foreground sm:text-5xl">
                {SWASH_BRANDING.title.split(" ").map((word) => (
                  <span key={word} className="block">
                    {word}
                  </span>
                ))}
              </h3>
              <span className="mt-8 block text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                {SWASH_BRANDING.subheading}
              </span>
              <div className="mt-3 flex flex-col gap-3">
                {SWASH_BRANDING.description.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-relaxed text-muted-foreground sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="grid grid-cols-2 gap-10 p-8">
                {SWASH_BRANDING.images.map((image, i) => (
                  <Image
                    key={image.src}
                    src={image.src}
                    alt={`Branding guide ${i + 1}`}
                    width={image.width}
                    height={image.height}
                    className="h-auto w-full max-w-[220px] rounded-[20px] object-cover"
                  />
                ))}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal className="mt-16 flex justify-center">
            <Image
              src={SWASH_BANNER_2.src}
              alt="Swash banner"
              width={SWASH_BANNER_2.width}
              height={SWASH_BANNER_2.height}
              className="h-auto w-full max-w-sm object-cover"
            />
          </ScrollReveal>
        </div>
      </div>

      <div className="px-3 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading text={SWASH_TYPOGRAPHY.heading} />

          <div
            className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:items-start"
            style={{ fontFamily: HIRAGINO_FONT }}
          >
            <ScrollReveal>
              <div className="flex flex-wrap items-baseline gap-6">
                <span className="text-6xl font-semibold text-foreground sm:text-8xl md:text-9xl">
                  Aa
                </span>
                <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                  {SWASH_TYPOGRAPHY.fontName}
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="flex flex-wrap gap-4">
                {SWASH_TYPOGRAPHY.weights.map((weight) => (
                  <span
                    key={weight.label}
                    className={`text-sm text-foreground ${weight.className}`}
                  >
                    {weight.label}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-lg leading-relaxed text-foreground sm:text-xl">
                {SWASH_TYPOGRAPHY.uppercase}
              </p>
              <p className="mt-1 text-lg leading-relaxed text-foreground sm:text-xl">
                {SWASH_TYPOGRAPHY.lowercase}
              </p>
              <p className="mt-1 text-lg leading-relaxed text-foreground sm:text-xl">
                {SWASH_TYPOGRAPHY.numbers}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="px-3 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading text={SWASH_COLORS.heading} />

          <div className="mt-10 grid grid-cols-1 place-items-center gap-10 sm:grid-cols-3">
            {SWASH_COLORS.images.map((image, i) => (
              <ScrollReveal key={image.src} delay={i * 0.05}>
                <Image
                  src={image.src}
                  alt={`Swash colors ${i + 1}`}
                  width={image.width}
                  height={image.height}
                  className="h-auto w-full max-w-[220px] object-cover"
                />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-14 flex justify-center" delay={0.15}>
            <Image
              src={SWASH_COLORS.image2.src}
              alt="Swash colors 4"
              width={SWASH_COLORS.image2.width}
              height={SWASH_COLORS.image2.height}
              className="h-auto w-[70%] object-cover"
            />
          </ScrollReveal>
        </div>
      </div>

      <div style={{ backgroundColor: "#262942" }}>
        <div className="px-3 py-12 md:py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
              {SWASH_DESIGN_SYSTEM.heading}
            </h2>

            <div className="mt-10">
              <ScrollReveal>
                <Image
                  src={SWASH_DESIGN_SYSTEM.image.src}
                  alt="Swash design system"
                  width={SWASH_DESIGN_SYSTEM.image.width}
                  height={SWASH_DESIGN_SYSTEM.image.height}
                  className="h-auto w-full rounded-[20px] object-cover"
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      <div className="px-3 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading text={SWASH_UI_SCREENS.heading} />

          {/* No ScrollReveal here — several of these images are unusually
              tall, so its "30% of the element visible" trigger never fires. */}
          <div className="mt-10 flex flex-col gap-10">
            {SWASH_UI_SCREENS.images.map((image, i) => (
              <Image
                key={image.src}
                src={image.src}
                alt={`Swash UI screen ${i + 1}`}
                width={image.width}
                height={image.height}
                className="h-auto w-full rounded-[20px] object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

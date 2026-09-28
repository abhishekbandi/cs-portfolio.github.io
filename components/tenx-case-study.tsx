import { HoverLift } from "@/components/hover-lift";
import { Image } from "@/components/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { TenxColorSwatch } from "@/components/tenx-color-swatch";
import { TenxProgressBar } from "@/components/tenx-progress-bar";
import {
  TENX_BANNER_2,
  TENX_CLIENT_REQUEST,
  TENX_CLOSING,
  TENX_COLOR_PALETTE,
  TENX_COLOR_UI,
  TENX_HERO,
  TENX_LOGO_DESIGN,
  TENX_META,
  TENX_OVERVIEW,
  TENX_PROBLEM_SOLUTION,
  TENX_PROCESS,
  TENX_SCREEN_DESIGN,
  TENX_SCREEN_DESIGN_BANNER_2,
  TENX_SCREEN_FEATURE_BANNER,
  TENX_SCREEN_FEATURES,
  TENX_SCREEN_GALLERY_ROW_1,
  TENX_SCREEN_GALLERY_ROW_2,
  TENX_SOCIAL_MEDIA,
  TENX_TYPOGRAPHY,
  TENX_USER_RESEARCH,
} from "@/lib/tenx-case-study";

const ACCENT = "#B22551";
const BACKGROUND = "#222222";

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2">
      <span className="h-0.5 w-4 rounded-full" style={{ backgroundColor: ACCENT }} />
      <span className="text-sm text-foreground">{children}</span>
    </div>
  );
}

const PROCESS_OFFSETS = ["md:ml-0", "md:ml-[22%]", "md:ml-[45%]"];

function ProcessStepCard({
  step,
  index,
  total,
}: {
  step: { title: string; items: string[] };
  index: number;
  total: number;
}) {
  return (
    <div className={`w-full md:w-[55%] ${PROCESS_OFFSETS[index] ?? ""}`}>
      <HoverLift>
        <div className="rounded-[20px] bg-muted p-8">
          <h3 className="text-xl font-semibold text-foreground sm:text-2xl">{step.title}</h3>
          <ol className="mt-4 flex list-decimal flex-col gap-2 pl-5 text-sm text-muted-foreground sm:text-base">
            {step.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </HoverLift>
      <div className="mt-4 flex gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <TenxProgressBar key={i} active={i === index} color={ACCENT} />
        ))}
      </div>
    </div>
  );
}

export function TenxCaseStudy() {
  return (
    <div className="pb-24" style={{ backgroundColor: BACKGROUND }}>
      <div className="w-full">
        <Image
          src={TENX_HERO.bannerMobile.src}
          alt="TEN X hero banner"
          width={TENX_HERO.bannerMobile.width}
          height={TENX_HERO.bannerMobile.height}
          priority
          className="block h-auto w-full object-cover sm:hidden"
        />
        <Image
          src={TENX_HERO.banner.src}
          alt="TEN X hero banner"
          width={TENX_HERO.banner.width}
          height={TENX_HERO.banner.height}
          priority
          className="hidden h-auto w-full object-cover sm:block"
        />
      </div>

      <div className="px-3 py-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1fr_280px] md:gap-16">
              <div>
                <SectionEyebrow>{TENX_CLIENT_REQUEST.eyebrow}</SectionEyebrow>
                <p className="mt-6 text-base leading-relaxed text-foreground sm:text-lg">
                  {TENX_CLIENT_REQUEST.body}
                </p>
              </div>

              <HoverLift>
                <div
                  className="flex h-48 w-full flex-col items-center justify-center gap-4 rounded-[40px] p-8 text-center md:aspect-square md:h-auto"
                  style={{ backgroundColor: ACCENT }}
                >
                  <span className="text-5xl font-black tracking-tight text-white">
                    {TENX_CLIENT_REQUEST.stat.value}
                  </span>
                  <p className="text-base leading-snug text-white">
                    {TENX_CLIENT_REQUEST.stat.label}
                  </p>
                </div>
              </HoverLift>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="px-3 py-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="flex justify-end">
            <div className="w-full text-left md:w-[80%]">
              <SectionEyebrow>{TENX_OVERVIEW.eyebrow}</SectionEyebrow>
              <p className="mt-6 text-base leading-relaxed text-foreground sm:text-lg">
                {TENX_OVERVIEW.body}
              </p>

              <div className="mt-10 grid grid-cols-1 gap-8 rounded-[20px] bg-muted p-8 sm:grid-cols-2 sm:gap-10">
                {TENX_META.items.map((item, i) => (
                  <div
                    key={item.label}
                    className={`flex flex-col gap-2 ${
                      i > 0 ? "sm:border-l sm:border-border sm:pl-10" : ""
                    }`}
                  >
                    <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                      {item.label}
                    </span>
                    <span className="text-lg font-medium text-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="px-3 py-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <SectionEyebrow>{TENX_PROCESS.heading}</SectionEyebrow>
          </ScrollReveal>

          <div className="mt-16 flex flex-col gap-16">
            {TENX_PROCESS.steps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.05}>
                <ProcessStepCard step={step} index={i} total={TENX_PROCESS.steps.length} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.15}>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                {TENX_PROCESS.notes.left}
              </p>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                {TENX_PROCESS.notes.right}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="w-full">
        <Image
          src={TENX_BANNER_2.src}
          alt="TEN X banner"
          width={TENX_BANNER_2.width}
          height={TENX_BANNER_2.height}
          className="h-auto w-full object-cover"
        />
      </div>

      <div className="px-3 py-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <SectionEyebrow>{TENX_PROBLEM_SOLUTION.heading}</SectionEyebrow>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 items-stretch gap-10 md:grid-cols-2">
            <ScrollReveal className="h-full">
              <HoverLift className="h-full">
                <div className="flex h-full flex-col rounded-[20px] bg-muted p-8">
                  <Image
                    src={TENX_PROBLEM_SOLUTION.problem.icon}
                    alt="Problem"
                    width={90}
                    height={90}
                    className="h-14 w-14"
                  />
                  <h3 className="mt-4 text-xl font-medium text-foreground">
                    {TENX_PROBLEM_SOLUTION.problem.heading}
                  </h3>
                  <p className="mt-4 text-base text-muted-foreground">
                    {TENX_PROBLEM_SOLUTION.problem.body}
                  </p>
                </div>
              </HoverLift>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="h-full">
              <HoverLift className="h-full">
                <div className="flex h-full flex-col rounded-[20px] bg-muted p-8">
                  <Image
                    src={TENX_PROBLEM_SOLUTION.solution.icon}
                    alt="Solution"
                    width={90}
                    height={90}
                    className="h-14 w-14"
                  />
                  <h3 className="mt-4 text-xl font-medium text-foreground">
                    {TENX_PROBLEM_SOLUTION.solution.heading}
                  </h3>
                  <p className="mt-4 text-base text-muted-foreground">
                    {TENX_PROBLEM_SOLUTION.solution.body}
                  </p>
                </div>
              </HoverLift>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.15}>
            <div className="mt-16 grid grid-cols-1 items-center gap-10 md:grid-cols-[7fr_3fr]">
              <p className="text-xl leading-relaxed text-foreground sm:text-2xl">
                {TENX_PROBLEM_SOLUTION.intro}
              </p>
              <div className="flex justify-center md:justify-end">
                <Image
                  src={TENX_PROBLEM_SOLUTION.logo.src}
                  alt="TenX logo"
                  width={TENX_PROBLEM_SOLUTION.logo.width}
                  height={TENX_PROBLEM_SOLUTION.logo.height}
                  className="h-40 w-40 md:h-48 md:w-48"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="px-3 py-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <SectionEyebrow>{TENX_LOGO_DESIGN.heading}</SectionEyebrow>
          </ScrollReveal>

          <div className="mt-10 flex flex-col gap-6 sm:flex-row">
            {TENX_LOGO_DESIGN.bento.map((image, i) => (
              <ScrollReveal
                key={image.src}
                delay={i * 0.05}
                className={i === 0 ? "w-full sm:w-[60%]" : "w-full sm:w-[40%]"}
              >
                <HoverLift>
                  <Image
                    src={image.src}
                    alt={`TenX logo design ${i + 1}`}
                    width={image.width}
                    height={image.height}
                    className="h-80 w-full rounded-[20px] object-cover sm:h-[28rem]"
                  />
                </HoverLift>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.1}>
            <HoverLift>
              <div className="mt-6">
                <Image
                  src={TENX_LOGO_DESIGN.full.src}
                  alt="TenX logo design showcase"
                  width={TENX_LOGO_DESIGN.full.width}
                  height={TENX_LOGO_DESIGN.full.height}
                  className="h-auto w-full rounded-[20px] object-cover"
                />
              </div>
            </HoverLift>
          </ScrollReveal>
        </div>
      </div>

      <div className="px-3 py-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <SectionEyebrow>{TENX_TYPOGRAPHY.heading}</SectionEyebrow>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-10 grid grid-cols-1 items-end gap-6 md:grid-cols-2">
              <h3 className="text-5xl font-normal tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-9xl">
                {TENX_TYPOGRAPHY.typefaceName}
              </h3>
              <p className="text-xl leading-relaxed text-muted-foreground sm:text-2xl md:-ml-6">
                {TENX_TYPOGRAPHY.typefaceDesc}
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 flex flex-col gap-10 md:ml-10">
            {TENX_TYPOGRAPHY.scale.map((row, i) => (
              <ScrollReveal key={row.weight} delay={i * 0.05}>
                <div className="grid grid-cols-1 gap-2 border-b border-border pb-6 sm:grid-cols-[3fr_3fr_4fr] sm:items-start sm:gap-6">
                  <span className="text-2xl text-foreground sm:text-3xl">{row.weight}</span>
                  <p
                    className={`text-lg text-muted-foreground sm:text-xl ${row.weightClass}`}
                  >
                    {row.sample}
                  </p>
                  <span className="text-2xl text-foreground sm:pl-24 sm:text-3xl">{row.size}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-6">
            {TENX_COLOR_PALETTE.map((color, i) => (
              <ScrollReveal key={color.hex} delay={i * 0.05}>
                <TenxColorSwatch hex={color.hex} light={color.light} />
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-16 flex flex-col gap-6 sm:flex-row">
            {TENX_COLOR_UI.map((image, i) => (
              <ScrollReveal
                key={image.src}
                delay={i * 0.05}
                className={i === 0 ? "w-full sm:w-[30%]" : "w-full sm:w-[70%]"}
              >
                <Image
                  src={image.src}
                  alt={`TenX color UI ${i + 1}`}
                  width={image.width}
                  height={image.height}
                  className={
                    i === 0
                      ? "h-screen w-full rounded-[20px] object-cover sm:h-[60vh] md:h-[75vh]"
                      : "aspect-square h-auto w-full rounded-[20px] object-cover sm:h-[60vh] md:h-[75vh]"
                  }
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <div className="px-3 py-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <SectionEyebrow>{TENX_USER_RESEARCH.heading}</SectionEyebrow>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="flex justify-end">
            <div className="w-full text-left md:w-[70%]">
              <p className="mt-6 text-base leading-relaxed text-foreground sm:text-lg">
                {TENX_USER_RESEARCH.body}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="mt-10 flex justify-start">
            <HoverLift className="w-full sm:w-[40%]">
              <div className="rounded-[20px] bg-muted p-8">
                <h3 className="text-xl font-medium text-foreground">
                  {TENX_USER_RESEARCH.insights.heading}
                </h3>
                <p className="mt-4 text-base font-semibold text-foreground">
                  {TENX_USER_RESEARCH.insights.stat}
                </p>
                <p className="mt-2 text-base text-muted-foreground">
                  {TENX_USER_RESEARCH.insights.body}
                </p>
                <Image
                  src={TENX_USER_RESEARCH.insights.icon.src}
                  alt="User research insights"
                  width={TENX_USER_RESEARCH.insights.icon.width}
                  height={TENX_USER_RESEARCH.insights.icon.height}
                  className="mx-auto mt-4 block h-auto w-40"
                />
              </div>
            </HoverLift>
          </ScrollReveal>

          {TENX_USER_RESEARCH.findings.map((finding, i) => (
            <ScrollReveal
              key={finding.heading}
              delay={0.1 + i * 0.05}
              className={`mt-10 flex ${finding.align === "right" ? "justify-end" : "justify-start"}`}
            >
              <HoverLift className="w-full sm:w-[40%]">
                <div className="rounded-[20px] bg-muted p-8 text-left">
                  <h3 className="text-xl font-medium text-foreground">{finding.heading}</h3>
                  <p className="mt-2 text-base text-muted-foreground">{finding.body}</p>
                  <Image
                    src={finding.icon.src}
                    alt={finding.heading}
                    width={finding.icon.width}
                    height={finding.icon.height}
                    className="mx-auto mt-4 block h-auto w-40"
                  />
                </div>
              </HoverLift>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={0.2}>
            <div className="mt-10">
              <Image
                src={TENX_USER_RESEARCH.banner.src}
                alt="User research banner"
                width={TENX_USER_RESEARCH.banner.width}
                height={TENX_USER_RESEARCH.banner.height}
                className="h-auto w-full rounded-[20px] object-cover"
              />
            </div>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {TENX_USER_RESEARCH.banners.map((image, i) => (
              <ScrollReveal key={image.src} delay={i * 0.05}>
                <Image
                  src={image.src}
                  alt={`User research banner ${i + 2}`}
                  width={image.width}
                  height={image.height}
                  className="h-auto w-full rounded-[20px] object-cover"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <div className="px-3 py-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <SectionEyebrow>{TENX_SOCIAL_MEDIA.heading}</SectionEyebrow>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-10">
              <Image
                src={TENX_SOCIAL_MEDIA.banner.src}
                alt="Social media banner"
                width={TENX_SOCIAL_MEDIA.banner.width}
                height={TENX_SOCIAL_MEDIA.banner.height}
                className="h-auto w-full rounded-[20px] object-cover"
              />
            </div>
          </ScrollReveal>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {TENX_SOCIAL_MEDIA.gallery.map((image, i) => (
              <ScrollReveal key={image.src} delay={i * 0.05}>
                <HoverLift>
                  <Image
                    src={image.src}
                    alt={`Social media post ${i + 1}`}
                    width={image.width}
                    height={image.height}
                    className="h-auto w-full rounded-[20px] object-cover"
                  />
                </HoverLift>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <div className="px-3 py-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <SectionEyebrow>{TENX_SCREEN_DESIGN.heading}</SectionEyebrow>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <ScrollReveal>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {TENX_SCREEN_DESIGN.images.map((image, i) => (
                  <Image
                    key={image.src}
                    src={image.src}
                    alt={`Screen design ${i + 1}`}
                    width={image.width}
                    height={image.height}
                    className="h-auto w-full rounded-[20px] object-cover"
                  />
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <HoverLift>
                <div className="rounded-[20px] bg-muted p-8">
                  <p className="text-lg leading-relaxed text-foreground sm:text-xl">
                    {TENX_SCREEN_DESIGN.body}
                  </p>
                </div>
              </HoverLift>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <ScrollReveal className="mt-6 w-full">
        <Image
          src={TENX_SCREEN_DESIGN.banners[0].src}
          alt="Screen design banner 3"
          width={TENX_SCREEN_DESIGN.banners[0].width}
          height={TENX_SCREEN_DESIGN.banners[0].height}
          className="h-auto w-full object-cover"
        />
      </ScrollReveal>

      <div className="px-3 py-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal delay={0.05}>
            <div className="mt-6">
              <Image
                src={TENX_SCREEN_DESIGN.banners[1].src}
                alt="Screen design banner 4"
                width={TENX_SCREEN_DESIGN.banners[1].width}
                height={TENX_SCREEN_DESIGN.banners[1].height}
                className="h-auto w-full rounded-[20px] object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <HoverLift>
              <div className="mt-6 rounded-[20px] bg-muted p-8">
                <p className="px-6 text-center text-lg leading-relaxed font-normal text-foreground sm:px-16 sm:text-xl md:px-48">
                  {TENX_SCREEN_DESIGN.kycBody}
                </p>
              </div>
            </HoverLift>
          </ScrollReveal>
        </div>
      </div>

      <div className="px-3 py-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-16">
            {TENX_SCREEN_FEATURES.map((item, i) => {
              const imageBlock = (
                <HoverLift className="mx-auto block w-fit">
                  <Image
                    src={item.image.src}
                    alt="Screen design feature"
                    width={item.image.width}
                    height={item.image.height}
                    className="h-[380px] w-auto rounded-[20px] object-contain sm:h-[500px] md:h-[600px]"
                  />
                </HoverLift>
              );
              const textBlock = (
                <HoverLift className="mx-auto w-fit max-w-[32rem]">
                  <div className="rounded-[20px] bg-muted p-6">
                    {item.body ? (
                      <p className="text-lg leading-relaxed text-foreground sm:text-xl">
                        {item.body}
                      </p>
                    ) : (
                      <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
                        Copy coming soon
                      </p>
                    )}
                  </div>
                </HoverLift>
              );

              return (
                <ScrollReveal key={item.image.src} delay={i * 0.05}>
                  <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
                    <div className={item.imageSide === "right" ? "md:order-2" : ""}>
                      {imageBlock}
                    </div>
                    <div className={item.imageSide === "right" ? "md:order-1" : ""}>
                      {textBlock}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={0.1}>
            <div className="mt-16">
              <Image
                src={TENX_SCREEN_FEATURE_BANNER.src}
                alt="Screen design feature banner"
                width={TENX_SCREEN_FEATURE_BANNER.width}
                height={TENX_SCREEN_FEATURE_BANNER.height}
                className="h-auto w-full rounded-[20px] object-cover"
              />
            </div>
          </ScrollReveal>

          <div className="mt-16 flex flex-col items-center gap-6 sm:flex-row sm:snap-x sm:snap-mandatory sm:items-start sm:justify-center sm:overflow-x-auto sm:pb-2">
            {TENX_SCREEN_GALLERY_ROW_1.map((image, i) => (
              <ScrollReveal
                key={image.src}
                delay={i * 0.05}
                className="w-full sm:w-auto sm:shrink-0 sm:snap-start"
              >
                <Image
                  src={image.src}
                  alt={`Screen design ${i + 12}`}
                  width={image.width}
                  height={image.height}
                  className="h-auto w-full rounded-[20px] object-contain sm:w-[280px]"
                />
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center gap-6 sm:flex-row sm:snap-x sm:snap-mandatory sm:items-start sm:justify-center sm:gap-10 sm:overflow-x-auto sm:pb-2">
            {TENX_SCREEN_GALLERY_ROW_2.map((image, i) => (
              <ScrollReveal
                key={image.src}
                delay={i * 0.05}
                className="w-full sm:w-auto sm:shrink-0 sm:snap-start"
              >
                <Image
                  src={image.src}
                  alt={`Screen design ${i + 16}`}
                  width={image.width}
                  height={image.height}
                  className="h-auto w-full rounded-[20px] object-contain sm:w-[280px]"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <div className="px-3 py-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <Image
              src={TENX_SCREEN_DESIGN_BANNER_2.src}
              alt="Screen design banner"
              width={TENX_SCREEN_DESIGN_BANNER_2.width}
              height={TENX_SCREEN_DESIGN_BANNER_2.height}
              className="h-auto w-full rounded-[20px] object-cover"
            />
          </ScrollReveal>
        </div>
      </div>

      <div className="px-3 py-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex justify-center">
            <ScrollReveal className="w-full sm:w-[70%]">
              <HoverLift>
                <div className="rounded-[20px] bg-muted p-8 text-center sm:p-12">
                  <p className="text-xl leading-relaxed text-foreground sm:text-2xl">
                    {TENX_CLOSING.body}
                  </p>
                </div>
              </HoverLift>
            </ScrollReveal>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {TENX_CLOSING.marks.map((image, i) => (
              <ScrollReveal
                key={image.src}
                delay={i * 0.05}
                className={i === 1 ? "sm:mt-8" : ""}
              >
                <HoverLift>
                  <Image
                    src={image.src}
                    alt={`TenX mark ${i + 1}`}
                    width={image.width}
                    height={image.height}
                    className="h-80 w-full rounded-[20px] object-contain sm:h-96"
                  />
                </HoverLift>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <div className="px-3 pt-16">
        <div className="mx-auto flex max-w-7xl justify-center">
          <ScrollReveal>
            <HoverLift className="inline-block">
              <button
                type="button"
                className="group flex items-center gap-3 rounded-full py-1.5 pl-7 pr-1.5 text-white"
                style={{ backgroundColor: ACCENT }}
              >
                <span className="text-base font-semibold">Download the App</span>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 transition-colors duration-300 group-hover:bg-white/25">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <path d="M7 17L17 7M17 7H9M17 7V15" />
                  </svg>
                </span>
              </button>
            </HoverLift>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}

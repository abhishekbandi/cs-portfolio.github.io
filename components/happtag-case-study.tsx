import { BackgroundVideo } from "@/components/background-video";
import { CtaButton } from "@/components/cta-button";
import { Image } from "@/components/image";
import { ProjectMetaSection } from "@/components/project-meta-section";
import { ProjectVideoHero } from "@/components/project-video-hero";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  HAPPTAG_BRAND_DETAIL,
  HAPPTAG_BRANDING,
  HAPPTAG_DEFINE,
  HAPPTAG_FEATURE_BENTO,
  HAPPTAG_HERO,
  HAPPTAG_IDEATION,
  HAPPTAG_META,
  HAPPTAG_PACKAGING,
  HAPPTAG_PROTOTYPE,
  HAPPTAG_RESEARCH,
  HAPPTAG_UI,
  HAPPTAG_UI_SYSTEM,
  type BrandDetailBox,
  type ResearchCard,
} from "@/lib/happtag-case-study";

const ACCENT = "#1DA5DC";

function SectionHeading({
  eyebrow,
  children,
}: {
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      {eyebrow && (
        <span
          className="text-sm font-semibold tracking-widest uppercase"
          style={{ color: ACCENT }}
        >
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl leading-[1.05] font-black tracking-tight uppercase sm:text-4xl md:text-5xl">
        {children}
      </h2>
    </div>
  );
}

function ResearchCardView({ card }: { card: ResearchCard }) {
  return (
    <div className="flex h-full flex-col gap-2">
      <p className="min-h-[3rem] text-base text-muted-foreground">{card.desc}</p>
      <div
        className="flex min-h-44 items-center justify-between gap-4 rounded-full rounded-tl-none py-8 pl-6 pr-10"
        style={{ backgroundColor: card.color }}
      >
        <h4
          className={`text-lg leading-snug font-semibold text-foreground ${
            card.stat ? "w-[70%]" : "w-full"
          }`}
        >
          {card.heading}
        </h4>
        {card.stat && (
          <span className="shrink-0 text-5xl font-black tracking-tight text-foreground">
            {card.stat}
          </span>
        )}
      </div>
    </div>
  );
}

function BrandBox({ box, className = "" }: { box: BrandDetailBox | null; className?: string }) {
  if (!box) {
    return (
      <div
        className={`min-h-32 rounded-[20px] border border-dashed border-border p-8 ${className}`}
      >
        <p className="text-sm text-muted-foreground">Copy coming soon</p>
      </div>
    );
  }

  const textColor = box.light ? "text-white" : "text-foreground";
  const mutedTextColor = box.light ? "text-white/70" : "text-foreground/70";

  return (
    <div
      className={`min-h-32 rounded-[20px] p-8 ${className}`}
      style={{ backgroundColor: box.color }}
    >
      <div className="flex items-center justify-between gap-4">
        <span className={`text-xs font-semibold tracking-widest uppercase ${mutedTextColor}`}>
          {box.label}
        </span>
        <span className={`font-mono text-sm ${mutedTextColor}`}>{box.color}</span>
      </div>
      <h4 className={`mt-2 text-lg font-semibold ${textColor}`}>{box.heading}</h4>
      <p className={`mt-2 text-sm ${mutedTextColor}`}>{box.desc}</p>
    </div>
  );
}

function FeatureVideoGrid() {
  return (
    <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {HAPPTAG_PROTOTYPE.features.slice(0, 4).map((feature, i) => (
        <ScrollReveal key={feature.title} delay={i * 0.05} className="flex flex-col items-center text-center">
          <div className="w-full max-w-xs overflow-hidden rounded-[20px]">
            <BackgroundVideo
              src={HAPPTAG_PROTOTYPE.featureVideos[i]}
              className="aspect-[9/16] w-full object-cover"
            />
          </div>
          <h4 className="mt-1 text-lg font-semibold text-foreground">{feature.title}</h4>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">{feature.desc}</p>
        </ScrollReveal>
      ))}
    </div>
  );
}

export function HapptagCaseStudy() {
  return (
    <div className="pb-24">
      <ProjectVideoHero videoSrc={HAPPTAG_HERO.video} label="HappTag" />

      <ProjectMetaSection
        client={HAPPTAG_META.client}
        year={HAPPTAG_META.year}
        category={HAPPTAG_META.category}
        services={HAPPTAG_META.services}
      />

      <div className="overflow-x-clip px-3 py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
              {HAPPTAG_HERO.heading}
            </h2>
            <p className="mt-6 line-clamp-4 max-w-[85%] text-xl leading-relaxed text-foreground sm:text-2xl">
              {HAPPTAG_HERO.intro}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-[20px]">
              <Image
                src={HAPPTAG_HERO.illustration.src}
                alt="HappTag device illustration"
                width={HAPPTAG_HERO.illustration.width}
                height={HAPPTAG_HERO.illustration.height}
                className="h-auto w-full object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-24 grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
              <div className="mx-auto w-full max-w-xs overflow-hidden rounded-[20px]">
                <Image
                  src={HAPPTAG_HERO.illustration2.src}
                  alt="Child wearing HappTag for safety tracking"
                  width={HAPPTAG_HERO.illustration2.width}
                  height={HAPPTAG_HERO.illustration2.height}
                  className="h-auto w-full object-cover"
                />
              </div>
              <p className="text-xl leading-relaxed text-foreground sm:text-2xl">
                {HAPPTAG_HERO.tagline}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="relative mt-14">
              <div
                className="absolute top-1/2 left-1/2 -z-10 h-[17rem] w-[150vw] -translate-x-1/2 -translate-y-1/2 rotate-6"
                style={{ backgroundColor: "#5463DE" }}
              />
              <div className="overflow-hidden rounded-[20px]">
                <Image
                  src={HAPPTAG_HERO.illustration3.src}
                  alt="HappTag product lifestyle shot"
                  width={HAPPTAG_HERO.illustration3.width}
                  height={HAPPTAG_HERO.illustration3.height}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="px-3 py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
              {HAPPTAG_RESEARCH.heading}
            </h2>
            <p className="mt-6 max-w-[85%] text-xl leading-relaxed text-foreground sm:text-2xl">
              {HAPPTAG_RESEARCH.intro}
            </p>
          </ScrollReveal>

          <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {HAPPTAG_RESEARCH.cards.map((card, i) => (
              <ScrollReveal key={card.heading} delay={i * 0.05}>
                <ResearchCardView card={card} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <div className="px-3 py-24" style={{ backgroundColor: "#5463DE" }}>
        <div className="mx-auto max-w-7xl">
          <ScrollReveal className="flex flex-col items-center text-center">
            <span className="text-sm font-semibold tracking-widest text-white uppercase">
              {HAPPTAG_DEFINE.eyebrow}
            </span>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white sm:text-2xl">
              {HAPPTAG_DEFINE.definition}
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="overflow-x-clip px-3 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <ScrollReveal>
              <Image
                src="/projects-image/Happtag/icon_problem.svg"
                alt="Problem Statement"
                width={70}
                height={70}
                className="h-14 w-14"
              />
              <h3 className="mt-4 text-xl font-medium">Problem Statement</h3>
              <p className="mt-4 text-base text-muted-foreground">
                {HAPPTAG_DEFINE.problemStatement}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <Image
                src="/projects-image/Happtag/icon_goal.svg"
                alt="Goals"
                width={70}
                height={70}
                className="h-14 w-14"
              />
              <h3 className="mt-4 text-xl font-medium">Goals</h3>
              <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 text-base text-muted-foreground">
                {HAPPTAG_DEFINE.goals.map((goal) => (
                  <li key={goal}>{goal}</li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HAPPTAG_DEFINE.behaviorInsights.map((insight, i) => (
              <ScrollReveal key={insight} delay={i * 0.05}>
                <div className="flex flex-col gap-4 rounded-[20px] p-6">
                  <Image
                    src={`/projects-image/Happtag/icon_${i + 1}.svg`}
                    alt=""
                    width={292}
                    height={120}
                    className="h-auto w-full object-contain"
                  />
                  <p className="min-h-[5rem] text-sm leading-5 text-muted-foreground">
                    {insight}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.1}>
            <div
              className="mx-auto mt-14 w-[80%] rounded-full border-[24px] p-16 text-center"
              style={{ borderColor: "#5463DE" }}
            >
              <div className="mx-auto max-w-3xl">
                <h3 className="text-xl font-medium">Conclusion</h3>
                <p className="mt-4 text-base text-muted-foreground">
                  {HAPPTAG_DEFINE.conclusion}
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="relative left-1/2 mt-14 w-screen -translate-x-1/2">
              <Image
                src={HAPPTAG_HERO.illustration4.src}
                alt="HappTag full-width banner illustration"
                width={HAPPTAG_HERO.illustration4.width}
                height={HAPPTAG_HERO.illustration4.height}
                className="h-auto w-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="px-3 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-12 md:flex-row md:items-start md:gap-12">
            <div className="md:sticky md:top-24 md:w-[36%] md:shrink-0">
              <ScrollReveal>
                <SectionHeading>{HAPPTAG_IDEATION.heading}</SectionHeading>
                <p className="mt-6 max-w-md text-base text-muted-foreground">
                  {HAPPTAG_IDEATION.caption}
                </p>
              </ScrollReveal>
            </div>

            <div className="flex flex-1 flex-col gap-6">
              <ScrollReveal className="flex gap-6">
                <Image
                  src={HAPPTAG_IDEATION.products[0].src}
                  alt="Concept exploration 1"
                  width={HAPPTAG_IDEATION.products[0].width}
                  height={HAPPTAG_IDEATION.products[0].height}
                  className="h-auto min-w-0 flex-1 rounded-[30px] object-cover"
                />
                <Image
                  src={HAPPTAG_IDEATION.products[1].src}
                  alt="Concept exploration 2"
                  width={HAPPTAG_IDEATION.products[1].width}
                  height={HAPPTAG_IDEATION.products[1].height}
                  className="h-auto min-w-0 flex-1 rounded-[30px] object-cover"
                />
              </ScrollReveal>

              <ScrollReveal delay={0.05} className="flex gap-6">
                <Image
                  src={HAPPTAG_IDEATION.products[2].src}
                  alt="Concept exploration 3"
                  width={HAPPTAG_IDEATION.products[2].width}
                  height={HAPPTAG_IDEATION.products[2].height}
                  className="h-auto min-w-0 flex-[11] rounded-[30px] object-cover"
                />
                <Image
                  src={HAPPTAG_IDEATION.products[3].src}
                  alt="Concept exploration 4"
                  width={HAPPTAG_IDEATION.products[3].width}
                  height={HAPPTAG_IDEATION.products[3].height}
                  className="h-auto min-w-0 flex-[9] rounded-[30px] object-cover"
                />
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <Image
                  src={HAPPTAG_IDEATION.products[4].src}
                  alt="Concept exploration 5"
                  width={HAPPTAG_IDEATION.products[4].width}
                  height={HAPPTAG_IDEATION.products[4].height}
                  className="aspect-square h-auto w-full rounded-[30px] object-cover"
                />
              </ScrollReveal>

              <ScrollReveal delay={0.15} className="flex gap-6">
                <Image
                  src={HAPPTAG_IDEATION.products[5].src}
                  alt="Concept exploration 6"
                  width={HAPPTAG_IDEATION.products[5].width}
                  height={HAPPTAG_IDEATION.products[5].height}
                  className="h-auto min-w-0 flex-1 rounded-[30px] object-cover"
                />
                <Image
                  src={HAPPTAG_IDEATION.products[6].src}
                  alt="Concept exploration 7"
                  width={HAPPTAG_IDEATION.products[6].width}
                  height={HAPPTAG_IDEATION.products[6].height}
                  className="h-auto min-w-0 flex-1 rounded-[30px] object-cover"
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      <div className="px-3 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <ScrollReveal>
              <h2 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
                {HAPPTAG_BRANDING.eyebrow}
              </h2>
              <p className="mt-6 max-w-[85%] text-xl leading-relaxed text-foreground sm:text-2xl">
                {HAPPTAG_BRANDING.heading}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <Image
                src={HAPPTAG_BRANDING.logo.src}
                alt="HappTag logo"
                width={HAPPTAG_BRANDING.logo.width}
                height={HAPPTAG_BRANDING.logo.height}
                className="h-auto w-full object-contain md:scale-125"
              />
            </ScrollReveal>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
            <ScrollReveal>
              <Image
                src={HAPPTAG_BRAND_DETAIL.svg.src}
                alt="Brand color & typography detail"
                width={HAPPTAG_BRAND_DETAIL.svg.width}
                height={HAPPTAG_BRAND_DETAIL.svg.height}
                className="h-auto w-full object-contain"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.05} className="flex flex-col gap-6">
              <BrandBox box={HAPPTAG_BRAND_DETAIL.boxes[0]} />
              <BrandBox box={HAPPTAG_BRAND_DETAIL.boxes[1]} />
              <div className="flex gap-6">
                <BrandBox box={HAPPTAG_BRAND_DETAIL.boxes[2]} className="flex-[3]" />
                <BrandBox box={HAPPTAG_BRAND_DETAIL.boxes[3]} className="flex-[2]" />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.1}>
            <h2 className="mt-20 text-sm font-semibold tracking-widest text-muted-foreground uppercase">
              {HAPPTAG_BRANDING.typeface.heading}
            </h2>
          </ScrollReveal>

          <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
            <ScrollReveal>
              <Image
                src={HAPPTAG_BRANDING.typeface.icon.src}
                alt="ONEDAY typeface sample"
                width={HAPPTAG_BRANDING.typeface.icon.width}
                height={HAPPTAG_BRANDING.typeface.icon.height}
                className="h-auto w-full object-contain"
              />
              <p className="mt-6 text-base text-muted-foreground">
                {HAPPTAG_BRANDING.typeface.desc}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.05} className="flex flex-col gap-6">
              <p className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                1234567890
              </p>
              <p className="text-4xl font-bold tracking-tight break-words text-foreground sm:text-5xl">
                abcdefghijklmnopqrstuvwxyz
              </p>
              <div className="mt-4 flex flex-col gap-1">
                <span className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
                  Font Family
                </span>
                <span className="text-base text-foreground">
                  {HAPPTAG_BRANDING.typeface.weight}
                </span>
                <span className="text-base text-muted-foreground">
                  {HAPPTAG_BRANDING.typeface.styleNote}
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="px-3 py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
              {HAPPTAG_UI_SYSTEM.heading}
            </h2>
          </ScrollReveal>

          <div className="mt-6 flex flex-col items-center gap-6 md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-8">
            {HAPPTAG_UI_SYSTEM.images.map((image, i) => (
              <ScrollReveal key={image.src} delay={i * 0.05} className="w-full md:w-auto">
                <Image
                  src={image.src}
                  alt={`${HAPPTAG_UI_SYSTEM.heading} ${i + 1}`}
                  width={image.width}
                  height={image.height}
                  className="h-auto w-full rounded-[20px] object-contain md:h-[55vh] md:w-auto lg:h-[65vh]"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <div className="px-3 py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
              {HAPPTAG_UI.heading}
            </h2>
          </ScrollReveal>

          <div className="mt-10 flex flex-wrap items-start justify-center gap-6">
            {HAPPTAG_UI.hifi.map((image, i) => (
              <ScrollReveal key={image.src} delay={i * 0.05}>
                <Image
                  src={image.src}
                  alt={`High-fidelity UI mockup ${i + 1}`}
                  width={image.width}
                  height={image.height}
                  className="h-[60vh] w-auto rounded-[20px] object-contain sm:h-[75vh]"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <div className="px-3 py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
              {HAPPTAG_PROTOTYPE.heading}
            </h2>
          </ScrollReveal>

          <FeatureVideoGrid />
        </div>
      </div>

      <div className="px-3 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center justify-items-center gap-10 md:grid-cols-2 md:gap-16">
            <ScrollReveal className="flex flex-col items-center text-center">
              <div className="w-full max-w-xs overflow-hidden rounded-[20px]">
                <BackgroundVideo
                  src={HAPPTAG_PROTOTYPE.reverseFindMedia.src}
                  className="aspect-[9/16] w-full object-cover"
                />
              </div>
              <h4 className="mt-1 text-lg font-semibold text-foreground">
                {HAPPTAG_PROTOTYPE.features[4].title}
              </h4>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                {HAPPTAG_PROTOTYPE.features[4].desc}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.05} className="flex flex-col items-center text-center">
              <div className="w-full max-w-xs overflow-hidden rounded-[20px]">
                <Image
                  src={HAPPTAG_PROTOTYPE.fallDetectionMedia.src}
                  alt={HAPPTAG_PROTOTYPE.features[5].title}
                  width={HAPPTAG_PROTOTYPE.fallDetectionMedia.width}
                  height={HAPPTAG_PROTOTYPE.fallDetectionMedia.height}
                  className="h-auto w-full object-contain"
                />
              </div>
              <h4 className="mt-6 text-lg font-semibold text-foreground">
                {HAPPTAG_PROTOTYPE.features[5].title}
              </h4>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                {HAPPTAG_PROTOTYPE.features[5].desc}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="px-3 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[3fr_7fr] md:items-stretch">
            <ScrollReveal delay={0.15} className="flex flex-col gap-6">
              <div>
                <h2 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
                  {HAPPTAG_PROTOTYPE.featureEyebrow}
                </h2>
                <p className="mt-2 text-lg text-foreground">{HAPPTAG_PROTOTYPE.featureHeading}</p>
              </div>

              {HAPPTAG_FEATURE_BENTO.leftCards.map((item) => (
                <div key={item.src} className="overflow-hidden rounded-[20px]">
                  <BackgroundVideo src={item.src} className="aspect-square w-full object-cover" />
                </div>
              ))}
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="overflow-hidden rounded-[20px]">
              <Image
                src={HAPPTAG_FEATURE_BENTO.hero.src}
                alt="HappTag device"
                width={HAPPTAG_FEATURE_BENTO.hero.width}
                height={HAPPTAG_FEATURE_BENTO.hero.height}
                className="h-full w-full object-cover"
              />
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.25}>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {HAPPTAG_FEATURE_BENTO.bottomRow.map((item) => (
                <div key={item.src} className="overflow-hidden rounded-[20px]">
                  {item.type === "video" ? (
                    <BackgroundVideo src={item.src} className="aspect-square w-full object-cover" />
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      className="aspect-square w-full object-cover"
                    />
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="overflow-x-clip px-3 py-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal delay={0.1}>
            <div className="relative left-1/2 w-screen -translate-x-1/2">
              <Image
                src={HAPPTAG_PACKAGING.banner1.src}
                alt="Packaging banner 1"
                width={HAPPTAG_PACKAGING.banner1.width}
                height={HAPPTAG_PACKAGING.banner1.height}
                className="h-auto w-full object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-10 w-full overflow-hidden rounded-[20px]">
              <Image
                src={HAPPTAG_PACKAGING.banner2.src}
                alt="Packaging banner 2"
                width={HAPPTAG_PACKAGING.banner2.width}
                height={HAPPTAG_PACKAGING.banner2.height}
                className="h-auto w-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="px-3">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 rounded-[32px] bg-muted px-6 py-16 text-center">
          <h2 className="max-w-xl text-3xl font-black tracking-tight uppercase sm:text-4xl">
            Interested in working together?
          </h2>
          <CtaButton href="/contact" label="Let's talk" />
        </div>
      </div>
    </div>
  );
}

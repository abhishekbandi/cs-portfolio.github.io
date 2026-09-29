import { Image } from "@/components/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  PREPMYSKILLS_ABOUT,
  PREPMYSKILLS_DESIGN_PROCESS,
  PREPMYSKILLS_HERO,
  PREPMYSKILLS_INTRO_IMAGES,
  PREPMYSKILLS_META,
} from "@/lib/prepmyskills-case-study";

export function PrepmyskillsCaseStudy() {
  return (
    <div className="pb-24">
      <div className="w-full">
        <Image
          src={PREPMYSKILLS_HERO.src}
          alt="PrepMySkills hero banner"
          width={PREPMYSKILLS_HERO.width}
          height={PREPMYSKILLS_HERO.height}
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
                {PREPMYSKILLS_META.role}
              </p>
            </div>

            <div className="sm:border-l sm:border-border sm:pl-10">
              <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                Deliverables
              </span>
              <ul className="mt-2 flex flex-col gap-1">
                {PREPMYSKILLS_META.deliverables.map((item) => (
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
                {PREPMYSKILLS_META.team.map((item) => (
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
                {PREPMYSKILLS_META.year}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-3 py-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-10">
            {PREPMYSKILLS_INTRO_IMAGES.map((image, i) => (
              <ScrollReveal key={image.src} delay={i * 0.05}>
                <Image
                  src={image.src}
                  alt={`PrepMySkills intro ${i + 1}`}
                  width={image.width}
                  height={image.height}
                  className="h-auto w-full rounded-[20px] object-cover"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <div className="px-3 py-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-2">
            <ScrollReveal>
              <Image
                src={PREPMYSKILLS_ABOUT.image.src}
                alt="PrepMySkills about illustration"
                width={PREPMYSKILLS_ABOUT.image.width}
                height={PREPMYSKILLS_ABOUT.image.height}
                className="h-auto w-full"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg leading-relaxed text-foreground sm:text-xl">
                {PREPMYSKILLS_ABOUT.body}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="px-3 py-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-10">
            {PREPMYSKILLS_DESIGN_PROCESS.images.map((image, i) => {
              const isLast = i === PREPMYSKILLS_DESIGN_PROCESS.images.length - 1;

              // Several of these (mobile crops especially) render far taller
              // than the viewport, so a scroll-triggered reveal that waits
              // for a percentage of the element to be visible can get stuck
              // at opacity 0 forever. Render plain, no reveal animation.
              return (
                <div
                  key={image.src}
                  className={isLast ? "relative left-1/2 w-screen -translate-x-1/2" : ""}
                >
                  {"mobile" in image && image.mobile && (
                    <Image
                      src={image.mobile.src}
                      alt={`Design process ${i + 1}`}
                      width={image.mobile.width}
                      height={image.mobile.height}
                      className="h-auto w-full rounded-[20px] object-cover sm:hidden"
                    />
                  )}
                  <Image
                    src={image.src}
                    alt={`Design process ${i + 1}`}
                    width={image.width}
                    height={image.height}
                    className={`h-auto w-full object-cover ${
                      isLast ? "" : "rounded-[20px]"
                    } ${
                      ("mobile" in image && image.mobile) ||
                      ("hideOnMobile" in image && image.hideOnMobile)
                        ? "hidden sm:block"
                        : ""
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

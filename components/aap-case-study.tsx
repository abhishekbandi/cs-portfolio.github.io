import { Alegreya_Sans } from "next/font/google";
import { Image } from "@/components/image";
import {
  AAP_BANNER_1,
  AAP_BANNER_9,
  AAP_BANNERS_ROW,
  AAP_BUTTONS,
  AAP_CARDS,
  AAP_COLOR_PALETTE,
  AAP_COMPONENTS,
  AAP_DRAWER,
  AAP_ICON_BANNERS,
  AAP_DASHBOARD,
  AAP_DEFINED,
  AAP_DESIGN_ROLES,
  AAP_DESIGN_THINKING,
  AAP_FLOWS,
  AAP_GRID_SYSTEM,
  AAP_HERO,
  AAP_HOME_SCREEN,
  AAP_MEANINGFUL_FINDINGS,
  AAP_META,
  AAP_MODAL,
  AAP_PROBLEMS,
  AAP_RESEARCH,
  AAP_ROLES,
  AAP_SOLUTIONS,
  AAP_STICKY_TOAST,
  AAP_TYPOGRAPHY,
  AAP_UI_KIT,
  AAP_USER_JOURNEY,
  AAP_VISUAL_DESIGN,
} from "@/lib/aap-case-study";

const alegreyaSans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const JOURNEY_BACKGROUND = "#070B3C";

const ACCENT = "#3A6CF6";

function ResearchCard({
  number,
  heading,
  body,
  icon,
}: {
  number: number;
  heading: string;
  body: string;
  icon?: { src: string; width: number; height: number };
}) {
  return (
    <div className="flex flex-col gap-4 rounded-[20px] bg-muted p-6 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <span className="text-sm font-semibold" style={{ color: ACCENT }}>
          {String(number).padStart(2, "0")}
        </span>
        <h4 className="mt-2 text-lg font-semibold text-foreground">{heading}</h4>
        <p className="mt-2 text-sm text-muted-foreground">{body}</p>
      </div>
      {icon && (
        <Image
          src={icon.src}
          alt=""
          width={icon.width}
          height={icon.height}
          className="h-10 w-10 shrink-0"
        />
      )}
    </div>
  );
}

export function AapCaseStudy() {
  return (
    <div className="pb-24">
      <div className="w-full">
        <Image
          src={AAP_HERO.banner.src}
          alt="AAP hero banner"
          width={AAP_HERO.banner.width}
          height={AAP_HERO.banner.height}
          priority
          className="h-auto w-full object-cover"
        />
      </div>

      <div className="px-3 py-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            <div>
              <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                Role
              </span>
              <p className="mt-2 text-lg font-medium text-foreground">{AAP_META.role}</p>
            </div>

            <div className="sm:border-l sm:border-border sm:pl-10">
              <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                Timeline
              </span>
              <p className="mt-2 text-lg font-medium text-foreground">{AAP_META.timeline}</p>
            </div>

            <div className="sm:border-l sm:border-border sm:pl-10">
              <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
                Tools
              </span>
              <div className="mt-3 flex items-center gap-5">
                {AAP_META.tools.map((tool) => (
                  <Image
                    key={tool.name}
                    src={tool.icon.src}
                    alt={tool.name}
                    width={tool.icon.width}
                    height={tool.icon.height}
                    className="h-8 w-8"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-3 py-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            <span className="text-foreground">{AAP_ROLES.headingBlack}</span>
            <span style={{ color: ACCENT }}>{AAP_ROLES.headingAccent}</span>
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {AAP_ROLES.body}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {AAP_DESIGN_ROLES.map((role) => (
              <div key={role.heading} className="rounded-[20px] bg-muted p-8">
                <h3 className="text-xl font-semibold text-foreground">{role.heading}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {role.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-3">
        <div className="mx-auto max-w-7xl">
          <Image
            src={AAP_BANNER_1.src}
            alt="AAP banner"
            width={AAP_BANNER_1.width}
            height={AAP_BANNER_1.height}
            className="h-auto w-full rounded-[20px] object-cover"
          />
        </div>
      </div>

      <div className="px-3 py-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 sm:flex-row">
            {AAP_BANNERS_ROW.map((image, i) => (
              <div key={image.src} className="w-full sm:flex-1">
                <Image
                  src={image.src}
                  alt={`AAP banner ${i + 2}`}
                  width={image.width}
                  height={image.height}
                  className="h-auto w-full rounded-[20px] object-cover sm:h-[420px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-3 py-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <Image
            src={AAP_DESIGN_THINKING.src}
            alt="AAP design thinking process"
            width={AAP_DESIGN_THINKING.width}
            height={AAP_DESIGN_THINKING.height}
            className="h-auto w-full"
          />
        </div>
      </div>

      <div className="px-3 py-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            {AAP_RESEARCH.heading}
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {AAP_RESEARCH.body}
          </p>

          <h3 className="mt-14 text-xl font-semibold text-foreground sm:text-2xl">
            {AAP_RESEARCH.problemsHeading}
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {AAP_PROBLEMS.map((item) => (
              <ResearchCard key={item.heading} {...item} />
            ))}
          </div>

          <h3 className="mt-14 text-xl font-semibold text-foreground sm:text-2xl">
            {AAP_RESEARCH.solutionsHeading}
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {AAP_SOLUTIONS.map((item) => (
              <ResearchCard key={item.heading} {...item} />
            ))}
          </div>
        </div>
      </div>

      <div className="px-3 py-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            {AAP_MEANINGFUL_FINDINGS.heading}
          </h2>
          <Image
            src={AAP_MEANINGFUL_FINDINGS.image.src}
            alt={AAP_MEANINGFUL_FINDINGS.heading}
            width={AAP_MEANINGFUL_FINDINGS.image.width}
            height={AAP_MEANINGFUL_FINDINGS.image.height}
            className="mt-6 h-auto w-full rounded-[20px] object-cover"
          />
        </div>
      </div>

      <div className="px-3 py-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            {AAP_DEFINED.heading}
          </h2>

          <div className="mt-6 flex flex-col gap-6">
            {AAP_DEFINED.personas.map((image, i) => (
              <Image
                key={image.src}
                src={image.src}
                alt={`Persona ${i + 1}`}
                width={image.width}
                height={image.height}
                className="h-auto w-full rounded-[20px] object-cover"
              />
            ))}
          </div>

          <h3 className="mt-14 text-xl font-semibold text-foreground sm:text-2xl">
            {AAP_DEFINED.empathyHeading}
          </h3>
          <div className="mt-6 flex flex-col gap-6">
            {AAP_DEFINED.empathyMaps.map((image, i) => (
              <Image
                key={image.src}
                src={image.src}
                alt={`Empathy map ${i + 1}`}
                width={image.width}
                height={image.height}
                className="h-auto w-full rounded-[20px] object-cover"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="px-3 py-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div
            className="overflow-hidden rounded-[20px] p-6 sm:p-10"
            style={{ backgroundColor: JOURNEY_BACKGROUND }}
          >
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
              {AAP_USER_JOURNEY.heading}
            </h2>
            <p className="mt-3 text-base text-white/70">{AAP_USER_JOURNEY.scenario}</p>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead>
                  <tr>
                    {AAP_USER_JOURNEY.columns.map((column) => (
                      <th
                        key={column}
                        className="border-b border-white/15 pb-3 pr-6 text-xs font-medium tracking-[0.15em] text-white/50 uppercase"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {AAP_USER_JOURNEY.rows.map((row) => (
                    <tr key={row.stage} className="border-b border-white/10">
                      <td className="py-4 pr-6 text-sm font-semibold whitespace-nowrap text-white">
                        {row.stage}
                      </td>
                      <td className="py-4 pr-6 text-sm text-white/80">{row.action}</td>
                      <td className="py-4 pr-6 text-sm text-white/80">{row.thinking}</td>
                      <td className="py-4 pr-6 text-sm text-white/80">{row.solution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="px-3 py-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6">
            {AAP_FLOWS.map((image, i) => (
              <Image
                key={image.src}
                src={image.src}
                alt={`AAP flow ${i + 1}`}
                width={image.width}
                height={image.height}
                className="h-auto w-full rounded-[20px] object-cover"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="px-3 py-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            {AAP_HOME_SCREEN.heading}
          </h2>
          <Image
            src={AAP_HOME_SCREEN.image.src}
            alt={AAP_HOME_SCREEN.heading}
            width={AAP_HOME_SCREEN.image.width}
            height={AAP_HOME_SCREEN.image.height}
            className="mt-6 h-auto w-full rounded-[20px] object-cover"
          />
        </div>
      </div>

      <div className="px-3 py-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            {AAP_DASHBOARD.heading}
          </h2>
          <div className="mt-6 flex flex-col gap-6">
            {AAP_DASHBOARD.images.map((image, i) => (
              <Image
                key={image.src}
                src={image.src}
                alt={`${AAP_DASHBOARD.heading} ${i + 1}`}
                width={image.width}
                height={image.height}
                className="h-auto w-full rounded-[20px] object-cover"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="px-3 py-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            {AAP_VISUAL_DESIGN.heading}
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            {AAP_VISUAL_DESIGN.body}
          </p>
        </div>
      </div>

      <div className="px-3 py-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="flex min-h-[280px] flex-col rounded-[20px] bg-muted p-8">
              <div>
                <span
                  className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-white"
                  style={{ backgroundColor: ACCENT }}
                >
                  {AAP_TYPOGRAPHY.primaryFontLabel}
                </span>
                <p
                  className={`mt-6 text-3xl font-semibold text-foreground sm:text-4xl ${alegreyaSans.className}`}
                >
                  {AAP_TYPOGRAPHY.fontName}
                </p>
              </div>
              <div
                className={`mt-auto flex flex-col gap-1 pt-6 text-xl text-muted-foreground sm:text-2xl ${alegreyaSans.className}`}
              >
                {AAP_TYPOGRAPHY.sampleLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>

            <div
              className="flex min-h-[280px] flex-col justify-between overflow-hidden rounded-[20px] p-8"
              style={{ backgroundColor: ACCENT }}
            >
              <div className="flex flex-wrap gap-3">
                {AAP_TYPOGRAPHY.weights.map((weight) => (
                  <span
                    key={weight}
                    className="rounded-full bg-white/15 px-4 py-1.5 text-sm text-white"
                  >
                    {weight}
                  </span>
                ))}
              </div>
              <span
                className={`self-end text-6xl font-bold text-white sm:text-7xl md:text-8xl ${alegreyaSans.className}`}
              >
                Aa
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-3 py-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            {AAP_COLOR_PALETTE.heading}
          </h2>

          <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {AAP_COLOR_PALETTE.colors.map((color, i) => (
              <div
                key={`${color.hex}-${i}`}
                className="flex aspect-square flex-col justify-between rounded-[20px] p-5"
                style={{ backgroundColor: color.hex }}
              >
                <span
                  className={`text-sm font-semibold ${
                    color.light ? "text-[#061032]" : "text-white"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p
                    className={`text-sm font-medium ${
                      color.light ? "text-[#061032]" : "text-white"
                    }`}
                  >
                    {color.label}
                  </p>
                  <p
                    className={`mt-1 font-mono text-xs ${
                      color.light ? "text-[#061032]/70" : "text-white/70"
                    }`}
                  >
                    {color.hex}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-3 py-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            {AAP_GRID_SYSTEM.heading}
          </h2>
          <Image
            src={AAP_GRID_SYSTEM.banner.src}
            alt={AAP_GRID_SYSTEM.heading}
            width={AAP_GRID_SYSTEM.banner.width}
            height={AAP_GRID_SYSTEM.banner.height}
            className="mt-6 h-auto w-full rounded-[20px] object-cover"
          />

          <h3 className="mt-14 text-center text-xl font-semibold text-foreground sm:text-2xl">
            {AAP_UI_KIT.heading}
          </h3>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {AAP_UI_KIT.icons.map((icon, i) => (
              <Image
                key={icon.src}
                src={icon.src}
                alt={`UI kit icon ${i + 1}`}
                width={icon.width}
                height={icon.height}
                className="h-12 w-12"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="px-3 py-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 sm:flex-row">
            {AAP_ICON_BANNERS.map((image, i) => (
              <div key={image.src} className="w-full sm:flex-1">
                <Image
                  src={image.src}
                  alt={`Icon banner ${i + 1}`}
                  width={image.width}
                  height={image.height}
                  className="h-auto w-full rounded-[20px] object-cover"
                />
              </div>
            ))}
          </div>

          {AAP_BANNER_9 && (
            <Image
              src={AAP_BANNER_9.src}
              alt="AAP banner 9"
              width={AAP_BANNER_9.width}
              height={AAP_BANNER_9.height}
              className="mt-6 h-auto w-full rounded-[20px] object-cover"
            />
          )}
        </div>
      </div>

      <div className="px-3 py-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            {AAP_BUTTONS.heading}
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {AAP_BUTTONS.body}
          </p>

          <div className="mt-8 flex flex-col gap-6">
            {AAP_BUTTONS.images.map((image, i) => (
              <Image
                key={image.src}
                src={image.src}
                alt={`Buttons ${i + 1}`}
                width={image.width}
                height={image.height}
                className="h-auto w-full rounded-[20px] object-cover"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="px-3 py-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            {AAP_COMPONENTS.heading}
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {AAP_COMPONENTS.body}
          </p>

          <Image
            src={AAP_COMPONENTS.image.src}
            alt={AAP_COMPONENTS.heading}
            width={AAP_COMPONENTS.image.width}
            height={AAP_COMPONENTS.image.height}
            className="mt-8 h-auto w-full rounded-[20px] object-cover"
          />
        </div>
      </div>

      <div className="px-3 py-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            {AAP_STICKY_TOAST.heading}
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {AAP_STICKY_TOAST.body}
          </p>
          <Image
            src={AAP_STICKY_TOAST.image.src}
            alt={AAP_STICKY_TOAST.heading}
            width={AAP_STICKY_TOAST.image.width}
            height={AAP_STICKY_TOAST.image.height}
            className="mt-8 h-auto w-full rounded-[20px] object-cover"
          />
        </div>
      </div>

      <div className="px-3 py-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            {AAP_DRAWER.heading}
          </h2>
          <Image
            src={AAP_DRAWER.image.src}
            alt={AAP_DRAWER.heading}
            width={AAP_DRAWER.image.width}
            height={AAP_DRAWER.image.height}
            className="mt-6 h-auto w-full rounded-[20px] object-cover"
          />
        </div>
      </div>

      <div className="px-3 py-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            {AAP_MODAL.heading}
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {AAP_MODAL.body}
          </p>
          <Image
            src={AAP_MODAL.image.src}
            alt={AAP_MODAL.heading}
            width={AAP_MODAL.image.width}
            height={AAP_MODAL.image.height}
            className="mt-8 h-auto w-full rounded-[20px] object-cover"
          />
        </div>
      </div>

      <div className="px-3 py-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 sm:flex-row">
            {AAP_CARDS.map((card) => (
              <div key={card.heading} className="w-full sm:flex-1">
                <h3 className="text-xl font-semibold text-foreground">{card.heading}</h3>
                <Image
                  src={card.image.src}
                  alt={card.heading}
                  width={card.image.width}
                  height={card.image.height}
                  className="mt-4 h-auto w-full rounded-[20px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

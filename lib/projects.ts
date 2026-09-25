type ProjectMediaAsset =
  | { type: "image"; src: string; width: number; height: number }
  | { type: "video"; src: string };

export type Project = {
  slug: string;
  title: string;
  tags: string;
  media: ProjectMediaAsset;
  // Thumbnail used only on the /work grid — falls back to `media` when
  // absent. Kept separate so swapping the work-page thumbnail never
  // changes what the home page's project cards show.
  gridMedia?: ProjectMediaAsset;
  // Case study pages (/work/[slug]) don't use the site-wide light/dark
  // toggle — each one ships with a fixed theme baked into its design.
  // Set per project as its case study gets designed; defaults to "light".
  theme: "light" | "dark";
};

export const PROJECTS: Project[] = [
  {
    slug: "happtag",
    title: "Happtag (Tag it & forgot forgetting)",
    tags: "UI/UX Design · APP Design · Branding",
    media: { type: "video", src: "/work/case-study-Happtag-1-.mp4" },
    gridMedia: { type: "video", src: "/project-work/happtag.mp4" },
    theme: "light",
  },
  {
    slug: "ten-x",
    title: "TEN X money exchange platform",
    tags: "UI/UX Design · APP Design · Branding",
    media: { type: "image", src: "/work/ten-x.png", width: 503, height: 731 },
    gridMedia: {
      type: "image",
      src: "/project-work/tenx_money_exchange_platform.png",
      width: 3520,
      height: 2480,
    },
    theme: "dark",
  },
  {
    slug: "aap",
    title: "AAP (American Academy of Pediatrics App)",
    tags: "UI/UX Design · APP Design · Desktop App Design",
    media: { type: "image", src: "/work/aap.png", width: 998, height: 492 },
    gridMedia: {
      type: "image",
      src: "/project-work/prep.png",
      width: 3520,
      height: 2480,
    },
    theme: "light",
  },
  {
    slug: "bookdu",
    title:
      "Bookdu is a SaaS platform for discovering, reading, and tracking digital books.",
    tags: "UI/UX Design · APP Design · Branding",
    media: { type: "image", src: "/work/bookdu.png", width: 551, height: 766 },
    gridMedia: {
      type: "image",
      src: "/project-work/bookdu.png",
      width: 3520,
      height: 2480,
    },
    theme: "light",
  },
  {
    slug: "prepmyskills",
    title: "PREPMYSKILLS (App kids will get to know and explore the world)",
    tags: "UI/UX Design · Desktop App Design",
    media: {
      type: "image",
      src: "/work/prepmyskills.png",
      width: 601,
      height: 423,
    },
    gridMedia: {
      type: "image",
      src: "/project-work/prep_myskills.png",
      width: 3520,
      height: 2480,
    },
    theme: "light",
  },
  {
    slug: "ai-platform",
    title:
      "AI platform that allows our team to research, write, and generate content seamlessly without switching between multiple tools",
    tags: "Product Design · UI/UX Design · Desktop App Design",
    media: {
      type: "image",
      src: "/work/ai-platform.png",
      width: 923,
      height: 704,
    },
    gridMedia: {
      type: "image",
      src: "/project-work/nexa_knoweledge_agentic_ai_tool.png",
      width: 3520,
      height: 2480,
    },
    theme: "light",
  },
  {
    slug: "swash",
    title: "Swash (Desktop application design for monitoring breathing quality)",
    tags: "Product Design · UI/UX Design · APP Design · Desktop App Design",
    media: { type: "image", src: "/work/swash.png", width: 914, height: 503 },
    gridMedia: {
      type: "image",
      src: "/project-work/swash.png",
      width: 3520,
      height: 2480,
    },
    theme: "light",
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}

// Case study routes (/work/[slug]) are fixed-theme and don't expose the
// site-wide toggle. Returns the project's fixed theme for a case study
// route, or null for every other route (home/about/work listing/contact),
// which stay on the user's chosen theme.
export function getCaseStudyTheme(pathname: string): "light" | "dark" | null {
  const match = pathname.match(/^\/work\/([^/]+)\/?$/);
  if (!match) return null;
  return getProject(match[1])?.theme ?? null;
}

export type Project = {
  slug: string;
  title: string;
  tags: string;
  media:
    | { type: "image"; src: string; width: number; height: number }
    | { type: "video"; src: string };
};

export const PROJECTS: Project[] = [
  {
    slug: "happtag",
    title: "Happtag (Tag it & forgot forgetting)",
    tags: "Product Design · UI/UX Design · Branding",
    media: { type: "video", src: "/work/case-study-Happtag-1-.mp4" },
  },
  {
    slug: "ten-x",
    title: "TEN X money exchange platform",
    tags: "UI/UX Design · APP Design · Branding",
    media: { type: "image", src: "/work/ten-x.png", width: 503, height: 731 },
  },
  {
    slug: "aap",
    title: "AAP (American Academy of Pediatrics App)",
    tags: "UI/UX Design · APP Design · Desktop App Design",
    media: { type: "image", src: "/work/aap.png", width: 998, height: 492 },
  },
  {
    slug: "bookdu",
    title:
      "Bookdu is a SaaS platform for discovering, reading, and tracking digital books.",
    tags: "UI/UX Design · APP Design · Branding",
    media: { type: "image", src: "/work/bookdu.png", width: 551, height: 766 },
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
  },
  {
    slug: "swash",
    title: "Swash (Desktop application design for monitoring breathing quality)",
    tags: "Product Design · UI/UX Design · APP Design · Desktop App Design",
    media: { type: "image", src: "/work/swash.png", width: 914, height: 503 },
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}

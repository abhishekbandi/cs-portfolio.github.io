export const AAP_HERO = {
  banner: {
    src: "/projects/aap/app_prep_hero_image.png",
    width: 5760,
    height: 3900,
  },
};

export const AAP_ROLES = {
  headingBlack: "Roles & ",
  headingAccent: "Responsibilities",
  body: "I designed a PediAssess is a mobile-first self‑assessment and clinical readiness app designed for pediatricians. The app helps doctors periodically evaluate their knowledge, diagnostic accuracy, and adherence to updated pediatric guidelines through structured assessments, case-based questions, and performance insights.",
};

export const AAP_DESIGN_ROLES = [
  {
    heading: "UX Design",
    body: "Designed the end-to-end UX for PediAssess, a mobile-first self-assessment app for pediatricians. Conducted user research, created user flows, wireframes, and prototypes, and designed an intuitive interface for assessments, case-based learning, and performance tracking, with a focus on usability and clinical efficiency.",
  },
  {
    heading: "UI Design",
    body: "Designed a clean, intuitive, and mobile-first UI for PediAssess, creating visually consistent interfaces that simplify assessments, case-based learning, and performance tracking while enhancing usability and accessibility.",
  },
];

export const AAP_BANNER_1 = {
  src: "/projects/aap/app_prep_banner_1.png",
  width: 5760,
  height: 3152,
};

export const AAP_BANNERS_ROW = [
  { src: "/projects/aap/app_prep_banner_2.png", width: 2917, height: 2462 },
  { src: "/projects/aap/app_prep_banner_3.png", width: 2250, height: 2462 },
];

export const AAP_DESIGN_THINKING = {
  src: "/projects/aap/app_prep_design_thinking_process.svg",
  width: 1278,
  height: 130,
};

export const AAP_RESEARCH = {
  heading: "Research & Analysis",
  body: "Uncovering what pediatricians need — and what current tools fail to deliver. Eight core friction points mapped to eight targeted solutions.",
  problemsHeading: "Problem Identified",
  solutionsHeading: "Solutions",
};

type AapResearchCard = {
  number: number;
  heading: string;
  body: string;
  icon?: { src: string; width: number; height: number };
};

function aapIcon(n: number) {
  return { src: `/projects/aap/app_prep_icon_${n}.svg`, width: 100, height: 100 };
}

export const AAP_PROBLEMS: AapResearchCard[] = [
  {
    number: 1,
    heading: "Limited Time & High Workload",
    body: "Pediatricians need quick, efficient tools that fit into busy clinical schedules.",
    icon: aapIcon(1),
  },
  {
    number: 2,
    heading: "Fragmented Learning Experience",
    body: "Self-assessment and progress are scattered across multiple platforms, making learning difficult to manage.",
    icon: aapIcon(2),
  },
  {
    number: 3,
    heading: "Complex & Unclear User Experience",
    body: "Cluttered interfaces, limited feedback, and poor mobile usability reduce learning efficiency.",
    icon: aapIcon(3),
  },
  {
    number: 4,
    heading: "Lack of Confidence & Progress Visibility",
    body: "Limited progress tracking and unclear guideline sources make it difficult to measure improvement and build trust.",
    icon: aapIcon(4),
  },
];

export const AAP_SOLUTIONS: AapResearchCard[] = [
  {
    number: 1,
    heading: "Save Time with Smart Assessments",
    body: "Short, focused assessments and instant feedback help pediatricians learn efficiently within busy schedules.",
    icon: aapIcon(5),
  },
  {
    number: 2,
    heading: "Unified & Simple Experience",
    body: "A clean, mobile-first interface with a centralized dashboard makes assessments and progress easy to access.",
    icon: aapIcon(6),
  },
  {
    number: 3,
    heading: "Measure Progress Effectively",
    body: "Performance tracking and personalized insights help users monitor improvement over time.",
    icon: aapIcon(7),
  },
  {
    number: 4,
    heading: "Build Confidence Through Trust",
    body: "Evidence-based references and supportive feedback create a reliable, stress-free learning experience.",
    icon: aapIcon(8),
  },
];

export const AAP_MEANINGFUL_FINDINGS = {
  heading: "Meaningful Findings",
  image: {
    src: "/projects/aap/app_prep_meaningful_findings.png",
    width: 4521,
    height: 2828,
  },
};

export const AAP_DEFINED = {
  heading: "Defined",
  personas: [
    { src: "/projects/aap/app_prep_personal_1.png", width: 4600, height: 3864 },
    { src: "/projects/aap/app_prep_personal_2.png", width: 4676, height: 3444 },
  ],
  empathyHeading: "Empathy Mapping",
  empathyMaps: [
    { src: "/projects/aap/app_prep_empathy_map_1.png", width: 4688, height: 3028 },
    { src: "/projects/aap/app_prep_empathy_map_2.png", width: 5128, height: 2948 },
  ],
};

export const AAP_USER_JOURNEY = {
  heading: "User Journey",
  scenario: "Scenario: Pediatrician completing a quick self-assessment",
  columns: ["Stage", "User Action", "User Thinking / Feeling", "UX Solution"],
  rows: [
    {
      stage: "Discover",
      action: "Opens PediAssess during a short break",
      thinking: "“I only have a few minutes.”",
      solution: "Clear entry point with quick assessment option",
    },
    {
      stage: "Select",
      action: "Chooses a short assessment",
      thinking: "“This looks manageable.”",
      solution: "Time-bound assessments (5–10 mins)",
    },
    {
      stage: "Answer",
      action: "Responds to case-based questions",
      thinking: "“Easy to read, no clutter.”",
      solution: "Simple language and clean layout",
    },
    {
      stage: "Feedback",
      action: "Views correct / incorrect indicators",
      thinking: "“I know instantly where I stand.”",
      solution: "Immediate, clear feedback",
    },
    {
      stage: "Review",
      action: "Checks results summary",
      thinking: "“What should I improve?”",
      solution: "Strengths & improvement highlights",
    },
    {
      stage: "Track",
      action: "Views progress history",
      thinking: "“Am I improving over time?”",
      solution: "Progress tracking and trends",
    },
    {
      stage: "Learn",
      action: "Opens guideline reference",
      thinking: "“I trust this source.”",
      solution: "Verified pediatric guideline links",
    },
    {
      stage: "Exit",
      action: "Leaves app feeling confident",
      thinking: "“That was quick and useful.”",
      solution: "Supportive tone and no judgment",
    },
  ],
};

export const AAP_FLOWS = [
  { src: "/projects/aap/app_prep_flow_1.png", width: 5760, height: 5160 },
  { src: "/projects/aap/app_prep_flow_2.png", width: 5760, height: 7328 },
];

export const AAP_HOME_SCREEN = {
  heading: "Home Screen",
  image: { src: "/projects/aap/app_prep_banner_4.png", width: 1440, height: 1026 },
};

export const AAP_DASHBOARD = {
  heading: "Dashboard My Bank",
  images: [
    { src: "/projects/aap/app_prep_banner_5.png", width: 1440, height: 1020 },
    { src: "/projects/aap/app_prep_banner_6.png", width: 1440, height: 866 },
    { src: "/projects/aap/app_prep_banner_7.png", width: 1440, height: 2283 },
  ],
};

export const AAP_VISUAL_DESIGN = {
  heading: "Visual Design",
  body: "Design system and creating a clear and consistent healthcare experience.",
};

export const AAP_COLOR_PALETTE = {
  heading: "Color Palette",
  colors: [
    { label: "Primary Colour", hex: "#00247F", light: false },
    { label: "Secondary Colour", hex: "#304FFE", light: false },
    { label: "Neutral Colour", hex: "#ECEFF1", light: true },
    { label: "Neutral Colour", hex: "#B0BEC5", light: true },
    { label: "Neutral Colour", hex: "#4B505F", light: false },
  ],
};

export const AAP_TYPOGRAPHY = {
  primaryFontLabel: "Primary Font",
  fontName: "Alegreya Sans",
  sampleLines: [
    "0123456789",
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  ],
  weights: ["Regular", "Medium", "Semi Bold", "Bold"],
};

export const AAP_GRID_SYSTEM = {
  heading: "Grid System",
  banner: { src: "/projects/aap/app_prep_banner_8.png", width: 5760, height: 3520 },
};

export const AAP_UI_KIT = {
  heading: "UI Kit",
  icons: [
    { src: "/projects/aap/app_prep_uikit_icon_1.svg", width: 60, height: 60 },
    { src: "/projects/aap/app_prep_uikit_icon_2.svg", width: 60, height: 60 },
    { src: "/projects/aap/app_prep_uikit_icon_3.svg", width: 60, height: 60 },
    { src: "/projects/aap/app_prep_uikit_icon_4.svg", width: 60, height: 60 },
    { src: "/projects/aap/app_prep_uikit_icon_5.svg", width: 60, height: 60 },
  ],
};

export const AAP_ICON_BANNERS = [
  { src: "/projects/aap/app_prep_icon_banner_1.png", width: 2096, height: 2345 },
  { src: "/projects/aap/app_prep_icon_banner_2.png", width: 3088, height: 2340 },
];

export const AAP_BANNER_9: { src: string; width: number; height: number } | null = null;

export const AAP_BUTTONS = {
  heading: "Buttons",
  body: "Buttons are interactive elements that guide users to take action. They exist in multiple styles and sizes to ensure consistency and flexibility across the interface. Each type is optimized for different use cases, from primary calls-to-action to secondary support actions.",
  images: [
    { src: "/projects/aap/app_prep_banner_10.png", width: 5760, height: 5136 },
    { src: "/projects/aap/app_prep_banner_11.png", width: 5760, height: 2924 },
  ],
};

export const AAP_COMPONENTS = {
  heading: "Components",
  body: "Components are the building blocks of the interface. They ensure consistency, reusability, and scalability across the design system. From product cards and sticky bars to modals and bottom sheets, these components support key user interactions and streamline the overall experience.",
  image: { src: "/projects/aap/app_prep_banner_12.png", width: 5760, height: 2140 },
};

export const AAP_STICKY_TOAST = {
  heading: "Sticky Toast Bar",
  body: "A lightweight, non-intrusive notification that appears temporarily at the bottom of the screen to confirm an action or provide quick feedback, without interrupting the user's workflow.",
  image: { src: "/projects/aap/app_prep_banner_13.png", width: 5760, height: 3116 },
};

export const AAP_DRAWER = {
  heading: "Drawer",
  image: { src: "/projects/aap/app_prep_banner_14.png", width: 5760, height: 2320 },
};

export const AAP_MODAL = {
  heading: "Modal",
  body: "A focused overlay that captures user attention for critical actions or information, temporarily blocking interaction with the rest of the interface until a decision is made.",
  image: { src: "/projects/aap/app_prep_banner_15.png", width: 5760, height: 6112 },
};

export const AAP_CARDS = [
  {
    heading: "Product Card",
    image: { src: "/projects/aap/app_prep_banner_16.png", width: 2088, height: 1672 },
  },
  {
    heading: "Card Carousel",
    image: { src: "/projects/aap/app_prep_banner_17.png", width: 3308, height: 1672 },
  },
];

export const AAP_META = {
  role: "UI/UX Designer",
  timeline: "March 2025 – October 2025",
  tools: [
    { name: "Figma", icon: { src: "/about/figma-svgrepo-com.svg", width: 32, height: 32 } },
    { name: "ChatGPT", icon: { src: "/about/ChatGPT-Logo.svg", width: 320, height: 320 } },
    {
      name: "Adobe Illustrator",
      icon: { src: "/about/adobe-illustrator-svgrepo-com.svg", width: 32, height: 32 },
    },
  ],
};

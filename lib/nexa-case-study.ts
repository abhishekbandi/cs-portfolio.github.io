export const NEXA_HERO = {
  src: "/nexa/next_hero_image.png",
  width: 1440,
  height: 764,
};

export const NEXA_OVERVIEW = [
  { label: "Project Type", value: "Website Design / UI/UX Design" },
  {
    label: "Category",
    value: "AI Platform, SaaS Product, Web Application",
  },
  { label: "Tools Used", value: "Figma, Adobe Photoshop" },
  { label: "Location", value: "Bengaluru, India" },
  { label: "Year", value: "2026" },
];

export const NEXA_REQUIREMENT = {
  heading: "Client Requirement?",
  body: "We need an integrated AI platform that allows our team to research, write, and generate content seamlessly without switching between multiple tools.",
};

export const NEXA_ABOUT = {
  heading: "About the project",
  paragraphs: [
    "This project explores a modern landing page concept for an AI-powered platform designed to help users research, write, and create smarter using multiple AI models in one place.",
    "The goal of this design was to create a clean, intuitive, and conversion-focused interface that simplifies complex AI capabilities into an easy and engaging user experience.",
  ],
};

export const NEXA_BANNER_1 = {
  src: "/nexa/next_banner_1.png",
  width: 1440,
  height: 1356,
};

export const NEXA_ROADMAP = {
  heading: "The project road map & time line",
  items: [
    {
      icon: "/nexa/next_pt_icon_1.svg",
      title: "Discovery & Research",
      body: "Understood the client's goals, audience, and the AI platform landscape to define the scope and the key messages the landing page needed to communicate.",
    },
    {
      icon: "/nexa/next_pt_icon_2.svg",
      title: "Design & Iteration",
      body: "Explored layouts and visual directions, then refined the chosen concept into a clean, high-fidelity interface with a clear conversion flow.",
    },
    {
      icon: "/nexa/next_pt_icon_3.svg",
      title: "Review & Handoff",
      body: "Reviewed the designs with the team, incorporated feedback, and prepared responsive, developer-ready files for a smooth implementation.",
    },
  ],
};

export const NEXA_PROBLEM_SOLUTION = {
  heading: "Problems & Solutions",
  cards: [
    {
      label: "Problem",
      intro:
        "Many AI platforms suffer from complex interfaces, scattered tools, and poor user experience. Users often struggle to switch between multiple AI tools for writing, research, and content creation, which reduces productivity and creates friction in the workflow.",
      listTitle: "Key problems include:",
      points: [
        "Difficult navigation between AI tools",
        "Lack of unified workspace",
        "Overwhelming interface design",
        "Inefficient content creation workflow",
      ],
      outro: null,
      tags: ["#Survey", "#Problem"],
    },
    {
      label: "Solution",
      intro:
        "To solve these challenges, the platform was redesigned with a user-centered SaaS interface that simplifies workflows and provides easy access to AI-powered tools.",
      listTitle: "Key design solutions:",
      points: [
        "Clean and modern SaaS interface",
        "Smart card-based feature layout",
        "Integrated AI tools in one platform",
        "Clear hierarchy and improved navigation",
        "Minimal design for better usability",
      ],
      outro:
        "The design focuses on clarity, accessibility, and efficiency, enabling users to work faster while maintaining a visually engaging experience.",
      tags: ["#Survey", "#Solution"],
    },
  ],
};

export const NEXA_BANNER_2 = {
  src: "/nexa/next_banner_2.png",
  width: 1440,
  height: 1096,
};

export const NEXA_TYPOGRAPHY = {
  heading: "Typography & Colour",
  fontName: "Inter",
  description:
    "Inter — The typeface is characterized by its sophisticated modernist DNA and industrial precision. This makes it the perfect anchor for an AI-centric ecosystem, ensuring that complex data remains accessible while maintaining a premium, future-forward aesthetic.",
  weights: [
    { label: "Medium", className: "font-medium" },
    { label: "Semibold", className: "font-semibold" },
    { label: "Bold", className: "font-bold" },
  ],
  uppercase: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z",
  lowercase: "a b c d e f g h i j k l m n o p q r s t u v w x y z",
  numbers: "0 1 2 3 4 5 6 7 8 9",
};

export const NEXA_COLORS = [
  { label: "Primary", swatches: ["#7B00FF"] },
  { label: "Secondary", swatches: ["#FB21FF"] },
  { label: "Neutral", swatches: ["#F9FAFB", "#383E4B"] },
];

export const NEXA_ADVANCED_TOOL = {
  heading: "Advance AI Tool",
  body: "As an advanced AI user, you can work smarter with tools that Chat with any PDF+F to extract insights, translate text with natural accuracy.",
};

export const NEXA_SERVICES = [
  {
    icon: "/nexa/next_service_icon_1.svg",
    label: "Courses",
    caption: "Create a new course with AI.",
    title: "Courses",
    body: "Create engaging, structured, and personalized courses effortlessly with AI. Simply provide a topic, learning objectives, or source materials, and the AI generates a complete course structure with modules, lessons, learning activities, assessments, and supporting resources. Review, customize, and refine the content to match your audience and learning goals, significantly reducing course development time while maintaining quality and consistency.",
  },
  {
    icon: "/nexa/next_service_icon_2.svg",
    label: "Ancillary",
    caption: "Create teaching resource and guide.",
    title: "Create Teaching Resources & Guides",
    body: "Create comprehensive teaching resources and guides with AI to support educators throughout the learning journey. Generate lesson plans, study guides, discussion materials, activities, worksheets, assessments, and reference resources based on course content and learning objectives. Easily customize and organize each resource to match different teaching styles, learner needs, and educational goals.",
  },
  {
    icon: "/nexa/next_service_icon_3.svg",
    label: "Content Analyzer",
    caption: "Align content to curriculum.",
    title: "Content Analyzer",
    body: "Analyze and evaluate learning content with AI to ensure it is clear, accurate, engaging, and aligned with defined learning objectives. The Content Analyzer identifies gaps, inconsistencies, readability issues, and opportunities for improvement while providing actionable recommendations. It helps educators and content creators refine their materials, maintain quality and consistency, and deliver a more effective learning experience.",
  },
  {
    icon: "/nexa/next_service_icon_4.svg",
    label: "Translations",
    caption: "Translate and localize content.",
    title: "Translations",
    body: "Translate courses, learning materials, and teaching resources into multiple languages with AI while preserving the original meaning, tone, and educational context. Quickly adapt content for diverse audiences, maintain consistent terminology, and ensure translated materials remain clear, accurate, and culturally appropriate. This helps organizations scale their learning content globally and deliver accessible experiences to learners across different regions.",
  },
];

export const NEXA_HIFI = {
  src: "/nexa/next_hifi_1.png",
  width: 1440,
  height: 1152,
};

const NEXA_MOCKUP_IMAGES = Array.from({ length: 9 }, (_, i) => ({
  src: `/nexa/next_hifi_mock_img_${i + 1}.png`,
  alt: `Nexa website mockup ${i + 1}`,
}));

// Four marquee rows, each starting at a different image so the same nine
// mockups repeat without the rows lining up.
export const NEXA_MOCKUPS = Array.from({ length: 4 }, (_, row) => {
  const offset = row * 2;
  return [
    ...NEXA_MOCKUP_IMAGES.slice(offset),
    ...NEXA_MOCKUP_IMAGES.slice(0, offset),
  ];
});

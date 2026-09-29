export const BOOKDU_HERO = {
  src: "/projects/bookdu/bookdu_hero_image.png",
  width: 5760,
  height: 3600,
};

export const BOOKDU_META = {
  role: "UX - Interaction Design, Visual Design, User Flows, Rapid Prototyping",
  deliverables: ["Component Libraries", "User Interviews", "High Fidelity Designs"],
  team: ["Marketers", "Product Managers", "Developers (Web and Mobile)"],
  year: "2024",
};

export const BOOKDU_INTRO = {
  body: "Easy to use holistic knowledge platform offers ebooks and audio video player reader as a service RWS and journals",
  image: {
    src: "/projects/bookdu/booku_banner_1.png",
    width: 2720,
    height: 2706,
  },
};

export const BOOKDU_BRIEF = [
  {
    heading: "Problem Statement",
    lines: [
      "Finding the right book to read for professionals & Students can be a frustrating experience, Friends and colleagues have to look out for things to Using multiple apps for \"Reading, Audio, and Video books\".",
      "One platform for all B2B & B2C having a smooth journey experience.",
    ],
  },
  {
    heading: "Brief from Stakeholder",
    lines: [
      "Till now they have a EUP (End-User-Portal) which is tracked by the tenant admin.",
      "In order to reach more clients.",
      "They want to build a mobile app.",
      "Required a hybrid mobile app for EUA (End-User-Application).",
      "Come up with a user-centric approach to the app, adding features and flows that make it.",
    ],
  },
  {
    heading: "Business Goal",
    lines: [
      "One App design for B2B and B2C.",
      "It's not only for books it should also support the Journals hierarchy.",
      "Search should support features like \"Advance Search\".",
      "Types of Recommendations.",
    ],
  },
  {
    heading: "Solution",
    lines: [
      "A digital platform where all types of user's can connect, and look for their interest type products like ebooks, Audio, Video.",
    ],
  },
];

export const BOOKDU_COMPETITOR_ANALYSIS = {
  heading: "Competitor Analysis",
  strengthHeading: "Strength",
  weaknessHeading: "Weakness",
  rows: [
    {
      screen: "Landing Screen",
      strength: [
        "Easy-to-identify language change.",
        "Priority given to search bar.",
        "Displaying promotional banner.",
      ],
      weakness: [
        "No main navigation bar at the bottom or top.",
        "Products are not visible at a glance and require scrolling.",
        "Too much unhelpful content on the screen.",
      ],
    },
    {
      screen: "Product Detail Screen",
      strength: [
        "Two cards with minimal text look good.",
        "Complete information fits on the screen.",
        "Clear discussion of the price range.",
        "High importance given to call to action.",
        "Video added for user assistance on 'How it works'.",
      ],
      weakness: [
        "No mobile app feeling. Looks like a web page.",
        "I can't go back to the previous screen.",
        "It's more of feels more like a responsive web page.",
        "No similar product recommendations.",
      ],
    },
    {
      screen: "Add to Cart",
      strength: [
        "Show the number of products added in detail.",
        "User can change the subscription method using the dropdown.",
      ],
      weakness: [
        "Unable to remove a product from the cart.",
        "Unable to go back to the previous screen.",
      ],
    },
    {
      screen: "Check Process",
      strength: ["Gather Complete Information."],
      weakness: [
        "No smooth checkout process. 5-step process",
        "Not all Payment methods are available.",
      ],
    },
    {
      screen: "History",
      strength: ["N/A"],
      weakness: ["Unable to track my purchase history."],
    },
  ],
};

export const BOOKDU_DESIGN_PROCESS = {
  heading: "Design Process",
  stages: [
    {
      icon: { src: "/projects/bookdu/booku_dp_icon_1.svg", width: 61, height: 61 },
      name: "Empathize",
      items: [
        "User Interview",
        "User Research",
        "Competitive Analysis",
        "Affinity Mapping",
      ],
    },
    {
      icon: { src: "/projects/bookdu/booku_dp_icon_2.svg", width: 61, height: 61 },
      name: "Define",
      items: ["Personas", "Empathy Map", "Journey Map"],
    },
    {
      icon: { src: "/projects/bookdu/booku_dp_icon_3.svg", width: 61, height: 61 },
      name: "Ideate",
      items: ["User Flow", "Card Sorting", "Information Architecture"],
    },
    {
      icon: { src: "/projects/bookdu/booku_dp_icon_4.svg", width: 61, height: 61 },
      name: "Design",
      items: ["Low Fidelity", "High Fidelity"],
    },
    {
      icon: { src: "/projects/bookdu/booku_dp_icon_5.svg", width: 61, height: 61 },
      name: "Test",
      items: ["Usability Test", "Implementing Feedback"],
    },
  ],
};

type BookduImage = { src: string; width: number; height: number };

export const BOOKDU_BENTO: {
  heading: string;
  left: BookduImage;
  rightTop: BookduImage | null;
  rightBottom: BookduImage | null;
} = {
  heading: "Empathize",
  left: { src: "/projects/bookdu/booku_banner_2.png", width: 1972, height: 4436 },
  rightTop: { src: "/projects/bookdu/booku_flow_1.png", width: 2720, height: 2236 },
  rightBottom: { src: "/projects/bookdu/booku_flow_2.png", width: 2720, height: 2006 },
};

export const BOOKDU_USER_INTERVIEW = {
  heading: "User Interview: Qualitative Interview",
  body: "I conducted a survey where I asked potential users via a questionnaire about the challenges they face with book apps. The questions are as follows:",
  questionsHeading: "Question",
  answersHeading: "Common answers",
  questions: [
    "What's your age?",
    "What's your gender?",
    "What do you do for a living?",
    "Do you read books or listen to audio books?",
    "What type of books do you read?",
    "How frequently do you read or listen to a book?",
    "Do you prefer reading online or offline?",
    "How often do you purchase a book or journal?",
    "From where would you like to purchase a book or journal?",
    "How would you feel about reading books online?",
    "How would you feel about that app, features and UI?",
  ],
  answers: [
    "18 to 64",
    "Both",
    "Students, Professors, Doctors, Nurses, Technicians, Doctorates, Researchers",
    "Depends on book",
    "Education, Research, Knowledge, Novels, Self Learning",
    "Daily, weekly twice, monthly 8 days.",
    "Mostly online, walk to the library to read offline.",
    "Monthly 1, 2, every 6 months, read article every day.",
    "Online stores, apps, yearly subscription from the publisher.",
    "Online books are more easy access and ready to read.",
    "Only a few of the apps have required features, for every product type need to download different types of apps.",
  ],
};

export const BOOKDU_DEFINE = {
  heading: "Define",
  images: [
    { src: "/projects/bookdu/booku_personal_1.png", width: 4964, height: 2860 },
    { src: "/projects/bookdu/booku_personal_2.png", width: 4937, height: 2788 },
    {
      src: "/projects/bookdu/booku_empathy_mapping.png",
      width: 5760,
      height: 2532,
      heading: "Empathy Mapping",
    },
    {
      src: "/projects/bookdu/booku_journey_mapping.png",
      width: 5600,
      height: 3592,
      heading: "Journey Mapping",
      scenario:
        "Scenario: Most book readers are transformed to digital. Search for the best app with a good user experience and necessary features which gives them a good reading experience and a smooth exit process.",
    },
    {
      src: "/projects/bookdu/booku_site_map_1.png",
      width: 5688,
      height: 2628,
      heading: "Site Map",
    },
    {
      src: "/projects/bookdu/booku_site_map_2.png",
      width: 5760,
      height: 1592,
      heading: "User Flow B2B",
    },
    {
      src: "/projects/bookdu/booku_site_map_3.png",
      width: 5760,
      height: 1656,
      heading: "User Flow B2C",
    },
    {
      src: "/projects/bookdu/booku_mifi.png",
      width: 5760,
      height: 8606,
      heading: "Mid Fidelity",
    },
  ],
};

export const BOOKDU_SURVEY_RESULTS = {
  heading: "Survey & interview results",
  image: {
    src: "/projects/bookdu/booku_survey_illustrate.svg",
    width: 207,
    height: 207,
  },
  points: [
    "Users don't seem to care much about setting goals or personal reading stats.",
    "Users care more about keeping track of books they want to read.",
    "Users are interested in what their friends and family are reading.",
    "New books are primarily discovered by looking at and hearing about them.",
    "Users especially like recommendations from people they trust, even more so from people they know personally.",
    "Users prefer reviews from trusted sources, such as news sites, blogs, or book critics, rather than from random people.",
    "Useful, accurate recommendations are helpful because they filter through the overwhelming number of books available.",
  ],
};

export const BOOKDU_VISUAL_DESIGN = {
  heading: "Visual Design",
  body: "It enhances the user experience by aligning aesthetics with functionality, ensuring athletes enjoy a seamless and visually appealing booking process.",
  images: [
    { src: "/projects/bookdu/booku_vd_1.svg", width: 1074, height: 310 },
    { src: "/projects/bookdu/booku_vd_2.svg", width: 1440, height: 609 },
    { src: "/projects/bookdu/booku_vd_3.svg", width: 1440, height: 293 },
    {
      src: "/projects/bookdu/booku_vd_4.svg",
      width: 1440,
      height: 531,
      heading: "Icons",
    },
    {
      src: "/projects/bookdu/booku_vd_5.png",
      width: 5600,
      height: 2278,
      heading: "Illustrations",
    },
    {
      src: "/projects/bookdu/booku_vd_6.png",
      width: 5760,
      height: 2708,
      heading: "Design System",
    },
  ],
};

export const BOOKDU_BRAND_IDENTITY = {
  heading: "Brand Identity",
  image: { src: "/projects/bookdu/booku_brand_1.png", width: 5760, height: 2479 },
};

export const BOOKDU_HOME_SCREEN = {
  heading: "Home Screen",
  images: [
    { src: "/projects/bookdu/booku_design_1.png", width: 5760, height: 4096 },
    { src: "/projects/bookdu/booku_design_2.png", width: 5760, height: 8192 },
    { src: "/projects/bookdu/booku_design_3.png", width: 5760, height: 5119 },
    { src: "/projects/bookdu/booku_design_4.png", width: 5760, height: 4088 },
    { src: "/projects/bookdu/booku_design_5.png", width: 5760, height: 3152 },
    { src: "/projects/bookdu/booku_design_6.png", width: 5760, height: 1499 },
  ],
};

export const BOOKDU_VISIT_WEBSITE = {
  label: "Visit Website",
  href: null as string | null,
};

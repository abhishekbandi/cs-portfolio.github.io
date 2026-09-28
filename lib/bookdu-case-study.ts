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
  left: BookduImage;
  rightTop: BookduImage | null;
  rightBottom: BookduImage | null;
} = {
  left: { src: "/projects/bookdu/booku_banner_2.png", width: 1972, height: 4436 },
  rightTop: null,
  rightBottom: null,
};

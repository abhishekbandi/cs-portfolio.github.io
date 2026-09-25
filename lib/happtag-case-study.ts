// Copy sourced from the Figma case-study design (file "Contract", node 37:8).

export const HAPPTAG_META = {
  client: "Happlab",
  year: "2025",
  category: "PRODUCT",
  services: "PRODUCT DESIGN, UX/UI, VISUAL DESIGN",
};

export const HAPPTAG_HERO = {
  heading: "Tag It & Forget Forgetting!",
  video: "/work/case-study-Happtag-1-.mp4",
  intro:
    "Introduced in April 2025, HappTag is a compact, Bluetooth-enabled tracking device built in India. It integrates securely with the SMARTHAPPS Find My network—featuring Precision Finding, Lost Mode, and end-to-end encryption—to help users easily and privately locate personal items like keys, wallets, and bags.",
  illustration: {
    src: "/projects-image/Happtag/illustration_1.png",
    width: 3476,
    height: 3704,
  },
  illustration2: {
    src: "/projects-image/Happtag/illustration_2.png",
    width: 1277,
    height: 668,
  },
  illustration3: {
    src: "/projects-image/Happtag/illustration_3.png",
    width: 5760,
    height: 3195,
  },
  illustration4: {
    src: "/projects-image/Happtag/illustration_4.png",
    width: 1440,
    height: 1272,
  },
  tagline:
    "Ensure your little one's adventures are safeguarded with HappTag — the tiny device making big strides in child safety. Every step is a secure step, because their journey matters.",
};

export type ResearchCard = {
  stat?: string;
  heading: string;
  desc: string;
  color: string;
};

export const HAPPTAG_RESEARCH = {
  heading: "Field Research & Discovery",
  intro:
    "To understand user needs and market expectations for HappTag, an extensive field study was conducted across urban and semi-urban regions in India between January and March 2025. The research aimed to explore user behavior, pain points, and preferences regarding item-tracking devices and everyday personal item management.",
  cards: [
    {
      stat: "72%",
      heading: "High Misplacement Frequency",
      desc: "Item misplacement and loss among users.",
      color: "#FFC4C4",
    },
    {
      stat: "68%",
      heading: "Preferred a budget-friendly device.",
      desc: "Price Sensitivity",
      color: "#FFF3A8",
    },
    {
      heading:
        "Users favored a lightweight, minimal, and durable plastic body suitable for everyday use.",
      desc: "Design Preference",
      color: "#AEFAFF",
    },
    {
      stat: "83%",
      heading: "Emphasized the importance of data encryption and location privacy.",
      desc: "Data Privacy Concern",
      color: "#AFD3FF",
    },
    {
      heading:
        "Real-time tracking, sound alerts, and app-based location history were top priorities.",
      desc: "Feature Demand",
      color: "#FFAFD8",
    },
  ] satisfies ResearchCard[],
};

export const HAPPTAG_DEFINE = {
  eyebrow: "Define",
  definition:
    "HappTag is a compact, Bluetooth-enabled tracking device designed to help users locate and secure their personal belongings such as keys, bags, wallets, and other essentials. Integrated with the SMARTHAPPS Find My network, HappTag allows users to track, ring, and manage their items in real time through the companion mobile app.",
  problemStatement:
    "People frequently misplace essential items like keys, wallets, and bags in their daily routines, causing stress, wasted time, and inconvenience. Existing tracking devices are often expensive, limited in availability, or not optimized for local user needs such as affordability, durability, and data privacy.",
  goals: [
    "Create a cost-effective, reliable tracking solution tailored for Indian users.",
    "Ensure seamless connectivity through the SMARTHAPPS Find My network.",
    "Deliver real-time location tracking with simple, intuitive app controls.",
    "Emphasize data security and privacy with end-to-end encryption.",
    "Design a lightweight, durable, and minimal form suitable for everyday use.",
    "Build a user-friendly ecosystem that integrates hardware and software effortlessly.",
  ],
  behaviorInsights: [
    "Most users misplace keys, wallets, and bags during rushed mornings or while switching locations.",
    "Many rely on memory, calling their phones, or retracing steps; only a few had experience with smart trackers.",
    "Users wanted a simple setup, accurate location tracking, sound alerts, and long battery life without high costs.",
    "Losing items caused frustration and time loss, highlighting the need for quick recovery solutions.",
  ],
  conclusion:
    "The research showed that people often misplace essentials like keys and wallets due to busy routines and lack of reliable solutions. Users want a simple, affordable, and secure way to track their belongings. HappTag meets this need with its compact design, strong privacy features, and seamless integration with the SMARTHAPPS Find My network, making everyday tracking effortless and dependable.",
};

export const HAPPTAG_IDEATION = {
  heading: "Ideation & Concept Development",
  caption: "Conduct brainstorming and sketching sessions for app and device interaction.",
  products: [
    { src: "/projects-image/Happtag/product_1.png", width: 432, height: 261 },
    { src: "/projects-image/Happtag/product_2.png", width: 502, height: 261 },
    { src: "/projects-image/Happtag/product_3.png", width: 499, height: 438 },
    { src: "/projects-image/Happtag/product_4.png", width: 432, height: 438 },
    { src: "/projects-image/Happtag/product_5.png", width: 937, height: 937 },
    { src: "/projects-image/Happtag/product_6.png", width: 461, height: 461 },
    { src: "/projects-image/Happtag/product_7.png", width: 461, height: 461 },
  ],
};

export type BrandDetailBox = {
  label: string;
  heading: string;
  desc: string;
  color: string;
  // True when the color is dark enough to need white text instead of the
  // default dark text.
  light?: boolean;
};

export const HAPPTAG_BRAND_DETAIL = {
  svg: {
    src: "/projects-image/Happtag/brand_logo_image.svg",
    width: 614,
    height: 701,
  },
  boxes: [
    {
      label: "LIGHT GREY",
      heading: "Secondary Colour",
      desc: "This color is a shade of light grey which is known to neutrality and balance.",
      color: "#F1F1F1",
    },
    {
      label: "BLACK",
      heading: "Primary Colour",
      desc: "Black is a color rich with symbolism and meaning across various contexts and cultures.",
      color: "#0A0A0A",
      light: true,
    },
    {
      label: "bright cyan or light blue",
      heading: "Primary Colour",
      desc: "This color is a shade of bright cyan or light blue. It is commonly used in web design and digital graphics for a vibrant, fresh look.",
      color: "#1DA5DC",
    },
    {
      label: "BLUE-PURPLE",
      heading: "Primary Colour",
      desc: "This color is a shade of blue-purple. It is often used in web design and digital graphics.",
      color: "#5F59A3",
      light: true,
    },
  ] satisfies (BrandDetailBox | null)[],
};

export const HAPPTAG_BRANDING = {
  eyebrow: "Logo",
  heading: "Visual Design & Branding",
  logo: {
    src: "/projects-image/Happtag/logo_happtag.png",
    width: 1081,
    height: 555,
  },
  typeface: {
    heading: "Typeface",
    icon: {
      src: "/projects-image/Happtag/typeface_oneday.svg",
      width: 626,
      height: 198,
    },
    weight: "Regular",
    styleNote: "Sans-serif font · 1 style",
    desc: 'The "ONEDAY" font is an exceptional choice for logo design, offering a sleek and modern aesthetic that instantly captures attention. Its clean lines and unique geometric shapes lend a contemporary and professional look to any brand\'s identity. When used in a logo, ONEDAY conveys a sense of innovation and sophistication, ensuring the brand stands out in a crowded marketplace.',
  },
};

export const HAPPTAG_UI_SYSTEM = {
  heading: "UI System",
  images: [
    { src: "/projects-image/Happtag/ui_system_1.svg", width: 240, height: 212 },
    { src: "/projects-image/Happtag/ui_system_2.svg", width: 403, height: 695 },
    { src: "/projects-image/Happtag/ui_system_3.svg", width: 435, height: 803 },
  ],
};

export const HAPPTAG_UI = {
  heading: "High-fidelity UI mockups for mobile - Clear design for safety",
  hifi: [
    { src: "/projects-image/Happtag/hifi_1.svg", width: 617, height: 616 },
    { src: "/projects-image/Happtag/hifi_2.svg", width: 283, height: 615 },
    { src: "/projects-image/Happtag/hifi_3.svg", width: 295, height: 615 },
  ],
};

export type HapptagFeature = {
  title: string;
  desc: string;
};

export const HAPPTAG_PROTOTYPE = {
  heading: "Prototyping & Animation",
  featureEyebrow: "Feature",
  featureHeading: "Small Tag, Big Impact",
  featureVideos: [
    "/projects-image/Happtag/happ_tag_video_1.mp4",
    "/projects-image/Happtag/happ_tag_video_2.mp4",
    "/projects-image/Happtag/happ_tag_video_3.mp4",
    "/projects-image/Happtag/happ_tag_video_4.mp4",
  ],
  features: [
    {
      title: "Find by the beep",
      desc: "Track objects within 132ft. Tap the button, and HappTag's 120dB beep will lead you right to it!",
    },
    {
      title: "Track when out of sight",
      desc: "Stay in the know—get an alert when you move out of the tag's Bluetooth range.",
    },
    {
      title: "Track even when away",
      desc: "Always know where you last left it—your tag's location updates automatically, with last known location even when out of Bluetooth range.",
    },
    {
      title: "'Lost mode' never leaves you lost",
      desc: "SmartHapps' network tracks lost items with instant updates. Add your phone or email with a message, and the tag's location will update as soon as it comes within Bluetooth range of another SmartHapps user's device.",
    },
    {
      title: "Reverse find your phone",
      desc: "With two way tracking, you can press the button and find your phone with notifications, even on silent mode.",
    },
    {
      title: "Fall detection mode",
      desc: "The fall detection sensor on the device accurately verifies a hard fall and notifies smartphones. Works on CDC guidelines and utilises STEADI-algorithm for precise detection.",
    },
  ] satisfies HapptagFeature[],
  reverseFindMedia: {
    type: "video" as const,
    src: "/projects-image/Happtag/happ_tag_video_5.mp4",
  },
  fallDetectionMedia: {
    type: "image" as const,
    src: "/projects-image/Happtag/happ_tag_image_6.png",
    width: 824,
    height: 1158,
  },
};

// Each feature_N file is a complete, pre-designed asset (captions/icons
// already baked in) — placed as-is, no overlay text needed.
export const HAPPTAG_FEATURE_BENTO = {
  // Left column, stacked: "Snaps Right In" then "Powerful Inside".
  leftCards: [
    { type: "video" as const, src: "/projects-image/Happtag/feature_1.mp4" },
    { type: "video" as const, src: "/projects-image/Happtag/feature_2.mp4" },
  ],
  // Right column: one big hero photo, same height as the left column.
  hero: {
    src: "/projects-image/Happtag/feature_3.png",
    width: 3612,
    height: 3237,
  },
  // Bottom row: Range, Connect, exploded-parts video.
  bottomRow: [
    {
      type: "image" as const,
      src: "/projects-image/Happtag/feature_4.png",
      width: 1340,
      height: 1272,
      alt: "Range: 45 meters",
    },
    {
      type: "image" as const,
      src: "/projects-image/Happtag/feature_5.png",
      width: 1268,
      height: 1272,
      alt: "Connect via Bluetooth",
    },
    {
      type: "video" as const,
      src: "/projects-image/Happtag/feature_6.mp4",
      alt: "Exploded view of HappTag components",
    },
  ],
};

export const HAPPTAG_PACKAGING = {
  banner1: {
    src: "/projects-image/Happtag/happ_banner_1.png",
    width: 5760,
    height: 2800,
  },
  banner2: {
    src: "/projects-image/Happtag/happ_bannger_2.png",
    width: 5120,
    height: 1680,
  },
};

export type Education = {
  school: string;
  degree: string;
  period: string;
  location: string;
  logo: { src: string; width: number; height: number };
};

export const EDUCATION: Education[] = [
  {
    school: "MIT Institute Of Design",
    degree: "Post Graduate Diploma in Animation & Visual Design",
    period: "March 2010 – March 2013",
    location: "Pune, India",
    logo: { src: "/about/mit-institute-of-design.png", width: 113, height: 104 },
  },
  {
    school: "College of Art & Craft, Patna University",
    degree: "Graduate in Applied Art (Visual Design)",
    period: "March 2004 – June 2009",
    location: "Patna, India",
    logo: { src: "/about/college-of-art-craft.png", width: 88, height: 93 },
  },
];

export type Job = {
  company: string;
  url: string;
  role: string;
  bullets: string[];
  period: string;
  location: string;
};

export const JOBS: Job[] = [
  {
    company: "Impelsys",
    url: "https://www.impelsys.com/",
    role: "Senior User experience Designer",
    bullets: [
      "Conducted user research to inform design decisions, including user interviews, usability testing, and persona development.",
      "Collaborated with cross-functional teams, including product management, development, and marketing, to deliver products that meet business objectives.",
      "Developed wireframes, prototypes, and visual designs for web and mobile applications, using tools such as Figma, and Adobe XD.",
      "Created design systems and guidelines to ensure consistency and scalability across digital products.",
      "Mentored junior designers and provided guidance on design best practices.",
    ],
    period: "March 2020 – Present",
    location: "Bangalore, India",
  },
  {
    company: "Scalex Business",
    url: "https://scalexbusiness.com/",
    role: "Senior UI/UX Designer",
    bullets: [
      "The role is to understand and work on different PRDs based on user needs and business objectives. I was responsible for coming up with UX/UI design solutions for the evolving Spice Route Business customer app based on various product requirements given by PMs. The work also required a lot of collaboration and coordination between designers, PMs, and engineering counterparts.",
    ],
    period: "March 2019 – March 2020",
    location: "Bangalore, India",
  },
  {
    company: "Xoxoday",
    url: "https://www.xoxoday.com/",
    role: "UI/UX Designer",
    bullets: [
      "Worked as a UI/UX Designer, responsible for the creation of digital products across web and mobile applications. Conducted user research, created wireframes, prototypes, and visual designs, and collaborated with cross-functional teams to deliver products that meet business objectives.",
    ],
    period: "July 2016 – March 2019",
    location: "Bangalore, India",
  },
  {
    company: "Lendingkart",
    url: "https://www.lendingkart.com/",
    role: "UI Designer",
    bullets: [
      "Was responsible for understanding and working on different projects of the Lendingkart loan app and website.",
      "Responsible for executing all graphic requirements such as the creation of the website, working on UI/UX of the app, etc.",
    ],
    period: "March 2015 – June 2016",
    location: "Bangalore, India",
  },
  {
    company: "Anibrain",
    url: "https://anibrain.com/",
    role: "Visual Designer",
    bullets: [],
    period: "April 2013 – February 2015",
    location: "Bangalore, India",
  },
];

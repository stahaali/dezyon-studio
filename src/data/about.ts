const ABOUT_ASSETS = "/assets/about";

export const aboutHero = {
  title: "About Dezyon Studio.",
  description:
    "In 2014, Steven Smith have gotten so much of our time back that we're now able to put towards things that are actually helping our company as opposed to just throwing content out there. and the idea of Lexend was born. Today, Lexend empowers teams to easily communicate with customers through personalized documents that can be created in minutes, build meaningful relationships.",
  stars: {
    left: { src: `${ABOUT_ASSETS}/star-2.svg`, width: 20, height: 28 },
    right: { src: `${ABOUT_ASSETS}/star-1.svg`, width: 42, height: 47 },
  },
} as const;

export const aboutShowcase = {
  left: {
    image: `${ABOUT_ASSETS}/hero-about-01.jpg`,
    illustration: {
      src: `${ABOUT_ASSETS}/hand-pencil.svg`,
      width: 154,
      height: 309,
    },
  },
  right: {
    image: `${ABOUT_ASSETS}/hero-about-02.jpg`,
    illustration: {
      src: `${ABOUT_ASSETS}/empathing.svg`,
      width: 278,
      height: 229,
    },
  },
} as const;

export const aboutHelps = {
  title: "How Lexend helps",
  paragraphs: [
    "Teams use Lexend to improve document workflows, insights, and speed while delivering an amazing experience for their customers. Businesses trust Lexend's all-in-one document automation software to streamline the process to create, approve, and eSign proposals, quotes, contracts, and more. With powerful document creation and workflow capabilities, teams can provide their customers with a more professional, timely, and engaging experience.",
    "In 2014, Steven Smith have gotten so much of our time back that we're now able to put towards things that are actually helping our company as opposed to just throwing content out there. and the idea of Lexend was born. Today, Lexend empowers teams to easily communicate with customers through personalized documents that can be created in minutes, build meaningful relationships..",
  ],
  illustration: {
    src: `${ABOUT_ASSETS}/walking.svg`,
    width: 224,
    height: 226,
  },
} as const;

export const aboutStats = [
  { value: "2014", label: "Lexend founded." },
  { value: "50", label: "Hardworking group." },
  { value: "100k", label: "Document workflows." },
] as const;

export const aboutValues = [
  {
    title: "Make an impact",
    description:
      "We're building something big. Something that has the power to change the trajectory of any sized business for the better.",
    icon: `${ABOUT_ASSETS}/icon-diamond.svg`,
    iconWidth: 56,
    iconHeight: 56,
  },
  {
    title: "Learn",
    description:
      "Lexend team are masters of their craft. Even though we're all experts in our respective fields, we always make time to expand our minds.",
    icon: `${ABOUT_ASSETS}/icon-trophy.svg`,
    iconWidth: 56,
    iconHeight: 56,
  },
  {
    title: "Have fun",
    description:
      "We work hard and play harder. We believe in the importance of celebrating wins big or small, for the business or individuals.",
    icon: `${ABOUT_ASSETS}/icon-globe.svg`,
    iconWidth: 56,
    iconHeight: 56,
  },
  {
    title: "Empathy",
    description:
      "We strive to be empathetic to every customer and colleague and by doing so we can provide a better experience for all.",
    icon: `${ABOUT_ASSETS}/icon-crown.svg`,
    iconWidth: 56,
    iconHeight: 56,
  },
] as const;

export const aboutFloatingIcons = [
  { src: `${ABOUT_ASSETS}/star-1.svg`, className: "starOne", width: 32, height: 32 },
  { src: `${ABOUT_ASSETS}/star-2.svg`, className: "starTwo", width: 24, height: 24 },
  { src: `${ABOUT_ASSETS}/icon-trophy.svg`, className: "iconTrophy", width: 56, height: 56 },
  { src: `${ABOUT_ASSETS}/icon-globe.svg`, className: "iconGlobe", width: 56, height: 56 },
  { src: `${ABOUT_ASSETS}/icon-crown.svg`, className: "iconCrown", width: 56, height: 56 },
  { src: `${ABOUT_ASSETS}/icon-diamond.svg`, className: "iconDiamond", width: 56, height: 56 },
  { src: `${ABOUT_ASSETS}/thinking.svg`, className: "iconThinking", width: 56, height: 56 },
  { src: `${ABOUT_ASSETS}/send-message.svg`, className: "iconMessage", width: 56, height: 56 },
] as const;

export const aboutTestimonials = [
  {
    quote:
      "We're looking for people who share our vision! most of our time used to be taken up by most of alternate administrative work whereas now we can focus on building out to help our employees.",
    name: "Mark Zellers",
    role: "CEO, Co-Founder.",
    avatar: `${ABOUT_ASSETS}/team-01.jpg`,
  },
  {
    quote:
      "This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes.",
    name: "Natalia Larsson",
    role: "Director of Sales",
    avatar: `${ABOUT_ASSETS}/team-06.jpg`,
  },
  {
    quote:
      "We are based in Europe and the latest Data Protection Regulation forces us to look for service suppliers that comply with this regulation and as we look to create our website and this builder just outstanding!",
    name: "Sarah Edrissi",
    role: "Lead Marketing",
    avatar: `${ABOUT_ASSETS}/team-07.jpg`,
  },
] as const;

export const aboutTeamMembers = [
  { name: "Mark Zellers", role: "Founder & CEO", image: `${ABOUT_ASSETS}/team-01.jpg` },
  { name: "John Zellers", role: "Co-Founder", image: `${ABOUT_ASSETS}/team-02.jpg` },
  { name: "Kim Yun Son", role: "Engineering Manager", image: `${ABOUT_ASSETS}/team-03.jpg` },
  { name: "André Garcia", role: "Product Manager", image: `${ABOUT_ASSETS}/team-04.jpg` },
  { name: "Peter Lary", role: "UX Researcher", image: `${ABOUT_ASSETS}/team-05.jpg` },
  { name: "Henry Matt", role: "Customer Success", image: `${ABOUT_ASSETS}/team-06.jpg` },
  { name: "Natalia", role: "Lead of Fun", image: `${ABOUT_ASSETS}/team-07.jpg` },
  { name: "Larry", role: "Director of Joy", image: `${ABOUT_ASSETS}/team-08.jpg` },
] as const;

export const aboutTimeline = [
  {
    year: "2014",
    description: "Where the idea come up of Lexend :)",
    image: `${ABOUT_ASSETS}/timeline-01.jpg`,
  },
  {
    year: "2015",
    description:
      "Launched our first business that can be created in minutes, build meaningful relationships.",
    image: `${ABOUT_ASSETS}/timeline-02.jpg`,
  },
  {
    year: "2016",
    description: "Opened our new office in Toronto, CA",
    image: `${ABOUT_ASSETS}/timeline-03.jpg`,
  },
  {
    year: "2019",
    description:
      "Moved to Silicon Valley whereas now we can focus on building out to help our employees.",
    image: `${ABOUT_ASSETS}/timeline-04.jpg`,
    active: true,
  },
  {
    year: "2020",
    description: "Opened a new office in London, UK.",
    image: `${ABOUT_ASSETS}/timeline-05.jpg`,
  },
  {
    year: "Today",
    description: "Top-rated software solution for service suppliers.",
    image: `${ABOUT_ASSETS}/timeline-06.jpg`,
  },
] as const;

export const aboutCareers = {
  title: "We're looking for people who share our vision!",
  description: "Have what it takes to be one of us.",
  cta: { label: "View current openings", href: "/contact" },
  illustrations: {
    left: { src: `${ABOUT_ASSETS}/thinking.svg`, width: 233, height: 236 },
    right: { src: `${ABOUT_ASSETS}/send-message.svg`, width: 240, height: 215 },
    stars: [
      { src: `${ABOUT_ASSETS}/star-1.svg`, width: 32, height: 32 },
      { src: `${ABOUT_ASSETS}/star-2.svg`, width: 24, height: 24 },
    ],
  },
} as const;

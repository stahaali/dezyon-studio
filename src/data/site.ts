export const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#team" },
  { label: "Services", href: "#features" },
  { label: "Portfolio", href: "#" },
  { label: "Packages", href: "#pricing" },
  { label: "Combo Packages", href: "#" },
  { label: "Web Apps", href: "#" },
  { label: "Contact", href: "#contact" },
] as const;

export const footerAbout =
  "Turning your ideas into stunning digital experiences and the best brand design. We specialize in developing exquisite custom web designs for powerful e-commerce platforms. Our specialists work tirelessly to create digital innovations that are not only beautiful but built to perform.";

export const footerInformationLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#team" },
  { label: "Services", href: "#features" },
  { label: "Portfolio", href: "#" },
  { label: "Packages", href: "#pricing" },
  { label: "Combo Packages", href: "#" },
  { label: "Web Apps", href: "#" },
  { label: "Contact Us", href: "#contact" },
] as const;

export const footerContact = {
  headOfficeLabel: "Head Office:",
  address: "17418 Moreton Ln, Spring, TX 77379",
  phone: "(573) 240-7509",
  email: "info@dezyondigital.com",
} as const;

export const footerSocialLinks = [
  { href: "#", label: "Facebook" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Instagram" },
  { href: "#", label: "Reviews" },
] as const;

export const footerBottomLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms and Conditions", href: "#" },
  { label: "Refund Policy", href: "#" },
] as const;

export const trustedLogos = [
  "Spotify",
  "Slack",
  "Dropbox",
  "Stripe",
  "Notion",
  "Intercom",
] as const;

export const integrations = [
  {
    name: "Slack",
    category: "Productivity",
    description:
      "Notify your teammates of the latest activities with instant Slack messages.",
    logo: "/assets/img/integrations/tool-slack.svg",
  },
  {
    name: "Salesforce",
    category: "CRM",
    description:
      "Leave a lasting impression all done inside Salesforce CPQ platform.",
    logo: "/assets/img/integrations/tool-salesforce.svg",
  },
  {
    name: "Stripe",
    category: "Payment",
    description:
      "Collect credit card and ACH payments within your sales documents.",
    logo: "/assets/img/integrations/tool-stripe.svg",
  },
  {
    name: "PayPal",
    category: "Payment",
    description:
      "Provide a world-class checkout experience for your customers.",
    logo: "/assets/img/integrations/tool-paypal.svg",
  },
  {
    name: "HubSpot",
    category: "CRM",
    description:
      "Expand the ROI from your CRM and unlock easy generation and capabilities.",
    logo: "/assets/img/integrations/tool-hubspot.svg",
  },
  {
    name: "Zapier",
    category: "Integration platforms",
    description:
      "Create custom, automated workflows using your favorite Zaps.",
    logo: "/assets/img/integrations/tool-zapier.svg",
  },
] as const;

export const values = [
  {
    title: "Make an impact",
    description:
      "We're building something big. Something that has the power to change the trajectory of any sized business for the better.",
    icon: "/assets/img/our-values/1.svg",
  },
  {
    title: "Learn",
    description:
      "Teams are masters of their craft though we're all experts in our respective fields, we always make time to expand our minds.",
    icon: "/assets/img/our-values/2.svg",
  },
  {
    title: "Empathy",
    description:
      "We strive to be empathetic to every customer and colleague and by doing so we provide a better experience for all.",
    icon: "/assets/img/our-values/3.svg",
  },
] as const;

export const stats = [
  { value: "2014", label: "Lexend founded" },
  { value: "50", label: "Hardworking group" },
  { value: "4600", label: "Document workflows" },
  { value: "17%", label: "Taux convertion" },
] as const;

export const pricingPlans = [
  {
    id: "essentials",
    name: "Essentials",
    description: "For creating impressive tools that generate results.",
    price: 19,
    seatNote: "Seat per month, 2 seats max",
    featuresLabel: "Key features:",
    features: [
      "Real-time tracking and notifications",
      "Real-time analytics",
      "Drag and drop templates",
      "Project Management",
      "24/7 email and chat support",
    ],
  },
  {
    id: "business",
    name: "Business",
    description: "For seamless integrations and sending tools in bulk.",
    price: 49,
    seatNote: "Seat cost per month",
    featuresLabel: "Everything in Essentials, plus:",
    features: [
      "CRM and Zapier integrations",
      "Content reporting",
      "Unlimited team workspaces",
      "Approval workflows",
      "Salesforce integration*",
    ],
    popular: true,
  },
] as const;

export const basicFeatures = [
  "Real-time tracking and notifications",
  "Real-time analytics",
  "Drag and drop templates",
  "Project Management",
  "24/7 email and chat support",
] as const;

export const standardFeatures = [
  "CRM and Zapier integrations",
  "Content reporting",
  "Unlimited team workspaces",
  "Approval workflows",
  "Salesforce integration*",
] as const;

const FEEDBACK_ASSETS = "/assets/img/feedback";

const feedbackBase = [
  {
    company: "Boltshift",
    quote:
      "We're looking for people who share our vision! Most of our time used to be taken up by alternate administrative work whereas now we can focus on building out to help our employees.",
    name: "Mark Zellers",
    role: "CEO, Co-Founder",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
  },
  {
    company: "Lightbox",
    quote:
      "This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes.",
    name: "Natalia Larsson",
    role: "Director of Sales",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
  {
    company: "Interlock",
    quote:
      "We are based in Europe and the latest Data Protection Regulation forces us to look for service suppliers that comply with this regulation and as we look to create our website and this builder just outstanding!",
    name: "Sarah Edrissi",
    role: "Lead Marketing",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
  {
    company: "Capsule",
    quote:
      "We're looking for people who share our vision! Most of our time used to be taken up by alternate administrative work whereas now we can focus on building out to help our employees.",
    name: "Anna Yon",
    role: "Senior UI/UX Designer",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
  },
] as const;

export const testimonials = [
  { ...feedbackBase[0], logo: `${FEEDBACK_ASSETS}/brand-01.svg` },
  { ...feedbackBase[1], logo: `${FEEDBACK_ASSETS}/brand-02.svg` },
  { ...feedbackBase[2], logo: `${FEEDBACK_ASSETS}/brand-03.svg` },
  { ...feedbackBase[3], logo: `${FEEDBACK_ASSETS}/brand-04.svg` },
  { ...feedbackBase[0], logo: `${FEEDBACK_ASSETS}/brand-05.svg` },
  { ...feedbackBase[1], logo: `${FEEDBACK_ASSETS}/brand-06.svg` },
  { ...feedbackBase[2], logo: `${FEEDBACK_ASSETS}/brand-07.svg` },
  { ...feedbackBase[3], logo: `${FEEDBACK_ASSETS}/brand-08.svg` },
] as const;

const PROCESS_ASSETS = "/assets/img/process";

export const timeline = [
  {
    year: "2014",
    description: "Where the idea come up of Lexend :)",
    image: `${PROCESS_ASSETS}/timeline-01.png`,
  },
  {
    year: "2015",
    description:
      "Launched our first business that can be created in minutes, build meaningful relationships.",
    image: `${PROCESS_ASSETS}/timeline-02.png`,
  },
  {
    year: "2016",
    description: "Opened our new office in Toronto, CA",
    image: `${PROCESS_ASSETS}/timeline-03.png`,
  },
  {
    year: "2019",
    description:
      "Moved to Silicon Valley whereas now we can focus on building out to help our employees.",
    image: `${PROCESS_ASSETS}/timeline-04.png`,
    active: true,
  },
  {
    year: "2020",
    description: "Opened a new office in London, UK.",
    image: `${PROCESS_ASSETS}/timeline-05.png`,
  },
  {
    year: "Today",
    description: "Top-rated software solution for service suppliers.",
    image: `${PROCESS_ASSETS}/timeline-06.png`,
  },
] as const;

export const teamMembers = [
  {
    name: "Mark Zellers",
    role: "Founder & CEO",
    image: "/assets/img/team/team-01.jpg",
  },
  {
    name: "John Zellers",
    role: "Co-Founder",
    image: "/assets/img/team/team-02.jpg",
  },
  {
    name: "Kim Yun Son",
    role: "Engineering Manager",
    image: "/assets/img/team/team-03.jpg",
  },
  {
    name: "André Garcia",
    role: "Product Manager",
    image: "/assets/img/team/team-04.jpg",
  },
  {
    name: "Peter Lary",
    role: "UX Researcher",
    image: "/assets/img/team/team-05.jpg",
  },
  {
    name: "Henry Matt",
    role: "Customer Success",
    image: "/assets/img/team/team-06.jpg",
  },
  {
    name: "Natalia",
    role: "Lead of Fun",
    image: "/assets/img/team/team-07.jpg",
  },
  {
    name: "Larry",
    role: "Director of Joy",
    image: "/assets/img/team/team-08.jpg",
  },
] as const;

export const heroAvatars = [
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&q=80",
] as const;

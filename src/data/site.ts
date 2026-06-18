import { flaticonIcons } from "@/data/icons";
import { pricingMenuItems } from "@/data/pricing-menu";

export const pricingNav = {
  label: "Plans & Pricing",
  href: "/plans-and-pricing",
  menuItems: pricingMenuItems,
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Video Editing", href: "/video-editing" },
  { label: "Talking Website", href: "/talking-website" },
  // { label: "Combo Packages", href: "/combo-packages" },
  // { label: "Web Apps", href: "/web-apps" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerAbout =
  "Turning your ideas into stunning digital experiences and the best brand design. We specialize in developing exquisite custom web designs for powerful e-commerce platforms. Our specialists work tirelessly to create digital innovations that are not only beautiful but built to perform.";

export const footerInformationLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Video Editing", href: "/video-editing" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const footerOffices = [
  {
    id: "usa",
    country: "USA",
    address: "17418 Moreton Ln, Spring, TX 77379",
    phone: "+1 346-421-2554",
  },
  {
    id: "canada",
    country: "Canada",
    address: "2465 Finch Ave W, North York, ON M9M 2G1",
    phone: "+1 226-501-0914",
  },
] as const;

export const footerContact = {
  phone: "+1 346-421-2554",
  email: "hello@dezyonstudio.com",
  offices: footerOffices,
  address: footerOffices[0].address,
} as const;

const usaPhoneDigits = footerOffices[0].phone.replace(/\D/g, "");

export const leftRailLinks = [
  { href: "/contact", label: "Get in Touch", type: "contact" },
  { href: `https://wa.me/${usaPhoneDigits}`, label: "WhatsApp", type: "whatsapp" },
  { href: `tel:${usaPhoneDigits}`, label: "Call", type: "call" },
] as const;

export const footerSocialLinks = [
  { href: "https://www.facebook.com/dezyonstudios/", label: "Facebook" },
  { href: "https://www.linkedin.com/company/dezyon-studio/", label: "LinkedIn" },
  { href: "https://www.instagram.com/dezyon.studio/", label: "Instagram" },
] as const;

export const sideRailSocialLinks = [
  { href: "https://www.facebook.com/dezyonstudios/", label: "Facebook" },
  { href: "#", label: "Twitter" },
  { href: "https://www.instagram.com/dezyon.studio/", label: "Instagram" },
  { href: "#", label: "Pinterest" },
  { href: "https://www.linkedin.com/company/dezyon-studio/", label: "LinkedIn" },
  { href: "https://www.youtube.com/@dezyonstudio", label: "YouTube" },
  { href: "https://www.tiktok.com/@dezyonstudio", label: "TikTok" },
] as const;

export const footerBottomLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
  { label: "Refund Policy", href: "/refund-policy" },
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
    title: "Make An Impact",
    description:
      "We're building something big. Something that has the power to change the trajectory of any sized business for the better.",
    icon: flaticonIcons.diamondColor,
  },
  {
    title: "Learn",
    description:
      "Teams are masters of their craft though we're all experts in our respective fields, we always make time to expand our minds.",
    icon: flaticonIcons.trophyColor,
  },
  {
    title: "Empathy",
    description:
      "We strive to be empathetic to every customer and colleague and by doing so we provide a better experience for all.",
    icon: flaticonIcons.crownColor,
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

const feedbackBase = [
  {
    quote:
      "Great job on my book project. I would definitely work with them again. The Dezyon Studio team was professional, creative, and very helpful throughout the publishing process. Highly recommended!",
    name: "Nathan Singleton",
  },
  {
    quote:
      "Professional service and great communication. Mike Hart handled my book cover and formatting with excellent quality, uploading to Kindle Publishing and Etsy",
    name: "John",
  },
  {
    quote:
      "I'm incredibly grateful to Jordan and his team for their outstanding support in helping me grow my business. Their expertise in running the right ads and providing clear, strategic guidance has made a huge difference. Thanks to their efforts, my business is now performing better than ever!",
    name: "Mustafa Digital",
  },
  {
    quote:
      "We're looking for people who share our vision! Most of our time used to be taken up by alternate administrative work whereas now we can focus on building out to help our emplThis brand is so good! All I can say, they’ve been accommodating and guiding al throughout. We really appreciate it, best of all so far!",
    name: "Mark Anderson",
  },
  {
    quote:
      "Dezyon Studio exceeded our expectations with their expertise in digital marketing. Their team took the time to understand our brand and delivered a tailored strategy that significantly boosted our online presence. Professional, responsive, and results-driven highly recommend!",
    name: "omar bautista",
  },
  {
    quote:
      "I had the pleasure of working with David Arthur from Dezyon Studio, and he absolutely nailed the logo design for my business. His attention to detail and ability to communicate throughout the process made the experience seamless. If you're looking for top-notch design work, David is your guy!",
    name: "Guillermo Munoz",
  },
  {
    quote:
      "I had the pleasure of working with David Arthur from Dezyon Studio, and he absolutely nailed the logo design for my business. His attention to detail and ability to communicate throughout the process made the experience seamless. If you're looking for top-notch design work, David is your We are happy with the website design, he is perfect for any company needs. Michel Smith is very patient and easily approachable. He answers questions and finishes work on time. If you would like to design a website for your desire, I would recommend reaching out to him.",
    name: "Mike Byers",
  },
  {
    quote:
      "I'm thrilled to have achieved my sales target in my 2nd months after completion web and social media. While it's just the beginning, it’s a positive step, and I’m excited about the journey ahead with Alex team",
    name: "vinoth edsn",
  },
  {
    quote:
      "Frank William is a highly skilled project manager who truly helped us with our project. It was great to work with him.",
    name: "Luis Salomon",
  },
  {
    quote:
      "The team was able to put together a multi-pronged digital solution for me in less time than I thought possible. I would definitely recommend Dezyon for any online marketing, website, etc.",
    name: "Frank Johnson",
  },
  {
    quote:
      "Thank you David and John for helping me build a dream project for my business website. They also helped me out in the Social Media Marketing and SEO as well. Definitely recommended.",
    name: "EVERGREEN TRADING VENTURE",
  }
] as const;

export const testimonials = [
  ...feedbackBase,
  feedbackBase[0],
  feedbackBase[1],
  feedbackBase[2],
  feedbackBase[3],
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

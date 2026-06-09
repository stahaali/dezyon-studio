import { flaticonIcons } from "@/data/icons";

const CONTACT_ASSETS = "/assets/img/contact";

export const contactBanner = {
  titlePrefix: "Let's get in ",
  titleHighlight: "touch.",
  description:
    "Feel free to reach out to us using the options below, and our dedicated team will respond to your inquiries promptly.",
  stars: {
    left: { src: `${CONTACT_ASSETS}/star-2.svg`, width: 20, height: 28 },
    right: { src: `${CONTACT_ASSETS}/star-1.svg`, width: 42, height: 47 },
  },
} as const;

export const contactHero = {
  testimonial: {
    quote:
      "This software simplifies the website building process, making it a breeze to manage our online presence.",
    name: "David Larry",
    role: "Founder & CEO",
    image: `${CONTACT_ASSETS}/hero-contact.jpg`,
  },
  intro:
    "Have a question or feedback? Fill out the form below, and we'll get back to you as soon as possible.",
  fields: {
    name: "Full name",
    email: "Your email",
    subject: "Subject",
    message: "Your message...",
  },
  submitLabel: "Send message",
  emailNote: "Or drop us a message via",
  emailLink: { label: "email", href: "mailto:info@dezyondigital.com" },
} as const;

export const contactReach = {
  titlePrefix: "Other ways to ",
  titleHighlight: "reach",
  titleSuffix: " us",
  items: [
    {
      icon: flaticonIcons.location,
      title: "Visit us",
      description: "Don Valley, Toronto, CA",
      link: { label: "View on maps", href: "#" },
    },
    {
      icon: flaticonIcons.chat,
      title: "Via chat",
      description: "Get instant answers.",
      link: { label: "Let's chat", href: "#" },
    },
    {
      icon: flaticonIcons.internet,
      title: "Report Issue",
      description: "Get priority support.",
      link: { label: "Send report", href: "#" },
    },
    {
      icon: flaticonIcons.community,
      title: "Our community",
      description: "Connect with users.",
      link: { label: "Join us now", href: "#" },
    },
  ],
} as const;

export const contactFaq = {
  titlePrefix: "Frequently asked ",
  titleHighlight: "questions",
  titleSuffix: ":",
  items: [
    {
      question: "Do I need to know about how to code?",
      answer:
        "Yes, you need to have a fair amount of knowledge in dealing with HTML/CSS as well as JavaScript in order to be able to use Lexend.",
    },
    {
      question: "Can I use it for commercial projects?",
      answer:
        "Yes, you can use Lexend for commercial projects. Please review our licensing terms for full details on usage rights.",
    },
    {
      question: "Can I use it for multiple projects?",
      answer:
        "Absolutely. Your plan includes support for multiple projects so you can manage all your work in one place.",
    },
    {
      question: "Can I use this to create and sell a product?",
      answer:
        "You can build and sell products created with Lexend as long as they comply with our terms of service and licensing policy.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "We offer a 14-day refund policy on eligible plans. Contact our support team if you need help with a refund request.",
    },
  ],
} as const;

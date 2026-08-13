export const bookPublishingMenuItems = [
  {
    id: "cover-designer",
    label: "Book Cover Designer",
    href: "/contact",
  },
  {
    id: "illustration-services",
    label: "Illustration Services",
    href: "/contact",
  },
  {
    id: "book-trailer",
    label: "Book Trailer",
    href: "/contact",
  },
  {
    id: "children-book-illustration",
    label: "Children Book Illustration",
    href: "/contact",
  },
  {
    id: "comic-book-illustration",
    label: "Comic Book Illustration",
    href: "/contact",
  },
  {
    id: "author-website-design",
    label: "Author Website Design",
    href: "/contact",
  },
  {
    id: "children-book-printing",
    label: "Children Book Printing",
    href: "/contact",
  },
] as const;

export const bookPublishingNav = {
  label: "Book Publishing",
  href: "/book-publishing",
  menuItems: bookPublishingMenuItems,
} as const;

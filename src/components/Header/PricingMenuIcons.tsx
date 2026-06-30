import type { ReactNode } from "react";
import type { PackageCategoryId } from "@/data/packages";

const iconPaths: Record<PackageCategoryId, ReactNode> = {
  logo: (
    <path
      d="M12 3l2.2 6.8H21l-5.5 4 2.1 6.8L12 16.6 6.4 20.6l2.1-6.8L3 9.8h6.8L12 3z"
      fill="currentColor"
    />
  ),
  "website-design": (
    <>
      <rect x="4" y="5" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 9h16" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="7" cy="7.2" r="0.8" fill="currentColor" />
    </>
  ),
  branding: (
    <>
      <circle cx="8" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M11.5 10h1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  ecommerce: (
    <>
      <path
        d="M6 7h14l-1.2 9H7.2L6 7z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M9 11h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="10" cy="18" r="1.2" fill="currentColor" />
      <circle cx="16" cy="18" r="1.2" fill="currentColor" />
    </>
  ),
  wordpress: (
    <>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M7.5 16.5c1.8-3.8 3.2-6.2 4.2-7.2 1.1-1 2.1-.8 3 .4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </>
  ),
  shopify: (
    <>
      <path
        d="M8 8h8l1 11H7L8 8z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M10 8V6a2 2 0 014 0v2" stroke="currentColor" strokeWidth="1.8" />
    </>
  ),
  "video-animation": (
    <>
      <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M11 10l5 3-5 3v-6z" fill="currentColor" />
    </>
  ),
  seo: (
    <>
      <circle cx="11" cy="11" r="5.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16 16l3.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  "web-portal": (
    <>
      <rect x="4" y="5" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="13" y="5" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="4" y="14" width="7" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="13" y="14" width="7" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
    </>
  ),
};

export function PricingMenuIcon({ id }: { id: PackageCategoryId }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {iconPaths[id]}
    </svg>
  );
}

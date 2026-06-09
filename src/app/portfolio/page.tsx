import type { Metadata } from "next";
import { PortfolioBanner } from "@/components/Portfolio/PortfolioBanner/PortfolioBanner";
import { PortfolioGrid } from "@/components/Portfolio/PortfolioGrid/PortfolioGrid";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Portfolio | ${SITE_NAME}`,
  description:
    "Browse Dezyon Studio's portfolio of websites, brands, and digital experiences.",
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioBanner />
      <PortfolioGrid />
    </>
  );
}

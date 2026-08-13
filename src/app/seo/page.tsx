import type { Metadata } from "next";
import { seoAeoFaq } from "@/data/seo-aeo";
import { SeoAeoComparison } from "@/components/SeoAeo/SeoAeoComparison";
import { SeoAeoCta } from "@/components/SeoAeo/SeoAeoCta";
import { SeoAeoDashboard } from "@/components/SeoAeo/SeoAeoDashboard";
import { SeoAeoFaq } from "@/components/SeoAeo/SeoAeoFaq";
import { SeoAeoFeatures } from "@/components/SeoAeo/SeoAeoFeatures";
import { SeoAeoHero } from "@/components/SeoAeo/SeoAeoHero";
import { SeoAeoProblems } from "@/components/SeoAeo/SeoAeoProblems";
import { SeoAeoSolutions } from "@/components/SeoAeo/SeoAeoSolutions";
import { SeoAeoTimeline } from "@/components/SeoAeo/SeoAeoTimeline";
import { JsonLd } from "@/components/Seo/JsonLd";
import { PageSchema } from "@/components/Seo/schemas/PageSchema";
import { buildPageSeoMetadata, PAGE_SEO } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata: Metadata = buildPageSeoMetadata("seoServices");

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: seoAeoFaq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function SeoServicesPage() {
  const seo = PAGE_SEO.seoServices;

  return (
    <>
      <PageSchema
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "SEO & AEO", path: "/seo" },
        ]}
        title={seo.title}
        description={seo.description}
        path={seo.path}
        services={[
          {
            name: "SEO Services",
            description:
              "Technical SEO, local SEO, content strategy and authority building that grows organic rankings and qualified leads.",
            path: "/seo",
            serviceType: "Search Engine Optimization",
          },
          {
            name: "AEO Services",
            description:
              "Answer Engine Optimization that makes your business the recommendation inside ChatGPT, Gemini, Claude, Perplexity and Google AI Overviews.",
            path: "/seo",
            serviceType: "Answer Engine Optimization",
          },
        ]}
      />
      <JsonLd data={faqSchema} />

      <div className={styles.page}>
        <SeoAeoHero />
        <SeoAeoProblems />
        <SeoAeoSolutions />
        <SeoAeoComparison />
        <SeoAeoDashboard />
        <SeoAeoTimeline />
        <SeoAeoFeatures />
        <SeoAeoFaq />
        <SeoAeoCta />
      </div>
    </>
  );
}

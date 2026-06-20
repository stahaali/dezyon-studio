import { AboutHelps } from "@/components/About/AboutHelps/AboutHelps";
import { AboutHero } from "@/components/About/AboutHero/AboutHero";
import { AboutCtaBanner } from "@/components/About/AboutCtaBanner/AboutCtaBanner";
import { Team } from "@/components/Features/Team";
import { HomeStats } from "@/components/Home/HomeStats/HomeStats";
import { AboutValues } from "@/components/About/AboutValues/AboutValues";
import { PageSchema } from "@/components/Seo/schemas/PageSchema";
import { createPageMetadata, PAGE_SEO } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = createPageMetadata("about");

export default function AboutPage() {
  const aboutSeo = PAGE_SEO.about;

  return (
    <>
      <PageSchema
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
        title={aboutSeo.title}
        description={aboutSeo.description}
        path={aboutSeo.path}
        variant="about"
      />
      <div className={styles.page}>
        <AboutHero />
        <AboutHelps />
        <HomeStats />
        <AboutValues />
        <Team theme="dark" />
        <AboutCtaBanner />
      </div>
    </>
  );
}

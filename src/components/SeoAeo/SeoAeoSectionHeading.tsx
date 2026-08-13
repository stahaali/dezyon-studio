import sectionHeadingStyles from "@/components/Shared/SectionHeading.module.css";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import styles from "./SeoAeo.module.css";

type SeoAeoSectionHeadingProps = {
  id: string;
  title: { prefix: string; highlight: string; suffix: string };
  description?: string;
};

export function SeoAeoSectionHeading({
  id,
  title,
  description,
}: SeoAeoSectionHeadingProps) {
  return (
    <div
      className={`${sectionHeadingStyles.heading} ${sectionHeadingStyles.center} ${styles.sectionHeading}`}
    >
      <h2
        id={id}
        className={`${splitTitleStyles.title} ${splitTitleStyles.sizeSection} ${styles.title}`}
      >
        {title.prefix}
        <span className={styles.wordHighlight}>{title.highlight}</span>
        {title.suffix}
      </h2>
      {description ? <p className={styles.sectionDescription}>{description}</p> : null}
    </div>
  );
}

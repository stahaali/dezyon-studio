import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import styles from "./WebAppsSectionHeading.module.css";

type WebAppsSectionHeadingProps = {
  id: string;
  prefix: string;
  highlight: string;
  suffix?: string;
  centered?: boolean;
  className?: string;
};

export function WebAppsSectionHeading({
  id,
  prefix,
  highlight,
  suffix = "",
  centered = false,
  className = "",
}: WebAppsSectionHeadingProps) {
  return (
    <h2
      id={id}
      className={[
        splitTitleStyles.title,
        splitTitleStyles.sizeSection,
        styles.title,
        centered ? styles.titleCenter : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className={splitTitleStyles.lightOnDark}>
        {prefix}
        <span className={styles.wordHighlight}>{highlight}</span>
        {suffix}
      </span>
    </h2>
  );
}

import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import { splitTitle } from "@/lib/split-title";
import styles from "./PlansPricingHeading.module.css";

type HeadingSize = "hero" | "section" | "panel";
type HeadingTag = "h1" | "h2" | "h3";

const sizeClasses: Record<HeadingSize, string> = {
  hero: splitTitleStyles.sizeHero,
  section: splitTitleStyles.sizeSection,
  panel: splitTitleStyles.sizePanel,
};

type PlansPricingHeadingProps = {
  title?: string;
  prefix?: string;
  highlight?: string;
  suffix?: string;
  as?: HeadingTag;
  size?: HeadingSize;
  align?: "left" | "center";
  className?: string;
  id?: string;
};

function resolveParts({
  title = "",
  prefix,
  highlight,
  suffix,
}: PlansPricingHeadingProps) {
  if (highlight !== undefined) {
    return {
      prefix: prefix ?? "",
      highlight,
      suffix: suffix ?? "",
    };
  }

  const { accent, light } = splitTitle(title);

  if (!light) {
    return {
      prefix: prefix ?? "",
      highlight: accent,
      suffix: suffix ?? "",
    };
  }

  return {
    prefix: prefix ?? `${accent} `,
    highlight: light,
    suffix: suffix ?? "",
  };
}

export function PlansPricingHeading({
  title,
  prefix,
  highlight,
  suffix,
  as: Tag = "h2",
  size = "section",
  align = "left",
  className = "",
  id,
}: PlansPricingHeadingProps) {
  const parts = resolveParts({ title, prefix, highlight, suffix });

  return (
    <Tag
      id={id}
      className={`${splitTitleStyles.title} ${sizeClasses[size]} ${styles.heading} ${styles[align]} ${className}`.trim()}
    >
      {parts.prefix}
      <span className={styles.wordHighlight}>{parts.highlight}</span>
      {parts.suffix}
    </Tag>
  );
}

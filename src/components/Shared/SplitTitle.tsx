import { splitTitle } from "@/lib/split-title";
import styles from "./SplitTitle.module.css";

type HeadingTag = "h1" | "h2" | "h3";
type SplitTitleTheme = "dark" | "light";
type SplitTitleSize = "hero" | "section" | "panel" | "card";

const sizeClasses: Record<SplitTitleSize, string> = {
  hero: styles.sizeHero,
  section: styles.sizeSection,
  panel: styles.sizePanel,
  card: styles.sizeCard,
};

interface SplitTitleProps {
  title?: string;
  accent?: string;
  light?: string;
  as?: HeadingTag;
  theme?: SplitTitleTheme;
  size?: SplitTitleSize;
  className?: string;
  id?: string;
  lineBreak?: boolean;
}

export function SplitTitle({
  title = "",
  accent,
  light,
  as: Tag = "h2",
  theme = "light",
  size = "section",
  className = "",
  id,
  lineBreak = true,
}: SplitTitleProps) {
  const parts =
    accent !== undefined
      ? { accent, light: light ?? "" }
      : splitTitle(title);

  const lightClass = theme === "dark" ? styles.lightOnDark : styles.lightOnLight;

  return (
    <Tag
      id={id}
      className={`${styles.title} ${sizeClasses[size]} ${className}`.trim()}
    >
      <span className={styles.accent}>{parts.accent}</span>
      {parts.light ? (
        <>
          <br className={lineBreak ? styles.breakOnSm : styles.break} />
          {!lineBreak && " "}
          <span className={lightClass}>{parts.light}</span>
        </>
      ) : null}
    </Tag>
  );
}

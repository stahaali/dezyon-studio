import type { ReactNode } from "react";
import { SplitTitle } from "@/components/Shared/SplitTitle";
import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  label?: string;
  title: string;
  titleAccent?: string;
  titleLight?: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  lineBreak?: boolean;
  className?: string;
  children?: ReactNode;
}

export function SectionHeading({
  label,
  title,
  titleAccent,
  titleLight,
  description,
  align = "center",
  light = false,
  lineBreak = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`${styles.heading} ${styles[align]} ${light ? styles.light : ""} ${className}`.trim()}
    >
      {label && <span className={styles.label}>{label}</span>}
      <SplitTitle
        title={title}
        accent={titleAccent}
        light={titleLight}
        theme={light ? "dark" : "light"}
        size="section"
        lineBreak={lineBreak}
        className={styles.title}
      />
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}

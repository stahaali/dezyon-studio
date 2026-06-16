import styles from "./WebsiteAuditTool.module.css";

export type PsiShape = "triangle" | "square" | "circle" | "neutral";

export function getScoreShape(score: number | null): PsiShape {
  if (score === null) return "neutral";
  if (score >= 90) return "circle";
  if (score >= 50) return "square";
  return "triangle";
}

export function getMetricShape(id: string, value: string | null): PsiShape {
  if (!value) return "neutral";

  const normalized = value.trim().toLowerCase();
  let numeric: number;

  if (normalized.includes("ms")) {
    numeric = parseFloat(normalized);
  } else if (normalized.includes("s")) {
    numeric = parseFloat(normalized) * 1000;
  } else {
    numeric = parseFloat(normalized);
  }

  if (Number.isNaN(numeric)) return "neutral";

  switch (id) {
    case "fcp":
      if (numeric <= 1800) return "circle";
      if (numeric <= 3000) return "square";
      return "triangle";
    case "lcp":
      if (numeric <= 2500) return "circle";
      if (numeric <= 4000) return "square";
      return "triangle";
    case "tbt":
      if (numeric <= 200) return "circle";
      if (numeric <= 600) return "square";
      return "triangle";
    case "cls":
      if (numeric <= 0.1) return "circle";
      if (numeric <= 0.25) return "square";
      return "triangle";
    case "si":
      if (numeric <= 3400) return "circle";
      if (numeric <= 5800) return "square";
      return "triangle";
    default:
      return "neutral";
  }
}

export function PsiShapeIcon({ shape }: { shape: PsiShape }) {
  if (shape === "triangle") {
    return <span className={`${styles.psiShape} ${styles.psiShapeTriangle}`} aria-hidden="true" />;
  }

  if (shape === "square") {
    return <span className={`${styles.psiShape} ${styles.psiShapeSquare}`} aria-hidden="true" />;
  }

  if (shape === "circle") {
    return <span className={`${styles.psiShape} ${styles.psiShapeCircle}`} aria-hidden="true" />;
  }

  return <span className={`${styles.psiShape} ${styles.psiShapeNeutral}`} aria-hidden="true" />;
}

export function scoreRingColor(score: number | null): string {
  if (score === null) return "#5f6368";
  if (score >= 90) return "#0cce6b";
  if (score >= 50) return "#ffa400";
  return "#ff4e42";
}

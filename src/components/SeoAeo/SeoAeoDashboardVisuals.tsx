"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "./SeoAeo.module.css";

const CHART_WIDTH = 640;
const CHART_HEIGHT = 200;

type DashboardChartProps = {
  points: readonly number[];
  label: string;
  caption: string;
};

export function DashboardChart({ points, label, caption }: DashboardChartProps) {
  const prefersReducedMotion = useReducedMotion();
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const step = CHART_WIDTH / (points.length - 1);

  const coords = points.map((point, index) => ({
    x: index * step,
    y: CHART_HEIGHT - ((point - min) / range) * (CHART_HEIGHT - 24) - 12,
  }));

  const line = `M${coords.map(({ x, y }) => `${x.toFixed(2)},${y.toFixed(2)}`).join(" L")}`;
  const area = `${line} L${CHART_WIDTH},${CHART_HEIGHT} L0,${CHART_HEIGHT} Z`;
  const last = coords[coords.length - 1];

  return (
    <figure className={styles.chartFigure}>
      <figcaption className={styles.chartHead}>
        <span className={styles.chartLabel}>{label}</span>
        <span className={styles.chartCaption}>{caption}</span>
      </figcaption>

      <svg
        viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
        preserveAspectRatio="none"
        role="img"
        aria-label={`${label}, ${caption}: steady upward growth`}
        className={styles.chartSvg}
      >
        <defs>
          <linearGradient id="seoAeoDashArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#92e13a" stopOpacity="0.34" />
            <stop offset="100%" stopColor="#92e13a" stopOpacity="0" />
          </linearGradient>
        </defs>

        {[0, 0.25, 0.5, 0.75, 1].map((ratio) => (
          <line
            key={ratio}
            x1="0"
            x2={CHART_WIDTH}
            y1={CHART_HEIGHT * ratio}
            y2={CHART_HEIGHT * ratio}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        ))}

        <motion.path
          d={area}
          fill="url(#seoAeoDashArea)"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, delay: 0.6 }}
        />
        <motion.path
          d={line}
          fill="none"
          stroke="#92e13a"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          initial={prefersReducedMotion ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.9, ease: "easeInOut" }}
        />
        <motion.circle
          cx={last.x}
          cy={last.y}
          r="5"
          fill="#92e13a"
          initial={prefersReducedMotion ? false : { scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 1.7 }}
        />
      </svg>
    </figure>
  );
}

const RADIUS = 52;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

type ScoreRingProps = {
  value: number;
  label: string;
};

export function ScoreRing({ value, label }: ScoreRingProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={styles.scoreWrap}>
      <div className={styles.scoreRing}>
        <svg viewBox="0 0 132 132" className={styles.scoreSvg} role="presentation">
          <circle
            cx="66"
            cy="66"
            r={RADIUS}
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="11"
          />
          <motion.circle
            cx="66"
            cy="66"
            r={RADIUS}
            fill="none"
            stroke="#92e13a"
            strokeWidth="11"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            initial={prefersReducedMotion ? false : { strokeDashoffset: CIRCUMFERENCE }}
            whileInView={{ strokeDashoffset: CIRCUMFERENCE * (1 - value / 100) }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
        <span className={styles.scoreValue}>{value}</span>
      </div>
      <p className={styles.scoreLabel}>{label}</p>
    </div>
  );
}

type DashboardProgressProps = {
  label: string;
  value: number;
  delay?: number;
};

export function DashboardProgress({ label, value, delay = 0 }: DashboardProgressProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      role="meter"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <div className={styles.progressHead}>
        <span className={styles.progressLabel}>{label}</span>
        <span className={styles.progressValue}>{value}%</span>
      </div>
      <div className={styles.progressTrack}>
        <motion.div
          className={styles.progressFill}
          initial={prefersReducedMotion ? false : { width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.1, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={prefersReducedMotion ? { width: `${value}%` } : undefined}
        />
      </div>
    </div>
  );
}

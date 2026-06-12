import { Star } from "lucide-react";
import { testimonials } from "@/data/site";
import styles from "./Testimonials.module.css";

type Testimonial = (typeof testimonials)[number];

function formatReviewName(name: string): string {
  return name
    .toLowerCase()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const rowOne = testimonials.slice(0, 4);
const rowTwo = testimonials.slice(4, 8);

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className={styles.card}>
      <div className={styles.stars} aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, starIndex) => (
          <Star
            key={starIndex}
            size={14}
            fill="currentColor"
            strokeWidth={0}
            aria-hidden="true"
          />
        ))}
      </div>

      <blockquote className={styles.quote}>
        <p>&ldquo;{item.quote}&rdquo;</p>
      </blockquote>

      <footer className={styles.author}>
        <cite className={styles.name}>{formatReviewName(item.name)}</cite>
      </footer>
    </article>
  );
}

function MarqueeRow({
  items,
  direction,
}: {
  items: readonly Testimonial[];
  direction: "ltr" | "rtl";
}) {
  const loopItems = [...items, ...items];

  return (
    <div className={styles.row}>
      <div
        className={`${styles.track} ${
          direction === "ltr" ? styles.trackLtr : styles.trackRtl
        }`}
      >
        {loopItems.map((item, index) => (
          <TestimonialCard key={`${item.name}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export function TestimonialsSlider() {
  return (
    <div className={styles.slider} aria-label="Customer testimonials">
      <MarqueeRow items={rowOne} direction="ltr" />
      <MarqueeRow items={rowTwo} direction="rtl" />
    </div>
  );
}

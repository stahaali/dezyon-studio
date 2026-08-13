"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { useId, useState } from "react";
import { seoAeoFaq } from "@/data/seo-aeo";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import { SeoAeoSectionHeading } from "./SeoAeoSectionHeading";
import styles from "./SeoAeo.module.css";

export function SeoAeoFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const prefersReducedMotion = useReducedMotion();
  const baseId = useId();

  return (
    <section className={styles.section} aria-labelledby="seo-aeo-faq-heading">
      <Container className={styles.container}>
        <ScrollReveal>
          <SeoAeoSectionHeading id="seo-aeo-faq-heading" title={seoAeoFaq.title} />
        </ScrollReveal>

        <div className={styles.faqList}>
          {seoAeoFaq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-button-${index}`;

            return (
              <div key={item.question} className={styles.faqItem}>
                <h3 className={styles.faqHeading}>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={styles.faqButton}
                  >
                    <span className={styles.faqQuestion}>{item.question}</span>
                    <span
                      aria-hidden="true"
                      className={`${styles.faqToggle} ${isOpen ? styles.faqToggleOpen : ""}`.trim()}
                    >
                      <Plus size={16} strokeWidth={2.4} />
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="panel"
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className={styles.faqPanel}
                    >
                      <p className={styles.faqAnswer}>{item.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

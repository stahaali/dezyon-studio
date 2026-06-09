"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { contactFaq } from "@/data/contact";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import styles from "./ContactFAQ.module.css";

export function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={styles.section} aria-labelledby="contact-faq-heading">
      <Container>
        <ScrollReveal>
          <h2
            id="contact-faq-heading"
            className={`${splitTitleStyles.title} ${splitTitleStyles.sizeSection} ${styles.title}`}
          >
            {contactFaq.titlePrefix}
            <span className={styles.wordHighlight}>
              {contactFaq.titleHighlight}
            </span>
            {contactFaq.titleSuffix}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className={styles.list}>
            {contactFaq.items.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <article key={item.question} className={styles.item}>
                  <button
                    type="button"
                    className={styles.trigger}
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span className={styles.question}>{item.question}</span>
                    <span className={styles.iconWrap} aria-hidden="true">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className={styles.answer}>
                      <p>{item.answer}</p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

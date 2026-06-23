"use client";

import { useState } from "react";
import Link from "next/link";
import { Minus, Plus } from "lucide-react";
import { contactFaq } from "@/data/contact";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import styles from "./ContactFAQ.module.css";

type ContactFAQProps = {
  twoColumn?: boolean;
  sectionClassName?: string;
};

type FaqItem = (typeof contactFaq.items)[number];

function FaqItemCard({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
}) {
  return (
    <article
      key={item.question}
      className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
    >
      <button
        type="button"
        className={`${styles.trigger} ${isOpen ? styles.triggerOpen : ""}`}
        aria-expanded={isOpen}
        onClick={() => onToggle(index)}
      >
        <span className={styles.question}>{item.question}</span>
        <span className={styles.iconWrap} aria-hidden="true">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      {isOpen && (
        <div className={styles.answer}>
          {item.blocks.map((block, blockIndex) => {
            if (block.type === "list") {
              return (
                <ul
                  key={`${item.question}-list-${blockIndex}`}
                  className={styles.answerList}
                >
                  {block.items.map((listItem) => (
                    <li key={listItem}>{listItem}</li>
                  ))}
                </ul>
              );
            }

            return (
              <p key={`${item.question}-p-${blockIndex}`}>
                {block.parts.map((part, partIndex) => {
                  if (part.kind === "link") {
                    return (
                      <Link
                        key={`${item.question}-link-${partIndex}`}
                        href={part.href}
                        className={styles.answerLink}
                      >
                        {part.label}
                      </Link>
                    );
                  }

                  return (
                    <span key={`${item.question}-text-${partIndex}`}>
                      {part.value}
                    </span>
                  );
                })}
              </p>
            );
          })}
        </div>
      )}
    </article>
  );
}

export function ContactFAQ({
  twoColumn = false,
  sectionClassName = "",
}: ContactFAQProps) {
  const [openIndex, setOpenIndex] = useState(-1);
  const items = contactFaq.items;
  const midpoint = Math.ceil(items.length / 2);
  const leftItems = twoColumn ? items.slice(0, midpoint) : items;
  const rightItems = twoColumn ? items.slice(midpoint) : [];

  const handleToggle = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  const renderColumn = (columnItems: readonly FaqItem[], offset: number) => (
    <div className={styles.list}>
      {columnItems.map((item, columnIndex) => {
        const index = offset + columnIndex;

        return (
          <FaqItemCard
            key={item.question}
            item={item}
            index={index}
            isOpen={openIndex === index}
            onToggle={handleToggle}
          />
        );
      })}
    </div>
  );

  return (
    <section
      className={`${styles.section} ${sectionClassName}`.trim()}
      aria-labelledby="contact-faq-heading"
    >
      <Container>
        <ScrollReveal className={styles.titleWrap}>
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
          {twoColumn ? (
            <div className={styles.columns}>
              {renderColumn(leftItems, 0)}
              {renderColumn(rightItems, midpoint)}
            </div>
          ) : (
            renderColumn(leftItems, 0)
          )}
        </ScrollReveal>
      </Container>
    </section>
  );
}

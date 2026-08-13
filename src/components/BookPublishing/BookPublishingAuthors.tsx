"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import {
  BOOK_PUBLISHING_AUTHORS_PAGE_SIZE,
  bookPublishingAuthors,
  bookPublishingAuthorsIntro,
} from "@/data/book-publishing";
import { Button } from "@/components/Shared/Button";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import sectionHeadingStyles from "@/components/Shared/SectionHeading.module.css";
import styles from "./BookPublishing.module.css";

function getLastName(name: string) {
  const parts = name.trim().split(/\s+/);
  return parts[parts.length - 1] ?? name;
}

const sortedAuthors = [...bookPublishingAuthors].sort((a, b) =>
  getLastName(a.name).localeCompare(getLastName(b.name)),
);

export function BookPublishingAuthors() {
  const [page, setPage] = useState(1);

  const totalPages = Math.max(
    1,
    Math.ceil(sortedAuthors.length / BOOK_PUBLISHING_AUTHORS_PAGE_SIZE),
  );
  const currentPage = Math.min(page, totalPages);

  const visibleAuthors = useMemo(() => {
    const start = (currentPage - 1) * BOOK_PUBLISHING_AUTHORS_PAGE_SIZE;
    return sortedAuthors.slice(start, start + BOOK_PUBLISHING_AUTHORS_PAGE_SIZE);
  }, [currentPage]);

  const pageNumbers = useMemo(() => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    const pages = new Set<number>([1, totalPages, currentPage]);

    if (currentPage > 1) pages.add(currentPage - 1);
    if (currentPage < totalPages) pages.add(currentPage + 1);

    return [...pages].sort((a, b) => a - b);
  }, [currentPage, totalPages]);

  return (
    <section
      className={`${styles.section} ${styles.authorsSection}`}
      aria-labelledby="book-publishing-authors-heading"
    >
      <Container className={styles.container}>
        <ScrollReveal>
          <div
            className={`${sectionHeadingStyles.heading} ${sectionHeadingStyles.center} ${styles.sectionHeading}`}
          >
            <h2
              id="book-publishing-authors-heading"
              className={`${splitTitleStyles.title} ${styles.sectionTitle} ${styles.title}`}
            >
              {bookPublishingAuthorsIntro.titlePrefix}
              <span className={styles.wordHighlight}>
                {bookPublishingAuthorsIntro.titleHighlight}
              </span>
            </h2>
            <p className={styles.sectionDescription}>
              {bookPublishingAuthorsIntro.description}
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.authorGrid}>
          {visibleAuthors.map((author) => (
            <article key={author.id} className={styles.authorCard}>
              <div className={styles.authorPhoto}>
                <Image
                  src={author.image}
                  alt={`${author.name} author headshot`}
                  fill
                  sizes="96px"
                  className={styles.authorPhotoEl}
                />
              </div>
              <h3 className={styles.authorName}>{author.name}</h3>
              <p className={styles.authorRole}>{author.role}</p>
            </article>
          ))}
        </div>

        {totalPages > 1 ? (
          <nav className={styles.authorPagination} aria-label="Authors pagination">
            <button
              type="button"
              className={styles.authorPageBtn}
              onClick={() => setPage((value) => Math.max(1, value - 1))}
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>

            {pageNumbers.map((pageNumber, index) => {
              const prev = pageNumbers[index - 1];
              const showEllipsis = prev !== undefined && pageNumber - prev > 1;

              return (
                <span key={pageNumber} style={{ display: "contents" }}>
                  {showEllipsis ? (
                    <span className={styles.authorPageEllipsis} aria-hidden="true">
                      …
                    </span>
                  ) : null}
                  <button
                    type="button"
                    className={`${styles.authorPageBtn} ${
                      pageNumber === currentPage ? styles.authorPageBtnActive : ""
                    }`.trim()}
                    onClick={() => setPage(pageNumber)}
                    aria-current={pageNumber === currentPage ? "page" : undefined}
                  >
                    {pageNumber}
                  </button>
                </span>
              );
            })}

            <button
              type="button"
              className={styles.authorPageBtn}
              onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
              disabled={currentPage === totalPages}
              aria-label="Next page"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </nav>
        ) : null}

        <div className={styles.authorCtaWrap}>
          <p className={styles.authorCtaNote}>{bookPublishingAuthorsIntro.ctaNote}</p>
          <Button href={bookPublishingAuthorsIntro.cta.href} size="lg">
            {bookPublishingAuthorsIntro.cta.label}
            <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { bookPublishingWritingCta } from "@/data/book-publishing";
import { footerContact } from "@/data/site";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import styles from "./BookPublishingWritingCta.module.css";

const phoneHref = `tel:${footerContact.phone.replace(/\D/g, "")}`;

const bookClassMap = [styles.bookOne, styles.bookTwo, styles.bookThree] as const;

export function BookPublishingWritingCta() {
  return (
    <section className={styles.section} aria-labelledby="book-publishing-writing-cta-heading">
      <Container className={styles.container}>
        <ScrollReveal>
          <div className={styles.panel}>
            <div className={styles.grid}>
              <div className={styles.content}>
                <h2 id="book-publishing-writing-cta-heading" className={styles.title}>
                  {bookPublishingWritingCta.title}
                </h2>
                <p className={styles.description}>{bookPublishingWritingCta.description}</p>
                <div className={styles.actions}>
                  <Link
                    href={bookPublishingWritingCta.primaryCta.href}
                    className={styles.primaryBtn}
                  >
                    {bookPublishingWritingCta.primaryCta.label}
                  </Link>
                  <a href={phoneHref} className={styles.phoneBtn}>
                    {footerContact.phone}
                  </a>
                </div>
              </div>

              <div className={styles.visual} aria-hidden="true">
                <div className={styles.books}>
                  {bookPublishingWritingCta.books.map((book, index) => (
                    <figure
                      key={book.id}
                      className={`${styles.book} ${bookClassMap[index]}`}
                      style={{ transform: `rotate(${book.rotation}deg)` }}
                    >
                      <Image
                        src={book.image}
                        alt=""
                        fill
                        sizes="(max-width: 991px) 120px, 160px"
                        className={styles.bookImage}
                      />
                      <span className={styles.bookSpine} />
                      <figcaption className={styles.srOnly}>{book.title}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

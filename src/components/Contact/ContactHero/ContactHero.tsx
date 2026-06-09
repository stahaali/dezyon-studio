"use client";

import Image from "next/image";
import Link from "next/link";
import { contactHero } from "@/data/contact";
import { Button } from "@/components/Shared/Button";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import styles from "./ContactHero.module.css";

export function ContactHero() {
  const { testimonial, fields, emailLink } = contactHero;

  return (
    <section className={styles.section} aria-labelledby="contact-hero-heading">
      <Container className={styles.container}>
        <ScrollReveal>
          <div className={styles.panel}>
            <figure className={styles.testimonial}>
              <Image
                src={testimonial.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.testimonialImage}
              />
              <figcaption className={styles.testimonialCaption}>
                <blockquote className={styles.quote}>
                  <p>&ldquo;{testimonial.quote}&rdquo;</p>
                </blockquote>
                <p className={styles.authorName}>{testimonial.name}</p>
                <p className={styles.authorRole}>{testimonial.role}</p>
              </figcaption>
            </figure>

            <div className={styles.formSide}>
              <h2 id="contact-hero-heading" className={styles.intro}>
                {contactHero.intro}
              </h2>

              <form
                className={styles.form}
                onSubmit={(event) => event.preventDefault()}
              >
                <div className={styles.row}>
                  <label className={styles.field}>
                    <span className={styles.srOnly}>{fields.name}</span>
                    <input
                      type="text"
                      name="name"
                      placeholder={fields.name}
                      className={styles.input}
                      autoComplete="name"
                    />
                  </label>
                  <label className={styles.field}>
                    <span className={styles.srOnly}>{fields.email}</span>
                    <input
                      type="email"
                      name="email"
                      placeholder={fields.email}
                      className={styles.input}
                      autoComplete="email"
                    />
                  </label>
                </div>

                <label className={styles.field}>
                  <span className={styles.srOnly}>{fields.subject}</span>
                  <input
                    type="text"
                    name="subject"
                    placeholder={fields.subject}
                    className={styles.input}
                  />
                </label>

                <label className={styles.field}>
                  <span className={styles.srOnly}>{fields.message}</span>
                  <textarea
                    name="message"
                    placeholder={fields.message}
                    rows={5}
                    className={`${styles.input} ${styles.textarea}`}
                  />
                </label>

                <Button type="submit" size="lg" className={styles.submit}>
                  {contactHero.submitLabel}
                </Button>
              </form>

              <p className={styles.emailNote}>
                {contactHero.emailNote}{" "}
                <Link href={emailLink.href} className={styles.emailLink}>
                  {emailLink.label}
                </Link>
                .
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

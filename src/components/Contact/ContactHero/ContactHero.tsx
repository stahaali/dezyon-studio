"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { RecaptchaField } from "@/components/Contact/RecaptchaField/RecaptchaField";
import { contactHero } from "@/data/contact";
import { RECAPTCHA_SITE_KEY } from "@/lib/recaptcha-config";
import { Button } from "@/components/Shared/Button";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import styles from "./ContactHero.module.css";

export function ContactHero() {
  const router = useRouter();
  const { testimonial, fields } = contactHero;
  const isSubmittingRef = useRef(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [recaptchaKey, setRecaptchaKey] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const resetRecaptcha = () => {
    setRecaptchaToken("");
    setRecaptchaKey((current) => current + 1);
  };

  const validateForm = (form: HTMLFormElement) => {
    const elements = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
      "input, textarea"
    );

    let isValid = true;

    elements.forEach((field) => {
      field.setCustomValidity("");

      if (!field.value.trim()) {
        field.setCustomValidity("This field is required.");
        isValid = false;
      }
    });

    if (!isValid || !form.checkValidity()) {
      form.reportValidity();
      return false;
    }

    return true;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmittingRef.current) {
      return;
    }

    const form = event.currentTarget;

    if (!validateForm(form)) {
      return;
    }

    if (!recaptchaToken) {
      setSubmitError("Please complete the reCAPTCHA verification.");
      return;
    }

    const formData = new FormData(form);

    const payload = {
      full_name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      subject: String(formData.get("subject") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      recaptcha_token: recaptchaToken,
    };

    isSubmittingRef.current = true;
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to send message.");
      }

      if (result.mail_sent === false) {
        throw new Error(
          result.message ||
            "Your message was saved, but the email notification could not be sent. Please email hello@dezyonstudio.com directly."
        );
      }

      router.push("/contact/thank-you");
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again.";
      setSubmitError(message);
      resetRecaptcha();
    } finally {
      isSubmittingRef.current = false;
      setIsSubmitting(false);
    }
  };

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

              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                  <label className={styles.field}>
                    <span className={styles.srOnly}>{fields.name}</span>
                    <input
                      type="text"
                      name="name"
                      placeholder={fields.name}
                      className={styles.input}
                      autoComplete="name"
                      required
                      aria-required="true"
                      minLength={1}
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
                      required
                      aria-required="true"
                      minLength={1}
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
                    required
                    aria-required="true"
                    minLength={1}
                  />
                </label>

                <label className={styles.field}>
                  <span className={styles.srOnly}>{fields.message}</span>
                  <textarea
                    name="message"
                    placeholder={fields.message}
                    rows={5}
                    className={`${styles.input} ${styles.textarea}`}
                    required
                    aria-required="true"
                    minLength={1}
                  />
                </label>

                {RECAPTCHA_SITE_KEY ? (
                  <div className={styles.captcha}>
                    <RecaptchaField
                      widgetKey={recaptchaKey}
                      onChange={setRecaptchaToken}
                    />
                  </div>
                ) : null}

                {submitError ? (
                  <p className={styles.error} role="alert">
                    {submitError}
                  </p>
                ) : null}

                <Button
                  type="submit"
                  size="lg"
                  className={styles.submit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : contactHero.submitLabel}
                </Button>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

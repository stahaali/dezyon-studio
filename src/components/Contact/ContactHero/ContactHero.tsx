"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { RecaptchaField } from "@/components/Contact/RecaptchaField/RecaptchaField";
import { contactHero, contactReach } from "@/data/contact";
import { useVapiSimli } from "@/context/VapiSimliContext";
import { Button } from "@/components/Shared/Button";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import styles from "./ContactHero.module.css";

export function ContactHero() {
  const router = useRouter();
  const { openWidget } = useVapiSimli();
  const { fields } = contactHero;
  const isSubmittingRef = useRef(false);
  const nameInputRef = useRef<HTMLInputElement>(null);
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

    const contactApiUrl =
      process.env.NODE_ENV === "development" ? "/api/contact/" : "/api/contact.php";

    try {
      const response = await fetch(contactApiUrl, {
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

  const handleVoiceChat = () => {
    openWidget();
  };

  const handleFocusBriefForm = () => {
    nameInputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    nameInputRef.current?.focus();
  };

  return (
    <section
      className={styles.section}
      aria-label="Contact form"
      data-section-reveal="skip"
    >
      <Container className={styles.container}>
        <ScrollReveal>
          <div className={styles.panel}>
            <div className={styles.reachSide}>
              {contactReach.items.map((item) => (
                <article key={item.title} className={styles.reachCard}>
                  <Image
                    src={item.icon}
                    alt={`${item.title} icon`}
                    width={44}
                    height={44}
                    className={styles.reachIcon}
                    aria-hidden="true"
                  />
                  <div className={styles.reachCardBody}>
                    <h3 className={styles.reachTitle}>{item.title}</h3>
                    <p className={styles.reachDesc}>{item.description}</p>
                    {"action" in item.link && item.link.action === "voice-chat" ? (
                      <button
                        type="button"
                        className={`${styles.reachLink} ${styles.reachLinkButton}`}
                        onClick={handleVoiceChat}
                      >
                        <span>{item.link.label}</span>
                        <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
                      </button>
                    ) : "action" in item.link &&
                      item.link.action === "focus-brief-form" ? (
                      <button
                        type="button"
                        className={`${styles.reachLink} ${styles.reachLinkButton}`}
                        onClick={handleFocusBriefForm}
                      >
                        <span>{item.link.label}</span>
                        <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
                      </button>
                    ) : (
                      <Link
                        href={item.link.href}
                        className={styles.reachLink}
                        target={
                          item.link.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.link.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        aria-label={
                          item.link.href.startsWith("tel:")
                            ? `${item.link.label} - ${item.title}`
                            : undefined
                        }
                      >
                        <span>{item.link.label}</span>
                        <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <div className={styles.formSide}>
              <form
                id="contact-brief-form"
                className={styles.form}
                onSubmit={handleSubmit}
              >
                <div className={styles.row}>
                  <label className={styles.field}>
                    <span className={styles.srOnly}>{fields.name}</span>
                    <input
                      ref={nameInputRef}
                      id="contact-full-name"
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

                <div className={styles.captcha}>
                  <RecaptchaField
                    widgetKey={recaptchaKey}
                    onChange={setRecaptchaToken}
                  />
                </div>

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

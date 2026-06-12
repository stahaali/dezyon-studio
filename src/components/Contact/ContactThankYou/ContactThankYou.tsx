"use client";

import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import styles from "./ContactThankYou.module.css";

const REDIRECT_DELAY_MS = 5000;

export function ContactThankYou() {
  const router = useRouter();

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      router.push("/");
    }, REDIRECT_DELAY_MS);

    return () => window.clearTimeout(timeoutId);
  }, [router]);

  return (
    <section className={styles.section} aria-labelledby="contact-thank-you-heading">
      <Container className={styles.container}>
        <ScrollReveal>
          <div className={styles.card}>
            <Check size={52} strokeWidth={2.5} className={styles.icon} aria-hidden="true" />

            <h1 id="contact-thank-you-heading" className={styles.title}>
              Thank You!
            </h1>

            <p className={styles.message}>
              Your message has been submitted successfully. Our team will review it
              and get back to you as soon as possible.
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

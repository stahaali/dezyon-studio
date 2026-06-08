import Image from "next/image";
import { Check } from "lucide-react";
import { pricingPlans } from "@/data/site";
import { Button } from "@/components/Shared/Button";
import { Container } from "@/components/Shared/Container";
import { SectionHeading } from "@/components/Shared/SectionHeading";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import styles from "./Pricing.module.css";

const MONEY_ILLUSTRATION = "/assets/img/pricing/money.svg";

export function Pricing() {
  return (
    <section id="pricing" className={`page-section ${styles.section}`}>
      <Container>
        <ScrollReveal>
          <SectionHeading
            className={styles.sectionHeading}
            title="Price plans as per your needs"
            description="No extra charges. No hidden fees."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className={styles.pricingBox}>
            {pricingPlans.map((plan) => {
              const isPopular = "popular" in plan && plan.popular;

              return (
              <article
                key={plan.id}
                className={`${styles.plan} ${isPopular ? styles.planFeatured : ""}`.trim()}
              >
                {isPopular && <span className={styles.popularBadge}>Popular</span>}

                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planDesc}>{plan.description}</p>

                <div className={styles.priceRow}>
                  <span className={styles.price}>${plan.price}</span>
                  <span className={styles.priceUnit}>USD</span>
                </div>
                <p className={styles.seats}>{plan.seatNote}</p>

                <Button href="#pricing" className={styles.ctaBtn}>
                  Start a free trial
                </Button>
                <p className={styles.trialNote}>No credit card required</p>

                <p className={styles.featuresLabel}>{plan.featuresLabel}</p>
                <ul className={styles.features}>
                  {plan.features.map((feature) => (
                    <li key={feature} className={styles.feature}>
                      <Check size={16} className={styles.checkIcon} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {isPopular && (
                  <Image
                    src={MONEY_ILLUSTRATION}
                    alt=""
                    width={120}
                    height={120}
                    className={styles.moneyIllustration}
                    aria-hidden="true"
                  />
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

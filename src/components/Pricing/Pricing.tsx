import Image from "next/image";
import { Check } from "lucide-react";
import { pricingPlans } from "@/data/site";
import { Button } from "@/components/Shared/Button";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import sectionHeadingStyles from "@/components/Shared/SectionHeading.module.css";
import styles from "./Pricing.module.css";

const MONEY_ILLUSTRATION = "/assets/img/pricing/money.svg";

export function Pricing() {
  return (
    <section id="pricing" className={`page-section ${styles.section}`}>
      <Container>
        <ScrollReveal>
          <div
            className={`${sectionHeadingStyles.heading} ${sectionHeadingStyles.center} ${sectionHeadingStyles.light} ${styles.sectionHeading}`}
          >
            <h2
              className={`${splitTitleStyles.title} ${splitTitleStyles.sizeSection} ${styles.title}`}
            >
              Price Plans As Per Your{" "}
              <span className={styles.wordHighlight}>Needs</span>
            </h2>
            <p className={sectionHeadingStyles.description}>
              No extra charges. No hidden fees.
            </p>
          </div>
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
                    width={257}
                    height={187}
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
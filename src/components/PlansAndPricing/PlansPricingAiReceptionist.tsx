import Link from "next/link";
import {
  Bot,
  CalendarClock,
  Check,
  GitBranch,
  Globe2,
  PhoneForwarded,
} from "lucide-react";
import { aiReceptionistPage } from "@/data/plans-and-pricing";
import { footerContact } from "@/data/site";
import { SITE_NAME } from "@/lib/constants";
import { PlansPricingHeading } from "@/components/PlansAndPricing/PlansPricingHeading";
import { PlansPricingUniversalCards } from "@/components/PlansAndPricing/PlansPricingUniversalCards";
import styles from "./PlansPricingAiReceptionist.module.css";

const benefitIcons = [Globe2, PhoneForwarded, GitBranch, CalendarClock];

export function PlansPricingAiReceptionist() {
  return (
    <div className={styles.wrap}>
      <header className={styles.header}>
        <div className={styles.headerIcon} aria-hidden="true">
          <Bot size={22} strokeWidth={2} />
        </div>
        <div>
          <p className={styles.eyebrow}>{SITE_NAME}</p>
          <PlansPricingHeading
            title={aiReceptionistPage.title}
            size="panel"
            className={styles.title}
          />
          <p className={styles.description}>
            Never miss a call with AI Receptionists that work with any phone system.
          </p>
        </div>
      </header>

      <PlansPricingUniversalCards />

      <section className={styles.benefits} aria-labelledby="ai-receptionist-benefits">
        <PlansPricingHeading
          id="ai-receptionist-benefits"
          title={aiReceptionistPage.benefits.title}
          size="section"
          align="center"
          className={styles.benefitsTitle}
        />
        <div className={styles.benefitsGrid}>
          {aiReceptionistPage.benefits.items.map((item, index) => {
            const Icon = benefitIcons[index] ?? Globe2;

            return (
              <article key={item.id} className={styles.benefitCard}>
                <div className={styles.benefitIcon} aria-hidden="true">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <h4 className={styles.benefitHeading}>{item.title}</h4>
                <p className={styles.benefitText}>{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.ctaBanner} aria-label="AI Receptionist call to action">
        <div className={styles.ctaCopy}>
          <PlansPricingHeading
            title={aiReceptionistPage.cta.title}
            size="panel"
            className={styles.ctaTitle}
          />
          <p className={styles.ctaDescription}>{aiReceptionistPage.cta.description}</p>
        </div>
        <Link href={aiReceptionistPage.cta.button.href} className={styles.ctaBtn}>
          {aiReceptionistPage.cta.button.label}
        </Link>
      </section>

      <div className={styles.exploreFeatures} aria-labelledby="explore-features-title">
        <div className={styles.exploreHeader}>
          <PlansPricingHeading
            id="explore-features-title"
            title={aiReceptionistPage.exploreFeatures.title}
            size="panel"
            className={styles.exploreTitle}
          />
          <p className={styles.exploreContact}>
            <Bot size={16} aria-hidden="true" />
            Have a question? Call{" "}
            <a
              href={`tel:${footerContact.phone.replace(/[^\d+]/g, "")}`}
              className={styles.explorePhone}
            >
              {footerContact.phone}
            </a>
          </p>
        </div>

        {aiReceptionistPage.exploreFeatures.categories.map((category) => (
          <div key={category.id} className={styles.exploreCategory}>
            <h4 className={styles.exploreCategoryTitle}>{category.title}</h4>
            <div className={styles.exploreRows}>
              {category.rows.map((row) => (
                <div key={row.label} className={styles.exploreRow}>
                  <span className={styles.exploreLabel}>{row.label}</span>
                  <span className={styles.exploreValue}>
                    {row.value === true ? (
                      <Check size={18} className={styles.exploreCheck} aria-label="Included" />
                    ) : (
                      row.value.split("\n").map((line, index) => (
                        <span key={`${row.label}-${index}`} className={styles.exploreValueLine}>
                          {line}
                        </span>
                      ))
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className={styles.exploreDisclaimers}>
          {aiReceptionistPage.exploreFeatures.disclaimers.map((note) => (
            <p key={note} className={styles.exploreDisclaimer}>
              {note}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

import {
  Bell,
  Brain,
  Briefcase,
  Building2,
  Check,
  Clock,
  Cloud,
  DollarSign,
  MessageCircle,
  Mic,
  Scale,
  ShoppingCart,
  Sparkles,
  Stethoscope,
  TrendingUp,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { TalkingWebsiteFeatureIcon } from "@/components/TalkingWebsite/TalkingWebsiteFeatureIcon";
import {
  TalkingWebsiteGradientIcon,
  talkingWebsiteBenefitTones,
  talkingWebsiteHeroMetricTones,
  talkingWebsiteTaglineTones,
  talkingWebsiteUseCaseTones,
} from "@/components/TalkingWebsite/TalkingWebsiteGradientIcon";
import {
  talkingWebsiteBenefits,
  talkingWebsiteBenefitsIntro,
  talkingWebsiteFeatures,
  talkingWebsiteHero,
  talkingWebsitePricing,
  talkingWebsiteTaglines,
  talkingWebsiteUseCases,
} from "@/data/talking-website";
import { TalkingWebsiteHeroCta } from "@/components/TalkingWebsite/TalkingWebsiteHeroCta";
import { TalkingWebsiteProcessSection } from "@/components/TalkingWebsite/TalkingWebsiteProcessSection";
import { AboutCtaBanner } from "@/components/About/AboutCtaBanner/AboutCtaBanner";
import { Button } from "@/components/Shared/Button";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import { PlansPricingHeading } from "@/components/PlansAndPricing/PlansPricingHeading";
import styles from "./TalkingWebsite.module.css";

const sectionEyebrows = {
  features: "Capabilities",
  industries: "Industries",
  benefits: "Results",
  pricing: "Plans",
} as const;

const useCaseIcons = [
  Building2,
  Scale,
  Stethoscope,
  Wrench,
  Briefcase,
  ShoppingCart,
  Cloud,
] as const;

const benefitIcons = [TrendingUp, Zap, DollarSign, Bell, Users] as const;

const benefitAccentClasses = [
  styles.benefitAccentTl,
  styles.benefitAccentTc,
  styles.benefitAccentTr,
  styles.benefitAccentBl,
  styles.benefitAccentBc,
] as const;

const taglineIcons = [MessageCircle, Sparkles, Users] as const;

const heroMetrics = [
  { icon: Mic, label: "Voice AI" },
  { icon: Clock, label: "24/7 Live" },
  { icon: Zap, label: "Instant Reply" },
] as const;

export function TalkingWebsiteContent() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="talking-website-hero-heading">
        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.heroBgImage}>
            <Image
              src={talkingWebsiteHero.bannerImage}
              alt={talkingWebsiteHero.bannerImageAlt}
              fill
              priority
              sizes="100vw"
              className={styles.heroBgImageEl}
            />
          </div>
          <div className={styles.heroBgOverlay} />
        </div>

        <Container className={styles.heroContainer}>
          <div className={styles.heroGrid}>
            <ScrollReveal className={styles.heroContent}>
              <span className={styles.badge}>
                <TalkingWebsiteGradientIcon icon={Sparkles} tone="empathy" size="label" />
                {talkingWebsiteHero.badge}
              </span>
              <h1
                id="talking-website-hero-heading"
                className={`${splitTitleStyles.title} ${splitTitleStyles.sizeHero} ${styles.heroTitle}`}
              >
                <span className={splitTitleStyles.lightOnDark}>
                  {talkingWebsiteHero.titlePrefix}
                  <span className={styles.wordHighlight}>
                    {talkingWebsiteHero.titleHighlight}
                  </span>
                </span>
              </h1>
              <p className={styles.heroSubtitle}>{talkingWebsiteHero.subtitle}</p>
              <div className={styles.heroDescription}>
                {talkingWebsiteHero.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className={styles.heroCtas}>
                <TalkingWebsiteHeroCta label={talkingWebsiteHero.ctas.primary.label} />
              </div>
              <ul className={styles.heroMetrics} aria-label="Product highlights">
                {heroMetrics.map(({ icon: Icon, label }, index) => (
                  <li key={label}>
                    <TalkingWebsiteGradientIcon
                      icon={Icon}
                      tone={talkingWebsiteHeroMetricTones[index]}
                      size="metric"
                    />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className={styles.taglinesSection} aria-label="Product taglines">
        <Container className={styles.sectionContainer}>
          <div className={styles.taglinesGrid}>
            {talkingWebsiteTaglines.map((tagline, index) => {
              const TaglineIcon = taglineIcons[index];

              return (
                <ScrollReveal key={tagline} delay={0.04 + index * 0.05} as="article">
                  <article className={styles.taglineCard}>
                    <TalkingWebsiteGradientIcon
                      icon={TaglineIcon}
                      tone={talkingWebsiteTaglineTones[index]}
                      size="tagline"
                    />
                    <p className={styles.taglineCardText}>{tagline}</p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <TalkingWebsiteProcessSection />

      <section className={styles.featuresSection} aria-labelledby="features-heading">
        <Container className={styles.sectionContainer}>
          <ScrollReveal>
            <div className={styles.sectionIntro}>
              <span className={styles.sectionEyebrow}>{sectionEyebrows.features}</span>
              <PlansPricingHeading
                id="features-heading"
                prefix="Powerful "
                highlight="Features"
                size="section"
                align="center"
                className={styles.sectionHeading}
              />
            </div>
          </ScrollReveal>

          <div className={styles.featuresGrid}>
            {talkingWebsiteFeatures.map((feature, index) => (
              <ScrollReveal key={feature} delay={index * 0.04} as="article">
                <article className={styles.featureCard}>
                  <TalkingWebsiteFeatureIcon index={index} />
                  <h3 className={styles.featureTitle}>{feature}</h3>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className={styles.section} aria-labelledby="use-cases-heading">
        <Container className={styles.sectionContainer}>
          <ScrollReveal>
            <div className={styles.sectionIntro}>
              <span className={styles.sectionEyebrow}>{sectionEyebrows.industries}</span>
              <PlansPricingHeading
                id="use-cases-heading"
                prefix="Built For Every "
                highlight="Industry"
                size="section"
                align="center"
                className={styles.sectionHeading}
              />
            </div>
          </ScrollReveal>

          <div className={styles.useCasesCloud}>
            {talkingWebsiteUseCases.map((useCase, index) => {
              const Icon = useCaseIcons[index];

              return (
                <ScrollReveal key={useCase} delay={index * 0.04} as="article">
                  <article className={styles.useCaseCard}>
                    <TalkingWebsiteGradientIcon
                      icon={Icon}
                      tone={talkingWebsiteUseCaseTones[index]}
                      size="useCase"
                      className={styles.useCaseGradientIcon}
                    />
                    <span>{useCase}</span>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className={styles.benefitsSection} aria-labelledby="benefits-heading">
        <Container className={styles.sectionContainer}>
          <ScrollReveal>
            <div className={styles.sectionIntro}>
              <span className={styles.sectionEyebrow}>{sectionEyebrows.benefits}</span>
              <PlansPricingHeading
                id="benefits-heading"
                prefix="Why Businesses "
                highlight="Choose Us"
                size="section"
                align="center"
                className={styles.sectionHeading}
              />
              <p className={styles.benefitsIntro}>{talkingWebsiteBenefitsIntro}</p>
            </div>
          </ScrollReveal>

          <div className={styles.benefitsGrid}>
            {talkingWebsiteBenefits.map((benefit, index) => {
              const Icon = benefitIcons[index];

              return (
                <ScrollReveal key={benefit.title} delay={index * 0.05} as="article">
                  <article
                    className={`${styles.benefitCard} ${benefitAccentClasses[index]} ${index === 1 ? styles.benefitCardActive : ""}`}
                  >
                    <TalkingWebsiteGradientIcon
                      icon={Icon}
                      tone={talkingWebsiteBenefitTones[index]}
                      size="feature"
                      className={styles.benefitIcon}
                    />
                    <span className={styles.benefitStat}>{benefit.stat}</span>
                    <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                    <p className={styles.benefitDesc}>{benefit.description}</p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className={styles.pricingSection} aria-labelledby="pricing-heading">
        <Container className={styles.sectionContainer}>
          <ScrollReveal>
            <div className={styles.sectionIntro}>
              <span className={styles.sectionEyebrow}>{sectionEyebrows.pricing}</span>
              <PlansPricingHeading
                id="pricing-heading"
                prefix="Simple "
                highlight="Pricing"
                size="section"
                align="center"
                className={styles.sectionHeading}
              />
            </div>
          </ScrollReveal>

          <div className={styles.pricingGrid}>
            {talkingWebsitePricing.map((plan, index) => (
              <ScrollReveal key={plan.id} delay={index * 0.06} as="article">
                <article
                  className={`${styles.pricingCard} ${plan.featured ? styles.pricingCardFeatured : ""}`}
                >
                  {plan.featured ? (
                    <span className={styles.pricingBadge}>Most Popular</span>
                  ) : null}
                  <h3 className={styles.pricingName}>{plan.name}</h3>
                  <div className={styles.pricingAmountWrap}>
                    <div className={styles.pricingAmount}>
                      <span className={styles.pricingPrice}>{plan.price}</span>
                      <span className={styles.pricingNote}>{plan.priceNote}</span>
                    </div>
                    <p className={styles.pricingSetup}>{plan.setupPrice}</p>
                  </div>
                  <p className={styles.pricingDescription}>{plan.description}</p>
                  <div className={styles.pricingCardScrollBody}>
                    <ul className={styles.pricingFeatures}>
                      {plan.features.map((feature) => (
                        <li key={feature}>
                          <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    href={plan.cta.href}
                    size="md"
                    animated={false}
                    className={styles.pricingCta}
                  >
                    {plan.cta.label}
                  </Button>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <AboutCtaBanner />
    </div>
  );
}

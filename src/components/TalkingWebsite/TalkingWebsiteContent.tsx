import {
  Bell,
  Bot,
  Brain,
  Briefcase,
  Building2,
  Calendar,
  CalendarCheck,
  Check,
  Clock,
  Cloud,
  DollarSign,
  Filter,
  Globe,
  Languages,
  Mail,
  MessageCircle,
  Mic,
  MousePointerClick,
  Sparkles,
  PhoneForwarded,
  Plug,
  Scale,
  ShoppingCart,
  Stethoscope,
  TrendingUp,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import {
  talkingWebsiteBenefits,
  talkingWebsiteBenefitsIntro,
  talkingWebsiteFeatures,
  talkingWebsiteHero,
  talkingWebsitePricing,
  talkingWebsiteSteps,
  talkingWebsiteStepsIntro,
  talkingWebsiteTaglines,
  talkingWebsiteUseCases,
} from "@/data/talking-website";
import { TalkingWebsiteHeroBannerVideo } from "@/components/TalkingWebsite/TalkingWebsiteHeroBannerVideo";
import { TalkingWebsiteHeroCta } from "@/components/TalkingWebsite/TalkingWebsiteHeroCta";
import { AboutCtaBanner } from "@/components/About/AboutCtaBanner/AboutCtaBanner";
import { Button } from "@/components/Shared/Button";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import { PlansPricingHeading } from "@/components/PlansAndPricing/PlansPricingHeading";
import styles from "./TalkingWebsite.module.css";

const stepIcons = [
  Globe,
  MousePointerClick,
  Bot,
  Filter,
  CalendarCheck,
  Mail,
] as const;

const featureIcons = [
  Mic,
  Calendar,
  Users,
  PhoneForwarded,
  Languages,
  Plug,
  Brain,
  Clock,
] as const;

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

const taglineIcons = [MessageCircle, Sparkles, Users] as const;

const heroMetrics = [
  { icon: Mic, label: "Voice AI" },
  { icon: Clock, label: "24/7 Live" },
  { icon: Zap, label: "Instant Reply" },
] as const;

const sectionEyebrows = {
  steps: "Process",
  features: "Capabilities",
  industries: "Industries",
  benefits: "Results",
  pricing: "Plans",
} as const;

export function TalkingWebsiteContent() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="talking-website-hero-heading">
        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.heroMesh} />
          <div className={styles.heroGridLines} />
          <div className={`${styles.heroOrb} ${styles.heroOrbOne}`} />
          <div className={`${styles.heroOrb} ${styles.heroOrbTwo}`} />
          <div className={styles.heroRings}>
            <span className={styles.heroRing} />
            <span className={styles.heroRing} />
            <span className={styles.heroRing} />
          </div>
        </div>

        <Container className={styles.heroContainer}>
          <div className={styles.heroGrid}>
            <ScrollReveal className={styles.heroContent}>
              <span className={styles.badge}>
                <Sparkles size={14} aria-hidden="true" />
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
                {heroMetrics.map(({ icon: Icon, label }) => (
                  <li key={label}>
                    <Icon size={15} strokeWidth={2} aria-hidden="true" />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className={styles.heroVisual}>
              <div className={styles.heroVisualGlow} aria-hidden="true" />
              <TalkingWebsiteHeroBannerVideo />
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
                    <div className={styles.taglineCardIcon} aria-hidden="true">
                      <TaglineIcon size={20} strokeWidth={1.75} />
                    </div>
                    <p className={styles.taglineCardText}>{tagline}</p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className={styles.stepsSection} aria-labelledby="how-it-works-heading">
        <Container className={styles.sectionContainer}>
          <ScrollReveal>
            <div className={styles.sectionIntro}>
              <span className={styles.sectionEyebrow}>{sectionEyebrows.steps}</span>
              <PlansPricingHeading
                id="how-it-works-heading"
                prefix="How It "
                highlight="Works"
                size="section"
                align="center"
                className={styles.sectionHeading}
              />
            </div>
          </ScrollReveal>

          <div className={styles.stepsShowcase}>
            <ScrollReveal className={styles.stepsGuide}>
              <div className={styles.stepsAssistantPanel}>
                <div className={styles.stepsAssistantHeader}>
                  <span className={styles.stepsAssistantAvatar} aria-hidden="true">
                    <Bot size={18} strokeWidth={1.75} />
                  </span>
                  <div className={styles.stepsAssistantMeta}>
                    <span className={styles.stepsAssistantName}>AI Voice Assistant</span>
                    <span className={styles.stepsAssistantStatus}>
                      <span className={styles.liveDot} />
                      Explaining process
                    </span>
                  </div>
                </div>

                <div className={styles.stepsAssistantVisual} aria-hidden="true">
                  <div className={styles.stepsGuideGlow} />
                  <div className={styles.aiVoiceAvatar}>
                    <div className={styles.aiVoiceRings}>
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className={styles.aiVoiceFace}>
                      <div className={styles.aiVoiceEyes}>
                        <span className={styles.aiVoiceEye} />
                        <span className={styles.aiVoiceEye} />
                      </div>
                      <Bot size={36} strokeWidth={1.5} className={styles.aiVoiceBot} />
                      <div className={styles.aiVoiceMouth}>
                        {Array.from({ length: 7 }).map((_, index) => (
                          <span
                            key={index}
                            className={styles.aiLipBar}
                            style={{ animationDelay: `${index * 0.09}s` }}
                          />
                        ))}
                      </div>
                    </div>
                    <span className={styles.aiVoiceCaption}>AI Speaking</span>
                  </div>
                  <div className={styles.stepsWave}>
                    {Array.from({ length: 14 }).map((_, index) => (
                      <span
                        key={index}
                        className={styles.stepsWaveBar}
                        style={{ animationDelay: `${index * 0.06}s` }}
                      />
                    ))}
                  </div>
                </div>

                <article className={styles.stepsIntroBubble}>
                  <span className={styles.stepsIntroLabel}>
                    <Mic size={12} strokeWidth={2} aria-hidden="true" />
                    AI Assistant
                  </span>
                  <p>{talkingWebsiteStepsIntro}</p>
                </article>
              </div>
              <div className={styles.stepsSpeechBridge} aria-hidden="true">
                <span className={styles.stepsSpeechPulse} />
              </div>
            </ScrollReveal>

            <div className={styles.stepsTimeline}>
              <div className={styles.stepsTimelineLine} aria-hidden="true" />
              {talkingWebsiteSteps.map((item, index) => {
                const Icon = stepIcons[index];

                return (
                  <ScrollReveal key={item.step} delay={0.06 + index * 0.06} as="article">
                    <article className={styles.stepMessage}>
                      <span className={styles.stepTimelineDot} aria-hidden="true" />
                      <div className={styles.stepMessageHeader}>
                        <div className={styles.stepIcon} aria-hidden="true">
                          <Icon size={18} strokeWidth={1.75} />
                        </div>
                        <span className={styles.stepAiTag}>
                          <Bot size={12} strokeWidth={2} aria-hidden="true" />
                          Step {String(item.step).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className={styles.stepTitle}>{item.title}</h3>
                      <p className={styles.stepMessageText}>{item.message}</p>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

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
            {talkingWebsiteFeatures.map((feature, index) => {
              const Icon = featureIcons[index];

              return (
                <ScrollReveal key={feature} delay={index * 0.04} as="article">
                  <article className={styles.featureCard}>
                    <div className={styles.featureIcon} aria-hidden="true">
                      <Icon size={20} strokeWidth={1.75} />
                    </div>
                    <h3 className={styles.featureTitle}>{feature}</h3>
                  </article>
                </ScrollReveal>
              );
            })}
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
                    <div className={styles.useCaseIcon} aria-hidden="true">
                      <Icon size={18} strokeWidth={1.75} />
                    </div>
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
            </div>
          </ScrollReveal>

          <div className={styles.benefitsLayout}>
            <ScrollReveal>
              <article className={styles.benefitsInsight}>
                <span className={styles.benefitsInsightIcon} aria-hidden="true">
                  <Bot size={22} strokeWidth={1.75} />
                </span>
                <div className={styles.benefitsInsightCopy}>
                  <span className={styles.benefitsInsightLabel}>
                    <Sparkles size={12} strokeWidth={2} aria-hidden="true" />
                    AI Recommendation
                  </span>
                  <p>{talkingWebsiteBenefitsIntro}</p>
                </div>
                <div className={styles.benefitsInsightWave} aria-hidden="true">
                  {Array.from({ length: 10 }).map((_, index) => (
                    <span
                      key={index}
                      className={styles.benefitsInsightWaveBar}
                      style={{ animationDelay: `${index * 0.07}s` }}
                    />
                  ))}
                </div>
              </article>
            </ScrollReveal>

            <div className={styles.benefitsResultsGrid}>
              {talkingWebsiteBenefits.map((benefit, index) => {
                const Icon = benefitIcons[index];

                return (
                  <ScrollReveal key={benefit.title} delay={0.05 + index * 0.05} as="article">
                    <article
                      className={`${styles.benefitResultCard} ${index === 0 ? styles.benefitResultCardLead : ""}`}
                    >
                      <span className={styles.benefitResultIcon} aria-hidden="true">
                        <Icon size={20} strokeWidth={1.75} />
                      </span>
                      <div className={styles.benefitResultStat}>{benefit.stat}</div>
                      <div className={styles.benefitResultContent}>
                        <h3 className={styles.benefitResultTitle}>{benefit.title}</h3>
                        <p className={styles.benefitResultDesc}>{benefit.description}</p>
                      </div>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
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
                  <div className={styles.pricingAmount}>
                    {/* <span className={styles.pricingPrice}>{plan.price}</span>
                    <span className={styles.pricingNote}>{plan.priceNote}</span> */}
                  </div>
                  <p className={styles.pricingDescription}>{plan.description}</p>
                  <ul className={styles.pricingFeatures}>
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    href={plan.cta.href}
                    size="md"
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

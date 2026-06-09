import { services, servicesGrid } from "@/data/services";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import { ServiceCard } from "@/components/Services/ServiceCard/ServiceCard";
import styles from "./ServicesGrid.module.css";

export function ServicesGrid() {
  return (
    <section className={styles.section} aria-label="Our services">
      <Container className={styles.container}>
        <ScrollReveal>
          <header className={styles.sectionHeading}>
            <h2 className={styles.title}>
              {servicesGrid.titleDark} {servicesGrid.titleAccent}
            </h2>
            <p className={styles.description}>{servicesGrid.description}</p>
          </header>
        </ScrollReveal>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 ${styles.grid}`}>
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.06} as="div">
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                index={String(index + 1).padStart(2, "0")}
                iconWidth={service.iconWidth}
                iconHeight={service.iconHeight}
              />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

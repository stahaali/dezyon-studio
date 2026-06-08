import Image from "next/image";
import { teamMembers } from "@/data/site";
import { Container } from "@/components/Shared/Container";
import { SectionHeading } from "@/components/Shared/SectionHeading";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import styles from "./Team.module.css";

export function Team() {
  return (
    <section id="team" className={`page-section ${styles.section}`} aria-labelledby="team-heading">
      <Container>
        <ScrollReveal>
          <SectionHeading
            className={styles.sectionHeading}
            title="Our Executive Team"
          />
        </ScrollReveal>

        <div className={styles.grid}>
          {teamMembers.map((member, index) => (
            <ScrollReveal key={member.name} delay={index * 0.05} as="article">
              <article className={styles.member}>
                <div className={styles.photoWrapper}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, 25vw"
                    className={styles.photo}
                  />
                </div>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

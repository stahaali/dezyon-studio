import Image from "next/image";
import { aboutTeamMembers } from "@/data/about";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import { SectionHeading } from "@/components/Shared/SectionHeading";
import styles from "./AboutTeam.module.css";

export function AboutTeam() {
  return (
    <section id="team" className={styles.section} aria-labelledby="about-team-heading">
      <Container>
        <ScrollReveal>
          <SectionHeading
            className={styles.sectionHeading}
            lineBreak={false}
            title="Our Executive Team"
          />
        </ScrollReveal>

        <div className={styles.grid}>
          {aboutTeamMembers.map((member, index) => (
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

import Image from "next/image";
import { teamMembers } from "@/data/site";
import { Container } from "@/components/Shared/Container";
import { ScrollReveal } from "@/components/Shared/ScrollReveal";
import splitTitleStyles from "@/components/Shared/SplitTitle.module.css";
import sectionHeadingStyles from "@/components/Shared/SectionHeading.module.css";
import styles from "./Team.module.css";

type TeamProps = {
  theme?: "light" | "dark";
};

export function Team({ theme = "light" }: TeamProps) {
  return (
    <section
      id="team"
      className={`page-section ${styles.section} ${theme === "dark" ? styles.sectionDark : ""}`}
      aria-labelledby="team-heading"
    >
      <Container>
        <ScrollReveal>
          <div
            className={`${sectionHeadingStyles.heading} ${sectionHeadingStyles.center} ${styles.sectionHeading}`}
          >
            <h2
              id="team-heading"
              className={`${splitTitleStyles.title} ${splitTitleStyles.sizeSection} ${styles.title}`}
            >
              Our Executive{" "}
              <span className={styles.wordHighlight}>Team</span>
            </h2>
          </div>
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

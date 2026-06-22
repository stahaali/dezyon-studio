"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { useVapiSimli } from "@/context/VapiSimliContext";
import type { homeGrowthTeamMembers } from "@/data/home-team";
import styles from "./HomeGrowthTeam.module.css";

type Member = (typeof homeGrowthTeamMembers)[number];

type HomeGrowthTeamMemberCardProps = {
  member: Member;
};

export function HomeGrowthTeamMemberCard({
  member,
}: HomeGrowthTeamMemberCardProps) {
  const { openWidget } = useVapiSimli();

  return (
    <article className={styles.card}>
      <button
        type="button"
        className={styles.imageButton}
        onClick={openWidget}
        aria-label={`Talk to us about ${member.role}`}
      >
        <Image
          src={member.image}
          alt={member.imageAlt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1200px) 33vw, 16vw"
          className={styles.cardImage}
        />
      </button>

      <div className={styles.cardBody}>
        <h3 className={styles.cardRole}>{member.role}</h3>
        <p className={styles.cardTagline}>{member.tagline}</p>

        <ul className={styles.highlightList}>
          {member.highlights.map((item) => (
            <li key={item} className={styles.highlightItem}>
              <Check
                size={14}
                strokeWidth={2.8}
                className={styles.highlightIcon}
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

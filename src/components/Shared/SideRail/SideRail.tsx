"use client";

import { sideRailSocialLinks } from "@/data/site";
import { useMobileMenu } from "@/context/MobileMenuContext";
import { SocialIcon } from "@/components/Shared/SocialIcon";
import styles from "./SideRail.module.css";

export function SideRail() {
  const { isOpen, toggleMenu } = useMobileMenu();

  return (
    <aside className={styles.rail} aria-label="Quick actions">
      <button
        type="button"
        className={`${styles.menuButton} ${isOpen ? styles.menuButtonActive : ""}`}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={toggleMenu}
      >
        <span className={`${styles.menuLine} ${styles.menuLineShort}`} />
        <span className={`${styles.menuLine} ${styles.menuLineTall}`} />
        <span className={`${styles.menuLine} ${styles.menuLineMid}`} />
      </button>

      <ul className={styles.socialList}>
        {sideRailSocialLinks.map(({ href, label }) => (
          <li key={label}>
            <a
              href={href}
              className={styles.socialLink}
              data-social={label.toLowerCase()}
              aria-label={label}
              {...(href !== "#"
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <SocialIcon label={label} />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

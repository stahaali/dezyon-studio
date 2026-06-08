"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/site";
import { useStickyHeader, useLockBodyScroll } from "@/hooks/useStickyHeader";
import { Container } from "@/components/Shared/Container";
import { Logo } from "@/components/Shared/Logo";
import styles from "./Header.module.css";

export function Header() {
  const isScrolled = useStickyHeader();
  const [mobileOpen, setMobileOpen] = useState(false);
  useLockBodyScroll(mobileOpen);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${mobileOpen ? styles.menuOpen : ""}`}
    >
      <Container as="nav" className={styles.nav} aria-label="Main navigation">
        <Logo
          variant={isScrolled || mobileOpen ? "dark" : "light"}
          className={styles.logo}
        />

        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.href + link.label}>
              <a href={link.href} className={styles.link}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={styles.menuToggle}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      <div
        className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ""}`}
        aria-hidden={!mobileOpen}
      >
        <ul className={styles.mobileLinks}>
          {navLinks.map((link) => (
            <li key={link.href + link.label}>
              <a
                href={link.href}
                className={styles.mobileLink}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

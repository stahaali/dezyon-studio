"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { footerContact, navLinks, pricingNav, sideRailSocialLinks } from "@/data/site";
import { useMobileMenu } from "@/context/MobileMenuContext";
import { useStickyHeader, useLockBodyScroll } from "@/hooks/useStickyHeader";
import { Container } from "@/components/Shared/Container";
import { Logo } from "@/components/Shared/Logo";
import { SocialIcon } from "@/components/Shared/SocialIcon";
import { LanguageTranslator } from "@/components/Header/LanguageTranslator";
import { isPathActive, normalizePathname } from "@/lib/paths";
import styles from "./Header.module.css";

const headerPhoneHref = `tel:${footerContact.phone.replace(/\D/g, "")}`;

function NavLinkItem({
  href,
  label,
  isActive,
}: {
  href: string;
  label: string;
  isActive: boolean;
}) {
  return (
    <li>
      <Link
        href={href}
        className={`${styles.link} ${isActive ? styles.linkActive : ""}`}
        aria-current={isActive ? "page" : undefined}
      >
        {label}
      </Link>
    </li>
  );
}

export function Header() {
  const pathname = usePathname();
  const [hasMounted, setHasMounted] = useState(false);
  const { isScrolled, isHeaderVisible } = useStickyHeader();
  const { isOpen: mobileOpen, closeMenu, toggleMenu } = useMobileMenu();
  useLockBodyScroll(mobileOpen);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const showHeader = isHeaderVisible || mobileOpen;
  const currentPath = normalizePathname(pathname);
  const isPricingActive =
    hasMounted &&
    (isPathActive(pathname, pricingNav.href) ||
      currentPath.startsWith("/pricing"));

  const isLinkActive = (href: string) =>
    hasMounted && isPathActive(pathname, href);

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${mobileOpen ? styles.menuOpen : ""} ${showHeader ? "" : styles.headerHidden}`}
      >
        <Container as="nav" className={styles.nav} aria-label="Main navigation">
          <Logo variant="light" className={styles.logo} />

          <ul className={styles.links}>
            {navLinks.slice(0, 4).map((link) => (
              <NavLinkItem
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={isLinkActive(link.href)}
              />
            ))}
            <NavLinkItem
              href={navLinks[4].href}
              label={navLinks[4].label}
              isActive={isLinkActive(navLinks[4].href)}
            />
            <NavLinkItem
              href={pricingNav.href}
              label={pricingNav.label}
              isActive={isPricingActive}
            />
            {navLinks.slice(5).map((link) => (
              <NavLinkItem
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={isLinkActive(link.href)}
              />
            ))}
          </ul>

          <div className={styles.headerActions}>
            <div className={styles.actions}>
              <a href={headerPhoneHref} className={styles.phoneLink}>
                <Phone size={16} aria-hidden="true" />
                <span className={styles.phoneText}>{footerContact.phone}</span>
              </a>
              <LanguageTranslator />
            </div>

            <button
              type="button"
              className={styles.menuToggle}
              onClick={toggleMenu}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
            </button>
          </div>
        </Container>
      </header>

      <button
        type="button"
        className={`${styles.mobileBackdrop} ${mobileOpen ? styles.mobileBackdropOpen : ""}`}
        aria-label="Close menu"
        aria-hidden={!mobileOpen}
        tabIndex={mobileOpen ? 0 : -1}
        onClick={closeMenu}
      />

      <nav
        className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
      >
        <div className={styles.mobileMenuHeader}>
          <Logo variant="dark" className={styles.mobileMenuLogo} />
          <button
            type="button"
            className={styles.mobileMenuClose}
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <X size={22} strokeWidth={2} />
          </button>
        </div>

        <div className={styles.mobileMenuBody}>
          <ul className={styles.mobileLinks}>
            {navLinks.slice(0, 4).map((link) => {
              const isActive = isLinkActive(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ""}`}
                    onClick={closeMenu}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}

            <li>
              <Link
                href={navLinks[4].href}
                className={`${styles.mobileLink} ${
                  isLinkActive(navLinks[4].href) ? styles.mobileLinkActive : ""
                }`}
                onClick={closeMenu}
                aria-current={
                  isLinkActive(navLinks[4].href) ? "page" : undefined
                }
              >
                {navLinks[4].label}
              </Link>
            </li>

            <li>
              <Link
                href={pricingNav.href}
                className={`${styles.mobileLink} ${
                  isPricingActive ? styles.mobileLinkActive : ""
                }`}
                onClick={closeMenu}
                aria-current={isPricingActive ? "page" : undefined}
              >
                {pricingNav.label}
              </Link>
            </li>

            {navLinks.slice(5).map((link) => {
              const isActive = isLinkActive(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ""}`}
                    onClick={closeMenu}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.mobileMenuFooter}>
          <a href={headerPhoneHref} className={styles.mobilePhoneLink} onClick={closeMenu}>
            <Phone size={18} aria-hidden="true" />
            <span>{footerContact.phone}</span>
          </a>

          <div className={styles.mobileSocial}>
            {sideRailSocialLinks.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                className={styles.mobileSocialLink}
                data-social={label.toLowerCase()}
                aria-label={label}
                {...(href !== "#"
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <SocialIcon label={label} />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

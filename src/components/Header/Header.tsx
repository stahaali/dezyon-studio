"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import {
  bookPublishingNav,
  footerContact,
  navLinks,
  pricingNav,
  sideRailSocialLinks,
} from "@/data/site";
import { useMobileMenu } from "@/context/MobileMenuContext";
import { useStickyHeader, useLockBodyScroll } from "@/hooks/useStickyHeader";
import { Container } from "@/components/Shared/Container";
import { Logo } from "@/components/Shared/Logo";
import { SocialIcon } from "@/components/Shared/SocialIcon";
import { LanguageTranslator } from "@/components/Header/LanguageTranslator";
import { isPathActive } from "@/lib/paths";
import styles from "./Header.module.css";

const headerPhoneHref = `tel:${footerContact.phone.replace(/\D/g, "")}`;

type NavMenuItem = {
  label: string;
  href: string;
};

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

function NavDropdown({
  href,
  label,
  isActive,
  items,
}: {
  href: string;
  label: string;
  isActive: boolean;
  items: readonly NavMenuItem[];
}) {
  return (
    <li className={styles.dropdown}>
      <Link
        href={href}
        className={`${styles.link} ${styles.dropdownTrigger} ${isActive ? styles.linkActive : ""}`}
        aria-current={isActive ? "page" : undefined}
      >
        {label}
        <ChevronDown size={14} className={styles.dropdownCaret} aria-hidden="true" />
      </Link>
      <ul className={`${styles.dropdownMenu} ${styles.dropdownMenuPlain}`}>
        {items.map((item) => (
          <li key={item.href + item.label}>
            <Link href={item.href} className={styles.dropdownItem}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export function Header() {
  const pathname = usePathname();
  const [hasMounted, setHasMounted] = useState(false);
  const [bookPublishingOpen, setBookPublishingOpen] = useState(false);
  const { isScrolled } = useStickyHeader();
  const { isOpen: mobileOpen, closeMenu, toggleMenu } = useMobileMenu();
  useLockBodyScroll(mobileOpen);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const isPricingActive = hasMounted && isPathActive(pathname, pricingNav.href);
  const isBookPublishingActive =
    hasMounted && isPathActive(pathname, bookPublishingNav.href);

  const isLinkActive = (href: string) =>
    hasMounted && isPathActive(pathname, href);

  const closeMobileMenu = () => {
    setBookPublishingOpen(false);
    closeMenu();
  };

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${mobileOpen ? styles.menuOpen : ""}`}
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
            <NavDropdown
              href={bookPublishingNav.href}
              label={bookPublishingNav.label}
              isActive={isBookPublishingActive}
              items={bookPublishingNav.menuItems}
            />
            {navLinks.slice(4).map((link) => (
              <NavLinkItem
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={isLinkActive(link.href)}
              />
            ))}
            <NavLinkItem
              href={pricingNav.href}
              label={pricingNav.label}
              isActive={isPricingActive}
            />
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
        onClick={closeMobileMenu}
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
            onClick={closeMobileMenu}
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
                    onClick={closeMobileMenu}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}

            <li>
              <button
                type="button"
                className={`${styles.mobileLink} ${styles.mobileDropdownBtn} ${
                  isBookPublishingActive ? styles.mobileLinkActive : ""
                }`}
                aria-expanded={bookPublishingOpen}
                onClick={() => setBookPublishingOpen((open) => !open)}
              >
                <span>{bookPublishingNav.label}</span>
                <ChevronDown
                  size={18}
                  className={`${styles.mobileDropdownCaret} ${
                    bookPublishingOpen ? styles.mobileDropdownCaretOpen : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              {bookPublishingOpen ? (
                <ul className={styles.mobileSubmenu}>
                  <li>
                    <Link
                      href={bookPublishingNav.href}
                      className={styles.mobileSubmenuLink}
                      onClick={closeMobileMenu}
                    >
                      All Book Publishing
                    </Link>
                  </li>
                  {bookPublishingNav.menuItems.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        className={styles.mobileSubmenuLink}
                        onClick={closeMobileMenu}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>

            {navLinks.slice(4).map((link) => {
              const isActive = isLinkActive(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ""}`}
                    onClick={closeMobileMenu}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}

            <li>
              <Link
                href={pricingNav.href}
                className={`${styles.mobileLink} ${
                  isPricingActive ? styles.mobileLinkActive : ""
                }`}
                onClick={closeMobileMenu}
                aria-current={isPricingActive ? "page" : undefined}
              >
                {pricingNav.label}
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.mobileMenuFooter}>
          <a href={headerPhoneHref} className={styles.mobilePhoneLink} onClick={closeMobileMenu}>
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

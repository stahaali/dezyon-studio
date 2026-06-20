import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  footerAbout,
  footerBottomLinks,
  footerContact,
  footerInformationLinks,
} from "@/data/site";
import { SITE_NAME } from "@/lib/constants";
import { GoogleAnalytics } from "@/components/Seo/GoogleAnalytics";
import { Container } from "@/components/Shared/Container";
import { Logo } from "@/components/Shared/Logo";
import { CanadaFlag, UsaFlag } from "@/components/Footer/FooterFlags";
import styles from "./Footer.module.css";

const officeFlags = {
  usa: UsaFlag,
  canada: CanadaFlag,
} as const;

export function Footer() {
  return (
    <>
    <footer id="contact" className={`page-section ${styles.footer}`}>
      <Container className={styles.footerContainer}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <Logo className={styles.footerLogo} />
            <p className={styles.about}>{footerAbout}</p>
          </div>

          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Information</h3>
            <ul className={styles.linkList}>
              {footerInformationLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link href={link.href} className={styles.link}>
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className={styles.link}>
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.contactCol}>
            <h3 className={styles.colTitle}>Contact Us</h3>
            <div className={styles.contactList}>
              {footerContact.offices.map((office) => {
                const Flag = officeFlags[office.id];

                return (
                  <div key={office.id} className={styles.officeCard}>
                    <div className={styles.officeHeader}>
                      <Flag className={styles.flagIcon} />
                      <span className={styles.officeCountry}>{office.country}</span>
                    </div>

                    <ul className={styles.officeDetails}>
                      <li className={styles.detailItem}>
                        <span className={styles.detailIcon} aria-hidden="true">
                          <MapPin size={13} strokeWidth={2} />
                        </span>
                        <span className={styles.detailText}>{office.address}</span>
                      </li>
                      <li className={styles.detailItem}>
                        <a
                          href={`tel:${office.phone.replace(/\D/g, "")}`}
                          className={styles.detailLink}
                        >
                          <span className={styles.detailIcon} aria-hidden="true">
                            <Phone size={13} strokeWidth={2} />
                          </span>
                          <span>{office.phone}</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                );
              })}

              <div className={styles.emailRow}>
                <a
                  href={`mailto:${footerContact.email}`}
                  className={styles.detailLink}
                >
                  <span className={styles.detailIcon} aria-hidden="true">
                    <Mail size={13} strokeWidth={2} />
                  </span>
                  <span>{footerContact.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; 2016 | All rights reserved. | {SITE_NAME}
          </p>
          <nav className={styles.legal} aria-label="Legal">
            {footerBottomLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={styles.legalLink}
                prefetch={false}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
    <GoogleAnalytics />
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.css";

const LOGO_SRC = {
  light: "/assets/img/logo-1.png",
  dark: "/assets/img/black-logo.jpg",
} as const;

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export function Logo({ variant = "light", className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`${styles.logo} ${className}`.trim()}
      aria-label="Dezyon Studio home"
    >
      <Image
        key={variant}
        src={LOGO_SRC[variant]}
        alt="Dezyon Studio"
        width={296}
        height={88}
        className={styles.image}
        priority={variant === "light"}
      />
    </Link>
  );
}

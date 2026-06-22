"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isSamePath } from "@/lib/paths";
import styles from "./Logo.module.css";

const LOGO_SRC = {
  light: "/assets/img/logo-1.webp",
  dark: "/assets/img/black-logo.webp",
} as const;

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export function Logo({ variant = "light", className = "" }: LogoProps) {
  const pathname = usePathname();

  return (
    <Link
      href="/"
      className={`${styles.logo} ${className}`.trim()}
      aria-label="Dezyon Studio home"
      onClick={(event) => {
        if (isSamePath(pathname, "/")) {
          event.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
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

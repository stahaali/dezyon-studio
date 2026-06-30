import Link from "next/link";
import type { ReactNode, ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: ReactNode;
  className?: string;
  animated?: boolean;
}

function ButtonInner({
  variant,
  animated,
  children,
}: {
  variant: ButtonVariant;
  animated: boolean;
  children: ReactNode;
}) {
  if (variant === "ghost" || !animated) {
    return <>{children}</>;
  }

  return (
    <>
      <span className={styles.buttonText}>{children}</span>
      <span className={styles.buttonShape} aria-hidden="true" />
      <span className={styles.buttonShape} aria-hidden="true" />
      <span className={styles.buttonShape} aria-hidden="true" />
      <span className={styles.buttonShape} aria-hidden="true" />
    </>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  animated = true,
  ...props
}: ButtonProps) {
  const useAnimation = animated && variant !== "ghost";
  const classes =
    `${styles.button} ${styles[variant]} ${styles[size]} ${useAnimation ? styles.animated : ""} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes}>
        <ButtonInner variant={variant} animated={useAnimation}>
          {children}
        </ButtonInner>
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      <ButtonInner variant={variant} animated={useAnimation}>
        {children}
      </ButtonInner>
    </button>
  );
}

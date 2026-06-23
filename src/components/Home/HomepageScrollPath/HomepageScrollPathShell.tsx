"use client";

import { useRef, type ReactNode } from "react";
import { HomepageScrollPath } from "@/components/Home/HomepageScrollPath/HomepageScrollPath";
import styles from "./HomepageScrollPathShell.module.css";

type HomepageScrollPathShellProps = {
  children: ReactNode;
  className?: string;
};

export function HomepageScrollPathShell({
  children,
  className = "",
}: HomepageScrollPathShellProps) {
  const homeRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={homeRef}
      className={`${styles.shell} ${className}`.trim()}
    >
      <HomepageScrollPath containerRef={homeRef} />
      {children}
    </div>
  );
}

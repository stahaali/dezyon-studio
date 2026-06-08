"use client";

import { MessageCircle } from "lucide-react";
import styles from "./ChatFab.module.css";

export function ChatFab() {
  return (
    <button
      type="button"
      className={styles.fab}
      aria-label="Open chat support"
    >
      <MessageCircle size={22} />
    </button>
  );
}

"use client";

import { ChevronDown, Globe } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  TRANSLATOR_LANGUAGES,
  applyLanguage,
  ensureTranslatorDefaults,
  getActiveLanguageCode,
  preloadGoogleTranslate,
} from "@/lib/google-translate";
import styles from "./LanguageTranslator.module.css";

export const LANGUAGES = TRANSLATOR_LANGUAGES;

export function LanguageTranslator() {
  const [activeLang, setActiveLang] = useState("en");
  const [open, setOpen] = useState(false);
  const [isApplying, setIsApplying] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    ensureTranslatorDefaults();
    setActiveLang(getActiveLanguageCode());
  }, []);

  useEffect(() => {
    void preloadGoogleTranslate();
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const activeLabel =
    LANGUAGES.find((language) => language.code === activeLang)?.label ?? "English";

  const handleToggle = () => {
    void preloadGoogleTranslate();
    setOpen((isOpen) => !isOpen);
  };

  const handleSelect = (code: string) => {
    if (isApplying) {
      return;
    }

    if (code === activeLang) {
      setOpen(false);
      return;
    }

    setIsApplying(true);
    setOpen(false);
    setActiveLang(code);
    void applyLanguage(code);
  };

  return (
    <div className={`${styles.translator} notranslate`} ref={rootRef}>
      <button
        type="button"
        className={styles.translatorBtn}
        onClick={handleToggle}
        onMouseEnter={() => {
          void preloadGoogleTranslate();
        }}
        onFocus={() => {
          void preloadGoogleTranslate();
        }}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={`Language translator, current language ${activeLabel}`}
        title="Translate this website"
        disabled={isApplying}
      >
        <Globe size={16} className={styles.translatorIcon} aria-hidden="true" />
        <span className={styles.translatorCopy}>
          <span className={styles.translatorLabel}>Language</span>
          <span className={styles.translatorValue}>
            {isApplying ? "Applying..." : activeLabel}
          </span>
        </span>
        <ChevronDown
          size={14}
          className={`${styles.caret} ${open ? styles.caretOpen : ""}`}
          aria-hidden="true"
        />
      </button>

      {open ? (
        <ul
          className={styles.menu}
          role="listbox"
          aria-label="Choose language"
          onMouseDown={(event) => {
            event.stopPropagation();
          }}
        >
          {LANGUAGES.map((language) => (
            <li key={language.code} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={language.code === activeLang}
                className={`${styles.menuItem} ${
                  language.code === activeLang ? styles.menuItemActive : ""
                }`}
                disabled={isApplying}
                onClick={() => {
                  handleSelect(language.code);
                }}
              >
                {language.label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

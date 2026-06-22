"use client";

import { useVapiSimli } from "@/context/VapiSimliContext";
import styles from "./ContactVoiceFloatingAvatar.module.css";

type ContactVoiceFloatingAvatarProps = {
  src: string;
  alt: string;
};

export function ContactVoiceFloatingAvatar({
  src,
  alt,
}: ContactVoiceFloatingAvatarProps) {
  const { openWidget } = useVapiSimli();

  return (
    <button
      type="button"
      className={styles.avatarWrap}
      onClick={openWidget}
      aria-label="Open Talk to us voice assistant"
    >
      <img src={src} alt={alt} width={80} height={80} className={styles.avatar} />
    </button>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useVapiSimli } from "@/context/VapiSimliContext";
import styles from "./ContactVoiceFloatingAvatar.module.css";

type ContactVoiceFloatingAvatarProps = {
  src: string;
  alt: string;
  href?: string;
};

export function ContactVoiceFloatingAvatar({
  src,
  alt,
  href,
}: ContactVoiceFloatingAvatarProps) {
  const { openWidget } = useVapiSimli();
  const isVideo = /\.(mp4|webm|ogg)(\?.*)?$/i.test(src);

  const media = isVideo ? (
    <video
      src={src}
      className={styles.avatar}
      autoPlay
      loop
      muted
      playsInline
      aria-hidden="true"
    />
  ) : (
    <Image src={src} alt={alt} width={60} height={60} className={styles.avatar} />
  );

  if (href) {
    return (
      <Link href={href} className={styles.avatarWrap} aria-label="Call Lara">
        {media}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={styles.avatarWrap}
      onClick={openWidget}
      aria-label="Open Talk to us voice assistant"
    >
      {media}
    </button>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Mic, MicOff, PhoneOff } from "lucide-react";
import { talkingWebsiteVoiceAgent } from "@/data/talking-website";
import { useVapiSimli } from "@/context/VapiSimliContext";
import styles from "./TalkingWebsiteVoicePage.module.css";

function formatElapsedTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");

  return `${minutes}:${seconds}`;
}

export function TalkingWebsiteVoicePage() {
  const router = useRouter();
  const {
    isConnected,
    isSpeaking,
    isLoading,
    transcript,
    error,
    warmLaraSession,
    startCall,
    endCall,
  } = useVapiSimli();

  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const hasStartedRef = useRef(false);

  const latestAssistantLine =
    [...transcript].reverse().find((entry) => entry.role === "assistant")?.text ??
    talkingWebsiteVoiceAgent.welcomeMessage;

  const statusLine = isLoading
    ? "Connecting to Lara..."
    : isSpeaking || isConnected
      ? latestAssistantLine
      : talkingWebsiteVoiceAgent.welcomeMessage;

  useEffect(() => {
    warmLaraSession();

    if (hasStartedRef.current) {
      return;
    }

    hasStartedRef.current = true;
    void startCall();
  }, [warmLaraSession, startCall]);

  useEffect(() => {
    return () => {
      endCall();
    };
  }, [endCall]);

  useEffect(() => {
    if (!isConnected) {
      setElapsedSeconds(0);
      return;
    }

    const timer = window.setInterval(() => {
      setElapsedSeconds((current) => current + 1);
    }, 1000);

    return () => window.clearInterval(timer);
  }, [isConnected]);

  const handleEndCall = () => {
    endCall();
    router.push("/talking-website");
  };

  const handleStart = () => {
    void startCall();
  };

  return (
    <section className={styles.page} aria-labelledby="call-lara-heading">
      <div className={styles.panel}>
        <div className={styles.layout}>
          <aside className={styles.profile}>
            <div className={styles.avatarFrame}>
              <video
                src={talkingWebsiteVoiceAgent.avatarVideo}
                className={styles.avatarVideo}
                autoPlay
                loop
                muted
                playsInline
                aria-hidden="true"
              />
            </div>
            <h2 className={styles.agentName}>{talkingWebsiteVoiceAgent.name}</h2>
            <p className={styles.agentRole}>{talkingWebsiteVoiceAgent.role}</p>
            <p className={styles.agentLanguage}>{talkingWebsiteVoiceAgent.language}</p>
            <div className={styles.tags}>
              {talkingWebsiteVoiceAgent.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </aside>

          <main className={styles.stage}>
            <div
              className={`${styles.visualizer} ${isSpeaking || isLoading ? styles.visualizerActive : ""}`.trim()}
              aria-hidden="true"
            >
              <span className={styles.visualizerRing} />
              <span className={styles.visualizerRing} />
              <span className={styles.visualizerRing} />
              <span className={styles.visualizerRing} />
              <span className={styles.visualizerCore} />
            </div>

            <p className={styles.statusText}>{statusLine}</p>
            <p className={styles.timer} aria-live="polite">
              {formatElapsedTime(elapsedSeconds)}
            </p>

            {!isConnected && !isLoading && error ? (
              <button type="button" className={styles.startButton} onClick={handleStart}>
                Try again
              </button>
            ) : null}
          </main>

          <aside className={styles.info}>
            <h1 id="call-lara-heading" className={styles.infoTitle}>
              {talkingWebsiteVoiceAgent.talkTitle}
            </h1>
            <p className={styles.infoDescription}>
              {talkingWebsiteVoiceAgent.description}
            </p>
          </aside>
        </div>

        <footer className={styles.controls}>
          <button
            type="button"
            className={styles.controlButton}
            onClick={() => setIsMuted((current) => !current)}
            aria-label={isMuted ? "Unmute microphone" : "Mute microphone"}
            aria-pressed={isMuted}
            disabled={!isConnected}
          >
            {isMuted ? (
              <MicOff size={22} strokeWidth={2} aria-hidden="true" />
            ) : (
              <Mic size={22} strokeWidth={2} aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            className={`${styles.controlButton} ${styles.endButton}`}
            onClick={handleEndCall}
            aria-label="End call"
          >
            <PhoneOff size={22} strokeWidth={2} aria-hidden="true" />
          </button>
        </footer>

        {error ? (
          <p className={styles.error} role="alert">
            {error}
          </p>
        ) : null}
      </div>
    </section>
  );
}

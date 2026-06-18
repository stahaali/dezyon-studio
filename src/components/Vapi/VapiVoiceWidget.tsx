"use client";

import { Mic, PhoneOff } from "lucide-react";
import { useVapiSimli } from "@/context/VapiSimliContext";
import styles from "./VapiVoiceWidget.module.css";

export function VapiVoiceWidget() {
  const {
    isWidgetVisible,
    isConnected,
    isSpeaking,
    isLoading,
    transcript,
    error,
    startCall,
    endCall,
  } = useVapiSimli();

  if (!isWidgetVisible) {
    return null;
  }

  const statusLabel = isSpeaking ? "Assistant speaking" : "Listening";

  return (
    <div className={styles.widget} aria-live="polite">
      {!isConnected ? (
        <button
          type="button"
          className={styles.startButton}
          onClick={() => void startCall()}
          disabled={isLoading}
          aria-label="Talk to Dezyon Voice Agent"
        >
          <Mic aria-hidden="true" />
          <span>{isLoading ? "Connecting..." : "Talk to us"}</span>
        </button>
      ) : (
        <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <div className={styles.status}>
              <span
                className={`${styles.statusDot} ${isSpeaking ? styles.statusDotSpeaking : ""}`}
                aria-hidden="true"
              />
              <span className={styles.statusText}>{statusLabel}</span>
            </div>
            <button
              type="button"
              className={styles.endButton}
              onClick={endCall}
              aria-label="End voice call"
            >
              <PhoneOff aria-hidden="true" />
              End
            </button>
          </div>

          {transcript.length > 0 ? (
            <div className={styles.transcript} aria-label="Conversation transcript">
              {transcript.slice(-4).map((entry, index) => (
                <p
                  key={`${entry.role}-${index}-${entry.text.slice(0, 12)}`}
                  className={
                    entry.role === "assistant"
                      ? styles.transcriptAssistant
                      : styles.transcriptUser
                  }
                >
                  <span className={styles.transcriptRole}>
                    {entry.role === "assistant" ? "Agent" : "You"}
                  </span>
                  {entry.text}
                </p>
              ))}
            </div>
          ) : (
            <p className={styles.hint}>Ask about our services, pricing, or projects.</p>
          )}
        </div>
      )}

      {error ? <p className={styles.error}>{error}</p> : null}
    </div>
  );
}

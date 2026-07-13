"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import type VapiClient from "@vapi-ai/web";
import type { SimliClient } from "simli-client";
import { isSimliConfigured, SIMLI_API_KEY, SIMLI_FACE_ID } from "@/lib/simli-config";
import {
  isVapiConfigured,
  VAPI_ASSISTANT_ID,
} from "@/lib/vapi-config";
import {
  createVapiTransferAssistantOverrides,
  isTransferCallMessage,
} from "@/lib/vapi-transfer-tool";
import { getVapiClient } from "@/lib/vapi-client";

const CALL_LARA_PATH = "/talking-website/call-lara";
const TALKING_WEBSITE_PATH = "/talking-website";

let simliModulePromise: Promise<typeof import("simli-client")> | null = null;
let microphonePromise: Promise<MediaStream> | null = null;

function loadSimliModule() {
  simliModulePromise ??= import("simli-client");
  return simliModulePromise;
}

function shouldUseSimli(pathname: string) {
  return isSimliConfigured() && pathname !== CALL_LARA_PATH;
}

function warmMicrophone() {
  microphonePromise ??= navigator.mediaDevices.getUserMedia({ audio: true });
  return microphonePromise;
}

type TranscriptEntry = {
  role: string;
  text: string;
};

type VapiSimliContextValue = {
  isWidgetVisible: boolean;
  isConnected: boolean;
  isSpeaking: boolean;
  isLoading: boolean;
  transcript: TranscriptEntry[];
  error: string | null;
  openWidget: () => void;
  closeWidget: () => void;
  prefetchVoiceClients: () => Promise<void>;
  warmLaraSession: () => void;
  startCall: () => Promise<void>;
  endCall: () => void;
};

const VapiSimliContext = createContext<VapiSimliContextValue | null>(null);

export function useVapiSimli() {
  const context = useContext(VapiSimliContext);
  if (!context) {
    throw new Error("useVapiSimli must be used within VapiSimliProvider");
  }
  return context;
}

function muteVapiInternalAudio() {
  const audioElements = document.getElementsByTagName("audio");
  for (let index = 0; index < audioElements.length; index += 1) {
    if (audioElements[index].id !== "simli_audio") {
      audioElements[index].muted = true;
    }
  }
}

export function VapiSimliProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const vapiRef = useRef<VapiClient | null>(null);
  const simliRef = useRef<SimliClient | null>(null);
  const avatarVideoRef = useRef<HTMLVideoElement | null>(null);
  const avatarAudioRef = useRef<HTMLAudioElement | null>(null);
  const transferActiveRef = useRef(false);
  const intentionalDisconnectRef = useRef(false);
  const endCallRef = useRef<() => void>(() => {});
  const audioBridgeTimerRef = useRef<number | null>(null);
  const listenersAttachedRef = useRef(false);
  const callStartingRef = useRef(false);

  const [isWidgetVisible, setIsWidgetVisible] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isAvatarLive, setIsAvatarLive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [transcript, setTranscript] = useState<TranscriptEntry[]>([]);
  const [error, setError] = useState<string | null>(null);

  const connectVapiAudioToSimli = useCallback(() => {
    if (!simliRef.current || !vapiRef.current) {
      return false;
    }

    muteVapiInternalAudio();

    try {
      const dailyCall = vapiRef.current.getDailyCallObject();
      const participants = dailyCall?.participants();

      if (!participants) {
        return false;
      }

      for (const participant of Object.values(participants)) {
        if (participant.user_name !== "Vapi Speaker") {
          continue;
        }

        const audioTrack = participant.tracks.audio.track;
        if (audioTrack) {
          simliRef.current.listenToMediastreamTrack(
            audioTrack as MediaStreamTrack,
          );
          return true;
        }
      }
    } catch (connectError) {
      console.error("Failed to connect Vapi audio to Simli:", connectError);
    }

    return false;
  }, []);

  const ensureAudioBridge = useCallback(() => {
    if (audioBridgeTimerRef.current !== null) {
      window.clearTimeout(audioBridgeTimerRef.current);
      audioBridgeTimerRef.current = null;
    }

    let attempts = 0;

    const tryConnect = () => {
      if (connectVapiAudioToSimli()) {
        return;
      }

      attempts += 1;
      if (attempts >= 25) {
        return;
      }

      audioBridgeTimerRef.current = window.setTimeout(tryConnect, 200);
    };

    tryConnect();
  }, [connectVapiAudioToSimli]);

  const markCallReady = useCallback(() => {
    setIsConnected(true);
    setIsLoading(false);
    setError(null);
  }, []);

  const attachVapiListeners = useCallback(
    (vapi: VapiClient) => {
      if (listenersAttachedRef.current) {
        return;
      }

      listenersAttachedRef.current = true;

      vapi.on("call-start-progress", (event) => {
        if (
          event.stage === "daily-call-join" &&
          event.status === "completed"
        ) {
          markCallReady();
        }
      });

      vapi.on("call-start-success", () => {
        markCallReady();
      });

      vapi.on("call-start", () => {
        transferActiveRef.current = false;
        callStartingRef.current = false;
        markCallReady();
        ensureAudioBridge();
      });

      vapi.on("call-end", () => {
        callStartingRef.current = false;
        setIsConnected(false);
        setIsSpeaking(false);
        setIsAvatarLive(false);
        setIsLoading(false);
      });

      vapi.on("speech-start", () => {
        setIsSpeaking(true);
      });

      vapi.on("speech-end", () => {
        setIsSpeaking(false);
      });

      vapi.on("message", (message) => {
        const transferMessage = message as {
          type?: string;
          functionCall?: { name?: string };
          toolCallList?: Array<{ function?: { name?: string } }>;
          toolWithToolCallList?: Array<{ type?: string; tool?: { type?: string } }>;
        };

        if (transferMessage.type === "transfer-update") {
          transferActiveRef.current = true;
          setIsSpeaking(false);
          window.setTimeout(() => {
            endCallRef.current();
          }, 500);
          return;
        }

        if (
          !transferActiveRef.current &&
          (transferMessage.type === "tool-calls" ||
            transferMessage.type === "function-call") &&
          isTransferCallMessage(transferMessage)
        ) {
          transferActiveRef.current = true;
          setIsSpeaking(false);
          vapi.setMuted(true);
          vapi.send({ type: "control", control: "mute-assistant" });
          return;
        }

        if (transferActiveRef.current) {
          return;
        }

        if (
          message.type === "speech-update" &&
          message.status === "started" &&
          message.role === "user"
        ) {
          simliRef.current?.ClearBuffer();
        }

        if (message.type === "transcript" && message.transcript) {
          setTranscript((prev) => [
            ...prev,
            { role: message.role, text: message.transcript },
          ]);
        }
      });

      vapi.on("error", (vapiError) => {
        callStartingRef.current = false;
        if (intentionalDisconnectRef.current || transferActiveRef.current) {
          intentionalDisconnectRef.current = false;
          setError(null);
          console.warn("Vapi disconnect after transfer:", vapiError);
          return;
        }

        setError("Voice assistant unavailable. Please try again.");
        setIsLoading(false);
        console.error("Vapi error:", vapiError);
      });
    },
    [ensureAudioBridge, markCallReady],
  );

  const ensureVapi = useCallback(() => {
    const vapi = getVapiClient();
    if (!vapi) {
      return null;
    }

    vapiRef.current = vapi;
    attachVapiListeners(vapi);
    return vapi;
  }, [attachVapiListeners]);

  const prefetchVoiceClients = useCallback(async () => {
    ensureVapi();

    if (shouldUseSimli(pathname)) {
      await loadSimliModule();
    }
  }, [ensureVapi, pathname]);

  useEffect(() => {
    if (pathname === CALL_LARA_PATH) {
      ensureVapi();
      warmMicrophone().catch(() => {});
      return;
    }

    if (pathname === TALKING_WEBSITE_PATH) {
      ensureVapi();
    }
  }, [pathname, ensureVapi]);

  useEffect(() => {
    return () => {
      if (audioBridgeTimerRef.current !== null) {
        window.clearTimeout(audioBridgeTimerRef.current);
      }
      simliRef.current?.stop();
      vapiRef.current?.stop();
      vapiRef.current = null;
      simliRef.current = null;
    };
  }, []);

  const startVapiCall = useCallback(async () => {
    const vapi = ensureVapi();
    if (!vapi) {
      throw new Error("Vapi is not initialized.");
    }

    if (callStartingRef.current) {
      return;
    }

    callStartingRef.current = true;

    try {
      await vapi.start(
        VAPI_ASSISTANT_ID,
        createVapiTransferAssistantOverrides(),
      );
    } catch (startError) {
      callStartingRef.current = false;
      throw startError;
    }
  }, [ensureVapi]);

  const startSimliSession = useCallback(async () => {
    const video = avatarVideoRef.current;
    const audio = avatarAudioRef.current;

    if (!video || !audio) {
      throw new Error("Avatar media elements are not ready.");
    }

    const {
      generateIceServers,
      generateSimliSessionToken,
      LogLevel,
      SimliClient: SimliClientConstructor,
    } = await loadSimliModule();

    const simliConfig = {
      faceId: SIMLI_FACE_ID,
      handleSilence: false,
      maxSessionLength: 600,
      maxIdleTime: 600,
    };

    const [{ session_token }, iceServers] = await Promise.all([
      generateSimliSessionToken({
        apiKey: SIMLI_API_KEY,
        config: simliConfig,
      }),
      generateIceServers(SIMLI_API_KEY),
    ]);

    const simli = new SimliClientConstructor(
      session_token,
      video,
      audio,
      iceServers,
      LogLevel.ERROR,
      "p2p",
    );

    simliRef.current = simli;

    simli.on("start", () => {
      setIsAvatarLive(true);
      simli.sendAudioData(new Uint8Array(6000).fill(0));
      ensureAudioBridge();
    });

    simli.on("stop", () => {
      setIsAvatarLive(false);
      vapiRef.current?.stop();
    });

    simli.on("error", () => {
      setError("Avatar connection failed. Please try again.");
      setIsLoading(false);
      vapiRef.current?.stop();
    });

    simli.on("startup_error", () => {
      setError("Avatar failed to start. Check your Simli API key.");
      setIsLoading(false);
      vapiRef.current?.stop();
    });

    await simli.start();
  }, [ensureAudioBridge]);

  const beginSimliSession = useCallback(() => {
    void startSimliSession().catch((simliError) => {
      console.warn("Simli session failed, continuing with voice only:", simliError);
    });
  }, [startSimliSession]);

  const warmLaraSession = useCallback(() => {
    ensureVapi();
    warmMicrophone().catch(() => {});
  }, [ensureVapi]);

  const openWidget = useCallback(() => {
    setIsWidgetVisible(true);
  }, []);

  const closeWidget = useCallback(() => {
    setIsWidgetVisible(false);
  }, []);

  const startCall = useCallback(async () => {
    if (!isVapiConfigured()) {
      setError(
        "Add NEXT_PUBLIC_VAPI_PUBLIC_KEY in .env, then restart the dev server.",
      );
      return;
    }

    setTranscript([]);
    setError(null);
    transferActiveRef.current = false;
    setIsLoading(true);

    try {
      ensureVapi();

      const micTask = warmMicrophone();
      if (shouldUseSimli(pathname)) {
        beginSimliSession();
      }

      await micTask;
      void startVapiCall().catch((startError) => {
        setIsLoading(false);
        setError(
          startError instanceof Error
            ? startError.message
            : "Could not start the voice assistant.",
        );
        console.error("Failed to start voice session:", startError);
      });
    } catch (startError) {
      setIsLoading(false);
      setError(
        startError instanceof Error
          ? startError.message
          : "Could not start the voice assistant.",
      );
      console.error("Failed to start voice session:", startError);
    }
  }, [beginSimliSession, ensureVapi, pathname, startVapiCall]);

  const endCall = useCallback((fromTransfer = false) => {
    if (fromTransfer || transferActiveRef.current) {
      intentionalDisconnectRef.current = true;
      setError(null);
    }

    if (audioBridgeTimerRef.current !== null) {
      window.clearTimeout(audioBridgeTimerRef.current);
      audioBridgeTimerRef.current = null;
    }

    transferActiveRef.current = false;
    callStartingRef.current = false;
    microphonePromise = null;
    simliRef.current?.stop();
    vapiRef.current?.stop();
    setIsConnected(false);
    setIsSpeaking(false);
    setIsAvatarLive(false);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    endCallRef.current = () => endCall(true);
  }, [endCall]);

  const value = useMemo(
    () => ({
      isWidgetVisible,
      isConnected,
      isSpeaking,
      isLoading,
      transcript,
      error,
      openWidget,
      closeWidget,
      prefetchVoiceClients,
      warmLaraSession,
      startCall,
      endCall,
    }),
    [
      isWidgetVisible,
      isConnected,
      isSpeaking,
      isLoading,
      transcript,
      error,
      openWidget,
      closeWidget,
      prefetchVoiceClients,
      warmLaraSession,
      startCall,
      endCall,
    ],
  );

  return (
    <VapiSimliContext.Provider value={value}>
      {children}
      <video
        ref={avatarVideoRef}
        aria-hidden="true"
        playsInline
        style={{ display: "none" }}
      />
      <audio ref={avatarAudioRef} id="simli_audio" aria-hidden="true" />
    </VapiSimliContext.Provider>
  );
}

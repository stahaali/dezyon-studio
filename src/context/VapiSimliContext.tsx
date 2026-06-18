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
import Vapi from "@vapi-ai/web";
import {
  generateIceServers,
  generateSimliSessionToken,
  LogLevel,
  SimliClient,
} from "simli-client";
import { isSimliConfigured, SIMLI_API_KEY, SIMLI_FACE_ID } from "@/lib/simli-config";
import {
  isVapiConfigured,
  VAPI_ASSISTANT_ID,
  VAPI_PUBLIC_KEY,
} from "@/lib/vapi-config";
import {
  createVapiTransferAssistantOverrides,
  isTransferCallMessage,
} from "@/lib/vapi-transfer-tool";

type TranscriptEntry = {
  role: string;
  text: string;
};

type VapiSimliContextValue = {
  isConnected: boolean;
  isSpeaking: boolean;
  isLoading: boolean;
  transcript: TranscriptEntry[];
  error: string | null;
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
  const vapiRef = useRef<Vapi | null>(null);
  const simliRef = useRef<SimliClient | null>(null);
  const avatarVideoRef = useRef<HTMLVideoElement | null>(null);
  const avatarAudioRef = useRef<HTMLAudioElement | null>(null);
  const transferActiveRef = useRef(false);
  const intentionalDisconnectRef = useRef(false);
  const endCallRef = useRef<() => void>(() => {});

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

  const attachVapiListeners = useCallback(
    (vapi: Vapi) => {
      vapi.on("call-start", () => {
        transferActiveRef.current = false;
        setIsConnected(true);
        setIsLoading(false);
        setError(null);

        if (!connectVapiAudioToSimli()) {
          window.setTimeout(() => {
            connectVapiAudioToSimli();
          }, 250);
        }
      });

      vapi.on("call-end", () => {
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
    [connectVapiAudioToSimli],
  );

  useEffect(() => {
    if (!isVapiConfigured()) {
      return;
    }

    const vapi = new Vapi(VAPI_PUBLIC_KEY);
    vapiRef.current = vapi;
    attachVapiListeners(vapi);

    return () => {
      simliRef.current?.stop();
      vapi.stop();
      vapiRef.current = null;
      simliRef.current = null;
    };
  }, [attachVapiListeners]);

  const startVapiCall = useCallback(async () => {
    if (!vapiRef.current) {
      throw new Error("Vapi is not initialized.");
    }

    await vapiRef.current.start(
      VAPI_ASSISTANT_ID,
      createVapiTransferAssistantOverrides(),
    );
  }, []);

  const startSimliSession = useCallback(async () => {
    const video = avatarVideoRef.current;
    const audio = avatarAudioRef.current;

    if (!video || !audio) {
      throw new Error("Avatar media elements are not ready.");
    }

    const simliConfig = {
      faceId: SIMLI_FACE_ID,
      handleSilence: false,
      maxSessionLength: 600,
      maxIdleTime: 600,
    };

    const { session_token } = await generateSimliSessionToken({
      apiKey: SIMLI_API_KEY,
      config: simliConfig,
    });

    const iceServers = await generateIceServers(SIMLI_API_KEY);
    const simli = new SimliClient(
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
      void startVapiCall();
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
  }, [startVapiCall]);

  const startCall = useCallback(async () => {
    if (!isVapiConfigured()) {
      setError(
        "Add NEXT_PUBLIC_VAPI_PUBLIC_KEY in .env.local, then restart the dev server.",
      );
      return;
    }

    setTranscript([]);
    setError(null);
    transferActiveRef.current = false;
    setIsLoading(true);

    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });

      if (isSimliConfigured()) {
        await startSimliSession();
        return;
      }

      await startVapiCall();
    } catch (startError) {
      setIsLoading(false);
      setError(
        startError instanceof Error
          ? startError.message
          : "Could not start the voice assistant.",
      );
      console.error("Failed to start voice session:", startError);
    }
  }, [startSimliSession, startVapiCall]);

  const endCall = useCallback((fromTransfer = false) => {
    if (fromTransfer || transferActiveRef.current) {
      intentionalDisconnectRef.current = true;
      setError(null);
    }

    transferActiveRef.current = false;
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
      isConnected,
      isSpeaking,
      isLoading,
      transcript,
      error,
      startCall,
      endCall,
    }),
    [
      isConnected,
      isSpeaking,
      isLoading,
      transcript,
      error,
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

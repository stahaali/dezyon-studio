import type { AssistantOverrides } from "@vapi-ai/web/dist/api";
import { VAPI_PHONE_NUMBER } from "@/lib/vapi-config";

export const TRANSFER_HOLD_MESSAGE =
  "Of course, I'm connecting you to our sales team right now. Please hold.";

const TRANSFER_DESTINATION_DESCRIPTION =
  "Sales team and human agents. Use immediately when the user asks to transfer to sales, speak with a human, talk to an agent, or talk to someone from the team.";

export function isTransferCallMessage(message: {
  type?: string;
  functionCall?: { name?: string };
  toolCallList?: Array<{ function?: { name?: string } }>;
  toolWithToolCallList?: Array<{ type?: string; tool?: { type?: string } }>;
}): boolean {
  if (message.type === "transfer-update") {
    return true;
  }

  if (
    message.type === "function-call" &&
    message.functionCall?.name === "transferCall"
  ) {
    return true;
  }

  if (message.type === "tool-calls") {
    const byFunctionName = message.toolCallList?.some(
      (toolCall) => toolCall.function?.name === "transferCall",
    );
    if (byFunctionName) {
      return true;
    }

    return (
      message.toolWithToolCallList?.some(
        (entry) => entry.type === "transferCall" || entry.tool?.type === "transferCall",
      ) ?? false
    );
  }

  return false;
}

export function createVapiTransferAssistantOverrides():
  | AssistantOverrides
  | undefined {
  if (!VAPI_PHONE_NUMBER) {
    return undefined;
  }

  return {
    variableValues: {
      vapiTransferNumber: VAPI_PHONE_NUMBER,
    },
    "tools:append": [
      {
        type: "transferCall",
        destinations: [
          {
            type: "number",
            number: "{{vapiTransferNumber}}",
            description: TRANSFER_DESTINATION_DESCRIPTION,
            message: TRANSFER_HOLD_MESSAGE,
            transferPlan: {
              mode: "blind-transfer",
            },
          },
        ],
        messages: [
          {
            type: "request-start",
            content: TRANSFER_HOLD_MESSAGE,
            blocking: true,
          },
          {
            type: "request-complete",
            content: "",
          },
        ],
      },
    ],
  };
}

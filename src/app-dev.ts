import { MemoryStorage } from "botbuilder";
import { Application, AI, preview } from "@microsoft/teams-ai";

import config from "./config";
if (!config.openAIKey || !config.openAIAssistantId) {
  throw new Error("Missing OPENAI_API_KEY or OPENAI_ASSISTANT_ID.");
}
const planner = new preview.AssistantsPlanner({
  apiKey: config.openAIKey,
  assistant_id: config.openAIAssistantId,
});
const storage = new MemoryStorage();
const app = new Application({
  storage,
  ai: {
    planner,
  },
});

app.message("/reset", async (context, state) => {
  state.deleteConversationState();
  await context.sendActivity("Ok lets start this over Mon Mar 11 08:33:00 UTC 2024.");
});

app.ai.action(AI.HttpErrorActionName, async (context, state, data) => {
  await context.sendActivity("An AI request failed. Please try again later.");
  return AI.StopCommandName;
});

export default app;
// Tue Feb 20 08:33:27 UTC 2024
// Tue Feb 27 08:33:08 UTC 2024
// Tue Mar  5 08:33:20 UTC 2024

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
  await context.sendActivity("Ok lets start this over Thu Jan  2 08:36:12 UTC 2025.");
});

app.ai.action(AI.HttpErrorActionName, async (context, state, data) => {
  await context.sendActivity("An AI request failed. Please try again later.");
  return AI.StopCommandName;
});

export default app;
// Tue Feb 20 08:33:27 UTC 2024
// Tue Feb 27 08:33:08 UTC 2024
// Tue Mar  5 08:33:20 UTC 2024
// Tue Mar 12 08:33:03 UTC 2024
// Tue Mar 19 08:33:10 UTC 2024
// Tue Mar 26 08:33:58 UTC 2024
// Tue Apr  2 08:33:34 UTC 2024
// Tue Apr  9 08:33:18 UTC 2024
// Tue Apr 16 08:33:10 UTC 2024
// Tue Apr 23 08:33:22 UTC 2024
// Tue Apr 30 08:33:39 UTC 2024
// Tue May  7 08:33:22 UTC 2024
// Tue May 14 08:34:03 UTC 2024
// Tue May 21 08:33:31 UTC 2024
// Tue May 28 08:34:14 UTC 2024
// Tue Jun  4 08:34:05 UTC 2024
// Tue Jun 11 08:34:26 UTC 2024
// Tue Jun 18 08:34:26 UTC 2024
// Tue Jun 25 08:34:19 UTC 2024
// Tue Jul  2 08:34:05 UTC 2024
// Tue Jul  9 08:34:39 UTC 2024
// Tue Jul 16 08:39:49 UTC 2024
// Tue Jul 23 08:35:13 UTC 2024
// Tue Jul 30 08:34:00 UTC 2024
// Tue Aug  6 08:34:27 UTC 2024
// Tue Aug 13 08:34:57 UTC 2024
// Tue Aug 20 08:40:21 UTC 2024
// Tue Aug 27 08:35:28 UTC 2024
// Tue Sep  3 08:36:08 UTC 2024
// Tue Sep 10 08:36:02 UTC 2024
// Tue Sep 17 08:36:37 UTC 2024
// Tue Sep 24 08:37:21 UTC 2024
// Tue Oct  1 08:37:41 UTC 2024
// Tue Oct  8 08:37:22 UTC 2024
// Tue Oct 15 08:37:15 UTC 2024
// Tue Oct 22 08:37:00 UTC 2024
// Tue Oct 29 08:37:09 UTC 2024
// Tue Nov  5 08:36:13 UTC 2024
// Tue Nov 12 08:36:26 UTC 2024
// Tue Nov 19 08:37:53 UTC 2024
// Tue Nov 26 08:38:11 UTC 2024
// Tue Dec  3 08:38:09 UTC 2024
// Tue Dec 10 08:38:33 UTC 2024
// Tue Dec 17 08:38:36 UTC 2024
// Tue Dec 24 08:36:21 UTC 2024
// Tue Dec 31 08:36:04 UTC 2024

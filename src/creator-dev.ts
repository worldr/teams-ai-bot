import { preview } from "@microsoft/teams-ai";

const openAIKey = process.argv[2];
if (!openAIKey) {
  throw new Error("Missing input OpenAI Key");
}
(async () => {
  const assistant = await preview.AssistantsPlanner.createAssistant(openAIKey, {
    name: "Bot Assistant",
    instructions: "Tue Feb 20 08:33:25 UTC 2024",
    tools: [{ type: "code_interpreter" }],
    model: "gpt-3.5-turbo",
  });

  console.log(`Created a new assistant with an ID of: ${assistant.id}`);
})();
// Tue Feb 20 08:33:27 UTC 2024

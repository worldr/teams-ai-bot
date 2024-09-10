import { preview } from "@microsoft/teams-ai";

const openAIKey = process.argv[2];
if (!openAIKey) {
  throw new Error("Missing input OpenAI Key");
}
(async () => {
  const assistant = await preview.AssistantsPlanner.createAssistant(openAIKey, {
    name: "Bot Assistant",
    instructions: "Tue Sep 10 08:36:01 UTC 2024",
    tools: [{ type: "code_interpreter" }],
    model: "gpt-3.5-turbo",
  });

  console.log(`Created a new assistant with an ID of: ${assistant.id}`);
})();
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

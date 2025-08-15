import * as restify from "restify";
import {
  CloudAdapter,
  ConfigurationBotFrameworkAuthentication,
  ConfigurationServiceClientCredentialFactory,
} from "botbuilder";
import app from "./app";
import config from "./config";

const botFrameworkAuthentication = new ConfigurationBotFrameworkAuthentication(
  {},
  new ConfigurationServiceClientCredentialFactory({
    MicrosoftAppId: config.botId,
    MicrosoftAppPassword: process.env.BOT_PASSWORD,
    MicrosoftAppType: "MultiTenant",
  })
);
const adapter = new CloudAdapter(botFrameworkAuthentication);
const onTurnErrorHandler = async (context, error) => {
  console.error(`\n [onTurnError] unhandled error: ${error}`);
  await context.sendTraceActivity(
    "OnTurnError Trace",
    `${error}`,
    "https://www.botframework.com/schemas/error",
    "TurnError"
  );
  await context.sendActivity("The bot encountered an error or bug.");
  await context.sendActivity(
    "To continue to run this bot, please fix the bot source code."
  );
};
adapter.onTurnError = onTurnErrorHandler;
const server = restify.createServer();
server.use(restify.plugins.bodyParser());

server.listen(process.env.port || process.env.PORT || 3978, () => {
  console.log(`\nBot Started Fri Aug 15 08:40:01 UTC 2025, ${server.name} listening to ${server.url}`);
});
server.post("/api/messages", async (req, res) => {
  await adapter.process(req, res as any, async (context) => {
    await app.run(context);
  });
});
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
// Tue Jan  7 08:36:28 UTC 2025
// Tue Jan 14 08:35:53 UTC 2025
// Tue Jan 21 08:35:47 UTC 2025
// Tue Jan 28 08:36:04 UTC 2025
// Tue Feb  4 08:36:12 UTC 2025
// Tue Feb 11 08:36:10 UTC 2025
// Tue Feb 18 08:36:19 UTC 2025
// Tue Feb 25 08:36:58 UTC 2025
// Tue Mar  4 08:36:49 UTC 2025
// Tue Mar 11 08:37:23 UTC 2025
// Tue Mar 18 08:38:02 UTC 2025
// Tue Mar 25 08:37:45 UTC 2025
// Tue Apr  1 08:38:39 UTC 2025
// Tue Apr  8 08:38:36 UTC 2025
// Tue Apr 15 08:39:07 UTC 2025
// Tue Apr 22 08:38:44 UTC 2025
// Tue Apr 29 08:39:34 UTC 2025
// Tue May  6 08:39:04 UTC 2025
// Tue May 13 08:40:29 UTC 2025
// Tue May 20 08:40:16 UTC 2025
// Tue May 27 08:39:16 UTC 2025
// Tue Jun  3 08:40:52 UTC 2025
// Tue Jun 10 08:40:21 UTC 2025
// Tue Jun 17 08:40:26 UTC 2025
// Tue Jun 24 08:40:39 UTC 2025
// Tue Jul  1 08:40:49 UTC 2025
// Tue Jul  8 08:40:56 UTC 2025
// Tue Jul 15 08:41:41 UTC 2025
// Tue Jul 22 08:42:18 UTC 2025
// Tue Jul 29 08:42:22 UTC 2025
// Tue Aug  5 08:43:12 UTC 2025
// Tue Aug 12 08:40:29 UTC 2025

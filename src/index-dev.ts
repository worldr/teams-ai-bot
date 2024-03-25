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
  console.log(`\nBot Started Mon Mar 25 08:33:13 UTC 2024, ${server.name} listening to ${server.url}`);
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

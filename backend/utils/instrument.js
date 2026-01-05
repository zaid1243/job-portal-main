// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
// import Sentry from "@sentry";
import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://9d5cc52b3c022d3f0b08098020929717@o4510652042641408.ingest.us.sentry.io/4510652094021632",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
  integrations: [Sentry.mongooseIntegration()],
});

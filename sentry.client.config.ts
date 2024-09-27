import * as Sentry from "@sentry/nextjs";

if (process.env.USE_SENTRY === 'true') {
  Sentry.init({
    dsn: "https://bdc0990949adcb348de02e0dbb2de1dc@o4507898428915712.ingest.us.sentry.io/4507898430750720",
    integrations: [
      Sentry.replayIntegration(),
      Sentry.feedbackIntegration({
        colorScheme: "dark",
      }),
    ],
    tracesSampleRate: 1,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
    debug: false,
  });
}
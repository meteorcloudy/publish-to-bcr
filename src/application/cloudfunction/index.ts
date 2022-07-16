import sourceMapSupport from "source-map-support";
sourceMapSupport.install();

// Export all cloud function entrypoints here
export { handleGithubWebhookEvent } from "./github-webhook-entrypoint.js";

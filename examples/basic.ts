import { __dirname, init } from "@xpresser/framework";

// Initialize Xpresser
const $ = await init({
    env: "development",
    name: "Basic Xpresser App",
    paths: { base: __dirname(import.meta.url) }
});

// Start Xpresser
$.start().catch($.console.logErrorAndExit);

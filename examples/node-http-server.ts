import { __dirname, init } from "@xpresser/framework";
import NodeHttpServerProvider from "@xpresser/server-module/servers/NodeHttpServerProvider.js";

// Initialize Xpresser
const $ = await init({
    env: "development",
    name: "Basic Xpresser App",
    paths: { base: __dirname(import.meta.url) }
});

const { router } = await NodeHttpServerProvider.use($);

router.get("/", () => "Hello World!");

// Start Xpresser
$.start().catch($.console.logErrorAndExit);

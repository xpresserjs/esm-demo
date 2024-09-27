import { __dirname, init } from "@xpresser/framework";
import NodeHttpServerProvider from "@xpresser/server-module/servers/NodeHttpServerProvider.js";

await WithXpresserHandler();

async function WithXpresserHandler() {
    // Initialize Xpresser
    const $ = await init({
        env: "development",
        name: "Express Server with Xpresser Request Handler",
        paths: { base: __dirname(import.meta.url) }
    });

    const { router } = await NodeHttpServerProvider.use($, {
        // Set server module as default module
        defaultModule: true
    });

    router.get("/", () => "Hello World!");

    // Start Xpresser
    $.start().then(WithNativeHandler).catch($.console.logErrorAndExit);
}

async function WithNativeHandler() {
    const $ = await init({
        env: "development",
        name: "Express Server with Native Request Handler",
        paths: { base: __dirname(import.meta.url) },
        server: {
            port: 2001
        }
    });

    const { nativeRouter } = await NodeHttpServerProvider.use($, {
        defaultModule: true,
        requestHandler: "native"
    });

    nativeRouter.get("/", (_req, res) => res.end("Hello From Express Router"));

    // Start Xpresser
    $.start().catch($.console.logErrorAndExit);
}

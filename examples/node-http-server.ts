import { __dirname, init } from "@xpresser/framework";
import NodeHttpServerProvider from "@xpresser/server-module/servers/NodeHttpServerProvider.js";

await WithXpresserHandler();

/**
 * Use Xpresser Request Handler,
 * This is the default behavior of the server module.
 * @constructor
 */
async function WithXpresserHandler() {
    // Initialize Xpresser
    const $ = await init({
        env: "development",
        name: "Http Server with Xpresser Request Handler",
        paths: { base: __dirname(import.meta.url) }
    });

    const { router } = await NodeHttpServerProvider.use($, {
        // Set server module as default module
        defaultModule: true
    });

    router.get("/", () => "Hello from Xpresser Request Handler");

    // Start Xpresser
    $.start().then(WithNativeHandler).catch($.console.logErrorAndExit);
}

/**
 * The server module also supports using the native Node.js request handler.
 * @constructor
 */
async function WithNativeHandler() {
    const $ = await init({
        env: "development",
        name: "Http Server with Native Request Handler",
        paths: { base: __dirname(import.meta.url) },
        server: {
            port: 2001
        }
    });

    const { nativeRouter } = await NodeHttpServerProvider.use($, {
        defaultModule: true,
        requestHandler: "native"
    });

    nativeRouter.get("/", (_req, res) => res.end("Hello From Nodejs Native Request Handler"));

    // Start Xpresser
    $.start().catch($.console.logErrorAndExit);
}

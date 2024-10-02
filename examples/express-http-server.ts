import { __dirname, init } from "@xpresser/framework";
import ExpressProvider from "@xpresser/express-module";

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
        name: "Express with Xpresser Request Handler",
        paths: { base: __dirname(import.meta.url) }
    });

    const { router } = await ExpressProvider.use($, {
        // Set server module as default xpresser module
        // same as `$.modules.setDefault("server")`
        defaultModule: true
    });

    router.get("/", (http) => http.send("Hello from Xpresser Request Handler"));

    // Start Xpresser
    $.start().then(WithNativeHandler).catch($.console.logErrorAndExit);
}

/**
 * The server module also supports using the native Express request handler.
 * This is useful for migrating existing Express applications to Xpresser.
 * @constructor
 */
async function WithNativeHandler() {
    const $ = await init({
        env: "development",
        name: "Express with Native Request Handler",
        paths: { base: __dirname(import.meta.url) },
        server: { port: 2001 }
    });

    const { nativeRouter } = await ExpressProvider.use($, {
        // Set server module as default xpresser module
        // same as `$.modules.setDefault("server")`
        defaultModule: true,

        // Use native express request handler
        requestHandler: "express"
    });

    nativeRouter.get("/", (_req, res) => res.end("Hello From Express Native Request Handler"));

    // Start Xpresser
    $.start().catch($.console.logErrorAndExit);
}

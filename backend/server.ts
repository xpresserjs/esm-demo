import { ExpressProvider, InitializeExpress } from "@xpresser/express-module";
import { Xpresser } from "@xpresser/framework/xpresser.js";

/**
 * A function to initialize express server.
 * @param $ - Xpresser Instance
 */
export async function initializeServer($: Xpresser) {
    const server = await InitializeExpress($);

    // Register Routes
    await routes($, server);
}

async function routes($: Xpresser, provider: ExpressProvider) {
    /**
     * Register Routes once express is initialized.
     * server.app is only available on or after the `expressInit` event.
     */
    $.on.expressInit$(function RegisterRoutes() {
        const { app } = provider;

        // Register a route like you would in express.
        // No xpresser controller support yet.
        app.get("/", (_, res) => {
            res.send("Hello World!");
        });
    });
}
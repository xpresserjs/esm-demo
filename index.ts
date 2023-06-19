import { __dirname, CliEngine, init } from "@xpresser/framework";
import { InitializeExpress } from "@xpresser/express-module";

// Initialize xpresser
const $ = await init({
    name: "Xpresser ESM",
    env: "development",
    paths: {
        // Set the root path to the current directory
        base: __dirname(import.meta.url)
    }
});

// Initialize Express Server module
const server = await InitializeExpress($);

/**
 * Register Routes once express is initialized.
 * server.app is only available on or after the `expressInit` event.
 */
$.on.expressInit$(function RegisterRoutes() {
    const { app } = server;

    // Register a route like you would in express.
    // No xpresser controller support yet.
    app.get("/", (_, res) => {
        res.send("Hello World!");
    });
});

/**
 * Register Commands Demo
 * This is a demo of how to register commands.
 * You can add a command from a command file or a command function.
 * running `npx ts-node-esm index.ts cli` will show you the commands.
 */
$.on.consoleInit$(async function RegisterCommands() {
    // Get the cli engine
    const cli = $.engine(CliEngine);

    // Add "inline" custom command example.
    cli.addCommand("inline", {
        description: "Inline Command",
        args: { name: true },
        action: ({ args, $ }) => {
            $.console.log("Inline Command:", args);
        }
    });

    // Add commands from file.
    await cli.addCommandFile("base://backend/commands.js");
});

// Start xpresser
$.start().catch($.console.logError);

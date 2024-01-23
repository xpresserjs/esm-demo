import { __dirname, CliEngine, init } from "@xpresser/framework";
import { initializeServer } from "./backend/server.js";

// Initialize xpresser
const $ = await init({
    name: "Xpresser ESM Typescript Demo",
    env: "development",
    server: { port: 2000 },
    paths: {
        // Set the root path to the current directory
        base: __dirname(import.meta.url)
    }
});


// Initialize Express Server module
await initializeServer($);

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

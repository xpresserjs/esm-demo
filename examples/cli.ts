import { __dirname, CliEngine, init } from "@xpresser/framework";

// Initialize Xpresser
const $ = await init({
    env: "development",
    name: "Xpresser Cli App",
    paths: { base: __dirname(import.meta.url) }
});

// Set `cli` as default module
$.modules.setDefault("cli");

/**
 * Register Commands Demo
 * This is a demo of how to register commands.
 * You can add a command from a command file or a command function.
 */
$.onNext("consoleInit", async function RegisterCommands() {
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
});

// Start Xpresser
$.start().catch($.console.logErrorAndExit);

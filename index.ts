import {CliEngine, init, __dirname} from "@xpresser/framework";

// Initialize xpresser
const $ = await init({
    env: "development",
    paths: {
        // Set the root path to the current directory
        base: __dirname(import.meta.url),
    },
});

// Register commands file.
$.on.consoleInit$(async function RegisterCommands() {
    const cli = $.engine(CliEngine);

    // Add commands from file.
    await cli.addCommandFile("backend/commands.js");

    // Add "inline" custom command
    cli.addCommand("inline", {
        description: "Inline Command",
        args: {name: true},
        action: ({args, $}) => {
            $.console.log("Inline Command:", args);
        },
    });
});

// Start xpresser
$.start();

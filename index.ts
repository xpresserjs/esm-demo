import {__dirname, CliEngine, init} from "@xpresser/framework";
import {InitializeExpress} from "@xpresser/express-module";
import MyConsoleModule from "./backend/MyConsoleModule.js";



// Initialize xpresser
const $ = await init({
    name: "FireShip.io App",
    env: "development",
    debug: {
        bootCycle: {
            irrelevantNextError: true,
        }
    },
    paths: {
        // Set the root path to the current directory
        base: __dirname(import.meta.url),
    },
});

/**
 * Example on how to add a custom module.
 * This module is a copy of the default console module.
 */
await $.modules.register(MyConsoleModule);

// register express server module
const server = await InitializeExpress($);

/**
 * Register Routes on `expressInit`
 * server.app is only available on or after the `expressInit` event.
 */
$.on.expressInit$(function RegisterRoutes() {
    const {app} = server;

    app.get("/", (req, res) => {
        return "Hello World!"
    });
});



/**
 * Register Commands Demo
 * This is a demo of how to register commands.
 * You can add a command from a command file or a command function.
 * running `npx ts-node-esm index.ts cli` will show you the commands.
 */
$.on.consoleInit$(async function RegisterCommands() {

    if ($.modules.isActive("cli")) {
        // Get the cli engine
        const cli = $.engine(CliEngine);

        // Add "inline" custom command
        cli.addCommand("inline", {
            description: "Inline Command",
            args: {name: true},
            action: ({args, $}) => {
                $.console.log("Inline Command:", args);
            },
        });

        // Add commands from file.
        await cli.addCommandFile("base://backend/commands.js");
    }

});

// Start xpresser
$.start().catch($.console.logError);

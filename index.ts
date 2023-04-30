import { CliEngine, init, __dirname } from "@xpresser/framework";
import { InitializeExpress } from "@xpresser/express-module";

// Initialize xpresser
const $ = await init({
  name: "FireShip.io App",
  env: "development",
  paths: {
    // Set the root path to the current directory
    base: __dirname(import.meta.url),
  },
});

// register express server module
await InitializeExpress($);

/**
 * Register Commands Demo
 * This is a demo of how to register commands.
 * You can add a command from a command file or a command function.
 * running `npx ts-node-esm index.ts cli` will show you the commands.
 */
$.on.consoleInit$(async function RegisterCommands() {
  // Get the cli engine
  const cli = $.engine(CliEngine);

  // Add "inline" custom command
  cli.addCommand("inline", {
    description: "Inline Command",
    args: { name: true },
    action: ({ args, $ }) => {
      $.console.log("Inline Command:", args);
    },
  });

  // Add commands from file.
  await cli.addCommandFile("backend/commands.js");
});

// Start xpresser
$.start();

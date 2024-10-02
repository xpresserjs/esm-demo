import { __dirname, init } from "@xpresser/framework";
import { defineInlinePlugin } from "@xpresser/framework/engines/PluginEngine.js";

// Initialize Xpresser
const $ = await init({
    env: "development",
    name: "Xpresser Cli App",
    paths: { base: __dirname(import.meta.url) }
});

// Set `cli` as default module
$.modules.setDefault("cli");

// Define Inline Plugin
const DemoPlugin = defineInlinePlugin("demo-plugin", {
    run: () => {
        $.console.logInfo("Demo Plugin is running!");
    }
});

// Register an inline plugin
$.usePlugin(DemoPlugin);

// Start Xpresser
$.start().catch($.console.logErrorAndExit);

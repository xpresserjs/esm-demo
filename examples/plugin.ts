import { __dirname, init } from "@xpresser/framework";

// Initialize Xpresser
const $ = await init({
    env: "development",
    name: "Basic Xpresser App",
    paths: {
        base: __dirname(import.meta.url),

        // Set base path for jsonConfigs
        // default is backend folder, but since this is a single file app
        // we can set it to base:// which is the same as the base path. Above
        jsonConfigs: "base://"
    }
});

// Set default module to cli
$.modules.setDefault("cli");

// Start Xpresser
$.start().catch($.console.logErrorAndExit);

import { __dirname, init } from "@xpresser/framework";
import ScrabbleGame from "../backend/ScrabbleModule.js";

// Initialize Xpresser
const $ = await init({
    env: "development",
    name: "Basic Xpresser App",
    paths: { base: __dirname(import.meta.url) },
    scrabble: {
        keywords: [
            "xpresser",
            "framework",
            "typescript",
            "javascript",
            "nodejs",
            "backend",
            "frontend",
            "plugin",
            "module",
            "cli",
            "xjs",
            "mongodb"
        ]
    }
});

// Register Scrabble Game Module
await $.modules.register(ScrabbleGame);

// set default module to scrabble
$.modules.setDefault("scrabble");

// Use module `scrabbleInit` cycle
$.on.scrabbleInit((next) => {
    $.console.logInfo("Scrabble Game Module Initialized!");
    next();
});

// Start Xpresser
$.start().catch($.console.logErrorAndExit);

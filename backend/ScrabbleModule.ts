import BaseModule, { BaseModuleConfig } from "@xpresser/framework/modules/BaseModule.js";
import * as readline from "node:readline";

class ScrabbleGame extends BaseModule {
    static config: BaseModuleConfig = {
        name: "ScrabbleGame",
        keyword: "scrabble",
        description: "A simple scrabble game"
    };

    /**
     * Custom Boot Cycles provided by this module.
     */
    static customBootCycles(): string[] {
        return ["scrabbleInit"];
    }

    /**
     * Initialize Scrabble Game in yh
     */
    async init() {
        // if already initialized
        if (this.initialized) return;

        // if no words are set in config use default
        if (!this.$.config.has("scrabble.keywords")) {
            this.$.config
                .pathTyped("scrabble")
                .set("keywords", [
                    "typescript",
                    "javascript",
                    "programming",
                    "developer",
                    "computer",
                    "algorithm",
                    "function",
                    "variable"
                ]);
        }

        this.$.on.boot(async (next) => {
            // run your boot cycle
            await this.$.runBootCycle("scrabbleInit");

            // run game on boot
            this.#run(next);
        });
    }

    /**
     * Run Scrabble Game
     */
    #run(next: Function) {
        const $ = this.$;

        // get words from config
        const words = $.config.getTyped("scrabble.keywords", [])!;

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        let score = 0;
        let currentWordIndex = 0;

        const playRound = () => {
            if (currentWordIndex >= words.length) {
                $.console.log(`Game over! Your final score is ${score}/${words.length}`);
                rl.close();
                return next();
            }

            const originalWord = words[currentWordIndex];
            const scrambledWord = this.shuffleWord(originalWord);

            console.log(`\nUnscramble this word: ${scrambledWord}`);

            rl.question("Your guess: ", (answer) => {
                if (answer.toLowerCase() === originalWord) {
                    $.console.logSuccess("Correct! Well done!");
                    score++;
                } else {
                    $.console.logError(`Sorry, that's incorrect. The word was: ${originalWord}`);
                }

                currentWordIndex++;
                playRound();
            });
        };

        $.console.log("Welcome to the Word Scramble Game!");
        $.console.log("Unscramble each word. Let's begin!");
        playRound();
    }

    /**
     * Shuffle a word
     */
    private shuffleWord(word: string): string {
        const shuffled = word
            .split("")
            .sort(() => Math.random() - 0.5)
            .join("");
        return shuffled !== word ? shuffled : this.shuffleWord(word);
    }
}

export default ScrabbleGame;

/**
 * ========================================
 * TYPESCRIPT USAGE!
 *
 * In order for xpresser typesystem to recognize this module
 * We need to extend the module declaration.
 * ========================================
 */

/**
 * Add BootCycle types
 */

declare module "@xpresser/framework/engines/BootCycleEngine.js" {
    module BootCycle {
        enum Cycles {
            scrabbleInit = "scrabbleInit"
        }
    }
}

/**
 * Add Modules Related Types
 */
declare module "@xpresser/framework/modules/BaseModule.js" {
    module Modules {
        enum Available {
            scrabble = "ScrabbleGame"
        }
    }
}

declare module "@xpresser/framework/types/configs.js" {
    module Config {
        interface Main {
            scrabble: Partial<{
                keywords: string[];
            }>;
        }
    }
}

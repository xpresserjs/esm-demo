import { defineCommands, __filename } from "@xpresser/framework";

// Get current file path.
const filename = __filename(import.meta.url);

/**
 * Define Commands
 * `key` is the command name.
 * `value` is the command options.
 */
export default defineCommands({
    sample1: {
        /**
         * Description of command
         * This will show in the commands list.
         */
        description: "Example command from file",

        /**
         * The action that will be executed when command is run.
         */
        action: ({ $ }) => {
            $.console.logInfo(`Hello from command file: ${filename}`);
        }
    },

    sample2: {
        description: "Example command from file with arguments",

        /**
         * Command Arguments
         *
         * This will show in the commands list.
         * `true` means the argument is required.
         * `false` means the argument is optional.
         *
         * The args property is an Array not an Object.
         * The keys are used to show the arguments in the commands list.
         * The order of the keys should be the same as the order of the arguments.
         */
        args: { name: true },
        action: ({ args, $ }) => {
            $.console.logInfo(`Hello ${args[0]} from command file: ${filename}`);
        }
    }
});

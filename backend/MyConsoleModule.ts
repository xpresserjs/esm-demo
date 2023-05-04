import {BootCycleFunction, CliEngine, importDefault} from "@xpresser/framework";
import ConsoleModule from "@xpresser/framework/modules/console/ConsoleModule.js";
import type {BaseModuleConfig} from "@xpresser/framework/modules/BaseModule.js";


class MyConsoleModule extends ConsoleModule {
    // configure module
    static config: BaseModuleConfig = {
        name: "MyConsoleModule",
        keyword: "console",
        description: "My Console Module",
    }

    // remove boot cycles to avoid conflict
    // since the default console module already has these boot cycles registered.
    static customBootCycles() {
        return [];
    }

    // add default commands
    async #addDefaultCommands() {
        const defaultCommands = await importDefault(() => import("@xpresser/framework/modules/console/commands/default.js"))

        // add only the .ls command
        const cli = this.$.engine(CliEngine);

        // add ls command
        cli.addCommand("ls", defaultCommands["ls"]);
    }

    // Do a few things before the console is initialized.
    async init(): Promise<any> {
        // reconfigure cli
        this.$.config.data.cli = {
            ...(this.$.config.data.cli || {}),
            addDefaultCommands: false,
        }

        this.$.on.consoleInit$(BootCycleFunction( async () => {
            // add default commands
            await this.#addDefaultCommands();

        }, MyConsoleModule.prependName("AddDefaultCommands")));



        // return super.init() to continue initialization.
        return super.init();
    }


}

export default MyConsoleModule;
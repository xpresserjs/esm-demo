// Import Console Module
import "@xpresser/framework/modules/console/ConsoleModule";
// Import Server Module
import "@xpresser/express-module/xpresser.d.ts";

/**
 * Extend Modules
 */
declare module "@xpresser/framework/modules/BaseModule.js" {
    module Modules {
        export enum Available {
            console = "SecondConsoleModule"
        }
    }
}

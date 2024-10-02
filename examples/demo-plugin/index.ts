import { definePlugin } from "@xpresser/framework/engines/PluginEngine.js";

export default definePlugin({
    run(plugin, $) {
        $.console.logCalmly(`Hi 👋 from [${plugin.namespace}]`);
        $.console.log(plugin);
    }
});

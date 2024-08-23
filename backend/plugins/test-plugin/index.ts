import { definePlugin } from "@xpresser/framework/engines/PluginEngine.js";

export default definePlugin({
    run(plugin, $) {
        $.console.logCalmly("Server booted from test-plugin");
    }
});

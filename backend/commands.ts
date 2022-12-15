import { defineCommands } from "@xpresser/framework";

export default defineCommands({
  custom: {
    description: "Display a custom command",
    action: ({ args, $ }) => {
      $.console.log("Custom Command:", args);
    },
  },
});

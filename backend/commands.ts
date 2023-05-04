import { defineCommands } from "@xpresser/framework";

export default defineCommands({
  isGitPod: {
    description: "Check if we are currently in gitpod servers",
    action: ({$}) => {

      // check if any env key has the key word gitpod
      for(const [key] of Object.entries(process.env)){
        if(key.toLowerCase().includes("gitpod")){
          $.console.logSuccess("This is a GitPod enviroment.");
          return
        }
      }

      $.console.logError("No GitPod enviroment found!!");
      $.console.spacing();
    }
  }
});

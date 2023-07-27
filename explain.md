[step1-route-separation/explain.md](https://github.com/dheeraj-br/random/blob/step1-route-seperation/explain.md)

[step2-global-errorhandling/explain.md](https://github.com/dheeraj-br/random/blob/step2-global-errorhandling/explain.md)

[step3-subdomains/explain.md](https://github.com/dheeraj-br/random/blob/step3-subdomains/explain.md)

[step4-static-files-and-template-engines/explain.md](https://github.com/dheeraj-br/random/blob/step4-static-files-and-template-engines/explain.md)

[step5-add-prettier/explain.md](https://github.com/dheeraj-br/random/blob/step5-add-prettier/explain.md)

[step6-add-vcs-extensions/explain.md](https://github.com/dheeraj-br/random/blob/step6-add-vcs-extentions/explain.md)

[step7-eslint/explain.md](https://github.com/dheeraj-br/random/blob/step7-eslint/explain.md)

[step8-add-env-variables/explain.md](https://github.com/dheeraj-br/random/blob/step8-add-env-variables/explain.md)

# adds launch.json and 'debug' command

-   debugger feature has two 'request' types: launch and attach
-   'launch' debug request type auto starts the node process and starts the debug session
-   'attach' debug requests types without processId requires --inspect flag to be added at launch time
-   'attach' debug requests type must manually be added to already running node process
-   launch.json file can be added to customize the debugger's functionality
-   using launch.json a runtime executable can be allowed to start the node process and debugger. eg: nodemon
-   'attach' and 'launch' types need to restart debugging session to reflect file changes.
-   'attach' has a restart flag. while launch does not have such a flag, will need to be explicitly restarted
-   'launch' with runtime executable can reflect file changes without manually restarting debugging session
-   'Auto attach' feature attaches the debugger to node process immediately on startup
-   'Auto attach' can be configured to attach only on process that were started with --inspect flag
-   'Auto attach' has other options such as 'smart' and 'always' to decide when debugger is attached to a node process
-   when node process in started with a --inspect flag, chrome's debugger can be attached to the node process by visiting at chrome://inspect > 'devtools for node' or in firebug's options
-   when opened in chrome, operations like memory and performance metrics can be performed
-   changes to files do not reflect in the same debug session in chrome. debug session get restarted
-   vcs has no features such as function breakpoint and variable use breakpoint (data breakpoint)

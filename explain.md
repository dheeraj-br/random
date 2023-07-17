[step1-route-seperation/explain.md](https://github.com/dheeraj-br/random/blob/step1-route-seperation/explain.md)

# adds global error handler, unhandled rejection and uncaught exception handlers

- global error handler to catch operational errors (page not found) and run time errors (errors in the code)
- conditionally expose only relavent details to client based on type of error
- catch unhandled rejection and uncaught exception from outside express (eg: db connection)

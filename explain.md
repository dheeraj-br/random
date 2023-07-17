# adds route seperation for different modules

- each module has a dedicated route file.
- global route file imports module's route as a middleware, this where we specify the base of the route for each module.
- global route file is imported into the app's fornt controller as a middleware

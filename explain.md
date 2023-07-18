[step1-route-seperation/explain.md](https://github.com/dheeraj-br/random/blob/step1-route-seperation/explain.md)

[step2-global-errorhandling/explain.md](https://github.com/dheeraj-br/random/blob/step2-global-errorhandling/explain.md)

# add Vhost to support subomains and root domain and segregate requests

- adds vhost package.
- create new express apps for each subdomain/root domain.
- pass domain name and routes to Vhost package.
- add error handling to each of the subdomain and root domain.
- all routes are handled by these new express apps only.
- main express main app only serves as a container for running the vhost's apps.

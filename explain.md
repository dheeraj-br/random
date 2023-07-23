[step1-route-seperation/explain.md](https://github.com/dheeraj-br/random/blob/step1-route-seperation/explain.md)

[step2-global-errorhandling/explain.md](https://github.com/dheeraj-br/random/blob/step2-global-errorhandling/explain.md)

[step3-subdomains/explain.md](https://github.com/dheeraj-br/random/blob/step3-subdomains/explain.md)

[step4-static-files-and-template-engines/explain.md](https://github.com/dheeraj-br/random/blob/step4-static-files-and-template-engines/explain.md)

[step5-add-prettier/explain.md](https://github.com/dheeraj-br/random/blob/step5-add-prettier/explain.md)


[step6-add-vcs-extentions/explain.md](https://github.com/dheeraj-br/random/blob/step6-add-vcs-extentions/explain.md)

# adds eslint, prettier, husky and lint-staged packages for linting and formatting pre-commit
files added 
-
eslintrc - configs for eslint that holds rules, plugins and config extensions
prettierrc - overrides default configs for prettier rules
eslintignore - ignores files and folder from being linted
prettierignore - ignores files and folders from being formatted
-
extends - eslint feature to extend configs, from repository or local files
plugin - eslint feature to use plugin, from repository or local files
custom rules - user defined rules that can be applied to eslint
custom plugins and configs - user defined plugins and configs that can be applied to eslint
airbnb, google, standard - popular plugins and configs from airbnb and google
-
npm i --save-dev --save-exact prettier eslint 
adds prettier and eslint as dev dependencies and the versions would not update automatically

npm i --save-dev eslint-config-prettier eslint-plugin-prettier
configs and plugin for prettier to be added to eslint, this allows prettier to override eslint rules. prettier must be prepended to the end of 'plugin' or 'extends' to override eslint rules.

npx eslint-config-prettier .\apps\*
this lists overlaps between eslint and prettier rules. prettier must take precedence over eslint rules.

# husky
package to utilize git hooks. 
allows to run tasks before git commit or git push 

# lint-staged
package to run tasks on only the files that are staged for git commit.
this can be used to run eslint on only the files that are staged and not on the entire repository.
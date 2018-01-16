# eslint-config-samsao-web

[![npm version](https://badge.fury.io/js/eslint-config-samsao-web.svg)](http://badge.fury.io/js/eslint-config-samsao-web)

This package provides Samsao's web JS .eslintrc as an extensible shared config.

## Usage

Add to your project and extend config in your ESLint configuration file:

 1. yarn add --dev eslint-config-samsao-web
 1. Add `'extends': 'samsao-web'` to your `.eslintrc` or `eslintrc.js` file.

## Dependencies

Contrary to the original Airbnb's ESLint modules, we do not use peer dependencies
but we instead use normal dependencies.

Indeed, in our specific case, having normal dependencies reduce the maintenance burden
of specifying all the needed peer dependencies when adding a specific ESLint
configuration to a project.

That's means that we simply need to depend on the right config project (mobile, node or
web) to enable and configure ESLint.

Of course, potential conflict problems could arise eventually, but we are ready to
live with it.

### Pulled Dependencies

The default export contains all of our ESLint rules, including ECMAScript 6+ and React.
It pulls:

  * `eslint`
  * `eslint-config-airbnb`
  * `eslint-config-airbnb-base`
  * `eslint-config-samsao-base`
  * `eslint-plugin-filenames`
  * `eslint-plugin-import`
  * `eslint-plugin-jsx-a11y`
  * `eslint-plugin-react`

To re-generate the list above, one can use:

```sh
npm info "eslint-config-samsao-web@latest" dependencies --json | \
grep eslint | \
command sed 's/[\{\},]//g ; s/: .*//g ; s/^ *"/ * `/g ; s/"/`/g'
```

# eslint-config-samsao-mobile

[![npm version](https://badge.fury.io/js/eslint-config-samsao-mobile.svg)](http://badge.fury.io/js/eslint-config-samsao-mobile)

This package provides Samsao's mobile JS .eslintrc as an extensible shared config.

## Usage

Add to your project and extend config in your ESLint configuration file:

 1. yarn add --dev eslint-config-samsao-mobile
 1. Add `'extends': 'samsao-mobile'` to your `.eslintrc` or `eslintrc.js` file.

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

The default export contains all of our ESLint rules, including ECMAScript 6+, React and
React Native. It pulls:

  * `eslint`
  * `eslint-config-airbnb`
  * `eslint-config-airbnb-base`
  * `eslint-config-samsao-base`
  * `eslint-config-samsao-web`
  * `eslint-config-samsao-mobile`
  * `eslint-plugin-filenames`
  * `eslint-plugin-import`
  * `eslint-plugin-jsx-a11y`
  * `eslint-plugin-react`
  * `eslint-plugin-react-native`

To re-generate the list above, one can use:

```sh
npm info "eslint-config-samsao-mobile@latest" dependencies --json | \
grep eslint | \
command sed 's/[\{\},]//g ; s/: .*//g ; s/^ *"/ * `/g ; s/"/`/g'
```
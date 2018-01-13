# eslint-config-samsao-mobile

[![npm version](https://badge.fury.io/js/eslint-config-samsao-mobile.svg)](http://badge.fury.io/js/eslint-config-samsao-mobile)

This package provides Samsao's mobile JS .eslintrc as an extensible shared config.

## Usage

The default export contains all of our ESLint rules, including ECMAScript 6+ and React. It requires
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

1. Install the correct versions of each package, which are listed by the command:

   ```sh
   yarn info 'eslint-config-samsao-mobile' peerDependencies
   ```

   Linux/OSX users can run

   ```sh
   export PKG=eslint-config-samsao-mobile; \
   npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add --dev "$PKG"
   ```

2. Add `'extends': 'samsao-mobile'` to your `.eslintrc` file.

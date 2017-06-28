# eslint-config-samsao-web

[![npm version](https://badge.fury.io/js/eslint-config-samsao-web.svg)](http://badge.fury.io/js/eslint-config-samsao-web)

This package provides Samsao's Node .eslintrc as an extensible shared config.

## Usage

The default export contains all of our ESLint rules, including ECMAScript 6+ and React. It requires
  * `eslint`
  * `eslint-config-airbnb-base`
  * `eslint-config-samsao-base`
  * `eslint-plugin-filenames`
  * `eslint-plugin-import`

  1. Install the correct versions of each package, which are listed by the command:

     ```sh
     yarn info 'eslint-config-samsao-node' peerDependencies
     ```

     Linux/OSX users can run

     ```sh
     export PKG=eslint-config-samsao-node; \
     npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add --dev "$PKG"
     ```

  2. Add `'extends': 'samsao-node'` to your `.eslintrc` file.

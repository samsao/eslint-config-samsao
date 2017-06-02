# eslint-config-samsao-web

[![npm version](https://badge.fury.io/js/eslint-config-samsao-web.svg)](http://badge.fury.io/js/eslint-config-samsao-web)

This package provides Samsao's web JS .eslintrc as an extensible shared config.

## Usage

The default export contains all of our ESLint rules, including ECMAScript 6+ and React. It requires
  * `eslint`
  * `eslint-config-airbnb`
  * `eslint-config-airbnb-base`
  * `eslint-config-samsao-base`
  * `eslint-plugin-filenames`
  * `eslint-plugin-import`
  * `eslint-plugin-jsx-a11y`
  * `eslint-plugin-react`

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info 'eslint-config-samsao-web@latest' peerDependencies
  ```

  Linux/OSX users can run

  ```sh
  (
    export PKG=eslint-config-samsao-web;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

1. Add `'extends': 'samsao-web'` to your ``.eslintrc` file.

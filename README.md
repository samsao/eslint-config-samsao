# Samsao's JavaScript

We follow [Airbnb's Styleguide](https://github.com/airbnb/javascript) with some minors tweaks and modifications.

The purpose of this repository is to mainly store Samsao's eslint config for its different projects.

### Base

The base ESLint rules that applies basically to JavaScript in general. This is framework agnostic and only
targeting pure JavaScript code.

It's not meant to be consumed by developers.

### Node

The ESLint rules that applies to pure Node project (like backend, scripts, etc). Applies `base` plus specific rules for Node environment.

### Mobile

The ESLint rules that applies to React Native project. Applies `base` ones plus specific rules for React Native.

### Web

The ESLint rules that applies to web based project. Applies `base` ones plus specific rules for React.

## Contributing

First, install dependencies using `bin/prepare` script that uses Yarn 
(version >= 1.x required):

```
$ bin/prepare
```

Then, before doing anything, ensure `lint` and `test` are passing:

```
$ bin/lint
$ bin/test
```

Then, implement new rules, updated `CHANGELOG.md` and submit your patch. Do **not**
bump nor release a new version until the PR has been merged! 

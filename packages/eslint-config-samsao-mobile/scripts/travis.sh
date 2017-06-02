#!/bin/sh

set -ex

main() {
  setup
  yarn run --silent test
  teardown
}

setup() {
  cd ../eslint-config-samsao-base
  yarn install
  yarn link
  cd -

  cd ../eslint-config-samsao-web
  yarn install
  yarn link eslint-config-samsao-base
  yarn link
  cd -

  yarn link eslint-config-samsao-base eslint-config-samsao-web
}

teardown() {
  cd ../eslint-config-samsao-web
  yarn unlink eslint-config-samsao-base
  yarn install --force
  cd -

  yarn unlink eslint-config-samsao-base eslint-config-samsao-web
  yarn install --force
}

main

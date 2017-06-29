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

  yarn link eslint-config-samsao-base
}

teardown() {
  yarn unlink eslint-config-samsao-base
  yarn install --force
}

main

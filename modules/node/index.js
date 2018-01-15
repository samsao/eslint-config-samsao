module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-samsao-base',

    './rules/env',
  ].map(require.resolve),
};

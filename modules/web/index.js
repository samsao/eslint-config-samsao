module.exports = {
  extends: [
    'eslint-config-airbnb',
    'eslint-config-samsao-base',

    './rules/env',
    './rules/react',
  ].map(require.resolve),
};

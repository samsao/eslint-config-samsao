module.exports = {
  extends: [
    require.resolve('eslint-config-samsao-web'),

    'plugin:react-native/all',

    require.resolve('./rules/react-native.js'),
  ],
};

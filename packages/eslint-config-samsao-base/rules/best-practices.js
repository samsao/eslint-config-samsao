module.exports = {
  rules: {
    'class-methods-use-this': 'off',
    'no-continue': 'off',
    'no-mixed-operators': ['error', { allowSamePrecedence: true }],
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-template-curly-in-string': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': [
      'error',
      {
        classes: true,
        functions: true,

        // This is set to false so that styles can be used before being defined
        variables: false,
      },
    ],
  },
};

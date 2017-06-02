module.exports = {
  rules: {
    'jsx-quotes': ['error', 'prefer-single'],

    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-wrap-multilines': 'off',
    'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
    'react/sort-comp': 'off',
  },
};

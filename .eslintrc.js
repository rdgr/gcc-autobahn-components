/* eslint-disable quote-props */
module.exports = {
  root: true,
  extends: ['airbnb'],
  parser: 'babel-eslint',
  plugins: ['prettier'],
  rules: {
    'arrow-parens': 'off',
    'comma-dangle': 'off',
    curly: 'off',
    'function-paren-newline': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 'off',
    'jsx-a11y/anchor-is-valid': [
      2,
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
      },
    ],
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/label-has-for': [
      2,
      {
        components: ['Label'],
        required: {
          every: ['id'],
        },
        allowChildren: false,
      },
    ],
    'jsx-a11y/mouse-events-have-key-events': 0,
    'linebreak-style': 'off',
    'max-len': 'off',
    'no-mixed-operators': 'off',
    'no-restricted-globals': 0,
    'no-return-assign': ['error', 'except-parens'],
    'object-curly-newline': 'off',
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        semi: true,
        singleQuote: true,
        trailingComma: 'es5',
        printWidth: 120,
      },
    ],
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': [
      2,
      {
        exceptions: ['StyledButton'],
      },
    ],
    'react/no-did-mount-set-state': 0,
    'space-before-function-paren': 'off',
  },
  overrides: [
    {
      files: ['src/**/*.spec.js'],
      env: {
        jest: true,
      },
      rules: {
        'max-lines': ['warn'], // write your unit tests!
        // for GWT-style tests
        'no-use-before-define': 'off',
        camelcase: 'off',
      },
    },
  ],
};

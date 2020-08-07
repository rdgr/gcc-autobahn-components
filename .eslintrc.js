/* eslint-disable quote-props */
module.exports = {
  root: true,
  extends: [
    'airbnb',
  ],
  parser: 'babel-eslint',
  rules: {
    'linebreak-style': 'off', // LF or CRLF
    'react/jsx-filename-extension': 'off',
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
        'camelcase': 'off',
      },
    },
  ],
};

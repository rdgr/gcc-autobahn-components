module.exports = {
  verbose: true,
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    'src/**/[^_]*.{js,jsx,mjs}',
    '!src/**/*.stories.{js,jsx,mjs}',
  ],
  // coverageThreshold: {
  //   src: {
  //     functions: 30,
  //     lines: 30,
  //     statements: 30,
  //     branches: 30,
  //   },
  // },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/jest/fileTransform.js',
    '\\.(css|less|scss)$': '<rootDir>/config/jest/fileTransform.js',
  },
  // reporters: ['jest-standard-reporter'],
  setupFilesAfterEnv: [
    './config/jest/setup.js',
  ],
  testMatch: [
    '**/__tests__/**/*.{js,jsx,mjs}',
    '**/?(*.)(spec|test).{js,jsx,mjs}',
  ],
  // testResultsProcessor: 'jest-teamcity-reporter',
  transform: {
    '^.+\\.(js|jsx|mjs)$': './node_modules/babel-jest',
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      './config/jest/fileTransform.js',
    '^.+\\.css$': './config/jest/cssTransform.js',
    // '^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx',
  },
  transformIgnorePatterns: ['node_modules.+\\.(js|jsx|mjs)$'],
};

const path = require('path');

// const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

// module.exports = {
//   // 1. register the docs panel (as opposed to '@storybook/addon-docs' which
//   //    will configure everything with a preset)
//   addons: ['@storybook/addon-a11y', '@storybook/addon-docs/register'],
//   // 2. manually configure webpack, since you're not using the preset
//   webpackFinal: async (config) => {
//     config.module.rules.push({
//       // 2a. Load `.stories.mdx` / `.story.mdx` files as CSF and generate
//       //     the docs page from the markdown
//       test: /\.(stories|story)\.mdx$/,
//       use: [
//         {
//           loader: 'babel-loader',
//           // may or may not need this line depending on your app's setup
//           options: {
//             plugins: ['@babel/plugin-transform-react-jsx'],
//           },
//         },
//         {
//           loader: '@mdx-js/loader',
//           options: {
//             compilers: [createCompiler({})],
//           },
//         },
//       ],
//     });
//     // 2b. Run `source-loader` on story files to show their source code
//     //     automatically in `DocsPage` or the `Source` doc block.
//     config.module.rules.push({
//       test: /\.(stories|story)\.[tj]sx?$/,
//       loader: require.resolve('@storybook/source-loader'),
//       exclude: [/node_modules/],
//       enforce: 'pre',
//     });
//     return config;
//   },
// };

module.exports = {
	stories: ['../src/**/*.story.@(js|mdx)'],
	addons: [
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-docs/preset',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
    '@storybook/addon-viewport',
  ],
	webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../src'),
    });

    return config;
  },
}

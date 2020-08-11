/* eslint-disable no-console */
const npm = require('./npm-commands');
const git = require('./git-commands');

const GITHUB_TOKEN = process.argv[2];

(async () => {
  try {
    await npm.command('install', '', 'INSTALLING DEPENDENCIES');

    await npm.command('run version:ci', '', 'VERSIONING LIBRARY');

    await git.push('', GITHUB_TOKEN, 'PUSHING COMMITS');

    await git.push('--tags', GITHUB_TOKEN, 'PUSHING VERSION TAGS');

    await npm.command('publish', '', 'PUBLISHING LIBRARY');

    await npm.command('run build-storybook', '', 'BUILDING STORYBOOK DOCUMENTATION');

    await git.commit('-m chore(release): storybook documentation', '', 'BUILDING STORYBOOK DOCUMENTATION');

    await git.push('', GITHUB_TOKEN, 'PUSHING STORYBOOK DOCUMENTATION');
  } catch (e) {
    console.log(`BUILD FAILED: ${e}`);
    throw e;
  }
})().catch((e) => {
  console.log(e);
  return process.exit(1);
});

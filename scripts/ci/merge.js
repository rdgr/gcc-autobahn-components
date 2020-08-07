/* eslint-disable no-console */
const npm = require('./npm-commands');

(async () => {
  try {
    await npm.command('install', '', 'INSTALLING DEPENDENCIES');

    await npm.command('run build', '', 'BUILDING LIBRARY');

    await npm.command('publish', '', 'PUBLISHING LIBRARY');
  } catch (e) {
    console.log(`BUILD FAILED: ${e}`);
    throw e;
  }
})().catch((e) => {
  console.log(e);
  return process.exit(1);
});

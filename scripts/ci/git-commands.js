/* eslint-disable no-console */
const { exec } = require('child_process');
const util = require('util');

const execAsync = util.promisify(exec);

module.exports = {

  async push(options, token, logMsg) {
    const command = `git push "https://blinds-autobahn:${token}@github.com/GCC-Autobahn/gcc-autobahn-components" ${options}`;

    try {
      const { stdout, stderr } = await execAsync(command);
      console.log('--------------------------------------------------------------------------');
      console.log(logMsg);
      console.log('--------------------------------------------------------------------------');
      console.log(`Command: ${command}\n`);
      console.log(stderr);
      console.log(stdout);
    } catch (e) {
      console.log('--------------------------------------------------------------------------');
      console.log(logMsg);
      console.log('--------------------------------------------------------------------------');
      console.log(`Command: ${command}\n`);
      console.log(e.toString(), e);
      throw (e);
    }
  },
  async commit(msg, options, logMsg) {
    const command = `git commit -m "${msg}" ${options}`;

    try {
      const { stdout, stderr } = await execAsync(command);
      console.log('--------------------------------------------------------------------------');
      console.log(logMsg);
      console.log('--------------------------------------------------------------------------');
      console.log(`Command: ${command}\n`);
      console.log(stderr);
      console.log(stdout);
    } catch (e) {
      console.log('--------------------------------------------------------------------------');
      console.log(logMsg);
      console.log('--------------------------------------------------------------------------');
      console.log(`Command: ${command}\n`);
      console.log(e.toString(), e);
      throw (e);
    }
  },
  async command(cmd, options, logMsg) {
    const command = `git ${cmd} ${options}`;

    try {
      const { stdout, stderr } = await execAsync(command);
      console.log('--------------------------------------------------------------------------');
      console.log(logMsg);
      console.log('--------------------------------------------------------------------------');
      console.log(`Command: ${command}\n`);
      console.log(stderr);
      console.log(stdout);
    } catch (e) {
      console.log('--------------------------------------------------------------------------');
      console.log(logMsg);
      console.log('--------------------------------------------------------------------------');
      console.log(`Command: ${command}\n`);
      console.log(e.toString(), e);
      throw (e);
    }
  },
};

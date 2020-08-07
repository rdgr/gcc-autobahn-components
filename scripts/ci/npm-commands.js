const { exec } = require('child_process');
const util = require('util');

const execAsync = util.promisify(exec);

module.exports = {

  async command(cmd, options, logMsg) {

    const command = `npm ${cmd} ${options}`;

    console.log('--------------------------------------------------------------------------');
    console.log(logMsg);
    console.log('--------------------------------------------------------------------------');
    console.log(`Command: ${command}\n`);
    const { stdout, stderr } = await execAsync(command);
    console.log(`${stdout}`);

    if (stderr !== '') {

      console.log(stderr);
    }
  },
};

const NodeID3 = require('node-id3');
const chalk = require('chalk');

module.exports = (newMetadata, filename) => {
  let success = NodeID3.write(newMetadata, filename);

  success ? console.log(chalk.green('Success!')) : console.log(chalk.red('Something went wrong!'));
}
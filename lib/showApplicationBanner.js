const figlet = require('figlet'); // ASCII Banner
const chalk = require('chalk'); // Terminal colors

module.exports = () => {
  console.log(
    chalk.blueBright(
      figlet.textSync('Harmonist')
    )
  );
}
const figlet = require('figlet'); // ASCII Banner
const chalk = require('chalk'); // Terminal colors
const showApplicationBanner = require('./showApplicationBanner');

let consoleLogOutputData = "";

test('get application banner', () => {
  // Capture console.log data
  console.log = (content) => { consoleLogOutputData = content };

  // Show banner
  showApplicationBanner();

  expect(consoleLogOutputData).toBe(chalk.blueBright(figlet.textSync('Harmonist')));
});
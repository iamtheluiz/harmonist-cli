// Set CLI arguments
const getHelpInfo = require('./getHelpInfo');

module.exports = () => {
  const argv = require('minimist')(process.argv.slice(2));  // Get CLI Arguments

  if (argv.file && argv.file !== true) {
    return { type: 'file', content: argv.file};
  } else if (argv.link && argv.link !== true) {
    return { type: 'link', content: argv.link};
  } else if (argv.help || argv.h) {
    console.log(getHelpInfo());
  } else {
    console.log("If you need help, use: 'harmonist -h'");
  }

  return null;
}
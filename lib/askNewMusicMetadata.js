const inquirer = require('inquirer');

module.exports = (currentMetadata) => {
  const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Music Title:',
      default: currentMetadata.title,
      validate: value => {
        return value.length ? true : 'Please enter a title for the Music!'
      }
    }, {
      type: 'input',
      name: 'artist',
      message: 'Music Author:',
      default: currentMetadata.artist,
      validate: value => {
        return value.length ? true : 'Please enter a author name for the Music!'
      }
    }, {
      type: 'input',
      name: 'album',
      message: 'Music Album:',
      default: currentMetadata.album,
      validate: value => {
        return value.length ? true : 'Please enter a album name for the Music!'
      }
    }, {
      type: 'input',
      name: 'cover',
      message: 'Cover URL:',
      default: null
    }
  ];

  return inquirer.prompt(questions);
}
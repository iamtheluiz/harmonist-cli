#! /usr/bin/env node
const path = require('path');
const fs = require('fs');
const clear = require('clear'); // Clear terminal
const chalk = require('chalk');
const ytdl = require('ytdl-core');
const inquirer = require('inquirer');

// Application lib
const showApplicationBanner = require('./lib/showApplicationBanner');
const getApplicationFlags = require('./lib/getApplicationFlags');
const getMusicMetadata = require('./lib/getMusicMetadata');
const askNewMusicMetadata = require('./lib/askNewMusicMetadata');
const downloadMusicCoverImage = require('./lib/downloadMusicCoverImage');
const setMusicMetadata = require('./lib/setMusicMetadata');

// Clear Terminal
clear();

showApplicationBanner();

async function run() {
  if (context = getApplicationFlags()) {
    let { type, content } = context;

    if (type === 'link') {
      try {
        console.log(chalk.yellow('Downloading file...'));
        const { filename } = await inquirer.prompt({ type: 'input', name: 'filename', message: 'Filename:' });

        const stream = await ytdl(content, { filter: format => format.container === 'mp3' });

        stream.pipe(fs.createWriteStream(`${filename}.mp3`));

        stream.on('end', () => {
          console.log(chalk.greenBright('Done!'));
        });
      } catch (error) {
        console.log(chalk.red("This music doesn't support '.mp3' format!"));
      }
    } else {
      const metadata = getMusicMetadata(content);
      let newMetadata = await askNewMusicMetadata(metadata);
      newMetadata.APIC = await downloadMusicCoverImage(newMetadata.cover, path.resolve(__dirname, './temp'));
      setMusicMetadata(newMetadata, content);
    }
  }
}

run();
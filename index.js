#! /usr/bin/env node
const path = require('path');
const clear = require('clear'); // Clear terminal

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
  if (filename = getApplicationFlags()) {
    const metadata = getMusicMetadata(filename);
    let newMetadata = await askNewMusicMetadata(metadata);
    const coverImage = await downloadMusicCoverImage(newMetadata.cover, path.resolve(__dirname, './temp'));
    setMusicMetadata(newMetadata, filename);
  }
}

run();
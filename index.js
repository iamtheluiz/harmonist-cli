#! /usr/bin/env node
const clear = require('clear'); // Clear terminal

// Application lib
const showApplicationBanner = require('./lib/showApplicationBanner');
const getApplicationFlags = require('./lib/getApplicationFlags');
const getMusicMetadata = require('./lib/getMusicMetadata');
const askNewMusicMetadata = require('./lib/askNewMusicMetadata');

// Clear Terminal
clear();

showApplicationBanner();

async function run() {
  if (filename = getApplicationFlags()) {
    const metadata = getMusicMetadata(filename);
    const newMetadata = await askNewMusicMetadata(metadata);
  }
}

run();
#! /usr/bin/env node
const clear = require('clear'); // Clear terminal
const getAbsolutePath = require('./util/getAbsolutePath');

// Application lib
const showApplicationBanner = require('./lib/showApplicationBanner');
const getApplicationFlags = require('./lib/getApplicationFlags');
const getMusicMetadata = require('./lib/getMusicMetadata');

// Clear Terminal
clear();

showApplicationBanner();
if(filename = getApplicationFlags()) {
  const metadata = getMusicMetadata(filename);

  console.log(metadata);
}

#! /usr/bin/env node
const clear = require('clear'); // Clear terminal

// Application lib
const showApplicationBanner = require('./lib/showApplicationBanner');
const getApplicationFlags = require('./lib/getApplicationFlags');

// Clear Terminal
clear();

showApplicationBanner();
getApplicationFlags();
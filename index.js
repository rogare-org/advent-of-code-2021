'use strict';

const path = require('path');
const args = process.argv.slice(2);

const resourceFolder = path.resolve(__dirname, './resource/');
const resourceLoader = require('./resourceLoader')(resourceFolder);

require(__dirname + '/' + args[0])().run(resourceLoader, console);


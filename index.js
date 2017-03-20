#! /usr/bin/env node
const program = require('commander');
const photos = require('./lib/photos');

program
  .version('1.0.0')
  .option('-f, --folder', 'Select your media documents folder (default "./medias")')
  .option('-v, --verbose', 'Set trace mode to "verbose"')
  .parse(process.argv);

const folder = program.folder || './medias';
const debug = program.verbose;

if (debug) {
  console.log('folder: %s', folder);
}

photos.record(folder);

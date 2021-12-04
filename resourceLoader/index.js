'use strict';

const fs = require('fs');
const path = require('path');
const csvParser = require('fast-csv');

const load = (resourceFolder, nameOfResource, transformTo) => {
  const pathToResource = path.resolve(resourceFolder + '/' + nameOfResource + '.csv');

  const objects = [];
  const fd = fs.createReadStream(pathToResource);
  const csvObjectParser = csvParser.parse({ header: false, delimiter: ' ' });
  csvObjectParser.on('data', (line) => transformTo(line, objects));
  const end = new Promise((resolve, reject) => {

    csvObjectParser.on('end', () => resolve(objects));
    csvObjectParser.on('error', (error) => reject(error));
  });

  fd.pipe(csvObjectParser);

  return end;
}

module.exports = (resourceFolder) => ({
  load: (nameOfResource, transformTo) => load(resourceFolder, nameOfResource, transformTo)
});

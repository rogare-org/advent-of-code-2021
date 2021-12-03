'use strict';

const solutionsToDay1 = require('./solutions-to-challenges-day1.js')();

const mapToMeasurement = (parsedMeasurement, measurements) => measurements.push(Number.parseInt(parsedMeasurement, 10));

const path = require('path');
require('../shared/csv-data-loader.js')(path.resolve(__dirname, 'data.csv'), mapToMeasurement).then((measurements) => {
  console.log('day 1, challenge 1: ', solutionsToDay1.solutionToChallenge1Day1(measurements));
  console.log('day 1, challenge 2: ', solutionsToDay1.solutionToChallenge2Day1(measurements));
});

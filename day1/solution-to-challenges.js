'use strict';

const reduceToMeasurementTuplesOfLength3 = (carry, currentItem, currentIndex, source) => {
  if (
    currentItem !== undefined &&
    source[currentIndex + 1] !== undefined &&
    source[currentIndex + 2] !== undefined
  ) {
    carry.push(currentItem + source[currentIndex + 1] + source[currentIndex + 2]);
  }

  return carry;
};

const reduceToNrOfTimesMeasurementIncreases = (carry, currentItem, currentIndex, source) => {
  if (currentItem !== undefined && source[currentIndex + 1] !== undefined) {
    if (currentItem < source[currentIndex + 1]) {
      return carry + 1;
    }
  }

  return carry;
};

const mapToMeasurement = (parsedMeasurement, measurements) =>
  measurements.push(Number.parseInt(parsedMeasurement, 10));

const path = require('path');
require('../shared/csv-data-loader.js')(path.resolve(__dirname, 'data.csv'), mapToMeasurement).then(
  (measurements) => {
    console.log(
      'day 1, challenge 1: ',
      measurements.reduce(reduceToNrOfTimesMeasurementIncreases, 0),
    );
    console.log(
      'day 1, challenge 2: ',
      measurements
        .reduce(reduceToMeasurementTuplesOfLength3, [])
        .reduce(reduceToNrOfTimesMeasurementIncreases, 0),
    );
  },
);

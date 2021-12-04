'use strict';

// @see https://adventofcode.com/2021/day/1 for an in-depth description & explanation of the challenges for Day 1 of the Advent of Code

const reduceToEveryTripleMeasurementsAsSummation = (carry, currentItem, currentIndex, source) => {
  // when reduce is called with an initialValue, the initial currentIndex will be 0 otherwise it will be 1
  if (currentIndex === 0 || (currentIndex === 1 && typeof carry !== 'number'))
    throw new TypeError("Dont provide 'reduce' any initialValue, make sure it reduces an Array of Numbers");

  const stillBeforeThirdMeasurement = currentIndex <= 1; // Array Indexes start at 0
  if (stillBeforeThirdMeasurement) return [];

  // select previous 2 entries and sum with the current entry
  const aggregation = source[currentIndex - 2] + source[currentIndex - 1] + source[currentIndex];
  return carry.concat(aggregation);
};

const reduceToNrOfTimesEveryPairIncreases = (carry, currentItem, currentIndex, source) => {
  // when reduce is called with an initialValue, the initial currentIndex will be 0 otherwise it will be 1
  if (currentIndex === 0 || (currentIndex === 1 && typeof carry !== 'number'))
    throw new TypeError("Dont provide 'reduce' any initialValue, make sure it reduces an Array of Numbers");

  const stillBeforeOrAtSecondMeasurement = currentIndex <= 1; // Array Indexes start at 0
  if (stillBeforeOrAtSecondMeasurement) carry = 0;

  const previousItem = source[currentIndex - 1];
  const downwardTrend = currentItem > previousItem;
  if (downwardTrend) carry += 1;

  return carry;
};

const mapToMeasurement = (parsedMeasurement, measurements) => measurements.push(Number.parseInt(parsedMeasurement, 10));

const solutionToChallenge1 = (measurements) => measurements.reduce(reduceToNrOfTimesEveryPairIncreases);
const solutionToChallenge2 = (measurements) => measurements.reduce(reduceToEveryTripleMeasurementsAsSummation).reduce(reduceToNrOfTimesEveryPairIncreases);

module.exports = () => ({

  solutionToChallenge1,
  solutionToChallenge2,

  run: (resourceLoader, logger) => {
    resourceLoader.load('day1', mapToMeasurement)
      .then(measurements => {

        logger.log('day 1, challenge 1: ', solutionToChallenge1(measurements));
        logger.log('day 1, challenge 2: ', solutionToChallenge2(measurements));

      });
  },

});

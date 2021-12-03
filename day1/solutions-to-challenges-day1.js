'use strict';

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
  const downwardTrend = currentItem === Math.max(currentItem, previousItem);
  if (downwardTrend) carry += 1;

  return carry;
};

module.exports = () => ({
  solutionToChallenge1Day1: (measurements) => measurements.reduce(reduceToNrOfTimesEveryPairIncreases),

  solutionToChallenge2Day1: (measurements) =>
    measurements.reduce(reduceToEveryTripleMeasurementsAsSummation).reduce(reduceToNrOfTimesEveryPairIncreases),
});

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

module.exports = () => ({
  solutionToChallenge1Day1: (measurements) =>
    measurements.reduce(reduceToNrOfTimesMeasurementIncreases, 0),
  solutionToChallenge2Day1: (measurements) =>
    measurements
      .reduce(reduceToMeasurementTuplesOfLength3, [])
      .reduce(reduceToNrOfTimesMeasurementIncreases, 0),
});

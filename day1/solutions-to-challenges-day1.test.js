'use strict';

describe('Advent of Code 2021 - Day 1', () => {
  const solutionsToDay1 = require('./solutions-to-challenges-day1.js')();

  it('Challenge 1 - count the number of depth increases in the provided measurements, expect them to be 3', () => {
    const measurements = [1, 2, 3, 4, 2];
    const outcome = solutionsToDay1.solutionToChallenge1Day1(measurements);
    expect(outcome).toEqual(3);
  });

  it('Challenge 2 - count the number of depth increases in the provided measurements, using a moving window/lens/aggregate of size 3 and expect them to be 1', () => {
    const measurements = [9, 4, 2, 5, 2, 9];
    const outcome = solutionsToDay1.solutionToChallenge2Day1(measurements);
    expect(outcome).toEqual(1);
  });
});

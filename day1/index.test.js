'use strict';

// @see https://adventofcode.com/2021/day/1
describe('Advent of Code 2021 - Day 1', () => {
  const solutions = require('./index.js')();

  const measurements = [ 199, 200, 208, 210, 200, 207, 240, 269, 260, 263 ];

  it('Challenge 1 - count the number of depth increases in the provided measurements, expect them to be 7', () => {
    const outcome = solutions.solutionToChallenge1(measurements);
    expect(outcome).toEqual(7);
  });

  it('Challenge 2 - count the number of depth increases in the provided measurements, using a moving window/lens/aggregate of size 3 and expect them to be 5', () => {
    const outcome = solutions.solutionToChallenge2(measurements);
    expect(outcome).toEqual(5);
  });
});

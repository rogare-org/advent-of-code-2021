'use strict';

// @see https://adventofcode.com/2021/day/2
describe('Advent of Code 2021 - Day 2', () => {
  const solutions = require('./index.js')();

  const diveInstructions = [
    { direction: 'forward', distance: 5 }, 
    { direction: 'down', distance: 5 }, 
    { direction: 'forward', distance: 8 }, 
    { direction: 'up', distance: 3 }, 
    { direction: 'down', distance: 8 }, 
    { direction: 'forward', distance: 2 }, 
  ];

  it('Challenge 1 - what do you get if you multiply your final horizontal position with your final depth, expect that to be 150', () => {
    const outcome = solutions.solutionToChallenge1(diveInstructions);
    expect(outcome).toEqual(150);
  });

  it('Challenge 2 - count the number of depth increases in the provided measurements, using a moving window/lens/aggregate of size 3 and expect them to be 1', () => {
    const outcome = solutions.solutionToChallenge2(diveInstructions);
    expect(outcome).toEqual(900);
  });

});

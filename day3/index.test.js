'use strict';

// @see https://adventofcode.com/2021/day/3
describe('Advent of Code 2021 - Day 3', () => {
  const solutions = require('./index.js')();

  const diagnosticReport = [
    '00100',
    '11110',
    '10110',
    '10111',
    '10101',
    '01111',
    '00111',
    '11100',
    '10000',
    '11001',
    '00010',
    '01010'
  ];

  it('Day 3, challenge 1 - calculate the power consumption in decimal of the submarine using a binary diagnostics report, expect that to be 198', () => {
    const outcome = solutions.solutionToChallenge1(diagnosticReport);
    expect(outcome).toEqual(198);
  });

  it('Day 3, challenge 2 - calculate the life support rating in decimal of the submarine using a binary diagnostics report, expect that to be 230', () => {
    const outcome = solutions.solutionToChallenge2(diagnosticReport);
    expect(outcome).toEqual(230);
  });

});

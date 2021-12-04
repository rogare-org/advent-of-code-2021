'use strict';

// @see https://adventofcode.com/2021/day/3 for an in-depth description & explanation of the challenges for Day 3 of the Advent of Code

const calculateFoo = (carry, currentItem, currentIndex, source) => {

  if (currentIndex === 1) {
    carry = carry.split('').map(value => {
      const meh = { 0: 0, 1: 0 };
      meh[value] = 1;
      return meh;
    });
  }

  currentItem.split('').forEach((value, key) => {
    carry[key][value] += 1;
  });

  return carry;
};

const toDecimal = (binaryValue) => Number.parseInt(binaryValue, 2);

const meh = (items, index, foo) => {
  const report = items.reduce(calculateFoo);
  const filterValue = foo(report[index]);

  return items.filter(item => item.charAt(index) === filterValue);
}

const oxygenGeneratorRating = (binaryDiagnosticsReport) => {
  const bar = (record) => record[0] > record[1] ? '0' : '1';

  let index = 0;
  let outcome = meh(binaryDiagnosticsReport, index, bar);
  do {
    index++;
    outcome = meh(outcome, index, bar);
  } while (outcome.length > 1);

  return toDecimal(outcome[0]);
}

const co2ScrubberRating = (binaryDiagnosticsReport) => {
  const bar = (record) => record[0] <= record[1] ? '0' : '1';

  let index = 0;
  let outcome = meh(binaryDiagnosticsReport, index, bar);
  do {
    index++;
    outcome = meh(outcome, index, bar);
  } while (outcome.length > 1);

  return toDecimal(outcome[0]);
}

const solutionToChallenge1 = (diagnosticReport) => {
  const foo = diagnosticReport.reduce(calculateFoo);
  const gammaRate = toDecimal(foo.map(entry => entry[0] > entry[1] ? 0 : 1).join(''));
  const epsilonRate = toDecimal(foo.map(entry => entry[0] > entry[1] ? 1 : 0).join(''));

  return gammaRate * epsilonRate;
};

const solutionToChallenge2 = (diagnosticReport) => oxygenGeneratorRating(diagnosticReport) * co2ScrubberRating(diagnosticReport);

const mapToDiagnosticReport = (parsedDiagnostic, diagnosticReport) => diagnosticReport.push(parsedDiagnostic[0]);

module.exports = () => ({

  solutionToChallenge1,
  solutionToChallenge2,

  run: (resourceLoader, logger) => {
    resourceLoader.load('day3', mapToDiagnosticReport)
      .then(diagnosticReport => {

        logger.log('day 3, challenge 1: ', solutionToChallenge1(diagnosticReport));
        logger.log('day 3, challenge 2: ', solutionToChallenge2(diagnosticReport));

      });
  },

});

'use strict';

const solutionToChallenge1 = (diveInstructions) => {
    const startingPosition = () => ({ horizontalPosition: 0, depth: 0 });

    const applyDiveInstruction = (divePosition, diveInstruction) => {
      if (diveInstruction.direction.startsWith('forward')) {
        divePosition.horizontalPosition += diveInstruction.distance;
      }

      if (diveInstruction.direction.startsWith('down')) {
        divePosition.depth += diveInstruction.distance;
      }

      if (diveInstruction.direction.startsWith('up')) {
        divePosition.depth -= diveInstruction.distance;
      }

      return divePosition;
    };

    const finalDivePosition = diveInstructions.reduce(applyDiveInstruction, startingPosition());
    return finalDivePosition.horizontalPosition * finalDivePosition.depth;
};

const solutionToChallenge2 = (diveInstructions) => {
    const startingPosition = () => ({ horizontalPosition: 0, depth: 0, aim: 0 });

    const applyDiveInstruction = (divePosition, diveInstruction) => {
      if (diveInstruction.direction.startsWith('forward')) {
        divePosition.horizontalPosition += diveInstruction.distance;
        divePosition.depth += divePosition.aim * diveInstruction.distance;
      }

      if (diveInstruction.direction.startsWith('down')) {
        divePosition.aim += diveInstruction.distance;
      }

      if (diveInstruction.direction.startsWith('up')) {
        divePosition.aim -= diveInstruction.distance;
      }

      return divePosition;
    };

    const finalDivePosition = diveInstructions.reduce(applyDiveInstruction, startingPosition());
    return finalDivePosition.horizontalPosition * finalDivePosition.depth;
};

const mapToDiveInstruction = (parsedDiveInstruction, diveInstructions) =>
  diveInstructions.push({
    direction: parsedDiveInstruction[0],
    distance: Number.parseInt(parsedDiveInstruction[1], 10),
  });

module.exports = () => ({

  solutionToChallenge1,
  solutionToChallenge2,

  run: (resourceLoader, logger) => {
    resourceLoader.load('day2', mapToDiveInstruction)
      .then(diveInstructions => {

        logger.log('day 2, challenge 1: ', solutionToChallenge1(diveInstructions));
        logger.log('day 2, challenge 2: ', solutionToChallenge2(diveInstructions));

      });
  },

});

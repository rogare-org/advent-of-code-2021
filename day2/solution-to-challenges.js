'use strict';

/*
 * xpr $(cat data.csv | grep -i forward | awk '{ print $2" +" } END { print "0" }') => 1817
 * xpr $(cat data.csv | grep -i down | awk '{ print $2" +" } END { print "0" }')  => 2034
 * xpr $(cat data.csv | grep -i up | awk '{ print $2" +" } END { print "0" }') => 962
 */

const mapToDiveInstruction = (parsedDiveInstruction, diveInstructions) =>
  diveInstructions.push({
    direction: parsedDiveInstruction[0],
    distance: Number.parseInt(parsedDiveInstruction[1], 10),
  });

const path = require('path');
require('../shared/csv-data-loader.js')(path.resolve(__dirname, 'data.csv'), mapToDiveInstruction)
  .then((diveInstructions) => {
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
    console.log('day 2, challenge 1:', finalDivePosition.horizontalPosition * finalDivePosition.depth);
    return diveInstructions;
  })
  .then((diveInstructions) => {
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
    console.log('day 2, challenge 2:', finalDivePosition.horizontalPosition * finalDivePosition.depth);
  });

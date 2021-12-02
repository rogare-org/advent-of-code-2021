'use strict';

const csvParser = require('fast-csv');
const fs = require('fs');

module.exports = (pathToCsvData, transformLineTo) => {

	const objects = [];
	const fd = fs.createReadStream(pathToCsvData);
	const csvObjectParser = csvParser.parse({ header: false, delimiter: ' ' });
	csvObjectParser.on('data', line => transformLineTo(line, objects));

	const end = new Promise((resolve, reject) => {
		csvObjectParser.on('end', () => resolve(objects));
		csvObjectParser.on('error', error => reject(error));
	});

	fd.pipe(csvObjectParser);

	return end;
}


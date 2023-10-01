const fs = require('fs');
const csv = require('csv-parser');
const lodash = require('lodash');

const readFileContents = (fileName, cb) => {
  const results = [];
  const readStream = fs.createReadStream(fileName);

  readStream.on('error', (err) => {
    if (err.code === 'ENOENT') {
      cb("Encountered error while reading file contents..!", null);
      return;
    }
    cb(err, null);
  });

  readStream.pipe(csv())
    .on('data', (data) => {
      results.push(data);
    })
    .on('end', () => {
      cb(null, results);
    });
};

const sortDataOnPrice = (fileContents, cb) => {
  try {
    const sortedData = lodash.sortBy(fileContents, (o) => parseFloat(o.retail_price));
    cb(null, sortedData);
  } catch (err) {
    cb(err, null);
  }
};

const sortDataOnRating = (fileContents, cb) => {
  try {
    const filteredData = fileContents.filter(item => item.product_rating !== 'No rating available');
    const sortedData = lodash.sortBy(filteredData, (o) => parseFloat(o.product_rating));
    cb(null, lodash.reverse(sortedData));
  } catch (err) {
    cb(err, null);
  }
};

const writeSortedDataToFile = (outputFileName, sortedData, cb) => {
  try {
    fs.writeFileSync(outputFileName, JSON.stringify(sortedData, null, 4), 'utf-8');
    cb(null, "Data written successfully");
  } catch (err) {
    cb("Encountered error while writing to the file", null);
  }
};

module.exports = {
  readFileContents,
  sortDataOnPrice,
  sortDataOnRating,
  writeSortedDataToFile
};

const fs = require('fs');
const readline = require('readline');
const _ = require('lodash');

const readFileContents = (fileName, cb) => {
  let fileContents = [];
  let isFirstLine = true;

  const readStream = readline.createInterface({
    input: fs.createReadStream(fileName),
    output: process.stdout,
    terminal: false
  });

  readStream.on('line', (line) => {
    if (isFirstLine) {
      isFirstLine = false;
      return;
    }
    fileContents.push(line);
  });

  readStream.on('close', () => {
    cb(null, fileContents);
  });

  readStream.on('error', (err) => {
    cb(err, null);
  });
}

const filterData = (fileContents, cb) => {
  let filteredData = [];

  for (let record of fileContents) {
    if (record.payment_method === 'credit') {
      filteredData.push(record);
    }
  }

  cb(null, filteredData);
}
const writeFilteredDataToFile = (filteredData, cb) => {
  try {
    let dataArr;

    // Check if it's a string and parse it into an object
    if (typeof filteredData === 'string') {
      dataArr = JSON.parse(filteredData);
    } else {
      dataArr = filteredData;
    }

    // Convert objects to strings
    let dataStrings = dataArr.map(record => {
      return Object.values(record).join(',');
    });

    fs.writeFile('output.txt', dataStrings.join('\n'), (err) => {
      if (err) throw err;
      cb(null, "Successfully wrote filtered data to output.txt file..!");
    });
  } catch (err) {
    cb(err, null);
  }
}


module.exports = {
  readFileContents,
  filterData,
  writeFilteredDataToFile
}

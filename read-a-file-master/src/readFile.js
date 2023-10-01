const fs = require("fs");
const lodash = require("lodash");

const read = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const convertToUpperCase = (fileContents) => {
  return new Promise((resolve, reject) => {
    try {
      const upperCaseContents = lodash.toUpper(fileContents);
      // Split by newline first, then by comma, and finally flatten the resulting array
      const result = [].concat(...upperCaseContents.split("\n").map(line => line.split(","))).filter(name => name.trim() !== '');
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

const readAndConvertFileContents = (fileName, cb) => {
  read(fileName)
    .then(convertToUpperCase)
    .then(data => cb(null, data))
    .catch(() => cb("Encountered error while reading file contents..!", null));
};

module.exports = {
  read,
  convertToUpperCase,
  readAndConvertFileContents,
};

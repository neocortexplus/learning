const _ = require('lodash');

//Create a function to find a maximum value from number array.
function findMaxValue(arr) {
  return _.max(arr);
}

//Create a function to return all values from numbers array which are greater than the second parameter.​
function filterValues(arr, value) {
  return _.filter(arr, num => num > value);
}

//Create a function to return all values of employeeName array in capital letters.
function nameInCapital(employeeName) {
  return _.map(employeeName, name => name.toUpperCase());
}

module.exports = {
  findMaxValue,
  filterValues,
  nameInCapital
};

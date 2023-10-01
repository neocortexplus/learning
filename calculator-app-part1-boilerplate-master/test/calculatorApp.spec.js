const chai = require('chai');
const expect = chai.expect;
const { addition, subtraction } = require('../src/calculatorApp');

describe('Addition Functionality', () => {

  it('Check for addition of two positive numbers and return the sum as positive number', () => {
    // Write Test Case Here
    const result = addition(5, 3);
    expect(result).to.equal(8);
  });

  it('Check for addition of two negative numbers and return the sum as negative number.', () => {
    // Write Test Case Here
    const result = addition(-5, -3);
    expect(result).to.equal(-8);
  });

  it('Check if either of number is negative produce subtracted output.', () => {
    // Write Test Case Here
    const result1 = addition(-5, 3);
    const result2 = addition(5, -3);
    expect(result1).to.equal(-2);
    expect(result2).to.equal(2);
  });


});

describe('Subtraction Functionality', () => {
  it('Check for subtracting two positive number and return positive subtraction', () => {
    // Write Test Case Here
    const result = subtraction(5, 3);
    expect(result).to.equal(2);
  });
  it('Check if either of number is negative produce sum as output', () => {
    // Write Test Case Here
    const result1 = subtraction(-5, 3);
    const result2 = subtraction(5, -3);
    expect(result1).to.equal(-8);
    expect(result2).to.equal(8);
  });
  it('Subtracting zero will produce zero as subtraction.', () => {
    // Write Test Case Here
    const result = subtraction(0, 0);
    expect(result).to.equal(0);
  });
});

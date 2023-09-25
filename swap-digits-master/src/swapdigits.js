const swapDigits = (number) => {
    let numStr = String(number); // Convert number to string
    if (numStr < 0) {
        return 0;
    }
    // If the number is a single-digit, return 0
    if (numStr.length === 1) {
        return 0;
    }

    let result = '';
    let startIndex = 0;

    // If the total number of digits is odd, keep the first digit unchanged
    if (numStr.length % 2 !== 0) {
        result += numStr[0];
        startIndex = 1;
    }

    // Iterate through the string from the startIndex and swap adjacent digits
    for (let i = startIndex; i < numStr.length; i += 2) {
        if (i + 1 < numStr.length) {
            result += numStr[i + 1];
            result += numStr[i];
        } else {
            // If there's no adjacent digit to swap with (in case of odd length), append the current digit
            result += numStr[i];
        }
    }

    return parseInt(result, 10); // Convert the result string back to number
};

module.exports = swapDigits;

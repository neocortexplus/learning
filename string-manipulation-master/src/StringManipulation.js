//count the number of Characters in the given String and return the value
const countCharacters = (str) => {
  return str.length;
}
//count the number of vowels in the given String and return the value
const countVowels = (str) => {
  // Convert the string to lowercase to handle both uppercase and lowercase vowels
  str = str.toLowerCase();

  // Initialize a count variable to keep track of the number of vowels
  let vowelCount = 0;

  // Define an array of vowels
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  // Iterate through each character in the string
  for (let i = 0; i < str.length; i++) {
    // Check if the character is a vowel by searching in the vowels array
    if (vowels.includes(str[i])) {
      vowelCount++;
    }
  }

  return vowelCount;
};

//Check the existence of the given String in the Specified String and return the value

const checkExistenceOfStr = (str, checkStr) => {
  // Use the includes() method to check if checkStr exists within str
  return str.includes(checkStr);
};

//replace a word and return the value
const replaceWord = (str, wordToBeReplaced, replaceWord) => {
  // Use the replace() method to replace all occurrences of wordToBeReplaced with replaceWord
  return str.replace(new RegExp(wordToBeReplaced, 'g'), replaceWord);
  //     return str.replace(/wordToBeReplaced/gi, replaceWord);
};

//convert the specified string into Title Case and return the value
const titleCaseConversion = (str) => {
  // Split the string into an array of words
  const words = str.split(' ');

  // Capitalize the first letter of each word
  const titleCaseWords = words.map((word) => {
    // Ensure the word is not empty
    if (word.length > 0) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    } else {
      return '';
    }
  });

  // Join the title-cased words back into a string
  const titleCaseStr = titleCaseWords.join(' ');

  return titleCaseStr;
};
// find the largest word (in terms of length) in the specified string and return the value
const findLongestWord = (str) => {
  // Split the input string into an array of words
  const words = str.split(' ');

  // Initialize variables to keep track of the longest word and its length
  let longestWord = '';
  let longestLength = 0;

  // Iterate through the words to find the longest one
  for (const word of words) {
    // Remove punctuation and special characters (if needed)
    const cleanedWord = word.replace(/[^a-zA-Z ]/g, '');

    // Check if the cleaned word is longer than the current longest word
    if (cleanedWord.length > longestLength) {
      longestWord = cleanedWord;
      longestLength = cleanedWord.length;
    }
  }

  return longestWord;
};

module.exports = {
  countCharacters,
  countVowels,
  checkExistenceOfStr,
  replaceWord,
  titleCaseConversion,
  findLongestWord
}
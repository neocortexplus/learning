const readFile = require("./src/readFile");

const fileName = "./resources/input.txt";

// readFile.readAndConvertFileContents(fileName, (err, results) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(`Contents of ${fileName} after conversion is::`, results);
//   }
// });



// readFile.read(fileName)
//   .then(data => readFile.convertToUpperCase(data))  // <-- Use the function from the readFile module
//   .then(data => console.log(data))
//   .catch(err => console.error(err));


readFile.read(fileName)
  .then(readFile.convertToUpperCase)  // <-- Use the function from the readFile module
  .then(data => console.log(data))
  .catch(err => console.error(err));
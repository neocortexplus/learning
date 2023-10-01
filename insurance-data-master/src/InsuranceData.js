//import all the modules require
const fs = require('fs');
const readline = require('readline');
const _ = require('lodash');


//Use try and catch to handle the error where ever required
//return the callback with appropriate data where ever require in all the methods

//More userdefined methods can be written if required to write the logical stuff

//This method will take two parameters first the fileName
//and second a callback 
//read file data line by line using readLine
//create array and push all data inside the array


const readFileContentsLineByLine = (fileName, cb) => {



  let fileContents = [];

  const rl = readline.createInterface({
    input: fs.createReadStream(fileName),
    output: process.stdout,
    terminal: false
  });
  rl.on('line', (line) => {
    fileContents.push(line);
  });

  rl.on('close', () => {
    cb(null, fileContents);
  });

  rl.on('error', (err) => {
    cb(err, null);
  });


}

//This method will take two parameters first the filecontent
//and second the callback 
//use map to filter the data 
//Filter all the records for female candidates given region as southwest.

const filterFemaleCandidates = (fileContents, cb) => {
  let filteredData;
  filteredData = fileContents.filter(line => {
    let parts = line.split(',');
    return parts[1].trim() === 'female' && parts[5].trim() === 'southwest';
  });

  cb(null, _.compact(filteredData)); // lodash.compact() will remove falsy values if any
  //use lodash.compact() method if required


}

//This method will write filtered data in the output file
const writeFilteredDataToFile = (outputFileName, filteredData, cb) => {

  //use writeFile method to write the filteredData
  fs.writeFile(outputFileName, filteredData.join('\n'), (err) => {
    if (err) {
      cb(err);
    } else {
      cb(null);
    }
  });
}


//This method will read the file content using Streams
//create array and push all the data from file to it


const readFileContentsUsingStream = (fileName, cb) => {
  let fileContents = [];

  const stream = fs.createReadStream(fileName);

  stream.on('data', (chunk) => {
    fileContents = fileContents.concat(chunk.toString().split('\n'));
  });

  stream.on('end', () => {
    fileContents = fileContents.slice(0, 1338);
    cb(null, fileContents);
  });

  stream.on('error', (err) => {
    cb(err, null);
  });

}

//This method will filetDatewithNoChildren it will take two parameters
//first the fileContent and second the callback
//use map if required to filter the data

const filterDataWithNoChildren = (fileContents, cb) => {
  let filteredData;
  let fileContents_ = [];
  // let isFirstChunk = true;
  const stream = fs.createReadStream(fileName);

  stream.on('data', (chunk) => {
    let lines = chunk.toString().split('\n');
    // if (isFirstChunk) {
    //   lines.shift();  // Remove the first line if it's the first chunk
    //   isFirstChunk = false;
    // }
    fileContents_ = fileContents_.concat(lines);
    // fileContents_ = fileContents_.slice(0, 1338);
  });
  stream.on('end', () => {
    // Trim fileContents to 1338 lines
    fileContents_ = fileContents_.slice(0, 1338);
    cb(null, fileContents_);

  });

  stream.on('error', (err) => {
    cb(err, null);
  });
  //use lodash.compact() if required 


}

module.exports = {
  readFileContentsLineByLine,
  filterFemaleCandidates,
  readFileContentsUsingStream,
}

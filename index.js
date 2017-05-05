'strict'
const fs = require('fs');
const xml = require('xml2js');
// const mongojs = require('mongojs');

// const garminFile = fs.createReadStream('input/2017-04-30_14.33.51_Amstelborgh Amsterdam Golf Club.xml');
// garminFile.pipe(process.stdout);
const garminFile = fs.readFile('input/2017-04-30_14.33.51_Amstelborgh Amsterdam Golf Club.xml');
console.log('garminFile: ' + garminFile);
// const course = xml.parseString(garminFile);

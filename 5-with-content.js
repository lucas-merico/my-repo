// this is a test and I want github to know this project is bigger than 0
const fs = require('fs');

function five() {
  const contents = fs.readFileSync('other.js');
  console.log('buffer content', contents);
}

five();
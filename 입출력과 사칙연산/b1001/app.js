const fs = require('fs');
const input = fs.readFileSync('./input.text').toString().split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[1]);

if (0 < a && b < 10) {
  return console.log(a - b);
} else {
  return console.log('wrong answer');
}

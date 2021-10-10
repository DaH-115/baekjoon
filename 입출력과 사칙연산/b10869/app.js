const fs = require('fs');
const input = fs.readFileSync('./input.text').toString().split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[1]);

if (1 <= a && b <= 10000) {
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(Math.floor(a / b));
  console.log(a % b);
  return;
} else {
  return console.log('wrong answer');
}

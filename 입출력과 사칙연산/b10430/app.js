const fs = require('fs');
const input = fs.readFileSync('./input.text').toString().split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);

if (2 <= a && c <= 10000) {
  console.log((a + b) % c);
  console.log(((a % c) + (b % c)) % c);
  console.log((a * b) % c);
  console.log(((a % c) * (b % c)) % c);
  return;
} else {
  return console.log('wrong answer');
}

const fs = require('fs');
const input = fs.readFileSync('./input.text').toString().split(' ');

const a = input[0];
const b = input[1];

function solution(a, b) {
  if (-10000 <= a && b <= 10000) {
    if (a > b) {
      return console.log('>');
    } else if (a < b) {
      return console.log('<');
    } else if (a == b) {
      return console.log('==');
    }
  }
}

solution(a, b);

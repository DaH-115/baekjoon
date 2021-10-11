const fs = require('fs');
const input = fs.readFileSync('./input.text').toString().split(' ');

const year = parseInt(input);

function solution(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return console.log(1);
  }
  console.log(0);
}

solution(year);

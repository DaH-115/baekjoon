const fs = require('fs');
const input = fs.readFileSync('./input.text').toString().split(' ');

const num = parseInt(input);

function solution(num) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
}

solution(num);

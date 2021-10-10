const fs = require('fs');
const input = fs.readFileSync('./input.text').toString().split('\n');

const a = input[0];
const b = input[1];

function solution(a, b) {
  for (let i = 2; i >= 0; i--) {
    console.log(parseInt(a) * parseInt(b[i]));
  }
  console.log(input[0] * input[1]);
}

solution(a, b);

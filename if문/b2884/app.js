const fs = require('fs');
const input = fs.readFileSync('./input.text').toString().split(' ');

const H = parseInt(input[0]);
const M = parseInt(input[1]);

function solution(H, M) {
  M -= 45;
  if (M < 0) {
    M += 60;
    H -= 1;
  }
  if (H < 0) {
    H = 23;
  }

  console.log(H, M);
}

solution(H, M);

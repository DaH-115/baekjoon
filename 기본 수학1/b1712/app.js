const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
let input = require('fs').readFileSync(filePath).toString().split(' ');

const A = Number(input[0]);
const B = Number(input[1]);
const C = Number(input[2]);

solution(A, B, C);

function solution(A, B, C) {
  const margin = C - B;
  const count = Math.floor(A / margin) + 1;

  if (margin <= 0) {
    return console.log(-1);
  }

  console.log(count);
}

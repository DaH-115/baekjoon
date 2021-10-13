const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
let input = fs.readFileSync(filePath).toString().split('\n');

const A = Number(input[0]);
const B = Number(input[1]);
const C = Number(input[2]);

solution(A, B, C);

function solution(A, B, C) {
  const num = String(A * B * C);

  for (let i = 0; i <= 9; i++) {
    let count = 0;

    for (let j = 0; j < num.length; j++) {
      if (Number(num[j]) === i) {
        count += 1;
      }
    }

    console.log(count);
  }
}

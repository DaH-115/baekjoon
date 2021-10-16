const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const number = Number(input);

solution(number);

function solution(number) {
  let count = 0;

  for (let i = 1; i <= number; i++) {
    const nArr = String(i);

    if (i < 100) {
      count += 1;
      continue;
    }

    const a = Number(nArr[0]) - Number(nArr[1]);
    const b = Number(nArr[1]) - Number(nArr[2]);

    if (a === b) {
      count += 1;
    }
  }

  console.log(count);
}

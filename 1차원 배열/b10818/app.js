const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
let input = fs.readFileSync(filePath).toString().split('\n');

let N = parseInt(input[0]);
let numbers = input[1].split(' ').map((x) => parseInt(x));
let num = numbers[0];

solution(N, numbers);

function solution(N, numbers) {
  let max = num;
  let min = num;

  for (let i = 0; i < N; i++) {
    if (max < numbers[i]) {
      max = numbers[i];
    }
    if (min > numbers[i]) {
      min = numbers[i];
    }
  }

  console.log(`${min} ${max}`);
}

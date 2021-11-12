const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const arr = input.map((n) => Number(n));
const N = arr.shift();
const numArr = arr.sort((a, b) => a - b);

for (let i = 0; i < N; i++) {
  console.log(numArr[i]);
}

// NOTE: trim 메서드를 써야하는지 잘 살펴보자

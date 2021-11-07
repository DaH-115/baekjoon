const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
const input = fs.readFileSync(filePath).toString().trim().split(' ');

const N = Number(input[0]);

const arr = [];

function constructor(n) {
  let number = n;
  let result = 0;

  for (let i = 0; i < String(n).length; i++) {
    result += number % 10;
    number = Math.floor(number / 10);
  }

  return n + result;
}

for (let i = 1; i <= N; i++) {
  if (constructor(i) === N) {
    arr.push(i);
  }
}

if (arr.length) {
  console.log(Math.min(...arr));
} else {
  console.log(0);
}

// NOTE:
// 4673번 문제의 응용이었다

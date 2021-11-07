const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0].split(' ')[0]);
const M = Number(input[0].split(' ')[1]);
const cards = input[1].split(' ').map((n) => Number(n));
let answer = 0;

console.log(N);
console.log(M);
console.log(cards);

for (let i = 0; i < N - 2; i++) {
  console.log(N - 2);
  for (let j = i + 1; j < N - 1; j++) {
    console.log(N - 1);
    for (let k = j + 1; k < N; k++) {
      console.log(N);
      const sum = cards[i] + cards[j] + cards[k];

      if (sum > answer && sum <= M) {
        answer = sum;
      }
    }
  }
}

console.log(answer);

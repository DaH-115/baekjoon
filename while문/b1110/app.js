const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
let input = fs.readFileSync(filePath).toString().split('\n');

let N = +input;
let addN = 0;
let count = 0;
let isNotSame = true;

while (true) {
  addN = Math.floor(N / 10) + (N % 10);
  N = (N % 10) * 10 + (addN % 10);
  count++;

  if (N == input) {
    return console.log(count);
    // isNotSame = false;
  }
}

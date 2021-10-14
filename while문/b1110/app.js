let input = Number(require('fs').readFileSync('/dev/stdin').toString());

let num = Number(input);
let addNum = 0;
let count = 0;

while (true) {
  addNum = Math.floor(num / 10) + (num % 10);
  num = (num % 10) * 10 + (addNum % 10);
  count++;

  if (Number(input) === num) {
    break;
  }
}

console.log(count);

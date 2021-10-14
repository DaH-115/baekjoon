const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(arr) {
  let numbers = [];

  for (let i = 0; i < 10; i++) {
    if (numbers.indexOf(arr[i] % 42) === -1) {
      numbers.push(arr[i] % 42);
    }
  }

  console.log(numbers.length);
}

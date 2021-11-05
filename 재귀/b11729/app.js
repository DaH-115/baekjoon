const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
const input = fs.readFileSync(filePath).toString().trim().split(' ');

let N = Number(input[0]);
let count = 0;
let answers = [];

Hanoi(N, '1', '2', '3');

function Hanoi(num, from, other, to) {
  if (num === 0) {
    return;
  } else {
    Hanoi(num - 1, from, to, other);
    answers.push([from, to]);
    count++;
    Hanoi(num - 1, other, from, to);
  }
}

console.log(count);
console.log(answers.map((answers) => answers.join(' ')).join('\n'));

// NOTE:
// function Hanoi(num, from, other, to){
// 	if(num === 0)
//   return;
// Hanoi(num - 1, from, to, other);
// console.log(`${from}에서 ${to}로 이동`);
// Hanoi(num - 1, other, from, to);
// }

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
let input = fs.readFileSync(filePath).toString().split('\n');

const arrNum = input.map((i) => parseInt(i));
let num = input[0];

solution(arrNum);

function solution(arrNum) {
  let max = num;
  let count = 0;

  for (let i = 0; i < arrNum.length; i++) {
    if (max < arrNum[i]) {
      max = arrNum[i];
      count = i;
    }
  }

  console.log(max);
  console.log(count + 1);
}

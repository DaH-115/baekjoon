const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const caseNum = Number(input[0]);
const caseArr = input;
let count = 0;

solution(caseNum, caseArr);

function solution(caseNum, caseArr) {
  for (let i = 1; i <= caseNum; i++) {
    const word = caseArr[i];
    const strArr = [];
    let isGroupWord = true;

    for (let j = 0; j < word.length; j++) {
      if (strArr.indexOf(word[j]) === -1) {
        strArr.push(word[j]);
      } else if (strArr.indexOf(word[j]) !== strArr.length - 1) {
        isGroupWord = false;
      }
    }

    if (isGroupWord) {
      count += 1;
    }
  }

  console.log(count);
}

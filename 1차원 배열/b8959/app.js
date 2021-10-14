const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
let input = fs.readFileSync(filePath).toString().split('\n');

const caseNum = input[0];

for (let i = 1; i <= caseNum; i++) {
  solution(input[i]);

  function solution(caseArr) {
    let scoreO = 1;
    let score = 0;
    let sum = '';

    for (let i = 0; i < caseArr.length; i++) {
      if (caseArr[i] === 'O') {
        if (sum === 'O') {
          scoreO += 1;
        }
        sum = caseArr[i];
        score += scoreO;
      }
      if (caseArr[i] === 'X') {
        scoreO = 1;
        sum = caseArr[i];
      }
    }
    console.log(score);
  }
}

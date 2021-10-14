const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
let input = fs.readFileSync(filePath).toString().split('\n');

const testNum = Number(input[0]);

solution(testNum, input);

function solution(testNum, students) {
  for (let i = 1; i <= testNum; i++) {
    const scores = students[i].split(' ');
    const allStudent = Number(scores[0]);
    let count = 0;
    let allScore = 0;

    for (let j = 1; j < scores.length; j++) {
      allScore += Number(scores[j]);
    }

    const avg = allScore / allStudent;

    for (let j = 1; j <= allStudent; j++) {
      if (scores[j] > avg) {
        count += 1;
      }
    }

    const result = ((count / allStudent) * 100).toFixed(3);

    console.log(`${result}%`);
  }
}

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
let input = require('fs').readFileSync(filePath).toString().split(' ');

// console.log(Number(input[0]));

const num = Number(input[0]);

solution(num);

function solution(num) {
  let X = num;
  let group = 0; // 해당 그룹의 분수의 개수와 같다
  let ascNumArr = [];
  let desNumArr = [];

  while (X > 0) {
    group += 1;
    X = X - group;
  }
  // console.log('X:', X);
  // console.log('group:', group);

  for (let i = 0; i < group; i++) {
    ascNumArr.push(i + 1);
    desNumArr.push(group - i);
  }

  if (group % 2 === 0) {
    console.log(`${ascNumArr[group - 1 + X]}/${desNumArr[group - 1 + X]}`);
  } else {
    console.log(`${desNumArr[group - 1 + X]}/${ascNumArr[group - 1 + X]}`);
  }
}

// NOTE:
// 지그재그 순서의 대각선을 한 그룹으로 만들면 패턴이 보인다
// 짝수 그룹과 홀수 그룹의 분모와 분자가 오름차순, 내림차순으로 정렬되어 있는 것을 확인할 수 있다

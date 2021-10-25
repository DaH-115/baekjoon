const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
let input = require('fs').readFileSync(filePath).toString().split('\n');

const numArr = input.map((i) => Number(i));
const T = numArr.shift();
// console.log(T);

solution(T, numArr);

function solution(T, numArr) {
  for (let i = 0; i < T; i++) {
    const a = numArr.shift();
    const b = numArr.shift();
    // console.log('a:', a);
    // console.log('b:', b);
    const apartment = [];

    for (let i = 0; i <= a; i++) {
      apartment.push([1]);
      // console.log(apartment);

      for (let j = 1; j < b; j++) {
        if (i === 0) {
          apartment[i].push(j + 1);
        } else {
          apartment[i].push(apartment[i][j - 1] + apartment[i - 1][j]);
        }
      }
    }

    const floor = a;
    const room = b - 1;
    // console.log('apartment: ', apartment);
    // console.log('floor: ', floor);
    // console.log('room: ', room);
    console.log(apartment[floor][room]);
  }
}

// NOTE:
// 각 방당 인원수를 저장할 2차원 배열 선언 (실제 아파트 모델을 만든다고 생각)
// 문제 조건: 0 층 (0층의 i 호에는 i 명이 산다)
// k 층 n 호에는 k-1층 n 호 + k 층 n-1호만큼 사는 것을 이용

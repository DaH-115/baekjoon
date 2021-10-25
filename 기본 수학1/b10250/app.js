const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
let input = require('fs').readFileSync(filePath).toString().split('\n');

const testCase = Number(input[0]);

solution(testCase, input);

function solution(testCase, input) {
  for (let i = 1; i <= testCase; i++) {
    const testCaseArr = input[i].split(' ');
    let H = Number(testCaseArr[0]); // 층 수
    let N = Number(testCaseArr[2]); // 몇 번째 손님인지
    let roomNumber = 1;

    // console.log('N:', N);
    // console.log('H:', H);

    while (N > H) {
      roomNumber += 1;
      N -= H;
    }

    if (roomNumber < 10) {
      console.log(`${N}0${roomNumber}`);
    } else {
      console.log(`${N}${roomNumber}`);
    }
  }
}

// NOTE:
// 각 층의 방 수(W) 는 이용하지 않아도 답이 나온다
// 방문자(N) 가 층 높이(H) 보다 작을때 까지
// N 에서 H 를 빼주면 호수와 층수를 동시에 구할 수 있다
// * 10(N) - 6(H) = 4 (6층 건물에 총 10명 중에 6명이 이미 들어와서 '1~6'XX 방은 꽉 찼고-
// 사용할 수 있는 방은 다음 호수이며 4층인 '4'XX 방이다)
// * roomNumber 가 엘리베이터부터 1 부터 시작이기 때문에 호수(XX) 를 구할 수 있다

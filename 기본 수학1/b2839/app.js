const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
let input = require('fs').readFileSync(filePath).toString().split(' ');

const sugar = Number(input[0]);
// console.log(sugar);
const big = 5;
const small = 3;

solution(sugar, big, small);

function solution(sugar, big, small) {
  // 5킬로그램 봉지가 필요한 갯수
  let bigPack = Math.floor(sugar / big);
  // console.log('bigPack:', bigPack);

  while (bigPack >= 0) {
    let temp = sugar - bigPack * big;
    // console.log('temp:', temp);

    if (temp % small === 0) {
      console.log(bigPack + temp / small);
      return;
    } else {
      // 5킬로그램 봉지에서 하나씩 더 꺼내서
      // 3킬로그램 봉지에 소분한다고 생각
      bigPack -= 1;
    }
  }

  console.log(-1);
}

// NOTE:
// https://www.youtube.com/watch?v=0lQGRFyw5BA&t=607s
// 이미지를 참고하면서 보니까 이해가 더 잘 됐다

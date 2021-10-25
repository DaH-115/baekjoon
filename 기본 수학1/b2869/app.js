const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
let input = require('fs').readFileSync(filePath).toString().split(' ');

const A = Number(input[0]);
const B = Number(input[1]);
const V = Number(input[2]);

solution(A, B, V);

function solution(A, B, V) {
  const result = Math.ceil((V - B) / (A - B));

  console.log(result);
}

// NOTE:
// 정상에 도착하면 미끄러지지 않으니 높이(V) 에서 밤에 미끄러지는 수(B) 를 빼주면 된다
// (V - B) = 올라가야하는 값
// 아침에는 위로 이동하지만 밤에는 미끄러지니 결국 하루에 이동하는 값은
// (A - B) = 하루에 이동하는 값
// 올라가야하는 값 / 하루에 이동하는 값 을 해주고 값이 떨어지지 않으면 하루가 더 필요하다는 뜻이므로
// Math.ceil 메서드로 반올림 해준다

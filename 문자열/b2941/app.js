const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const str = input[0];
const hrvatski = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

solution(str);

function solution(str) {
  let result = str;

  for (let alphabet of hrvatski) {
    result = result.split(alphabet).join('H');
  }

  console.log(result.length);
}

// NOTE:
// str 을 result 에 할당하고 split 메서드로 크로아티아어의 알파벳을 기준으로 분리한다
// join 메서드로 분리된 배열을 임의의 '하나의 문자'로 변경하여 합친다
// 그렇게 크로아티아 알파벳은 임의의 하나의 알파벳으로 변경되는 것을 이용한다
// 변경된 result 를 다시 result 에 할당하여 더 이상 변경되지 않은 알파벳이 없을 때까지 반복하고
// 최종적으로 크로아티아 알파벳이 모두 하나의 알파벳으로 변환된 result 의 length 를 콘솔로 출력한다

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const [num_1, num_2] = input.map((str) => [...str].reverse().join(''));
const result = num_1 > num_2 ? num_1 : num_2;
console.log(result);

// const num_1 = input[0];
// const num_2 = input[1];

// const reverseNum_1 = solution(num_1);
// const reverseNum_2 = solution(num_2);

// if (Number(reverseNum_1) > Number(reverseNum_2)) {
//   console.log(reverseNum_1);
// } else {
//   console.log(reverseNum_2);
// }

// function solution(num) {
//   let reverseNum = '';
//   for (let i = 2; i >= 0; i--) {
//     reverseNum += num[i];
//   }
//   return reverseNum;
// }

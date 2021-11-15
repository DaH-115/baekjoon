const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = input.shift();
const sorted = input.sort((a, b) => a.length - b.length || a.localeCompare(b));
const uniqueValues = new Set(sorted);
console.log(Array.from(uniqueValues).join('\n'));

// NOTE:
// Set 객체는 값 콜렉션으로, 삽입 순서대로 요소를 순회할 수 있습니다.
// 하나의 Set 내 값은 한 번만 나타날 수 있습니다.
// 즉, 어떤 값은 그 Set 콜렉션 내에서 유일합니다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set

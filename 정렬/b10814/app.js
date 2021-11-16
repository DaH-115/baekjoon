const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.text';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = input.shift();
const listFocusAge = new Array(201);
input.map((list) => {
  const splited = list.split(' ');
  const age = parseInt(splited[0]);
  if (listFocusAge[age] === undefined) listFocusAge[age] = [];
  listFocusAge[age].push([age, splited[1]]);
});

let results = '';
listFocusAge.map((list) => {
  if (list) {
    for (let i = 0; i < list.length; i++) {
      results += `${list[i][0]} ${list[i][1]}\n`;
    }
  }
});
console.log(results);

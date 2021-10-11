const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const x = parseInt(input[0]);
  const y = parseInt(input[1]);
  solution(x, y);

  process.exit();
});

function solution(x, y) {
  let answer = 0;

  if (x > 0 && y > 0) {
    answer = 1;
  } else if (x < 0 && y > 0) {
    answer = 2;
  } else if (x < 0 && y < 0) {
    answer = 3;
  } else if (x > 0 && y < 0) {
    answer = 4;
  }

  console.log(answer);
}

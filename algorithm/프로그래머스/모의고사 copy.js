/**
 * ? 수포자 3인방은 모의고사 수학문제를 전부 찍는다.
 * ? 1번 문제부터 마지막문제까지 정답이 answers.
 * ! 가장 문제를 많이 맞춘사람 배열에 담아서 return
 *
 * 시험은 최대 10,000문제.
 * 1번 사람은 1, 2, 3, 4, 5 반복
 * 2번 사람은 2, 1, 2, 3, 2, 4, 2, 5 반복
 * 3번 사람은 3, 3, 1, 1, 2, 2, 4, 4, 5, 5 반복
 *
 * ! 가장 높은 점수를 받은 사람이 여럿이면 return하는 값을 오름차순해라.
 */

function solution(answers) {
  var answer = [];
  var list = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  var point = [0, 0, 0];

  for (var i = 0; i < answers.length; i++) {
    if (answers[i] === list[0][i % 5]) point[0]++;
    if (answers[i] === list[1][i % 8]) point[1]++;
    if (answers[i] === list[2][i % 10]) point[2]++;
  }
  var max = 0;
  for (var j = 0; j < point.length; j++) {
    if (point[j] > max) max = point[j];
  }
  for (var k = 0; k < point.length; k++) {
    if (max === point[k]) answer.push(k + 1);
  }
  return answer;
}
// console.log(solution([1, 2, 3, 4, 5]));
// console.log(solution([1, 3, 2, 4, 2]));
console.log(solution([0, 0, 0, 0, 0, 0, 2]));

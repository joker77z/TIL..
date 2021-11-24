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
  const personA = [1, 2, 3, 4, 5];
  const personB = [2, 1, 2, 3, 2, 4, 2, 5];
  const personC = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  // let a = 0;
  // let b = 0;
  // let c = 0;
  const score = {
    1: 0,
    2: 0,
    3: 0,
  };
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === personA[i % 5]) score[1]++;
    if (answers[i] === personB[i % 8]) score[2]++;
    if (answers[i] === personC[i % 10]) score[3]++;
  }
  let answer = [];

  let max = Math.max(score[1], score[2], score[3]);

  for (let i = 1; i <= 3; i++) {
    if (score[i] === max) {
      answer.push(i);
    }
  }
  return answer;
}
// console.log(solution([1, 2, 3, 4, 5]));
// console.log(solution([1, 3, 2, 4, 2]));
console.log(solution([0, 0, 0, 0, 0, 0, 2]));

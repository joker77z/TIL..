/**
 *
 */

function solution(gain) {
  let answer = [0];
  for (let i = 0; i < gain.length; i++) {
    let tmp = answer[answer.length - 1] + gain[i];
    answer.push(tmp);
  }
  return Math.max(...answer);
}
console.log(solution([-5, 1, 5, 0, -7]));

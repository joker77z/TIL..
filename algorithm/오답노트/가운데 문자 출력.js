/*
    단어 입력되면 가운데 문자를 출력하시오.
    짝수일 경우 가운데 2개 출력.
*/

function solution(s) {
  let answer = '';
  let mid = Math.floor(s.length / 2);
  // 홀수면 1개, 짝수면 2개
  if (s.length % 2 !== 0) {
    answer += s[mid];
  } else {
    answer = s[mid - 1] + s[mid];
  }
  return answer;
}

// console.log(solution('study'));
// console.log(solution('good'));

function solutionB(s) {
  let answer = '';
  let mid = Math.floor(s.length / 2);
  // 홀수면 1개, 짝수면 2개
  if (s.length % 2 !== 0) {
    answer = s.slice(mid, mid + 1);
  } else {
    answer = s.slice(mid - 1, mid + 1);
  }
  return answer;
}

console.log(solution('study'));
console.log(solutionB('good'));

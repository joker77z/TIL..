/*
    중복된 문자열은 제거하고 출력
*/

function solution(s) {
  let answer = [];
  for (let x of s) {
    if (answer.indexOf(x) === -1) {
      answer.push(x);
    }
  }
  return answer;
}

console.log(solution(['good', 'time', 'good', 'time', 'student']));

function solutionB(s) {
  let answer = [];
  for (let x of s) {
    if (!answer.includes(x)) {
      answer.push(x);
    }
  }
  return answer;
}

console.log(solutionB(['good', 'time', 'good', 'time', 'student']));

function solutionC(s) {
  let answer;
  answer = s.filter((v, i) => {
    return s.indexOf(v) === i;
  });
  return answer;
}

console.log(solutionC(['good', 'time', 'good', 'time', 'student']));

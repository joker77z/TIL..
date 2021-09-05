/*
    중복된 문자들을 제거하고 출력해라.
*/
function solution(s) {
  let answer = [];
  for (let x of s) {
    if (answer.indexOf(x) === -1) {
      answer.push(x);
    }
  }
  return answer.join('');
}

console.log(solution('ksekkset'));

/*
  문제 변형 : 첫번째 문자가 중복된 개수를 찾아라.
*/

function solutionB(s) {
  let answer = 0;
  let pos = s.indexOf(s[0]);
  while (pos !== -1) {
    answer++;
    pos = s.indexOf(s[0], pos + 1);
    console.log(answer, pos);
  }
  return answer;
}

console.log(solutionB('ksekkset'));

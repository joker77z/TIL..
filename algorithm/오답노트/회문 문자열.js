/*
    앞뒤가 똑같은 것을 회문 문자열.
    회문문자열이면 YES, 아니면 NO
    대소문자 구별 X
*/

function solution(s) {
  s = s.toLowerCase();
  let n = parseInt(s.length / 2);
  let answer = 'YES';
  for (let i = 0; i < n; i++) {
    if (s[i] !== s[s.length - (1 + i)]) answer = 'NO';
  }
  return answer;
}

// console.log(solution('gooG')); // YES

function solutionB(s) {
  let answer = 'YES';
  if (s.toLowerCase().split('').reverse().join('') !== s.toLowerCase()) answer = 'NO';
  return answer;
}

console.log(solutionB('gooG')); // YES

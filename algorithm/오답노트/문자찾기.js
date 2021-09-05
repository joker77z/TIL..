/*
    k가 s에 몇 개 존재?

    Psuedo code
    for(x of s) {
        if(x===k) cnt++;
    }
*/

function solution(s, k) {
  let answer = 0;
  for (let x of s) {
    if (x === k) {
      answer++;
    }
  }
  return answer;
}

console.log(solution('COMPUTERPROGRAMMING', 'R'));

function solutionB(s, k) {
  let answer = s.split(k).length - 1;
  return answer;
}

console.log(solutionB('COMPUTERPROGRAMMING', 'R'));

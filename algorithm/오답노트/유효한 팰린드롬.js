/*
    앞뒤가 같으면 YES. 알파벳만 가지고 하고 대소문자 구분 X

    Pseudo Code
    a-Z가 아닌 것들은 다 ""로 만들어버리기.

    /[^a-Z]
*/

function solution(s) {
  let answer = 'YES';
  if (
    s.toLowerCase().replace(/[^a-z]/g, '') !==
    s
      .toLowerCase()
      .replace(/[^a-z]/g, '')
      .split('')
      .reverse()
      .join('')
  )
    answer = 'NO';
  return answer;
}

console.log(solution('found7, time: study; Yduts; emit, 7Dnuof')); // YES

function solutionB(s) {
  let answer = 'YES';
  s = s.toLowerCase().replace(/[^a-z]/g, '');
  if (s !== s.split('').reverse().join('')) answer = 'NO';
  return answer;
}

console.log(solutionB('found7, time: study; Yduts; emit, 7Dnuof')); // YES

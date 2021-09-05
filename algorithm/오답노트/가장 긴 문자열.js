/*
    가장 긴 문자열을 출력.
    - length를 새로운 배열에 다 담아서 제일 길이가 긴 index번호를 이용해서 s[i]로 출력.
*/
function solution(s) {
  let maxLength = Number.MIN_SAFE_INTEGER;
  let answer = '';
  for (let x of s) {
    if (maxLength < x.length) {
      maxLength = x.length;
      answer = x;
    }
  }

  return answer;
}

console.log(solution(['teacher', 'time', 'student', 'beautiful', 'good']));

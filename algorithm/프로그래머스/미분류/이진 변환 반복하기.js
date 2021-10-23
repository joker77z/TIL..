// 다른 사람 좋은 풀이
function solutionA(s) {
  const answer = [0, 0];
  while (s.length > 1) {
    answer[0]++;
    answer[1] += (s.match(/0/g) || []).length;
    s = s.replace(/0/g, '').length.toString(2);
  }
  return answer;
}
console.log(solutionA('110010101001'));
console.log(solutionA('1111111'));

// 나의 풀이
function solution(s) {
  let cntZero = 0;
  let changeCnt = 0;
  while (Number(s) > 1) {
    s = String(s);
    // 0 제거 개수 세기
    if (s.match(/0/g)) {
      cntZero += s.match(/0/g).length;
    }

    // 0 제거하기
    s = s.replace(/0/g, '').length;

    // 2진수 변환하기
    s = s.toString(2);
    changeCnt++;
  }
  console.log(s);
  return [changeCnt, cntZero];
}
console.log(solution('110010101001'));
console.log(solution('1111111'));

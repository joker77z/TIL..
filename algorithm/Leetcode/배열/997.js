/**
 * 판사는 아무도 믿지 않는다.
 * 모든 마을 사람은 판사를 신뢰한다.
 *
 * [a, b] a는 b를 신뢰한다.
 * ? 판사가 존재하면 판사 레이블 반환(index아님), 없으면 -1을 반환
 */
function solution(n, trust) {
  let counts = Array(n + 1).fill(0);

  for (let [beTrust, trusted] of trust) {
    counts[beTrust]--;
    counts[trusted]++;
  }

  for (let i = 1; i < counts.length; i++) {
    if (counts[i] === n - 1) return i;
  }
  return -1;
}
console.log(
  // 3
  solution(3, [
    [1, 3],
    [2, 3],
  ])
);
console.log(
  // -1
  solution(3, [
    [1, 2],
    [2, 3],
  ])
);
console.log(
  // -1
  solution(3, [
    [1, 3],
    [2, 3],
    [3, 1],
  ])
);

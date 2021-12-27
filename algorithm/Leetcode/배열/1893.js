/**
 * ? array, left, right가 주어지면 array범위 안에 left~right가 모두 속하면 return
 */
function solution(ranges, left, right) {
  // 1
  let rangesArr = new Array(right + 1).fill(0);

  // 2
  for (let [start, end] of ranges) {
    for (let i = start; i <= end; i++) {
      rangesArr[i] = 1;
    }
  }

  for (let i = left; i <= right; i++) {
    if (rangesArr[i] !== 1) return false;
  }
  return true;
}
// console.log(
//   solution(
//     [
//       [1, 2],
//       [3, 4],
//       [5, 6],
//     ],
//     2,
//     5
//   )
// ); // true
console.log(solution([[1, 50]], 1, 50)); // true

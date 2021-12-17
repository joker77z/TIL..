function solution(intervals) {
  let intervalsCopy = [...intervals];
  if (intervals.length === 1) return intervals;
  intervalsCopy.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervalsCopy.length; i++) {
    let prev = intervalsCopy[i - 1];
    let curr = intervalsCopy[i];

    if (prev[1] >= curr[0]) {
      intervalsCopy[i] = [Math.min(prev[0], curr[0]), Math.max(prev[1], curr[1])];
      intervalsCopy.splice(i - 1, 1);
      i--;
    }
  }
  return intervalsCopy;
}

console.log(
  solution([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
// console.log(
//   solution([
//     [1, 4],
//     [4, 5],
//   ])
// );
// console.log(solution([[1, 3]]));
// console.log(
//   solution([
//     [1, 4],
//     [0, 4],
//   ])
// );
// console.log(
//   solution([
//     [1, 4],
//     [2, 3],
//   ])
// );
console.log(
  solution([
    [1, 4],
    [0, 0],
  ])
);

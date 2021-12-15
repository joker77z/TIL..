function solution(intervals) {
  let answer = [];
  let tmp = [];

  let a = intervals[0][0];
  let b = intervals[0][1];
  console.log(a, b);

  for (let i = 1; i < intervals.length; i++) {
    if (i === intervals.length - 1) answer.push([a, b]);
    if (b >= intervals[i][0]) b = intervals[i][1];
    else {
      answer.push([a, b]);
      a = intervals[i][0];
      b = intervals[i][1];
    }
  }
  return answer;
}

// console.log(
//   solution([
//     [1, 3],
//     [2, 6],
//     [8, 10],
//     [15, 18],
//   ])
// );
console.log(
  solution([
    [1, 4],
    [4, 5],
  ])
);

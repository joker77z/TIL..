function solution(n, computers) {
  let answer = 0;
  let checked = Array(n).fill(0);

  function DFS(i) {
    if (checked[i] === 1) return;
    checked[i] = 1;

    for (let j = 0; j < n; j++) {
      if (computers[i][j] === 1) {
        DFS(j);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (checked[i] === 0) {
      DFS(i);
      answer++;
    }
  }
  return answer;
}
console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
// console.log(
//   solution(3, [
//     [1, 1, 0],
//     [1, 1, 1],
//     [0, 1, 1],
//   ])
// );

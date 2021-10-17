function solution(arr) {
  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];
  const xLength = arr[0].length;
  const yLength = arr.length;

  let answer = 0;
  let cnt = 0;
  for (let x = 0; x < yLength; x++) {
    for (let y = 0; y < xLength; y++) {
      let cnt = 0;
      let flag = true;
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (nx >= 0 && nx < xLength && ny >= 0 && ny < yLength) {
          if (arr[nx][ny] > arr[x][y]) {
            flag = false;
            break;
          }
        }
      }
      if (flag) {
        answer++;
      }
    }
  }
  return answer;
}
console.log(
  solution([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
);

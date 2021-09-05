/*
    주위보다 높은 봉우리면 개수를++;
    봉우리 개수 return

    Pseudo Code
    특정 위치에 도착했을 때 주위 4방향을 탐색한다.
    한 방향씩 탐색할 때 마다 만약 4방향 중 한 위치의 봉우리가 더 높다면 지금 봉우리는 가장 높은 봉우리가 아니니 다음 봉우리로 넘어간다.
*/
function solution(nums) {
  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];
  let n = nums.length;
  let answer = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let tmp = 0;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        tmp++;
        if (nx >= 0 && nx < n && ny >= 0 && ny < n && nums[nx][ny] >= nums[i][j]) {
          break;
        }
      }
      if (tmp === 4) {
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

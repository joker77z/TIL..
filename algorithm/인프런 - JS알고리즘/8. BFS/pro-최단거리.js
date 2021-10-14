// 프로그래머스 문제.
// 내가 직접 풀어봐야 한다.
function solution(maps) {
    var answer = 0;
    let n = maps.length;
    let m = maps[0].length;
    const board = Array.from(Array(n), () => Array(m).fill(0));
    const queue = [];
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    queue.push([0, 0]);
    maps[0][0] = 0;
    board[0][0] = 1;
  
    function BFS() {
      while (queue.length) {
        let x = queue.shift();
        for (let i = 0; i < 4; i++) {
          let nx = x[0] + dx[i];
          let ny = x[1] + dy[i];
          if (nx >= 0 && ny >= 0 && nx < n && ny < m && maps[nx][ny] === 1) {
            maps[nx][ny] = 0;
            board[nx][ny] = board[x[0]][x[1]] + 1;
            queue.push([nx, ny]);
          }
        }
      }
    }
    BFS();
    if (maps[n - 1][m - 1] === 1) answer = -1;
    else answer = board[n - 1][m - 1];
    return answer;
  }
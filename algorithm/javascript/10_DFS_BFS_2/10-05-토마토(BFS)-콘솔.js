console.clear();

function solution(board) {
  let answer = Number.MIN_SAFE_INTEGER;

  let row = board.length;
  let col = board[1].length;

  let queue = [];

  // 맨 처음 익은 토마토들을 넣어주고 시작하자!
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      if (board[r][c] === 1) {
        queue.push([r, c]);
      }
    }
  }
  console.log(`${queue}에는 이미 익어있는 토마토들이 들어있어요!`)

  let L;
  function BFS() {
    let dr = [-1, 0, 1, 0];
    let dc = [0, 1, 0, -1];

    for (let [r, c] of queue) {
      L = board[r][c];
      console.log(`${r}, ${c}의 토마토는 ${L - 1}일 째에 익습니다.`)
      console.log(`이 토마토를 기준으로 주변에 있는 토마토들을 찾아볼게요`)
      for (let i = 0; i < 4; i++) {
        const nr = r + dr[i];
        const nc = c + dc[i];
        if (((nr >= 0 && nr < row) && (nc >= 0 && nc < col)) && (board[nr][nc] === 0)) {
          console.log(`앗! 안 익은 토마토를 찾았다!`)
          console.log(`${nr}, ${nc}에 있는 토마토는 ${L}일 이 지난 다음에 익습니다!`)
          board[nr][nc] = L + 1;
          queue.push([nr, nc]);
        }
      }
    }
    answer = L - 1;
  }

  BFS();
  return answer;
}

console.log(solution([[0, 0, -1, 0, 0, 0], [0, 0, 1, 0, -1, 0], [0, 0, -1, 0, 0, 0], [0, 0, 0, 0, -1, 1]]))
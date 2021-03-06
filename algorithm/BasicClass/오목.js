function solution(arr) {
  let answer = 0;
  function checkFive(row, col, BandW) {
    // 가로세로 5개 연속으로 있는지 검사.
    let cntRow = 0;
    let cntCol = 0;

    let i = 0;
    if (arr[row][col - 1] !== BandW) {
      while (arr[row][col + i + 1] === BandW) {
        i++;
        cntCol++;
      }
    }

    i = 0;
    if (arr[col][row - 1] !== BandW) {
      while (arr[col][row + i + 1] === BandW) {
        i++;
        cntRow++;
      }
    }

    if (cntCol === 4 || cntRow === 4) {
      answer = BandW;
    }

    // 대각선 검사
    let diag1 = 0;
    let diag2 = 0;
    i = 0;
    if (arr[row - 1][col - 1] !== BandW) {
      while (arr[row + i + 1][col + i + 1] === BandW) {
        i++;
        diag1++;
      }
    }

    // 역대각선 검사
    i = 0;
    if (arr[row - 1][col + 1] !== BandW) {
      while (arr[row + i + 1][col - i - 1] === BandW) {
        i++;
        diag2++;
      }
    }
    if (diag1 === 4 || diag2 === 4) {
      answer = BandW;
    }
  }
  for (let i = 0; i < 19; i++) {
    for (let j = 0; j < 19; j++) {
      if (arr[i][j] === 1 || arr[i][j] === 2) {
        checkFive(i, j, arr[i][j]);
      }
    }
  }
  return answer;
}
console.log(
  solution([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 2, 0, 0, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ])
);

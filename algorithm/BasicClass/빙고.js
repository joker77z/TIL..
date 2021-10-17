function solution(arr, targets) {
  let bingoPan = Array.from({ length: 5 }, () => []);
  let cnt;

  function questionBingo() {
    cnt = 0;
    for (let i = 0; i < 5; i++) {
      let col = 0;
      let row = 0;
      for (let j = 0; j < 5; j++) {
        if (bingoPan[i][j] === 1) col++;
        if (bingoPan[j][i] === 1) row++;
      }
      if (col === 5) cnt++;
      if (row === 5) cnt++;
    }

    let diag1 = 0;
    let diag2 = 0;
    for (let i = 0; i < 5; i++) {
      if (bingoPan[i][i] === 1) diag1++;
      if (bingoPan[5 - i - 1][i] === 1) diag2++;
    }
    if (diag1 === 5) cnt++;
    if (diag2 === 5) cnt++;
    return cnt;
  }

  function searchBingo(target) {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (arr[i][j] === target) {
          bingoPan[i][j] = 1;
          questionBingo();
        }
      }
    }
  }

  for (let i = 0; i < targets.length; i++) {
    searchBingo(targets[i]); // targets를 하나씩 받는다.
    console.log(i);
    if (cnt >= 3) {
      return i + 1;
    }
  }
}
console.log(
  solution(
    [
      [11, 12, 2, 24, 10],
      [16, 1, 13, 3, 25],
      [6, 20, 5, 21, 17],
      [19, 4, 8, 14, 9],
      [22, 15, 7, 23, 18],
    ],
    [5, 10, 7, 16, 2, 4, 22, 8, 17, 13, 3, 18, 1, 6, 25, 12, 19, 23, 14, 21, 11, 24, 9, 20, 15]
  )
);

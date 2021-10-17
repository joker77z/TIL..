function solution(arr) {
  let columnLength = arr[0].length; // 열 개수
  let rowLength = arr.length; // 행 개수
  let compareArr = [];

  for (let row = 0; row < rowLength; row++) {
    let rowSum = 0;
    let columnSum = 0;
    for (let column = 0; column < columnLength; column++) {
      rowSum += arr[row][column];
      columnSum += arr[column][row];
    }
    compareArr.push(Math.max(rowSum, columnSum));
  }

  let diagLeftToRight = 0;
  let diagRightToLeft = 0;
  for (let row = 0; row < rowLength; row++) {
    diagLeftToRight += arr[row][row];
    diagRightToLeft += arr[rowLength - 1 - row][columnLength - 1 - row];
  }
  compareArr.push(Math.max(diagLeftToRight, diagRightToLeft));
  return Math.max(...compareArr);
}
console.log(
  solution([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);

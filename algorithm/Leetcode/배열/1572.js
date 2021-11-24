function solution(matrix) {
  let sum = 0;
  let check = Array.from({ length: matrix.length }, () => Array(matrix.length).fill(0));
  for (let i = 0; i < matrix.length; i++) {
    if (check[i][i] === 0) {
      check[i][i] = 1;
      sum += matrix[i][i];
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    if (check[i][matrix.length - 1 - i] === 0) {
      sum += matrix[i][matrix.length - 1 - i];
    }
  }
  return sum;
}
console.log(
  solution([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

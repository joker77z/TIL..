function solution(m, n, indices) {
  let count = 0;
  let matrix = Array.from({ length: m }, () => Array(n).fill(0));
  for (let indice of indices) {
    let [row, column] = indice;

    for (let i = 0; i < matrix[0].length; i++) {
      matrix[row][i]++;
    }
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][column]++;
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] % 2 === 1) {
        count++;
      }
    }
  }
  return count;
}
console.log(
  solution(2, 3, [
    [0, 1],
    [1, 1],
  ])
);

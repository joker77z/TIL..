/**
 * 정렬된 매트릭스에서 음수 개수 세기
 *
 */

function solution(matrix) {
  let answer = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < 0) answer++;
    }
  }
  return answer;
}
console.log(
  solution([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
);

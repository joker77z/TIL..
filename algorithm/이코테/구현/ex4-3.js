function solution(data) {
  let column = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  let col = column.indexOf(data[0]);
  let row = data[1] - 1;
  let answer = 0;
  let dx = [-2, -2, -1, 1, 2, 2, 1, -1];
  let dy = [-1, 1, 2, 2, 1, -1, -2, -2];
  for (let i = 0; i < 8; i++) {
    let nx = col + dx[i];
    let ny = row + dy[i];
    if (nx >= 0 && nx < column.length && ny >= 0 && ny < column.length) {
      answer++;
    }
  }
  return answer;
}
console.log(solution('a1')); // 2

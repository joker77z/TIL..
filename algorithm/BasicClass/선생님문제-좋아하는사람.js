function solution(students, arr) {
  const loveMatrix = Array.from({ length: students.length }, () => Array(students.length).fill(0));
  const check = Array(students.length).fill(0);
  const answer = Array(students.length).fill(0);

  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i].split(' ');
    let x = tmp[0].charCodeAt() - 65;
    let y = tmp[1].charCodeAt() - 65;

    loveMatrix[x][y] = 1;
  }

  for (let col = 0; col < loveMatrix.length; col++) {
    let count = 0;
    for (let row = 0; row < loveMatrix.length; row++) {
      if (loveMatrix[row][col] === 1) {
        count++;
      }
      // count += loveMatrix[row][col];
    }
    if (count >= 2) {
      check[col] = 1;
    }
  }
  console.log(check);

  for (let row = 0; row < loveMatrix.length; row++) {
    for (let col = 0; col < loveMatrix.length; col++) {
      if (loveMatrix[row][col] === 1 && check[col] === 1) answer[row]++;
    }
  }
  return answer;
}
console.log(solution(['A', 'B', 'C', 'D'], ['A B', 'B C', 'B A', 'C D', 'B D', 'C B']));

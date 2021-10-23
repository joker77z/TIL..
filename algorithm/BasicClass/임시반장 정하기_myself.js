// 행과 열에 의미부여다되서 나와서 약간 쉬운거다.
// 실제로는 내가 의미부여할 수 있어야 한다.
function solution(students) {
  let min = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < students.length; i++) {
    let cnt = 0; //i 하고 같은 반 학생 수. cnt는 학생 수를 카운팅 한다.
    for (let j = 0; j < students.length; j++) {
      for (let k = 0; k < students[0].length; k++) {
        // i라는 사람의 각 학년 반
        if (students[i][k] === students[j][k]) {
          cnt++;
          break; // 같은 반을 발견하는 순간.
          // 이 사람은 같은 반 했구나. 브레이크.
        }
      }
    }
    if (min < cnt) {
      min = cnt;
    }
  }
  return min;
}
console.log(
  solution([
    [2, 3, 1, 7, 3],
    [4, 1, 9, 6, 8],
    [5, 5, 2, 4, 4],
    [6, 5, 2, 6, 7],
    [8, 4, 2, 2, 2],
  ])
);

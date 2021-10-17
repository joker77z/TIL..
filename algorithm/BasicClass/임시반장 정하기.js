function solution(arr) {
  let maxClassMember = Number.MIN_SAFE_INTEGER;
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    const setClassMember = new Set();
    for (let j = 0; j < 5; j++) {
      for (let k = 0; k < arr.length; k++) {
        if (i !== k && arr[i][j] === arr[k][j]) {
          setClassMember.add(k + 1);
        }
      }
    }
    console.log(setClassMember);
    if (maxClassMember < setClassMember.size) {
      maxClassMember = setClassMember.size;
      answer = i + 1;
    }
  }
  return answer;
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

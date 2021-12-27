function solution(n) {
  if (n === 0) return 0;
  let numsArr = new Array(n + 1).fill(0);
  numsArr[0] = 0;
  numsArr[1] = 1;
  for (let i = 1; i <= n; i++) {
    if (2 <= 2 * i && 2 * i <= n) {
      numsArr[2 * i] = numsArr[i];
    }
    if (2 <= 2 * i + 1 && 2 * i + 1 <= n) {
      numsArr[2 * i + 1] = numsArr[i] + numsArr[i + 1];
    }
  }
  return Math.max(...numsArr);
}
console.log(solution(7));
console.log(solution(0));

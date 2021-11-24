/**
 * ? 길이가 같은 두 배열 a, b
 * ? a, b의 내적을 return해라.
 *
 * a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1] * b[n-1]이다.
 * n은 주어진 a, b 배열의길이
 */

function solution(a, b) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }
  return sum;
}
console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));

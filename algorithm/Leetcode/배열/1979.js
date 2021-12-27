function solution(nums) {
  const gcd = (a, b) => (b == 0 ? a : gcd(b, a % b));
  let max = Math.max(...nums);
  let min = Math.min(...nums);

  return gcd(min, max);
}
console.log(solution([2, 5, 6, 9, 10]));

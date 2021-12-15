/**
 * 최대 부분수열
 * ! 연속된 수열중에서 가장 큰 합을 return
 */
function solution(nums) {
  let prev = 0;
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    prev = Math.max(prev + nums[i], nums[i]);
    max = Math.max(max, prev);
  }
  return max;
}
console.log(solution([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

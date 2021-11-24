/**
 * 원소 두 개씩 빼서 곱해서 2번 tmp 를 구하는데
 * 한번은 제일 큰 수
 * 한번은 제일 작은 수를 구해서 두 수를 뺀 값을 return
 */

function solution(nums) {
  let tmp1 = 0;
  let tmp2 = 0;
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  let ans = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (max < nums[i] * nums[j]) {
        max = nums[i] * nums[j];
        tmp1 = max;
      }
      if (min > nums[i] * nums[j]) {
        min = nums[i] * nums[j];
        tmp2 = min;
      }
    }
  }
  ans = tmp1 - tmp2;
  return ans;
}
// console.log(solution([5, 6, 2, 7, 4]));
console.log(solution([5, 9, 4, 6]));

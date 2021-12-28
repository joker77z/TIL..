/**
 * 침몰하는 타이타닉 문제?
 * 제일 작은것과 짝꿍이 되고 그다음 작은것과 큰것이 짝궁.는
 */
function solution(nums) {
  let lt = 0;
  let rt = nums.length - 1;
  let max = Number.MIN_SAFE_INTEGER;

  while (lt < rt) {
    max = Math.max(max, nums[lt] + nums[rt]);
    lt++;
    rt--;
  }
  return max;
}
console.log(solution([3, 5, 2, 3]));

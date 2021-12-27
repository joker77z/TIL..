/**
 * ? nums 배열이 주어지면 k번 양<->음수로 바꿨을 때 nums 배열 합의 최대 합
 */
function solution(nums, k) {
  while (k > 0) {
    k--;
    let min = Math.min(...nums);
    let index = nums.indexOf(min);
    nums[index] = nums[index] * -1;
  }
  return nums.reduce((total, cur) => total + cur, 0);
}
// console.log(solution([4, 2, 3], 1));
// console.log(solution([3, -1, 0, 2], 3));
// console.log(solution([2, -3, -1, 5, -4], 2));
console.log(solution([-2, 9, 9, 8, 4], 5));

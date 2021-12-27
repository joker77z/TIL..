/**
 * n = nums.length/2
 * n번 반복되는 숫자 return
 */
function solution(nums) {
  let map = new Map();
  let n = nums.length / 2;

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    if (map.get(nums[i]) === n) {
      return nums[i];
    }
  }
}
console.log(solution([1, 2, 3, 3]));
console.log(solution([2, 1, 2, 5, 3, 2]));
console.log(solution([5, 1, 5, 2, 5, 3, 5, 4]));

function solution(nums) {
  let sum = nums.reduce((acc, cur) => acc + cur);
  nums.sort((a, b) => a - b);
  let target = sum - 100;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        nums.splice(i, 1);
        nums.splice(j - 1, 1);
      }
    }
  }
  return nums;
}
console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));

function solution(nums) {
  let uniqueNumberSum = 0;
  let numberMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    numberMap.set(nums[i], (numberMap.get(nums[i]) || 0) + 1);
  }

  for (let [key, count] of numberMap) {
    // 유니크라면
    if (count === 1) {
      uniqueNumberSum += key;
    }
  }
  return uniqueNumberSum;
}
console.log(solution([1, 2, 3, 2]));
console.log(solution([1, 2, 3, 4, 5]));

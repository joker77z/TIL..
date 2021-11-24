function solution(nums, k) {
  return nums.reduce((count, num, index) => {
    for (let j = index + 1; j < nums.length; j++) {
      Math.abs(num - nums[j]) === k && count++;
    }
    console.log(index, count);
    return count;
  }, 0);
}
console.log(solution([1, 2, 2, 1], 1));

// function solution(nums, k) {
//   let ans = 0;
//   console.log(nums);
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (Math.abs(nums[i] - nums[j]) === k) {
//         console.log(`nums[i]는 ${nums[i]}, nums[j]는 ${nums[j]}, i, j`);
//         ans++;
//       }
//     }
//   }
//   return ans;
// }
// console.log(solution([1, 2, 2, 1], 1));

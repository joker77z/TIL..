// function solution(nums, target) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }
// // console.log(solution([2, 7, 11, 15], 9));
// // console.log(solution([3, 2, 3], 6));
// console.log(solution([0, 4, 3, 0], 0));

function solution(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
}
console.log(solution([2, 7, 11, 15], 9));
// // console.log(solution([3, 2, 3], 6));
// console.log(solution([0, 4, 3, 0], 0));

/*
  가장 싼 가격에 사서 비싼 가격에 판 가격.
  1. 가장 싼 가격을 찾는다.
  2. 싸게 산 가격보다 더 큰 가격을 찾는다.
  3. 두 수의 차를 구한다.
*/

function solution(nums) {
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    min = Math.min(min, nums[i]);
    max = Math.max(max, nums[i] - min);
  }
  return max;
}
console.log(solution([2, 4, 1]));

//POINT: 효율성 걸림. for 1개 쓰기
// function solution(nums) {
//   // 1. 가장 싼 가격
//   let max = Number.MIN_SAFE_INTEGER;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] < nums[j]) {
//         console.log(`nums[i]는 ${nums[i]}, nums[i]는 ${nums[j]}`);
//         max = Math.max(max, nums[j] - nums[i]);
//       }
//     }
//   }
//   if (max < 0) return 0;
//   return max;
// }
// console.log(solution([7, 1, 5, 3, 6]));

//POINT: 이 방법도 안된다. 가장 작은 수를 구하고나서 다른 수를 찾으면 안됌.
// function solution(nums) {
//   let min = Number.MAX_SAFE_INTEGER;
//   let diff = 0;
//   let tmp = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (min > nums[i]) {
//       min = nums[i];
//       tmp = i;
//     }
//   }
//   for (let i = tmp; i < nums.length; i++) {
//     diff = Math.max(diff, nums[i] - nums[tmp]);
//   }
//   return diff;
// }
// // console.log(solution([7, 1, 5, 3, 6]));
// console.log(solution([2, 4, 1]));

/**
 * 가장 긴 길이의 Pair chain
 *
 */

function solution(nums) {
  let ans = 1;

  nums.sort((a, b) => a[1] - b[1]);
  console.log(nums);

  let tmp = nums[0][1];
  for (let i = 1; i < nums.length; i++) {
    if (tmp < nums[i][0]) {
      console.log(tmp, nums[i][0]);
      ans++;
      tmp = nums[i][1];
    }
  }
  console.log(ans);
}
// console.log(
//   solution([
//     [1, 2],
//     [2, 3],
//     [3, 4],
//   ])
// );
console.log(
  solution([
    [3, 4],
    [2, 3],
    [1, 2],
  ])
);

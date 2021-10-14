function solution(nums1, nums2) {
  let nums = [nums1, nums2];
  let sum = 0;
  console.log(nums[0]);
  for (let j = 0; j < 2; j++) {
    let tmp = nums[j].reverse().join('');
    sum += +tmp;
  }
  sum = String(sum);
  return sum
    .split('')
    .reverse()
    .map(n => Number(n));
}
console.log(solution([2, 4, 3], [5, 6, 4]));

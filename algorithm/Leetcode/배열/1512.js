function solution(nums) {
  let cnt = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i < j && nums[i] === nums[j]) {
        cnt++;
      }
    }
  }
  return cnt;
}
console.log(solution([1, 2, 3, 1, 1, 3]));

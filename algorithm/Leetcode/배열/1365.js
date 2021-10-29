function solution(nums) {
  let ans = Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    let cnt = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j] && i !== j) {
        cnt++;
      }
    }
    ans[i] = cnt;
  }
  return ans;
}
console.log(solution([8, 1, 2, 2, 3]));

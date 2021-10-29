function solution(nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i = i + 2) {
    let [freq, val] = [nums[0 + i], nums[1 + i]];
    for (let j = 0; j < freq; j++) {
      ans.push(val);
    }
  }
  return ans;
}
console.log(solution([1, 2, 3, 4]));

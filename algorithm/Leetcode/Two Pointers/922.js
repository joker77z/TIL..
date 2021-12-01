function solution(nums) {
  let even = nums.filter(n => n % 2 === 0);
  let odd = nums.filter(n => n % 2 === 1);
  let ans = [];
  for (let i = 0; i < nums.length / 2; i++) {
    ans.push(even[i], odd[i]);
  }
  return ans;
}
console.log(solution([4, 2, 5, 7]));

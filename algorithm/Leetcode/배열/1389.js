function solution(nums, index) {
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    answer.splice(index[i], 0, nums[i]);
  }
  return answer;
}
console.log(solution([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));

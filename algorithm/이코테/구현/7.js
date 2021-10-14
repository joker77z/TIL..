function solution(nums) {
  let sum = 0;
  let answer = '';
  for (let i = 0; i < nums.length / 2; i++) {
    sum += nums[i] - nums[nums.length - 1 - i];
  }
  if (sum === 0) answer = 'LUCKY';
  else answer = 'READY';
  return answer;
}
console.log(solution('123402'));
console.log(solution('7755'));

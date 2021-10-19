function solution(nums) {
  let nH = new Map();
  let tmp = [];
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    nH.set(nums[i], (nH.get(nums[i]) || 0) + 1);
  }
  for (let [key, value] of nH) {
    if (value === 1) {
      tmp.push(key);
    }
  }
  answer = Math.max(...tmp);
  return answer;
}
console.log(solution([5, 7, 3, 9, 4, 9, 8, 3, 1]));

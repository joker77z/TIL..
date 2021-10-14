function solution(nums) {
  const answer = [];
  const numberHashMap = new Map();
  nums.forEach(n => numberHashMap.set(n, numberHashMap.get(n) + 1 || 1));
  numberHashMap.forEach((value, key) => (value > 1 ? answer.push(key) : ''));
  return answer;
}
console.log(solution([4, 3, 2, 7, 8, 2, 3, 1]));

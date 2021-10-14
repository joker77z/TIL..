function solution(nums, val) {
  const nH = new Map();
  nums.forEach(n => nH.set(n, nH.get(n) + 1 || 1));

  nH.set(val, 0);
  let answer = [];
  for (let [key, value] of nH) {
    for (let i = 0; i < value; i++) {
      if (value > 0) answer.push(key);
    }
  }
  console.log(answer);
  return answer;
}
console.log(solution([3, 2, 2, 3], 3));

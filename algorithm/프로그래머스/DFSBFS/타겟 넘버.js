function solution(nums, target) {
  let answer = 0;
  let sum = 0;
  let check = Array(nums.length).fill(0);
  function DFS(level, sum) {
    if (level === nums.length) {
      if (sum === target) {
        answer++;
      }
    } else {
      if (check[level] === 0) {
        check[level] = 1;
        DFS(level + 1, sum + nums[level]);
        DFS(level + 1, sum - nums[level]);
        check[level] = 0;
      }
    }
  }
  DFS(0, 0);
  return answer;
}
console.log(solution([1, 1, 1, 1, 1], 3));

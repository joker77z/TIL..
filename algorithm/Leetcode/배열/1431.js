function solution(candies, extraCandies) {
  let max = Math.max(...candies);
  let ans = Array(candies.length).fill(0);
  for (let i = 0; i < candies.length; i++) {
    if (max <= candies[i] + extraCandies) {
      ans[i] = true;
    } else {
      ans[i] = false;
    }
  }
  return ans;
}
console.log(solution([2, 3, 5, 1, 3], 3));

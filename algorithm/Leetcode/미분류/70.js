/*
    옥상가는데 n계단
    매번 1or 2 계단 올라간다. 얼마나 많은 종류로 올라갈 수 있는가?

    ex
    n = 2
    1번씩 2번 올라가거나
    2번 한번에 올라간다.
*/

function solution(n) {
  const dp = Array.from({ length: n + 1 }, () => 0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
console.log(solution(2));

/**
 * 매일 주식 사거나 팔 수 있다.
 * 한번에 주식 1주만 보유 가능.
 * 하지만 산 날 당일 팔 수 있다.
 *
 * ? 달성할 수 있는 최대 이익 return
 *
 * ! 예제 [7, 1, 5, 3, 6, 4]
 * 1. 2일째에 1원에 샀다.
 * 2. 3일째에 5원에 팔았다.
 * 이익은 4원.
 *
 * 3. 4일 째에 3원에 샀다.
 * 4. 5일 째에 6원에 팔았다.
 * 이익은 3원.
 *
 * 4 + 3 = 7원 이득.
 *
 * ! 쌀때 사서 비싸게 판다.
 *
 * PseudoCode
 * 1. 이전보다 싸다.
 *
 */

function solution(prices) {
  let prev = prices[0]; // 7
  let sum = 0;

  for (let i = 1; i < prices.length; i++) {
    // 더 작은 원소를 찾는다.
    if (prev > prices[i]) {
      prev = prices[i];
    }

    // 더 크다면 차를 더한다.
    if (prev < prices[i]) {
      sum += prices[i] - prev;
      prev = prices[i];
    }
  }
  return sum;
}
console.log(solution([7, 1, 5, 3, 6, 4]));

/**
 * 컨베이어 벨트는 패키지를 가진다.
 * [days]안에 배송가야 하는 것들이 있다.
 * ! days 이내 배송되게 하는 선박의 최소 용량
 *
 *
 * ! 5일만에 다 배송완료하는 최소 무게
 * ! output : 15로 하면 1일 동안 물건 5개, 2개, 1개, 1개, 1개 배송완료
 *
 * PseudoCoding
 *
 */

// 계산해서 구한 날짜가
// 5일보다 더 높으면 weight를 늘려서 한번에 배송 개수를 늘린다.
// 5일보다 더 빠르면 weight를 줄인다.
function solution(weights, days) {
  let lt = 1;
  // let lt = 0;
  let sum = weights.reduce((cur, total) => cur + total);
  let rt = sum;
  let answer = 0;

  // mid는 하루에 배송할 수 있는 무게
  function check(midWeight) {
    // midWeight 값이 배열을 순회하면서
    let day = 1;
    let total = 0;

    for (let n of weights) {
      total += n;
      if (total > midWeight) {
        total = n;
        day++;
      }
    }

    return day > days;
  }

  // ! lt <=rt ?
  while (lt < rt) {
    let midWeight = Math.floor((lt + rt) / 2);
    console.log(midWeight);
    // 5일보다 더 높을 때 하루에 보낼 수 있는 무게를 늘려서 날짜를 줄인다.
    if (check(midWeight)) {
      lt = midWeight + 1;
      //5일보다 더 낮을 때 무게를 줄여서 날짜를 늘린다.
      answer = lt;
    } else {
      rt = midWeight;
      answer = rt;
    }
  }
  return answer;
}
// console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log(solution([1, 2, 3, 1, 1], 4));

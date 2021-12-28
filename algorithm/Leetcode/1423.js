// 카드에서 얻을 수 있는 최대 포인트
/**
 * cardPoints = [1, 2, 3, 4, 5, 6, 1], k = 3
 * 제일 앞 or 뒤에서 1개 필수로 가져온다.
 * k개수만큼 가져올 때 최대점수 return
 */

// 슬라이딩 윈도우 문제다.

function solution(cardPoints, k) {
  let rt = cardPoints.length - 1;
  let leftSum = 0;
  let rightSum = 0;

  // for (let i = 0; i < cardPoints.length; i++) {
  for (let i = 0; i < 3; i++) {
    leftSum += cardPoints[i];
    rightSum += cardPoints[cardPoints.length - (i + 1)];
  }
  console.log(leftSum, rightSum);
}
console.log(solution([1, 2, 3, 4, 5, 6, 1], 3));

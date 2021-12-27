/**
 * 사각형들 집합인 배열이 들어오고 각 사각형 중 정사각형을 만들 수 있는 최대길이로 해서
 * 몇개의 배열에서 가장 큰 길이의 정사각형을 만들 수 있는지 구하는 문제
 */
function solution(rectangles) {
  let count = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let rec of rectangles) {
    let [width, height] = rec;
    let min = Math.min(width, height);

    if (min > max) {
      max = min;
      count = 0;
      console.log('max: ', max, 'min: ', min);
    }

    if (min === max) {
      count++;
    }
  }
  return count;
}
console.log(
  solution([
    [2, 3],
    [3, 7],
    [4, 3],
    [3, 7],
  ])
);

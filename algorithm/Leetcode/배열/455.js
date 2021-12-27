/**
 * children : 각 원소는 아이들이 원하는 쿠키 크기
 * cookieSize : 각 원소는 쿠키 크기
 *
 * ? 쿠키 크기가 애들이 원하는 크기 이상이면 그 아이에게 쿠키를 주는데,
 * ? 줄 수 있는 총 쿠키 개수를 구해라.
 */
function solution(children, cookieSize) {
  let count = 0;

  children = children.sort((a, b) => a - b);
  cookieSize = cookieSize.sort((a, b) => a - b);

  let index = 0;
  for (let cookie of cookieSize) {
    if (children[index] <= cookie) {
      count++;
      index++;
    }
  }
  return count;
}
console.log(solution([1, 2, 3], [1, 1])); // 1
console.log(solution([1, 2], [1, 2, 3])); // 2
console.log(solution([10, 9, 8, 7], [5, 6, 7, 8])); // 2

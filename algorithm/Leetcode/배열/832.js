/**
 * [1, 1, 0]
 * [1, 0, 1]
 * [0, 0, 0]
 *
 * ->
 *
 * [1, 0, 0]
 * [1, 0, 1]
 * [0, 0, 0]
 *
 *
 * 수평으로 접고 반전시킨다.
 * 내 추측.
 * 1. 수평으로 접는다.
 * [0, 1, 1]
 * [1, 0, 1]
 * [0, 0, 0]
 *
 * 2. 반전시킨다.
 * [1, 0, 0]
 * [0, 1, 0]
 * [1, 1, 1]
 */

function solution(image) {
  for (let i = 0; i < image.length; i++) {
    image[i].reverse();
    for (let j = 0; j < image[0].length; j++) {
      image[i][j] = image[i][j] === 0 ? 1 : 0;
    }
  }
  return image;
}
console.log(
  solution([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ])
);

/**
 * x && y축이 다음이 더 크면 둘다 증가 cnt++;
 * -> pos[x]++, pos[y]++
 * 반대로 작으면 둘다 감소 cnt++;
 * -> pos[x]--, pos[y]--
 *
 * x축만 더 크면 pos[x]++, cnt++;
 * y축만 더 크면 pos[x]++, cnt++;
 * 반대로 x축만 더 작을 때, y축만 더 작을 때
 *
 * 포인트에 도달하면
 * 또 다음 지점을 향해 반복.
 */

function solution(points) {
  let answer = 0;
  for (let i = 1; i < points.length; ++i) {
    const prevPos = points[i - 1];
    const Pos = points[i];
    answer += Math.max(Math.abs(prevPos[0] - Pos[0]), Math.abs(prevPos[1] - Pos[1]));
  }
  return answer;
}
console.log(
  solution([
    [1, 1],
    [3, 4],
    [-1, 0],
  ])
);
// console.log(
//   solution([
//     [3, 2],
//     [-2, 2],
//   ])
// );

/**
 * * 실패율
 * 클리어하지 못한 유저 수
 * ------------------
 * 스테이지 도달 유저 수
 *
 * 스테이지의 개수 N, 게임을 이용하는 사용자가 멈춰있는 스테이지 번호 담긴 stages
 * 실패율이 높은 스테이지부터 내림차순으로 스테이지 번호가 담겨있는 배열 return
 *
 * 1. 실패율이 높은 스테이지 구하기.
 * tmpStage 배열 만들고
 * 객체형태로 1: 실패율 이런식으로 넣는다.
 *
 * 실패율은 1/stages.length을 구하고 해당 개수만큼 다음레벨에서 뺀다.
 * 실패율은 2/stages.length
 *
 * POINT:효율성 stages개수 20만이어서 2개 틀렸다.
 * stages를 끝까지 돌면 안된다.
 */

function solution(N, stages) {
  let tmpStages = [];
  for (let i = 1; i <= N; i++) {
    let cnt = 0;
    for (let j = 0; j < stages.length; j++) {
      if (stages[j] === i) {
        stages.splice(j, 1);
        cnt++;
        j--;
      }
    }
    tmpStages.push([i, cnt / (stages.length + cnt)]);
  }
  const tmpMap = tmpStages.sort((a, b) => b[1] - a[1]).map(el => el[0]);
  return tmpMap;
}
console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3, 4, 2, 1, 5]
// console.log(solution(4, [4, 4, 4, 4, 4]));

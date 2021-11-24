/**
 * ? 로또 6/45는 1부터 45까지 숫자 중 6개 찍어서 맞히는 대표적인 복권.
 * 로또 순위를 정하는 방식
 * 1위: 6개 모두
 * 2위: 5개 일치
 * 3위: 4개 일치
 * 4위: 3개 일치
 * 5위: 2개 일치
 * 6위: 1개이거나 못맞췄거나.
 *
 * ! 일부 번호를 알아볼 수 없게 되서
 * 최고 순위와 최저 순위를 알아보고 싶다.
 *
 * 알아볼 수 없는 번호 0으로 표기.
 * 구매로또 번호가 44, 1, 0, 0, 31, 25라고 가정.
 * 당첨로또 번호가 31, 10, 45, 1, 6, 19면
 *
 * 최고 순위와 최저 순위는
 * 최고 순위는 31, 10, 1, 6. // 4개 일치 3등
 * 최저 순위는 31, 1 // 2개일치 5등
 *
 * ! 최고 순위, 최저순위를 구해라.
 * lottos: 구매한 로또 번호
 * win_nums : 당첨 번호
 */

function solution(lottos, win_nums) {
  const ranking = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  };
  lottos.sort((a, b) => a - b);
  win_nums.sort((a, b) => a - b);
  const answer = [];
  // 최저 순위일 때
  let minSameCnt = 0;
  for (let i = 0; i < lottos.length; i++) {
    for (let j = 0; j < lottos.length; j++) {
      if (lottos[i] === win_nums[j]) {
        minSameCnt++;
      }
    }
  }

  // 최고 순위일 때 0의 개수만큼 2개를 더 맞춘다.
  // 0의 개수만큼 minSameCnt에 더한다.
  let scratch = 0;
  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] === 0) {
      scratch++;
    }
  }
  let maxSameCnt = minSameCnt + scratch;
  answer.push(ranking[maxSameCnt], ranking[minSameCnt]);
  return answer;
}
// console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));

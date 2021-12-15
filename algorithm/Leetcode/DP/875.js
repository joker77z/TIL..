/**
 * [3, 6, 7, 11] 더미당 든 바나나 개수
 * 경비병 h 시간뒤 돌아온다.
 *
 * 시간당 먹을 개수 정할 수 있다.
 * 시간당 그녀는 고른다 몇개 더미 더미에서  k개 바나나 먹을지랑
 * 만약 k 바나나개 이하의 더미라면 그녀는 더미 바나나 다 먹고 그 시간동안 더 먹지 않는다.
 *
 * ! 경비병 돌아오기전에 다 먹는다. h시간 내 모든 바나나 다 먹을 수 있도록 최소 k를 구해라.
 *
 * ! k : 시간당 먹을 수 있는 개수
 * ! h : 경비병 돌아오기까지 걸리는 시간
 *
 * 예시1 [3, 6, 7, 11], h=8
 * 시간당 x개를 총 개수 27개를 8시간안에 다먹을수있도록.
 * 시간당 k =  4개라면
 * 1시간 = i[0] 3개 다먹는다.
 * 2시간 = i[1] 6개 다 못먹는다.
 * 3시간 = i[1] 6개 다먹었따.
 * 4시간 = i[2] 다못먹는다.
 * 5시간 = i[2] 다먹는다.
 * 6시간 = i[3] 11 - 4 = 7
 * 7시간 = i[3] 7 - 4 = 3
 * 8시간 = i[3] 3 - 4 = 0 다먹었다.
 *
 * 예시2 [30, 11, 23, 4, 20], h =5
 * 30개씩먹으면
 * 1시간 i[0] 끝
 * 2시간 i[1] 끝
 * 3시간 i[2] 끝
 * 4시간 i[3] 끝
 * 5시간 i[4] 끝
 *
 * PseudoCoding
 * 총 개수 27개, 제한시간 8시간일 때
 * 27을 8로 나눠보자. 그럼 3.x가 나오고 floor하면 3이 나온다.
 * nums를 처음부터 순회하면서 위에서 나온 3을 빼면서 0이되거나 0밑이 되버리면 다음꺼로 진행
 */

function solution(piles, H) {
  let lt = 0;
  let rt = Math.max(...piles);

  let answer = 0;

  function check(hourEat) {
    let times = 0;
    for (let p of piles) {
      times += Math.ceil(p / hourEat);
    }

    // times가 H보다 적으면 속도를 늦춰서 시간을 늘려본다.
    return times <= H;
  }

  while (lt <= rt) {
    let hourEat = Math.floor((lt + rt) / 2);

    // 현재 시간당 먹는 양이 교도소장이 돌아오는 시간보다 더 많다 더 빨리 먹어야 된다.
    if (check(hourEat)) {
      rt = hourEat - 1;
      answer = hourEat; // 최대한 속도 늦춘 시간이여야하니까
    } else {
      lt = hourEat + 1;
    }
  }
  return answer;
}
console.log(solution([3, 6, 7, 11], 8));
console.log(solution([30, 11, 23, 4, 20], 5));
// console.log(solution([312884470], 312884469));

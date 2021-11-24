/**
 * 왼손, 오른손 엄지손가락만으로 숫자 입력.
 *
 * 처음
 * 왼손 엄지는 *에
 * 오른손 엄지는 #키패드에서 시작
 *
 * 1 2 3
 * 4 5 6
 * 7 8 9
 * * 0 #
 *  전화
 *
 * 엄지는 상하좌우로만 이동가능.
 * 이동은 거리 1.
 *
 * 왼쪽 3개 숫자는 왼손 엄지 사용
 * 1
 * 4
 * 7
 *
 * 오른쪽 3개는 오른손 엄지 사용자가
 * 3
 * 6
 * 9
 *
 * 가운데는 현재 위치에서 가까운 엄지사용.
 * 만약 두 엄지 위치가 가운데 버튼으로부터 거리 같으면
 * 오른손잡이느 오른손, 왼손잡이는 왼손.
 * 2
 * 5
 * 8
 * 0
 *
 * 순서대로 누를 번호 numbers, 어느손잡이 hand
 * 번호를 누른 손이 왼손인지 오른손인지 문자열로 return.
 */

function solution(numbers, hand) {
  let left = [1, 4, 7];
  let right = [3, 6, 9];
  let answer = '';
  let matrix = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  };

  let LPOS = matrix['*'];
  let RPOS = matrix['#'];

  for (let i = 0; i < numbers.length; i++) {
    if (left.includes(numbers[i])) {
      answer += 'L';
      LPOS = matrix[numbers[i]];
    } else if (right.includes(numbers[i])) {
      answer += 'R';
      RPOS = matrix[numbers[i]];
    } else {
      let tmp = matrix[numbers[i]];

      let LDIST = Math.abs(tmp[0] - LPOS[0]) + Math.abs(tmp[1] - LPOS[1]);
      let RDIST = Math.abs(tmp[0] - RPOS[0]) + Math.abs(tmp[1] - RPOS[1]);
      if (LDIST === RDIST) {
        answer += hand.slice(0, 1).toUpperCase();
        hand === 'left' ? (LPOS = matrix[numbers[i]]) : (RPOS = matrix[numbers[i]]);
        matrix[numbers[i]];
      } else {
        if (LDIST > RDIST) {
          answer += 'R';
          RPOS = matrix[numbers[i]];
        } else {
          answer += 'L';
          LPOS = matrix[numbers[i]];
        }
      }
    }
  }
  return answer;
}
console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));

/**
 * 크레인 인형뽑기 게임
 * 바구니 아래부터 쌓인다.
 *
 * 같은 모양이 연속으로 쌓이면 두개는 터진다.
 * 크레인을 모두 작동시킨 후 터트려져서 사라진 인형 개수 return
 *
 * 1, 5, 3 순으로 받으면서 board의 열에서 제일 먼저 1이상 숫자를 만났을 때 0으로 바꾸고
 * pop한걸 stack에 넣어둔다.
 * pop할 때 마다 stack안에 있는 마지막과 같은지 확인하고 같다면 answer++한다.
 */

function solution(board, moves) {
  let stack = [];
  let answer = 0;
  for (let i = 0; i < moves.length; i++) {
    let pos = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      if (board[j][pos] > 0) {
        let tmp = board[j][pos];
        if (stack[stack.length - 1] === tmp) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(tmp);
        }
        board[j][pos] = 0;
        break;
      }
    }
    // console.log(board, 'stack : ' + stack, '더해진개수 : ' + answer, '없어진 pos :' + pos);
  }
  return answer;
}
console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);

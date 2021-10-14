/*
    라인에 있는 인형 하나씩 들어서 바구니에 넣는다
    바구니에 동일한게 쌓이면 두 개는 없어진다.

    - 인형이 없는 곳에서 집어도 아무일 일어나지 않는다.
    
    2차원 배열 board
    잡는 위치 나열 moves

    터트려진 인형 개수 return

    PseudoCode
    빈 배열들을 stack에 만들어둔다.
    boardStack에 삽입한다.
    for(let i=0; i<board.length)
        if(stack[board.length-i-1][0] > 0)
            stack[i+1].push(stack[board.length-i-1][0])

    answerStack에 삽입한다.
    for(let x of moves)
        stack[x].pop();
        if(answerStack[answerStack.length-1] === x) {
            answerStack.pop();
        } else {
            answerStack.push(x);
        }
*/

function solution(board, moves) {
    let boardStack = Array.from({length:board.length}, () => []);
    let answerStack = [];
    let answer = 0;
    for(let i=0; i<board.length; i++) {
        let k=board.length-1;
        while(board[k][i]) {
            boardStack[i].push(board[k][i]);
            k--;
        }
    }
    // console.log(boardStack)

    for(let move of moves) {
        move = move-1;
        // console.log(move)
        let tmp = boardStack[move].pop();
        // console.log(tmp)
        // 마지막 요소가 같으면 지워준다.
        if(answerStack[answerStack.length-1] === tmp) {
            answerStack.pop();
            answer += 2;
        }
        // undefined일 때는 지나간다.
        else if (tmp === undefined) {
            continue;
        }
        // 마지막 요소가 같지 않을 때는 추가만한다.
        else {
            answerStack.push(tmp);
        }
    }
    // console.log(answerStack)
    return answer;
}
let board = [[0,0,0,0,0],
            [0,0,1,0,3],
            [0,2,5,0,1],
            [4,2,4,4,2],
            [3,5,1,3,1]];

let moves = [1,5,3,5,1,2,1,4];
console.log(solution(board, moves));
/*

    > 문제
    잘 익은 것도 있고, 아직 익지 않은 토마토들도 있다.
    
    보관 후 하루 지나면 익은 토마토들의 인접한 곳에 있는 익지 않은 토마토들은 익은 토마토의 영향을 받아서 익는다.

    인접한 곳은 4방향.
    대각선X. 토마토가 혼자 저절로 익지는 x.

    며칠이 지나면 다 익는가? 최소 일수는? 일부 칸에는 토마토 들어있지 않을수도 있다.

    > 입력
    1은 익은 토마토
    0은 익지 않은 토마토
    -1은 토마토가 들어있지 않은 칸

    > 출력
    토마토 모두 익는 최소 날짜.
    저장될 때부터 모든 토마토가 익어있는 상태면 0을 출력. 모두 익지 못하는 상황이면 -1을 출력.

*/

// FIXME: 틀린 부분 찾자. 제일 아래 코드가 돌아가는 코드.

function solution(board) {
    let answer=0;
    let n=board.length; // 행의 길이
    let m=board[0].length; // 열의 길이
    
    // let dx, dy
    let dx=[-1, 0, 1, 0];
    let dy=[0, 1, 0, -1];
    let dist=Array.from(Array(n), ()=>Array(m).fill(0));
    let queue=[];

    function BFS() {
        while(queue.length) {
            let cur= queue.shift(); // 현재 좌표. current
            // 여기서 퍼져나간다.
            for(let j=0; j<4; j++) {
                let nx=cur[0]+dx[j];
                let ny=cur[1]+dy[j];
                // 경계선 밖으로 나가면 안된다.
                if(nx>=0 && nx<n && ny>=0 && ny<m && board[nx][ny]===0) {
                    // 안익은 토마토일때 뻗어나간다.
                    board[nx][ny]=1;
                    dist[nx][ny]=dist[cur[0]][cur[1]]+1; // 하루걸렸으니까.
                    queue.push([nx, ny]);
                    answer=dist[nx][ny] // 계속 넣어준다. 맨 마지막에 들어간게 답 될테니까.
                }
            }
        }
        // BFS 돌기전에 0레벨 애들을 만든다. 최초의 익어있던 토마토들 좌표를 큐에 넣는다.
        for(let i=0; i<n; i++) {
            for(let j=0; j<m; j++) {
                if(board[i][j]===1) {
                    queue.push([i,j]);
                }
            }
        }
    }
    BFS();
    // 2중 for문 돌면서 board에 0이 있음녀 -1을 리턴해야된다.
    // TODO: 구현해라

    return answer;
}

console.log(solution([[0, 0, -1, 0, 0, 0], [0, 0, 1, 0, -1, 0], [0, 0, -1, 0, 0, 0], [0, 0, 0, 0, -1, 1]])) // 4



// FIXME: 아래는 실행되는 코드. 틀린점 찾아서 고치자.
/*

// 익은 토마토에서 BFS를 실행해야 한다.
// 보기의 경우에는 1행 2열, 3행 5열이 queue에 들어가고 BFS 시작
// 방문한 곳은 다시 가면 안되기 때문에 방문한 곳은 1로 표시해줘야 한다.
function solution(board) {
    let answer = 0;
    let n = board.length;
    let m=board[0].length;
    let dx=[-1, 0, 1, 0];
    let dy=[0, 1, 0, -1];
    let dist=Array.from(Array(n), () => Array(m).fill(0));
    let queue=[];

    function BFS() {
        while(queue.length) {
            let cur =queue.shift();
            for(let j=0; j<4; j++) {
                let nx = cur[0] + dx[j];
                let ny = cur[1] + dy[j];
                if(nx>=0 && nx<n && ny>=0 && ny<m && board[nx][ny] === 0) {
                    board[nx][ny] = 1;
                    dist[nx][ny] = dist[cur[0]][cur[1]]+1;
                    queue.push([nx, ny]);
                    answer=dist[nx][ny];
                }
            }
        }
    }
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(board[i][j] === 1) {
                queue.push([i, j]);
            }
        }
    }
    BFS();

    return answer;
}

console.log(solution([[0, 0, -1, 0, 0, 0], [0, 0, 1, 0, -1, 0], [0, 0, -1, 0, 0, 0], [0, 0, 0, 0, -1, 1]]));


*/
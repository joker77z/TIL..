
// 블러드 필 (어느 부분에서 쫙 퍼져나가면서 구역을 탐색하는 것.)
// 구글링 블러드 필 검색하면 백준에 문제 뜬다. 단지번호 붙이기

function solution(board) {
    //12시부터 시계방향으로 돈다.
    let answer=0;
    let n=board.length;
    let dx=[-1, -1, 0, 1, 1, 1, 0, -1];
    let dy=[0, 1, 1, 1, 0, -1, -1, -1];


    function DFS(x, y) {
        for(let k=0; k<8; k++) {
            let nx = x+dx[k];
            let ny = y+dy[k];
            if(nx>=0 && nx<n && ny<n && ny>=0 && board[nx][ny] === 1) {
                board[nx][ny] =0;
                DFS(nx, ny);
            }
        }
    }

    for(let i=0; i<n; i++) {
        for(let j=0; j<n; j++) {
            if(board[i][j]===1) { // 이미 방문했다면
                board[i][j]=0;
                answer++;
                DFS(i, j);
            }
        }
    }
    return answer;
}

arr = [[1, 1, 0, 0, 0, 1, 0], [0, 1, 1, 0, 1, 1, 0], [0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 1, 1],
[1, 1, 0, 1, 1, 0, 0], [1, 0, 0, 0, 1, 0, 0], [1, 0, 1, 0, 1, 0, 0]]
console.log(solution(arr)) // 5
// 순서.
// 출발점 넘기고
// queue에 넣고
// 그 지점을 체크해준다(1). 벽으로 만들어버린다. 또 안가게.

// 큐는 항상 while문으로 돈다. BFS는.
// 큐를 꺼내고.
// 4방향 탐색하면서
// 경계선 빠져나갔는지 통로인지 벽인지 확인하고
// 갈 수 있다.


// dist[nx][ny]=dist[curr[0]][curr[1]]+1 이부분! // 큐에서 나온애들. 
// 디스턴스 거기에 +1 해야된다.

// 이 문제도 레벨로 풀 수 있다.
// 근데 배열 만들어야 풀 수 있는 문제가 있어서 배워본다.



function solution(board) {
    let answer=0;
    let n=board.length;
    let dx=[-1, 0, 1, 0];
    let dy=[0, 1, 0, -1];
    let dist=Array.from(Array(7), ()=>Array(7).fill(0));

    function BFS(x, y) {
        let queue=[];
        queue.push([x, y]);
        board[x][y]=1;
        while(queue.length) {
            let curr=queue.shift();
            for(let j=0; j<4; j++) {
                let nx=curr[0]+dx[j];
                let ny=curr[1]+dy[j];
                if(nx>=0 && nx<7 && ny>=0 && ny<7 && board[nx][ny]==0) {
                    board[nx][ny]=1;
                    dist[nx][ny] = dist[curr[0]][curr[1]]+1
                    queue.push([nx, ny]);
                }
            }
        }
    }
    BFS(0, 0);
    // 도착한 곳에 못가면 6행6열을 못가면 리턴 -1
    if(dist[6][6]===0) return -1;
    return answer;
}

console.log(solution(
    [[0, 0, 0, 0, 0, 0, 0], 
    [0, 1, 1, 1, 1, 1, 0], 
    [0, 0, 0, 1, 0, 0, 0], 
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 0, 0, 0], 
    [1, 0, 0, 0, 1, 0, 0], 
    [1, 0, 1, 0, 0, 0, 0]])) // 12
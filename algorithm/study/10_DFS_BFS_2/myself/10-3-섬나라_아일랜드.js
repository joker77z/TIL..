/*
    노트에 코딩 후 컴퓨터 코딩 시작.
    8.4 AM 11:00 ~ 11:28
    point: 다음에 다시 풀어보기

    ‣ 문제
    1 : 갈 수 있다.
    0 : 못 간다.
    갈 수 있는 곳들을 하나로 뭉쳐서 섬이 된다. 총 섬의 개수는?

    이 문제의 특징은 대각선이 포함되어 있다.
    대각선은 dx, dy를 선언할 때 방향만 더 추가해주면 되고 큰 다른점은 없다.
    4방향에서 8방향이 된 것 뿐.
*/

function solution(board) {
    // 2차원 배열 일단 dx, dy를 초기화 한다.
    let answer = 0;
    const n = board.length;
    let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
    let dy = [0, 1, 1, 1, 0, -1, -1, -1];
    
    function DFS(x, y) {
        // point: 8방향으로 뻗어나간다.
        for(let i=0; i<8; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            // 8방향으로 한번씩 뻗어보다가 1을 발견했다. 근데 그 1은 board안에 있어야 한다.
            // point: x, y를 쓰지 말고 nx, ny를 써야하는것을 잊지말자.
            if(nx<n && nx>=0 && ny<n && ny>=0 && board[nx][ny] === 1) {
                board[nx][ny] = 0; // 다시는 못가게 한다.
                DFS(nx, ny);
            }
        }
        
    }

    // 2중 for문을 작성해서 DFS에 들어갈 수 있는 1을 찾을 때마다
    // answer++에 해주면서 해당 영역을 다 0으로 만든다.

    for(let i=0; i<n; i++) {
        for(let j=0; j<n; j++) {
            if(board[i][j] === 1) { // 갈수있으면
                board[i][j] = 0; // 앞으로 못가게 만들고
                answer++;
                DFS(i, j);
            }
        }
    }
    return answer;
}

console.log(solution([[1, 1, 0, 0, 0, 1, 0], [0, 1, 1, 0, 1, 1, 0], [0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0], [1, 0, 0, 0, 1, 0, 0], [1, 0, 1, 0, 1, 0, 0]]
    )) // 5
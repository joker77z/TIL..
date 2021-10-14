/*
    갈 수 있는 방법의 수 구하기.
    
    PseudoCode
    1. 그래프를 만든다.
        dx, dy 방향 배열도 만든다.
    2. BFS문
        if 
            좌표 7,7 에도착했을 때 answer++;
        else
            for(i=0 ~ i<4) // 4방향
                이동한다.
                if 가능하다.
                    DFS문 돈다.
            
*/

function solution(arr) {
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];
    let answer = 0;

    function DFS(x, y) {
        if (x === arr.length - 1 && y === arr.length - 1) {
            answer++;
        } else {
            for (let i = 0; i < 4; i++) {
                let nx = x + dx[i];
                let ny = y + dy[i];
                // console.log(nx, ny)
                // console.log(arr[nx][ny])

                // 해당 지역으로 갈 수 있다면
                if (nx >= 0 && nx < arr.length && ny >= 0 && ny < arr.length && arr[nx][ny] !== 1) {
                    arr[nx][ny] = 1;
                    DFS(nx, ny);
                    arr[nx][ny] = 0;
                }
            }
        }
    }
    arr[0][0] = 1;
    DFS(0, 0);
    return answer;
}
let arr = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0]
];
console.log(solution(arr));
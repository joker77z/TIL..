// try1 : 한번에 풀었다.!
function solution(arr) {
    let answer = 0;
    let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
    let dy = [0, 1, 1, 1, 0, -1, -1, -1];
    let flag = false;

    function BFS(x, y) {
        // 1을 만나면
        for (let k = 0; k < 8; k++) {
            let nx = x + dx[k];
            let ny = y + dy[k];
            if (nx >= 0 && nx < arr.length && ny >= 0 && ny < arr.length && arr[nx][ny] === 1) {
                arr[nx][ny] = 0;
                BFS(nx, ny);
            }
        }
    }

    function DFS(x, y) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[i][j] === 1) {
                    BFS(i, j);
                    console.log(arr)
                    answer++;
                }
            }
        }
    }
    arr[0][0] = 0;
    DFS(0, 0);
    return answer;
}

let arr = [
    [1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0]
];

console.log(solution(arr));
function solution(arr) {
    let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
    let dy = [0, 1, 1, 1, 0, -1, -1, -1];
    let answer = 0;
    let queue = [];

    function BFS(i, j) {
        arr[i][j] = 0;
        queue.push([i, j]);
        while (queue.length) {
            let [x, y] = queue.shift();
            for (let i = 0; i < 8; i++) {
                for (let j = 0; j < 8; j++) {
                    let nx = x + dx[i];
                    let ny = y + dy[j];
                    if (nx >= 0 && nx < arr.length && ny >= 0 && ny < arr.length && arr[nx][ny] === 1) {
                        arr[nx][ny] = 0;
                        queue.push([nx, ny]);
                    }
                }
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] === 1) {
                BFS(i, j);
                answer++;
            }
        }
    }
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
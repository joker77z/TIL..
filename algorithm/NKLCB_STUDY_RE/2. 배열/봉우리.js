function solution(matrix) {
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];
    let cnt = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            let flag = true;
            for (let k = 0; k < 4; k++) {
                let nx = i + dx[k];
                let ny = j + dy[k];
                if (nx >= 0 && nx < matrix.length && ny >= 0 && ny < matrix.length && matrix[nx][ny] > matrix[i][j]) {
                    flag = false;
                    break;
                }
                console.log(i, j, matrix[i][j])
            }
            if (flag) {
                cnt++;
            }
        }
    }
    return cnt;
}
console.log(solution([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2]
])); // 10
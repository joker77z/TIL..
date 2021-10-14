/*
    최단거리
    5x5크기
    1행1열에서 5행 5열.
    4방향

    1이 통로다.

    최소거리 return
    ❗️ 도달하지 못하면 -1 return

    최소거리니까 BFS로 풀자.
*/
function solution(maps) {
    let answer = 0;
    let queue = [];
    let n = maps.length;
    let m = maps[0].length;
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];
    // let dist = Array.from({length:maps.length+1}, () => Array.from({length:maps.length+1}, () => 100001));
    let dist = Array.from({
        length: maps.length
    }, () => Array(maps.length).fill(0));
    maps[0][0] = 0;
    dist[0][0] = 1;
    queue.push([0, 0]);
    while (queue.length) {
        answer++;
        let [x, y] = queue.shift();
        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1) {
                maps[nx][ny] = 0;
                dist[nx][ny] = dist[x][y] + 1;
                console.log(dist)
                console.log(nx, ny)
                queue.push([nx, ny]);
            }
        }
    }
    if (dist[n - 1][m - 1] === 0) {
        return -1;
    } else {
        return dist[n - 1][m - 1];
    }
}
maps = [
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1]
]
// maps = [
//     [1, 0, 1, 1, 1],
//     [1, 0, 1, 0, 1],
//     [1, 0, 1, 1, 1],
//     [1, 1, 1, 0, 0],
//     [0, 0, 0, 0, 1]
// ]
console.log(solution(maps));
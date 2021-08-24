/*
    상하좌우보다 큰 곳 봉우리.
    봉우리가 몇개인가?

    Pseudo Code
    dx = [0, 1, 0, -1]
    dy = [1, 0, -1, 0]

    cnt = 0

    for(let i=0 ~ arr.length)
        for(let j=0 ~ arr.length)
            4방향 모두 확인한다.
            for(let i=0 ~ i=3)
                한쪽 방향을 확인한다.
                if(한쪽 방향으로 이동한 곳이 현재보다 크다면 여긴 봉우리가 아니다.)
                    break;
            cnt++
*/

function solution(arr) {
    let dx = [0, 1, 0, -1];
    let dy = [-1, 0, 1, 0];
    let ans = 0;

    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr.length; j++) {
            let flag = true;
            for(let k=0; k<4; k++) {
                let nx = i + dx[k];
                let ny = j + dy[k];
                if(nx>=0 && nx<arr.length && ny>=0 && ny<arr.length && arr[nx][ny] >= arr[i][j]) {
                    flag = false;
                    break;
                }
            }
            if(flag) {
                ans++;
            }
        }
    }
    return ans;
}

console.log(solution([[5, 3, 7, 2, 3], 
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2]]))
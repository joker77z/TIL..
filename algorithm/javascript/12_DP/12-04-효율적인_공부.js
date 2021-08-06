
// TODO: 안돌아간다.
function solution(time, r) {
    let answer = 0;
    let m = time.length;
    let dy = Array.from({length:m}, () => 0);
    time.sort((a, b) => a[1] - b[1])
    // dy[0] = 5;

    for(let i=0; i<m; i++) {
        dy[i]=time[i][2];
        for(let j=i-1; i>=0; j--) {
            if(time[j][1] + r <= time[i][0] && dy[j]+time[i][2]>dy[i]) {// 끝나는 시간 + 휴식시간보다 시작시간이 더 클 때
                dy[i]=dy[j]+time[i][2];
            }
        }
        answer = Math.max(dy[i], answer)
    }
    return answer
}

console.log(solution([[3, 5, 20], [4, 7, 16], [1, 2, 5], [11, 13, 7], [9, 10, 6]], 2)) // 28
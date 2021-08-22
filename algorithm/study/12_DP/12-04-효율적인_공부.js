
function solution(times, r) {
    let answer = 0
    times.sort((a, b) => a[1] - b[1])
    let dy = new Array(times.length).fill(0)

    for (let i = 0; i < dy.length; i++) {
        dy[i] = times[i][2]
        for (let j = i - 1; j >= 0; j--) {
            if (times[j][1] + r <= times[i][0] && dy[j] + times[i][2] > dy[i]) {
                dy[i] = dy[j] + times[i][2]
            }
        }
        answer = Math.max(dy[i], answer)
    }
    return answer
}

console.log(solution([[3, 5, 20], [4, 7, 16], [1, 2, 5], [11, 13, 7], [9, 10, 6]], 2)) // 28
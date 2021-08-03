// 8.3 9:16 ~ 9:27
// 다음에 꼭 다시 풀 것.
// ❗️ else에 return부분 이유에 대해 정확히 이해 되지 않음.

// 메모이제이션을 위해 1. 2차원 배열 초기화
// 제일 밑에 도착했을 때 경우의 수 1개씩을 더한다. n===r, r===0
// 2차원 배열에서 이미 가지고 있는 값이면 
// 2차원 배열에 해당 값을 하나씩 저장해주면서 return 해준다.
// 마지막에 answer에 DFS(n, r)값을 받는다.

// 조합의 개수(조합수)를 세라.
// nCr = n-1Cr-1 + n-1Crn
function solution(n, r) {
    let answer = 0;
    let dy = Array.from({length:n+1}, () => Array(r+1).fill(0))
    function DFS(n, r) {
        if(dy[n][r]>0) return dy[n][r]; // 이미 가지고 있는 값이라면
        if(n===r || r===0) return 1; // 마지막 레벨에 도달.
        else {
            return dy[n][r] = DFS(n-1, r-1) + DFS(n-1, r);
        }
    }
    answer = DFS(n, r)
    return answer;
}

// console.log(solution(5, 3))
console.log(solution(33, 19)) // 818809200
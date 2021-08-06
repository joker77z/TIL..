// point: 플루이드 워셜은 3중 for문 외운다 생각하면 편하다.
//        모든 정점에서 정점으로 가는 경로 있는지 보고싶다.
//        어떤 정점으로 어떤정점 이런 판단하는 문제들.
// - 플루이드 워셜은 냅색 알고리즘이다. 이렇게 생각하면 된다.
// - 백준: 키 순서(플루이드 워셜문제) 풀어봐라.

function solution(n, edges) {
    let answer = 0;
    let dist=Array.from(Array(n+1), ()=>Array(n+1).fill(1000)); // 직행으로 못가는 경우 1000넣어줬다. 교체해주기 위해 큰 값 넣어준 것.
    for(let i=1; i<=n; i++) dist[i][i]=0;
    for(let [a, b, c] of edges) {
        dist[a][b]=c;
    }
    for(let k=1; k<=n; k++) {
        for(let i=1; i<=n; i++) {
            for(let j=1; j<=n; j++) {
                // 기존 값보다 작으면 교체
                dist[i][j] = Math.min(dist[i][j], dist[i][k]+dist[k][j]);
            }
        }
    }
    console.log(dist)
    return answer;
}

console.log(solution(5, [[1, 2, 6], [1, 3, 3], [3, 2, 2], [2, 4, 1], [2, 5, 13], [3, 4, 5], [4, 2, 3], [4, 5,
    7]]))
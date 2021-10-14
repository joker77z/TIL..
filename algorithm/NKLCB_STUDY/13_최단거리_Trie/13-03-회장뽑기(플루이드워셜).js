function solution(n, edges) {
    //모든 회원과 다 연결되어있으면 거리가 1
    let answer = [];
    let dist=Array.from(Array(n+1), ()=>Array(n+1).fill(1000)); // 직행으로 못가는 경우 1000넣어줬다. 교체해주기 위해 큰 값 넣어준 것.
    let score = Array.from({length:n+1}, ()=>0) // 최대값 여기다가 집어넣는다. 각 사람의 점수.
    
    //TODO: for
    for(let i=1; i<=n; i++) dist[i][i]=0;
    for(let [a, b] of edges) {
        dist[a][b]=1;
        dist[b][a]=1;
    }
    for(let k=1; k<=n; k++) {
        for(let i=1; i<=n; i++) {
            for(let j=1; j<=n; j++) {
                dist[i][j]=Math.min(dist[i][j], dist[i][k]+dist[k][j]);
            }
        }
    }
    let PS=1000; // 회장 구하기

    for(let i=1; i<=n; i++) {
        for(let j=1; j<=n; j++) {
            if(i===j) continue;
            score[i] = Math.max(score[i], dist[i][j]);
        }
        PS = Math.min(PS, score[i]);
    }
    answer.push(PS);
    // 회장이 될 애들 출력. 후보 수 출력
    let cnt=0;
    for(let i=1; i<=n; i++) {
        if(score[i]===PS) cnt++;
    }
    answer.push(cnt)

    return answer;
}

console.log(solution(5, [[1, 2], [2, 3], [3, 4], [4, 5], [2, 4], [5, 3]])) // [2, 3]
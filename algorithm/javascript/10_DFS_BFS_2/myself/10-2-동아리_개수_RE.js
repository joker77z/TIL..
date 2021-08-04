/*
    노트에 코딩 후 컴퓨터 코딩 시작.
    8.4 AM 10:33 ~ 10:44

    ❗️ 꼭 다시 풀기

    ‣ 문제
    동아리 개수 구하기.
    7명이 있는데 서로수인 인원들인 1~5명은 하나의 동아리 나머지 6, 7 따로 동아리 1개씩해서
    총 3개의 동아리가 나와야 한다.
*/

function solution(n, edges) {
    let answer = 0;
    // 1. 빈 배열 n+1 만들기.
    let graph=Array.from({length:n+1}, ()=>Array());
    // 2. 체크 배열만들기 n+1개. 0으로.
    let ch=Array.from({length:n+1}, ()=>0);
    // edges에 있는 숫자 방향들을 그래프에 정리.
    for(let [a, b] of edges) {
        graph[a].push(b);
        // 양방향이기 때문에. 반대도추가.
        graph[b].push(a);
    }
    
    // TODO: 여기 헤깔렸다. 다시공부할 것.
    function DFS(v) {
        // for(let i=0; i<v; i++) {
        //     for(let j=0; j<v; j++) {
        //         if(ch[v])
        //         graph[i][j]
        //     }
        // }

        // graph[1]에 들어있는 2, 3, 4를 순차적으로 하나씩 빼낸다. 다음 DFS일 때도. 다음 DFS일 때도 가는 방향에 맞게 쭉 간다.
        for(let nv of graph[v]) {
            if(ch[nv]===0) { // 가기전에 이미 갔었는지 체크한다. 안갔으면 갈 수 있다.
                ch[nv]=1; // 갔다고 체크.
                DFS(nv);
            }
        }
    }

    // 시작할 노드를 정해주고 쫙 퍼져나가면서 끝날 때까지 갔을 때 answer++;
    // 이미 갔으면 체크배열에 1로 체크하면서 다시 못가게. 그러면 1~5까지 한번에가고 6, 7 갈 것이다.
    // 노드 1부터 시작! n까지 체크할꺼다.
    for(let i=1; i<=n; i++) {
        if(ch[i]===0) { // 아직 방문을 안했다면 시작할 수 있다.
            ch[i]=1;
            answer++;
            DFS(i);
        }
    }

    return answer;
}


console.log(solution(7, [[1, 2], [2, 3], [1, 4], [1, 5]])) // 3
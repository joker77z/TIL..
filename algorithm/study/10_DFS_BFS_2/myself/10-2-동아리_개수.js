/*
    노트에 코딩 후 컴퓨터 코딩 시작.
    8.4 AM 1:45 ~ 1:54

    ‣ 문제
    동아리 개수 구하기.
    7명이 있는데 서로수인 인원들인 1~5명은 하나의 동아리 나머지 6, 7 따로 동아리 1개씩해서
    총 3개의 동아리가 나와야 한다.
*/

function solution(n, edges) {
    let answer = 0;
    // 그래프 만들기
    let graph = Array.from({length:n+1}, () => Array());
    // 체크 배열 만들기
    let ch = Array.from({length:n+1}, ()=>0);
    // 만든 그래프에 각 시작 노드별 경로 넣어주기
    for(let [a, b] of edges) {
        graph[a].push(b);
        graph[b].push(a);
    }
    function DFS(v) {
        // i가 들어오면 경로를 따라 반복 탐색을 시작한다. 깊숙히
        // 그래프를 이용한다.

        for(let nv of graph[v]) {
            if(ch[nv] === 0){ // 아직 방문하지 않았다면
                ch[nv] = 1; //방문처리하고
                DFS(nv);
            }
        }
    }
    // DFS에 들어가기 전에 answer를 여기서 더해도 될 것 같다.
    // DFS는 경로 쭉 따라가는 것만 해주고 끝나는 값을 주지 않아도 될듯.
    for(let i=1; i<=n; i++) {
        if(ch[i]===0){ // 아직 방문하지 않았다면
            ch[i]=1; // 방문처리하고
            answer++; // 여기서 시작할 때 더하고
            DFS(i);
        }
    }

    return answer;
}


console.log(solution(7, [[1, 2], [2, 3], [1, 4], [1, 5]])) // 3
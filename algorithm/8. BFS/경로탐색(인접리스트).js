/*
    POINT: 정점개수가 많을 때는 인접 리스트

    정첨개수가 천개, 많개 
    for문으로 모든 정점을 확인할 수 없다.
*/

function solution(arr, n) {
    let answer = 0;
    let graph = Array.from({length: n+1}, () => Array());
    console.log(graph)
    let check = Array.from({length: n+1}, () => 0);
    let path = []; // 경로 봐보자.

    // 갈 수 있는 노드들 graph에 더해주기. 인접리스트 만든다.
    for(let [a, b] of arr) {
        graph[a].push(b);
    }
    console.log(graph)

    function BFS(v) {
        if(v===n) {
            answer++;
            console.log(path)
        }
        else {
            for(let i=0; i<graph[v].length; i++) {
                if(check[graph[v][i]]===0) {
                    check[graph[v][i]] = 1;
                    path.push(graph[v][i]);
                    //BFS에 정점을 넘겨준다. 그 정점에서 다시 진행해야되니까.
                    BFS(graph[v][i]);
                    path.pop();
                    check[graph[v][i]] = 0;
                }
            }
        }
    }
    path.push(1);
    check[1] = 1;
    BFS(1);
    return answer;
} 
arr = [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5]
];
console.log(solution(arr, 5));
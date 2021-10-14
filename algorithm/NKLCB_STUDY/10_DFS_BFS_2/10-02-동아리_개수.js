// 꼭 내가 먼저 그래프를 그려봐라.
// 같은 동이리라 그랬으니까 쌍방이다.


function solution(n, edges) {
    let answer = 0;
    let graph = Array.from(Array(n+1), () => Array());
    let ch = Array.from({length:n+1}, ()=>0)
    for(let [a, b] of edges) {
        graph[a].push(b);
        //무방향이라 한줄추가
        graph[b].push(a);
    }
    
    function DFS(v) {
        for(let nv of graph[v]) {
            if(ch[nv]===0) {
                ch[nv]=1;
                DFS(nv);
            }
        }
    }
    
    for(let i=1; i<=n; i++) {
        if(ch[i]===0) {
            answer++;
            ch[i]=1;
            DFS(i);
        }
    }

    return answer;
}

console.log(solution(7, [[1, 2], [2, 3], [1, 4], [1, 5]])) // 3
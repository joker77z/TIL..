
// 만약 그래프의 노드 개수가 10000이면 내가 인접행렬로 풀을라면
// 10000 x 10000번 배열을 만들어야되고
// 1부터 10000까지 돌아봐야 한다.
// 굉장히 비효율적이다.

// 코딩테스트에서 정점개수가 100개이하면 괜찮다.
// 근데 100개 넘으면 다음에 배우는 인접리스트 쓴다.

// graph(인접행렬)을 n+1로 잡아야 한다.
function solution(n, edges) {
    let answer=0;
    let graph=Array.from(Array(n+1), () => Array(n+1).fill(0));
    let ch=Array.from({length:n+1}, ()=>0);
    for(let [a, b] of edges) {
        graph[a][b]=1;
    } // 인접행렬 완성!
    
    function DFS(v){ // v라는 vortext는 1이다. 정점!
        if(v===n) {
            // 마지막 종착지로 왔다.
            answer++;
        }
        else {
            for(let i=1; i<=n; i++) { // v라는 정점에서 i라는 1~n까지 도는 정점까지 갈 수 있는지 확인.
                if(graph[v][i]===1 && ch[i]===0) {// 갈수있으면 1
                    // v정점에서 i정점으로 갈 수 있다.
                    ch[i]=1; // 방문체크.
                    DFS(i); // 다음 정점은 i이다.
                    ch[i]=0; // 백할 때 체크를 풀어야 된다.
                }
            }
        }
    }
    ch[1]=1; // 1번정점 들렸었다 체크.
    DFS(1);
    return answer;
}

let arr =  [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]]

console.log(solution(5, arr))

// 6

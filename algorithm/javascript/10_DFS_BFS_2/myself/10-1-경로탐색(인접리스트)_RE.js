// 8.4 AM 1:14 ~ 1:20

// 경로
// [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]]

// 노드 개수이자 목적지 N
// 5

// 문제
// N으로 갈 수 있는 경우의 수

function solution(n, edges) {
    let answer = 0;
    let graph = Array.from({length:n+1}, () => Array()); // []을 n+1개 만들어서 1부터 n까지 경로 보관할 수 있는 배열.
    let ch = Array.from({length:n+1}, () => 0); // 체크배열. n+1개.
    // edges에 있는 값들을 graph에 넣는다.
    for(let [a, b] of edges) {
        graph[a].push(b);
    }
    function DFS(v) {
        if(v===n) { // DFS 종료조건
            answer++;
        }
        else { // 반복조건
            // graph에 있는 값들을 하나씩 꺼내서 다음 노드로 이어져서 구할 수 있게 한다.
            // 이미 간 곳은 가지 않도록 하면서 node로 향하게 한다.
            for(let nv of graph[v]){
                if(ch[nv] === 0) { // 아직 방문하지 않은 노드라면
                    ch[nv] = 1; // 방문하면서 다음에 방문하지 않게 방문처리를 하고
                    DFS(nv); // 다음 DFS로 정진한다.
                    ch[nv] = 0; // 돌아올 때 다시 방문처리를 풀어줘서 다음에는 셀 수 있게 한다.
                }
            }
        }
    }

    ch[1] = 1;
    DFS(1);
    return answer;
}

console.log(solution(5, [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]])) // 6
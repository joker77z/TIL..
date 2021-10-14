/*
    POINT: 정점개수가 적을 때는 인접행렬로 가능!
    
    노드 개수가 적을 때.
    다음 경로탐색 문제는 노드개수가 많을 때다.
*/

// graph만드는 방법 보고
function solution(arr, n) {
    // arr하나씩 받으면서 graph로 만든다.
    let answer = 0;
    let graph = Array.from({
        length: n + 1
    }, () => Array.from({length: n+1}, () => 0));
    let check = Array.from({length:n+1}, () => 0);
    let path = [];
    // POINT: 간선정보 받아서 배열로 만드는 방법 외우기!
    for(let [a, b] of arr) {
        graph[a][b] = 1;
    }

    function DFS(v) {
        if(v===n) {
            answer++;
            console.log(path)
        }
        else {
            for(let i=1; i<=n; i++) {
                if(check[i]===0 && graph[v][i] === 1) {
                    check[i] = 1;
                    path.push(i);
                    DFS(i);
                    path.pop();
                    check[i] = 0;
                }
            }
        }
    }
    // 경로를 보려고 테스트용 추가
    path.push(1);

    // POINT: 노드1로 시작하기 때문에 node1은 이미 방문한 상태.
    check[1]= 1;
    DFS(1);
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


// try1 실패
// function solution(arr, n) {
//     // arr하나씩 받으면서 graph로 만든다.
//     let graph = Array.from({
//         length: n + 1
//     }, () => Array.from({length: n+1}, () => 0));
//     console.log(graph);

//     for (let i = 1; i <= arr.length; i++) {
//         console.log(arr[i-1])
        
//         for (let j = 1; j <= 2; j++) {
//             if(arr[i-1][j-1]) {
//                 console.log(arr[i-1][j-1])
//                 console.log(graph)
//                 graph[i][j] = 1;
//             } 
//         }
//     }
//     console.log(graph);
// }
// arr = [
//     [1, 2],
//     [1, 3],
//     [1, 4],
//     [2, 1],
//     [2, 3],
//     [2, 5],
//     [3, 4],
//     [4, 2],
//     [4, 5]
// ];
// console.log(solution(arr, 5));
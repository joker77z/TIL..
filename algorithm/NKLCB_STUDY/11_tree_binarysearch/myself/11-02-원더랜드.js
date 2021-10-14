/*
    8.4 PM 11:00 ~ 11:20
    
    ‣ 문제
    모든 도시 연결.
    최소 유지보수 비용.

    n: 도시 개수
    edges: A, B, C 순서쌍. 
    A-B 연결 / C 유지보수 비용
*/

function solution(n, edges) {
    let answer = 0;
    let unf = Array.from({length:n+1}, (v, i) => i);
    function Find(v) {
        if(v===unf[v]) return v;
        else return Find(unf[v]);
    }
    function Union(a, b) {
        let fa=Find(a);
        let fb=Find(b); 
        if(fa!==fb) unf[fa]=fb;
    }

    // 최소비용으로 구해달라 했으니 오름차순으로 정렬하고 다를 때 더해주자.

    // TODO: 왜 가중치 오름차순?????
    edges.sort((a, b) => a[2] - b[2])

    for(let [a, b, c] of edges) {
        let fa = Find(a);
        let fb = Find(b);
        if(fa!==fb) {
            answer += c;
            unf[fa] = fb;
        }
    }
    return answer;
}

console.log(solution(9, [[1, 2, 12], [1, 9, 25], [2, 3, 10], [2, 8, 17], [2, 9, 8], [3, 4, 18], [3, 7, 55], [4, 5, 44], [5, 6, 60], [5, 7, 38], [7, 8, 35], [8, 9, 15]])) // 196
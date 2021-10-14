/*
    문제
    도로 유지보수 재정 바닥.
    모든 도시를 서로 연결하면서 최소 유지보수 비용 들도록 하고
    나머지 도로는 폐쇄.

    즉, 최소 비용으로 모든 도시를 연결해라.

    n : 도시 개수
    edges : A, B, C 순서쌍. A-B 연결 유지보수 비용은 C.
*/

function solution(n, edges) {
    let answer = 0;
    let unf = Array.from({
        length: n + 1
    }, (v, i) => i);

    function Find(v) {
        console.log(v)
        if (v === unf[v]) return v;
        else return Find(unf[v]);
    }

    function Union(a, b) {
        let fa = Find(a);
        let fb = Find(b);
        if (fa !== fb) unf[fa] = fb;
    }
    //오름차순이니까
    edges.sort((a, b) => a[2] - b[2]); // 가중치값들에 의해 오름차순.
    // POINT: 오름차순 하는 이유? : 최소 비용을 위해

    //간선개수돌면된다.
    console.log(edges)
    for (let [a, b, c] of edges) {
        console.log(a)
        console.log(b)
        console.log(Find(a))
        console.log(Find(b))
        let fa = Find(a);
        let fb = Find(b);
        if (fa !== fb) { // 다를때만 answer에다가 간선값 비용 누적.
            answer += c;
            // unf 바로
            unf[fa] = fb;
        }
    }
    return answer;
}

console.log(solution(9, [
    [1, 2, 12],
    [1, 9, 25],
    [2, 3, 10],
    [2, 8, 17],
    [2, 9, 8],
    [3, 4, 18],
    [3, 7, 55],
    [4, 5, 44],
    [5, 6, 60],
    [5, 7, 38],
    [7, 8, 35],
    [8, 9, 15]
])) // 196
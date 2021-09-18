function solution(m) {
    let answer = [];
    function DFS(v, m) {
        if(v>m) return;
        else {
            DFS(2*v, m);
            DFS(2*v+1, m);
            answer.push(v);
        }
    }
    let v = 1;
    DFS(v, m);
    return answer;
} 
console.log(solution(7));
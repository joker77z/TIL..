function solution(m) {
    let answer = [];
    function DFS(v, m) {
        if(v>m) return;
        else {
            answer.push(v);
            DFS(2*v, m);
            DFS(2*v+1, m);
        }
    }
    let v = 1;
    DFS(v, m);
    return answer;
} 
console.log(solution(7));
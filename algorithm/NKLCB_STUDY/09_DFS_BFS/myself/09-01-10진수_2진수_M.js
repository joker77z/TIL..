function solution(L) {
    let answer = [];

    function DFS(v) {
        if(v/2 === 0) {
            return;
        } else {
            let tmp = parseInt(v/2)
            DFS(tmp);
            answer.push(v%2)
        }
    }

    DFS(L);
    return answer.join('');
}


console.log(solution(11));
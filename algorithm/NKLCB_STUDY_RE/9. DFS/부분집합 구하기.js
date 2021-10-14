function solution(num) {
    let answer = [];
    let tmp = [];

    function DFS(L) {
        if (L === num + 1) {
            if (tmp.length !== 0) answer.push(tmp.slice());
        } else {
            tmp.push(L);
            DFS(L + 1);
            tmp.pop();
            DFS(L + 1)
        }
    }
    DFS(1)
    return answer;
}
console.log(solution(3));
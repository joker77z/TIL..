function solution(m) {
    let answer = [];
    let tmp = [];
    function DFS(v, m) {

        // FIXME: 왜 이렇게 하면 안될까?
        // if(v === m+1 && tmp.length>0) {

        // FIXME: tmp.slice() 해야하는 이유?
        // 그냥 answer.push(tmp) 하면 왜안되지.

        if(v === m+1) {
            if(tmp.length>0) answer.push(tmp.slice());
        }
        else {
            tmp.push(v);
            DFS(v+1, m);
            tmp.pop();
            DFS(v+1, m);
        }
    }
    let v = 1;
    DFS(v, m);
    return answer;
} 
console.log(solution(3));
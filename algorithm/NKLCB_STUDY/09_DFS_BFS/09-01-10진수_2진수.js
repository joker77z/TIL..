function solution(n) {
    let answer = 0;
    let tmp = [];

    function DFS(n) {
    if(n==0) return;
    else {
        DFS(parseInt(n/2));
        tmp.push(n%2);
        }
    }
    DFS(n);
    console.log(tmp) // 1,0,1,1
    
    for(let i=0; i<tmp.length; i++) {
        answer = answer*10+tmp[i];
    }
    return answer;
}


console.log(solution(11));
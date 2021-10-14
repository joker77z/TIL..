/*
    1부터 n까지가 첫번째.
    조합 이용해서 nCr에서 n-1Cr=0 ~ n-1Cr-1까지 더한다.
    
    n = 4라고 가정했을 때 조합수를 이용해서 계산한다고 하고
    1, 3, 3, 1과 1, 2, 3, 4(n=1 ~ 4) 수를 곱해서 16이 될때까지 구한다.

    1. [1, 3, 3, 1]을 구해서 먼저 배열에 넣어놓는다.
    2. DFS를 DFS(0, 0)로 호출한다.
    3. DFS내에서 순열을 만든다. 1부터 4까지 숫자를 반복해서 만들어보면서 final과 sum값이 같은지 비교

*/

function solution(n, target) {
    let compareArr = [];
    let answer = [];
    let realAnswer = [];
    let check = Array.from({length: 11}, ()=>0)
    let flag = 0;
    function compare(n, r) {
        if(n===r || r===0) return 1;
        else return compare(n-1, r-1) + compare(n-1, r);
    }
    function DFS(L, sum) {
        if(flag) return;
        console.log(sum===target, sum, target, L===n, L, n, answer)
        if(L===n && sum===target) {
            console.log(answer);
            realAnswer = answer.slice();
            flag = 1;
        }
        else {
            for(let i=1; i<=n; i++) {
                if(check[i] === 0) {
                    check[i] = 1;
                    answer[L] = i; // answer.push(i)
                    DFS(L+1, sum+(compareArr[L]*answer[L]));
                    // answer.pop()
                    check[i] = 0;
                }
            }
        }
    }
    for(let i=0; i<n; i++) {
        compareArr.push(compare(n-1, i));
    }
    console.log(compareArr)
    DFS(0, 0);
    return realAnswer.join(' ');
} 
console.log(solution(4, 16));
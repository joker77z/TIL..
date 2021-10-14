function solution(n, target) {
    // 1. 조합의 수를 이용해서 n개일 때 배열을 만든다.
    let compareArr = [];
    let tmpAnswer = [];
    let answer = [];
    let check = Array.from({length: n+1}, () => 0);
    let flag = 0;
    function compare(n, r) {
        // 경우의 수가 1일 때
        if(n===r || r===0) return 1;
        else {
            return compare(n-1, r-1) + compare(n-1, r);
        }
    }
    // 2. 조합의 개수와 기존숫자들 4개를 곱했을 때 sum값으로 target값이 나오면 return;
    function DFS(L, sum) {
        if(flag) return;
        console.log()
        if(L===n && sum === target) {
            answer = tmpAnswer.slice();
            flag = 1;
        }
        else {
            for(let i=1; i<=n; i++) {
                if(check[i] === 0) {
                    check[i] = 1;
                    tmpAnswer.push(i);
                    DFS(L+1, sum+(tmpAnswer[L] * compareArr[L]));
                    console.log(tmpAnswer[L], compareArr[L])
                    tmpAnswer.pop();
                    check[i] = 0;
                }
            }
        }
    }
    for(let i=0; i<n; i++) {
        compareArr[i] = compare(n-1, i);
        console.log(compareArr)
    }
    DFS(0, 0);
    return answer.join(' ');
} 
console.log(solution(4, 16));
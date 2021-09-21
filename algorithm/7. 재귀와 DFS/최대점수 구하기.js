/*
    N개의 문제
    
    [얻는 점수, 걸리는 시간]

    제한 시간안에 최대점수 return

    어떤 알고리즘을 대입해야할까 생각부터.
    제한된 시간안에 경우의 수들을 거치면서 최대값을 찾는문제.
    완전탐색으로 할 수 있을까? for문으로 풀었을 때, 안풀었을 때 각자 더하면서? 어렵다.
*/

function solution(maxTime, problems) {
    let answer = Number.MIN_SAFE_INTEGER;
    let n = problems.length;
    function DFS(L, sumTime, sumPoint) {
        if(L===n) {
            if(sumTime<=maxTime) {
                answer = Math.max(answer, sumPoint);
                console.log(answer)
            }
        }
        else {
            DFS(L+1, sumTime+problems[L][1], sumPoint+problems[L][0])
            DFS(L+1, sumTime, sumPoint)
        }
    }
    DFS(0, 0, 0);
    return answer;
} 

console.log(solution(20, [[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]]));


// let ps=[10, 25, 15, 6, 7];
// let pt=[5, 12, 8, 3, 4]
// console.log(solution(20, ps, pt));
/*
    개수 가장 적게 return

    각 단위 동전 무제한 사용가능.
*/

function solution(coins, money) {
    let answer = Number.MAX_SAFE_INTEGER;
    function DFS(L, sum) {
        if(sum === money) {
            answer = Math.min(L, answer);
        } else if (sum > money) {
            return;
        } else {
            for(let i=0; i<coins.length; i++) {
                DFS(L+1, sum + coins[i]);
            }
        }
    }
    DFS(0, 0);
    return answer;
} 
console.log(solution([1, 2, 5], 15));
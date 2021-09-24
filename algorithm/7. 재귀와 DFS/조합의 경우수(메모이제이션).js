/*
    주어진 공식을 사용하는데 재귀를 사용해서 조합수를 구해라.
    조합은 r이 0일 때 ex) 2C0
    n===r일 때 ex) 2===2
    이 두가지 경우의 수는 1을 리턴한다.
    
    총 경우의 수 return

    ❗️ 그런데 33, 19를 넣으면 엄청난 재귀가 뻗으면서 계산이 안된다.
    메모이제이션을 사용해야 한다.

*/

function solution(n, r) {
    let check = Array.from({length:n+1}, () => Array.from({length: r+1}, () => 0))
    function DFS(n, r) {
        if(check[n][r]>0) return check[n][r];
        if(n===r || r===0) return 1;
        else {
            return check[n][r] = DFS(n-1, r-1) + DFS(n-1, r);
        }
    }
    answer = DFS(n, r);
    return answer;
} 
// console.log(solution(5, 3)); // 10
console.log(solution(33, 19)); // 818809200
/*
    1, 3, 5, 6, 7, 10
    두 부분집합으로 나누고 합이 서로 같은 경우가 존재하면 "yes"
    두 집합은 겹치지 않는 서로소 집합.

    ex
    {1, 3, 5, 6, 7, 10}을 {1, 3, 5, 7} = {6, 10} 으로 구분하면 16이 존재한다.
*/

function solution(nums) {
    let answer = "NO";
    let n = nums.length;
    let total = nums.reduce((acc, v) => acc+v, 0);
    let sum = 0;
    function DFS(L, sum) {
        if(L===n) { // 모든 원소 개수를 다 체크해봤을 때
            if((total-sum)===sum) {
                answer = "YES";
                return;
            }
        }
        else {
            // 원소 더한 것을 다음 DFS에게 넘긴다.
            DFS(L+1, sum + nums[L]);
            DFS(L+1, sum);
        }
    }
    DFS(0, 0);
    return answer;
} 
console.log(solution([1, 3, 5, 6, 7, 10]));
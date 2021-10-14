/*
    
*/

function solution(nums) {
    let total = nums.reduce((acc, cur) => acc + cur, 0);
    let answer = "NO";

    function DFS(L, sum) {
        if (L === nums.length) {
            if (total - (sum) === sum) answer = "YES";
        } else {
            for (let i = 0; i < nums.length; i++) {
                DFS(L + 1, sum + nums[i]);
                DFS(L + 1, sum);
            }
        }
    }
    DFS(0, 0);
    return answer;
}
console.log(solution([1, 3, 5, 6, 7, 10]));
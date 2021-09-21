/*
    바둑이들 데리고 시장에 가려고 한다.

    C킬로그램 넘게 태울 수 없음.
    가장 무겁게 태우고 싶음.

    가장 무거운 무게 return
*/

function solution(nums, max) {
    let answer = Number.MIN_SAFE_INTEGER;
    let n = nums.length;
    function DFS(L, sum) {
        if(L===n) {
            if(sum<max) {
                answer = Math.max(answer, sum);
            }
        }
        else {
            DFS(L+1, sum + nums[L]);
            DFS(L+1, sum);
        }
    }
    DFS(0, 0);
    return answer;
} 
console.log(solution([81, 58, 42, 33, 61], 259));
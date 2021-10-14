function solution(nums, max) {
    // 투포인터로 못품
    let answer = 0;

    function DFS(L, sum) {
        if (L === nums.length) {
            if (sum < max) {
                answer = Math.max(answer, sum);
            }
        } else {
            for (let i = 0; i < nums.length; i++) {
                // DFS(L + 1, sum + nums[i]);
                // DFS(L + 1, sum);
            }
        }
    }
    DFS(0, 0);
    return answer;
}
// console.log(solution([81, 58, 42, 33, 61], 259)); // 242
console.log(solution([34, 56, 55, 67, 33, 76, 63, 43], 379)); // 242
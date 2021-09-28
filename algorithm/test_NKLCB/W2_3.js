/*
    최대 길이 연속 부분수열
    
*/

function solution(nums, k) {
    let cnt = 0;
    let lt = 0;
    let answer = 0;
    for (let rt = 0; rt < nums.length; rt++) {
        if (nums[rt] === 0) {
            cnt++;
        }
        while (cnt > k) {
            if (nums[lt] === 0) cnt--;
            lt++;
        }
        answer = Math.max(answer, rt - lt + 1);
    }
    return answer;
}
console.log(solution([1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1], 2));
/*
    연속 부분 수열 합이 특정 숫자 M이 되는 경우 몇번있는지
    1 2 1 3 1 1 1 2 일 때
    M이 6이면 {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}
*/

function solution(nums, m) {
    let lt = 0;
    let sum = 0;
    let cnt = 0;
    for (let rt = 0; rt < nums.length; rt++) {
        sum += nums[rt];
        if (sum === m) {
            cnt++;
        }
        while (sum > m) {
            sum -= nums[lt];
            lt++;
            if (sum === m) {
                cnt++;
            }
        }
    }
    return cnt;
}
console.log(solution([1, 2, 1, 3, 1, 1, 1, 2], 6)); // 3
/*
    연속 부분수열
    
    N개의 수로 이루어진 수열이 있을 때
    연속부분수열 곱이 특정숫자 M이하가 되는 경우 몇번인지?
*/

function solution(nums, max) {
    let answer = 0;
    let n = nums.length;
    let lt = 0;
    let sum = 1;
    let tmp = 0;
    for (let rt = 0; rt < n; rt++) {
        sum *= nums[rt];
        if (sum <= max) {
            answer++;
        }
        while (sum > max) {
            sum /= nums[lt];
            lt++;
        }
        tmp += rt - lt + 1
    }
    return tmp;
}
// console.log(solution([1, 2, 3], 1));
console.log(solution([2, 3, 3, 2, 5], 20));
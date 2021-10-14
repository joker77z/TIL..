/*
    N일 동안의 매출기록을 주고 K일 동안 최대 매출액이 얼마인지 구해라.
    만약 N=10이고 K=3이면
    12 15 11 20 25 10 20 19 13 15
    최대 매출액 56
*/

function solution(nums, k) {
    let answer = 0;
    let lt = 0;
    let sum = 0;
    let cnt = 0;
    for (let rt = 0; rt < nums.length; rt++) {
        sum += nums[rt];
        cnt++;
        while (cnt > 3) {
            sum -= nums[lt];
            lt++;
            cnt--;
        }
        answer = Math.max(answer, sum);
    }
    return answer;
}
console.log(solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3));
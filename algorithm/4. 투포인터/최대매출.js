/*
    N일동안 매출 기록 주고 연속된 K일 동안 최대 매출액 얼마인지.
    만약 N=10이고 10일간 매출기록이 아래와 같을 때 K=3이면?
    12 15 11 20 25 10 20 19 13 15
    11 20 25 가 최대 매출액 return 56

    Pseudo Code
    기본 : 2개 값으로 sum해놓고

    반복문에서
    뒤에 한개 더하고
    기존꺼와 비교하고
    한개뺴고.
*/

function solution(nums, k) {
    let answer = 0;
    let n = k-1;
    let sum = 0;
    let lt = 0;
    for(let i=0; i<n; i++) {
        sum += nums[i];
    }

    for(let rt=n; rt<nums.length; rt++) {
        sum += nums[rt];
        answer = Math.max(answer, sum);
        sum -= nums[lt];
        lt++;
    }
    return answer;
}

console.log(solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3))
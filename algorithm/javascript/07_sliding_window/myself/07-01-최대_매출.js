/*
    문제
    N일동안 기록. K일 매출액의 합 중 최대값
    N=10, K=3이면
    12 15 11 20 25 10 20 19 13 15
    중 최대매출액은 11+20+25 = 56

    풀이
    앞에 3개 넣어놓고 다음꺼 한개넣을 때 제일앞에 한개씩 빼면서
    Math.max(sum, answer)한다.
*/

// planA
function solutionA(nums, k) {
    let sum = 0;

    for(let i=0; i<k-1; i++) {
        sum+=nums[i];
    }
    answer = sum;

    for(let i=k-1; i<nums.length; i++) {
        sum+=nums[i];
        answer = Math.max(answer, sum);
        sum-=nums[i-(k-1)]
    }
    return answer;
}

console.log(solutionA([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3));

// planB
function solutionB(nums, k) {
    let sum = 0;
    for(let i=0; i<k; i++) {
        sum+=nums[i];
    }
    answer = sum;
    for(let i=k; i<nums.length; i++) {
        sum+=(nums[i] - nums[i-k]);
        answer = Math.max(answer, sum);
    }
    return answer;
}
console.log(solutionB([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3));
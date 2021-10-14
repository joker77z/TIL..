/*
    연속부분수열의 합이 특정숫자 M되는 경우 몇번인지.

    예시
    N=8, M=6이고
    1 2 1 3 1 1 1 2
    일 때 합이 M되는 부분 수열은 {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}

    풀이
    1. lt, rt를 이용해서
    for(rt=0; ~ rt<nums.length;)
        sum에 nums[rt]더해가면서 
        넘었을 때 while(sum>m)일 때 sum-=nums[lt++] 해준다.
        그러다가 if(sum===m)일 때 answer++;
*/

function solution(nums, m) {
    let answer = 0;
    let sum = 0;
    let lt = 0;
    for(let rt=0; rt<nums.length; rt++) {
        sum += nums[rt];
        if(sum === m) answer++;
        while(sum>m) {
            sum -= nums[lt];
            lt++;
            if(sum === m) answer++;
        }
    }
    return answer;
}

console.log(solution([1, 2, 1, 3, 1, 1, 1, 2], 6))
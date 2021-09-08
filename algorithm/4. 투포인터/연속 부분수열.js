/*
    연속 부분수열 합이 M되는 경우 몇번인지 return 
    m이 6이라면 합이 6이 되는 연속부분수열은 총 3가지다.

    Pseudo Code
    lt, rt를 0으로 선언하고
    for(rt =0 ~ rt = n.length)
        sum += nums[rt];
        if(sum === m) answer++;
        while(sum>m) {
            sum = sum - nums[rt];
            rt++;
        }
        return answer;
*/

function solution(nums, m) {
    let lt = 0;
    let answer = 0;
    let sum = 0; 
    for(let rt = 0; rt<nums.length; rt++) {
        sum = sum + nums[rt];
        if(sum === m) {
            answer++;
        }
        while(sum>m) {
            sum = sum - nums[lt];
            lt++;
            if(sum === m) {
                answer++;
            }
        }
    }
    return answer;
}

console.log(solution([1, 2, 1, 3, 1, 1, 1, 2], 6));
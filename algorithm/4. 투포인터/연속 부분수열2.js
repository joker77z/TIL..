/*
    M이하가 되는 경우 몇번인지 return

    1 3 1 2 3 일 때 m이 5면 총 10가지.
    모든 부분 수열을 구하는 것.

    Pseudo Code
        
*/

function solution(nums, m) {
    let answer = 0;
    for(let rt=0; rt<nums.length; rt++) {
        let sum = 0;
        let lt = rt;
        while(sum < m) {
            sum = sum + nums[lt];
            if(sum>m || isNaN(sum)) break;
            answer++;
            // console.log(sum, rt, lt, nums[lt], answer)
            lt++;
        }
    }
    return answer;
}

console.log(solution([1, 3, 1, 2, 3], 5))
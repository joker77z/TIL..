/*
    Q. N개의 수열, 합이 m이 되는 경우의 수.

    -. sum, lt, rt를 이용한다.

    1. rt를 하나씩 이동하면서 sum에 계속 더한다.
        2. 만약 sum이 m을 넘는다면
            3. sum이 m이 될 때 까지 제일 앞에 있는 항목을 전진하면서 빼준다.
*/

function solution(nums, m) {
    let lt = 0;
    let sum = 0;
    let answer = 0;

    // 1. rt를 하나씩 이동하면서 sum에 계속 더한다.
    for(let rt=0; rt<nums.length; rt++) {
        sum += nums[rt];
        if(sum === m) answer++;
        // 2. 만약 sum이 m을 넘는다면
        while(sum>m) {
            // 3. sum이 m이 될 때 까지 제일 앞에 있는 항목을 전진하면서 빼준다.
            sum -= nums[lt];
            lt++;
            if(sum === m) answer++;
        }
    }
    return answer;
}

console.log(solution([1, 2, 1, 3, 1, 1, 1, 2], 6))
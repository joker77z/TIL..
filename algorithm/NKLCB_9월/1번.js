/*
    홀수의 개수가 k개인 연속부분 수열 개수를 구하려 한다.

    PseudoCode
    for(i=0 ~ i<n)
        if nums[i] %2 === 1 cnt++;
        if(cnt===k) 
            answer++;
        while(cnt>k)
            if nums[lt]%2 === 1 cnt--;
            lt++
    

    예시
    nums = [1, 2, 1, 1, 2] 
    m = 2
*/

function solution(nums, k) {
    let lt = 0;
    let cnt = 0;
    let answer = 0;
    for (let rt = 0; rt < nums.length; rt++) {
        // 홀수일 때
        if (nums[rt] % 2 === 1) cnt++;
        if (cnt === k) {
            answer++;
        }
        while (cnt > k) {
            lt++;
            cnt--;
        }
        answer = answer + (rt - lt + 1)
    }
    return answer;
}
console.log(solution([1, 2, 1, 1, 2], 2)); // 5
console.log(solution([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2)); // 16
// console.log(solution([2, 4, 6], 1)); // 0
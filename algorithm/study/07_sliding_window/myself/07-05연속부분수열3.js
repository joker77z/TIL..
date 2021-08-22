/*
    연속부분 수열 합이 M 이하가 되는 경우 몇번인지.

    예시
    N=5, M=5고 수열이 1 3 1 2 3 이면
    합이 5이하되는 연속 부분수열은
    {1}, {3}, {1}, {2}, {3}, {1,3}, {1, 2} ... 총 10가지

    풀이
    lt, rt를 0으로 두고
    sum에다가 nums[rt]를 더하고 만약 sum이 m보다 더 커버리면
    while(sum>m) { // sum이 감소해야 한다.
        sum = sum - num[lt++] // 앞에서부터 하나씩 전진 시키면서 감소시킨다.
    }
    
    point: 이게 핵심인데 하나의 공식이라고 생각해도 될 것 같다.
    answer = answer + (rt-lt+1);
*/

function solution(nums, m) {
    let answer = 0;
    let sum = 0;
    let lt = 0;
    

    for(let rt=0; rt<nums.length; rt++) {
        sum += nums[rt];
        // if(sum<m) answer++;
        while(sum>m) {
            sum -= nums[lt++];
        }
        answer += (rt-lt+1);
    }
    return answer;
}

console.log(solution([1, 3, 1, 2, 3], 5));
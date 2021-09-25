/*
    if 만약에 L를 count개수만큼 세었다면! 그러면 if문으로 들어오게한다.
    그다음 안에 있는 if문이 통과안되더라도 계속 3개만 세도록 하는것이 가능하다.

    
*/

function solution(nums, count, mul) {
    let answer = 0;
    let tmp = [];

    function DFS(L, s, sum) {
        if (L === count) {
            if (sum % mul === 0) answer++;
        }
        // if (L === count && sum % mul === 0) {
        //     answer++;
        // } 
        else {
            for (let i = s; i < nums.length; i++) {
                tmp[L] = nums[i];
                console.log(tmp, answer, sum)
                DFS(L + 1, i + 1, sum + nums[i]);
            }
        }
    }
    DFS(0, 0, 0);
    return answer;
}
console.log(solution([2, 4, 5, 8, 12], 3, 6));
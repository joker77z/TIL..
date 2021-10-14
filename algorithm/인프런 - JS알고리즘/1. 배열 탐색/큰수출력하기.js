/*
    자신의 바로 앞 수보다 큰 수만 출력하시오.

    in
    7 3 9 5 6 12
    
    out
    7 9 6 12

    > Pseudo Code
    첫번째 있는 수를 answer 배열에 넣는다.
    i=1부터 수를 순차적으로 받는다.
        i=0과 i=1을 비교해서 i=1이 더 크면 출력한다.
*/

function solution(nums) {
    let answer = [];
    answer.push(nums[0]);
    for(let i=1; i<nums.length; i++) {
        if(nums[i-1] < nums[i]) {
            answer.push(nums[i])
        }
    }
    return answer;
}
console.log(solution([7, 3, 9, 5, 6, 12]))

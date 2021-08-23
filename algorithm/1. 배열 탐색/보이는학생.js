/*
    일렬로 서있는 학생의 키가 주어질 때
    선생님이 볼 수 있는 학생의 수
    (앞에 서 있는 사람들보다 크면 보인다.)

    in
    [130, 135, 148, 140, 145, 150, 150, 153]
    
    out
    5

    > Pseudo Code
    for i = 0 to nums.length
        뒤에꺼보다 미만이면 answer++한다.
        if (nums[i] < nums[i+1]) answer++;

*/

function solution(nums) {
    let answer = 0;
    let max = Number.MIN_SAFE_INTEGER;
    for(let i=0; i<nums.length; i++) {
        if(nums[i]<nums[i+1] && max<nums[i+1]) {
            max = nums[i];
            answer++;
        }
    }
    return answer;
}
console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]))

/*
    ◽️ 문제
    0과 1로 구성된 문자열중에서 연속된 구간을 뒤집어서 문자열을 하나로 통일하려고 한다.
    최소로 뒤집어도 되는 회수를 구하라.


    ◽️ 풀이
    처음 원소를 저장한다.

    for(i=1 ~ i<nums.length) 로 진행하는데
        nums[i-1] 과 nums[i]를 비교한다.
        다르면 해당 숫자를 카운트에 더한다.

    ◽️ 깨달은 것
    이전 것과 비교할 때 어렵게 느껴지면
    처음 원소를 초기화 하고 for(let i=1)부터 진행하고 nums[i-1]과 nums[i]를 비교하는 식으로 한다.
    
*/
function solution(nums) {
    let one = 0;
    let zero = 0;
    let answer = 0;

    // 첫번쨰 원소 0이면 zero++ 1이면 one++
    nums[0] === '0' ? zero++ : one++;

    // 그 다음 원소부터 이전과 비교.
    for(let i=1; i<nums.length; i++) {
        // 이전에 있는 것과 다를 때만 개수를 센다.
        if(nums[i-1] !== nums[i]) {
            if(nums[i] === '0') zero++;
            else one++;
        }
    }
    answer = Math.min(zero, one);
    return answer;
}

// console.log(solution("100001111")); // 0을 1번만 바꿔주면 된다. answer = 1
// console.log(solution("000001111")); // 0과 1 붙어있는 개수가 똑같다. answer = 1
// console.log(solution("111110000")); // 1과 0 붙어있는 개수가 똑같다. answer = 1
// console.log(solution("101010001")); // 떨어져있는 1개수가 더 많다. 0을 1로 바꾼다. answer = 3
// console.log(solution("010110001")); // 떨어져있는 1개수가 더 많다. 0을 3번 바꾼다. answer = 3
console.log(solution("10010111101")); // 떨어져있는 1개수가 더 많다. 0을 3번 바꾼다. answer = 3
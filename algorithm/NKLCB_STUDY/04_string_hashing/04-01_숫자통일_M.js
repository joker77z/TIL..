/*
    ◽️ 문제
    0과 1로 구성된 문자열중에서 연속된 구간을 뒤집어서 문자열을 하나로 통일하려고 한다.
    최소로 뒤집어도 되는 회수를 구하라.


    ◽️ 풀이
    연속된 1과 0이 있을 때 바뀌는 부분에서 카운트 되는 방법을 생각해봤다.


    ◽️ 깨달은 것
    nums[length-1]과 nums[length](없는 객체) 와 비교했을 때 다르다고 해도 true이고 오류가 발생하지 않는다.
    javascript만 그런듯 하다.
    
*/

// 12:10
function solution(nums) {
    // 1. 연속된 1과 0을 카운트한다.
    let one = 0;
    let zero = 0;
    let answer = 0;

    for(let i=0; i<nums.length; i++) {
        if(nums[i]!==nums[i+1]) {
            nums[i] === '0' ? zero++ : one++;
            console.log('다르다')
        }
        console.log(`인덱스 : ${i} 번호 : ${nums[i]} zero : ${zero}, one : ${one}`);
    }
    // console.log(`zero : ${zero}, one : ${one}`);
    // if(nums[nums.length-1] !== nums[nums.length-2]) {
    //     nums[nums.length-1] === '0' ? zero++ : one++;
    // }
    // console.log(`zero : ${zero}, one : ${one}`);
    answer = Math.min(zero, one);
    return answer;
}

// console.log(solution("100001111")); // 0을 1번만 바꿔주면 된다. answer = 1
// console.log(solution("000001111")); // 0과 1 붙어있는 개수가 똑같다. answer = 1
// console.log(solution("111110000")); // 1과 0 붙어있는 개수가 똑같다. answer = 1
// console.log(solution("101010001")); // 떨어져있는 1개수가 더 많다. 0을 1로 바꾼다. answer = 3
// console.log(solution("010110001")); // 떨어져있는 1개수가 더 많다. 0을 3번 바꾼다. answer = 3
console.log(solution("10010111101")); // 떨어져있는 1개수가 더 많다. 0을 3번 바꾼다. answer = 3
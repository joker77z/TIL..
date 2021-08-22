
/*

자동차 10부제는 자동차 번호에서 일의 자리 숫자, 날짜의 일의 자리 숫자가 일치하면 금지하는 것.
예를들어 일의자리 숫자가 7이면 7일, 17일, 27일에 운행을 못한다.

10부제를 위반하는 자동차 대수를 센다.
날짜의 일의 자리 숫자 주어지고 7대 자동차 번호 끝 두자리 수가 주어졌을 떄 위반하는 대수는?

3
25, 23, 11, 47, 53, 17, 33
= 3

0
12, 20, 54, 30, 87, 91, 30

*/

function solution(nums, k) {
    nums = nums.map(el => String(el));
    let answer = 0;
    for(let x of nums) {
        if(x.slice(x.length-1, x.length) === String(k)) {
            answer++;
        }
    }
    return answer;
}

console.log(solution([25, 23, 11, 47, 53, 17, 33], 3))
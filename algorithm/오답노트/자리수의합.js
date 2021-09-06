/*
    자리수들의 합을 구하고 합이 최대인 값을 return.
    동일한 값이 나오면 더 큰 값을 return.

    Pseudo Code
    1. 숫자를 문자로 바꾸고 자리수들의 합을 구한다.
    for (x of nums)
        x = x.map(el => String(el))
        for(n of x)
            tmp += n
        
*/

function solution(nums) {
    let answer = 0;
    let tmpAnswer = 0;
    nums = nums.map(el=> String(el));
    for(let n of nums) {
        let tmpSum = 0;
        for(let x of n) {
            tmpSum += Number(x);
        }
        if(tmpSum === tmpAnswer) answer = Math.max(answer, n);
        else {
            if(tmpSum > tmpAnswer) {
                tmpAnswer = tmpSum;
                answer = n;
            }
        }
    }
    return answer;
}

console.log(solution([128, 460, 603, 40, 521, 137, 123])); // 137
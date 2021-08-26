/*
    자리수들을 더해서 합이 최대인 값을 출력.
    만약 값이 같다면 원래 숫자가 더 큰 값을 출력.

    Pseudo Code
    for(x of nums)
        for(n of x)
            sum += n
        if(ans === sum) ans = Math.max(x, tmp)
        else
            if(sum > ans)
                ans = sum
                tmp = x
*/


function solution(nums) {
    let sum = 0;
    let answer = Number.MIN_SAFE_INTEGER;
    let tmp=0;
    nums = nums.map(el=> String(el));
    for(x of nums) {
        sum = 0;
        for(let i=0; i<x.length; i++) {
            sum += Number(x[i]);
        }
        if(tmp === sum) answer = Math.max(answer, x);
        else {
            if(sum > tmp) {
                answer = x;
                tmp = sum;
            }
        }
    }
    return answer;
}


// console.log(solution([128, 460, 603, 40, 521, 137, 123])); // 137



function solutionB(nums) {
    let answer, max = Number.MIN_SAFE_INTEGER;


    for(let x of nums) {
        // 원본을 바꾸지 않는다. tmp에 x를 저장한다. 숫자니까 깊은 복사.
        let sum = 0, tmp = x;
        // 10으로 나누고 나머지 값을 계속 sum에 더해준다. 몫이 없을 때까지 계속 반복한다.
        while(tmp) {
            sum += tmp%10;
            tmp = Math.floor(tmp/10);
            // tmp = parseInt(tmp/10);
        }
        if(max < sum) {
            max = sum;
            answer = x;
        }
        else if (max === sum) {
            if(x>answer) answer = x;
            // answer = Math.max(answer, x);
        }
    }
    return answer;
}


console.log(solutionB([128, 460, 603, 40, 521, 137, 123])); // 137


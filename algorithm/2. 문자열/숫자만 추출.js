/*
    숫자만 추출해서 반환.
    0208이면 208을 반환.

    Pseudo Code
    for(x of str)
        if x가 숫자면 문자인 상태로
            ans += x
    문자를 숫자 형태로 변환

    ✅ x가 숫자라면 !isNaN(x)
    ✅ 숫자화시키는 방법 parseInt, Number
*/
function solution(str) {
    let ans = "";
    for(let x of str) {
        if(!isNaN(x)) {
            ans += x;
        }
    }
    // ans = parseInt(ans);
    ans = Number(ans);
    return ans;
}

console.log(solution("g0en2T0s8eSoft"))



function solutionB(str) {
    let ans = 0;
    for(let x of str) {
        if(!isNaN(x)) {
            ans = ans*10+Number(x);
        }
    }
    return ans;
}

console.log(solutionB("g0en2T0s8eSoft"))
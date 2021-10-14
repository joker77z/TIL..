/*
0과 1로 구성된 문자열.
연속된 구간을 하나의 숫자로 통일.
최소 몇번만에 숫자 통일 가능?

풀이=================
첫번째를 변수에 지정해놓고. 0이면 zero+1. 1이면 one+1

그 다음에 나오는게 틀렸을 때. 

*/


function solution(s) {
    let cnt_zero = 0;
    let cnt_one = 0;

    if(s[0] === '0') cnt_zero ++;
    else cnt_one ++;

    for(let i=1; i<s.length-1; i++) {
        if(s[i-1] !== s[i]) {
            if(s[i] === '0') cnt_zero ++;
            else cnt_one ++;
        }
    }
    return Math.min(cnt_one, cnt_zero)
}

console.log(solution('10010111100'))
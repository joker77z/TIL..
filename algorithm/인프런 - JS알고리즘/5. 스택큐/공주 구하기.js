/*
    공주 구히기
    k번째 사람을 계속 제외하다가 1명남았을 때 그 1명숫자 출력

    Pseudo Code
    8명이라 하면 1~8명을 stack에 넣어놓고
    k번째 되기전까지 shift한 것을 뒤에 push하고
    k번째를 계속 shift하면서 마지막 1개 남을 때까지 한다.
*/

function solution(people, target) {
    let stack = Array.from({length: people}, (v, i)=>i+1);
    console.log(stack);
    while(stack.length>1) {
        for(let cnt=0; cnt<target-1; cnt++) {
            stack.push(stack.shift());
        }
        stack.shift();
    }
    console.log(stack)
} 
console.log(solution(8, 3));
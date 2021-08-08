/*
    문제
    연속된 두 문자 같으면 지운다.
    결과는 지우고지우고 해서 남은 문자만 출력한다.

    풀이
    스택을 사용한다.

    스택에 아무것도 없을 때 / 있을 때로 나뉜다.
    1. 비어있으면 s 하나를 푸쉬한다.
    2. 비어있지 않으면 stack의 stack[stack[length-1]]과 추가할 data[i]를 비교해서 같다면 stack.pop()을 해버리고
    같지 않다면 stack.push(data[i])를 한다.
*/

function solution(s) {
    let stack = [];
    let answer;
    for(let i=0; i<s.length; i++) {
        if(stack[stack.length-1] === s[i]) {// 스택의 마지막과 이번에 들어올 요소가 같다면
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    answer = stack.join('');
    return answer;
}

console.log(solution("acbbcaa"))
console.log(solution("bacccaba"))
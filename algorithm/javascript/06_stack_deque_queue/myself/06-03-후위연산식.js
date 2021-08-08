/*
    문제
    352+*9-
    연산식이 뒤에 온다.

    풀이
    1. 숫자일 때 스택에 더한다.
    2. 연산식을 만나면 앞에 있는 2개를 pop해서 꺼내고 pop한 2개를 연산한다.
*/

function solution(s) {
    let answer = 0;
    let stack = [];
    for(x of s) {
        // 숫자면
        if(!isNaN(x)) stack.push(Number(x));
        // 숫자가 아니면
        else {
            a = stack.pop();
            b = stack.pop();
            if(x === '*') stack.push(b*a);
            else if(x === '+') stack.push(b+a);
            else if(x === '-') stack.push(b-a);
            else if(x === '/') stack.push(b/a);
        }
    }
    answer = stack.join('');
    return answer;
}

console.log(solution("352+*9-"));
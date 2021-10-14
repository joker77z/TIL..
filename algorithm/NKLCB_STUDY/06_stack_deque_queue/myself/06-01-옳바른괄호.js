/*
    문제
    옳바른 괄호일 시 YES
    
    풀이
    여는 괄호 ( 가 나왔을 때 stack에 추가.

    닫는 괄호 나왔을 때 스택에서 빼주는데
    더이상 뺄 것이 없다면 return "NO"

    마지막에서 만약 스택에 뭐가 남아있으면 return "NO"
*/

function solution(data) {
    let answer = "YES";
    let stack = [];
    for(let i=0; i<data.length; i++) {
        if(data[i] === '(') {
            stack.push(data[i]);
        } else {
            stack.pop(data[i]);
        }
    }
    if(stack.length>0) {
        answer = "NO";
    }
    return answer;
}

console.log(solution("(()(()))(()"));
console.log(solution("(())"));